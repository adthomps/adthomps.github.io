---
title: adthomps.github.io Project Context
kind: project-context
status: active
owner: APT
last_updated: 2026-07-26
source_paths: ["adthomps.github.io/README.md", "adthomps.github.io/docs/project-context.md"]
---

# Project Context

## Purpose

`adthomps.github.io` is a plain static GitHub Pages-compatible site for demos, integration samples, payment-flow examples, product pages, and small sample applications.

## Architecture

- Static HTML, CSS, and JavaScript are served directly from the repository.
- Shared header, footer, and sidebar fragments live in `templates/` and are injected by scripts under `scripts/JS/`.
- `vap/` contains sandbox/demo pages for Authorize.net VAP flows, including Accept.js, Accept Hosted, Accept Customer, SIM, HOP, and DPM samples.

## Operating Rules

- There is no build system; most validation is manual browser review or static serving from the repo root.
- Never place `transactionKey` or other server-only secrets in client-side code.
- HOP/SIM fingerprints and hosted-token calls that require merchant credentials must be server-side in production; client-side demos are sandbox-only.
- Preserve template injection conventions when adding pages inside subfolders.
- Canonical APT assets come from sibling `apt-principles-agents`; repo-specific demo behavior stays here.

## Validation

- Open changed pages directly or through a simple static server.
- Regenerate the sitemap with `generate_sitemap.bat` when page inventory changes.
- Run `node ../apt-principles-agents/scripts/apt-assets.mjs scan --target . --check` after APT asset sync.
