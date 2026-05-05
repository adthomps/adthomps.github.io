# SECURITY.md

## Key Security Practices
- **No secrets in repo**: Never commit API keys, transaction keys, or other sensitive credentials. Only public test keys (e.g., Accept.js `clientKey`) are allowed in client code.
- **Demo-only flows**: Any client-side simulation of server-side logic (e.g., fingerprint generation) is for sandbox/demo only. Move to server-side in production.
- **Template integrity**: Edit only in `templates/` for global navigation/footer/sidebar. Do not duplicate or fork templates.
- **No authentication**: This site does not implement authentication or user accounts.

## Vulnerability Management
- No automated scanning or dependency management is present (no package manager).
- Review code for accidental exposure of secrets before pushing.

---
_Last updated: January 2026_