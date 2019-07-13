const preCache = 'preCache';
const runtime = 'runtime';

const preCacheUrls = ['index.html', './',];

self.addEventListener('install', event => event.waitUntil(caches.open(preCache)
  .then(cache => cache.addAll(preCacheUrls))
  .then(self.skipWaiting())));
//
// self.addEventListener('activate', event => {
//   const currentCaches = [preCache, runtime];
//   event.waitUntil(caches.keys().then(
//     cacheNames => cacheNames.filter(cacheName => !currentCaches.includes(cacheName))).then(
//     cachesToDelete => Promise.all(cachesToDelete.map(
//       cacheToDelete => caches.delete(cacheToDelete)))).then(() => self.clients.claim()));
// });
//
// self.addEventListener('fetch', event => {
//   if (event.request.url.startsWith(self.location.origin)) {
//     event.respondWith(caches.match(event.request).then(cachedResponse => {
//       if (cachedResponse) return cachedResponse;
//
//       return caches.open(runtime).then(cache => fetch(event.request).then(
//         response => cache.put(event.request, response.clone()).then(() => response)));
//     }));
//   }
// });
