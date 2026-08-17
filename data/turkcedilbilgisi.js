const turkceDilbilgisiDB = {
    meta: {
        kaynak: "Dil Bilgisi",
        surum: "v1",
        not: "Demo çalışma verisi"
    },

    altKonular: ["Genel Bilgiler", "Temel Kavramlar", "Örnek Uygulamalar"],

    flashcards: [
        {
            id: "dilbilgisi-flash-001",
            baslik: "Genel Bilgi",
            metin: "Bu konu için demo flashcard verisi yüklenmiştir.",
            ipucu: "Daha sonra gerçek içerikle değiştirilecek.",
            favoriMi: false
        },
        {
            id: "dilbilgisi-flash-002",
            baslik: "Temel Kavram",
            metin: "Konuya ait temel tanımlar ve kısa tekrar kartları burada yer alacaktır.",
            ipucu: "Şimdilik test amaçlı içerik kullanılıyor.",
            favoriMi: false
        }
    ],

    sorular: [
        {
            id: "dilbilgisi-soru-001",
            altKategori: "Genel Bilgiler",
            isYanlis: false,
            cıkmisSoru: false,
            sınavYili: "",
            soru: "Bu konu için demo soru verisi başarıyla yüklendi mi?",
            secenekler: ["A) Evet", "B) Hayır", "C) Kısmen", "D) Belirsiz"],
            dogruIndex: 0,
            detay: "Bu soru yalnızca veri akışını test etmek için eklenmiştir."
        },
        {
            id: "dilbilgisi-soru-002",
            altKategori: "Temel Kavramlar",
            isYanlis: false,
            cıkmisSoru: false,
            sınavYili: "",
            soru: "Flashcard ve soru-cevap alanlarının kendi dosyasından veri alması hedeflenmektedir. Bu ifade doğru mu?",
            secenekler: ["A) Evet", "B) Hayır", "C) Sadece sınav modunda", "D) Sadece mevzuatta"],
            dogruIndex: 0,
            detay: "Evet, hedef her konunun kendi veri dosyasından beslenmesidir."
        }
    ],

    maddeler: [
        {
            id: 1,
            maddeNo: 1,
            baslik: "Madde 1 - Demo Başlık",
            metni: "Bu konu için demo mevzuat/metin kartı eklenmiştir.",
            tuzaklar: {
                aciklama: "Test amaçlı bilgi kartıdır.",
                hap: ["Konu verisi dosyadan geliyor", "Mevzuat alanı aktif", "İçerik daha sonra özelleştirilecek"]
            },
            tarihce: {
                baslik: "Demo Tarihçe",
                degisiklikler: ["İlk test verisi eklendi"],
                onemliNot: "Bu içerik geçicidir."
            },
            favoriMi: false,
            cipMi: false
        }
    ]
};

window.turkceDilbilgisiDB = turkceDilbilgisiDB;