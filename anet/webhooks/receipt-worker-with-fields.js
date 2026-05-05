addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  if (request.method === "POST") {
    const formData = await request.formData();

    // Basic transaction fields
    const transactionId = formData.get('x_trans_id') || '';
    const responseCode = formData.get('x_response_code') || '';
    const description = formData.get('x_description') || '';
    const amount = formData.get('x_amount') || '';
    const invoicenum = formData.get('x_invoice_num') || '';
    const custid = formData.get('x_cust_id') || '';
    const currency = formData.get('x_currency_code') || '';

    // Collect any merchant-defined fields we expect or that begin with a prefix
    const merchantFields = {};
    // known merchant fields to highlight (you can extend this list)
    const knownMerchantFields = ['order_source', 'shipping_instructions', 'customer_note', 'mdf_1', 'mdf_2'];

    for (const name of formData.keys()) {
      const lname = name.toLowerCase();
      // capture known merchant-defined fields
      if (knownMerchantFields.includes(lname)) {
        merchantFields[lname] = formData.get(name);
      }
      // capture any field that looks like a merchant-defined field prefix
      if (lname.indexOf('order_') === 0 || lname.indexOf('shipping_') === 0 || lname.indexOf('mdf_') === 0) {
        if (!merchantFields[lname]) merchantFields[lname] = formData.get(name);
      }
    }

    // Collect rename entries - there may be multiple x_rename fields
    const renameEntries = [];
    for (const name of formData.keys()) {
      if (name === 'x_rename') {
        const v = formData.get(name);
        if (v) {
          // value expected as 'fieldId,Label[,Description]'
          const parts = v.split(',');
          renameEntries.push({ raw: v, parts });
        }
      }
    }

    // Build HTML that includes these debug sections
    const htmlContent = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Receipt - Worker (with rename/merchant fields)</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  </head>
  <body class="p-4">
    <div class="container">
      <h1>Received Transaction</h1>
      <dl class="row">
        <dt class="col-sm-3">Transaction ID</dt><dd class="col-sm-9">${escapeHtml(transactionId)}</dd>
        <dt class="col-sm-3">Response Code</dt><dd class="col-sm-9">${escapeHtml(responseCode)}</dd>
        <dt class="col-sm-3">Invoice</dt><dd class="col-sm-9">${escapeHtml(invoicenum)}</dd>
        <dt class="col-sm-3">Customer</dt><dd class="col-sm-9">${escapeHtml(custid)}</dd>
        <dt class="col-sm-3">Description</dt><dd class="col-sm-9">${escapeHtml(description)}</dd>
        <dt class="col-sm-3">Amount</dt><dd class="col-sm-9">${escapeHtml(amount)} ${escapeHtml(currency)}</dd>
      </dl>

      <h2>Rename Entries (x_rename)</h2>
      ${renameEntries.length === 0 ? '<p class="text-muted">No x_rename entries found</p>' : ''}
      <ul class="list-group mb-3">
        ${renameEntries.map(e => `<li class="list-group-item"><strong>raw:</strong> ${escapeHtml(e.raw)}<br/><strong>parsed:</strong> ${escapeHtml(JSON.stringify(e.parts))}</li>`).join('')}
      </ul>

      <h2>Merchant-defined Fields</h2>
      ${Object.keys(merchantFields).length === 0 ? '<p class="text-muted">No merchant-defined fields found</p>' : ''}
      <ul class="list-group">
        ${Object.keys(merchantFields).map(k => `<li class="list-group-item"><strong>${escapeHtml(k)}:</strong> ${escapeHtml(merchantFields[k])}</li>`).join('')}
      </ul>

      <hr/>
      <p class="text-muted">This page is for testing only. It echoes the received form data and highlights typical rename and merchant-defined fields.</p>
    </div>
  </body>
</html>`;

    return new Response(htmlContent, {
      headers: { 'content-type': 'text/html; charset=utf-8' }
    });
  }

  return new Response('Method Not Allowed', { status: 405 });
}

// small HTML escaping helper
function escapeHtml(s) {
  if (!s) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
