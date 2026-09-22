const CACHE_NAME = "lian0123-portfolio-v8";
const APP_SHELL = [
  "/",
  "/index.html",
  "/Lian0123_main_card.html",
  "/Lian0123_qr_card.html",
  "/manifest.webmanifest",
  "/icon.svg",
  "/Source/CSS/engineering.css",
  "/Source/JS/portfolio-content.js",
  "/Source/JS/app-react.js",
  "/Source/JS/Include/react-18.3.1.min.js",
  "/Source/JS/Include/react-dom-18.3.1.min.js",
  "/llms.txt"
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(APP_SHELL);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys
          .filter(function (key) {
            return key.startsWith("lian0123-portfolio-") && key !== CACHE_NAME;
          })
          .map(function (key) {
            return caches.delete(key);
          })
      );
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (event) {
  if (event.request.method !== "GET" || new URL(event.request.url).origin !== self.location.origin) {
    return;
  }

  event.respondWith(
    caches.open(CACHE_NAME).then(async function (cache) {
      const cachedResponse = await cache.match(event.request);
      // Refresh document navigation; keep versioned application assets available offline.
      if (cachedResponse && event.request.mode !== "navigate") return cachedResponse;
      try {
        const response = await fetch(event.request);
        if (response.status === 200 && response.type === "basic") {
          await cache.put(event.request, response.clone());
        }
        return response;
      } catch (_) {
        if (cachedResponse) return cachedResponse;
        if (event.request.mode === "navigate") {
          const fallback = await cache.match("/index.html");
          if (fallback) return fallback;
        }
        return Response.error();
      }
    })
  );
});
