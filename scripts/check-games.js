#!/usr/bin/env node
// Check that games/, games.js and the README table agree. Run before merging:
//   node scripts/check-games.js [repo-dir]
// CI runs it on every pull request (against the merge result) and on main.
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(process.argv[2] || path.join(__dirname, ".."));
const errors = [];
const fail = (msg) => errors.push(msg);

// Leftover conflict markers anywhere in tracked text files
const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) => {
  if (d.name === ".git" || d.name === "node_modules") return [];
  const p = path.join(dir, d.name);
  return d.isDirectory() ? walk(p) : [p];
});
for (const file of walk(root)) {
  if (!/\.(html|js|css|md|sh|yml|json)$/.test(file)) continue;
  const text = fs.readFileSync(file, "utf8");
  if (/^(<<<<<<<|>>>>>>>) /m.test(text) || /^=======$/m.test(text)) {
    fail(`${path.relative(root, file)} contains merge conflict markers`);
  }
}

// Registry
let games = [];
try {
  const sandbox = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.join(root, "games.js"), "utf8"), sandbox);
  games = sandbox.window.GAMES || [];
} catch (e) {
  fail(`games.js does not run: ${e.message}`);
}
if (errors.length) report();
if (!fs.readFileSync(path.join(root, "games.js"), "utf8").includes("// @new-games")) {
  fail("games.js lost the // @new-games marker used by scripts/new-game.sh");
}

const seen = new Set();
for (const g of games) {
  const label = `games.js entry "${g.slug}"`;
  for (const field of ["slug", "title", "icon", "color", "description"]) {
    if (typeof g[field] !== "string" || !g[field]) fail(`${label}: missing ${field}`);
  }
  if (!Array.isArray(g.tags) || !g.tags.length) fail(`${label}: missing tags`);
  else if (g.tags.includes("new")) fail(`${label}: still has the placeholder tag "new"`);
  if (seen.has(g.slug)) fail(`${label}: duplicate slug`);
  seen.add(g.slug);
}

// Folders
const folders = fs.readdirSync(path.join(root, "games"), { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name);
for (const slug of folders) {
  if (!seen.has(slug)) fail(`games/${slug} has no entry in games.js`);
  for (const file of ["index.html", "README.md"]) {
    if (!fs.existsSync(path.join(root, "games", slug, file))) fail(`games/${slug}/${file} is missing`);
  }
  const html = path.join(root, "games", slug, "index.html");
  if (fs.existsSync(html) && !fs.readFileSync(html, "utf8").includes(`data-game="${slug}"`)) {
    fail(`games/${slug}/index.html does not load shared/layout.js with data-game="${slug}"`);
  }
}
for (const g of games) {
  if (!folders.includes(g.slug)) fail(`games.js entry "${g.slug}" has no games/${g.slug} folder`);
}

// README table: same games, same order, same icon and title as games.js
const readme = fs.readFileSync(path.join(root, "README.md"), "utf8");
const rows = [];
for (const line of readme.split("\n")) {
  const m = line.match(/^\| (.+?) \| \[`games\/([^`]+)`\]\(games\/([^)]+)\) \|/);
  if (!m) continue;
  if (m[2] !== m[3]) fail(`README row for ${m[2]} links to games/${m[3]}`);
  rows.push({ name: m[1], slug: m[2] });
}
const rowSlugs = rows.map((r) => r.slug);
for (const g of games) {
  const count = rowSlugs.filter((s) => s === g.slug).length;
  if (count === 0) fail(`README table has no row for ${g.slug}`);
  if (count > 1) fail(`README table lists ${g.slug} ${count} times`);
}
for (const r of rows) {
  const g = games.find((x) => x.slug === r.slug);
  if (!g) fail(`README table lists ${r.slug}, which is not in games.js`);
  else if (r.name !== `${g.icon} ${g.title}`) fail(`README row "${r.name}" should be "${g.icon} ${g.title}"`);
}
const order = games.map((g) => g.slug).filter((s) => rowSlugs.includes(s));
const uniqueRows = rowSlugs.filter((s, i) => rowSlugs.indexOf(s) === i);
if (order.join() !== uniqueRows.join()) {
  fail(`README table order does not match games.js:\n    games.js: ${order.join(", ")}\n    README:   ${uniqueRows.join(", ")}`);
}

function report() {
  console.error(`Game registry check failed (${errors.length}):`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}

if (errors.length) report();
console.log(`Game registry OK: ${games.length} games, folders, games.js and README agree.`);
