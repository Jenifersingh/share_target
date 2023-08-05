/* This work is licensed under the W3C Software and Document License
 * (http://www.w3.org/Consortium/Legal/2015/copyright-software-and-document).
 */

self.addEventListener("fetch", (event) => {
  event.respondWith(
    (async () => {
      // Get content from the network.
      try {
        const url = new URL(event.request.url);
        if (
          event.request.method === "POST" &&
          url.pathname === "/sharetarget.html"
        ) {
          const formData = await event.request.formData();
          postMessage({
            formData,
          });
          return;
        }
        return await fetch(event.request);
      } catch (e) {
        // Failure. Just return a 200 page, to satisfy Lighthouse.
        return new Response("You are offline :(", { status: 200 });
      }
    })()
  );
});

// self.addEventListener('fetch', event => {
//   const url = new URL(event.request.url);
//   // If this is an incoming POST request for the
//   // registered "action" URL, respond to it.
//   if (event.request.method === 'POST' &&
//       url.pathname === '/bookmark') {
//     event.respondWith((async () => {
//       const formData = await event.request.formData();
//       const link = formData.get('link') || '';
//       const responseUrl = await saveBookmark(link);
//       return Response.redirect(responseUrl, 303);
//     })());
//   }
// });
