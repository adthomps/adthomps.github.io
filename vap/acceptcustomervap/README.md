# acceptcustomervap


This folder contains example pages that demonstrate the "Accept Customer" VAP integration pattern used for customer-on-file and tokenized payment flows.

Files and what they do
- `acceptcustomersjson.html` — UI that builds a JSON `getHostedProfilePageRequest` (including sample `merchantAuthentication`). It sends the JSON to the sandbox API URL (e.g. `https://apitest.authorize.net/xml/v1/request.api`) via an XHR helper (`XHConn`) and reads the returned `token`/`opaqueData`. That token is then used to open the hosted customer profile pages (manage/addPayment/editPayment/addShipping/editShipping) either in an embedded iframe or as a redirect form to `https://{domain}/customer/{action}`. The page also exposes the `AuthorizeNetPopup` helper functions that open the popup and post the form.
- `CustomerPageIframeCommunicator.html` — Minimal iframe communicator used as the `hostedProfileIFrameCommunicatorUrl`. It listens for `message` events and forwards the payload to the parent window's `AuthorizeNetPopup.onReceiveCommunication()` function. Used for resizing, close/cancel, and success messages from hosted pages.
- `Empty.html` — placeholder used as a safe iframe src when closing/clearing an iframe.

Implementation details / Authorize.Net interactions
- The pages are static client-side HTML/JS. They demonstrate how to build and send `getHostedProfilePageRequest` payloads to Authorize.Net sandbox and how to handle the returned token.
- The JS uses a tiny cross-browser XHR wrapper (`XHConn`) to POST JSON and parse the response; responses are expected to include a token (the hosted page token) which the page posts to the hosted customer URL.
- The sample `merchantAuthentication` values are test placeholders — replace with your own sandbox `apiLoginID` and `transactionKey` when testing.
- Iframe communication uses postMessage and a small relay function so hosted pages can signal `successfulSave`, `cancel`, or `resizeWindow` back to the parent.

How to test locally
- Serve the repo (or open from repo root) and open `vap/acceptcustomervap/acceptcustomersjson.html`.
- Select the sandbox API URL, click "Generate Code" to request a hosted profile page token, then use the provided controls to open the hosted page (popup or iframe). Use devtools to observe XHR response and postMessage activity.

Authentication details
- `merchantAuthentication` (server-side): requests such as `getHostedProfilePageRequest` should include an `apiLoginID` and `transactionKey` inside `merchantAuthentication` when sent from a server. The example JSON in the page uses sample sandbox credentials for demonstration only.
- `clientKey` vs `transactionKey`: this folder's flows primarily use hosted profile tokens returned by Authorize.Net; token generation requires merchant authentication on the request to the sandbox API. `clientKey` (public) is used only for Accept.js flows (not typical for the hosted profile requests). Keep `transactionKey` private and generate requests that need it on a server.
- Hosted page tokens: the XHR response contains a token string which is posted to the hosted customer URL. Tokens are short-lived and intended to be used by the client or server to load the hosted page.

Security note
- The sample `merchantAuthentication` values in these pages are placeholders. In production, build `getHostedProfilePageRequest` server-side and never embed `transactionKey` in client JavaScript.

