# Static Site Cleanup And Optimization Plan

Date: 2026-08-02
Status: draft

## Direction

Keep `adthomps.github.io` as a deliberately small static GitHub Pages site.

The retained site should be a basic launch/pointer surface, not a second product site, payment-demo library, support portal, documentation hub, or APT doctrine source.

## Retained Page Set

Keep the basic root pages:

- `index.html` - simple launch page with links to current maintained destinations.
- `privacy.html` - static privacy page if the site remains public.
- `terms.html` - static terms page if the site remains public.
- `404.html` - static fallback page.

Everything else should either be moved to its owning repo, frozen as historical reference, or removed after inventory.

## Current Cleanup Observations

- The current working tree already has the old payment, VAP, Cybersource, product, support, developer, photography, and script folders deleted.
- The README and project rules still describe old folders and loader scripts that are no longer present.
- Root HTML pages still reference missing local files under `scripts/CSS/` and `scripts/JS/`.
- Template files remain under `templates/`, but runtime loader scripts are absent, so pages that rely on injected header/footer fragments will render empty header/footer regions.
- `images/` contains roughly 47.5 MB across 143 files, far more than the retained basic pages appear to need.
- The homepage already points Authorize.Net traffic to `https://apt-anet-integration-toolbox.pages.dev/`; this cleanup plan does not assign any changes to that repo.

## Merge Or Route Out

| Material | Destination |
| --- | --- |
| Authorize.Net, VAP, Accept.js, Accept Hosted, Accept Customer, SIM/HOP/DPM examples | Confirm represented elsewhere or explicitly decline; do not change `../apt-anet-integration-toolbox` as part of this cleanup plan |
| Public APT portfolio, proof, visual-gallery, or narrative material | `../applied-practical-thinking` |
| Reusable payment, API, documentation, or support standards | `../apt-principles-agents` |
| Historical static experiments with no active owner | Archive/freeze or delete after explicit review |

## Cleanup Tasks

1. Update documentation to reflect the basic-page role.
   - Keep README short and current.
   - Remove stale references to missing folders, sitemap tooling, and loader scripts.

2. Remove or replace broken local dependencies.
   - Either restore the minimal local CSS/JS needed by the retained pages, or remove references to missing `scripts/CSS/*` and `scripts/JS/*`.
   - Inline or hard-code a small static header/footer if templates are no longer loaded.

3. Simplify homepage links.
   - Keep links only to maintained destinations.
   - Remove commented-out links to deleted local pages.

4. Prune templates.
   - Keep only templates that are actually loaded by retained pages.
   - If no loader remains, remove template fragments after hard-coding retained page chrome.

5. Prune images.
   - Identify images referenced by retained pages.
   - Move public portfolio/gallery assets to `../applied-practical-thinking` when useful.
   - Remove old payment/product/support/gallery image sets after confirming they are not referenced.

6. Validate manually.
   - Open `index.html`, `privacy.html`, `terms.html`, and `404.html` directly.
   - Check browser console for missing local files.
   - Confirm all links either work or intentionally exit to maintained external destinations.

## Archive/Freeze Criteria

The old site areas can be considered extracted when:

- payment examples are represented by maintained destinations or explicitly declined;
- public portfolio/gallery material is represented in `applied-practical-thinking` or explicitly declined;
- reusable rules have been promoted to `apt-principles-agents` where needed;
- the retained root pages have no broken local asset/script/template references; and
- the README and project rules describe the current basic static-site role.

## Non-Goals

- Do not reintroduce a build system.
- Do not rebuild the old payment-demo tree here.
- Do not assign cleanup or migration work to `../apt-anet-integration-toolbox`.
- Do not make this repo a support portal, product catalog, docs hub, or canonical APT site.
- Do not delete large asset groups until referenced usage and destination ownership are checked.
