# anet/hop Example & Demo Files

This folder contains a variety of demo HTML files for testing and illustrating HOP (Hosted Order Page) and DPM (Direct Post Method) integrations in different environments and scenarios. Below is a summary of each file's purpose:

## DPM Demo Files
- **dpm-production1.html / dpm-production2.html**  
  Demos for Direct Post Method in a production-like environment. Useful for simulating real payment form posts to a live endpoint.
- **dpm-sandbox1.html / dpm-sandbox2.html**  
  Demos for Direct Post Method in a sandbox/test environment. Use these to test integration without real transactions.

## SIM (Simple Integration Method) Demo Files
Each SIM file group is named by environment (production/sandbox), scenario (1/2/3), and method (get/link/post/relay):

- **sim-production1-get.html, sim-production2-get.html**  
  Example GET requests to the production SIM endpoint.
- **sim-production1-link.html, sim-production2-link.html**  
  Demo of using a direct link to the production SIM endpoint.
- **sim-production1-post.html, sim-production2-post.html**  
  Example POST requests to the production SIM endpoint.
- **sim-production1-relay.html, sim-production2-relay.html**  
  Demo of relay response handling for production SIM.

- **sim-sandbox1-get.html, sim-sandbox2-get.html**  
  Example GET requests to the sandbox SIM endpoint.
- **sim-sandbox1-link.html, sim-sandbox2-link.html, sim-sandbox3-link.html**  
  Demo of using a direct link to the sandbox SIM endpoint (various scenarios).
- **sim-sandbox1-post.html, sim-sandbox2-post.html, sim-sandbox3-post.html**  
  Example POST requests to the sandbox SIM endpoint (various scenarios).
- **sim-sandbox1-relay.html, sim-sandbox2-relay.html**  
  Demo of relay response handling for sandbox SIM.

## Subfolders
- **CSS/**  
  Custom styles for the demo pages.
- **JS/**  
  JavaScript helpers for the demo pages.
- **Receipt-Relay Code Reference/**  
  Reference code for handling relay responses and receipts.

---

**Note:** These files are for demonstration and integration testing only. They are not intended for production use as-is. Review each file's form actions and endpoints before use.
