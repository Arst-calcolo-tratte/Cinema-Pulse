/* Cinema Pulse — service worker
   Regola d'oro: il codice dell'app si prende sempre dalla rete quando c'è,
   così un aggiornamento pubblicato arriva davvero sul telefono.
   Solo le immagini e i font restano in cache, perché non cambiano mai. */

const VERSION = '3.1.0';
const SHELL = 'cp-shell-' + VERSION;
const MEDIA = 'cp-media-v3';

const FILES = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.webmanifest',
  './assets/icon.svg',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/apple-touch-icon.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(SHELL).then(c => c.addAll(FILES)));
});

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== SHELL && k !== MEDIA).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('message', e => {
  if (e.data === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;

  let url;
  try { url = new URL(req.url); } catch { return; }

  // Le chiamate a TMDB non si mettono mai in cache: devono essere sempre fresche.
  if (url.hostname === 'api.themoviedb.org') return;

  // Locandine e font: prima la cache, e intanto si aggiornano in sottofondo.
  const isMedia = url.hostname === 'image.tmdb.org'
               || url.hostname === 'fonts.gstatic.com'
               || url.hostname === 'fonts.googleapis.com';
  if (isMedia){
    e.respondWith((async () => {
      const cache = await caches.open(MEDIA);
      const hit = await cache.match(req);
      const net = fetch(req).then(r => { if (r.ok || r.type === 'opaque') cache.put(req, r.clone()); return r; }).catch(() => null);
      return hit || (await net) || Response.error();
    })());
    return;
  }

  if (url.origin !== location.origin) return;

  // Il resto (index, css, js): prima la rete, la cache solo se sei offline.
  e.respondWith((async () => {
    try {
      const r = await fetch(req);
      if (r.ok){
        const cache = await caches.open(SHELL);
        cache.put(req, r.clone());
      }
      return r;
    } catch {
      const hit = await caches.match(req);
      if (hit) return hit;
      if (req.mode === 'navigate') return caches.match('./index.html');
      return Response.error();
    }
  })());
});
