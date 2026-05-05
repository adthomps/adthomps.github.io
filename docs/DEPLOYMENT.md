# DEPLOYMENT.md

## Deployment Flow
- **GitHub Pages**: All files in the repository (root and subfolders) are published directly via GitHub Pages.
- **No build step**: All HTML, CSS, and JS are served as-is. No bundling or transpilation.
- **Update process**: Commit and push to the main branch. GitHub Pages will automatically update the site.
- **Sitemap**: Run `generate_sitemap.bat` (Windows) or the Python snippet inside it (other OS) to update `sitemap.txt` after adding/removing pages.

## Preview/Production
- No preview branch or staging environment. All changes go live on push.

## Cloud Bindings
- No D1/KV/R2/Queues or wrangler.toml present.

---
_Last updated: January 2026_