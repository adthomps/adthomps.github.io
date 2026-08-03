# Basic Static Gateway

This repository is a plain GitHub Pages static site. It is being condensed to a small set of basic pages that point to maintained destinations instead of hosting a large demo, docs, product, or support tree.

## Retained Role

- Keep a simple static launch page.
- Keep static legal/support pages when needed: `privacy.html`, `terms.html`, and `404.html`.
- Point Authorize.Net and payment-demo traffic to the maintained toolbox URL when useful, without making changes in that repo.
- Point public APT portfolio, proof, and visual-gallery traffic to `appliedpracticalthinking.com`.

## Current Page Set

- `index.html`
- `privacy.html`
- `terms.html`
- `404.html`

## Consolidation Direction

Old local payment and integration demos should not be rebuilt here. This cleanup plan does not require changes in `../apt-anet-integration-toolbox`.

Public portfolio or visual material should live in `../applied-practical-thinking` if still useful.

Reusable payment, API, documentation, support, or agent standards should live in `../apt-principles-agents`.

See [Static Site Cleanup And Optimization Plan](./CLEANUP_OPTIMIZATION_PLAN.md).

## Validation

There is no build system. Validate manually by opening the retained pages directly or serving the repo with any simple static server. Check that the browser console has no missing local CSS, JavaScript, image, or template-loader errors.
