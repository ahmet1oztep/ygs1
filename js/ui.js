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

function toggleStar(btnElement, id) {
    btnElement.classList.toggle('active');
    btnElement.innerHTML = btnElement.classList.contains('active') ? '★' : '☆';
}

function getProgressColor(percent) {
    if (percent < 35) return '#ef4444';
    if (percent < 75) return '#f59e0b';
    return '#10b981';
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
                <button class="flashcard-star ${card.favoriMi ? 'active' : ''}" onclick="toggleFlashcardStar(this, '${konuBasligi}', ${currentCardIndex})">
                    ${card.favoriMi ? '★' : '☆'}
                </button>
            </div>
        </div>
    `;
// --- MOBİL (SWIPE) VE PC (MOUSE) KAYDIRMA DESTEĞİ BAŞLANGICI ---
  const flashcardElement = wrapper.firstElementChild; 
  if (flashcardElement) {
    let startX = 0;
    let endX = 0;

    const handleDragStart = (e) => {
      startX = e.type.includes('mouse') ? e.screenX : e.changedTouches[0].screenX;
    };

    const handleDragEnd = (e) => {
      endX = e.type.includes('mouse') ? e.screenX : e.changedTouches[0].screenX;
      handleSwipe();
    };

    // Mobil Cihazlar İçin Dokunma Olayları
    flashcardElement.addEventListener('touchstart', handleDragStart, { passive: true });
    flashcardElement.addEventListener('touchend', handleDragEnd, { passive: true });

    // PC (Bilgisayar) İçin Fare Olayları
    flashcardElement.addEventListener('mousedown', handleDragStart, { passive: true });
    flashcardElement.addEventListener('mouseup', handleDragEnd, { passive: true });

    function handleSwipe() {
      const threshold = 50; // Kaydırma hassasiyeti (px)
      if (endX < startX - threshold) {
        // Sola kaydırıldı -> Sonraki Flashcard
        nextFlashcard(konuBasligi);
      }
      if (endX > startX + threshold) {
        // Sağa kaydırıldı -> Önceki Flashcard
        prevFlashcard(konuBasligi);
      }
    }
  }
  // --- MOBİL (SWIPE) VE PC (MOUSE) KAYDIRMA DESTEĞİ BİTİŞİ ---
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
                    <span style="font-size: 0.75rem; opacity: 0.6; font-weight: 700;">
                        Soru ${qIndex + 1} / ${activeQAs.length}
                    </span>
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

// --- MEVZUAT FEED ÇİZİMİ ---
let currentFeedIndex = 0;
const FEED_LOAD_COUNT = 4;
window.aktifFeedVerisi = [];

function initFeed(feedVerileri) {
    window.aktifFeedVerisi = feedVerileri;
    document.getElementById('page-feed').innerHTML = '<div id="feed-container"></div>';
    currentFeedIndex = 0;
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
            <div class="feed-card" style="animation-delay: ${index * 0.1}s;">
                <div class="feed-tag-row" style="margin-bottom:10px;">
                    <span class="feed-tag">${item.etiket}</span>
                </div>

                <div class="feed-text">${item.metin}</div>

                <div class="feed-actions">
                    <div class="feed-actions-left">
                        ${item.ipucu ? `<button class="action-btn" onclick="openModal('💡 Sınav İpucu', '${item.ipucu.replace(/'/g, "\\'")}')">💡 İpucu</button>` : ''}
                    </div>

                    <button class="star-btn ${item.favoriMi ? 'active' : ''}" onclick="toggleStar(this, ${itemId})">
                        ${item.favoriMi ? '★' : '☆'}
                    </button>
                </div>
            </div>
        `;
    });

    container.insertAdjacentHTML('beforeend', html);
    currentFeedIndex += FEED_LOAD_COUNT;
}

// --- SINAV MENÜSÜ ---
function renderQuizMenu() {
    const quizPage = document.getElementById('page-quiz');

    quizPage.innerHTML = `
        <div class="quiz-header">
            <h2>Sınav Merkezi</h2>
            <p>Kendini test et ve eksiklerini kapat</p>
        </div>

        <div class="action-card power-up" onclick="openModal('🧠 Güçlendir', 'Yanlış yaptığın sorulardan oluşan kişiselleştirilmiş havuz yakında aktif olacak.')">
            <div class="icon">💪</div>
            <div class="info">
                <h3>Güçlendir</h3>
                <p>Yanlış yaptığın sorulardan oluşan antrenman havuzu.</p>
            </div>
            <div class="badge">12 Soru</div>
        </div>

        <div class="action-card exam" onclick="openModal('⏱️ Türkiye Geneli Deneme', '80 Soruluk GYS Formatında tam deneme sınavı yakında açılacak.')">
            <div class="icon">📝</div>
            <div class="info">
                <h3>Gerçek Deneme</h3>
                <p>80 Soru, 100 Dakika. Orijinal sınav simülasyonu.</p>
            </div>
        </div>

        <div class="action-card" onclick="startSampleQuiz()">
            <div class="icon">🎯</div>
            <div class="info">
                <h3>Konu Tarama Testleri</h3>
                <p>Hızlıca 1 soru çözerek arayüzü test et.</p>
            </div>
        </div>
    `;
}

function startSampleQuiz() {
    const quizPage = document.getElementById('page-quiz');

    quizPage.innerHTML = `
        <div class="active-quiz-header">
            <div class="quiz-progress">Soru 1 / 10</div>
            <div class="quiz-timer">00:45</div>
        </div>

        <div class="question-card">
            <div class="feed-tag" style="display:inline-block; margin-bottom:15px;">657 Sayılı Kanun</div>

            <div class="question-text">
                Devlet memurlarına verilen <b>"Kademe ilerlemesinin durdurulması"</b> cezası ile ilgili olarak,
                cezanın silinmesi için yetkili makama başvuru süresi kaç yıldır?
            </div>

            <button class="option-btn" onclick="selectOption(this)"><span class="option-letter">A</span> 3 Yıl</button>
            <button class="option-btn" onclick="selectOption(this)"><span class="option-letter">B</span> 5 Yıl</button>
            <button class="option-btn" onclick="selectOption(this)"><span class="option-letter">C</span> 10 Yıl</button>
            <button class="option-btn" onclick="selectOption(this)"><span class="option-letter">D</span> Silinmez</button>
        </div>

        <button class="next-btn" onclick="openModal('Tebrikler', 'Sınav modülü harika çalışıyor! <br><br> (Doğru Cevap C şıkkıydı)')">
            Sonraki Soru ➔
        </button>
    `;
}

function selectOption(btn) {
    document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
}

// --- PROFİL ---
function renderProfile(veri) {
    const profilePage = document.getElementById('page-profile');
    const favoriNotlar = veri.mevzuatFeed.filter(item => item.favoriMi);

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
        <div class="saved-notes-list">
            ${favoriNotlar.length > 0 ? favoriNotlar.map(not => `
                <div class="feed-card" style="padding:15px;">
                    <div class="feed-tag" style="display:inline-block; margin-bottom:8px;">${not.etiket}</div>
                    <div style="font-size: 0.85rem;">${not.metin}</div>
                </div>
            `).join('') : '<p style="opacity:0.6; font-size:0.85rem;">Henüz favoriye aldığın bir not yok.</p>'}
        </div>
    `;
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
        const saved = JSON.parse(localStorage.getItem('gys_yanlis_sorular') || '{}');
        return saved[konuBasligi] || [];
    } catch(e) {
        return [];
    }
}

function saveWrongQuestion(konuBasligi, soru) {
    try {
        let saved = JSON.parse(localStorage.getItem('gys_yanlis_sorular') || '{}');
        if (!saved[konuBasligi]) saved[konuBasligi] = [];
        if (!saved[konuBasligi].some(q => q.soru === soru.soru)) {
            saved[konuBasligi].push(soru);
        }
        localStorage.setItem('gys_yanlis_sorular', JSON.stringify(saved));
    } catch(e) {}
}

function removeWrongQuestion(konuBasligi, soru) {
    try {
        let saved = JSON.parse(localStorage.getItem('gys_yanlis_sorular') || '{}');
        if (saved[konuBasligi]) {
            saved[konuBasligi] = saved[konuBasligi].filter(q => q.soru !== soru.soru);
            localStorage.setItem('gys_yanlis_sorular', JSON.stringify(saved));
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

    kaynakSorular = kaynakSorular.sort(() => Math.random() - 0.5).slice(0, MAX_EXAM_QUESTIONS);
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
            <div class="quiz-progress" style="color: #ef4444;">Soru ${formalExamCurrentIndex + 1} / ${formalExamQuestions.length}</div>
            <div class="quiz-timer" id="formal-timer-display" style="background: rgba(239,68,68,0.1); color: #ef4444; font-size: 1.1rem; border: 1px solid rgba(239,68,68,0.3);">--:--</div>
        </div>

        ${navButtonsHTML}

        <div class="question-card" style="box-shadow: 0 4px 20px rgba(0,0,0,0.08); margin-top: 5px;">
            <div class="feed-tag" style="display:inline-block; margin-bottom:15px; background: #fee2e2; color: #ef4444;">${soru.altKategori || 'Karma'} (${soru.sınavYili || 'Genel'})</div>
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
                if (i === soru.dogruIndex) btnClass = 'correct';
                else if (i === userCevap && userCevap !== soru.dogruIndex) btnClass = 'wrong';

                return `
                <button class="option-btn ${btnClass}" disabled style="margin-bottom:10px; cursor:default;">
                    <span class="option-letter">${String.fromCharCode(65 + i)}</span> ${secenek.substring(3)}
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