/* This work is licensed under the W3C Software and Document License
 * (http://www.w3.org/Consortium/Legal/2015/copyright-software-and-document).
 */

self.addEventListener("fetch", (event) => {
  // event.respondWith(
  //   (async () => {
  //     // Get content from the network.
  //     // try {
  //     const url = new URL(event.request.url);
  //     return await fetch(event.request);
  //     console.log("URL", url);
  //     if (
  //       event.request.method === "POST" &&
  //       url.pathname === "/share_target/sharetarget.html"
  //     ) {
  //       console.log("INSIDE URL", event.request);
  //       const formData = await event.request.formData();
  //       self.clients.matchAll({ type: "window" }).then((clients) => {
  //         clients.forEach((client) => {
  //           client.postMessage({
  //             formData,
  //             id: "IDDS",
  //           });
  //         });
  //       });
  //     } else {
  //       return await fetch(event.request);
  //     }
  //     // } catch (e) {
  //     //   // Failure. Just return a 200 page, to satisfy Lighthouse.
  //     //   console.log(e);
  //     //   self.clients.matchAll({ type: "window" }).then((clients) => {
  //     //     clients.forEach((client) => {
  //     //       client?.postMessage({
  //     //         e,
  //     //         id: "IDDS",
  //     //       });
  //     //     });
  //     //   });
  //     //   return await fetch(event.request);
  //     //   // return new Response("You are offline :(", { status: 200, e });
  //     // }
  //   })()
  // );
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
