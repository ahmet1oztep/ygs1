// --- MEVZUAT METNİ OKUYUCU (EDUCATION READER) ---

let currentMaddeIndex = 0;
let currentKonuDB = null; // Dinamik olarak atanacak

// Mevzuat Metni Sayfasını Aç
function openMevzuatMetni(konuBasligi) {
    currentKonuDB = getKonuVerisi(konuBasligi);

    if (!currentKonuDB || !currentKonuDB.maddeler || currentKonuDB.maddeler.length === 0) {
        console.warn(`${konuBasligi} için mevzuat maddeleri bulunamadı`);
        openModal('Mevzuat Bulunamadı', 'Bu konu için henüz mevzuat metni yüklenmedi.');
        return;
    }

    currentMaddeIndex = 0;

    history.pushState(
        { page: 'mevzuat-metni', konu: konuBasligi },
        "",
        "#mevzuat-" + encodeURIComponent(konuBasligi)
    );

    const detailPage = document.getElementById('page-subject-detail');
    detailPage.innerHTML = `
        <button class="back-btn" onclick="openSubjectDetail('${konuBasligi}', true)">⬅ Konu Menüsüne Dön</button>
        <div class="subject-header" style="margin-bottom: 5px;">
            <h2>📖 Mevzuat Metni</h2>
            <p>${konuBasligi}</p>
        </div>
        <div class="education-card-container" id="education-wrapper"></div>
    `;

    renderEducationCard(konuBasligi);
}

// Eğitim Kartını Render Et
function renderEducationCard(konuBasligi, aramaSonuclariHTML = '') {
    const wrapper = document.getElementById('education-wrapper');
    if (!wrapper || !currentKonuDB) return;

    const maddeler = currentKonuDB.maddeler;
    const madde = maddeler[currentMaddeIndex];

    wrapper.innerHTML = `
        <!-- Akıllı Arama Çubuğu -->
        <div style="width: 100%; max-width: 420px; margin-bottom: 10px; display: flex; gap: 8px;">
            <input type="text" id="madde-arama-input" placeholder="Madde no (örn: 15) veya kelime yaz..." style="flex: 1; padding: 10px 14px; border-radius: 12px; background: var(--glass-bg); border: 1px solid var(--glass-border); color: var(--text-color); font-size: 0.85rem; outline: none;" onkeydown="if(event.key === 'Enter') akilliAramaYap('${konuBasligi}')">
            <button onclick="akilliAramaYap('${konuBasligi}')" style="padding: 10px 16px; border-radius: 12px; background: var(--primary-color); color: white; border: none; font-size: 0.85rem; font-weight: 700; cursor: pointer;">Ara</button>
        </div>

        <!-- Arama Sonuçları Listesi (Eğer varsa burada gösterilir) -->
        <div id="arama-sonuclari-alani" style="width: 100%; max-width: 420px; margin-bottom: 15px;">
            ${aramaSonuclariHTML}
        </div>

        <div class="education-card" id="active-education-card">
            <div class="education-touch-nav">
                <div class="touch-left" onclick="prevMadde('${konuBasligi}')"></div>
                <div class="touch-right" onclick="nextMadde('${konuBasligi}')"></div>
            </div>

            <!-- Üst: Madde Numarası -->
            <div class="education-card-top">
                <span class="feed-tag">${madde.baslik}</span>
                <span class="education-counter">${currentMaddeIndex + 1} / ${maddeler.length}</span>
            </div>

            <!-- Orta: Orijinal Madde Metni -->
            <div class="education-card-body">
                <div class="madde-metni">
                    ${madde.metni}
                </div>
            </div>

            <!-- Alt: Butonlar ve İşlevler -->
            <div class="education-card-footer">
                <button class="education-info-btn" onclick="openTuzakModal('${currentMaddeIndex}', '${konuBasligi}')">
                    💡 Tuzak & Bilgi
                </button>
                <button class="education-history-btn" onclick="openTarihceModal('${currentMaddeIndex}', '${konuBasligi}')">
                    ${madde.baslik}
                </button>
                <button class="education-star-btn ${madde.favoriMi ? 'active' : ''}" onclick="toggleEducationStar(this, ${currentMaddeIndex}, '${konuBasligi}')">
                    ${madde.favoriMi ? '★' : '☆'}
                </button>
            </div>
        </div>
    `;
// --- KESİN ÇÖZÜM: AKILLI KAYDIRMA DESTEĞİ (MOBİL VE PC) ---
  const eduWrapper = document.getElementById('education-wrapper');
  if (eduWrapper) {
    
    eduWrapper.onpointerdown = function(e) {
      // Ekrana ilk dokunulduğunda (veya tıklandığında) koordinatları kaydet
      this.dataset.startX = e.clientX;
      this.dataset.startY = e.clientY;
      this.dataset.isDragging = "true";
    };

    eduWrapper.onpointerup = function(e) {
      if (this.dataset.isDragging !== "true") return;
      this.dataset.isDragging = "false";

      // SADECE Fare (PC) kullanırken metin seçimi yapıldıysa iptal et. (Mobilde engellemez)
      if (e.pointerType === 'mouse' && window.getSelection().toString().length > 0) return;

      const startX = parseFloat(this.dataset.startX);
      const startY = parseFloat(this.dataset.startY);
      const endX = e.clientX;
      const endY = e.clientY;

      const diffX = endX - startX;
      const diffY = endY - startY;

      // ÖNEMLİ KORUMA: Eğer dikey kaydırma (okuma için scroll) yatay kaydırmadan daha büyükse İŞLEM YAPMA (Sayfa değişmesin)
      if (Math.abs(diffY) > Math.abs(diffX)) return;

      const threshold = 50; // Kaydırma hassasiyeti (piksel)
      if (diffX < -threshold) {
        // Sola kaydırıldı -> İleri
        nextMadde(konuBasligi);
      } else if (diffX > threshold) {
        // Sağa kaydırıldı -> Geri
        prevMadde(konuBasligi);
      }
    };
    
    // Bilgisayarlardaki can sıkıcı "hayalet sürükleme" (resim/metin sürüklenmesi) problemini engeller
    eduWrapper.ondragstart = () => false;
  }
  // --- KAYDIRMA DESTEĞİ BİTİŞİ ---
}

// Akıllı Arama Fonksiyonu
function akilliAramaYap(konuBasligi) {
    const input = document.getElementById('madde-arama-input');
    if (!input || !currentKonuDB) return;

    const arananDeger = input.value.trim();
    if (!arananDeger) return;

    const maddeler = currentKonuDB.maddeler;

    // 1. Durum: Madde Numarası Arama (Sayı ise)
    if (!isNaN(arananDeger)) {
        const arananNo = parseInt(arananDeger);
        const hedefIndex = maddeler.findIndex(m => m.maddeNo === arananNo);

        if (hedefIndex !== -1) {
            currentMaddeIndex = hedefIndex;
            renderEducationCard(konuBasligi); // Listeyi temizleyerek kartı göster
        } else {
            openModal('⚠️ Bulunamadı', `${arananNo}. madde bu veritabanında henüz mevcut değil.`);
        }
        return;
    }

    // 2. Durum: Kelime / Metin Arama
    const arananKelime = arananDeger.toLocaleLowerCase('tr-TR');
    const eslesenler = [];

    maddeler.forEach((m, idx) => {
        if (m.metni.toLocaleLowerCase('tr-TR').includes(arananKelime) || 
            m.baslik.toLocaleLowerCase('tr-TR').includes(arananKelime)) {
            eslesenler.push({ index: idx, madde: m });
        }
    });

    if (eslesenler.length === 0) {
        openModal('⚠️ Sonuç Bulunamadı', `"${arananDeger}" kelimesi hiçbir madde metninde geçmiyor.`);
        return;
    }

    // Eğer sadece 1 sonuç varsa direkt o karta git
    if (eslesenler.length === 1) {
        currentMaddeIndex = eslesenler[0].index;
        renderEducationCard(konuBasligi);
        return;
    }

    // Birden fazla sonuç varsa, arama çubuğunun hemen altında alt alta listele
    let listeHTML = `
        <div style="background: var(--glass-bg); backdrop-filter: blur(12px); border: 1px solid var(--glass-border); border-radius: 14px; padding: 12px; box-shadow: var(--card-shadow);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <span style="font-size: 0.75rem; font-weight: 700; opacity: 0.8;">🔍 "${arananDeger}" (${eslesenler.length} sonuç)</span>
                <button onclick="renderEducationCard('${konuBasligi}')" style="background: none; border: none; font-size: 0.75rem; cursor: pointer; color: var(--primary-color); font-weight: 700;">Kapat ✕</button>
            </div>
            <div style="display: flex; flex-direction: column; gap: 6px; max-height: 180px; overflow-y: auto;">
    `;

    eslesenler.forEach(item => {
        listeHTML += `
            <div onclick="aramaSonucunaGit(${item.index}, '${konuBasligi}')" style="padding: 8px 10px; background: rgba(59, 130, 246, 0.08); border: 1px solid rgba(59, 130, 246, 0.15); border-radius: 8px; cursor: pointer; text-align: left;">
                <b style="color: var(--primary-color); font-size: 0.78rem;">${item.madde.baslik}</b>
                <p style="font-size: 0.7rem; opacity: 0.7; margin-top: 2px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${item.madde.metni}</p>
            </div>
        `;
    });

    listeHTML += `</div></div>`;

    // Kartı yeniden çiz ve sonuçları hemen üst üste kutu içinde göster
    renderEducationCard(konuBasligi, listeHTML);
}

// Arama listesinden seçilen maddeye gitme
function aramaSonucunaGit(index, konuBasligi) {
    currentMaddeIndex = index;
    renderEducationCard(konuBasligi); // Listeyi kapatıp seçilen karta odaklan
}

// Sonraki Maddeye Git
function nextMadde(konuBasligi) {
    if (currentKonuDB && currentMaddeIndex < currentKonuDB.maddeler.length - 1) {
        currentMaddeIndex++;
        renderEducationCard(konuBasligi);
    }
}

// Önceki Maddeye Git
function prevMadde(konuBasligi) {
    if (currentMaddeIndex > 0) {
        currentMaddeIndex--;
        renderEducationCard(konuBasligi);
    }
}

// Tuzak & Bilgi Modal'ını Aç
function openTuzakModal(maddeIndex, konuBasligi) {
    if (!currentKonuDB) return;

    const madde = currentKonuDB.maddeler[maddeIndex];
    const tuzaklar = madde.tuzaklar;

    let hapBilgiHTML = '';
    if (tuzaklar.hap && Array.isArray(tuzaklar.hap)) {
        hapBilgiHTML = tuzaklar.hap.map(item => `<li>${item}</li>`).join('');
    }

    const modalContent = `
        <h3>💡 ${madde.baslik} - Tuzak & Hap Bilgiler</h3>
        <p><b>Açıklama:</b> ${tuzaklar.aciklama}</p>
        <h4>Hap Bilgiler:</h4>
        <ul class="hap-bilgi-list">
            ${hapBilgiHTML}
        </ul>
    `;

    openModal('💡 Tuzak & Bilgi', modalContent);
}

// Tarihçe Modal'ını Aç
function openTarihceModal(maddeIndex, konuBasligi) {
    if (!currentKonuDB) return;

    const madde = currentKonuDB.maddeler[maddeIndex];
    const tarihce = madde.tarihce;

    let degisikliklerHTML = '';
    if (tarihce.degisiklikler && Array.isArray(tarihce.degisiklikler)) {
        degisikliklerHTML = tarihce.degisiklikler.map(item => `<li>${item}</li>`).join('');
    }

    const modalContent = `
        <h3>📜 ${tarihce.baslik}</h3>
        <h4>Değişiklikleri:</h4>
        <ul class="tarihce-list">
            ${degisikliklerHTML}
        </ul>
        <div class="tarihce-not">
            <b>⚠️ Önemli Not:</b> ${tarihce.onemliNot}
        </div>
    `;

    openModal('📜 Tarihçe & Değişiklikler', modalContent);
}

// Favori Yıldızını Aç/Kapat
function toggleEducationStar(btnElement, maddeIndex, konuBasligi) {
    if (!currentKonuDB) return;

    const madde = currentKonuDB.maddeler[maddeIndex];
    madde.favoriMi = !madde.favoriMi;

    btnElement.classList.toggle('active');
    btnElement.innerHTML = madde.favoriMi ? '★' : '☆';

    console.log(`Madde ${madde.maddeNo} favori durumu: ${madde.favoriMi}`);


}