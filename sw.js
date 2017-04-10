const CACHE_VERSION = '0.4';
const urlsToCache = [
    'PWA/',
    'index.html',
    'dist/app.min.js',
    'src/media/Cannon-sound-effect.mp3',
    'src/style.css'
];

self.addEventListener('install',event => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_VERSION)
            .then(cache => cache.addAll(urlsToCache))
    )
});

self.addEventListener('fetch',event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    )
});


self.addEventListener('active',event => {
    self.clients.claim();

    const cacheWhitelist = [CACHE_VERSION];
    caches.keys()
        .then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if(cacheWhitelist.indexOf(cacheName) === -1){
                        return caches.delete(cacheName);
                    }
                })
            )
        })
});
