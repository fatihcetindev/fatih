'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/asset/cbgd1.png": "3420256cd1fb1ade16e3785578d3f7c8",
"assets/asset/cbgd2.png": "5684fbd4bec3bb2259a4b79a56028562",
"assets/asset/cbgd3.png": "385f73e214a066d6000fc0f9acca4031",
"assets/asset/clg1.png": "83be1a7e82c682331ef9f91cc3175cf7",
"assets/asset/clgbyz1.png": "3f0219176b4938e13572a457e6736a33",
"assets/asset/clgtrnc.png": "d73d35c422193b90cf0ad2a23484e1c2",
"assets/asset/coredinat.png": "a10d286c695b5a6b5e3ba0809b552598",
"assets/asset/fatih.png": "9e68cadf32bb918e182dbe8cbc108ca0",
"assets/asset/kbs.png": "99d11be01a86a379014ca270436dc46a",
"assets/asset/mbg1.png": "6dcebf73b2599c022f69e58f8a8187f8",
"assets/asset/rep/1.jpg": "cf0a93319134b3dc4db872c7eb7f0c4d",
"assets/asset/rep/10.jpg": "278a9b53f14ae498c81ed8dd248e5516",
"assets/asset/rep/11.jpg": "89e150b0138d96153cffb4d96b7a6244",
"assets/asset/rep/12.jpg": "ab96c09fd33d2b00356a794018ba65f7",
"assets/asset/rep/13.jpg": "6e2c89a97e73f2833a81fdd1670244e5",
"assets/asset/rep/14.jpg": "00c818c63cbdf32d8f4850d68da0a13f",
"assets/asset/rep/15.jpg": "5bcc13015b8fb8ccafa04e580786b7a3",
"assets/asset/rep/16.jpg": "e3135bfe3a366b36c7133592a6afa5b2",
"assets/asset/rep/17.jpg": "bf7f77bb2a79f6f5ad288ce414d66791",
"assets/asset/rep/18.jpg": "b03c97e55df828d31a2939a177aaacbd",
"assets/asset/rep/19.jpg": "1e5f685fa879478b1dd2752acdd44a76",
"assets/asset/rep/2.jpg": "21fff197049b3e97425a7a0fb18885cb",
"assets/asset/rep/20.jpg": "d1d55e5eff54939fee069c73fd152a60",
"assets/asset/rep/21.jpg": "01ccbb00f69992651ff30224943f7300",
"assets/asset/rep/22.jpg": "78a95afe304efdf66feffea878dda67e",
"assets/asset/rep/23.jpg": "e21c04d011ce0225feb7248ea4bd9346",
"assets/asset/rep/24.jpg": "ed77fc5217e902bbaaec2b6c094f65b6",
"assets/asset/rep/25.jpg": "bf6e6edfe377c8c7211ee22a34df016f",
"assets/asset/rep/26.jpg": "34ebe189e4f9a9ac64100a79f2cd937e",
"assets/asset/rep/27.jpg": "84d3562afcde7a1a1d0a3e48ff51d738",
"assets/asset/rep/28.jpg": "aaf44e036cba5c2ff5df531c8fb1bca1",
"assets/asset/rep/29.jpg": "da2ad0a80ea2b01c9fb87e1a01e52cda",
"assets/asset/rep/3.jpg": "eb220f68c69c818b09265ef57e61f135",
"assets/asset/rep/30.jpg": "4c38903725943047bc20fa33c5e68bb4",
"assets/asset/rep/31.jpg": "79c1d5e9d9e69a4191c8b0bf075daaeb",
"assets/asset/rep/32.jpg": "4742938666157ea80bba4243264374e1",
"assets/asset/rep/33.jpg": "49cbffd4ef6398e8fed9de133859e7e2",
"assets/asset/rep/34.jpg": "cfb6c7518c9a6f5cdb0d23f4ba5a851d",
"assets/asset/rep/4.jpg": "632fb21a58ba3d23c9e898d226971853",
"assets/asset/rep/5.jpg": "6d1dfd30de5aef26b0edb10df8ad14ed",
"assets/asset/rep/6.jpg": "12d59e9074f554885c983a1292e97d18",
"assets/asset/rep/7.jpg": "00e9592348f292e114968dcef41945e2",
"assets/asset/rep/8.jpg": "94837f5dad8379253a199326f08ccbe5",
"assets/asset/rep/9.jpg": "206562ec84c043f64aa51d3ea4da2f48",
"assets/asset/setup/1.png": "873192e617e4e6d252371deb90594074",
"assets/asset/setup/10.png": "3221b7a104f0f35c291eedbf8bd9cc9e",
"assets/asset/setup/2.png": "ccd719560df45d4a312f5b3d283917cf",
"assets/asset/setup/3.png": "87ce6a75a65e3e50627cac3cde613645",
"assets/asset/setup/5.png": "da524e0e02e8a23ee7185637fbf65dec",
"assets/asset/setup/6.png": "74ce37db1ea40b946807490d33ae50c2",
"assets/asset/setup/7.png": "cd933892c7f3800c6bebe4c9750f57d8",
"assets/asset/setup/8.png": "8ca712aea6c282b5ecf8402ca19ff4f8",
"assets/asset/setup/9.png": "f6f8c622741307f76b1e775c6f3fd57e",
"assets/AssetManifest.json": "7a871202facaac532cef26fd2a964ae6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "3f61ba71de26424655fdb9210579b414",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ddb412ddaf47d9acc5b2206d97ba7e62",
"/": "ddb412ddaf47d9acc5b2206d97ba7e62",
"main.dart.js": "c0c22aa0a53134d92d409aed89a32b44",
"manifest.json": "ae54291043063132cd326bc4abcb2394",
"version.json": "7ded68f0d5f282ad5edc625b953decad"
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
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
