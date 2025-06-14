self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('sorteosvarez').then(function(cache) {
      return cache.addAll([
        './',
        './index.html',
        './flyer.jpeg',
        './manifest.json',
        './icon.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});