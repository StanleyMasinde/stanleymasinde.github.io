const cacheVersion = 'v1'

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (!cacheVersion.includes(key)) {
                    console.log('[Service Worker] Removing old cache.', key)
                    return caches.delete(key)
                }
            }))
        })
    )
})

self.addEventListener('fetch', (event) => {
    const requestUrl = event.request.url
    const requiredUrls = requestUrl.includes('sw.js') || requestUrl.includes('manifest.json')
    if (requiredUrls) {
        return event.respondWith(fetch(event.request))
    }

    if (requestUrl.includes('.css') || requestUrl.includes('.js')) {
        handleDynamicAssets(event)
    }
})

self.addEventListener('install', (event) => {
    event.waitUntil(
        addItemsToCache()
    )

    self.skipWaiting()
})


async function handleDynamicAssets(event) {
    const existsInCache = await caches.match(event.request)
    if (existsInCache) {
        return existsInCache
    }

    const networkResponse = await fetch(event.request)
    if (networkResponse.ok) {
        const cache = await caches.open(cacheVersion)
        cache.put(event.request, networkResponse.clone())
        networkResponse
    }

}

async function addItemsToCache() {
    const cache = await caches.open(cacheVersion)
    await cache.addAll(['/'])
}
