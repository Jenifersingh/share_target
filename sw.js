/* This work is licensed under the W3C Software and Document License
 * (http://www.w3.org/Consortium/Legal/2015/copyright-software-and-document).
 */

self.addEventListener("fetch", (event) => {
  event.respondWith(
    (async () => {
      // Get content from the network.
      const url = new URL(event.request.url);
      console.log("URL", url);
      if (
        event.request.method === "POST" &&
        url.pathname === "/share_target/sharetarget.html"
      ) {
        let clonedRequest = event.request.clone();
        console.log("INSIDE URL", clonedRequest);
        const formData = clonedRequest.formData();
        console.log("EVENT REQ : ", formData);
        self.clients.matchAll({ type: "window" }).then((clients) => {
          clients.forEach((client) => {
            console.log("POSTMESSAGE : ", client, client.postMessage);
            client.postMessage({
              formData,
              id: "IDDS",
            });
          });
        });

        return await fetch(event.request);
      }

      return await fetch(event.request);
    })()
  );
});
