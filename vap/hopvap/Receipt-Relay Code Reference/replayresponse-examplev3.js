addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  if (request.method === "POST") {
    // Parse the form data from the POST request
    const formData = await request.formData();
    const transactionId = formData.get('x_trans_id');
    const responseCode = formData.get('x_response_code');
    const reasonText = formData.get('x_response_reason_text');
    const description = formData.get('x_description');
    const amount = formData.get('x_amount');
    const invoicenum = formData.get('x_invoice_num');
    const custid = formData.get('x_cust_id');
    const currency = formData.get('x_currency_code');

    // Generate a response based on the transaction result
    if (responseCode === '1') {
      return new Response(`

<!doctype html>
<html lang="en" data-bs-theme="auto">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="APT Portfolio - Bootstrap">
    <meta name="author" content="APT">

    <!-- Favicon -->
    <link rel="icon" href="images/icons/profile.jpg" type="image/x-icon">

    <!-- Title -->
    <title>APT Portfolio - Bootstrap</title>

    <!-- CSS - Universal -->
    <link href="https://adthomps.github.io/scripts/CSS/general.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">

    <!-- CSS - Custom Color Selector -->
    <link href="https://adthomps.github.io/scripts/CSS/custom-colors.css" rel="stylesheet">

    <!-- Preload fonts -->
    <link rel="preload" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/fonts/bootstrap-icons.woff2"
        as="font" type="font/woff2" crossorigin="anonymous">
</head>

<body>

    <!-- Theme Color Icons Start -->
    <svg xmlns="http://www.w3.org/2000/svg" class="d-none">
        <symbol id="check2" viewBox="0 0 16 16">
            <path
                d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
        </symbol>
        <symbol id="circle-half" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
        </symbol>
        <symbol id="moon-stars-fill" viewBox="0 0 16 16">
            <path
                d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
            <path
                d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
        </symbol>
        <symbol id="sun-fill" viewBox="0 0 16 16">
            <path
                d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
        </symbol>
    </svg>
    <!-- Theme Color Icons End -->

    <!-- Theme Code Start -->
    <div class="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
        <button class="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center" id="bd-theme" type="button"
            data-bs-toggle="dropdown" aria-label="Toggle theme (auto)">
            <svg class="bi my-1 theme-icon-active" width="1em" height="1em">
                <use href="#circle-half"></use>
            </svg>
            <span class="visually-hidden" id="bd-theme-text">Toggle theme</span>
        </button>
        <ul class="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bd-theme-text">
            <li>
                <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="light">
                    <svg class="bi me-2 opacity-50 theme-icon" width="1em" height="1em">
                        <use href="#sun-fill"></use>
                    </svg>
                    Light
                    <svg class="bi ms-auto d-none" width="1em" height="1em">
                        <use href="#check2"></use>
                    </svg>
                </button>
            </li>
            <li>
                <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="dark">
                    <svg class="bi me-2 opacity-50 theme-icon" width="1em" height="1em">
                        <use href="#moon-stars-fill"></use>
                    </svg>
                    Dark
                    <svg class="bi ms-auto d-none" width="1em" height="1em">
                        <use href="#check2"></use>
                    </svg>
                </button>
            </li>
            <li>
                <button type="button" class="dropdown-item d-flex align-items-center active" data-bs-theme-value="auto">
                    <svg class="bi me-2 opacity-50 theme-icon" width="1em" height="1em">
                        <use href="#circle-half"></use>
                    </svg>
                    Auto
                    <svg class="bi ms-auto d-none" width="1em" height="1em">
                        <use href="#check2"></use>
                    </svg>
                </button>
            </li>
        </ul>
    </div>
    <!-- Theme Code End -->
    <main>
        <div class="container">
            <!-- Header File Load-->
            <header>
                <div id="header"></div>
            </header>
    
            <div class="px-4 py-0 my-5 text-center">
                <h1 class="display-8 fw-bold">Transaction Receipt Test - Relay Response Method</h1>
                <div class="d-flex justify-content-center">
                    <p class="lead mb-4">Testing transaction receipt creation.</p>
                </div>
                <!--<img class="d-block mx-auto mb-4" src="images/icons/heartbeat3.png" width="300" height="69"
                    alt="Heartbeat Icon Image" />-->
            </div>
    
            <div class="row justify-content-center">
                <!--Cart Section-->
                <div class="col-md-8 col-lg-6">
                    <h4 class="d-flex justify-content-between align-items-center mb-3">
                        <span class="text-primary">Your Transaction Receipt</span>
                    </h4>
                    <ul class="list-group mb-3">
                        <li class="list-group-item d-flex justify-content-between lh-sm">
                            <div>
                                <h6 class="my-0">Transaction ID</h6>
                                <small class="text-body-secondary">${transactionId}</small>
                            </div>
                        </li>
                        <li class="list-group-item d-flex justify-content-between lh-sm">
                            <div>
                                <h6 class="my-0">Customer ID</h6>
                                <small class="text-body-secondary">${custid}</small>
                            </div>
                        </li>
                        <li class="list-group-item d-flex justify-content-between lh-sm">
                            <div>
                                <h6 class="my-0">Invoice Number</h6>
                                <small class="text-body-secondary">${invoicenum}</small>
                            </div>
                        </li>
                        <li class="list-group-item d-flex justify-content-between lh-sm">
                            <div>
                                <h6 class="my-0">Product name</h6>
                                <small class="text-body-secondary">${description}</small>
                            </div>
                            <span class="text-body-secondary">$10</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between bg-body-tertiary">
                            <div class="text-success">
                                <h6 class="my-0">Promo code</h6>
                                <small>EXAMPLECODE</small>
                            </div>
                            <span class="text-success">-$5</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between">
                            <span>Total (USD)</span>
                            <strong>${amount}</strong>
                        </li>
                    </ul>
                </div>
            </div>
    
            <!-- Footer File Load-->
            <footer>
                <div id="footer"></div>
            </footer>
        </div>
    </main>

    <!-- JS - Universal -->
    <script src="https://adthomps.github.io/scripts/JS/color-modes.js" async></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"
        async></script>
    <script src="https://adthomps.github.io/scripts/JS/loadHeaderFooter_v3.js" async></script>

    <!-- JS - Page Specific -->



</body>

</html>
        
      `, {
        headers: { 'Content-Type': 'text/html' }
      });
    } else {
      return new Response(`
      <html>
        <body>
          <h1>Payment Failed</h1>
          <p>Transaction ID: ${transactionId}</p>
          <p>Response Code: ${responseCode}</p>
          <p>Error Message: ${reasonText}</p>
          <br />
          <p><a href='https://adthomps.github.io/anet/hop.html'>Back to test site.</a></p>
        </body>
      </html>`, {
        headers: { 'Content-Type': 'text/html' }
      });
    }
  } else {
    return new Response(`
    <html>
      <body>
        <h1>Method Not Allowed</h1>
        <br />
        <p><a href='https://adthomps.github.io/anet.html'>Back to test site.</a></p>
      </body>
    </html>`, {
      status: 405,
      headers: { 'Content-Type': 'text/html' }
    });
  }
}
