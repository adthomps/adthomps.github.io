addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
})

async function handleRequest(request) {
  const { pathname } = new URL(request.url);

  if (pathname === '/process_payment' && request.method === 'POST') {
    try {
      const formData = await request.formData();

      const dataDescriptor = formData.get('dataDescriptor');
      const dataValue = formData.get('dataValue');
      const amount = formData.get('amount');
      const description = formData.get('description');
      const firstName = formData.get('firstName');
      const lastName = formData.get('lastName');
      const address = formData.get('address');
      const zip = formData.get('zip');
      const email = formData.get('email');

      const apiLoginID = "QOAA0OCC$aP94Nn8t528";
      const transactionKey = "5SaT35b9D4h7kZP6";

      const transactionRequest = {
        createTransactionRequest: {
          merchantAuthentication: {
            name: apiLoginID,
            transactionKey: transactionKey,
          },
          transactionRequest: {
            transactionType: "authCaptureTransaction",
            amount: amount,
            payment: {
              opaqueData: {
                dataDescriptor: dataDescriptor,
                dataValue: dataValue,
              },
            },
            order: {
              description: description,
            },
            billTo: {
              firstName: firstName,
              lastName: lastName,
              address: address,
              city: "San Francisco", // Example data
              state: "CA", // Example data
              zip: zip,
              country: "USA",
            },
            customer: {
              email: email,
            },
          },
        },
      };

      const apiResponse = await fetch('https://apitest.authorize.net/xml/v1/request.api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(transactionRequest),
      });

      const apiResponseData = await apiResponse.json();

      if (apiResponseData.messages.resultCode === "Ok") {
        const transactionId = apiResponseData.transactionResponse.transId;
        return Response.redirect(`/receipt?transaction_id=${transactionId}&amount=${amount}`, 302);
      } else {
        const errorMessage = apiResponseData.messages.message[0].text;
        return Response.redirect(`/error?error_message=${encodeURIComponent(errorMessage)}`, 302);
      }
    } catch (error) {
      return new Response('Payment processing failed.', { status: 500 });
    }
  }

  if (pathname === '/receipt') {
    const urlParams = new URL(request.url).searchParams;
    const transaction_id = urlParams.get('transaction_id');
    const amount = urlParams.get('amount');
    return new Response(`
      <html>
      <body>
        <h1>Thank You!</h1>
        <p>Transaction ID: ${transaction_id}</p>
        <p>Amount Charged: $${amount}</p>
        <a href="https://adthomps.github.io/anet/accept.html">Continue to homepage</a>
      </body>
      </html>
    `, { headers: { 'Content-Type': 'text/html' } });
  }

  if (pathname === '/error') {
    const urlParams = new URL(request.url).searchParams;
    const error_message = urlParams.get('error_message');
    return new Response(`
      <html>
      <body>
        <h1>Oops!</h1>
        <p>Error: ${error_message}</p>
        <a href="https://adthomps.github.io/anet/accept.html">Return to homepage</a>
      </body>
      </html>
    `, { headers: { 'Content-Type': 'text/html' } });
  }

  return new Response('Not Found', { status: 404 });
}