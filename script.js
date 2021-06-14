// Instagram Feed
let userFeed = new Instafeed({
  limit: 4,
  get: "user",
  target: "instafeed_container",
  resolution: "low_resolution",
  template:
    '<a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" class="item" /></a>',
  accessToken:
    "IGQVJXLWRYZAzNZAYnZAuSjNDeVZAsU1MxVG5oRTdVWGpsU3JHajNyTjFUNXQyYnRMdHRrSVZAuQ1NYWlF3SDZAUX1B0QWhpOWxsMXJOQ21WT1BZAXzk1RUM4WFBONzRnTWRBMjQwWC1yMWE2VUR5eDFuQVBOdQZDZD",
});

userFeed.run();
// ----
