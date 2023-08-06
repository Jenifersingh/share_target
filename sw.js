/* This work is licensed under the W3C Software and Document License
 * (http://www.w3.org/Consortium/Legal/2015/copyright-software-and-document).
 */

self.addEventListener("fetch", (event) => {
  event.respondWith(
    (async () => {
      // Get content from the network.
      try {
        const url = new URL(event.request.url);
        console.log("URL", url);
        if (
          event.request.method === "POST" &&
          url.pathname === "/share_target/sharetarget.html"
        ) {
          console.log("INSIDE URL", event.request);
          const formData = await event.request.formData();
          self.clients.matchAll({ type: "window" }).then((clients) => {
            clients.forEach((client) => {
              client.postMessage({
                formData,
                id: "IDDS",
              });
            });
          });
        }

        Response.redirect(url);

        // return await fetch(event.request);
      } catch (e) {
        // Failure. Just return a 200 page, to satisfy Lighthouse.
        return new Response("You are offline :(", { status: 200 });
      }
    })()
  );
});
