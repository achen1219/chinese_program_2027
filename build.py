"""Assemble the single-file app.

  py build.py                 ->  dist/artifact.html  (body only; claude.ai adds the document skeleton)
                                  index.html, sw.js, manifest.webmanifest  (the phone site: an installable,
                                  offline-capable web app; icons/ comes from make_icons.py)
  py build.py --deploy DIR    ->  also copies the phone site into DIR (e.g. a GitHub Pages checkout)
"""
import hashlib
import json
import shutil
import sys
from pathlib import Path

ROOT = Path(__file__).parent
SRC = ROOT / "src"
DATA = ["data_plan.js", "data_listening.js", "data_reading.js", "data_writing.js", "data_speaking.js", "data_toolkit.js",
        "data_batch2_listening.js", "data_batch2_reading.js", "data_batch2_writing.js", "data_sync.js"]
SITE_FILES = ["index.html", "sw.js", "manifest.webmanifest", "icons"]

PWA_HEAD = """<meta name="robots" content="noindex">
<meta name="theme-color" content="#f5f7f1" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#111713" media="(prefers-color-scheme: dark)">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="AP中文">
<link rel="manifest" href="manifest.webmanifest">
<link rel="icon" type="image/png" href="icons/icon-192.png">
<link rel="apple-touch-icon" href="icons/apple-touch-icon.png">
"""

# Registers the offline cache and offers a reload when a newer version has been fetched.
PWA_SCRIPT = """<script>
if ('serviceWorker' in navigator && location.protocol !== 'file:') {
  window.addEventListener('load', function () { navigator.serviceWorker.register('sw.js').catch(function () {}); });
  navigator.serviceWorker.addEventListener('message', function (e) {
    if (!e.data || e.data.type !== 'apzh-updated' || document.getElementById('updbar')) return;
    var b = document.createElement('div'); b.id = 'updbar'; b.className = 'toast';
    b.innerHTML = '有新版本　<button class="linkish" style="color:inherit">更新</button>';
    b.querySelector('button').onclick = function () { location.reload(); };
    document.body.appendChild(b);
  });
}
</script>
"""

# Cache-first with background refresh: opens instantly and works with no signal;
# a newer copy is fetched whenever there is a connection and used on the next open.
SW = """const CACHE = 'apzh-__HASH__';
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
"""

MANIFEST = {
    "name": "AP中文備考室",
    "short_name": "AP中文",
    "description": "AP Chinese Language and Culture（繁體）2027 備考練習",
    "lang": "zh-Hant",
    "start_url": "./",
    "scope": "./",
    "display": "standalone",
    "background_color": "#f5f7f1",
    "theme_color": "#1d6849",
    "icons": [
        {"src": "icons/icon-192.png", "sizes": "192x192", "type": "image/png"},
        {"src": "icons/icon-512.png", "sizes": "512x512", "type": "image/png"},
        {"src": "icons/icon-maskable-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable"},
    ],
}


def read(name):
    return (SRC / name).read_text(encoding="utf-8")


def write(path, text):
    path.write_text(text, encoding="utf-8", newline="\n")


def main():
    shell = read("shell.html")
    page = (shell.replace("/*CSS*/", read("styles.css"))
                 .replace("/*DATA*/", "\n".join(read(n) for n in DATA))
                 .replace("/*APP*/", read("app.js")))
    head, body = page.split("<!--BODY-->")
    head = head.replace("<!--HEAD-->", "").strip()
    body = body.strip()

    (ROOT / "dist").mkdir(exist_ok=True)
    write(ROOT / "dist" / "artifact.html", head + "\n" + body + "\n")

    standalone = ("<!doctype html>\n<html lang=\"zh-Hant\">\n<head>\n<meta charset=\"utf-8\">\n"
                  "<meta name=\"viewport\" content=\"width=device-width,initial-scale=1,viewport-fit=cover\">\n"
                  + PWA_HEAD + head + "\n</head>\n<body>\n" + body + "\n" + PWA_SCRIPT + "</body>\n</html>\n")
    write(ROOT / "index.html", standalone)
    digest = hashlib.sha256(standalone.encode("utf-8")).hexdigest()[:10]
    write(ROOT / "sw.js", SW.replace("__HASH__", digest))
    write(ROOT / "manifest.webmanifest", json.dumps(MANIFEST, ensure_ascii=False, indent=2) + "\n")

    for name in ("dist/artifact.html", "index.html", "sw.js"):
        print(name, (ROOT / name).stat().st_size, "bytes")

    if "--deploy" in sys.argv:
        dest = Path(sys.argv[sys.argv.index("--deploy") + 1])
        dest.mkdir(parents=True, exist_ok=True)
        for name in SITE_FILES:
            src = ROOT / name
            if src.is_dir():
                shutil.copytree(src, dest / name, dirs_exist_ok=True)
            else:
                shutil.copy2(src, dest / name)
        print("copied site to", dest)


if __name__ == "__main__":
    main()
