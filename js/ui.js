// --- YARDIMCI FONKSİYONLAR ---

// --- İLERLEME YÖNETİMİ (localStorage ile kalıcı) ---
function getSessionProgress() {
    const saved = localStorage.getItem('gys_progress');
    if (saved !== null) {
        return parseInt(saved);
    }
    return (typeof db !== 'undefined' && db.kullanici) ? db.kullanici.ilerleme : 0;
}

function addSessionProgress(amount) {
    let current = getSessionProgress();
    let updated = Math.min(100, current + amount);
    localStorage.setItem('gys_progress', updated);
    if (typeof db !== 'undefined' && db.kullanici) {
        db.kullanici.ilerleme = updated;
    }
}

// ----

function enableDragScroll() {
    const sliders = document.querySelectorAll('.scroll-container');
    let isDown = false;
    let startX;
    let scrollLeft;

    sliders.forEach(slider => {
        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const walk = (e.pageX - slider.offsetLeft - startX) * 2;
            slider.scrollLeft = scrollLeft - walk;
        });
    });
}

function openModal(baslik, metin) {
    document.getElementById('modal-title').innerHTML = baslik;
    document.getElementById('modal-text').innerHTML = metin;
    document.getElementById('custom-modal').classList.add('show');
}

function closeModal() {
    document.getElementById('custom-modal').classList.remove('show');
}

const FAVORITES_STORAGE_KEY = 'gys_favorites_v1';
const WRONG_QUESTIONS_STORAGE_KEY = 'gys_yanlis_sorular';

function getFavoriteStore() {
    try {
        return JSON.parse(localStorage.getItem(FAVORITES_STORAGE_KEY) || '{}');
    } catch (e) {
        return {};
    }
}

function saveFavoriteStore(store) {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(store));
}

function getItemId(prefix, fallback) {
    return `${prefix}:${String(fallback)}`;
}

function isItemFavorite(itemId, defaultValue = false) {
    const store = getFavoriteStore();
    if (Object.prototype.hasOwnProperty.call(store, itemId)) return !!store[itemId];
    return !!defaultValue;
}

function setItemFavorite(itemId, active) {
    const store = getFavoriteStore();
    if (active) store[itemId] = true;
    else delete store[itemId];
    saveFavoriteStore(store);
}

function updateStarUI(btnElement, isActive) {
    if (!btnElement) return;
    btnElement.classList.toggle('active', !!isActive);
    btnElement.innerHTML = isActive ? '★' : '☆';
}

function toggleStar(btnElement, id) {
    if (!db || !db.mevzuatFeed || !db.mevzuatFeed[id]) return;
    const item = db.mevzuatFeed[id];
    const itemId = getItemId('feed', item.id || id);
    const nextState = !isItemFavorite(itemId);
    item.favoriMi = nextState;
    setItemFavorite(itemId, nextState);
    updateStarUI(btnElement, nextState);
    refreshFavoriteSurfaces();
}

function toggleFavoriteById(btnElement, itemId) {
    const nextState = !isItemFavorite(itemId);
    setItemFavorite(itemId, nextState);
    updateStarUI(btnElement, nextState);
    refreshFavoriteSurfaces();
}

function removeFavoriteById(itemId) {
    setItemFavorite(itemId, false);
    refreshFavoriteSurfaces();
}

function getAllFavoriteEntries() {
    const favorites = [];

    if (db && Array.isArray(db.mevzuatFeed)) {
        db.mevzuatFeed.forEach((item, index) => {
            const itemId = getItemId('feed', item.id || index);
            const active = isItemFavorite(itemId, item.favoriMi);
            item.favoriMi = active;
            if (active) {
                favorites.push({
                    id: itemId,
                    konu: resolveTopicName(item.konu || item.etiket || 'Mevzuat'),
                    etiket: item.etiket || 'Mevzuat',
                    metin: item.metin,
                    tip: 'Mevzuat Notu'
                });
            }
        });
    }

    Object.entries(dbEslestirme || {}).forEach(([konuBasligi, konu]) => {
        if (!konu) return;
        (konu.flashcards || []).forEach((card, index) => {
            const cardId = getItemId('flashcard', card.id || `${konuBasligi}-${index}`);
            const active = isItemFavorite(cardId, card.favoriMi);
            card.favoriMi = active;
            if (active) {
                favorites.push({
                    id: cardId,
                    konu: konuBasligi,
                    etiket: `${konuBasligi} • Hızlı Tekrar`,
                    metin: card.metin,
                    tip: 'Flashkart'
                });
            }
        });
        (konu.maddeler || []).forEach((madde, index) => {
            const maddeId = getItemId('education', madde.id || `${konuBasligi}-${madde.maddeNo || index}`);
            const active = isItemFavorite(maddeId, madde.favoriMi);
            madde.favoriMi = active;
            if (active) {
                favorites.push({
                    id: maddeId,
                    konu: konuBasligi,
                    etiket: `${konuBasligi} • Konu Anlatımı`,
                    metin: `${madde.baslik}: ${madde.metni}`,
                    tip: 'Konu Anlatımı'
                });
            }
        });
    });

    Object.entries(window.examsDB || {}).forEach(([konuBasligi, examData]) => {
        (examData?.konuTestleri || []).forEach(test => {
            (test.sorular || []).forEach((soru, index) => {
                const soruId = getItemId('question', soru.id || `${konuBasligi}-${test.id || test.baslik}-${index}`);
                const active = isItemFavorite(soruId, soru.favoriMi);
                soru.favoriMi = active;
                if (active) {
                    favorites.push({
                        id: soruId,
                        konu: konuBasligi,
                        etiket: `${konuBasligi} • Sınav Sorusu`,
                        metin: soru.soru,
                        tip: 'Soru'
                    });
                }
            });
        });
    });

    return favorites;
}

function refreshFavoriteSurfaces() {
    const feedPageActive = document.getElementById('page-feed')?.classList.contains('active');
    const profilePageActive = document.getElementById('page-profile')?.classList.contains('active');
    if (feedPageActive && document.getElementById('feed-container')) initFeed(db.mevzuatFeed);
    if (profilePageActive && document.getElementById('profile-favorites-feed')) renderProfile(db);
    updateDesktopProgressStatus();
}

function shuffleArray(items = []) {
    const array = [...items];
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function applySwipeNavigation(element, onPrev, onNext, threshold = 45) {
    if (!element) return;
    if (typeof element._swipeCleanup === 'function') element._swipeCleanup();

    let startX = 0;
    let startY = 0;
    let lastX = 0;
    let lastY = 0;
    let activePointerId = null;
    let didSwipe = false;

    const handlePointerDown = (e) => {
        activePointerId = e.pointerId;
        startX = lastX = e.clientX;
        startY = lastY = e.clientY;
        didSwipe = false;
        if (typeof element.setPointerCapture === 'function') {
            try { element.setPointerCapture(e.pointerId); } catch (err) {}
        }
    };

    const handlePointerMove = (e) => {
        if (activePointerId !== e.pointerId) return;
        lastX = e.clientX;
        lastY = e.clientY;
    };

    const handlePointerEnd = (e) => {
        if (activePointerId !== e.pointerId) return;
        if (e.pointerType === 'mouse' && window.getSelection().toString().length > 0) {
            activePointerId = null;
            return;
        }
        const diffX = lastX - startX;
        const diffY = lastY - startY;
        if (Math.abs(diffX) > threshold && Math.abs(diffX) > Math.abs(diffY) * 1.15) {
            didSwipe = true;
            if (diffX > 0) onPrev();
            if (diffX < 0) onNext();
        }
        activePointerId = null;
    };

    const handleClickCapture = (e) => {
        if (!didSwipe) return;
        didSwipe = false;
        e.preventDefault();
        e.stopPropagation();
    };

    element.addEventListener('pointerdown', handlePointerDown);
    element.addEventListener('pointermove', handlePointerMove);
    element.addEventListener('pointerup', handlePointerEnd);
    element.addEventListener('pointercancel', handlePointerEnd);
    element.addEventListener('click', handleClickCapture, true);

    element._swipeCleanup = () => {
        element.removeEventListener('pointerdown', handlePointerDown);
        element.removeEventListener('pointermove', handlePointerMove);
        element.removeEventListener('pointerup', handlePointerEnd);
        element.removeEventListener('pointercancel', handlePointerEnd);
        element.removeEventListener('click', handleClickCapture, true);
    };
}

function getProgressColor(percent) {
    if (percent < 35) return '#ef4444';
    if (percent < 75) return '#f59e0b';
    return '#10b981';
}

function normalizeTopicLabel(value = '') {
    return String(value)
        .toLocaleLowerCase('tr-TR')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/ı/g, 'i')
        .replace(/[^a-z0-9]+/g, ' ')
        .trim();
}

function escapeHTML(value = '') {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function resolveTopicName(rawValue = '') {
    const normalizedValue = normalizeTopicLabel(rawValue);
    if (!normalizedValue) return 'Genel';

    const allTopics = [...(db?.ortakKonular || []), ...(db?.gorevKonulari || [])].map(item => item.baslik);
    const exactMatch = allTopics.find(topic => normalizeTopicLabel(topic) === normalizedValue);
    if (exactMatch) return exactMatch;

    const aliases = [
        ['anayasa', 'Anayasa'],
        ['inkilap', 'Atatürk İlke ve İnkılâpları'],
        ['ataturk', 'Atatürk İlke ve İnkılâpları'],
        ['devlet teskilati', 'Devlet Teşkilatı'],
        ['657', '657 Sayılı Yasa'],
        ['dil bilgisi', 'Dil Bilgisi'],
        ['turkce', 'Dil Bilgisi'],
        ['halkla iliskiler', 'Halkla İlişkiler'],
        ['etik', 'Etik Davranış'],
        ['bakanlik merkez', 'Bakanlık Merkez Teşkilatı'],
        ['komisyonlar yapilanma', 'Komisyonlar ve Yapılanma'],
        ['komisyonlar gorevler', 'Komisyonlar ve Görevler'],
        ['uyap', 'UYAP'],
        ['5018', '5018 S.Y. Mali Yönetim'],
        ['bakanlik teskilati', 'Bakanlık Teşkilatı'],
        ['yargi orgutu', 'Yargı Örgütü'],
        ['e imza', 'E-imza'],
        ['resmi yazisma', 'Resmi Yazışma'],
        ['tebligat', 'Tebligat Kanunu'],
        ['devlet memurlari', 'Devlet Memurları Mevzuatı'],
        ['idari yargilama', 'İdari Yargılama Usulü'],
        ['mali yonetim kontrol', 'Kamu Mali Yönetim; Kontrol ve Faaliyetler'],
        ['il ozel idaresi', 'İl Özel İdaresi']
    ];
    const aliasMatch = aliases.find(([needle]) => normalizedValue.includes(needle));
    return aliasMatch ? aliasMatch[1] : 'Genel';
}

function getAllTopicTitles() {
    const seen = new Set();
    return [...(db?.ortakKonular || []), ...(db?.gorevKonulari || [])]
        .map(item => item.baslik)
        .filter(title => {
            if (seen.has(title)) return false;
            seen.add(title);
            return true;
        });
}

function updateDesktopProgressStatus() {
    const progressValue = document.getElementById('desktop-progress-value');
    const streakValue = document.getElementById('desktop-streak-value');
    if (progressValue) progressValue.textContent = `%${getSessionProgress()}`;
    if (streakValue) streakValue.textContent = `${db?.kullanici?.istatistik?.calismaSerisi || 0} gün seri`;
}

// --- FİLTRELEME YARDIMCISI ---
function filtreyeGoreGetir(secilenEtiket, flashcards) {
    if (!secilenEtiket || secilenEtiket === 'tumu') return flashcards;
    return flashcards.filter(kart => kart.etiketler && kart.etiketler.includes(secilenEtiket));
}

// --- ANA SAYFA ÇİZİMİ ---
function renderHome(veri) {
    const homePage = document.getElementById('page-home');
    const anlikIlerleme = getSessionProgress();

    let htmlIcerik = `
        <div class="welcome-card">
            <h2>Merhaba ${veri.kullanici.ad}, 👋</h2>
            <p>Bugün harika görünüyorsun. Sınav hedefine %${anlikIlerleme} yaklaştın!</p>
            <div class="progress-container">
                <div class="progress-bar" style="width: ${anlikIlerleme}%"></div>
            </div>
        </div>

        <h2 style="font-size: 1.2rem; font-weight: 800; text-align: center; margin-bottom: 5px; letter-spacing: 0.5px;">
            ÇALIŞMA PANELİ
        </h2>

        <div class="section-title">⚖️ Ortak Konular</div>
        <div class="scroll-container">
            ${veri.ortakKonular.map(konu => `
                <div class="topic-card" onclick="openSubjectDetail('${konu.baslik}')">
                    <div class="icon">${konu.ikon}</div>
                    <div class="title">${konu.baslik}</div>
                    <div class="topic-progress-bg">
                        <div class="topic-progress-fill" style="width: ${konu.tamamlanma}%; background: ${getProgressColor(konu.tamamlanma)};"></div>
                    </div>
                </div>
            `).join('')}
        </div>

        <div class="section-title">📂 Görev Alanı Konuları</div>
        <div class="scroll-container">
            ${veri.gorevKonulari.map(konu => `
                <div class="topic-card" onclick="openSubjectDetail('${konu.baslik}')">
                    <div class="icon">${konu.ikon}</div>
                    <div class="title">${konu.baslik}</div>
                    <div class="topic-progress-bg">
                        <div class="topic-progress-fill" style="width: ${konu.tamamlanma}%; background: ${getProgressColor(konu.tamamlanma)};"></div>
                    </div>
                </div>
            `).join('')}
        </div>

        <div class="section-title" style="margin-top:25px;">📌 Güncel Mevzuat & Değişiklikler</div>
        ${veri.guncelMevzuat.map(guncel => `
            <div class="update-card">
                <div class="date">${guncel.tarih}</div>
                <h3>${guncel.baslik}</h3>
                <p>${guncel.detay}</p>
            </div>
        `).join('')}
    `;

    homePage.innerHTML = htmlIcerik;
    enableDragScroll();
    updateDesktopProgressStatus();
}

// --- HER KONUYA ÖZEL İÇERİK VERİTABANI ---
const konuVeritabani = {
    "Bakanlık Teşkilatı": {
        altKonular: ["Merkez Teşkilatı", "Taşra Teşkilatı", "Bağlı Kuruluşlar"],
        flashcards: [
            {
                baslik: "Bakanlık Teşkilatı",
                metin: "Adalet Bakanlığı merkez teşkilatının en üst amiri Adalet Bakanıdır.",
                ipucu: "Müsteşarlık makamı kaldırılmıştır, yerine Bakan Yardımcıları gelmiştir.",
                favoriMi: true,
                etiketler: ["Özel Atamalar ve Organlar"]
            }
        ],
        sorular: [
            {
                id: "bakanlik-soru-001",
                altKategori: "Merkez Teşkilatı",
                isYanlis: false,
                cıkmisSoru: true,
                sınavYili: "2021 GYS",
                soru: "Aşağıdakilerden hangisi Adalet Bakanlığı merkez teşkilatı ana hizmet birimlerinden biridir?",
                secenekler: [
                    "A) Ceza İşleri Genel Müdürlüğü",
                    "B) Adli Tıp Kurumu",
                    "C) Türkiye Adalet Akademisi",
                    "D) HSK"
                ],
                dogruIndex: 0,
                detay: "Ceza İşleri Genel Müdürlüğü ana hizmet birimidir. Diğerleri bağlı veya ilgili kuruluşlardır."
            }
        ]
    }
};

// --- VARSAYILAN BOŞ KONU ---
const varsayilanKonu = {
    altKonular: ["Genel Bilgiler"],
    flashcards: [
        {
            baslik: "Hazırlanıyor",
            metin: "Bu konu için hap bilgiler sisteme yükleniyor.",
            ipucu: "Yakında aktif olacak.",
            favoriMi: false,
            etiketler: ["Temel Haklar ve İstisnalar"]
        }
    ],
    sorular: [
        {
            id: "varsayilan-soru-001",
            altKategori: "Genel Bilgiler",
            isYanlis: false,
            cıkmisSoru: false,
            sınavYili: "",
            soru: "Bu konuya ait soru havuzu yüklenmektedir.",
            secenekler: ["A) Anladım", "B) Bekliyorum", "C) Tamam", "D) Harika"],
            dogruIndex: 0,
            detay: "İçerikler ekleniyor."
        }
    ]
};

// --- KONU VERİSİ EŞLEŞTİRME ---
const dbEslestirme = {
    "Anayasa": window.anayasaDB,
    "657 Sayılı Yasa": window.yasa657DB,
    "İdari Yargılama Usulü": window.idariYargiUsulDB,
    "5018 S.Y. Mali Yönetim": window.maliYonetim5018DB,
    "Bakanlık Teşkilatı": window.bakanlikTeskilatiDB,
    "Devlet Memurları Mevzuatı": window.devletMemurlariMevzuatiDB,
    "Devlet Teşkilatı": window.devletTeskilatiDB,
    "E-imza": window.eimzaDB,
    "Etik Davranış": window.etikDB,
    "Komisyonlar ve Görevler": window.gorevKomisyonlarDB,
    "Halkla İlişkiler": window.halklaIliskilerDB,
    "Atatürk İlke ve İnkılâpları": window.ilkeVeInkilaplarDB,
    "İl Özel İdaresi": window.ilOzelIdareDB,
    "Kamu Mali Yönetim; Kontrol ve Faaliyetler": window.kamuMaliYonetimKontrolDB,
    "Bakanlık Merkez Teşkilatı": window.merkezTeskilatiDB,
    "Komisyonlar ve Yapılanma": window.ortakKomisyonlarDB,
    "Resmi Yazışma": window.resmiYazismaDB,
    "Tebligat Kanunu": window.tebligatKanunuDB,
    "Dil Bilgisi": window.turkceDilbilgisiDB,
    "UYAP": window.uyapDB,
    "Yargı Örgütü": window.yargiOrgutuDB
};

function getKonuVerisi(konuBasligi) {
    return dbEslestirme[konuBasligi] || varsayilanKonu;
}

function anayasaKonusuMu(konuBasligi) {
    const normalizedKonu = (konuBasligi || "")
        .toLocaleLowerCase('tr-TR')
        .replace(/\s+/g, ' ')
        .replace(/[.]/g, '')
        .trim();
    return normalizedKonu.includes("anayasa");
}

function getExamVerisi(konuBasligi) {
    if (!window.examsDB) return null;
    return window.examsDB[konuBasligi] || null;
}

// --- KONU DETAY SAYFASI ---
function openSubjectDetail(konuBasligi, isBack = false) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

    const detailPage = document.getElementById('page-subject-detail');
    detailPage.classList.add('active');

    if (!isBack) {
        history.pushState(
            { page: 'subject-detail', konu: konuBasligi },
            "",
            "#konu-" + encodeURIComponent(konuBasligi)
        );
    }

    detailPage.innerHTML = `
        <button class="back-btn" onclick="navigateTo('home')">⬅ Geri Dön</button>

        <div class="subject-header">
            <h2>${konuBasligi}</h2>
            <p>Nasıl çalışmak istersin?</p>
        </div>

        <div class="module-grid">
            <div class="module-card" onclick="openFlashcards('${konuBasligi}')">
                <div class="icon">🃏</div>
                <div class="title">Hızlı Tekrar</div>
            </div>

            <div class="module-card" onclick="openQA('${konuBasligi}')">
                <div class="icon">💬</div>
                <div class="title">Soru-Cevap</div>
            </div>

           <div class="module-card" onclick="openExamMenu('${konuBasligi}')">
                <div class="icon">⏱️</div>
                <div class="title">Sınav Modu</div>
            </div>

            <div class="module-card" onclick="openMevzuatMetni('${konuBasligi}')">
                <div class="icon">📖</div>
                <div class="title">Konu Anlatımı</div>
            </div>
        </div>
    `;
}

// --- HIZLI TEKRAR & FİLTRELEME YÖNETİMİ ---
let currentCardIndex = 0;
let aktifSecilenEtiket = 'tumu';

function openFlashcards(konuBasligi) {
    currentCardIndex = 0;
    aktifSecilenEtiket = 'tumu';

    history.pushState(
        { page: 'flashcards', konu: konuBasligi },
        "",
        "#flashcards-" + encodeURIComponent(konuBasligi)
    );

    const detailPage = document.getElementById('page-subject-detail');
    detailPage.innerHTML = `
        <button class="back-btn" onclick="openSubjectDetail('${konuBasligi}', true)">⬅ Konu Menüsüne Dön</button>

        <div class="subject-header" style="margin-bottom: 5px;">
            <h2>🃏 Hızlı Tekrar</h2>
            <p>${konuBasligi}</p>
        </div>

               <div style="padding: 0 20px; margin-bottom: 15px;">
            <select id="flashcard-filter-select" onchange="hizliTekrarFiltrele('${konuBasligi}', this.value)" style="width: 100%; padding: 10px; border-radius: 8px; border: 1px solid #ddd; background: #fff; font-weight: 600;">
                <option value="tumu">📂 Tüm Etiketler</option>
                ${(() => {
                    const aktifKonu = getKonuVerisi(konuBasligi);
                    const cards = aktifKonu.flashcards || [];
                    const etiketSet = new Set();
                    cards.forEach(c => {
                        if (c.etiketler && Array.isArray(c.etiketler)) {
                            c.etiketler.forEach(e => etiketSet.add(e));
                        }
                    });
                    return Array.from(etiketSet).sort().map(etiket => 
                        `<option value="${etiket}">${etiket}</option>`
                    ).join('');
                })()}
            </select>
        </div>

        <div class="flashcard-container" id="flashcard-wrapper"></div>
    `;

    renderCard(konuBasligi);
}

function hizliTekrarFiltrele(konuBasligi, etiket) {
    aktifSecilenEtiket = etiket;
    currentCardIndex = 0;
    renderCard(konuBasligi);
}

function renderCard(konuBasligi) {
    const wrapper = document.getElementById('flashcard-wrapper');
    if (!wrapper) return;

    const aktifKonuVerisi = getKonuVerisi(konuBasligi);
    const hamCards = aktifKonuVerisi.flashcards || varsayilanKonu.flashcards;
    
    const cards = filtreyeGoreGetir(aktifSecilenEtiket, hamCards);

    if (cards.length === 0) {
        wrapper.innerHTML = `<div style="text-align:center; padding:30px; opacity:0.7;">Bu etikete uygun kart bulunamadı.</div>`;
        return;
    }

    const card = cards[currentCardIndex] || cards[0];
    const originalCardIndex = hamCards.findIndex(item => (item.id && card.id) ? item.id === card.id : item === card);
    const cardItemId = getItemId('flashcard', card.id || `${konuBasligi}-${originalCardIndex}`);
    card.favoriMi = isItemFavorite(cardItemId, card.favoriMi);

    wrapper.innerHTML = `
        <div class="flashcard" id="active-flashcard">
            <div class="flashcard-touch-nav">
                <div class="flashcard-touch-left" onclick="prevFlashcard('${konuBasligi}')"></div>
                <div class="flashcard-touch-right" onclick="nextFlashcard('${konuBasligi}')"></div>
            </div>

            <div class="flashcard-top">
                <span class="feed-tag">${card.baslik}</span>
                <span class="flashcard-counter">${currentCardIndex + 1} / ${cards.length}</span>
            </div>

            <div class="flashcard-body">${card.metin}</div>

            <div class="flashcard-footer">
                <span>💡 ${card.ipucu}</span>
                <button class="flashcard-star ${card.favoriMi ? 'active' : ''}" onclick="toggleFlashcardStar(this, '${konuBasligi}', ${originalCardIndex})">
                    ${card.favoriMi ? '★' : '☆'}
                </button>
            </div>
        </div>
    `;
    const flashcardElement = document.getElementById('active-flashcard');
    applySwipeNavigation(
        flashcardElement,
        () => prevFlashcard(konuBasligi),
        () => nextFlashcard(konuBasligi)
    );
}

function toggleFlashcardStar(btnElement, konuBasligi, originalIndex) {
    const konu = getKonuVerisi(konuBasligi);
    if (!konu || !konu.flashcards || !konu.flashcards[originalIndex]) return;
    const card = konu.flashcards[originalIndex];
    const itemId = getItemId('flashcard', card.id || `${konuBasligi}-${originalIndex}`);
    const nextState = !isItemFavorite(itemId);
    card.favoriMi = nextState;
    setItemFavorite(itemId, nextState);
    updateStarUI(btnElement, nextState);
    refreshFavoriteSurfaces();
}

function nextFlashcard(konuBasligi) {
    const aktifKonuVerisi = getKonuVerisi(konuBasligi);
    const hamCards = aktifKonuVerisi.flashcards || varsayilanKonu.flashcards;
    const cards = filtreyeGoreGetir(aktifSecilenEtiket, hamCards);

    if (currentCardIndex < cards.length - 1) {
        currentCardIndex++;
        renderCard(konuBasligi);
    }
}

function prevFlashcard(konuBasligi) {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        renderCard(konuBasligi);
    }
}

// --- SORU-CEVAP (ÇİFT FİLTRELİ & SONSUZ KAYDIRMA) ---
let activeQAs = [];
let qaCurrentIndex = 0;
const QA_LOAD_COUNT = 3;
let currentKonuVeri = null;
let currentQAKonuBasligi = "";

let selectedYears = new Set();
let selectedSubcategories = new Set();
let isYanlisFilterActive = false;

function getTumSorular(konuBasligi) {
    let tumSorular = [];
    
    const examVerisi = getExamVerisi(konuBasligi);
    if (examVerisi && examVerisi.konuTestleri && Array.isArray(examVerisi.konuTestleri)) {
        examVerisi.konuTestleri.forEach(test => {
            if (test.sorular && Array.isArray(test.sorular)) {
                test.sorular.forEach(q => {
                    if (!q.sınavYili && test.baslik) {
                        q.sınavYili = test.baslik;
                    }
                });
                tumSorular.push(...test.sorular);
            }
        });
    }

    if (tumSorular.length === 0) {
        const konuVerisi = getKonuVerisi(konuBasligi);
        if (konuVerisi && konuVerisi.sorular) {
            tumSorular = konuVerisi.sorular;
        }
    }

    if (tumSorular.length === 0 && typeof varsayilanKonu !== 'undefined' && varsayilanKonu.sorular) {
        tumSorular = varsayilanKonu.sorular;
    }

    return tumSorular;
}

function openQA(konuBasligi) {
    qaCurrentIndex = 0;
    currentQAKonuBasligi = konuBasligi;
    currentKonuVeri = getKonuVerisi(konuBasligi);

    selectedYears.clear();
    selectedSubcategories.clear();
    isYanlisFilterActive = false;

    const sorular = getTumSorular(konuBasligi);
    activeQAs = [...sorular];

    const detailPage = document.getElementById('page-subject-detail');

    // DÜZELTME 1: Yılları sadece soruların kendi "sınavYili" etiketinden çekiyoruz
    let availableYears = [...new Set(sorular.map(q => q.sınavYili))].filter(Boolean);

    let availableSubcategories = currentKonuVeri.altKonular || [];
    if (availableSubcategories.length === 0) {
        availableSubcategories = [...new Set(sorular.map(q => q.altKategori))].filter(Boolean);
    }

    detailPage.innerHTML = `
        <button class="back-btn" onclick="openSubjectDetail('${konuBasligi}')">⬅ Konu Menüsüne Dön</button>

        <div class="subject-header" style="margin-bottom: 5px;">
            <h2>💬 Soru - Cevap Akışı</h2>
            <p>${konuBasligi} - Sınav Havuzu (Toplam: <span id="total-qa-count">${activeQAs.length}</span>)</p>
        </div>

        <div class="qa-filter-bar" style="display: flex; gap: 8px; align-items: center; margin-bottom: 15px;">
            
            <div class="custom-dropdown-container" style="flex: 1; position: relative;">
                <button onclick="toggleDropdown('year-dropdown-box')" class="filter-main-btn" id="year-filter-btn" style="width: 100%; text-align: left; display: flex; justify-content: space-between; align-items: center;">
                    <span>📜 Çıkmış Sorular</span>
                    <span>▼</span>
                </button>
                <div id="year-dropdown-box" class="custom-dropdown-content" style="display: none; position: absolute; top: 100%; left: 0; width: 100%; z-index: 100; max-height: 200px; overflow-y: auto;">
                    ${availableYears.length > 0 ? availableYears.map(year => `
                        <label>
                            <input type="checkbox" value="${year}" onchange="onYearFilterChange(this, '${konuBasligi}')"> ${year}
                        </label>
                    `).join('') : '<div style="font-size:0.75rem; opacity:0.6; padding:5px;">Çıkmış soru yılı bulunamadı</div>'}
                </div>
            </div>

            <button class="filter-main-btn" id="btn-yanlislar" onclick="toggleYanlislarFilter('${konuBasligi}')" style="flex: 0.9; text-align: center;">
                ❌ Yanlışlarım
            </button>

            <div class="custom-dropdown-container" style="flex: 1; position: relative;">
                <button onclick="toggleDropdown('sub-dropdown-box')" class="filter-main-btn" id="sub-filter-btn" style="width: 100%; text-align: left; display: flex; justify-content: space-between; align-items: center;">
                    <span>📂 Alt Konular</span>
                    <span>▼</span>
                </button>
                <div id="sub-dropdown-box" class="custom-dropdown-content" style="display: none; position: absolute; top: 100%; left: 0; width: 100%; z-index: 100; max-height: 200px; overflow-y: auto;">
                    ${availableSubcategories.map(sub => `
                        <label>
                            <input type="checkbox" value="${sub}" onchange="onSubFilterChange(this, '${konuBasligi}')"> ${sub}
                        </label>
                    `).join('')}
                </div>
            </div>

        </div>

        <div id="qa-feed-container"></div>
    `;

    document.addEventListener('click', closeAllDropdownsOnOutsideClick);
    loadMoreQA();
}

function toggleDropdown(boxId) {
    const box = document.getElementById(boxId);
    if (!box) return;
    
    document.querySelectorAll('.custom-dropdown-content').forEach(el => {
        if (el.id !== boxId) el.style.display = 'none';
    });

    box.style.display = box.style.display === 'block' ? 'none' : 'block';
}

function closeAllDropdownsOnOutsideClick(e) {
    if (!e.target.closest('.custom-dropdown-container')) {
        document.querySelectorAll('.custom-dropdown-content').forEach(el => {
            el.style.display = 'none';
        });
    }
}

function onYearFilterChange(checkbox, konuBasligi) {
    if (checkbox.checked) {
        selectedYears.add(checkbox.value);
    } else {
        selectedYears.delete(checkbox.value);
    }
    applyFiltersAndRefresh(konuBasligi);
}

function onSubFilterChange(checkbox, konuBasligi) {
    if (checkbox.checked) {
        selectedSubcategories.add(checkbox.value);
    } else {
        selectedSubcategories.delete(checkbox.value);
    }
    applyFiltersAndRefresh(konuBasligi);
}

function toggleYanlislarFilter(konuBasligi) {
    isYanlisFilterActive = !isYanlisFilterActive;
    const btn = document.getElementById('btn-yanlislar');
    if (btn) {
        if (isYanlisFilterActive) btn.classList.add('active');
        else btn.classList.remove('active');
    }
    applyFiltersAndRefresh(konuBasligi);
}

function applyFiltersAndRefresh(konuBasligi) {
    const sorular = getTumSorular(konuBasligi);

    activeQAs = sorular.filter(q => {
        if (isYanlisFilterActive && !q.isYanlis) return false;

        // Yıllar filtresi eşleştirmesi
        if (selectedYears.size > 0) {
            const matchYear = Array.from(selectedYears).some(y => q.sınavYili === y || (q.sınavYili && q.sınavYili.includes(y)));
            if (!matchYear) return false;
        }

        if (selectedSubcategories.size > 0) {
            if (!selectedSubcategories.has(q.altKategori)) return false;
        }

        return true;
    });

    const countEl = document.getElementById('total-qa-count');
    if (countEl) countEl.innerText = activeQAs.length;

    refreshQAFeed();
}

function refreshQAFeed() {
    qaCurrentIndex = 0;
    const container = document.getElementById('qa-feed-container');
    if (!container) return;

    container.innerHTML = '';

    if (activeQAs.length === 0) {
        container.innerHTML = `
            <div style="text-align:center; padding:30px; opacity:0.6; font-size:0.9rem;">
                Bu kriterlere uygun soru bulunamadı.
            </div>
        `;
        return;
    }

    loadMoreQA();
}

// DÜZELTME 2: Sonsuz Kaydırma Motoru (window scroll yerine #main-content scroll dinlenir)
document.addEventListener('DOMContentLoaded', () => {
    const mainContentArea = document.getElementById('main-content');
    if (mainContentArea) {
        mainContentArea.addEventListener('scroll', () => {
            
            // Soru Cevap (QA) alanı için kontrol
            if (document.getElementById('qa-feed-container') && qaCurrentIndex < activeQAs.length) {
                if ((mainContentArea.scrollTop + mainContentArea.clientHeight) >= mainContentArea.scrollHeight - 150) {
                    loadMoreQA();
                }
            }

            // Mevzuat Feed alanı için kontrol
            if (document.getElementById('feed-container') && window.aktifFeedVerisi && currentFeedIndex < window.aktifFeedVerisi.length) {
                if ((mainContentArea.scrollTop + mainContentArea.clientHeight) >= mainContentArea.scrollHeight - 150) {
                    loadMoreFeed(window.aktifFeedVerisi);
                }
            }

            if (document.getElementById('profile-favorites-feed') && window.profileFavoriteFeedData && window.profileFavoriteFeedIndex < window.profileFavoriteFeedData.length) {
                if ((mainContentArea.scrollTop + mainContentArea.clientHeight) >= mainContentArea.scrollHeight - 150) {
                    loadMoreProfileFavorites();
                }
            }
        });
    }
});

function loadMoreQA() {
    const container = document.getElementById('qa-feed-container');
    if (!container || qaCurrentIndex >= activeQAs.length) return;

    const nextItems = activeQAs.slice(qaCurrentIndex, qaCurrentIndex + QA_LOAD_COUNT);
    let html = '';

    nextItems.forEach((item, index) => {
        const qIndex = qaCurrentIndex + index;
        const questionItemId = getItemId('question', item.id || `${currentQAKonuBasligi}-${qIndex}`);
        item.favoriMi = isItemFavorite(questionItemId);
        const cikmisBadge = item.cıkmisSoru || item.sınavYili
            ? `<span class="exam-badge">🔥 Çıkmış Soru (${item.sınavYili || ''})</span>`
            : '';

        html += `
            <div class="qa-card" id="qa-card-${qIndex}" style="margin-bottom: 15px; animation-delay: ${index * 0.1}s;">
                <div class="qa-question-header">
                    <div>
                        <span class="feed-tag">${item.altKategori || 'Genel'}</span>
                        ${cikmisBadge}
                    </div>
                    <div style="display:flex; align-items:center; gap:8px;">
                        <span style="font-size: 0.75rem; opacity: 0.6; font-weight: 700;">
                            Soru ${qIndex + 1} / ${activeQAs.length}
                        </span>
                        <button class="star-btn ${item.favoriMi ? 'active' : ''}" onclick="toggleQuestionStar(this, activeQAs[${qIndex}], '${currentQAKonuBasligi}', ${qIndex})">
                            ${item.favoriMi ? '★' : '☆'}
                        </button>
                    </div>
                </div>

                <div class="qa-question-text">${item.soru}</div>

                <div class="qa-options-list">
        `;

        item.secenekler.forEach((secenek, sIndex) => {
            html += `
                <button class="qa-option" onclick="checkAnswer(${qIndex}, ${sIndex}, ${item.dogruIndex})">
                    <span style="font-weight: 800; margin-right: 10px;">${String.fromCharCode(65 + sIndex)})</span>
                    <span>${secenek.substring(3)}</span>
                </button>
            `;
        });

        html += `
                </div>

                <div class="qa-explanation" id="qa-exp-${qIndex}">
                    <b>📚 Çözüm & Not:</b> ${item.detay}
                </div>
            </div>
        `;
    });

    container.insertAdjacentHTML('beforeend', html);
    qaCurrentIndex += QA_LOAD_COUNT;
}

function checkAnswer(qIndex, selectedIndex, correctIndex) {
    const card = document.getElementById(`qa-card-${qIndex}`);
    if (!card) return;

    const options = card.querySelectorAll('.qa-option');
    const explanation = document.getElementById(`qa-exp-${qIndex}`);
    const bulunanSoru = activeQAs[qIndex];

    options.forEach(opt => {
        opt.disabled = true;
    });

    if (selectedIndex === correctIndex) {
        options[selectedIndex].classList.add('correct');
        if (bulunanSoru) bulunanSoru.isYanlis = false;
    } else {
        options[selectedIndex].classList.add('wrong');
        options[correctIndex].classList.add('correct');
        if (bulunanSoru) bulunanSoru.isYanlis = true;
    }

    if (explanation) {
        explanation.classList.add('show');
    }
}

function toggleQuestionStar(btnElement, soru, konuBasligi = 'Genel', soruIndex = 0) {
    if (!soru) return;
    const itemId = getItemId('question', soru.id || `${konuBasligi}-${soruIndex}`);
    const nextState = !isItemFavorite(itemId);
    soru.favoriMi = nextState;
    setItemFavorite(itemId, nextState);
    updateStarUI(btnElement, nextState);
    refreshFavoriteSurfaces();
}

// --- MEVZUAT FEED ÇİZİMİ ---
let currentFeedIndex = 0;
const FEED_LOAD_COUNT = 4;
window.aktifFeedVerisi = [];
window.activeFeedTopicFilters = new Set();

function getFilteredFavoriteEntries() {
    const filters = Array.from(window.activeFeedTopicFilters || []);
    const favorites = getAllFavoriteEntries();
    if (!filters.length) return favorites;
    return favorites.filter(item => filters.includes(item.konu));
}

function renderFeedFilterBar() {
    const allTopics = getAllTopicTitles();
    return `
        <div class="feed-page-shell">
            <div class="feed-page-header">
                <div>
                    <div class="feed-header-eyebrow">Yıldızlı içerikler</div>
                    <h2>Mevzuat Panon</h2>
                    <p>Favoriye aldığın konu anlatımları, notlar ve sınav soruları tek yerde.</p>
                </div>
                <button class="feed-clear-btn" onclick="clearFeedTopicFilters()">Tüm filtreleri kaldır</button>
            </div>
            <div class="filter-scroll feed-filter-scroll">
                ${allTopics.map(topic => `
                    <button class="filter-chip feed-filter-chip ${window.activeFeedTopicFilters.has(topic) ? 'active' : ''}" data-topic="${escapeHTML(topic)}">
                        ${escapeHTML(topic)}
                    </button>
                `).join('')}
            </div>
            <div id="feed-container"></div>
        </div>
    `;
}

function bindFeedTopicEvents() {
    document.querySelectorAll('.feed-filter-chip').forEach(btn => {
        if (btn.dataset.bound === 'true') return;
        btn.dataset.bound = 'true';
        btn.addEventListener('click', () => toggleFeedTopicFilter(btn.dataset.topic || ''));
    });
}

function bindFeedCardEvents(scope = document) {
    scope.querySelectorAll('.feed-tip-btn').forEach(btn => {
        if (btn.dataset.bound === 'true') return;
        btn.dataset.bound = 'true';
        btn.addEventListener('click', () => openModal('💡 Sınav İpucu', btn.dataset.tip || ''));
    });

    scope.querySelectorAll('.feed-remove-btn').forEach(btn => {
        if (btn.dataset.bound === 'true') return;
        btn.dataset.bound = 'true';
        btn.addEventListener('click', () => removeFavoriteById(btn.dataset.id || ''));
    });
}

function toggleFeedTopicFilter(topic) {
    if (!window.activeFeedTopicFilters) window.activeFeedTopicFilters = new Set();
    if (window.activeFeedTopicFilters.has(topic)) window.activeFeedTopicFilters.delete(topic);
    else window.activeFeedTopicFilters.add(topic);
    initFeed(db.mevzuatFeed);
}

function clearFeedTopicFilters() {
    window.activeFeedTopicFilters = new Set();
    initFeed(db.mevzuatFeed);
}

function openFeedWithTopics(topics = []) {
    window.activeFeedTopicFilters = new Set((topics || []).filter(Boolean));
    initFeed(db.mevzuatFeed);
    navigateTo('feed');
}

function initFeed(feedVerileri) {
    const favoriteFeedItems = getFilteredFavoriteEntries().map(item => ({
        ...item,
        source: 'favorite'
    }));

    window.aktifFeedVerisi = favoriteFeedItems;
    document.getElementById('page-feed').innerHTML = renderFeedFilterBar();
    bindFeedTopicEvents();
    currentFeedIndex = 0;
    const container = document.getElementById('feed-container');
    if (container && favoriteFeedItems.length === 0) {
        container.innerHTML = `
            <div class="feed-empty-state">
                <div class="feed-empty-icon">📭</div>
                <h3>Bu filtrede favori bulunamadı</h3>
                <p>Başka bir konu seçebilir ya da yıldız ekleyerek bu alanı doldurabilirsin.</p>
            </div>
        `;
        return;
    }
    loadMoreFeed(window.aktifFeedVerisi);
}

function loadMoreFeed(feedVerileri) {
    const container = document.getElementById('feed-container');
    if (!container || currentFeedIndex >= feedVerileri.length) return;

    const nextItems = feedVerileri.slice(currentFeedIndex, currentFeedIndex + FEED_LOAD_COUNT);
    let html = '';

    nextItems.forEach((item, index) => {
        const itemId = currentFeedIndex + index;

        html += `
            <div class="feed-card feed-card-compact" style="animation-delay: ${index * 0.1}s;">
                <div class="feed-tag-row" style="margin-bottom:10px;">
                    <span class="feed-tag">${escapeHTML(item.konu || item.etiket)}</span>
                    <span style="font-size:0.68rem; opacity:0.65;">${escapeHTML(item.tip || '')}</span>
                </div>
                <div class="feed-subtitle">${escapeHTML(item.etiket)}</div>

                <div class="feed-text">${escapeHTML(item.metin)}</div>

                <div class="feed-actions">
                    <div class="feed-actions-left">
                        ${item.ipucu ? `<button class="action-btn feed-tip-btn" data-tip="${escapeHTML(item.ipucu)}">💡 İpucu</button>` : ''}
                    </div>

                    <button class="remove-favorite-btn feed-remove-btn" data-id="${escapeHTML(item.id)}">
                        ✕ Kaldır
                    </button>
                </div>
            </div>
        `;
    });

    container.insertAdjacentHTML('beforeend', html);
    bindFeedCardEvents(container);
    currentFeedIndex += FEED_LOAD_COUNT;
}

// --- SINAV MENÜSÜ ---
function renderQuizMenu() {
    const quizPage = document.getElementById('page-quiz');
    const allWrong = getAllWrongQuestions();
    const allQuestions = getAllQuestionsPool();
    const starredQuestions = getStarredQuestionsPool();

    quizPage.innerHTML = `
        <div class="quiz-header quiz-hero-card">
            <h2>Sınav Merkezi</h2>
            <p>Kendini test et ve eksiklerini kapat</p>
            <div class="quiz-overview-grid">
                <div class="quiz-overview-item"><strong>${Math.min(allQuestions.length, MAX_EXAM_QUESTIONS)}</strong><span>Genel havuz</span></div>
                <div class="quiz-overview-item"><strong>${Math.min(allWrong.length, MAX_EXAM_QUESTIONS)}</strong><span>Yanlış soru</span></div>
                <div class="quiz-overview-item"><strong>${Math.min(starredQuestions.length, MAX_EXAM_QUESTIONS)}</strong><span>Odak soru</span></div>
            </div>
        </div>

        <div class="action-card power-up quiz-action-card" onclick="startMainExamMode('guclendir')">
            <div class="icon">💪</div>
            <div class="info">
                <h3>Güçlendir</h3>
                <p>Tüm konulardaki yanlış yaptığın sorulardan karma antrenman.</p>
            </div>
            <div class="badge">${Math.min(allWrong.length, MAX_EXAM_QUESTIONS)} Soru</div>
        </div>

        <div class="action-card exam quiz-action-card" onclick="startMainExamMode('gercek-deneme')">
            <div class="icon">📝</div>
            <div class="info">
                <h3>Gerçek Deneme</h3>
                <p>Tüm konulardan harmanlanmış 25 soruluk deneme.</p>
            </div>
            <div class="badge" style="background:#fee2e2;color:#ef4444;">${Math.min(allQuestions.length, MAX_EXAM_QUESTIONS)} Soru</div>
        </div>

        <div class="action-card quiz-action-card" onclick="startMainExamMode('konu-tarama')">
            <div class="icon">🎯</div>
            <div class="info">
                <h3>Konu Tarama Testleri</h3>
                <p>Yıldızlanan soru ve konulara göre odaklı soru havuzu.</p>
            </div>
            <div class="badge" style="background:#dbeafe;color:#3b82f6;">${Math.min(starredQuestions.length, MAX_EXAM_QUESTIONS)} Soru</div>
        </div>
    `;
}

function selectOption(btn) {
    document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
}

let mainExamQuestions = [];
let mainExamAnswers = {};
let mainExamCurrentIndex = 0;
let mainExamType = 'gercek-deneme';

function getMainExamTypeMeta() {
    const metaMap = {
        guclendir: { etiket: 'Güçlendirme', aciklama: 'Yanlış yaptığın sorularla odaklı antrenman.', ikon: '💪' },
        'gercek-deneme': { etiket: 'Gerçek Deneme', aciklama: 'Karışık soru havuzunda resmî sınav temposu.', ikon: '📝' },
        'konu-tarama': { etiket: 'Konu Tarama', aciklama: 'Favori içeriklerine göre hedefli soru çözümü.', ikon: '🎯' }
    };
    return metaMap[mainExamType] || metaMap['gercek-deneme'];
}

function getAllQuestionsPool() {
    const allQuestions = [];
    Object.entries(window.examsDB || {}).forEach(([konuBasligi, examData]) => {
        (examData?.konuTestleri || []).forEach(test => {
            (test.sorular || []).forEach((soru, soruIndex) => {
                allQuestions.push({
                    ...soru,
                    kaynakKonu: konuBasligi,
                    fallbackId: `${konuBasligi}-${test.id || test.baslik}-${soruIndex}`
                });
            });
        });
    });
    return allQuestions;
}

function getAllWrongQuestions() {
    const wrongMap = {};
    try {
        Object.assign(wrongMap, JSON.parse(localStorage.getItem(WRONG_QUESTIONS_STORAGE_KEY) || '{}'));
    } catch (e) {}

    const wrongPool = [];
    Object.entries(wrongMap).forEach(([konuBasligi, questions]) => {
        (questions || []).forEach((soru, index) => {
            wrongPool.push({
                ...soru,
                kaynakKonu: konuBasligi,
                fallbackId: `${konuBasligi}-wrong-${index}`
            });
        });
    });
    return wrongPool;
}

function getStarredQuestionsPool() {
    const starredTopics = new Set();
    Object.entries(dbEslestirme || {}).forEach(([konuBasligi, konu]) => {
        if (!konu) return;
        const hasStarredFlash = (konu.flashcards || []).some((card, idx) =>
            isItemFavorite(getItemId('flashcard', card.id || `${konuBasligi}-${idx}`), card.favoriMi)
        );
        const hasStarredMadde = (konu.maddeler || []).some((madde, idx) =>
            isItemFavorite(getItemId('education', madde.id || `${konuBasligi}-${madde.maddeNo || idx}`), madde.favoriMi)
        );
        if (hasStarredFlash || hasStarredMadde) starredTopics.add(konuBasligi);
    });

    return getAllQuestionsPool().filter((soru, index) => {
        const itemId = getItemId('question', soru.id || soru.fallbackId || `global-${index}`);
        return isItemFavorite(itemId, soru.favoriMi) || starredTopics.has(soru.kaynakKonu);
    });
}

function startMainExamMode(examType) {
    mainExamType = examType;
    if (examType === 'guclendir') mainExamQuestions = getAllWrongQuestions();
    if (examType === 'gercek-deneme') mainExamQuestions = getAllQuestionsPool();
    if (examType === 'konu-tarama') mainExamQuestions = getStarredQuestionsPool();

    if (!mainExamQuestions.length) {
        openModal('Bilgi', 'Bu sınav tipi için yeterli soru bulunamadı.');
        return;
    }

    mainExamQuestions = shuffleArray(mainExamQuestions).slice(0, MAX_EXAM_QUESTIONS);
    mainExamAnswers = {};
    mainExamCurrentIndex = 0;
    renderMainExamQuestion();
}

function renderMainExamQuestion() {
    const quizPage = document.getElementById('page-quiz');
    const soru = mainExamQuestions[mainExamCurrentIndex];
    const itemId = getItemId('question', soru.id || soru.fallbackId || `main-${mainExamCurrentIndex}`);
    soru.favoriMi = isItemFavorite(itemId, soru.favoriMi);
    const meta = getMainExamTypeMeta();
    const isLastQuestion = mainExamCurrentIndex === mainExamQuestions.length - 1;

    quizPage.innerHTML = `
        <button class="back-btn" onclick="renderQuizMenu()">⬅ Sınav Merkezine Dön</button>
        <div class="active-quiz-header quiz-header-card">
            <div>
                <div class="quiz-progress">${meta.ikon} ${meta.etiket}</div>
                <div class="quiz-topic-line">${soru.kaynakKonu || 'Karma'} • ${soru.altKategori || 'Genel'}</div>
            </div>
            <div class="quiz-timer quiz-step-chip">Soru ${mainExamCurrentIndex + 1} / ${mainExamQuestions.length}</div>
        </div>
        <div class="quiz-support-text">${meta.aciklama}</div>
        <div class="question-card">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px; gap:10px; flex-wrap:wrap;">
                <div class="feed-tag">${soru.kaynakKonu || 'Karma'}</div>
                <div class="feed-tag quiz-secondary-tag">${soru.altKategori || 'Genel'}</div>
                <button class="star-btn ${soru.favoriMi ? 'active' : ''}" onclick="toggleQuestionStar(this, mainExamQuestions[${mainExamCurrentIndex}], '${soru.kaynakKonu || 'Genel'}', ${mainExamCurrentIndex})">
                    ${soru.favoriMi ? '★' : '☆'}
                </button>
            </div>
            <div class="question-text">${soru.soru}</div>
            ${soru.secenekler.map((secenek, i) => `
                <button class="option-btn ${mainExamAnswers[mainExamCurrentIndex] === i ? 'selected' : ''}" onclick="selectMainExamOption(${i})">
                    <span class="option-letter">${String.fromCharCode(65 + i)}</span> ${secenek.substring(3)}
                </button>
            `).join('')}
        </div>
        <div class="exam-nav-row">
            ${mainExamCurrentIndex > 0 ? `<button class="exam-nav-btn" onclick="prevMainExamQuestion()">⬅ Önceki</button>` : ''}
            <button class="exam-nav-btn exam-nav-btn-danger" onclick="confirmMainExamFinish()">Sınavı Bitir</button>
            <button class="exam-nav-btn exam-nav-btn-primary" onclick="${isLastQuestion ? 'finishMainExam()' : 'goNextMainExamQuestion()'}">
                ${isLastQuestion ? 'Sonucu Gör ✔️' : 'Sonraki Soru ➔'}
            </button>
        </div>
    `;
}

function selectMainExamOption(optionIndex) {
    mainExamAnswers[mainExamCurrentIndex] = optionIndex;
    renderMainExamQuestion();
    setTimeout(() => {
        if (mainExamAnswers[mainExamCurrentIndex] !== optionIndex) return;
        if (mainExamCurrentIndex < mainExamQuestions.length - 1) {
            mainExamCurrentIndex++;
            renderMainExamQuestion();
        }
    }, 180);
}

function prevMainExamQuestion() {
    if (mainExamCurrentIndex > 0) {
        mainExamCurrentIndex--;
        renderMainExamQuestion();
    }
}

function goNextMainExamQuestion() {
    if (mainExamCurrentIndex < mainExamQuestions.length - 1) {
        mainExamCurrentIndex++;
        renderMainExamQuestion();
    } else {
        finishMainExam();
    }
}

function confirmMainExamFinish() {
    const modal = document.getElementById('custom-modal');
    const title = document.getElementById('modal-title');
    const text = document.getElementById('modal-text');
    if (!modal || !title || !text) return;

    title.textContent = 'Sınavı Bitir';
    text.innerHTML = `
        <div style="display:flex; flex-direction:column; gap:14px;">
            <p style="line-height:1.5;">Sınavı şimdi bitirirsen mevcut cevaplarına göre sonuç ekranı hazırlanır.</p>
            <div style="display:flex; gap:10px;">
                <button id="modal-iptal-btn" class="exam-nav-btn" style="flex:1;">Vazgeç</button>
                <button id="modal-onay-btn" class="exam-nav-btn exam-nav-btn-danger" style="flex:1;">Bitir</button>
            </div>
        </div>
    `;
    modal.classList.add('show');
    document.getElementById('modal-iptal-btn')?.addEventListener('click', closeModal, { once: true });
    document.getElementById('modal-onay-btn')?.addEventListener('click', () => {
        closeModal();
        finishMainExam();
    }, { once: true });
}

function finishMainExam() {
    const quizPage = document.getElementById('page-quiz');
    let dogru = 0;
    let yanlis = 0;
    let bos = 0;
    let gridHTML = `<div style="display:grid; grid-template-columns:repeat(5,1fr); gap:10px; margin-top:15px;">`;

    mainExamQuestions.forEach((soru, index) => {
        const userAnswer = mainExamAnswers[index];
        if (userAnswer === undefined) bos++;
        else if (userAnswer === soru.dogruIndex) dogru++;
        else yanlis++;
        const color = userAnswer === undefined ? '#94a3b8' : (userAnswer === soru.dogruIndex ? '#10b981' : '#ef4444');
        gridHTML += `<div onclick="reviewMainExamQuestion(${index})" style="background:${color}; color:white; padding:10px 0; border-radius:8px; text-align:center; font-weight:700; cursor:pointer;">${index + 1}</div>`;
    });
    gridHTML += `</div>`;

    const oran = Math.round((dogru / mainExamQuestions.length) * 100);
    quizPage.innerHTML = `
        <button class="back-btn" onclick="renderQuizMenu()">⬅ Sınav Merkezine Dön</button>
        <div class="question-card">
            <h2 style="margin-bottom:10px;">Sınav Sonucu</h2>
            <div style="font-size:2rem; font-weight:800; color:${getProgressColor(oran)};">%${oran}</div>
            <div style="display:flex; gap:12px; margin-top:12px;">
                <div><b style="color:#10b981;">${dogru}</b><div style="font-size:0.75rem;">Doğru</div></div>
                <div><b style="color:#ef4444;">${yanlis}</b><div style="font-size:0.75rem;">Yanlış</div></div>
                <div><b style="color:#94a3b8;">${bos}</b><div style="font-size:0.75rem;">Boş</div></div>
            </div>
            <h3 style="font-size:0.95rem; margin-top:16px;">Soru Analizi</h3>
            ${gridHTML}
        </div>
    `;
}

function reviewMainExamQuestion(index) {
    const quizPage = document.getElementById('page-quiz');
    const soru = mainExamQuestions[index];
    const userCevap = mainExamAnswers[index];

    quizPage.innerHTML = `
        <button class="back-btn" onclick="finishMainExam()">⬅ Sonuçlara Dön</button>
        <div class="question-card">
            <div class="feed-tag" style="display:inline-block; margin-bottom:12px;">${soru.kaynakKonu || 'Karma'} • ${soru.altKategori || 'Genel'}</div>
            <div class="question-text">${soru.soru}</div>
            ${soru.secenekler.map((secenek, i) => {
                const isSelected = i === userCevap;
                const isCorrect = i === soru.dogruIndex;
                const btnClass = isCorrect ? 'correct' : (isSelected ? 'wrong' : '');
                const label = isSelected && isCorrect
                    ? '<span class="review-badge selected-correct">Senin Cevabın ✅</span>'
                    : isSelected
                        ? '<span class="review-badge selected-wrong">Senin Cevabın ❌</span>'
                        : isCorrect
                            ? '<span class="review-badge correct-only">Doğru Cevap</span>'
                            : '';
                return `<button class="option-btn ${btnClass}" disabled style="cursor:default;"> <span class="option-letter">${String.fromCharCode(65 + i)}</span> ${secenek.substring(3)} ${label}</button>`;
            }).join('')}
            <div class="qa-explanation show"><b>📚 Çözüm & Açıklama:</b> ${soru.detay || 'Açıklama bulunmuyor.'}</div>
        </div>
    `;
}

// --- PROFİL ---
function getTopicTrackableTotal(konuBasligi) {
    let total = 0;
    const konuVerisi = getKonuVerisi(konuBasligi);
    total += (konuVerisi.flashcards || []).length;
    total += (konuVerisi.maddeler || []).length;
    total += getTumSorular(konuBasligi).length;

    if (db && Array.isArray(db.mevzuatFeed)) {
        total += db.mevzuatFeed.filter(item => resolveTopicName(item.konu || item.etiket || '') === konuBasligi).length;
    }

    return total;
}

function getTopicFavoriteCount(konuBasligi) {
    return getAllFavoriteEntries().filter(item => item.konu === konuBasligi).length;
}

function buildProfileTopicSummaries() {
    return getAllTopicTitles().map(konuBasligi => {
        const total = getTopicTrackableTotal(konuBasligi);
        const favoriteCount = getTopicFavoriteCount(konuBasligi);
        const percent = total > 0 ? Math.min(100, Math.round((favoriteCount / total) * 100)) : 0;
        return { konuBasligi, total, favoriteCount, percent };
    }).filter(item => item.total > 0);
}

function bindProfileTopicSummaryEvents(scope = document) {
    scope.querySelectorAll('.profile-topic-card').forEach(card => {
        if (card.dataset.bound === 'true') return;
        card.dataset.bound = 'true';
        card.addEventListener('click', () => openFeedWithTopics([card.dataset.topic || '']));
    });
}

function renderProfile(veri) {
    const profilePage = document.getElementById('page-profile');
    const topicSummaries = buildProfileTopicSummaries();

    profilePage.innerHTML = `
        <div class="profile-header-card">
            <div class="avatar-circle">${veri.kullanici.ad.charAt(0)}</div>
            <div class="profile-info">
                <h2>${veri.kullanici.ad} ${veri.kullanici.soyad}</h2>
                <p>${veri.kullanici.unvan}</p>
            </div>
        </div>

        <div class="stats-grid">
            <div class="stat-box"><h3>${veri.kullanici.istatistik.cozulenSoru}</h3><p>Çözülen Soru</p></div>
            <div class="stat-box"><h3>%${veri.kullanici.istatistik.basariOrani}</h3><p>Başarı Oranı</p></div>
            <div class="stat-box"><h3>${veri.kullanici.istatistik.calismaSerisi} 🔥</h3><p>Günlük Seri</p></div>
            <div class="stat-box"><h3>Level 4</h3><p>Uzman Adayı</p></div>
        </div>

        <div class="section-title" style="text-align:left;">⭐ Önemli Notlar</div>
        <div id="profile-favorites-feed" class="saved-notes-list profile-topic-summary-list"></div>
    `;

    if (topicSummaries.length === 0) {
        const container = document.getElementById('profile-favorites-feed');
        if (container) container.innerHTML = '<p style="opacity:0.6; font-size:0.85rem;">Henüz gösterilecek konu özeti bulunmuyor.</p>';
        updateDesktopProgressStatus();
        return;
    }
    window.profileFavoriteFeedData = topicSummaries;
    window.profileFavoriteFeedIndex = 0;
    loadMoreProfileFavorites();
    updateDesktopProgressStatus();
}

function loadMoreProfileFavorites() {
    const container = document.getElementById('profile-favorites-feed');
    const data = window.profileFavoriteFeedData || [];
    if (!container || window.profileFavoriteFeedIndex >= data.length) return;

    const nextItems = data.slice(window.profileFavoriteFeedIndex, window.profileFavoriteFeedIndex + FEED_LOAD_COUNT);
    container.insertAdjacentHTML('beforeend', nextItems.map(item => `
        <button class="feed-card profile-topic-card" data-topic="${escapeHTML(item.konuBasligi)}" style="padding:15px;">
            <div class="feed-tag-row" style="margin-bottom:10px;">
                <span class="feed-tag">${escapeHTML(item.konuBasligi)}</span>
                <span class="profile-topic-count">${item.favoriteCount} önemli not</span>
            </div>
            <div class="profile-topic-meta">
                <strong>%${item.percent}</strong>
                <span>${item.total} kartın ${item.favoriteCount} tanesi işaretli</span>
            </div>
            <div class="topic-progress-bg profile-topic-progress">
                <div class="topic-progress-fill" style="width:${item.percent}%; background:${getProgressColor(item.percent)};"></div>
            </div>
        </button>
    `).join(''));
    bindProfileTopicSummaryEvents(container);
    window.profileFavoriteFeedIndex += FEED_LOAD_COUNT;
}

// --- RESMİ SINAV MODU VE SİMÜLASYON MOTORU ---

function openExamMenu(konuBasligi) {
    const examData = getExamVerisi(konuBasligi);
    const detailPage = document.getElementById('page-subject-detail');

    history.pushState(
        { page: 'exam-menu', konu: konuBasligi },
        "",
        "#exam-" + encodeURIComponent(konuBasligi)
    );

    detailPage.innerHTML = `
        <button class="back-btn" onclick="openSubjectDetail('${konuBasligi}', true)">⬅ Konu Menüsüne Dön</button>

        <div class="subject-header">
            <h2>⏱️ Sınav Modu</h2>
            <p>${konuBasligi}</p>
        </div>

        <div class="action-card exam" style="border-left: 4px solid #ef4444; margin-bottom: 15px;" onclick="showFormalExamPreScreen('${konuBasligi}', 'cikmis')">
            <div class="icon">📝</div>
            <div class="info">
                <h3>Çıkmış Sorular Sınavı</h3>
                <p>Geçmiş yıllara ait çıkmış sorulardan oluşan karma simülasyon.</p>
            </div>
            <div class="badge" style="background: #fee2e2; color: #ef4444;">Max 25 Soru</div>
        </div>

        <div class="action-card exam" style="border-left: 4px solid #3b82f6; margin-bottom: 15px;" onclick="showFormalExamPreScreen('${konuBasligi}', 'genel')">
            <div class="icon">🎯</div>
            <div class="info">
                <h3>Genel Deneme Sınavı</h3>
                <p>Tüm soru havuzundan karışık olarak gelen resmî sınav simülasyonu.</p>
            </div>
            <div class="badge" style="background: #dbeafe; color: #3b82f6;">Max 25 Soru</div>
        </div>

        <div class="action-card exam" style="border-left: 4px solid #8b5cf6; margin-bottom: 25px;" onclick="showFormalExamPreScreen('${konuBasligi}', 'guclendir')">
            <div class="icon">💪</div>
            <div class="info">
                <h3>Güçlendir</h3>
                <p>Yanlış yapılan sorularla ilgili karma sınav.</p>
            </div>
            <div class="badge" style="background: #f3e8ff; color: #8b5cf6;">Özel Havuz</div>
        </div>
    `;
}

// --- LOCALSTORAGE YANLIŞ SORU YÖNETİMİ ---
function getSavedWrongQuestions(konuBasligi) {
    try {
        const saved = JSON.parse(localStorage.getItem(WRONG_QUESTIONS_STORAGE_KEY) || '{}');
        return saved[konuBasligi] || [];
    } catch(e) {
        return [];
    }
}

function saveWrongQuestion(konuBasligi, soru) {
    try {
        let saved = JSON.parse(localStorage.getItem(WRONG_QUESTIONS_STORAGE_KEY) || '{}');
        if (!saved[konuBasligi]) saved[konuBasligi] = [];
        if (!saved[konuBasligi].some(q => q.soru === soru.soru)) {
            saved[konuBasligi].push(soru);
        }
        localStorage.setItem(WRONG_QUESTIONS_STORAGE_KEY, JSON.stringify(saved));
    } catch(e) {}
}

function removeWrongQuestion(konuBasligi, soru) {
    try {
        let saved = JSON.parse(localStorage.getItem(WRONG_QUESTIONS_STORAGE_KEY) || '{}');
        if (saved[konuBasligi]) {
            saved[konuBasligi] = saved[konuBasligi].filter(q => q.soru !== soru.soru);
            localStorage.setItem(WRONG_QUESTIONS_STORAGE_KEY, JSON.stringify(saved));
        }
    } catch(e) {}
}

// --- RESMİ SINAV SİMÜLASYON DEĞİŞKENLERİ ---
let formalExamQuestions = [];
let formalExamAnswers = {}; 
let formalExamCurrentIndex = 0;
let formalExamTimer = null;
let formalExamTimeLeft = 0;
let activeExamType = 'cikmis';
let currentExamKonu = '';
const MAX_EXAM_QUESTIONS = 25;
const SECONDS_PER_QUESTION = 45;

function showFormalExamPreScreen(konuBasligi, examType = 'cikmis') {
    activeExamType = examType;
    currentExamKonu = konuBasligi;
    let kaynakSorular = [];

    if (examType === 'cikmis') {
        const examData = getExamVerisi(konuBasligi);
        if (examData && examData.konuTestleri) {
            examData.konuTestleri.forEach(test => {
                if (test.sorular) kaynakSorular.push(...test.sorular);
            });
        }
    } else if (examType === 'genel') {
        kaynakSorular = getTumSorular(konuBasligi);
    } else if (examType === 'guclendir') {
        kaynakSorular = getSavedWrongQuestions(konuBasligi);
        if (kaynakSorular.length === 0) {
            openModal('Bilgi', 'Bu konuda kayıtlı yanlış sorunuz bulunmuyor. Harika!');
            return;
        }
    }

    if (kaynakSorular.length === 0) {
        openModal('Hata', 'Bu kriter uygun soru havuzunda bulunamadı.');
        return;
    }

    kaynakSorular = shuffleArray(kaynakSorular).slice(0, MAX_EXAM_QUESTIONS);
    const toplamSure = kaynakSorular.length * SECONDS_PER_QUESTION;
    
    let baslikText = 'Çıkmış Sorular Sınavı';
    if (examType === 'genel') baslikText = 'Genel Deneme Sınavı';
    if (examType === 'guclendir') baslikText = 'Güçlendirme Sınavı';

    const detailPage = document.getElementById('page-subject-detail');
    detailPage.innerHTML = `
        <button class="back-btn" onclick="openExamMenu('${konuBasligi}')">⬅ Geri Dön</button>
        
        <div style="text-align:center; padding: 40px 20px;">
            <div style="font-size: 4rem; margin-bottom: 20px;">⏱️</div>
            <h2 style="margin-bottom: 15px;">${baslikText}</h2>
            <p style="opacity: 0.8; margin-bottom: 30px; font-size: 0.95rem; line-height: 1.5;">
                Bu sınav toplam <b>${kaynakSorular.length}</b> sorudan oluşmaktadır. <br>
                Soru başına 45 saniye olmak üzere toplam süreniz: <b>${Math.floor(toplamSure / 60)} dakika ${toplamSure % 60} saniye</b>. <br><br>
                Yanıtlarınızı vererek ilerleyebilir, sınav sonunda detaylı kategori analizini inceleyebilirsiniz.
            </p>
            <button onclick="startFormalExam('${konuBasligi}')" style="width: 100%; padding: 15px; background: #ef4444; color: white; border: none; border-radius: 12px; font-size: 1.1rem; font-weight: 700; cursor: pointer; box-shadow: 0 4px 15px rgba(239, 68, 68, 0.4);">
                Sınava Başla
            </button>
        </div>
    `;

    formalExamQuestions = kaynakSorular;
    formalExamAnswers = {};
    formalExamCurrentIndex = 0;
    formalExamTimeLeft = toplamSure;
}

function startFormalExam(konuBasligi) {
    if (formalExamTimer) clearInterval(formalExamTimer);
    
    formalExamTimer = setInterval(() => {
        formalExamTimeLeft--;
        updateTimerDisplay();
        if (formalExamTimeLeft <= 0) {
            clearInterval(formalExamTimer);
            finishFormalExam(konuBasligi);
        }
    }, 1000);

    renderFormalQuestion(konuBasligi);
}

function updateTimerDisplay() {
    const timerEl = document.getElementById('formal-timer-display');
    if (!timerEl) return;
    const m = Math.floor(formalExamTimeLeft / 60).toString().padStart(2, '0');
    const s = (formalExamTimeLeft % 60).toString().padStart(2, '0');
    timerEl.innerText = `${m}:${s}`;
}

function renderFormalQuestion(konuBasligi) {
    const detailPage = document.getElementById('page-subject-detail');
    const soru = formalExamQuestions[formalExamCurrentIndex];
    const isLastQuestion = formalExamCurrentIndex === formalExamQuestions.length - 1;
    const questionItemId = getItemId('question', soru.id || `${konuBasligi}-${formalExamCurrentIndex}`);
    soru.favoriMi = isItemFavorite(questionItemId, soru.favoriMi);

    const navButtonsHTML = `
        <div style="display:flex; gap:10px; margin: 10px 0;">
            ${formalExamCurrentIndex > 0 ? `
                <button onclick="prevFormalQuestion('${konuBasligi}')" style="flex:1; padding:10px; background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 10px; font-weight: 700; color: var(--text-color); cursor:pointer; font-size: 0.85rem;">
                    ⬅ Önceki
                </button>
            ` : ''}
<button onclick="confirmEarlyFinish('${konuBasligi}')" style="flex: 1; padding: 10px; background: transparent; color: #ef4444; border: 1px solid #ef4444; border-radius: 10px; cursor: pointer; font-weight: 700; font-size: 0.85rem;">
    Bitir
</button>
            <button onclick="nextFormalQuestion('${konuBasligi}')" style="flex:2; padding:10px; background: #3b82f6; color: white; border: none; border-radius: 10px; font-weight: 700; cursor:pointer; font-size: 0.85rem;">
                Sonraki ➔
            </button>
            
            ${isLastQuestion ? `
                <button onclick="finishFormalExam('${konuBasligi}')" style="flex:2; padding:10px; background: #10b981; color: white; border: none; border-radius: 10px; font-weight: 700; cursor:pointer; font-size: 0.85rem;">
                    Bitir ✔️
                </button>
            ` : ''}
        </div>
    `;

    detailPage.innerHTML = `
        <div class="active-quiz-header" style="margin-top: 10px;">
            <div>
                <div class="quiz-progress" style="color: #ef4444;">${konuBasligi} • Soru ${formalExamCurrentIndex + 1} / ${formalExamQuestions.length}</div>
                <div class="quiz-topic-line">${activeExamType === 'genel' ? 'Genel deneme akışı' : activeExamType === 'guclendir' ? 'Yanlış sorular odaklı tekrar' : 'Çıkmış sorular serisi'}</div>
            </div>
            <div class="quiz-timer" id="formal-timer-display" style="background: rgba(239,68,68,0.1); color: #ef4444; font-size: 1.1rem; border: 1px solid rgba(239,68,68,0.3);">--:--</div>
        </div>

        ${navButtonsHTML}

        <div class="question-card" style="box-shadow: 0 4px 20px rgba(0,0,0,0.08); margin-top: 5px;">
            <div style="display:flex; justify-content:space-between; align-items:center; gap:10px; margin-bottom:15px;">
                <div style="display:flex; gap:8px; flex-wrap:wrap;">
                    <div class="feed-tag">${konuBasligi}</div>
                    <div class="feed-tag" style="display:inline-block; background: #fee2e2; color: #ef4444;">${soru.altKategori || 'Karma'} (${soru.sınavYili || 'Genel'})</div>
                </div>
                <button class="star-btn ${soru.favoriMi ? 'active' : ''}" onclick="toggleQuestionStar(this, formalExamQuestions[${formalExamCurrentIndex}], '${konuBasligi}', ${formalExamCurrentIndex})">
                    ${soru.favoriMi ? '★' : '☆'}
                </button>
            </div>
            <div class="question-text">${soru.soru}</div>

            ${soru.secenekler.map((secenek, i) => {
                const isSelected = formalExamAnswers[formalExamCurrentIndex] === i;
                return `
                <button class="option-btn ${isSelected ? 'selected' : ''}" style="margin-bottom:10px;" onclick="selectFormalOption(${i}, '${konuBasligi}')">
                    <span class="option-letter">${String.fromCharCode(65 + i)}</span> ${secenek.substring(3)}
                </button>
                `;
            }).join('')}
        </div>

        ${navButtonsHTML}
    `;
    updateTimerDisplay();
}

function selectFormalOption(selectedIndex, konuBasligi) {
    formalExamAnswers[formalExamCurrentIndex] = selectedIndex;
    
    setTimeout(() => {
        if (formalExamCurrentIndex < formalExamQuestions.length - 1) {
            formalExamCurrentIndex++;
            renderFormalQuestion(konuBasligi);
        } else {
            finishFormalExam(konuBasligi);
        }
    }, 200);
}

function nextFormalQuestion(konuBasligi) {
    if (formalExamCurrentIndex < formalExamQuestions.length - 1) {
        formalExamCurrentIndex++;
        renderFormalQuestion(konuBasligi);
    } else {
        finishFormalExam(konuBasligi);
    }
}

function prevFormalQuestion(konuBasligi) {
    if (formalExamCurrentIndex > 0) {
        formalExamCurrentIndex--;
        renderFormalQuestion(konuBasligi);
    }
}
function finishFormalExam(konuBasligi) {
    if (formalExamTimer) clearInterval(formalExamTimer);
    renderFormalReport(konuBasligi);
}

function renderFormalReport(konuBasligi) {
    const eskiIlerleme = getSessionProgress();
    addSessionProgress(3);
    const yeniIlerleme = getSessionProgress();

    const detailPage = document.getElementById('page-subject-detail');    
    let dogruSayisi = 0;
    let yanlisSayisi = 0;
    let bosSayisi = 0;
    let kategoriHatalari = {};

    let gridHTML = `<div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; margin-bottom: 20px;">`;



    formalExamQuestions.forEach((q, index) => {
        const userCevap = formalExamAnswers[index];
        const isBos = userCevap === undefined;
        const isDogru = userCevap === q.dogruIndex;
        const kat = q.altKategori || 'Genel';

        if (isBos) {
            bosSayisi++;
        } else if (isDogru) {
            dogruSayisi++;
            removeWrongQuestion(konuBasligi, q);
        } else {
            yanlisSayisi++;
            saveWrongQuestion(konuBasligi, q);
            kategoriHatalari[kat] = (kategoriHatalari[kat] || 0) + 1;
        }

        let bg = isBos ? '#94a3b8' : (isDogru ? '#10b981' : '#ef4444');

        gridHTML += `
            <div onclick="reviewFormalQuestion(${index}, '${konuBasligi}')" style="background: ${bg}; color: white; padding: 12px 0; text-align: center; border-radius: 8px; font-weight: 700; cursor: pointer; font-size: 0.9rem; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                ${index + 1}
            </div>
        `;
    });
    gridHTML += `</div>`;

    const basariOrani = Math.round((dogruSayisi / formalExamQuestions.length) * 100);

    // Sınav istatistiklerini localStorage'e kaydet
    if (typeof db !== 'undefined' && db.kullanici && db.kullanici.istatistik) {
        db.kullanici.istatistik.cozulenSoru += formalExamQuestions.length;
        const toplamSoru = db.kullanici.istatistik.cozulenSoru;
        const eskiBasari = db.kullanici.istatistik.basariOrani;
        db.kullanici.istatistik.basariOrani = Math.round(((eskiBasari * (toplamSoru - formalExamQuestions.length)) + (basariOrani * formalExamQuestions.length)) / toplamSoru);
        try { localStorage.setItem('gys_istatistik', JSON.stringify(db.kullanici.istatistik)); } catch(e) {}
    }

    // En çok hata yapılan kategoriyi tespit et
    let enZayifKategori = null;
    let maxHata = 0;
    for (let kat in kategoriHatalari) {
        if (kategoriHatalari[kat] > maxHata) {
            maxHata = kategoriHatalari[kat];
            enZayifKategori = kat;
        }
    }

    // Kişiselleştirilmiş Analiz Cümlesi Oluşturma
    let analizHavuzu = [];
    if (basariOrani >= 80) {
        analizHavuzu = [
            `Mükemmel bir sonuç. Genel olarak üst düzey bir hakimiyetin var.`,
            `Süre ve başarı oranı açısından harika bir simülasyon çıkardın, bu tempoyu koru.`
        ];
    } else if (basariOrani >= 50) {
        analizHavuzu = [
            `Fena değil, fakat genel hatlarıyla tekrara ihtiyacın olan başlıklar bulunuyor.`,
            `Ortalama bir sonuç elde ettin. İstikrarlı çalışmayla netlerini çok daha yukarı taşıyabilirsin.`
        ];
    } else {
        analizHavuzu = [
            `Bu deneme, ilgili mevzuat çalışmalarını ve soru çözüm yoğunluğunu artırman gerektiğini gösteriyor.`,
            `Moralini bozmak yok; hatalı yapılan soruların üzerine gitmek eksikleri kapatmanın en kısa yoludur.`
        ];
    }

    let rastgeleAnaliz = analizHavuzu[Math.floor(Math.random() * analizHavuzu.length)];
    if (enZayifKategori) {
        rastgeleAnaliz += ` Özellikle <b style="color: var(--primary-color);">${enZayifKategori}</b> alt kategorisindeki yanlışların dikkat çekiyor; bu konuyu tekrar gözden geçirmende fayda var.`;
    }

  detailPage.innerHTML = `
        <button class="back-btn" onclick="openExamMenu('${konuBasligi}')">⬅ Sınav Menüsüne Dön</button>
        
        <div style="background: rgba(16,185,129,0.1); color: #10b981; padding: 8px; border-radius: 8px; font-size: 0.8rem; font-weight: 700; margin: 15px 0; text-align: center;">
            🚀 Sınav tamamlandı, hedefe %3 daha yaklaştın (%${eskiIlerleme} ➔ %${yeniIlerleme})
        </div>

        <div style="text-align:center; margin-bottom: 20px;">
            <h2>Sınav Sonucu</h2>
            <div style="font-size: 2.2rem; font-weight: 800; color: ${getProgressColor(basariOrani)}; margin: 5px 0;">%${basariOrani}</div>
            
            <div style="display: flex; justify-content: center; gap: 15px; margin-top: 10px;">
                <div style="text-align:center;"><div style="font-size: 1.1rem; font-weight: 800; color:#10b981;">${dogruSayisi}</div><div style="font-size:0.7rem; opacity:0.7;">Doğru</div></div>
                <div style="text-align:center;"><div style="font-size: 1.1rem; font-weight: 800; color:#ef4444;">${yanlisSayisi}</div><div style="font-size:0.7rem; opacity:0.7;">Yanlış</div></div>
                <div style="text-align:center;"><div style="font-size: 1.1rem; font-weight: 800; color:#94a3b8;">${bosSayisi}</div><div style="font-size:0.7rem; opacity:0.7;">Boş</div></div>
            </div>
        </div>

        <h3 style="font-size: 0.95rem; margin-bottom: 10px;">Soru Analiz Paneli</h3>
        ${gridHTML}

        <div style="background: var(--glass-bg); border: 1px solid var(--glass-border); padding: 15px; border-radius: 12px; margin-top: 15px;">
            <div style="font-weight: 700; margin-bottom: 8px; font-size: 0.9rem;">
                📊 Performans Analizi
            </div>
            <p style="font-size: 0.85rem; line-height: 1.4; opacity: 0.85;">${rastgeleAnaliz}</p>
        </div>
    `;
}

function reviewFormalQuestion(index, konuBasligi) {
    const detailPage = document.getElementById('page-subject-detail');
    const soru = formalExamQuestions[index];
    const userCevap = formalExamAnswers[index];

    const reportBackBtnHTML = `
        <button class="back-btn" onclick="renderFormalReport('${konuBasligi}')" style="background: #ef4444; color: white; border: none; padding: 10px 15px; border-radius: 10px; font-weight: 700; cursor: pointer; margin-bottom: 15px; width: 100%;">
            ⬅ Sonuç Ekranına Dön
        </button>
    `;

    detailPage.innerHTML = `
        ${reportBackBtnHTML}
        
        <div class="active-quiz-header" style="margin-top: 10px;">
            <div class="quiz-progress">Soru ${index + 1} İncelemesi (${soru.sınavYili || 'Genel'})</div>
        </div>

        <div class="question-card">
            <div class="feed-tag" style="display:inline-block; margin-bottom:15px;">${soru.altKategori || 'Karma'}</div>
            <div class="question-text">${soru.soru}</div>

            ${soru.secenekler.map((secenek, i) => {
                let btnClass = '';
                const isSelected = i === userCevap;
                const isCorrect = i === soru.dogruIndex;
                if (isCorrect) btnClass = 'correct';
                if (isSelected && !isCorrect) btnClass = 'wrong';
                const durumEtiketi = isSelected && isCorrect
                    ? '<span class="review-badge selected-correct">Senin Cevabın ✅</span>'
                    : isSelected
                        ? '<span class="review-badge selected-wrong">Senin Cevabın ❌</span>'
                        : isCorrect
                            ? '<span class="review-badge correct-only">Doğru Cevap</span>'
                            : '';

                return `
                <button class="option-btn ${btnClass} ${isSelected ? 'review-selected-option' : ''}" disabled style="margin-bottom:10px; cursor:default;">
                    <span class="option-letter">${String.fromCharCode(65 + i)}</span> ${secenek.substring(3)}
                    ${durumEtiketi}
                </button>
                `;
            }).join('')}

            <div class="qa-explanation show" style="margin-top: 15px;">
                <b>📚 Çözüm & Açıklama:</b> ${soru.detay}
            </div>
        </div>

        ${reportBackBtnHTML}
    `;
}

// Şık cam efektli (Glassmorphism) erken bitirme onay fonksiyonu
function confirmEarlyFinish(konuBasligi) {
    const existingModal = document.getElementById('custom-confirm-modal');
    if (existingModal) existingModal.remove();

    const modalHTML = `
        <div id="custom-confirm-modal" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.4); backdrop-filter: blur(5px); display: flex; align-items: center; justify-content: center; z-index: 9999; animation: fadeIn 0.2s ease;">
            <div style="background: var(--glass-bg, rgba(255, 255, 255, 0.85)); border: 1px solid var(--glass-border, rgba(255, 255, 255, 0.4)); backdrop-filter: blur(12px); padding: 25px; border-radius: 16px; width: 90%; max-width: 380px; box-shadow: var(--card-shadow, 0 8px 32px rgba(0, 0, 0, 0.1)); text-align: center;">
                <div style="font-size: 1.3rem; color: #ef4444; margin-bottom: 12px; font-weight: 700;">✕</div>
                <h3 style="margin-bottom: 10px; color: var(--text-color); font-size: 1.1rem; font-weight: 700;">Sınavı Bitir</h3>
                <p style="color: var(--text-color); font-size: 0.9rem; margin-bottom: 20px; opacity: 0.85;">Sınavı erken bitirmek istediğinize emin misiniz? O ana kadarki cevaplarınıza göre raporunuz oluşturulacaktır.</p>
                <div style="display: flex; gap: 10px;">
                    <button id="modal-iptal-btn" style="flex: 1; padding: 10px; background: transparent; border: 1px solid var(--glass-border, #cbd5e1); border-radius: 10px; color: var(--text-color); font-weight: 600; cursor: pointer;">Vazgeç</button>
                    <button id="modal-onay-btn" style="flex: 1; padding: 10px; background: #ef4444; border: none; border-radius: 10px; color: white; font-weight: 600; cursor: pointer;">Evet, Bitir</button>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    document.getElementById('modal-iptal-btn').onclick = function() {
        document.getElementById('custom-confirm-modal').remove();
    };

    document.getElementById('modal-onay-btn').onclick = function() {
        document.getElementById('custom-confirm-modal').remove();
        finishFormalExam(konuBasligi);
    };
}