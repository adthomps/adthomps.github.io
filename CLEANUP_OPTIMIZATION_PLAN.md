# Static Site Cleanup And Optimization Plan

Date: 2026-08-03
Status: implemented

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

## Completed Cleanup

- The retained root pages are self-contained static HTML.
- Missing local dependencies under `scripts/CSS/*` and `scripts/JS/*` are no longer referenced.
- Header/footer template loader dependencies were removed from the retained pages.
- `images/` and `templates/` were removed because retained pages no longer reference them.
- The homepage points Authorize.Net traffic to `https://apt-anet-integration-toolbox.pages.dev/`; this cleanup did not change `../apt-anet-integration-toolbox`.

## Merge Or Route Out

| Material | Destination |
| --- | --- |
| Authorize.Net, VAP, Accept.js, Accept Hosted, Accept Customer, SIM/HOP/DPM examples | Confirm represented elsewhere or explicitly decline; do not change `../apt-anet-integration-toolbox` as part of this cleanup plan |
| Public APT portfolio, proof, visual-gallery, or narrative material | `../applied-practical-thinking` |
| Reusable payment, API, documentation, or support standards | `../apt-principles-agents` |
| Historical static experiments with no active owner | Archive/freeze or delete after explicit review |

## Cleanup Tasks

1. Update documentation to reflect the basic-page role. **Done.**
   - Keep README short and current.
   - Remove stale references to missing folders, sitemap tooling, and loader scripts.

2. Remove or replace broken local dependencies. **Done.**
   - Either restore the minimal local CSS/JS needed by the retained pages, or remove references to missing `scripts/CSS/*` and `scripts/JS/*`.
   - Inline or hard-code a small static header/footer if templates are no longer loaded.

3. Simplify homepage links. **Done.**
   - Keep links only to maintained destinations.
   - Remove commented-out links to deleted local pages.

4. Prune templates. **Done.**
   - Keep only templates that are actually loaded by retained pages.
   - If no loader remains, remove template fragments after hard-coding retained page chrome.

5. Prune images. **Done.**
   - Identify images referenced by retained pages.
   - Move public portfolio/gallery assets to `../applied-practical-thinking` when useful.
   - Remove old payment/product/support/gallery image sets after confirming they are not referenced.

6. Validate manually. **Done by source inspection.**
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
- Do not reintroduce large asset groups without a named active page and owner.
