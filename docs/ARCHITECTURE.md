# ARCHITECTURE.md

This site is a static HTML/CSS/JS repository, directly served by GitHub Pages. There is no build step, backend, or dynamic server logic.

## Key Patterns
- **Template injection**: Header, footer, and sidebar HTML fragments are in `templates/` and injected at runtime by loader scripts in `scripts/JS/`.
- **Loader scripts**: Pages with `<div id="header"></div>` and `<div id="footer"></div>` use a loader (e.g., `loadHeaderFooter_v3.js`) to fetch and inject templates, then call `adjustLinks()` to fix relative paths.
- **Section navigation**: Navigation fragments (`index-level0.html`, etc.) are used for different site sections.
- **Assets**: Images in `images/`, CSS in `scripts/CSS/`, JS in `scripts/JS/`.

## Folder Structure
- `anet/`, `cybs/`, `vap/`: Payment and integration demos.
- `templates/`: Global navigation/footer/sidebar.
- `scripts/`: All JS and CSS helpers.

## No API/Worker/Cloud Bindings
- No internal or public API endpoints are present.
- No D1/KV/R2/Queues or wrangler.toml config.

---
_Last updated: January 2026_