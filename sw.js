self.addEventListener('install', (e) => {
  e.waitUntil(caches.open('plushie-store').then((cache) => {
    return cache.addAll(['/', '/plushie-camera.html', '/manifest.json']);
  }));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});