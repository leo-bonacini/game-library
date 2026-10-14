// Shared layout for the library and every game.
// Load it in <head> so the saved theme is applied before the first paint:
//   <script src="../../games.js"></script>
//   <script src="../../shared/layout.js" data-game="<slug>"></script>
// It adds the top bar (back link, game title, theme toggle) at the start of <body>.
// Elements marked with data-gl-action are moved into the bar, next to the theme toggle.
(function () {
  const STORAGE_KEY = "gl-theme";
  const script = document.currentScript;
  const slug = script && script.dataset.game;
  const libraryHref = script && script.dataset.library ? script.dataset.library : "../../index.html";
  const root = document.documentElement;
  const darkQuery = window.matchMedia ? matchMedia("(prefers-color-scheme: dark)") : null;

  function savedTheme() {
    try { return localStorage.getItem(STORAGE_KEY); } catch { return null; }
  }

  function systemTheme() {
    return darkQuery && darkQuery.matches ? "dark" : "light";
  }

  function applyTheme(theme) {
    root.dataset.theme = theme;
    const btn = document.getElementById("gl-theme-btn");
    if (btn) {
      btn.textContent = theme === "dark" ? "☀️" : "🌙";
      btn.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
      btn.title = btn.getAttribute("aria-label");
    }
    window.dispatchEvent(new CustomEvent("gl-themechange", { detail: { theme } }));
  }

  function setTheme(theme) {
    try { localStorage.setItem(STORAGE_KEY, theme); } catch {}
    applyTheme(theme);
  }

  applyTheme(savedTheme() || systemTheme());

  if (darkQuery && darkQuery.addEventListener) {
    darkQuery.addEventListener("change", () => { if (!savedTheme()) applyTheme(systemTheme()); });
  }
  // Keep other open library/game tabs in sync.
  window.addEventListener("storage", (e) => {
    if (e.key === STORAGE_KEY) applyTheme(e.newValue || systemTheme());
  });

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  }

  function buildBar() {
    const game = slug && (window.GAMES || []).find((g) => g.slug === slug);
    const title = game ? game.title : document.title;
    const icon = game ? game.icon : "";

    const bar = document.createElement("div");
    bar.setAttribute("role", "banner");
    bar.className = "gl-bar";
    bar.innerHTML = slug
      ? `<div class="gl-bar-start">
           <a class="gl-back" href="${escapeHtml(libraryHref)}"><span aria-hidden="true">←</span><span class="gl-back-label">Library</span></a>
         </div>
         <h1 class="gl-bar-title">${icon ? `<span aria-hidden="true">${escapeHtml(icon)}</span>` : ""}${escapeHtml(title)}</h1>
         <div class="gl-bar-end"></div>`
      : `<div class="gl-bar-start">
           <a class="gl-brand" href="${escapeHtml(libraryHref)}"><span aria-hidden="true">🕹️</span>Game Library</a>
         </div>
         <div></div>
         <div class="gl-bar-end"></div>`;

    const end = bar.querySelector(".gl-bar-end");
    document.querySelectorAll("[data-gl-action]").forEach((el) => end.appendChild(el));

    const themeBtn = document.createElement("button");
    themeBtn.type = "button";
    themeBtn.id = "gl-theme-btn";
    themeBtn.className = "gl-icon-btn";
    themeBtn.addEventListener("click", () => setTheme(root.dataset.theme === "dark" ? "light" : "dark"));
    end.appendChild(themeBtn);

    document.body.prepend(bar);
    applyTheme(root.dataset.theme);
  }

  if (document.body) buildBar();
  else document.addEventListener("DOMContentLoaded", buildBar);

  window.GameLibrary = { setTheme, getTheme: () => root.dataset.theme };
})();
