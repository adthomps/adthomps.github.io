# acceptvap


Contains example pages for direct Accept.js/Accept.js-based VAP acceptance flows (client-side nonce generation + server transaction examples).

Files and what they do
- `acceptjss.html` — Uses Accept.js (`https://jstest.authorize.net/v1/Accept.js`) to collect card or bank data in the browser, then calls `Accept.dispatchData()` with a `clientKey` and `apiLoginID` to generate `opaqueData` (the data descriptor and data value / payment nonce). The page displays the returned `opaqueData` and, in `callbackMerchant`, shows any encrypted card/bank data returned for debugging. This demonstrates client-side tokenization only — the opaque data must be sent to your server to create a transaction.
- `acceptjssv2.html` / similar pages (e.g. `acceptjssv2.html`, `acceptuisv1.html`, `acceptuisv2.html`, `jsbootstrap.html`, `uibootstrap*.html`) — More complete examples that: validate form fields, call `Accept.dispatchData()` to get `dataDescriptor` & `dataValue`, then submit a `createTransactionRequest` XML POST to `https://apitest.authorize.net/xml/v1/request.api` including a server `merchantAuthentication` block (example `name` and `transactionKey` are shown in the files). The `makePayment()` function assembles XML with the opaque data inside `<payment><opaqueData>...</opaqueData></payment>` and sends it to the sandbox to perform an `authCaptureTransaction`.
- `js/` — contains any JS helper scripts used by the form pages (validation, formatting, helper functions).

Implementation details / Authorize.Net interactions
- These pages demonstrate the recommended Accept.js flow: keep sensitive PAN/PIN data out of your server by using Accept.js to tokenize card or bank data in the browser. The returned `opaqueData.dataValue` is safe to send to your server (it represents a payment nonce) and is included in server-side transaction requests.
- The client-side code uses a public `clientKey` and `apiLoginID` (sample/test keys in the repo). The final `createTransactionRequest` uses server-side `merchantAuthentication` (apiLoginID + transactionKey) — do NOT put transaction keys into client-side code in production.
- The pages include both card and ACH examples; the structure of the `createTransactionRequest` in the files shows where the opaque data is inserted for an `authCaptureTransaction`.

How to test locally
- Open `vap/acceptvap/acceptjss.html` (or `acceptjssv2.html`) and use sample card data to generate a payment nonce. Copy the displayed `dataValue` and test the `makePayment()` flow in the v2 pages (which perform the XML POST to `apitest.authorize.net`).
- Replace sample `merchantAuthentication` with your sandbox `apiLoginID`/`transactionKey` if making live sandbox transaction requests.

Authentication details
- `clientKey` + `apiLoginID` (client-side): Accept.js requires a `clientKey` and `apiLoginID` to tokenize card or bank data in the browser. `clientKey` is public and safe to include in client code (it cannot perform transactions by itself).
- `transactionKey` + `apiLoginID` (server-side): final transaction submission (`createTransactionRequest`) requires server-side `merchantAuthentication` that includes `apiLoginID` and `transactionKey`. The `transactionKey` is secret and must never be present in client-side code or public repositories.
- `opaqueData` (payment nonce): Accept.js returns `opaqueData.dataDescriptor` and `opaqueData.dataValue` — this `dataValue` (nonce) is safe to send to the server and must be included in the server's `createTransactionRequest` inside `<payment><opaqueData>...</opaqueData></payment>`.

Security note
- Do not put `transactionKey` into any client-side pages. Use Accept.js to keep PAN data out of your servers, and perform `createTransactionRequest` calls from a trusted server using the `transactionKey`.

