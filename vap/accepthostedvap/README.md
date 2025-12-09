# accepthostedvap


This folder holds example pages for hosted VAP flows — pages that demonstrate Accept Hosted (hosted payment pages) and iframe communicator patterns.

Files and what they do
- `accepthosteds.html` — Build a `getHostedPaymentPageRequest` XML payload (sample merchant auth + transaction details + `hostedPaymentSettings`) and POST it to the sandbox API (`https://apitest.authorize.net/xml/v1/request.api`) using a small XHR helper. The response XML is parsed to extract the `<token>` element. The token can then be posted to `https://test.authorize.net/payment/Payment` (or the production hosted payment endpoint) to load the hosted payment form.
- `accepthostedsv2.html` — Version 2 of the hosted example with similar flow and slightly different hosted settings (for demonstrating addPaymentProfile vs. not). Same pattern: build XML, call Authorize.Net sandbox, extract token, post token to hosted payment endpoint.
- `HostedIframeCommunicator.html` — A small communicator page used as the `hostedPaymentIFrameCommunicatorUrl`. It receives postMessage or hash payloads from the hosted iFrame and forwards them to the parent window so the parent can handle `resizeWindow`, `successfulSave`, or navigation commands.
- `Empty.html` — simple placeholder used as a safe iframe src.

Implementation details / Authorize.Net interactions
- The pages demonstrate how to request a hosted payment page token via `getHostedPaymentPageRequest` and then submit that token to the hosted payment endpoint to present the secure, Authorize.Net-hosted checkout UI.
- The sample request includes `hostedPaymentSettings` such as return URL, button text, and `hostedPaymentIFrameCommunicatorUrl` to set up cross-domain communication.
- Token retrieval uses cross-domain XHR and basic XML parsing (or jQuery selectors) to extract the token.

How to test locally
- Open `vap/accepthostedvap/accepthosteds.html`, click "Generate Code" to POST the XML sample and obtain a token, then use the provided form/button to post that token to the hosted endpoint and open the hosted form.
- Use devtools to inspect the token response and to observe postMessage traffic between the hosted page and the communicator.

Authentication details
- `merchantAuthentication` (server-side): `getHostedPaymentPageRequest` requires `apiLoginID` and `transactionKey` in the request's `merchantAuthentication` section. In these examples the request is constructed client-side for sandbox demonstration, but in production you should assemble and send requests that contain the `transactionKey` from a secure server environment.
- `clientKey`: Accept.js uses a `clientKey` (public) paired with `apiLoginID` to create `opaqueData` in-browser. Hosted token requests, however, rely on `merchantAuthentication` on the request to the API (server-side recommended).
- Hosted tokens: the API returns a `<token>` for hosted payment pages. Post this token to the Authorize.Net hosted endpoint to render the secure checkout UI. Tokens are short-lived and single-use.

Security note
- Do not embed `transactionKey` in client-side code or publish it. Use server-side code to sign or authenticate requests requiring privileged credentials. The client-side examples here are for sandbox/testing only.

