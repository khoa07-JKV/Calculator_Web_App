self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('calc-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/calculator.html',
        '/manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});