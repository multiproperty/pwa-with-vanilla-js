// check if the serviceWorker object exists in the navigator object
if ('serviceWorker' in navigator) {

    // attach event listener  on page l aod
    window.addEventListener('load', function() {

        // register serviceWorker withthe [service-worker.js] file
        navigator.serviceWorker.register('https://raw.githubusercontent.com/multiproperty/pwa-with-vanilla-js/master/serviceWorker.js').then(registration => {

            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);

        }, function(err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });

    });
}

// install event for the service worker
self.addEventListener('install', e => {

    e.waitUntil(
        caches.open('site-static').then(cache => {
            cache.addAll(['https://www.multiproperty.id/', 'https://github.com/multiproperty/pwa-with-vanilla-js/', 'https://www.multiproperty.id/p/offline.html'])
        })
    )

})


self.addEventListener("fetch", function(event) {
    event.respondWith(
        fetch(event.request).catch(function() {
            return caches.match(event.request).then(function(response) {
                if (response) {
                    return response;
                } else if (event.request.headers.get("accept").includes("text/html")) {
                    return caches.match("https://www.multiproperty.id/p/offline.html");
                }
            });
        })
    );
});
