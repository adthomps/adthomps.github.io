# PROJECT_RULES.md

## Architecture & Guardrails

- **Static only**: No server-side code, no build step, no frameworks. All files are served as-is from the repo.
- **Templates**: All global navigation, header, and footer HTML lives in `templates/` and is injected at runtime by loader scripts in `scripts/JS/`.
- **Loader pattern**: Pages that use templates must include `<div id="header"></div>` and `<div id="footer"></div>`. Loader scripts must always call `adjustLinks()` after fragment insertion.
- **No secrets in repo**: Never commit API keys, transaction keys, or other secrets. Only public test keys (e.g., Accept.js `clientKey`) are allowed in client code.
- **No duplicate templates**: Update only the files in `templates/` for global navigation/footer/sidebar changes.
- **No deletion of loader scripts**: Never remove any `scripts/JS/loadHeaderFooter_*` files; they are used by different pages.
- **Relative path logic**: Loader scripts must compute depth using `window.location.pathname.split("/")` and adjust links accordingly.
- **Assets**: All images in `images/`, CSS in `scripts/CSS/`, JS in `scripts/JS/`.
- **Sitemap**: Update `sitemap.txt` by running `generate_sitemap.bat` (Windows) or the Python snippet inside it (other OS).

## Folder conventions
- `anet/`, `cybs/`, `vap/`: Payment and integration demos. See per-folder README for details.
- `developer/`, `support/`, `product/`, `techprojects/`: Section-specific content.
- `templates/`: Only place to edit global navigation/footer/sidebar.

## Validation
- No schema validation is enforced; all HTML/JS is manually tested in browser.
- If adding validation, centralize logic in a single JS file per form/feature.

---
_Last updated: January 2026_