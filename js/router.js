// Uygulamadaki sayfalarımız
const pages = ['home', 'feed', 'quiz', 'profile'];

// Sayfa değiştirme fonksiyonu
function navigateTo(targetId) {
    // 1. Tüm sayfaları gizle
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    // 2. Alt menüdeki butonların rengini sıfırla
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    
    // 3. Hedef sayfayı bul ve göster
    let targetPage = document.getElementById(`page-${targetId}`);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    // 4. Tıklanan butonu renklendir
    const activeBtn = document.querySelector(`.nav-btn[data-target="${targetId}"]`);
    if (activeBtn) activeBtn.classList.add('active');
}