# PROJECT_RULES.md

## Architecture & Guardrails

- **Static only**: No server-side code, no build step, no frameworks. All files are served as-is from the repo.
- **Basic page set**: The retained site should stay limited to `index.html`, `privacy.html`, `terms.html`, and `404.html` unless a new page has a clear GitHub Pages-only reason.
- **No duplicate product surface**: Do not rebuild payment demos here or assign cleanup work to `../apt-anet-integration-toolbox`; public APT portfolio/proof/visual material belongs in `../applied-practical-thinking`; reusable standards belong in `../apt-principles-agents`.
- **No secrets in repo**: Never commit API keys, transaction keys, or other secrets. Only public test keys (e.g., Accept.js `clientKey`) are allowed in client code.
- **Avoid stale loaders**: Do not rely on template-loader scripts unless the corresponding files exist and are used by all retained pages.
- **Assets**: Keep only images and static assets referenced by retained pages or explicitly held for migration to another repo.
- **Manual validation**: Open retained pages locally and check the browser console for missing local CSS, JavaScript, image, or template-loader references.

## Folder conventions
- Do not recreate `images/` or `templates/` unless a retained page has a clear need for a specific asset or fragment.
- Keep retained pages self-contained unless a shared asset clearly reduces maintenance without rebuilding the old site tree.

## Validation
- No schema validation is enforced; all HTML/JS is manually tested in browser.
- If adding validation, centralize logic in a single JS file per form/feature.

---
_Last updated: August 2026_
