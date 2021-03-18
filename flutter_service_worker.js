'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "91ad026c57645973454e9940e0f45838",
".git/config": "4de0081cac72acbca759653802b02c0a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a8711379eac633a140eb54f176cb5b73",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "62f50d39e6ffce3d97e65dbacc235abf",
".git/logs/refs/heads/main": "62f50d39e6ffce3d97e65dbacc235abf",
".git/logs/refs/remotes/origin/HEAD": "960aafca508c88de757132da722e6123",
".git/logs/refs/remotes/origin/main": "89fa105375682c6ca50f099b48e2b24f",
".git/objects/31/e51221e6bbf6cbcd82cb91a9333926e5741f90": "30a6b705421e27817f4f493c58dd9a42",
".git/objects/84/cf9c762924563d35998a4c045a67d02b2c295d": "e802e3d6e249297e303f85ba7cf7827b",
".git/objects/df/59794023cd90a03a2e50cf8ab9dea9e2424ba9": "36610dfdc6a96dc5e44ddc59c2c4ff0a",
".git/objects/f8/1b8b8fa046209446aba89c99ee71034e197146": "58a15a9b913488370d98624aa927a429",
".git/objects/fc/2019f8930388a0da7c562266175c146e3a3f49": "4d96711515c66c1aba6e3cd05af2a09c",
".git/objects/pack/pack-0d8625676bfac33734668f4a87b3269f62d30fd0.idx": "9b7be9fc31b28d39cb07721ca1f82514",
".git/objects/pack/pack-0d8625676bfac33734668f4a87b3269f62d30fd0.pack": "920b3a7600b5fffe5640f5c4d25413b2",
".git/packed-refs": "595f5fd21231c8547a3e6c8c6508c7b6",
".git/refs/heads/main": "2fef6628be35bd9a6079abfd799f5ec3",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "2fef6628be35bd9a6079abfd799f5ec3",
"assets/AssetManifest.json": "3656775c3f21bc5320909cba2ae16114",
"assets/assets/fonts/ArchivoBlack-Regular.ttf": "524a4cbdf53cdb9bb2742d2aa7a25c36",
"assets/assets/img/background.png": "b0f5bd9844c2d1532ce4ed29dcaa389d",
"assets/assets/img/baner-principal.jpg": "0369dd19e3afd2b646ff82d51fde10c1",
"assets/assets/img/fondo.png": "2f02bf29fa5239aebaffc5a484fd71e4",
"assets/assets/img/logo.png": "566df4ce779cf0f96fe0de9cb503faa5",
"assets/FontManifest.json": "a7926c4c7416ac5cab307c5660b707c8",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "ca0459606979e0850814bfb66d6b4d75",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "bbd178fe4f7c399076008e711e374b85",
"/": "bbd178fe4f7c399076008e711e374b85",
"main.dart.js": "89308dbb1b443db10ae8c92de0eae227",
"manifest.json": "48b4a6e2d0ae4f3f7923fb7063df7b9c",
"README.md": "3d36b5ed55ff1fb73b03507bf311dd59",
"splash/img/dark-1x.png": "fc38a0a848ba1f1f4b080f8855c07438",
"splash/img/dark-2x.png": "274930f7955d13011c6bd47c51edbafb",
"splash/img/dark-3x.png": "576b129c0d5e53191b66baa328a1e47a",
"splash/img/light-1x.png": "fc38a0a848ba1f1f4b080f8855c07438",
"splash/img/light-2x.png": "274930f7955d13011c6bd47c51edbafb",
"splash/img/light-3x.png": "576b129c0d5e53191b66baa328a1e47a",
"splash/style.css": "1b5b9cf60395e2282a1a5a594294920e",
"version.json": "1ec85aefc0ef30a192ad72366ea59874"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
