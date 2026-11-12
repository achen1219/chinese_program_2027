const CACHE = 'apzh-9756a8505e';
const CORE = ['./', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k.startsWith('apzh-') && k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
const tag = r => r && (r.headers.get('etag') || r.headers.get('last-modified'));
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  const page = req.mode === 'navigate';
  const key = page ? self.registration.scope : req;
  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const hit = await cache.match(key);
    const net = fetch(req).then(async res => {
      if (res && res.ok) {
        if (page && hit && tag(hit) && tag(res) && tag(hit) !== tag(res)) {
          const cs = await self.clients.matchAll();
          cs.forEach(c => c.postMessage({ type: 'apzh-updated' }));
        }
        await cache.put(key, res.clone());
      }
      return res;
    }).catch(() => null);
    e.waitUntil(net);
    return hit || (await net) || new Response('離線中，而且還沒有快取。請連上網路再開一次。', { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
  })());
});
