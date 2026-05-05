# LOCAL_DEV.md

## Local Development Workflow
- **No build required**: Open any HTML file in your browser directly from the repo.
- **Optional static server**: For local testing, you may use a simple static server (e.g., Python: `python -m http.server`, Node: `npx http-server`).
- **Sitemap**: Run `generate_sitemap.bat` (Windows) or the Python snippet inside it (other OS) to update `sitemap.txt`.
- **Template changes**: Edit files in `templates/` for global navigation/footer/sidebar. Test on pages at different folder depths to ensure `adjustLinks()` works.
- **Debug loader**: Use browser console to debug header/footer loading and link rewriting.

## No package manager, no dependencies
- No npm, pnpm, yarn, or other package manager is used.

---
_Last updated: January 2026_