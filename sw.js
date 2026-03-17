const CACHE_NAME = 'malta-vape-v1';
const urlsToCache = [
  'index.html',
  'manifest.json',
  'https://i.imgur.com/h3D0nVP.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
