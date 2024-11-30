const kvNamespace = WEBHOOK_DATA; // Bind the KV Namespace

addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method === "POST") {
    event.respondWith(handleWebhook(request));
  } else {
    event.respondWith(showFeed());
  }
});

// Handle POST requests (webhook)
async function handleWebhook(request) {
  try {
    const contentType = request.headers.get("Content-Type");
    if (contentType !== "application/json") {
      return new Response("Invalid Content-Type", { status: 400 });
    }

    const payload = await request.json();
    console.log("Webhook payload received:", payload); // Log for debugging

    // Generate a unique key for the payload (timestamp-based)
    const key = new Date().toISOString();

    // Store the payload in KV storage
    await kvNamespace.put(key, JSON.stringify(payload));

    return new Response("Webhook received and stored!", { status: 200 });
  } catch (error) {
    console.error("Error processing webhook:", error);
    return new Response("Error processing webhook", { status: 500 });
  }
}

// Handle GET requests (display webhook data)
async function showFeed() {
  try {
    // Retrieve all keys from KV storage
    const keys = await kvNamespace.list();

    // Retrieve values for all keys
    const values = await Promise.all(
      keys.keys.map((key) => kvNamespace.get(key.name))
    );

    // Format the data as JSON
    const data = values.map((value) => JSON.parse(value));

    const html = `
      <html>
        <head><title>Webhook Feed</title></head>
        <body>
          <h1>Webhook Feed</h1>
          <pre>${JSON.stringify(data, null, 2)}</pre>
        </body>
      </html>
    `;
    return new Response(html, {
      headers: { "Content-Type": "text/html", "Cache-Control": "no-store" },
    });
  } catch (error) {
    console.error("Error displaying feed:", error);
    return new Response("Error displaying feed", { status: 500 });
  }
}
