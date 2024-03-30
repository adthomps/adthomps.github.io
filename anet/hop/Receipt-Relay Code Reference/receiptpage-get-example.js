
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  if (request.method === "GET") {
    // Extract query parameters from the request URL
    const url = new URL(request.url);
    const transactionId = url.searchParams.get('transactionId');
    const responseCode = url.searchParams.get('responseCode');
    const amount = url.searchParams.get('amount');
    const authCode = url.searchParams.get('authCode');
    const firstName = url.searchParams.get('firstName');
    const lastName = url.searchParams.get('lastName');

    // Generate HTML content with transaction data
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <title>Transaction Receipt</title>
      </head>
      <body>
          <h1>Transaction Receipt</h1>
          <div id="receipt">
              <p>Transaction ID: ${transactionId}</p>
              <p>Response Code: ${responseCode}</p>
              <p>Amount: ${amount}</p>
              <p>Authorization Code: ${authCode}</p>
              <p>First Name: ${firstName}</p>
              <p>Last Name: ${lastName}</p>
              <br />
              <p><a href='https://adthomps.github.io/anet.html'>Back to test site.</a></p>
          </div>
      </body>
      </html>
    `;

    return new Response(htmlContent, {
      headers: { 'Content-Type': 'text/html' }
    });
  } else {
    return new Response("Method Not Allowed", { status: 405 });
  }
}