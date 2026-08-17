// GYS Pro - Service Worker (PWA/Offline Desteği)
const CACHE_NAME = 'gys-pro-v1';

// Önbelleğe alınacak temel dosyalar
const CORE_ASSETS = [
    './',
    './index.html',
    './css/style.css',
    './js/ui.js',
    './js/education-reader.js',
    './js/app.js',
    './data/user.js',
    './data/exams.js',
    './data/mevzuatFeed.js',
    './data/legal-updates.js',
    './data/Anayasa.js',
    './data/Anayasa-exam.js',
    './data/657.js',
    './data/657-exam.js',
    './data/2577-idariyargiusul.js',
    './data/2577-idariyargiusul-exam.js',
    './data/5018-maliyonetim.js',
    './data/5018-maliyonetim-exam.js',
    './data/bakanlik-teskilati.js',
    './data/bakanlik-teskilati-exam.js',
    './data/devlet-memurlari-mevzuati.js',
    './data/devlet-memurlari-mevzuati-exam.js',
    './data/devlet-teskilati.js',
    './data/devlet-teskilati-exam.js',
    './data/eimza.js',
    './data/eimza-exam.js',
    './data/etik.js',
    './data/etik-exam.js',
    './data/gorev-komisyonlar.js',
    './data/gorev-komisyonlar-exam.js',
    './data/halklailiskiler.js',
    './data/halklailiskiler-exam.js',
    './data/ilkeveinkilaplar.js',
    './data/ilkeveinkilaplar-exam.js',
    './data/ilozelidare.js',
    './data/ilozelidare-exam.js',
    './data/maliyonetim-kontrol.js',
    './data/maliyonetim-kontrol-exam.js',
    './data/merkez-teskilati.js',
    './data/merkez-teskilati-exam.js',
    './data/ortak-komisyonlar.js',
    './data/ortak-komisyonlar-exam.js',
    './data/resmi-yazisma.js',
    './data/resmi-yazisma-exam.js',
    './data/tebligat-kanunu.js',
    './data/tebligat-kanunu-exam.js',
    './data/turkcedilbilgisi.js',
    './data/turkcedilbilgisi-exam.js',
    './data/uyap.js',
    './data/uyap-exam.js',
    './data/yargi-orgutu.js',
    './data/yargi-orgutu-exam.js',
    './data/harclar.js',
    './data/harclar-exam.js',
    './manifest.json'
];

// Kurulum: Tüm dosyaları önbelleğe al
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(CORE_ASSETS);
        }).then(() => self.skipWaiting())
    );
});

// Aktivasyon: Eski önbellekleri temizle
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
            )
        ).then(() => self.clients.claim())
    );
});

// Fetch: Önbellek-önce stratejisi (Cache First)
self.addEventListener('fetch', event => {
    // Sadece GET isteklerini önbellekle
    if (event.request.method !== 'GET') return;

    event.respondWith(
        caches.match(event.request).then(cached => {
            if (cached) return cached;
            return fetch(event.request).then(response => {
                // Geçerli yanıtları önbelleğe ekle
                if (response && response.status === 200) {
                    const clone = response.clone();
                    caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
                }
                return response;
            }).catch(() => {
                // Ağ bağlantısı yoksa önbellekten sun
                return caches.match('./index.html');
            });
        })
    );
});

// Push Notification desteği
self.addEventListener('push', event => {
    const data = event.data ? event.data.json() : {};
    const title = data.title || 'GYS Pro Hatırlatıcı';
    const options = {
        body: data.body || 'Bugün çalışma hedefine ulaştın mı? 📚',
        tag: 'gys-reminder',
        renotify: true,
        data: { url: './' }
    };
    event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', event => {
    event.notification.close();
    event.waitUntil(
        clients.openWindow(event.notification.data?.url || './')
    );
});
