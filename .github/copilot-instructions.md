

# Copilot / AI Agent Instructions for this Repository

## Overview
This repository is a static website served by GitHub Pages. It uses only plain HTML, CSS, and JavaScript—**no build step, frameworks, or bundlers**. All files in the root and subfolders are directly published.

## Architecture & Structure
- **Templates**: Common header, footer, and sidebar HTML fragments are in [templates/](templates/). These are injected at runtime by JavaScript loaders.
- **Loader Pattern**: Pages with `<div id="header"></div>` and `<div id="footer"></div>` use [scripts/JS/loadHeaderFooter_v3.js](scripts/JS/loadHeaderFooter_v3.js) to load fragments and rewrite links using `adjustLinks()`.
- **Header Variants**: Use `header.html`, `header2.html`, or `header3.html` from [templates/](templates/) depending on the section. Match the variant to similar pages.
- **Section Navigation**: [templates/index-level0.html](templates/index-level0.html), `index-level1.html`, and `index-level2.html` are used for navigation in different site sections.
- **Samples & Demos**: [anet/](anet/), [cybs/](cybs/) contain HTML samples (e.g., [anet/accept/acceptjsp.html](anet/accept/acceptjsp.html)).
- **Assets**: Images are in [images/](images/), CSS in [scripts/CSS/](scripts/CSS/), and JS helpers in [scripts/JS/](scripts/JS/).

## Developer Workflows
- **Edit/Test**: Edit HTML/CSS/JS, then open the page in a browser. No build or local server is required.
- **Debug Loader**: Use browser console to debug header/footer loading and link rewriting.
- **Sitemap**: On Windows, run [generate_sitemap.bat](generate_sitemap.bat) to update `sitemap.txt`. On other OS, run the Python snippet inside the batch file.
- **Deploy**: Push commits to the repository; GitHub Pages will serve the updated files automatically.

## Project-Specific Conventions
- **Template Injection**: Always keep `<div id="header">` and `<div id="footer">` for loader-based pages.
- **Relative Path Logic**: Loader computes depth using `window.location.pathname.split("/")`. Moving or adding pages may require loader or folder structure adjustments.
- **Header/Footer Edits**: Edit only in [templates/](templates/) for global navigation/footer/sidebar changes.
- **New Pages**: When adding a page in a subfolder, ensure it uses the loader and required `<div id>`s, or copy the markup from similar pages.
- **Link/Image Paths**: After changing links or image `src` in templates, test on pages at different folder depths to ensure `adjustLinks()` works as expected.
- **Loader Modification**: If editing [scripts/JS/loadHeaderFooter_v3.js](scripts/JS/loadHeaderFooter_v3.js), always keep the `adjustLinks()` call after fragment insertion.
- **Do Not Delete**: Never remove any `scripts/JS/loadHeaderFooter_*` files; they are used by different pages.

## Examples
- To add a new product page: copy an existing product HTML file, ensure it includes `<div id="header">` and `<div id="footer">`, and update content as needed.
- To update navigation: edit the relevant template in [templates/](templates/), then verify on pages at different folder depths.

## If Unclear
If you are unsure about a change, specify the file path and desired change. The maintainer can clarify or update templates/loader as needed.

---
Last updated: January 2026. Please suggest improvements or point out missing workflows/files.
