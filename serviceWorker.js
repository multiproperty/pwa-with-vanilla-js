const staticDevCoffee = "dev-coffee-site-v1";
const assets = [
  "https://www.multiproperty.id/",
  "https://www.multiproperty.id/p/offline.html",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjNHwM5D8QeeGmjoHuXyuNc4HRW07v9cS2n7v2ueDQSzawEE9bpeNw6VLYtrN-sEibkm1_zoH_tqdbPUsxo1mByoWiz6tauEa3ncWt1atiP2GgqBAmHqxXFP9PBgnXFE1wJW1PfSAsytcAOfR52AfJoSchD_Fhp9iZHTYpsW0WaGwYzT-gTBjW-rVaXJUI/s192/logo-header-multiproperty-id.png",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjNHwM5D8QeeGmjoHuXyuNc4HRW07v9cS2n7v2ueDQSzawEE9bpeNw6VLYtrN-sEibkm1_zoH_tqdbPUsxo1mByoWiz6tauEa3ncWt1atiP2GgqBAmHqxXFP9PBgnXFE1wJW1PfSAsytcAOfR52AfJoSchD_Fhp9iZHTYpsW0WaGwYzT-gTBjW-rVaXJUI/s256/logo-header-multiproperty-id.png",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjNHwM5D8QeeGmjoHuXyuNc4HRW07v9cS2n7v2ueDQSzawEE9bpeNw6VLYtrN-sEibkm1_zoH_tqdbPUsxo1mByoWiz6tauEa3ncWt1atiP2GgqBAmHqxXFP9PBgnXFE1wJW1PfSAsytcAOfR52AfJoSchD_Fhp9iZHTYpsW0WaGwYzT-gTBjW-rVaXJUI/s384/logo-header-multiproperty-id.png",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjNHwM5D8QeeGmjoHuXyuNc4HRW07v9cS2n7v2ueDQSzawEE9bpeNw6VLYtrN-sEibkm1_zoH_tqdbPUsxo1mByoWiz6tauEa3ncWt1atiP2GgqBAmHqxXFP9PBgnXFE1wJW1PfSAsytcAOfR52AfJoSchD_Fhp9iZHTYpsW0WaGwYzT-gTBjW-rVaXJUI/s512/logo-header-multiproperty-id.png"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
