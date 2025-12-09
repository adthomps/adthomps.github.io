# Test Site

This repository is a plain static site used for demos and integration samples for payment flows (Authorize.Net / VAP examples), product pages, and small sample applications. The site is intentionally simple — there is no build system; HTML/CSS/JS files under the repo are served directly.

Quick overview
- Static site: pages are served as-is from the repository (GitHub Pages compatible).
- Template injection: global header/footer/sidebar fragments live in `templates/` and are injected at runtime by the loader scripts in `scripts/JS/` (e.g. `loadHeaderFooter_v2.js`, `loadHeaderFooter_v3.js`). Pages that expect dynamic fragments include `<div id="header"></div>` and `<div id="footer"></div>`.
- VAP examples: the `vap/` folder contains sandbox/demo pages for multiple Authorize.Net flows (Accept.js, Accept Hosted, Accept Customer, SIM/HOP/DPM samples). See `vap/README.md` for the top-level summary and the subfolder READMEs for per-folder details.

Architecture notes
- No server required: most flows are static demonstrations. Some examples simulate server-side operations in-browser for sandbox testing (e.g., client-side fingerprinting); these are for demonstration only and must be moved server-side in production.
- Loader responsibilities: the loader scripts compute relative paths, inject templates, and call `adjustLinks()` so relative `href` and `src` attributes resolve correctly depending on page depth.
- Assets: shared assets (images, CSS, JS) live under `images/` and `scripts/` and are referenced from pages across the site.

Authentication & security (summary)
- `apiLoginID` + `transactionKey`: used for `merchantAuthentication` in server-side requests to Authorize.Net (`createTransactionRequest`, `getHostedPaymentPageRequest`). `transactionKey` is secret and must never be embedded in client-side code or public repos.
- `clientKey`: public key used by Accept.js to tokenize payment data in the browser. `clientKey` is safe to include in client code but cannot be used to perform transactions alone.
- Hosted tokens: `getHostedPaymentPageRequest` / `getHostedProfilePageRequest` return short-lived tokens that are posted to hosted endpoints to render secure Authorize.Net UIs.
- SIM/HOP fingerprints: require HMAC or fingerprint generation using the `transactionKey` — compute these server-side. The repo includes client-side simulators for sandbox purposes only.

Testing locally
- Open pages directly in a browser from the repository root, or serve the repo with any simple static server (Python, npm `http-server`, etc.).
- Generate sitemap (Windows): run `generate_sitemap.bat` from the repo root.

Contributing
- Edit template fragments in `templates/` when changing global navigation/footer so updates propagate across pages.
- When adding new pages inside subfolders, keep the loader usage (`id="header"`/`id="footer"`) to preserve template injection.

See also
- `vap/README.md` — VAP integration examples and guidance.
- `templates/` — header/footer/sidebar fragments.
- `scripts/JS/loadHeaderFooter_v2.js` and `scripts/JS/loadHeaderFooter_v3.js` — template loaders and link adjusters.
# Test Site
