'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "398ec974d50a56289fd36cdf582d88bb",
"index.html": "be9de2d00ae4d9971becdfa3260cb9f5",
"/": "be9de2d00ae4d9971becdfa3260cb9f5",
"main.dart.js": "2521e273ae082193fb8f5dc3e18f298d",
"version.json": "8b6eba80ffb54f3fe50bd69feabeaaee",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/fonts/MaterialIcons-Regular.otf": "e6131c92b36ad91cb9c2a1593e905a7d",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "e7808e4d52a3908f2d949f078c2420e0",
"manifest.json": "5d802f6dc67b59de1e1a906a1de78933",
"favicon.png": "bd4d6b8055c240adf119b49277c73f8c",
".git/hooks/applypatch-msg.sample": "4e33b997d7d5d5274c56bbf61f0c0bf9",
".git/hooks/commit-msg.sample": "89cb67435d2c1b9503e32d599d72713c",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "be48e56d8b9f9108aa4ecb32dd12d435",
".git/hooks/pre-applypatch.sample": "1f6a74774ee63312b4ad8a8c6ec7f2e8",
".git/hooks/pre-commit.sample": "3e3b74d84228df7679307b963c138758",
".git/hooks/pre-merge-commit.sample": "f9d3ac247a941cf41ceb86048c699cfe",
".git/hooks/pre-push.sample": "a5a56d58c7133331b00b520ea5548074",
".git/hooks/pre-rebase.sample": "0d4f0a0a63c6a1cbbf0a8b410b9e3c59",
".git/hooks/pre-receive.sample": "c5e60ee055ef7b920a10b2871b1790a2",
".git/hooks/prepare-commit-msg.sample": "529551eb02ce07d5a84df03a8361e155",
".git/hooks/push-to-checkout.sample": "d8204d74ffd9ca215d1687eaca1e9e5b",
".git/hooks/sendemail-validate.sample": "c4c26785acacb2553117cf802723d09f",
".git/hooks/update.sample": "edce28be0c66a0a19729dc76f8143916",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/heads/main": "039ba5a3cbf46fa4a3a77b804160f3ea",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "039ba5a3cbf46fa4a3a77b804160f3ea",
".git/objects/72/6cd4afc52aa934293e3eefde2bac66c03ee31e": "f81584ba5dc880c8d8ebc07997683091",
".git/objects/bf/3f59f47f185149a7133ba08b9b38b9a67c5426": "eed92a58cd423ecc5c9bcab6652cf4d3",
".git/objects/f2/88702d2fa16d3cdf0035b15a9fcbc552cd88e7": "59658bc9665c4a455301002181515f39",
".git/objects/1b/c3649592e0686ef69b18de3ecd9a45f864adf6": "0ae39dc304f5c14668a9868ecf2315a0",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "2ef39341367669d13106432cc82e409d",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "c0245ee3ff96770aae8bf794a219cd27",
".git/objects/a0/637a1ed735a2da5d24fdd62fe64b5b93e5548c": "eb75a5fc4927f8a227e6ae5c929565d2",
".git/objects/64/94fed1ef657dfa96bed9d9b11816f282de2806": "c4543a154a71694cd4a806a4cfbb3a3d",
".git/objects/64/4976250db6b3e8001525fa6c7d47622bd13ec6": "08f708356a1d9979613cd2ce6f6c633a",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "d862eed1843551d333d5acea76f3e853",
".git/objects/e9/8e6ee6b1692c130c375b41c3369b4aa4c47bee": "fb9da36e3b0f96d1888d52426d929c6f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "c61efd0b2feea66b7e3396ea660bc62b",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "69afd4b962e0df31c4808f90a5905662",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "5703cee65ffd72da5ce16b50d6931b46",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "a77589943e807640f147da43977d0472",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "6e3237df155cf58d6d07b7cf51990ae3",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "3ce3e8dc00a3236ad4c514f404a75c88",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "5e1f4b4b3f4258485c4573dcff0b2e97",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "04d24f54e6859ad99c96b44405e99d16",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "e8000de857bd1885bea7b022c8b86f0a",
".git/objects/68/a2c5c467912d001fe04e3dfbc98605af55e45a": "44511cae85ec1aef6ce4d9483b9dacc0",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "4b1606e59bfa020d7b0916c74f83bd00",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "2fd0ccde586c0b4ac5993b47595145ba",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "c85dc847f173c55dcc8c9e99dcd9bc23",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "3a7aee9483e834494df99b773929fcb5",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "fbc4b01fe3285832945ab21c31598d32",
".git/objects/b2/38a904ddb773efd88b70e1779f0424be9d3476": "cad817bd9025e98ee64e69b1a7a5f9a0",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "f589947af57edf0934577d63ecaabc0e",
".git/objects/59/7e8d7231850fddefb7e1ae669c76cf6d415952": "9c39f6a90d30546250b3508c977670e6",
".git/objects/e3/760ca34819423b724ac64354d3f68b0ca260ad": "57472062760f380e5f78b3175c85caa9",
".git/objects/df/d5a0d018e6785fe03345c4f84241c2cacdede7": "6f816564a12b623e7097938afbfba55c",
".git/objects/34/3f78c7f93c9cbf03521b2cd17b24eded65c0e1": "3f3304cc89e36278471593bb41310d10",
".git/objects/2e/e32d74c3f2bd39e805d35b3a69e76a744e7b54": "bc9b58a42ede0e6fa0de7398bf420c17",
".git/objects/32/f89a2066bbd29f0f63bccd7c82a179fb248dcd": "d814cf632dd69827b964a08bcb61cc4a",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "c86893109644c17e9714c1db6ccfdcce",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "6c92b20fd7001a730b83dae39792730c",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/42/8d25086241cc1a46694da4801bd2e12c131769": "145fe1e13612c60d7c0f945a8f78d906",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "ecbb217cd77bebe8c7d8cb5658a9bc71",
".git/objects/ee/a6ca4d78f5fef9c9f11e2f31960bcca190179e": "6d5bba824739d6f8f90c0296be9feb1f",
".git/objects/ec/6738a8050e22bfadd042755a0b6cee497ebc7c": "fd19a3443fc31dc314de4e29c5376fd9",
".git/objects/7e/52b0ab89bf0e7c6e82e7aa25d0d7a8c4fbffd3": "46204be275d7644b7cc1dc5825d144fa",
".git/objects/ba/afa553c303c5e4da88500e1ac05dfe6405d599": "ec5b04fd7f6150417622b87670bcc547",
".git/objects/a3/d9358b993424cd50c3bc979e3f8f61f35fd610": "8a76bf47a32c4553b9be0413580d05cd",
".git/objects/f4/3cc672fb63405e64c36c6e800a5f8219d2d3ba": "0b302b6b472a437d00554b07b39155ca",
".git/objects/43/e5403e093f8a7ad481a6496a8411829ec868ba": "7a6bef073c4fe6082c3cb27204eeeb88",
".git/objects/aa/111e50eda104304e8afa15e631e657bec14ef9": "a1721cb4bb463a1dbba56e72f3897414",
".git/objects/65/34d73f8827aef8ebbc502cb6eb9e36ce9c3856": "b1d690ad3dd607d9958207d5ac74e28d",
".git/objects/9a/1becc0d540e1909c01afcdc7bce71648f84322": "76c6d7343b0b1ced6741ab52394c0d3d",
".git/objects/f7/e06a46fad5449c9c4f042f629126dac89f223a": "825d260e59dde9ca53238bd3e6bc658b",
".git/objects/e8/64ee04e0171c66a2aee2458aeb9c03f1f400d7": "a107a7fd68f7ab05115976add57609fa",
".git/objects/d2/06f549a722b0942ca02a6b0027b89e70ef0856": "02b9357e0c4716a40bb7726464301b78",
".git/objects/80/4da10bab69f3f437f864cd0ec72204376a7f14": "f36cf4a1e3fa3304dfff4ebf9f63a8fb",
".git/objects/ca/696aac9bd3bd6ce04766bdc6b8a9ba1b7a5444": "84cebf053dd0de743b5c654a4caae7f6",
".git/FETCH_HEAD": "8bc5b5043dd8c627174c5b73de2a07a6",
".git/logs/refs/remotes/origin/main": "d1bc95d53b04ff5ee5a8aa6a5dfcb9cf",
".git/logs/refs/remotes/origin/HEAD": "d77e5c558279b84b6fdd6873852d03f2",
".git/logs/refs/heads/main": "b1204a066bd9563a3f2dfc9f71f79ba8",
".git/logs/HEAD": "bf70d36a1cec58b2253bbc67ca751f92",
".git/COMMIT_EDITMSG": "90f88befc9c2c7ed7ee4782c7a7c258e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/config": "746a24f47ccf6126125d0d5c1217b3b7",
".git/index": "204eeeae1855f0d98240443be621c01c",
"LICENSE": "1ebbd3e34237af26da5dc08a4e440464"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
