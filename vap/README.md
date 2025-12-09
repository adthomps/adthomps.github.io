# VAP (Test Pages)

This folder contains static test pages and sample integrations for the VAP (payment) demos used on the site.

What’s included
- `vaptests.html` — entry/test page that links to and demonstrates several VAP-related flows.
- `acceptcustomervap/`, `accepthostedvap/`, `acceptvap/`, `hopvap/` — subfolders with example pages for different payment integration patterns (accept customer, hosted, direct accept, HOP-like flows).

How it’s implemented
- All pages are plain static HTML (+CSS/JS) and require no server-side build.
- Global header/footer/sidebar fragments are injected at runtime by the site template loader (see `templates/header.html` and `templates/footer.html`). Pages in this folder rely on that loader when they include `<div id="header"></div>` and `<div id="footer"></div>`.
- Relative links and asset paths are adjusted by the loader script (`scripts/JS/loadHeaderFooter_v3.js`), so test pages should be opened from the repository file tree or served from the repo root so paths resolve correctly.

How to test locally
- Open `vap/vaptests.html` in your browser (or serve the repo root via a simple static server) and follow the links to the example flows in the subfolders.
- Use the browser console to inspect network requests and iframe messaging when testing hosted/iframe flows.

Notes for maintainers
- When editing global navigation or footer content, update the template fragments in `templates/` rather than editing every page in this folder.
- Keep assets (images, scripts) referenced from site-level `images/` and `scripts/` folders where possible so reuse and path rewriting remain consistent.

If you want, I can add short README sections inside each subfolder describing the specific pages there.

Authentication summary
- `apiLoginID` + `transactionKey`: used together as `merchantAuthentication` in server-side XML/JSON requests to Authorize.Net (for example `createTransactionRequest` or `getHostedPaymentPageRequest`). The `transactionKey` is secret and must never be embedded in client-side code.
- `clientKey`: a public key used by Accept.js in the browser to tokenize payment data (generate `opaqueData`). `clientKey` and `apiLoginID` may appear in client-side examples; the `clientKey` is safe to include in browser code but `transactionKey` is not.
- Hosted tokens: `getHostedPaymentPageRequest` / `getHostedProfilePageRequest` responses include a token that you post to the hosted endpoint to render the secure Authorize.Net-hosted UI. Tokens are single-use / short-lived and are safe to transport between your client and the hosted endpoint.
- SIM/HOP fingerprints: these flows require computing a fingerprint or HMAC using the `transactionKey` (or equivalent signing secret). For security, compute those signatures server-side — the repo includes client-side simulators, but these are only for sandbox/demo/testing.

Security note
- Never expose your `transactionKey` or other privileged credentials in client-side code or in public repositories. Use server-side code to perform operations that require the `transactionKey` and return only tokens/opaqueData to the browser.
