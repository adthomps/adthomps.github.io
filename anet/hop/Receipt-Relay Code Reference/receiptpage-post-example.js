addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  if (request.method === "POST") {
    // Parse the form data from the POST request
    const formData = await request.formData();
    const transactionId = formData.get('x_trans_id');
    const responseCode = formData.get('x_response_code');
    const amount = formData.get('x_amount');
    const authCode = formData.get('x_auth_code');
    const firstName = formData.get('x_first_name');
    const lastName = formData.get('x_last_name');

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