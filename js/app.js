// --- TARAYICI GERİ TUŞU VE YÖNLENDİRME MOTORU (HISTORY API) ---
function navigateTo(targetId, isBack = false) {
    // 1. Ana sayfaya dönülüyorsa güncel ilerlemeyle yeniden çiz
    if(targetId === 'home' && typeof renderHome === 'function' && typeof db !== 'undefined') {
        renderHome(db);
    }

    // 2. Tüm sayfaları ekrandan gizle ve temizle
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    
    // 3. Hedef sayfayı göster
    const targetPage = document.getElementById('page-' + targetId);
    if(targetPage) targetPage.classList.add('active');

    // 4. Alt menü ikonlarının renklerini ayarla
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.getAttribute('data-target') === targetId) btn.classList.add('active');
    });

    // 5. Tarayıcı geçmişine kaydet (Geri tuşuyla gelmediysek)
    if(!isBack) {
        history.pushState({ page: targetId }, "", "#" + targetId);
    }
}

// Cihazın / Tarayıcının Geri Tuşuna Basıldığında Çalışacak Dinleyici
window.addEventListener('popstate', (e) => {
    if(e.state && e.state.page) {
        if(e.state.page === 'home') renderHome(db); // <-- BURAYI EKLE
        navigateTo(e.state.page, true); // Alt menülere dön
    } else if (e.state && e.state.konu) {
        openSubjectDetail(e.state.konu, true); // Konu içine dön
    } else {
        renderHome(db); // <-- BURAYI EKLE
        navigateTo('home', true); // Hiçbir şey yoksa Ana Sayfaya dön
    }
});


// --- UYGULAMA VERİ TABANI ---
const db = {
    kullanici: { ad: "Ahmet", soyad: "Yılmaz", unvan: "Zabıt Katibi", ilerleme: 0, istatistik: { cozulenSoru: 0, basariOrani: 0, calismaSerisi: 0 } },
    ortakKonular: [
    { baslik: "Anayasa", ikon: "🏛️", tamamlanma: 85 },
    { baslik: "Atatürk İlke ve İnkılâpları", ikon: "🇹🇷", tamamlanma: 45 },
    { baslik: "Devlet Teşkilatı", ikon: "🏢", tamamlanma: 20 },
    { baslik: "657 Sayılı Yasa", ikon: "📘", tamamlanma: 30 },
    { baslik: "Dil Bilgisi", ikon: "✍️", tamamlanma: 15 },
    { baslik: "Halkla İlişkiler", ikon: "🤝", tamamlanma: 10 },
    { baslik: "Etik Davranış", ikon: "⚖️", tamamlanma: 12 },
    { baslik: "Bakanlık Merkez Teşkilatı", ikon: "🏛️", tamamlanma: 18 },
    { baslik: "Komisyonlar ve Yapılanma", ikon: "🧩", tamamlanma: 8 },
    { baslik: "UYAP", ikon: "🖥️", tamamlanma: 40 },
    { baslik: "5018 S.Y. Mali Yönetim", ikon: "💰", tamamlanma: 14 }
],
gorevKonulari: [
    { baslik: "Bakanlık Teşkilatı", ikon: "🏢", tamamlanma: 60 },
    { baslik: "Komisyonlar ve Görevler", ikon: "📋", tamamlanma: 22 },
    { baslik: "Yargı Örgütü", ikon: "🏛️", tamamlanma: 25 },
    { baslik: "E-imza", ikon: "✒️", tamamlanma: 16 },
    { baslik: "Resmi Yazışma", ikon: "📝", tamamlanma: 10 },
    { baslik: "Tebligat Kanunu", ikon: "📨", tamamlanma: 17 },
    { baslik: "Devlet Memurları Mevzuatı", ikon: "👨‍💼", tamamlanma: 13 },
    { baslik: "Kamu Mali Yönetim; Kontrol ve Faaliyetler", ikon: "📊", tamamlanma: 9 },
    { baslik: "İdari Yargılama Usulü", ikon: "⚖️", tamamlanma: 11 }
],
    guncelMevzuat: window.legalUpdatesSeed || [
        { tarih: "12 MART 2024", baslik: "8. Yargı Paketi Süre Değişikliği", detay: "İtiraz ve istinaf süreleri tüm mahkemelerde '2 hafta' olarak yeknesak hale getirildi." }
    ],
    mevzuatFeed: [
        { etiket: "657 s. Kanun", metin: "Devlet memurları için disiplin cezaları: Uyarma, Kınama, Aylıktan Kesme, Kademe İlerlemesinin Durdurulması ve İhraç.", favoriMi: true },
        { etiket: "T.C. Anayasası", metin: "AYM 15 üyeden kurulur. 3 üyeyi TBMM, 12 üyeyi Cumhurbaşkanı seçer.", favoriMi: false }
    ]
};

async function loadLegalUpdates() {
    const sourceUrl = window.LEGAL_NEWS_SOURCE_URL;
    if (!sourceUrl) return;

    try {
        const res = await fetch(sourceUrl, { cache: 'no-store' });
        if (!res.ok) return;
        const payload = await res.json();
        if (Array.isArray(payload) && payload.length > 0) {
            db.guncelMevzuat = payload;
            renderHome(db);
        }
    } catch (e) {
        console.warn('Güncel mevzuat kaynağına erişilemedi, örnek veri kullanılıyor.');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // localStorage'den kaydedilmiş ilerleme ve istatistikleri yükle
    const savedProgress = localStorage.getItem('gys_progress');
    if (savedProgress !== null) db.kullanici.ilerleme = parseInt(savedProgress);

    try {
        const savedStats = JSON.parse(localStorage.getItem('gys_istatistik'));
        if (savedStats) db.kullanici.istatistik = savedStats;
    } catch(e) {}

    // Kayıtlı tema tercihini uygula
    const savedTheme = localStorage.getItem('gys_tema');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        document.getElementById('theme-toggle').innerText = '☀️';
    }

    console.log("YUKLENEN anayasaDB:", window.anayasaDB);

    // İlk Çizimler
    renderHome(db);
    initFeed(db.mevzuatFeed);
    renderQuizMenu();
    renderProfile(db);
    loadLegalUpdates();

    // Menü Tıklamaları
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => { 
            const target = e.currentTarget.getAttribute('data-target');
            if(target === 'quiz') renderQuizMenu();
            if(target === 'home') renderHome(db);
            if(target === 'profile') renderProfile(db);
            if(target === 'feed') initFeed(db.mevzuatFeed);
            navigateTo(target); 
        });
    });

    // Tema Değiştirici
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            const isDark = document.body.classList.contains('dark-theme');
            themeBtn.innerText = isDark ? '☀️' : '🌙';
            localStorage.setItem('gys_tema', isDark ? 'dark' : 'light');
        });
    }

    // İlk açılışta state oluştur
    history.replaceState({ page: 'home' }, "", "#home");
    navigateTo('home', true);
});