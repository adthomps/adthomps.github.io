# hopvap


This folder contains sample Server Integration Method (SIM) / DPM / HOP-like pages and simulators used to demonstrate hosted order page flows, relay/receipt handling, and form signing.

Files and what they do
- `sim-sandbox1-post.html`, `sim-sandbox2-post.html`, etc. — SIM-style examples that dynamically build form fields and submit to the Authorize.Net gateway endpoint (e.g., `https://test.authorize.net/gateway/transact.dll`). They rely on helper scripts to compute fingerprints/signatures and populate the required hidden fields.
- `sim-sandbox1-relay.html`, `sim-sandbox2-relay.html` — Pages that demonstrate relay/receipt behavior: after a hosted transaction, Authorize.Net can POST the receipt to your relay endpoint. These pages are sample relay handlers or simulators used to show how relay responses are handled client-side during testing.
- `dpm-sandbox1.html`, `dpm-sandbox2.html` — DPM/DPM-like pages and sandbox variants that show Direct Post / Redirect patterns.
- `Receipt-Relay Code Reference/` — contains notes or server-side reference code showing how a relay/receipt could be processed by a server (used for developers implementing the relay endpoint).
- `JS/`, `CSS/` — local helper scripts used by the HOP/SIM pages (e.g., `md5.js`, `sha.js`, `slinklib.js`, and page-specific scripts such as `script-sim-sandbox1-post.js`) that compute fingerprints, timestamps, and build the signed form.

Implementation details / Authorize.Net interactions
- SIM and HOP pages require generating an HMAC/MD5 fingerprint (or SHA-based signature) using the merchant's transaction key and other fields (amount, invoice, timestamp). The included `md5.js` / `sha.js` and `slinklib.js` implement these client-side for sandbox simulation; in production the signature/fingerprint should be generated server-side with your transaction key.
- The pages assemble the gateway form fields (login, amount, invoice, fingerprint, relay response URL, etc.) and post to `transact.dll`. The relay pages demonstrate how to receive the gateway's POST and display or forward a receipt.
- These samples are intended for testing and demonstration — they simulate server-side behavior in-browser so you can see the flow end-to-end without a backend.

How to test locally
- Open one of the `sim-sandbox*.html` pages and click Submit. The page will build the signed form and either POST to the gateway sandbox or open the shaped response depending on options (new tab vs same tab).
- Inspect `JS/` scripts referenced by the page to see how the fingerprint and form fields are constructed.

Security note
- The fingerprint/transaction-key-like operations in these client-side scripts are for sandbox/demo only. Do not embed your real `transactionKey` or compute live signatures client-side in production.

Authentication details
- SIM/DPM fingerprinting: SIM and some HOP/DPM flows require creating a fingerprint or HMAC using the `transactionKey` (or signing secret) together with fields like `apiLoginID`, amount, invoice, and a timestamp. The fingerprint authenticates the form to Authorize.Net.
- Where to compute signatures: compute fingerprints and any HMACs on the server using your `transactionKey`. The repo includes client-side fingerprinting scripts for sandbox simulation only; in production these must be replaced by server-side signing to protect your `transactionKey`.
- Hosted endpoints & tokens: HOP/SIM flows may involve hosted endpoints or relay responses; those exchanges are authorized by the gateway using the fingerprint or merchant credentials.

Security note
- Never expose your `transactionKey` or other privileged API secrets in client-side code or public repositories. Use server-side endpoints to generate any required signatures and to perform any calls that require `merchantAuthentication`.

