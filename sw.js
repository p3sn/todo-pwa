// service worker
// voor meer info over offline-first web-apps, zie het offline-cookbook:
// https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/


var CACHE_NAME = 'ilionxqnh-v1';
var filesToCache = [
  '',
  '/manifest.json',
  '/index.html',
  '/assets/styles.css',
  '/assets/bg2.jpg',
  '/sw.js'
];

self.addEventListener('install', function (event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(function (cache) {
      console.log('Opened cache');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
    .then(function (response) {
      return response || fetch(event.request);
    })
  );
});
