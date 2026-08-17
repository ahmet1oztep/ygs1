const anayasaDB = {
  meta: {
    kaynak: "1982 Anayasası",
    surum: "v1",
    not: "AI destekli çalışma verisi"
  },

  altKonular: [
    "Genel Esaslar",
    "Yasama",
    "Yargı",
    "Temel Haklar",
    "Cumhurbaşkanı"
  ],
flashcards: [
    {
      id: "anayasa-flash-001",
      kategori: "Genel Esaslar",
      etiketler: ["Temel Haklar ve İstisnalar"],
      baslik: "Madde 1 ve 4 - Devletin Şekli",
      metin: "Türkiye Devleti bir Cumhuriyettir. Bu hüküm değiştirilemez ve değiştirilmesi teklif edilemez.",
      ipucu: "Sadece yönetim şeklini (Cumhuriyet) tanımlar. 4. madde güvencesi altındadır.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-002",
      kategori: "Genel Esaslar",
      etiketler: ["Temel Haklar ve İstisnalar"],
      baslik: "Madde 2 - Cumhuriyetin Nitelikleri",
      metin: "Türkiye Cumhuriyeti, insan haklarına saygılı, Atatürk milliyetçiliğine bağlı, demokratik, lâik ve sosyal bir hukuk Devletidir.",
      ipucu: "Sınav tuzağı: İnsan haklarına 'dayanan' değil, 'saygılı' ifadesi geçerlidir.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-003",
      kategori: "Genel Esaslar",
      etiketler: ["Temel Haklar ve İstisnalar"],
      baslik: "Madde 3 - Devletin Sembolleri",
      metin: "Devletin dili Türkçedir, bayrağı beyaz ay yıldızlı al bayraktır, millî marşı İstiklal Marşı, başkenti Ankara'dır.",
      ipucu: "İlk 3 madde değiştirilemez ve değiştirilmesi teklif dahi edilemez (Madde 4).",
      favoriMi: false
    },
    {
      id: "anayasa-flash-004",
      kategori: "Genel Esaslar",
      etiketler: ["Özel Atamalar ve Organlar"],
      baslik: "Madde 6 - Egemenlik",
      metin: "Egemenlik kayıtsız şartsız Milletindir. Hiçbir kimse veya organ kaynağını Anayasadan almayan bir Devlet yetkisi kullanamaz.",
      ipucu: "Kaynağını Anayasa'dan almayan yetki kullanımı kesinlikle yasaklanmıştır.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-005",
      kategori: "Genel Esaslar",
      etiketler: ["Özel Atamalar ve Organlar"],
      baslik: "Madde 7, 8 ve 9 - Kuvvetler Ayrılığı",
      metin: "Yasama yetkisi TBMM'ye, yürütme yetkisi ve görevi Cumhurbaşkanına, yargı yetkisi bağımsız ve tarafsız mahkemelere aittir.",
      ipucu: "Yargı için 'bağımsız' kelimesinin yanına 2017'de 'tarafsız' ibaresi eklenmiştir. Yürütme tek baştadır.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-006",
      kategori: "Temel Haklar",
      etiketler: ["Temel Haklar ve İstisnalar"],
      baslik: "Madde 10 - Kanun Önünde Eşitlik",
      metin: "Herkes kanun önünde eşittir. Çocuklar, yaşlılar, özürlüler, harp/vazife şehit dul ve yetimleri ile malul ve gaziler için alınacak tedbirler eşitlik ilkesine aykırı sayılmaz.",
      ipucu: "İmtiyaz yasaktır, sayılan gruplar için pozitif ayrımcılık anayasal güvencededir.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-007",
      kategori: "Temel Haklar",
      etiketler: ["Temel Haklar ve İstisnalar"],
      baslik: "Madde 13 - Hak ve Hürriyetlerin Sınırlanması",
      metin: "Temel hak ve hürriyetler, özlerine dokunulmaksızın ve ancak kanunla sınırlanabilir. Sınırlama ölçülülük ilkesine aykırı olamaz.",
      ipucu: "Sınırlama SADECE kanunla yapılır (CBK veya yönetmelikle yapılamaz).",
      favoriMi: false
    },
    {
      id: "anayasa-flash-008",
      kategori: "Temel Haklar",
      etiketler: ["Temel Haklar ve İstisnalar"],
      baslik: "Madde 15 - OHAL'de Hakların Durdurulması (Çekirdek Haklar)",
      metin: "Savaş hukukuna uygun ölümler hariç yaşama hakkına dokunulamaz. Kimse din/vicdan açıklamaya zorlanamaz, suç/cezalar geçmişe yürütülemez ve masumiyet karinesi ihlal edilemez.",
      ipucu: "Bu haklar OHAL'de bile dokunulamayan 'çekirdek' haklardır.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-009",
      kategori: "Temel Haklar",
      etiketler: ["Temel Haklar ve İstisnalar"],
      baslik: "Madde 17 - Kişinin Dokunulmazlığı",
      metin: "Herkes yaşama, maddi ve manevi varlığını koruma hakkına sahiptir. Kimseye işkence ve eziyet yapılamaz.",
      ipucu: "Ölüm cezası (idam) 2004 değişikliğiyle anayasadan tamamen çıkarılmıştır.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-010",
      kategori: "Temel Haklar",
      etiketler: ["Süreler ve Nisaplar"],
      baslik: "Madde 19 - Kişi Hürriyeti ve Güvenliği",
      metin: "Yakalanan veya tutuklanan kişi en geç 48 saat, toplu suçlarda ise en çok 4 gün içinde hâkim önüne çıkarılır.",
      ipucu: "Normal suçlarda 48 saat, toplu suçlarda 4 gün süresine mahkemeye gönderilme süresi dahil DEĞİLDİR.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-011",
      kategori: "Temel Haklar",
      etiketler: ["Süreler ve Nisaplar", "Temel Haklar ve İstisnalar"],
      baslik: "Madde 20 - Özel Hayatın Gizliliği",
      metin: "Gecikmesinde sakınca bulunan hallerde yetkili merciin yazılı emriyle el koyma yapılabilir. Bu karar 24 saat içinde hakime sunulur; hakim 48 saat içinde açıklamazsa el koyma kalkar.",
      ipucu: "24 saat içinde hakime sunma ve 48 saat içinde hakim onayı kuralı çok sık sorulur. Kişisel veriler de bu maddededir.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-012",
      kategori: "Temel Haklar",
      etiketler: ["Temel Haklar ve İstisnalar"],
      baslik: "Madde 23 - Yerleşme ve Seyahat Hürriyeti",
      metin: "Vatandaş sınır dışı edilemez ve yurda girme hakkından yoksun bırakılamaz. Yurt dışına çıkma hürriyeti ancak suç soruşturması sebebiyle hâkim kararıyla sınırlanabilir.",
      ipucu: "Vatandaşın yurda girme hakkı mutlak ve sınırsızdır.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-013",
      kategori: "Temel Haklar",
      etiketler: ["Temel Haklar ve İstisnalar"],
      baslik: "Madde 28 ve 29 - Basın Hürriyeti",
      metin: "Basın hürdür, sansür edilemez. Basımevi kurmak ve süreli/süresiz yayın çıkarmak önceden izin alma ve mali teminat yatırma şartına bağlanamaz.",
      ipucu: "Önceden izin alma ve mali teminat şartının yasak olması temel kuraldır.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-014",
      kategori: "Temel Haklar",
      etiketler: ["Temel Haklar ve İstisnalar"],
      baslik: "Madde 33 ve 34 - Dernek, Toplantı ve Gösteri Hakları",
      metin: "Herkes, önceden izin almaksızın dernek kurma, silahsız ve saldırısız toplantı ve gösteri yürüyüşü düzenleme hakkına sahiptir.",
      ipucu: "Bu hakların kullanılabilmesi için 'önceden izin almaksızın' şartı geçerlidir (sadece bildirim yeterlidir).",
      favoriMi: false
    },
    {
      id: "anayasa-flash-015",
      kategori: "Temel Haklar",
      etiketler: ["Temel Haklar ve İstisnalar"],
      baslik: "Madde 38 - Suç ve Cezalara İlişkin Esaslar",
      metin: "Suç ve cezalar geçmişe yürütülemez. Kanuna aykırı elde edilmiş bulgular delil olamaz. Ceza sorumluluğu şahsidir. Ölüm ve genel müsadere cezası verilemez.",
      ipucu: "Hukuka aykırı delil yasağı ve sözleşme borcundan dolayı hapis yasağı sıklıkla sorulur.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-016",
      kategori: "Temel Haklar",
      etiketler: ["Temel Haklar ve İstisnalar"],
      baslik: "Madde 42 - Eğitim ve Öğrenim Hakkı",
      metin: "İlköğretim kız ve erkek bütün vatandaşlar için zorunludur ve Devlet okullarında parasızdır. Türkçeden başka dil ana dil olarak okutulamaz.",
      ipucu: "İlköğretimin devlet okullarında parasız olması mutlak kuraldır.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-017",
      kategori: "Sosyal ve Ekonomik Haklar",
      etiketler: ["Süreler ve Nisaplar"],
      baslik: "Madde 46 - Kamulaştırma",
      metin: "Kamulaştırma bedeli kural olarak peşin ödenir. Tarım reformu, büyük enerji/sulama projeleri, orman yetiştirme gibi hallerde taksit yapılabilir ancak süre 5 yılı aşamaz.",
      ipucu: "Taksitlendirme süresi (en çok 5 yıl) ve küçük çiftçi bedelinin herhalde peşin ödeneceği unutulmamalıdır.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-018",
      kategori: "Sosyal ve Ekonomik Haklar",
      etiketler: ["Özel Atamalar ve Organlar"],
      baslik: "Madde 51, 53, 54 - Sendika, Sözleşme ve Grev Hakları",
      metin: "Sendikalar önceden izin alınmadan kurulur. Memurların toplu sözleşme hakkı vardır ve uyuşmazlıkta Kamu Görevlileri Hakem Kuruluna gidilir.",
      ipucu: "Memurların grev hakkı yoktur, sadece toplu sözleşme hakkı vardır. Kararlar kesindir.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-019",
      kategori: "Sosyal ve Ekonomik Haklar",
      etiketler: ["Özel Atamalar ve Organlar", "Temel Haklar ve İstisnalar"],
      baslik: "Madde 59 - Sporun Geliştirilmesi ve Tahkim",
      metin: "Spor federasyonlarının disiplin kararlarına karşı sadece zorunlu tahkim yoluna başvurulabilir. Spor Tahkim Kurulu kararları kesindir.",
      ipucu: "Tahkim Kurulu kararlarına yargı yolunun kapalı olması önemli bir anayasal istisnadır.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-020",
      kategori: "Sosyal ve Ekonomik Haklar",
      etiketler: ["Temel Haklar ve İstisnalar"],
      baslik: "Madde 65 - İktisadi ve Sosyal Ödevlerin Sınırları",
      metin: "Devlet, sosyal ve ekonomik alanlardaki görevlerini mali kaynaklarının yeterliliği ölçüsünde yerine getirir.",
      ipucu: "'Mali kaynak yeterliliği' kuralı SADECE sosyal ve ekonomik haklar (2. Kısım 3. Bölüm) için geçerlidir.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-021",
      kategori: "Siyasi Haklar",
      etiketler: ["Süreler ve Nisaplar"],
      baslik: "Madde 67 - Seçme ve Seçilme Hakkı",
      metin: "Seçme ve halkoylamasına katılma yaşı 18'dir. Seçim kanunlarında yapılan değişiklikler yürürlüğe girdiği tarihten itibaren 1 yıl içinde yapılacak seçimlerde uygulanmaz.",
      ipucu: "Erbaşlar, askeri öğrenciler ve taksirli suçlar hariç cezaevi hükümlüleri oy kullanamaz. 1 yıl kuralı kritiktir.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-022",
      kategori: "Siyasi Haklar",
      etiketler: ["Özel Atamalar ve Organlar"],
      baslik: "Madde 68 ve 69 - Siyasi Partiler",
      metin: "Siyasi partiler izinsiz kurulur (18 yaş şarttır). Kapatma davasını Yargıtay C. Başsavcısı açar, kararı Anayasa Mahkemesi verir.",
      ipucu: "Hakim/savcılar, memurlar, TSK mensupları ve yükseköğretim öncesi öğrenciler parti üyesi olamaz. Yabancı yardım alan temelli kapatılır.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-023",
      kategori: "Siyasi Haklar",
      etiketler: ["Süreler ve Nisaplar", "Özel Atamalar ve Organlar"],
      baslik: "Madde 74 - Dilekçe ve Kamu Denetçisine Başvurma",
      metin: "Yabancılar karşılıklılık esasıyla dilekçe hakkını kullanabilir. Kamu Başdenetçisi TBMM tarafından gizli oyla 4 yıl için seçilir.",
      ipucu: "Kamu Başdenetçisi (Ombudsman) süresinin 4 yıl olduğu ve TBMM tarafından seçildiği sorulur.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-024",
      kategori: "Yasama",
      etiketler: ["Özel Atamalar ve Organlar"],
      baslik: "Madde 75 - TBMM'nin Kuruluşu",
      metin: "Türkiye Büyük Millet Meclisi genel oyla seçilen 600 milletvekilinden oluşur.",
      ipucu: "2017 değişikliğiyle vekil sayısı 550'den 600'e çıkarılmıştır.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-025",
      kategori: "Yasama",
      etiketler: ["Süreler ve Nisaplar"],
      baslik: "Madde 76 - Milletvekili Seçilme Yeterliliği",
      metin: "Seçilme yaşı 18'dir. Taksirli suçlar hariç toplam 1 yıl veya daha fazla hapis cezası alanlar, affa uğrasalar bile seçilemezler.",
      ipucu: "Yüz kızartıcı ve terör suçlarında affa uğrama durumu bile vekil olmaya engeldir.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-026",
      kategori: "Yasama",
      etiketler: ["Süreler ve Nisaplar"],
      baslik: "Madde 77 - TBMM ve Cumhurbaşkanı Seçim Dönemi",
      metin: "Türkiye Büyük Millet Meclisi ve Cumhurbaşkanlığı seçimleri 5 yılda bir aynı günde yapılır.",
      ipucu: "İki seçimin 5 yılda bir aynı günde birleştirilmesi 2017 değişikliğidir.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-027",
      kategori: "Yasama",
      etiketler: ["Süreler ve Nisaplar"],
      baslik: "Madde 78 - Ara Seçim Kuralları",
      metin: "Ara seçim bir yasama döneminde 1 defa yapılır. Genel seçimden 30 ay geçmedikçe ve seçime 1 yıl kala yapılamaz (boşalma %5 olursa 3 ayda yapılır).",
      ipucu: "30 ay, %5 (30 vekil) ve 1 yıl kala kuralları rakamsal tuzakların favorisidir.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-028",
      kategori: "Yasama",
      etiketler: ["Özel Atamalar ve Organlar"],
      baslik: "Madde 79 - Yüksek Seçim Kurulu (YSK)",
      metin: "YSK kararları kesindir. 7 asıl, 4 yedek üyeden oluşur. Üyelerin 6'sı Yargıtay, 5'i Danıştay tarafından seçilir.",
      ipucu: "YSK kararlarına karşı Anayasa Mahkemesi dâhil hiçbir mercie başvurulamaz.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-029",
      kategori: "Yasama",
      etiketler: ["Temel Haklar ve İstisnalar"],
      baslik: "Madde 83 - Yasama Dokunulmazlığı",
      metin: "Yasama sorumsuzluğu ömür boyudur (kaldırılamaz). Yasama dokunulmazlığı ise geçicidir (kaldırılabilir). Ağır cezalık suçüstü halleri dokunulmazlık dışındadır.",
      ipucu: "Söz ve oydan sorumsuzluk kalıcı iken tutuklanamama/yargılanamama geçicidir.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-030",
      kategori: "Yasama",
      etiketler: ["Süreler ve Nisaplar"],
      baslik: "Madde 84 - Milletvekilliğinin Düşmesi",
      metin: "Özürsüz 1 ayda toplam 5 birleşim günü devamsızlık yapanın vekilliği Genel Kurulda üye tamsayısının salt çoğunluğu (301) oyuyla düşürülebilir.",
      ipucu: "Kesin mahkeme kararında oylama yapılmaz, Genel Kurula bildirim (okunma) ile düşer.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-031",
      kategori: "Yasama",
      etiketler: ["Süreler ve Nisaplar"],
      baslik: "Madde 85 - Dokunulmazlık ve Düşme Kararının İptali",
      metin: "Dokunulmazlık kaldırma veya vekillik düşme kararına karşı 7 gün içinde AYM'ye başvurulur, AYM 15 gün içinde kesin karara bağlar.",
      ipucu: "7 gün başvuru, 15 gün karar süresi standart sorudur.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-032",
      kategori: "Yasama",
      etiketler: ["Süreler ve Nisaplar"],
      baslik: "Madde 87 - TBMM'nin Görev ve Yetkileri (Genel/Özel Af)",
      metin: "TBMM, üye tamsayısının beşte üç (3/5) çoğunluğunun kararı ile genel ve özel af ilânına karar verir.",
      ipucu: "Genel ve özel af çıkarmak için 360 (3/5) milletvekilinin oyu şarttır.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-033",
      kategori: "Yasama",
      etiketler: ["Süreler ve Nisaplar", "Mülga ve Tarihsel Değişiklikler"],
      baslik: "Madde 88 ve 89 - Kanunların Yapılması",
      metin: "Kanun teklifini sadece milletvekilleri verir. Cumhurbaşkanı kanunları 15 gün içinde yayımlar. Geri gönderdiği kanun Meclis tarafından salt çoğunlukla (301) aynen kabul edilirse yayımlanmak zorundadır.",
      ipucu: "Cumhurbaşkanının (Yürütmenin) yasa tasarısı sunma yetkisi mülga olmuştur. Veto direniş nisabı salt çoğunluktur.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-034",
      kategori: "Yasama",
      etiketler: ["Temel Haklar ve İstisnalar"],
      baslik: "Madde 90 - Milletlerarası Andlaşmalar",
      metin: "Milletlerarası antlaşmalar kanun hükmündedir ve AYM'ye iptali için başvurulamaz. Temel haklara ilişkin uluslararası antlaşma ile kanun çelişirse antlaşma esas alınır.",
      ipucu: "Temel haklar konusunda uluslararası hukukun iç hukuka üstünlüğü 2004 kuralıdır.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-035",
      kategori: "Yasama",
      etiketler: ["Temel Haklar ve İstisnalar"],
      baslik: "Madde 92 - Savaş Hali İlanı",
      metin: "Savaş ilanı ve TSK'nın yurt dışına gönderilmesi yetkisi TBMM'nindir. Ani saldırıda Meclis tatildeyse Cumhurbaşkanı da karar verebilir.",
      ipucu: "Asli yetki Meclise aittir, Cumhurbaşkanı sadece ani saldırı istisnasında yetki kullanır.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-036",
      kategori: "Yasama",
      etiketler: ["Süreler ve Nisaplar"],
      baslik: "Madde 93 - Toplanma ve Tatil",
      metin: "TBMM her yıl Ekim ayının ilk günü toplanır. Bir yasama yılında en çok 3 ay tatil yapabilir.",
      ipucu: "Olağanüstü toplantıya çağırma yetkisi Cumhurbaşkanı, Meclis Başkanı veya 1/5 üyenin istemiyle olur.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-037",
      kategori: "Yasama",
      etiketler: ["Süreler ve Nisaplar"],
      baslik: "Madde 94 - TBMM Başkanlık Divanı",
      metin: "Meclis Başkanı seçimi turları: İlk iki turda 2/3 (400), üçüncü turda salt çoğunluk (301) aranır. Görev süresi 2+3 (dönem sonuna kadar) yıldır.",
      ipucu: "Siyasi partiler meclis başkanlığı için aday gösteremez. İlk iki turda çoğunluk zorludur (400 oy).",
      favoriMi: false
    },
    {
      id: "anayasa-flash-038",
      kategori: "Yasama",
      etiketler: ["Süreler ve Nisaplar"],
      baslik: "Madde 95 - Siyasi Parti Grupları",
      metin: "Siyasi parti grubu kurabilmek için en az 20 milletvekiline sahip olmak gerekir.",
      ipucu: "Grup kurma sayısının 20 milletvekili olduğu banko sorulardandır.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-039",
      kategori: "Yasama",
      etiketler: ["Süreler ve Nisaplar"],
      baslik: "Madde 96 - Toplantı ve Karar Yeter Sayısı",
      metin: "Meclis en az üye tamsayısının üçte biri (200) ile toplanır. Karar yeter sayısı katılanların salt çoğunluğudur ancak hiçbir şekilde 151'den az olamaz.",
      ipucu: "200 (toplantı) ve 151 (karar) sayıları rakamsal sorularda direkt cevaptır.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-040",
      kategori: "Yasama",
      etiketler: ["Süreler ve Nisaplar", "Mülga ve Tarihsel Değişiklikler"],
      baslik: "Madde 98 - Bilgi Edinme ve Denetim",
      metin: "Denetim yolları: Meclis araştırması, genel görüşme, Meclis soruşturması ve yazılı sorudur. Yazılı soru 15 gün içinde cevaplanır.",
      ipucu: "Sözlü soru ve Gensoru mekanizmaları 2017 değişikliğiyle kaldırılmıştır (mülga).",
      favoriMi: false
    },
    {
      id: "anayasa-flash-041",
      kategori: "Yürütme",
      etiketler: ["Süreler ve Nisaplar", "Özel Atamalar ve Organlar"],
      baslik: "Madde 101 - Cumhurbaşkanı Seçimi",
      metin: "40 yaşını doldurmuş, yükseköğrenimli, milletvekili yeterliliğine sahip kişiler arasından 5 yıl için seçilir. En fazla 2 kez seçilir.",
      ipucu: "Aday göstermek için; siyasi parti grupları, %5 oy alan partiler veya 100 bin seçmen imzası gerekir.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-042",
      kategori: "Yürütme",
      etiketler: ["Mülga ve Tarihsel Değişiklikler", "Temel Haklar ve İstisnalar"],
      baslik: "Madde 104 - Cumhurbaşkanlığı Kararnamesi",
      metin: "Temel haklar, kişi hakları ve siyasi haklar CBK ile düzenlenemez. Kanunda açıkça düzenlenen veya münhasıran kanuna bırakılan konularda CBK çıkarılamaz.",
      ipucu: "CBK ile kanun çelişirse, daima kanun hükümleri uygulanır.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-043",
      kategori: "Yürütme",
      etiketler: ["Süreler ve Nisaplar"],
      baslik: "Madde 105 - CB Cezai Sorumluluğu",
      metin: "Soruşturma önergesi salt çoğunluk (301), soruşturma açılması kararı 3/5 (360) ve Yüce Divana sevk 2/3 (400) oyla alınır.",
      ipucu: "Soruşturma açılmasına karar verilen Cumhurbaşkanı seçimleri yenileme kararı alamaz.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-044",
      kategori: "Yürütme",
      etiketler: ["Süreler ve Nisaplar"],
      baslik: "Madde 106 - Makamın Boşalması",
      metin: "Cumhurbaşkanlığı makamının boşalması halinde 45 gün içinde yeni seçim yapılır.",
      ipucu: "Milletvekili olan biri bakan veya CB yardımcısı atanırsa milletvekilliği kendiliğinden düşer.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-045",
      kategori: "Yürütme",
      etiketler: ["Özel Atamalar ve Organlar"],
      baslik: "Madde 108 - Devlet Denetleme Kurulu (DDK)",
      metin: "Cumhurbaşkanlığına bağlıdır ve tüm kamu kurumlarını denetler. Yargı organları DDK'nın görev alanı DIŞINDADIR.",
      ipucu: "TSK önceden denetlenemezken artık DDK tarafından denetlenmektedir; sadece yargı muaftır.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-046",
      kategori: "Yürütme",
      etiketler: ["Mülga ve Tarihsel Değişiklikler"],
      baslik: "Madde 109-115 - Mülga Kurumlar",
      metin: "Bakanlar Kurulu, güvenoyu, gensoru ve tüzük kavramları 2017 anayasa değişikliğiyle mülga edilmiştir.",
      ipucu: "Sınavda çeldirici olarak 'Tüzük' veya 'Bakanlar Kurulu' görürsen doğrudan elersin.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-047",
      kategori: "Yürütme",
      etiketler: ["Süreler ve Nisaplar"],
      baslik: "Madde 116 - Seçimlerin Yenilenmesi",
      metin: "TBMM, üye tamsayısının beşte üç (3/5 - 360) çoğunluğuyla, CB ise tek başına erken seçim (yenileme) kararı alabilir. İki seçim birlikte yapılır.",
      ipucu: "Meclisin tek başına basit çoğunlukla erken seçim alma yetkisi yoktur, 360 oy şarttır.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-048",
      kategori: "Yürütme",
      etiketler: ["Özel Atamalar ve Organlar"],
      baslik: "Madde 118 - Milli Güvenlik Kurulu (MGK)",
      metin: "Cumhurbaşkanının başkanlığında toplanır. Kurul kararları istişari (tavsiye) niteliğindedir.",
      ipucu: "CB katılamadığında toplantıya CB Yardımcısı başkanlık eder.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-049",
      kategori: "Yürütme",
      etiketler: ["Süreler ve Nisaplar", "Mülga ve Tarihsel Değişiklikler"],
      baslik: "Madde 119 - Olağanüstü Hal (OHAL)",
      metin: "Cumhurbaşkanı en çok 6 ay için ilan edebilir. TBMM süreyi her defasında en çok 4 ay uzatabilir. CBK'lar 3 ay içinde mecliste görüşülür.",
      ipucu: "OHAL kararını Cumhurbaşkanı ilan eder (Meclis değil), Meclis onaylar/uzatır. Sıkıyönetim kaldırılmıştır.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-050",
      kategori: "İdare",
      etiketler: ["Mülga ve Tarihsel Değişiklikler"],
      baslik: "Madde 123 - Kamu Tüzelkişiliği",
      metin: "Kamu tüzelkişiliği sadece kanunla veya Cumhurbaşkanlığı kararnamesiyle kurulabilir.",
      ipucu: "İdari işlem veya yönetmelikle kamu tüzel kişiliği kurulamaz.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-051",
      kategori: "İdare",
      etiketler: ["Mülga ve Tarihsel Değişiklikler"],
      baslik: "Madde 124 - Yönetmelikler",
      metin: "Cumhurbaşkanı, bakanlıklar ve kamu tüzelkişileri yönetmelik çıkarabilirler.",
      ipucu: "Başbakanlık mülga olduğundan yönetmelik çıkaramaz. Her kamu kuruluşu değil, sadece kamu tüzel kişiliği olanlar çıkarabilir.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-052",
      kategori: "Yargı",
      etiketler: ["Temel Haklar ve İstisnalar"],
      baslik: "Madde 125 - İdari Yargı",
      metin: "İdarenin her türlü eylem ve işlemlerine yargı yolu açıktır. Ancak yargı, hiçbir surette 'yerindelik denetimi' yapamaz.",
      ipucu: "Mahkemeler idarenin yerine geçerek hizmetin yerinde olup olmadığını sorgulayamaz, sadece hukuka uygunluğu denetler.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-053",
      kategori: "İdare",
      etiketler: ["Özel Atamalar ve Organlar"],
      baslik: "Madde 126 - Merkezi İdare",
      metin: "İllerin idaresi yetki genişliği esasına dayanır.",
      ipucu: "Yetki genişliği ilkesi SADECE illerde ve Valilere tanınmış bir haktır. Merkezden yönetimin istisnasıdır.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-054",
      kategori: "İdare",
      etiketler: ["Süreler ve Nisaplar"],
      baslik: "Madde 127 - Mahalli İdareler",
      metin: "Mahalli idarelerin seçimleri 5 yılda bir yapılır. Merkezi idare mahalli idareler üzerinde 'idari vesayet' yetkisine sahiptir.",
      ipucu: "Merkezi idarenin yerel yönetimler (belediye, köy) üzerindeki denetimine 'hiyerarşi' değil 'idari vesayet' denir.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-055",
      kategori: "İdare",
      etiketler: ["Temel Haklar ve İstisnalar"],
      baslik: "Madde 129 - Memur Disiplin Güvencesi",
      metin: "Memurlara savunma hakkı tanınmadıkça disiplin cezası verilemez. Disiplin kararları yargı denetimi dışında bırakılamaz.",
      ipucu: "Eskiden uyarma ve kınama cezalarına yargı kapalıydı, 2010'da hepsi yargı denetimine açıldı. Memura doğrudan dava açılamaz, idareye açılır.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-056",
      kategori: "İdare",
      etiketler: ["Özel Atamalar ve Organlar"],
      baslik: "Madde 130 - Üniversiteler",
      metin: "Üniversite rektörlerini Cumhurbaşkanı, dekanlarını ise Yükseköğretim Kurulu (YÖK) atar.",
      ipucu: "Dekanları atama yetkisi üniversite içi kurullara değil, YÖK'e aittir.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-057",
      kategori: "İdare",
      etiketler: ["Özel Atamalar ve Organlar"],
      baslik: "Madde 135 - Kamu Kurumu Nit. Meslek Kuruluşları",
      metin: "Kamu kurumu niteliğindeki meslek kuruluşlarının organ seçimlerinde siyasi partiler aday gösteremezler.",
      ipucu: "Siyasi partilerin aday gösteremeyeceği yegane kurumlardan biridir.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-058",
      kategori: "İdare",
      etiketler: ["Temel Haklar ve İstisnalar"],
      baslik: "Madde 137 - Kanunsuz Emir",
      metin: "Konusu suç teşkil eden emir hiçbir suretle yerine getirilmez; yazılı yenilense bile yerine getiren kimse sorumluluktan kurtulamaz.",
      ipucu: "Hukuka aykırı emir yazılı ısrarla uygulanabilirken, konusu 'suç' olan emir asla uygulanamaz.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-059",
      kategori: "Yargı",
      etiketler: ["Temel Haklar ve İstisnalar"],
      baslik: "Madde 138 - Mahkemelerin Bağımsızlığı",
      metin: "Hiçbir organ, makam, merci veya kişi mahkemelere emir, talimat veremez, tavsiye ve telkinde bulunamaz.",
      ipucu: "Yasama ve yürütme organları mahkeme kararlarını geciktiremez ve değiştiremez.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-060",
      kategori: "Yargı",
      etiketler: ["Süreler ve Nisaplar", "Özel Atamalar ve Organlar"],
      baslik: "Madde 139 ve 140 - Hakim Güvencesi",
      metin: "Hakim ve savcılar azlolunamaz. İdari yönden Adalet Bakanlığına bağlıdırlar ve 65 yaşını bitirinceye kadar görev yaparlar.",
      ipucu: "Kadro kaldırılsa dahi maaş ve ödenekleri kesilmez (Teminat).",
      favoriMi: false
    },
    {
      id: "anayasa-flash-061",
      kategori: "Yargı",
      etiketler: ["Mülga ve Tarihsel Değişiklikler"],
      baslik: "Madde 142 - Askeri Mahkemelerin Durumu",
      metin: "Disiplin mahkemeleri dışında askerî mahkemeler kurulamaz. (Sadece savaş hali istisnası vardır).",
      ipucu: "Askeri Yargıtay ve AYİM (Askeri Yüksek İdare Mahkemesi) 2017'de anayasadan kaldırılmıştır.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-062",
      kategori: "Yargı",
      etiketler: ["Süreler ve Nisaplar", "Özel Atamalar ve Organlar"],
      baslik: "Madde 146 - AYM Kuruluşu",
      metin: "Anayasa Mahkemesi 15 üyeden kurulur. Üye olabilmek için 45 yaşını doldurmuş olmak şarttır.",
      ipucu: "Üye sayısı 17'den 15'e düşürülmüştür. 45 yaş alt sınırı mutlaka bilinmelidir.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-063",
      kategori: "Yargı",
      etiketler: ["Süreler ve Nisaplar"],
      baslik: "Madde 147 - AYM Görev Süresi",
      metin: "AYM üyeleri 12 yıl için seçilir. Bir kimse ikinci defa AYM üyesi seçilemez. Yaş haddi 65'tir.",
      ipucu: "Tekrar seçilme yasağı vardır (1 kişi sadece 1 defa).",
      favoriMi: false
    },
    {
      id: "anayasa-flash-064",
      kategori: "Yargı",
      etiketler: ["Özel Atamalar ve Organlar"],
      baslik: "Madde 148 - AYM Görevleri",
      metin: "Bireysel başvuruları AYM karara bağlar (olağan yollar tüketilmeli). Cumhurbaşkanı, bakanlar ve yüksek yargı mensuplarını Yüce Divan sıfatıyla yargılar.",
      ipucu: "Bireysel başvuru hakkı (Anayasa şikayeti) 2010 değişikliği ile sisteme girmiştir.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-065",
      kategori: "Yargı",
      etiketler: ["Süreler ve Nisaplar"],
      baslik: "Madde 149 - AYM Usulü",
      metin: "Anayasa değişikliği iptali veya siyasi parti kapatma davalarında karar verilebilmesi için toplantıya katılan üyelerin üçte iki (2/3) oy çokluğu şarttır.",
      ipucu: "Sıradan bir kanun iptali için salt çoğunluk yeterliyken, parti kapatma ve anayasa değişikliği için 2/3 (nitelikli çoğunluk) aranır.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-066",
      kategori: "Yargı",
      etiketler: ["Süreler ve Nisaplar"],
      baslik: "Madde 150 ve 151 - İptal Davası Açma",
      metin: "İptal davasını Cumhurbaşkanı, en çok üyeye sahip ilk 2 parti grubu ve üye tamsayısının 1/5'i açabilir. Dava açma süresi yayımdan itibaren 60 gündür.",
      ipucu: "Doğrudan iptal (soyut norm) açma yetkisi sınırlıdır ve 60 günlük sıkı bir süreye tabidir.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-067",
      kategori: "Yargı",
      etiketler: ["Süreler ve Nisaplar"],
      baslik: "Madde 152 - İtiraz Yoluyla İptal Davası",
      metin: "Mahkeme, kanunu AYM'ye taşırsa AYM 5 ay içinde karar verir. AYM red kararı verirse, 10 yıl geçmeden aynı hüküm için tekrar başvurulamaz.",
      ipucu: "AYM'nin 5 ay sınırı ve 10 yıllık yasak kuralı rakamsal tuzaktır.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-068",
      kategori: "Yargı",
      etiketler: ["Temel Haklar ve İstisnalar"],
      baslik: "Madde 153 - AYM Kararları",
      metin: "AYM kararları kesindir. İptal kararları kural olarak geriye yürümez. Kararlar Resmi Gazetede yayımlanır ve herkesi bağlar.",
      ipucu: "AYM kanun koyucu (TBMM) gibi hareket ederek yeni bir uygulamaya yol açacak hüküm tesis edemez.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-069",
      kategori: "Yargı",
      etiketler: ["Özel Atamalar ve Organlar"],
      baslik: "Madde 154 - Yargıtay",
      metin: "Yargıtay adli yargı merciinin son inceleme (temyiz) mahkemesidir. Birinci Başkanını kendi üyeleri arasından Yargıtay Genel Kurulu seçer.",
      ipucu: "Cumhurbaşkanı Yargıtay'a üye seçmez.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-070",
      kategori: "Yargı",
      etiketler: ["Özel Atamalar ve Organlar"],
      baslik: "Madde 155 - Danıştay",
      metin: "İdari yargının temyiz merciidir. Üyelerinin 3/4'ünü HSK, 1/4'ünü Cumhurbaşkanı seçer.",
      ipucu: "Danıştay üyelerinin çeyreğinin (1/4) Cumhurbaşkanı tarafından atanması idare ve yargı sınavlarının favorisidir.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-071",
      kategori: "Yargı",
      etiketler: ["Özel Atamalar ve Organlar"],
      baslik: "Madde 158 - Uyuşmazlık Mahkemesi",
      metin: "Adli ve idari yargı arasındaki görev uyuşmazlıklarını çözer. Mahkemenin Başkanlığını Anayasa Mahkemesinden görevlendirilen bir üye yapar.",
      ipucu: "Uyuşmazlık mahkemesi ile AYM arasında görev uyuşmazlığı çıkarsa, AYM'nin kararı esas alınır.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-072",
      kategori: "Yargı",
      etiketler: ["Süreler ve Nisaplar", "Özel Atamalar ogar"],
      baslik: "Madde 159 - Hâkimler ve Savcılar Kurulu",
      metin: "HSK 13 üyeden oluşur ve 2 daire halinde çalışır. Başkanı Adalet Bakanıdır. Meslekten çıkarma DIŞINDAKİ kararlarına yargı yolu kapalıdır.",
      ipucu: "İlgili Bakan Yardımcısı tabii üyedir. HSK kararlarından sadece 'meslekten ihraç' denetime açıktır.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-073",
      kategori: "Yargı İstisnaları",
      etiketler: ["Temel Haklar ve İstisnalar"],
      baslik: "Madde 160 - Sayıştay",
      metin: "Sayıştay kamu idarelerini TBMM adına denetler. Kesin hükümleri hakkında idari yargı yoluna başvurulamaz.",
      ipucu: "Sayıştay'ın denetimini TBMM adına yaptığı ve kararlarına idari yargı yolunun kapalı olduğu çok kritiktir.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-074",
      kategori: "Yasama-Maliye",
      etiketler: ["Süreler ve Nisaplar"],
      baslik: "Madde 161 - Bütçenin Sunulması",
      metin: "Cumhurbaşkanı bütçe teklifini mali yılbaşından en az 75 gün önce TBMM'ye sunar. Komisyon 55 gün içinde kabul eder.",
      ipucu: "Milletvekilleri bütçe görüşmelerinde gider artırıcı veya gelir azaltıcı önerilerde bulunamazlar.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-075",
      kategori: "Ekonomi",
      etiketler: ["Temel Haklar ve İstisnalar"],
      baslik: "Madde 169 - Ormanların Korunması",
      metin: "Yanan ormanların yerinde yeni orman yetiştirilir. Ormanları yakmak veya yok etmek amacıyla işlenen suçlar genel ve özel af kapsamına alınamaz.",
      ipucu: "Orman suçlarının asla affa uğrayamayacağı Anayasa'daki tek istisnai af yasağıdır.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-076",
      kategori: "Genel Esaslar",
      etiketler: ["Temel Haklar ve İstisnalar", "Mülga ve Tarihsel Değişiklikler"],
      baslik: "Madde 174 - İnkılap Kanunlarının Korunması",
      metin: "Tevhidi Tedrisat, şapka, tekke/zaviyeler, harf inkılabı gibi kanunların Anayasaya aykırı olduğu şeklinde anlaşılamaz ve yorumlanamaz.",
      ipucu: "İnkılap kanunları anayasa yargısı denetiminden bağışık tutulmuştur.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-077",
      kategori: "Anayasa Değişikliği",
      etiketler: ["Süreler ve Nisaplar"],
      baslik: "Madde 175 - Anayasanın Değiştirilmesi",
      metin: "Değişiklik TBMM üye tamsayısının 1/3'ü (200 vekil) tarafından yazıyla teklif edilir. Kabulü için en az 3/5 (360 vekil) gizli oy şarttır.",
      ipucu: "360 ile 400 oy arası kabul edilen değişiklikler zorunlu olarak referanduma (halkoyuna) gider.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-078",
      kategori: "Genel Esaslar",
      etiketler: ["Temel Haklar ve İstisnalar"],
      baslik: "Madde 176 - Başlangıç ve Kenar Başlıklar",
      metin: "Anayasanın Başlangıç kısmı Anayasa metnine dahildir. Madde kenar başlıkları ise Anayasa metninden sayılmaz.",
      ipucu: "Kenar başlıkların sadece konuyu gösterdiği ve bağlayıcı bir anayasa metni olmadığı sorulur.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-079",
      kategori: "Yargı İstisnaları",
      etiketler: ["Temel Haklar ve İstisnalar"],
      baslik: "Karma - Yargı Yolu Kapalı İşlemler",
      metin: "Yüksek Askeri Şura'nın terfi işlemleri, HSK'nın ihraç dışı kararları, Sayıştay kesin kararları, YSK kararları, Spor Tahkim kararları.",
      ipucu: "Sınavların en sevdiği karma grup sorusudur; bu istisnalar ezbere bilinmelidir.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-080",
      kategori: "Süreler",
      etiketler: ["Süreler ve Nisaplar", "Mülga ve Tarihsel Değişiklikler"],
      baslik: "Karma - Kritik Meclis Süreleri",
      metin: "Bütçe sunumu 75 gün kala, Komisyon görüşmesi 55 gün. Yazılı soru 15 gün içinde cevaplanır. Meclis 3 ay tatil yapar.",
      ipucu: "Mülga olan kurumlara (gensoru, sözlü soru) dair süreleri artık dikkate almayın.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-081",
      kategori: "Nisaplar",
      etiketler: ["Süreler ve Nisaplar"],
      baslik: "Karma - TBMM Oylama Nisapları",
      metin: "Af ilan etmek 3/5 (360); Anayasa değişikliği kabulü 3/5 (360); Seçimlerin yenilenmesi kararı 3/5 (360); Yüce divana sevk 2/3 (400).",
      ipucu: "360 oyu ve 400 oyu gerektiren durumların birbirine karıştırılması testlerin baş belasıdır.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-082",
      kategori: "Atamalar",
      etiketler: ["Özel Atamalar ve Organlar"],
      baslik: "Karma - Kritik Atamalar",
      metin: "DDK başkan ve üyelerini, Üniversite Rektörlerini, Genelkurmay Başkanını Cumhurbaşkanı atar. Dekanları YÖK atar.",
      ipucu: "Rektör vs. Dekan atamasındaki CB ve YÖK farkına çok dikkat et.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-083",
      kategori: "Yargı Üyeleri",
      etiketler: ["Özel Atamalar ve Organlar"],
      baslik: "Karma - Yargı Üye Dağılımları",
      metin: "Danıştay: 3/4 HSK, 1/4 Cumhurbaşkanı. HSK: 13 Üye (Başkan Adalet Bakanı). YSK: 7 asıl 4 yedek (6 Yargıtay, 5 Danıştay).",
      ipucu: "Bu oranlar yüksek yargıdaki güç dağılımı test sorularının kemik parçasıdır.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-084",
      kategori: "Tarihçe ve Mülga",
      etiketler: ["Mülga ve Tarihsel Değişiklikler"],
      baslik: "Karma - 2017'de Kaldırılan Kurumlar",
      metin: "Başbakanlık, Bakanlar Kurulu, Gensoru, Güvenoyu, Tüzük, Sıkıyönetim ve Askeri Mahkemeler (Savaş hali hariç) 2017'de mülga olmuştur.",
      ipucu: "Şıklarda bu kavramları gördüğün an 'eski sistem' tuzağı olduğunu anla ve ele.",
      favoriMi: false
    },
    {
      id: "anayasa-flash-085",
      kategori: "Seçimler",
      etiketler: ["Süreler ve Nisaplar"],
      baslik: "Karma - Seçim Dönemi Kuralları",
      metin: "1 yıl kuralı: Seçim kanunu değişikliği 1 yıl uygulanmaz. Ara seçim genel seçime 1 yıl kala yapılamaz. 30 ay geçmeden ara seçime gidilemez.",
      ipucu: "Ara seçim istisnası: Boşalma %5 olursa 3 ay içinde seçime gidilir.",
      favoriMi: false
    }
  ],

  sorular: [
    {
      id: "anayasa-soru-001",
      altKategori: "Genel Esaslar",
      isYanlis: false,
      cıkmisSoru: true,
      sınavYili: "ÖSYM Arşiv",
      soru: "Türkiye Devletinin şeklinin Cumhuriyet olduğu hükmü Anayasa'nın kaçıncı maddesinde yer alır?",
      secenekler: [
        "A) 1. Madde",
        "B) 2. Madde",
        "C) 3. Madde",
        "D) 4. Madde"
      ],
      dogruIndex: 0,
      detay: "Anayasa'nın 1. maddesi Türkiye Devletinin şeklinin Cumhuriyet olduğunu düzenler."
    },
    {
      id: "anayasa-soru-002",
      altKategori: "Yasama",
      isYanlis: false,
      cıkmisSoru: false,
      sınavYili: "",
      soru: "Anayasa'ya göre yasama yetkisi kime aittir?",
      secenekler: [
        "A) Cumhurbaşkanı",
        "B) TBMM",
        "C) Anayasa Mahkemesi",
        "D) Bakanlar Kurulu"
      ],
      dogruIndex: 1,
      detay: "Yasama yetkisi Türk Milleti adına Türkiye Büyük Millet Meclisinindir."
    },
    {
      id: "anayasa-soru-003",
      altKategori: "Yargı",
      isYanlis: false,
      cıkmisSoru: true,
      sınavYili: "2022 GYS",
      soru: "Anayasa'ya göre yargı yetkisi kim tarafından kullanılır?",
      secenekler: [
        "A) Adalet Bakanlığı",
        "B) Bağımsız ve tarafsız mahkemeler",
        "C) HSK",
        "D) TBMM"
      ],
      dogruIndex: 1,
      detay: "Anayasa'nın 9. maddesine göre yargı yetkisi bağımsız ve tarafsız mahkemelerce kullanılır."
    },
    {
      id: "anayasa-soru-004",
      altKategori: "Temel Haklar",
      isYanlis: false,
      cıkmisSoru: false,
      sınavYili: "",
      soru: "Temel hak ve hürriyetler kural olarak nasıl sınırlanabilir?",
      secenekler: [
        "A) Cumhurbaşkanı kararıyla",
        "B) Yönetmelikle",
        "C) Kanunla",
        "D) Genelgeyle"
      ],
      dogruIndex: 2,
      detay: "Anayasa'nın 13. maddesine göre temel hak ve hürriyetler ancak kanunla sınırlanabilir."
    },
    {
      id: "anayasa-soru-005",
      altKategori: "Cumhurbaşkanı",
      isYanlis: false,
      cıkmisSoru: false,
      sınavYili: "",
      soru: "Yürütme yetkisi ve görevi Anayasa'ya göre kim tarafından kullanılır ve yerine getirilir?",
      secenekler: [
        "A) TBMM Başkanı",
        "B) Bakanlar Kurulu",
        "C) Cumhurbaşkanı",
        "D) Anayasa Mahkemesi"
      ],
      dogruIndex: 2,
      detay: "Anayasa'nın 8. maddesine göre yürütme yetkisi ve görevi Cumhurbaşkanı tarafından kullanılır ve yerine getirilir."
    }
  ],

  maddeler: [
    {
      id: 1,
      maddeNo: 1,
      baslik: "Madde 1 - Devletin Şekli",
      metni: "Türkiye Devleti bir Cumhuriyettir.",
      tuzaklar: {
        aciklama: "Yönetim şeklini düzenler.",
        hap: [
          "Yönetim şeklini belirler",
          "Değiştirilemez (Madde 4)",
          "Tekli devlet yapısını korur"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 1",
        degisiklikler: [
          "1982 Anayasası'nda orijinal haliyle kalmıştır",
          "Değişiklik geçirmemiştir"
        ],
        onemliNot: "Diğer niteliklerle (laik, sosyal, demokratik) karıştırılmamalıdır; sadece yönetim şeklini tanımlar."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 2,
      maddeNo: 2,
      baslik: "Madde 2 - Cumhuriyetin Nitelikleri",
      metni: "Türkiye Cumhuriyeti, toplumun huzuru, millî dayanışma ve adalet anlayışı içinde, insan haklarına saygılı, Atatürk milliyetçiliğine bağlı, başlangıçta belirtilen temel ilkelere dayanan, demokratik, lâik ve sosyal bir hukuk Devletidir.",
      tuzaklar: {
        aciklama: "Devletin temel niteliklerini düzenler.",
        hap: [
          "Devletin temel niteliklerini belirler",
          "Değiştirilemez (Madde 4)",
          "İnsan haklarına 'saygılı' ifadesi yer alır (dayalı değil)"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 2",
        degisiklikler: [
          "1995 ve 2001 yıllarında değişiklikler geçirmiştir",
          "Metin güncel haline getirilmiştir"
        ],
        onemliNot: "İnsan haklarına 'dayanan' değil, 'saygılı' ifadesi sınavda sıkça tuzak olarak kullanılır."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 3,
      maddeNo: 3,
      baslik: "Madde 3 - Devletin Bütünlüğü, Resmî Dili, Bayrağı, Millî Marşı ve Başkenti",
      metni: "Türkiye Devleti, ülkesi ve milletiyle bölünmez bir bütündür. Dili Türkçedir. Bayrağı, şekli kanununda belirtilen, beyaz ay yıldızlı al bayraktır. Millî marşı “İstiklal Marşı”dır. Başkenti Ankara’dır.",
      tuzaklar: {
        aciklama: "Devletin temel sembol ve unsurlarını düzenler.",
        hap: [
          "Ülke, millet, dil, bayrak, millî marş ve başkenti tanımlar",
          "Değiştirilemez (Madde 4)",
          "Başkent, bayrak, dil ve marş anayasal güvence altındadır"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 3",
        degisiklikler: [
          "1982 Anayasası'nda orijinal haliyle kalmıştır",
          "Değişiklik geçirmemiştir"
        ],
        onemliNot: "Bayrağın şeklinin kanununda belirtildiği hükmü yer alır; detaylı çizim anayasada yer almaz."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 4,
      maddeNo: 4,
      baslik: "Madde 4 - Değiştirilemeyecek Hükümler",
      metni: "Anayasanın 1 inci maddesindeki Devletin şeklinin Cumhuriyet olduğu hakkındaki hüküm ile, 2 nci maddesindeki Cumhuriyetin nitelikleri ve 3 üncü maddesi hükümleri değiştirilemez ve değiştirilmesi teklif edilemez.",
      tuzaklar: {
        aciklama: "İlk 3 maddeyi anayasal güvence altına alır.",
        hap: [
          "İlk 3 maddenin değiştirilmesini ve teklif edilmesini yasaklar",
          "Kendisi de değiştirilemez ve teklif edilemez maddelerdendir",
          "Ebedi hükümler getirir"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 4",
        degisiklikler: [
          "1982 Anayasası'nda orijinal haliyle kalmıştır",
          "Değişiklik geçirmemiştir"
        ],
        onemliNot: "Sadece değiştirilmesi değil, değiştirilmesinin 'teklif edilmesi' dahi yasaktır."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 5,
      maddeNo: 5,
      baslik: "Madde 5 - Devletin Temel Amaç ve Görevleri",
      metni: "Devletin temel amaç ve görevleri, Türk milletinin bağımsızlığını ve bütünlüğünü, ülkenin bölünmezliğini, Cumhuriyeti ve demokrasiyi korumak, kişilerin ve toplumun refah, huzur ve mutluluğunu sağlamak; kişinin temel hak ve hürriyetlerini, sosyal hukuk devleti ve adalet ilkeleriyle bağdaşmayacak surette sınırlayan siyasal, ekonomik ve sosyal engelleri kaldırmaya, insanın maddî ve manevî varlığının gelişmesi için gerekli şartları hazırlamaya çalışmaktır.",
      tuzaklar: {
        aciklama: "Devletin hedef ve görev alanlarını tanımlar.",
        hap: [
          "Devletin amaç ve görevlerini düzenler",
          "Engelleri 'kaldırmaya çalışmak' şeklinde ifade edilir",
          "İlk 3 madde gibi değiştirilemez maddeler arasında yer almaz"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 5",
        degisiklikler: [
          "2001 yılında 'sosyal hukuk devleti ve' ibaresi eklenmiştir"
        ],
        onemliNot: "İlk 3 maddede yer alan değiştirilemezlik kuralı bu madde için geçerli değildir."
      },
      favoriMi: false,
      cipMi: false
    },
    {
      id: 6,
      maddeNo: 6,
      baslik: "Madde 6 - Egemenlik",
      metni: "Egemenlik, kayıtsız şartsız Milletindir. Türk Milleti, egemenliğini, Anayasanın koyduğu esaslara göre, yetkili organları eliyle kullanır. Egemenliğin kullanılması, hiçbir surette hiçbir kişiye, zümreye veya sınıfa bırakılamaz. Hiçbir kimse veya organ kaynağını Anayasadan almayan bir Devlet yetkisi kullanamaz.",
      tuzaklar: {
        aciklama: "Egemenliğin kaynağı ve kullanım usulünü düzenler.",
        hap: [
          "Egemenliğin kaynağını ve kullanım biçimini belirler",
          "Yetki devrini ve yetkisiz güç kullanımını yasaklar",
          "Kaynağını Anayasa'dan almayan yetki kullanımını engeller"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 6",
        degisiklikler: [
          "Orijinal hali korunmuştur",
          "Önemli bir metin değişikliği geçirmemiştir"
        ],
        onemliNot: "Egemenliğin sahibi millettir; kullanım anayasal organlar eliyle olur."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 7,
      maddeNo: 7,
      baslik: "Madde 7 - Yasama Yetkisi",
      metni: "Yasama yetkisi Türk Milleti adına Türkiye Büyük Millet Meclisinindir. Bu yetki devredilemez.",
      tuzaklar: {
        aciklama: "Yasama yetkisinin sahibini ve devredilemezliğini düzenler.",
        hap: [
          "Yasama yetkisinin kime ait olduğunu ve devredilemeyeceğini düzenler",
          "Yetkinin millet adına TBMM tarafından kullanılmasını sağlar"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 7",
        degisiklikler: [
          "2017 değişiklikleri kapsamında sistem uyum düzenlemeleri yapılmıştır"
        ],
        onemliNot: "Yasama yetkisinin devredilemezliği temel ilkedir."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 8,
      maddeNo: 8,
      baslik: "Madde 8 - Yürütme Yetkisi ve Görevi",
      metni: "Yürütme yetkisi ve görevi, Cumhurbaşkanı tarafından, Anayasaya ve kanunlara uygun olarak kullanılır ve yerine getirilir.",
      tuzaklar: {
        aciklama: "Yürütmenin kim tarafından kullanılacağını düzenler.",
        hap: [
          "Yürütme yetkisinin Cumhurbaşkanına ait olduğunu belirtir",
          "Anayasa ve kanunlara bağlılık şartı getirir"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 8",
        degisiklikler: [
          "2017 değişikliğiyle Bakanlar Kurulu kaldırılmıştır",
          "Yürütme yetkisi doğrudan Cumhurbaşkanına verilmiştir"
        ],
        onemliNot: "Eski sistemdeki ikili yürütme yapısı kaldırılmıştır."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 9,
      maddeNo: 9,
      baslik: "Madde 9 - Yargı Yetkisi",
      metni: "Yargı yetkisi, Türk Milleti adına bağımsız ve tarafsız mahkemelerce kullanılır.",
      tuzaklar: {
        aciklama: "Yargı yetkisinin niteliğini düzenler.",
        hap: [
          "Yargı yetkisinin kime ait olduğunu ve niteliğini belirler",
          "Mahkemelerin bağımsız ve tarafsız olması gerektiğini hükme bağlar"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 9",
        degisiklikler: [
          "2017 değişikliğiyle metne 'tarafsız' ibaresi eklenmiştir"
        ],
        onemliNot: "'Bağımsız' yanında 'tarafsız' ibaresi de birlikte sorulur."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 10,
      maddeNo: 10,
      baslik: "Madde 10 - Kanun Önünde Eşitlik",
      metni: "Herkes, dil, ırk, renk, cinsiyet, siyasi düşünce, felsefi inanç, din, mezhep ve benzeri sebeplerle ayırım gözetilmeksizin kanun önünde eşittir. Kadınlar ve erkekler eşit haklara sahiptir. Devlet, bu eşitliğin yaşama geçmesini sağlamakla yükümlüdür. Bu maksatla alınacak tedbirler eşitlik ilkesine aykırı olarak yorumlanamaz. Çocuklar, yaşlılar, özürlüler, harp ve vazife şehitlerinin dul ve yetimleri ile malul ve gaziler için alınacak tedbirler eşitlik ilkesi aykırı sayılmaz. Hiçbir kişiye, aileye, zümreye veya sınıfa imtiyaz tanınamaz. Devlet organları ve idare makamları bütün işlemlerinde kanun önünde eşitlik ilkesine uygun olarak hareket etmek zorundadırlar.",
      tuzaklar: {
        aciklama: "Kanun önünde eşitlik ilkesini düzenler.",
        hap: [
          "Kanun önünde eşitlik ilkesini düzenler",
          "Pozitif ayrımcılık anayasal güvenceye alınmıştır",
          "İmtiyaz tanınmasını yasaklar"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 10",
        degisiklikler: [
          "2004 yılında kadın-erkek eşitliği vurgusu güçlendirilmiştir",
          "2010 yılında pozitif ayrımcılık hükümleri eklenmiştir"
        ],
        onemliNot: "Pozitif ayrımcılık tedbirleri eşitlik ilkesine aykırı sayılmaz."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 11,
      maddeNo: 11,
      baslik: "Madde 11 - Anayasanın Üstünlüğü",
      metni: "Anayasa hükümleri, yasama, yürütme ve yargı organlarını, idare makamlarını ve diğer kuruluş ve kişileri bağlayan temel hukuk kurallarıdır. Kanunlar Anayasaya aykırı olamaz.",
      tuzaklar: {
        aciklama: "Anayasanın bağlayıcılığını ve üstünlüğünü düzenler. Normlar hiyerarşisinin temelini oluşturur.",
        hap: [
          "Anayasanın bağlayıcılığını ve üstünlüğünü düzenler",
          "Kanunların Anayasaya aykırı olamayacağını kesinleştirir",
          "Tüm devlet organlarını ve kişileri bağlar"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 11",
        degisiklikler: [
          "1982 Anayasası'nda orijinal haliyle korunmuştur",
          "Değişiklik geçirmemiştir"
        ],
        onemliNot: "Anayasanın bağlayıcılığı sadece kamu kurumlarını değil, diğer kuruluş ve kişileri de kapsar."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 12,
      maddeNo: 12,
      baslik: "Madde 12 - Temel Hak ve Hürriyetler",
      metni: "Herkes, kişiliğine bağlı, dokunulmaz, devredilmez, vazgeçilmez temel hak ve hürriyetlere sahiptir. Temel hak ve hürriyetler, kişinin topluma, ailesine ve diğer kişilere karşı ödev ve sorumluluklarını da ihtiva eder.",
      tuzaklar: {
        aciklama: "Temel hak ve hürriyetlerin niteliklerini tanımlar.",
        hap: [
          "Temel hak ve hürriyetlerin niteliklerini sıralar",
          "Hakların yanında ödev ve sorumlulukları da kapsadığını belirtir",
          "Haklar mutlak sınırsız değildir"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 12",
        degisiklikler: [
          "1982 Anayasası'nda orijinal haliyle kalmıştır",
          "Değişiklik geçirmemiştir"
        ],
        onemliNot: "Hakların mutlak sınırsız olmadığı, ödev ve sorumluluklarla birlikte bir bütün oluşturduğu vurgulanır."
      },
      favoriMi: false,
      cipMi: false
    },
    {
      id: 13,
      maddeNo: 13,
      baslik: "Madde 13 - Hak ve Hürriyetlerin Sınırlanması",
      metni: "Temel hak ve hürriyetler, özlerine dokunulmaksızın yalnızca Anayasanın ilgili maddelerinde belirtilen sebeplere bağlı olarak ve ancak kanunla sınırlanabilir. Bu sınırlamalar, Anayasanın sözüne ve ruhuna, demokratik toplum düzeninin ve lâik Cumhuriyetin gereklerine ve ölçülülük ilkesine aykırı olamaz.",
      tuzaklar: {
        aciklama: "Hakların sınırlama rejimini belirler.",
        hap: [
          "Hakların sınırlama rejimini belirler",
          "Ancak kanunla sınırlanabilir",
          "Ölçülülük ilkesi anayasal güvencedir"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 13",
        degisiklikler: [
          "2001 yılında yapılan kapsamlı değişiklikle demokratik toplum düzeninin gerekleri metne eklenmiştir",
          "Ölçülülük ilkesi 2001 değişikliğiyle eklenmiştir"
        ],
        onemliNot: "Hakların sınırlanmasında mutlaka kanun şartı aranır."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 14,
      maddeNo: 14,
      baslik: "Madde 14 - Hak ve Hürriyetlerin Kötüye Kullanılması Yasağı",
      metni: "Anayasada yer alan hak ve hürriyetlerden hiçbiri, Devletin ülkesi ve milletiyle bölünmez bütünlüğünü bozmayı ve insan haklarına dayanan demokratik ve lâik Cumhuriyeti ortadan kaldırmayı amaçlayan faaliyetler biçiminde kullanılamaz. Anayasa hükümlerinden hiçbiri, Devlete veya kişilere, Anayasayla tanınan temel hak ve hürriyetlerin yok edilmesini veya Anayasada belirtilenden daha geniş şekilde sınırlandırılmasını amaçlayan bir faaliyette bulunmayı mümkün kılacak şekilde yorumlanamaz. Bu hükümlere aykırı faaliyette bulunanlar hakkında uygulanacak müeyyideler, kanunla düzenlenir.",
      tuzaklar: {
        aciklama: "Hak ve hürriyetlerin kötüye kullanılması yasağını düzenler.",
        hap: [
          "Hak ve hürriyetlerin kötüye kullanılması yasağını düzenler",
          "Demokratik düzeni yıkma amaçlı faaliyetler korunmaz",
          "Temel hakların kötüye kullanılması yasaktır"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 14",
        degisiklikler: [
          "2001 yılında yapılan Anayasa değişikliğiyle metin yeniden düzenlenmiştir",
          "Hak kısıtlamalarının çerçevesi netleştirilmiştir"
        ],
        onemliNot: "Hakların kötüye kullanılması yasağı, anayasal düzeni korumak adına temel hakların sınırını çizer."
      },
      favoriMi: false,
      cipMi: false
    },
    {
      id: 15,
      maddeNo: 15,
      baslik: "Madde 15 - Olağanüstü Hallerde Hak ve Hürriyetlerin Durdurulması",
      metni: "Savaş, seferberlik veya olağanüstü hallerde, milletlerarası hukuktan doğan yükümlülükler ihlal edilmemek kaydıyla, durumun gerektirdiği ölçüde temel hak ve hürriyetlerin kullanılması kısmen veya tamamen durdurulabilir veya bunlar için Anayasada öngörülen güvencelere aykırı tedbirler alınabilir. Birinci fıkrada belirlenen durumlarda da, savaş hukukuna uygun fiiller sonucu meydana gelen ölümler dışında, kişinin yaşama hakkına, maddi ve manevi varlığının bütünlüğüne dokunulamaz; kimse din, vicdan, düşünce ve kanaatlerini açıklamaya zorlanamaz ve bunlardan dolayı suçlanamaz; suç ve cezalar geçmişe yürütülemez; suçluluğu mahkeme kararı ile saptanıncaya kadar kimse suçlu sayılamaz.",
      tuzaklar: {
        aciklama: "Olağanüstü hallerde hakların durdurulması rejimini düzenler.",
        hap: [
          "OHAL'de hakların durdurulması rejimini düzenler",
          "Dokunulmaz çekirdek hakları güvenceye alır",
          "Suçların geçmişe yürümezliği korunur"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 15",
        degisiklikler: [
          "2004 yılında ölüm cezalarına ilişkin ifade metinden çıkarılmıştır",
          "2017 yılında sıkıyönetim ibaresi metinden çıkarılmıştır"
        ],
        onemliNot: "Yaşama hakkı, suçta ve cezada geçmişe yürümezlik gibi bazı haklar OHAL'de bile dokunulamaz çekirdek alandadır."
      },
      favoriMi: false,
      cipMi: true
    },
{
      id: 16,
      maddeNo: 16,
      baslik: "Madde 16 - Yabancıların Durumu",
      metni: "Temel hak ve hürriyetler, yabancılar için, milletlerarası hukuka uygun olarak kanunla sınırlanabilir.",
      tuzaklar: {
        aciklama: "Yabancıların temel hak ve hürriyetlerinin sınırlandırılmasını düzenler.",
        hap: [
          "Milletlerarası hukuka uygunluk şartı aranır",
          "Sınırlama mutlaka kanunla yapılmalıdır"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 16",
        degisiklikler: [
          "Orijinal haliyle korunmuştur, değişiklik geçirmemiştir"
        ],
        onemliNot: "Yabancıların hakları sınırlandırılırken kanun yetkisi tek başına yetmez, milletlerarası hukuka da uygun olmalıdır."
      },
      favoriMi: false,
      cipMi: false
    },
{
      id: 17,
      maddeNo: 17,
      baslik: "Madde 17 - Kişinin Dokunulmazlığı, Maddî ve Manevî Varlığı",
      metni: "Herkes, yaşama, maddi ve manevi varlığını koruma ve geliştirme hakkına sahiptir. Tıbbi zorunluluklar ve kanunda yazılı haller dışında, kişinin vücut bütünlüğüne dokunulamaz; rızası olmadan bilimsel ve tıbbi deneylere tabi tutulamaz. Kimseye işkence ve eziyet yapılamaz; kimse insan haysiyetiyle bağdaşmayan bir cezaya veya muameleye tabi tutulamaz. Meşru müdafaa hali, yakalama ve tutuklama kararlarının yerine getirilmesi, bir tutuklu veya hükümlünün kaçmasının önlenmesi, bir ayaklanma veya isyanın bastırılması veya olağanüstü hallerde yetkili merciin verdiği emirlerin uygulanması sırasında silah kullanılmasına kanunun cevaz verdiği zorunlu durumlarda meydana gelen öldürme fiilleri, birinci fıkra hükmü dışındadır.",
      tuzaklar: {
        aciklama: "Kişinin dokunulmazlığı ile maddi ve manevi varlığını koruma hakkını düzenler.",
        hap: [
          "Tıbbi zorunluluk ve kanun dışında vücut bütünlüğüne dokunulamaz",
          "İşkence, eziyet ve insan haysiyetiyle bağdaşmayan muamele yasaktır",
          "Meşru müdafaa ve kanuni yetkiyle silah kullanımı yaşama hakkı istisnasıdır"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 17",
        degisiklikler: [
          "2001 ve 2004 yıllarında yapılan değişikliklerle ölüm cezası (idam) sistemden tamamen kaldırılmıştır"
        ],
        onemliNot: "Yaşama hakkının istisnaları (meşru müdafaa, kanuni yetkiyle silah kullanımı vb.) sınırlı olarak metinde sayılmıştır."
      },
      favoriMi: false,
      cipMi: true
    },
{
      id: 18,
      maddeNo: 18,
      baslik: "Madde 18 - Zorla Çalıştırma Yasağı",
      metni: "Hiç kimse zorla çalıştırılamaz. Angarya yasaktır. Şekil ve şartları kanunla düzenlenmek üzere hükümlülük veya tutukluluk süreleri içindeki çalıştırmalar; olağanüstü hallerde vatandaşlardan istenecek hizmetler; ülke ihtiyaçlarının zorunlu kıldığı alanlarda öngörülen vatandaşlık ödevi niteliğindeki beden ve fikir çalışmaları, zorla çalıştırma sayılmaz.",
      tuzaklar: {
        aciklama: "Zorla çalıştırma yasağını ve istisnalarını düzenler.",
        hap: [
          "Zorla çalıştırma ve angarya kesin olarak yasaktır",
          "Hükümlülük/tutukluluk çalışmaları, OHAL hizmetleri ve vatandaşlık ödevleri istisnadır",
          "İstisnaların şekil ve şartları mutlaka kanunla düzenlenir"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 18",
        degisiklikler: [
          "1982 Anayasası'nda orijinal haliyle korunmuştur",
          "Önemli bir değişiklik geçirmemiştir"
        ],
        onemliNot: "İstisnalar zorla çalıştırma sayılmaz ancak bunların kapsamı kanunla sınırlandırılmıştır."
      },
      favoriMi: false,
      cipMi: false
    },
{
      id: 19,
      maddeNo: 19,
      baslik: "Madde 19 - Kişi Hürriyeti ve Güvenliği",
      metni: "Herkes, kişi hürriyeti ve güvenliğine sahiptir. Şekil ve şartları kanunda gösterilen: Mahkemelerce verilmiş hürriyeti kısıtlayıcı cezaların ve güvenlik tedbirlerinin yerine getirilmesi; bir mahkeme kararının veya kanunda öngörülen bir yükümlülüğün gereği olarak ilgilinin yakalanması veya tutuklanması; bir küçüğün gözetim altında ıslahı veya yetkili merci önüne çıkarılması için verilen bir kararın yerine getirilmesi; toplum için tehlike teşkil eden bir akıl hastası, uyuşturucu madde veya alkol tutkunu, bir serseri veya hastalık yayabilecek bir kişinin bir müessesede tedavi, eğitim veya ıslahı için kanunda belirtilen esaslara uygun olarak alınan tedbirin yerine getirilmesi; usulüne aykırı şekilde ülkeye girmek isteyen veya giren, ya da hakkında sınır dışı etme yahut geri verme kararı verilen bir kişinin yakalanması veya tutuklanması; halleri dışında kimse hürriyetinden yoksun bırakılamaz. Suçluluğu hakkında kuvvetli belirti bulunan kişiler, ancak kaçmalarını, delillerin yokedilmesini veya değiştirilmesini önlemek maksadıyla veya bunlar gibi tutuklamayı zorunlu kılan ve kanunda gösterilen diğer hallerde hakim kararıyla tutuklanabilir. Hakim kararı olmadan yakalama, ancak suçüstü halinde veya gecikmesinde sakınca bulunan hallerde yapılabilir; bunun şartlarını kanun gösterir. Yakalanan veya tutuklanan kişilere, yakalama veya tutuklama sebepleri ve haklarındaki iddialar herhalde yazılı ve bunun hemen mümkün olmaması halinde sözlü olarak derhal, toplu suçlarda en geç hakim huzuruna çıkarılıncaya kadar bildirilir. Yakalanan veya tutuklanan kişi, tutulma yerine en yakın mahkemeye gönderilmesi için gerekli süre hariç en geç kırksekiz saat ve toplu olarak işlenen suçlarda en çok dört gün içinde hâkim önüne çıkarılır. Kimse, bu süreler geçtikten sonra hakim kararı olmaksızın hürriyetinden yoksun bırakılamaz. Bu süreler olağanüstü hal ve savaş hallerinde uzatılabilir. Kişinin yakalandığı veya tutuklandığı, yakınlarına derhal bildirilir. Tutuklanan kişilerin, makul süre içinde yargılanmayı ve soruşturma veya kovuşturma sırasında serbest bırakılmayı isteme hakları vardır. Serbest bırakılma ilgilinin yargılama süresince duruşmada hazır bulunmasını veya hükmün yerine getirilmesini sağlamak için bir güvenceye bağlanabilir. Her ne sebeple olursa olsun, hürriyeti kısıtlanan kişi, kısa sürede durumu hakkında karar verilmesini ve bu kısıtlamanın kanuna aykırılığı halinde hemen serbest bırakılmasını sağlamak amacıyla yetkili bir yargı merciine başvurma hakkına sahiptir. Bu esaslar dışında bir işleme tâbi tutulan kişilerin uğradıkları zarar, tazminat hukukunun genel prensiplerine göre, Devletçe ödenir.",
      tuzaklar: {
        aciklama: "Kişi hürriyeti ve güvenliği hakkını, istisnalarını ve yakalama/tutuklama güvencelerini düzenler.",
        hap: [
          "Bireysel hürriyetin kısıtlanması ancak kanunda sayılan istisnai hallerde mümkündür",
          "Kural olarak tutuklama için hakim kararı şarttır (suçüstü veya gecikmesinde sakınca halleri hariç)",
          "Gözaltı süresi normal suçlarda en geç 48 saat, toplu suçlarda en çok 4 gündür",
          "Haksız hürriyetten yoksun bırakılma durumunda zarar Devletçe tazmin edilir"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 19",
        degisiklikler: [
          "2001 yılında yapılan Anayasa değişikliğiyle gözaltı/hakim önüne çıkış süreleri kısaltılmış, yakınlara bildirim ve tazminat hakkı anayasal güvenceye kavuşturulmuştur"
        ],
        onemliNot: "Gözaltı sürelerine (48 saat ve 4 gün) mahkemeye gönderilme için gerekli süre dahil değildir."
      },
      favoriMi: false,
      cipMi: true
    },
{
      id: 20,
      maddeNo: 20,
      baslik: "Madde 20 - Özel Hayatın Gizliliği",
      metni: "Herkes, özel hayatına ve aile hayatına saygı gösterilmesini isteme hakkına sahiptir. Özel hayatın ve aile hayatının gizliliğine dokunulamaz. Millî güvenlik, kamu düzeni, suç işlenmesinin önlenmesi, genel sağlık ve genel ahlâkın korunması veya başkalarının hak ve özgürlüklerinin korunması sebeplerinden biri veya birkaçına bağlı olarak, usulüne göre verilmiş hâkim kararı olmadıkça; yine bu sebeplere bağlı olarak gecikmesinde sakınca bulunan hallerde de kanunla yetkili kılınmış merciin yazılı emri bulunmadıkça; kimsenin üstü, özel kâğıtları ve eşyası aranamaz ve bunlara el konulamaz. Yetkili merciin kararı yirmidört saat içinde görevli hâkimin onayına sunulur. Hâkim, kararını el koymadan itibaren kırksekiz saat içinde açıklar; aksi halde, el koyma kendiliğinden kalkar. Herkes, kendisiyle ilgili kişisel verilerin korunmasını isteme hakkına sahiptir. Bu hak; kişinin kendisiyle ilgili kişisel veriler hakkında bilgilendirilme, bu verilere erişme, bunların düzeltilmesini veya silinmesini talep etme ve amaçları doğrultusunda kullanılıp kullanılmadığını öğrenmeyi de kapsar. Kişisel veriler, ancak kanunda öngörülen hallerde veya kişinin açık rızasıyla işlenebilir. Kişisel verilerin korunmasına ilişkin esas ve usuller kanunla düzenlenir.",
      tuzaklar: {
        aciklama: "Özel hayatın gizliliğini ve kişisel verilerin korunması hakkını düzenler.",
        hap: [
          "Üst, özel kâğıt ve eşya araması için hakim kararı veya gecikmesinde sakınca bulunan hallerde yetkili merciin yazılı emri şarttır",
          "Yazılı emir 24 saat içinde hakimin onayına sunulur, hakim 48 saat içinde açıklamazsa el koyma kalkar",
          "Kişisel verilerin korunması, silinmesi ve düzeltilmesi anayasal güvenceye alınmıştır"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 20",
        degisiklikler: [
          "2001 yılında arama ve el koyma şartları yeniden düzenlenmiştir",
          "2010 yılında kişisel verilerin korunmasını isteme hakkı açıkça eklenmiştir"
        ],
        onemliNot: "Kişisel verilerin korunması hakkı ve bu verilere erişim/silme talebi 2010 Anayasa değişikliğiyle getirilmiştir."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 21,
      maddeNo: 21,
      baslik: "Madde 21 - Konut Dokunulmazlığı",
      metni: "Kimsenin konutuna dokunulamaz. Millî güvenlik, kamu düzeni, suç işlenmesinin önlenmesi, genel sağlık ve genel ahlâkın korunması veya başkalarının hak ve özgürlüklerinin korunması sebeplerinden biri veya birkaçına bağlı olarak usulüne göre verilmiş hâkim kararı olmadıkça; yine bu sebeplere bağlı olarak gecikmesinde sakınca bulunan hallerde de kanunla yetkili kılınmış merciin yazılı emri bulunmadıkça; kimsenin konutuna girilemez, arama yapılamaz ve buradaki eşyaya el konulamaz. Yetkili merciin kararı yirmidört saat içinde görevli hâkimin onayına sunulur. Hâkim, kararını el koymadan itibaren kırksekiz saat içinde açıklar; aksi halde, el koyma kendiliğinden kalkar.",
      tuzaklar: {
        aciklama: "Konut dokunulmazlığı hakkını ve konuta girme şartlarını düzenler.",
        hap: [
          "Konuta girme, arama yapma ve eşyaya el koyma kural olarak hakim kararına bağlıdır",
          "Gecikmesinde sakınca bulunan hallerde yetkili merciin yazılı emri yeterlidir",
          "Yazılı emir 24 saatte hakime sunulur, hakim 48 saatte onaylamazsa el koyma kendiliğinden kalkar"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 21",
        degisiklikler: [
          "2001 yılında yapılan kapsamlı değişiklikle güvenceler artırılmış ve süreler netleştirilmiştir"
        ],
        onemliNot: "Madde 20 (özel hayat) ile Madde 21 (konut) arama ve onay süreleri (24 saat - 48 saat) bakımından paralel düzenlenmiştir."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 22,
      maddeNo: 22,
      baslik: "Madde 22 - Haberleşme Hürriyeti",
      metni: "Herkes, haberleşme hürriyetine sahiptir. Haberleşmenin gizliliği esastır. Millî güvenlik, kamu düzeni, suç işlenmesinin önlenmesi, genel sağlık ve genel ahlâkın korunması veya başkalarının hak ve özgürlüklerinin korunması sebeplerinden biri veya birkaçına bağlı olarak usulüne göre verilmiş hâkim kararı olmadıkça; yine bu sebeplere bağlı olarak gecikmesinde sakınca bulunan hallerde de kanunla yetkili kılınmış merciin yazılı emri bulunmadıkça; haberleşme engellenemez ve gizliliğine dokunulamaz. Yetkili merciin kararı yirmidört saat içinde görevli hâkimin onayına sunulur. Hâkim, kararını kırksekiz saat içinde açıklar; aksi halde, karar kendiliğinden kalkar. İstisnaların uygulanacağı kamu kurum ve kuruluşları kanunda belirtilir.",
      tuzaklar: {
        aciklama: "Haberleşme hürriyetini ve gizliliğini koruma altına alır.",
        hap: [
          "Haberleşmenin gizliliği esastır",
          "Haberleşmenin engellenmesi veya gizliliğine dokunulması ancak hakim kararı veya yetkili merciin yazılı emriyle mümkündür",
          "Yazılı emir 24 saatte hakime sunulur, 48 saatte onaylanmazsa karar kendiliğinden kalkar"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 22",
        degisiklikler: [
          "2001 yılında yapılan değişiklikle haberleşme hürriyetine getirilen sınırlama rejimine hakim onayı mekanizması eklenmiştir"
        ],
        onemliNot: "Haberleşme hürriyetinin istisnalarının uygulanacağı kamu kurum ve kuruluşları ayrıca kanunla belirtilir."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 23,
      maddeNo: 23,
      baslik: "Madde 23 - Yerleşme ve Seyahat Hürriyeti",
      metni: "Herkes, yerleşme ve seyahat hürriyetine sahiptir. Yerleşme hürriyeti, suç işlenmesini önlemek, sosyal ve ekonomik gelişmeyi sağlamak, sağlıklı ve düzenli kentleşmeyi gerçekleştirmek ve kamu mallarını korumak; seyahat hürriyeti, suç soruşturma ve kovuşturması sebebiyle ve suç işlenmesini önlemek; amaçlarıyla kanunla sınırlanabilir. Vatandaşın yurt dışına çıkma hürriyeti, ancak suç soruşturması veya kovuşturması sebebiyle hâkim kararına bağlı olarak sınırlanabilir. Vatandaş sınır dışı edilemez ve yurda girme hakkından yoksun bırakılamaz.",
      tuzaklar: {
        aciklama: "Yerleşme, seyahat ve yurt dışına çıkış hürriyetlerini düzenler.",
        hap: [
          "Vatandaş kesinlikle sınır dışı edilemez ve yurda girme hakkından yoksun bırakılamaz",
          "Yurt dışına çıkma hürriyeti ancak suç soruşturma/kovuşturması sebebiyle hakim kararıyla sınırlanabilir",
          "Yerleşme ve seyahat hürriyetleri kanunla sınırlanabilir"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 23",
        degisiklikler: [
          "2010 yılında yurt dışına çıkma hürriyetinin sınırlanması sadece 'hâkim kararına' bağlanarak güvence güçlendirilmiştir"
        ],
        onemliNot: "Vatandaşın yurda girme hakkı ve sınır dışı edilememe yasağı mutlak haklardandır."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 24,
      maddeNo: 24,
      baslik: "Madde 24 - Din ve Vicdan Hürriyeti",
      metni: "Herkes, vicdan, dini inanç ve kanaat hürriyetine sahiptir. 14 üncü madde hükümlerine aykırı olmamak şartıyla ibadet, dini ayin ve törenler serbesttir. Kimse, ibadete, dini ayin ve törenlere katılmaya, dini inanç ve kanaatlerini açıklamaya zorlanamaz; dini inanç ve kanaatlerinden dolayı kınanamaz ve suçlanamaz. Din ve ahlak eğitim ve öğretimi Devletin gözetim ve denetimi altında yapılır. Din kültürü ve ahlak öğretimi ilk ve ortaöğretim kurumlarında okutulan zorunlu dersler arasında yer alır. Bunun dışındaki din eğitim ve öğretimi ancak, kişilerin kendi isteğine, küçüklerin de kanuni temsilcisinin talebine bağlıdır. Kimse, Devletin sosyal, ekonomik, siyasi veya hukuki temel düzenini kısmen de olsa, din kurallarına dayandırma veya siyasi veya kişisel çıkar yahut nüfuz sağlama amacıyla her ne suretle olursa olsun dini veya din duygularını yahut dince kutsal sayılan şeyleri istismar edemez ve kötüye kullanamaz.",
      tuzaklar: {
        aciklama: "Din, vicdan, ibadet hürriyetini ve din eğitimi esaslarını düzenler.",
        hap: [
          "Kimse dini inançlarını açıklamaya veya ibadete zorlanamaz, kınanamaz",
          "Din kültürü ve ahlak öğretimi ilk ve ortaöğretimde zorunlu dersler arasındadır",
          "Dinin siyasi veya kişisel çıkar için istismar edilmesi yasaktır"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 24",
        degisiklikler: [
          "Orijinal hali korunmuş, metinsel olarak temel ilkeler muhafaza edilmiştir"
        ],
        onemliNot: "Zorunlu ders olan Din Kültürü ve Ahlak Öğretimi ile kişiye bağlı seçmeli din eğitimi birbirinden ayrılmıştır."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 25,
      maddeNo: 25,
      baslik: "Madde 25 - Düşünce ve Kanaat Hürriyeti",
      metni: "Herkes, düşünce ve kanaat hürriyetine sahiptir. Her ne sebep ve amaçla olursa olsun kimse, düşünce ve kanaatlerini açıklamaya zorlanamaz; düşünce kanaatleri sebebiyle kınanamaz ve suçlanamaz.",
      tuzaklar: {
        aciklama: "Düşünce ve kanaat hürriyetinin mutlak korumasını düzenler.",
        hap: [
          "Kimse düşünce ve kanaatlerini açıklamaya zorlanamaz",
          "Düşünce ve kanaatler nedeniyle kimse kınanamaz ve suçlanamaz",
          "İç dünya (kanaat) mutlak koruma altındadır"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 25",
        degisiklikler: [
          "1982 Anayasası'nda orijinal haliyle korunmuştur"
        ],
        onemliNot: "Düşünceyi 'açıklama' (Madde 26) sınırlanabilirken, düşünceye sahip olma ve kanaat hürriyeti (Madde 25) mutlak ve sınırlanamazdır."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 26,
      maddeNo: 26,
      baslik: "Madde 26 - Düşünceyi Açıklama ve Yayma Hürriyeti",
      metni: "Herkes, düşünce ve kanaatlerini söz, yazı, resim veya başka yollarla tek başına veya toplu olarak açıklama ve yayma hakkına sahiptir. Bu hürriyet Resmî makamların müdahalesi olmaksızın haber veya fikir almak ya da vermek serbestliğini de kapsar. Bu fıkra hükmü, radyo, televizyon, sinema veya benzeri yollarla yapılan yayımların izin sistemine bağlanmasına engel değildir. Bu hürriyetlerin kullanılması, millî güvenlik, kamu düzeni, kamu güvenliği, Cumhuriyetin temel nitelikleri ve Devletin ülkesi ve milleti ile bölünmez bütünlüğünün korunması, suçların önlenmesi, suçluların cezalandırılması, Devlet sırrı olarak usulünce belirtilmiş bilgilerin açıklanmaması, başkalarının şöhret veya haklarının, özel ve aile hayatlarının yahut kanunun öngördüğü meslek sırlarının korunması veya yargılama görevinin gereğine uygun olarak yerine getirilmesi amaçlarıyla sınırlanabilir. Haber ve düşünceleri yayma araçlarının kullanılmasına ilişkin düzenleyici hükümler, bunların yayımını engellememek kaydıyla, düşünceyi açıklama ve yayma hürriyetinin sınırlanması sayılmaz. Düşünceyi açıklama ve yayma hürriyetinin kullanılmasında uygulanacak şekil, şart ve usuller kanunla düzenlenir.",
      tuzaklar: {
        aciklama: "Düşünceyi açıklama ve yayma hürriyetini ve bu hakkın sınırlama sebeplerini düzenler.",
        hap: [
          "Düşünceyi açıklama ve yayma hakkı anayasal koruma altındadır ancak milli güvenlik, kamu düzeni gibi sebeplerle sınırlanabilir",
          "Yayınların izin sistemine bağlanması yasaklama sayılmaz",
          "Haber veya fikir almak/vermek serbestliğini kapsar"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 26",
        degisiklikler: [
          "2001 yılında yapılan değişikliklerle sınırlama sebepleri daraltılmış ve demokratik toplum düzenine uyumlu hale getirilmiştir"
        ],
        onemliNot: "Düşünceye sahip olmak (Madde 25) sınırlanamazken, düşünceyi açıklamak ve yaymak (Madde 26) kanunla öngörülen sebeplerle sınırlanabilir."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 27,
      maddeNo: 27,
      baslik: "Madde 27 - Bilim ve Sanat Hürriyeti",
      metni: "Herkes, bilim ve sanatı serbestçe öğrenme ve öğretme, açıklama, yayma ve bu alanlarda her türlü araştırma hakkına sahiptir. Yayma hakkı, Anayasanın 1 inci, 2 nci ve 3 üncü maddeleri hükümlerinin değiştirilmesini sağlamak amacıyla kullanılamaz. Bu madde hükmü yabancı yayınların ülkeye girmesi ve dağıtımının kanunla düzenlenmesine engel değildir.",
      tuzaklar: {
        aciklama: "Bilim ve sanat hürriyetini ve bu hakkın sınırlarını düzenler.",
        hap: [
          "Bilim ve sanatı öğrenme, öğretme ve araştırma serbesttir",
          "Yayma hakkı ilk 3 maddenin değiştirilmesini sağlamak amacıyla kullanılamaz",
          "Yabancı yayınların ülkeye girişi kanunla düzenlenebilir"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 27",
        degisiklikler: [
          "1982 Anayasası'nda orijinal haliyle korunmuştur"
        ],
        onemliNot: "Bilim ve sanat yayma hakkı, Anayasanın ilk 3 maddesindeki değiştirilemez hükümlere aykırı bir amaçla kullanılamaz."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 28,
      maddeNo: 28,
      baslik: "Madde 28 - Basın Hürriyeti",
      metni: "Basın hürdür, sansür edilemez. Basımevi kurmak izin alma ve mali teminat yatırma şartına bağlanamaz. Devlet, basın ve haber alma hürriyetlerini sağlayacak tedbirleri alır. Basın hürriyetinin sınırlanmasında, Anayasanın 26 ve 27 nci maddeleri hükümleri uygulanır. Devletin iç ve dış güvenliğini, ülkesi ve milletiyle bölünmez bütünlüğünü tehdit eden veya suç işlemeye ya da ayaklanma veya isyana teşvik eder nitelikte olan veya Devlete ait gizli bilgilere ilişkin bulunan her türlü haber veya yazıyı, yazanlar veya bastıranlar veya aynı amaçla, basanlar, başkasına verenler, bu suçlara ait kanun hükümleri uyarınca sorumlu olurlar. Tedbir yolu ile dağıtım hakim kararıyle; gecikmesinde sakınca bulunan hallerde de kanunun açıkça yetkili kıldığı merciin emriyle önlenebilir. Dağıtımı önleyen yetkili merci, bu kararını en geç yirmidört saat içinde yetkili hakime bildirir. Yetkili hakim bu kararı en geç kırksekiz saat içinde onaylamazsa, dağıtımı önleme kararı hükümsüz sayılır. Yargılama görevinin amacına uygun olarak yerine getirilmesi için, kanunla belirtilecek sınırlar içinde, hakim tarafından verilen kararlar saklı kalmak üzere, olaylar hakkında yayım yasağı konamaz. Süreli veya süresiz yayınlar, kanunun gösterdiği suçların soruşturma veya kovuşturmasına geçilmiş olması hallerinde hakim kararıyla; Devletin ülkesi ve milletiyle bölünmez bütünlüğünün, milli güvenliğin, kamu düzeninin, genel ahlakın korunması ve suçların önlenmesi bakımından gecikmesinde sakınca bulunan hallerde de kanunun açıkça yetkili kıldığı merciin emriyle toplatılabilir. Toplatma kararı veren yetkili merci, bu kararını en geç yirmidört saat içinde yetkili hakime bildirir; hakim bu kararı en geç kırksekiz saat içinde onaylamazsa, toplatma kararı hükümsüz sayılır. Süreli veya süresiz yayınların suç soruşturma veya kovuşturması sebebiyle zapt ve müsaderesinde genel hükümler uygulanır. Türkiye'de yayımlanan süreli yayınlar, Devletin ülkesi ve milletiyle bölünmez bütünlüğüne, Cumhuriyetin temel ilkelerine, milli güvenliğe ve genel ahlaka aykırı yayımlardan mahkum olma halinde, mahkeme kararıyla geçici olarak kapatılabilir. Kapatılan süreli yayının açıkça devamı niteliğini taşıyan her türlü yayın yasaktır; bunlar hakim kararıyla toplatılır.",
      tuzaklar: {
        aciklama: "Basın hürriyetini, sansür yasağını ve basım/dağıtım esaslarını düzenler.",
        hap: [
          "Basın hürdür, sansür edilemez",
          "Basımevi kurmak izin alma veya mali teminat şartına bağlanamaz",
          "Dağıtımı önleme veya toplatma kararları 24 saat içinde hakime bildirilir, 48 saatte onaylanmazsa hükümsüz kalır"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 28",
        degisiklikler: [
          "2001 yılında bazı fıkralar mülga edilmiş ve basım güvenceleri netleştirilmiştir"
        ],
        onemliNot: "Dağıtımı önleme veya toplatma kararlarında 24 saat bildirim ve 48 saat hakim onayı kuralı bu maddede de geçerlidir."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 29,
      maddeNo: 29,
      baslik: "Madde 29 - Süreli ve Süresiz Yayın Hakkı",
      metni: "Süreli veya süresiz yayın önceden izin alma ve mali teminat yatırma şartına bağlanamaz. Süreli yayın çıkarabilmek için kanunun gösterdiği bilgi ve belgelerin, kanunda belirtilen yetkili mercie verilmesi yeterlidir. Bu bilgi ve belgelerin kanuna aykırılığının tespiti halinde yetkili merci, yayının durdurulması için mahkemere başvurur. Süreli yayınların çıkarılması, yayım şartları, mali kaynakları ve gazetecilik mesleği ile ilgili esaslar kanunla düzenlenir. Kanun, haber, düşünce ve kanaatlerin serbestçe yayımlanmasını engelleyici veya zorlaştırıcı siyasal, ekonomik, mali ve teknik şartlar koyamaz. Süreli yayınlar, Devletin ve diğer kamu tüzelkişilerinin veya bunlara bağlı kurumların araç ve imkanlarından eşitlik esasına göre yararlanır.",
      tuzaklar: {
        aciklama: "Süreli ve süresiz yayın hakkı ile çıkarılma şartlarını düzenler.",
        hap: [
          "Süreli veya süresiz yayın önceden izin alma veya mali teminat şartına bağlanamaz",
          "Yayın çıkarabilmek için bilgi ve belgelerin yetkili mercie verilmesi yeterlidir",
          "Kamu kurumlarının imkanlarından süreli yayınlar eşitlik esasına göre yararlanır"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 29",
        degisiklikler: [
          "1982 Anayasası'nda temel yapısı korunarak lafzi güncellemeler yapılmıştır"
        ],
        onemliNot: "Önceden izin alma veya mali teminat yatırma şartının yasak olması en önemli sınav tuzaklarındandır."
      },
      favoriMi: false,
      cipMi: false
    },
    {
      id: 30,
      maddeNo: 30,
      baslik: "Madde 30 - Basın Araçlarının Korunması",
      metni: "Kanuna uygun şekilde basın işletmesi olarak kurulan basımevi ve eklentileri ile basın araçları, suç aleti olduğu gerekçesiyle zapt ve müsadere edilemez veya işletilmekten alıkonulamaz.",
      tuzaklar: {
        aciklama: "Basın araçlarının korunmasını ve müsadere yasağını düzenler.",
        hap: [
          "Basımevi ve basın araçları suç aleti olduğu gerekçesiyle zapt ve müsadere edilemez",
          "Basın araçları işletilmekten alıkonulamaz",
          "Basın işletmelerine yönelik doğrudan koruma getirir"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 30",
        degisiklikler: [
          "2004 yılında (5170 sayılı kanunla) yeniden düzenlenerek basın araçlarının korunması güvencesi artırılmıştır"
        ],
        onemliNot: "Basın araçlarının 'suç aleti' gerekçesiyle dahi zapt ve müsadere edilemeyeceği hükmü mutlak bir güvencedir."
      },
      favoriMi: false,
      cipMi: true
    },
{
      id: 31,
      maddeNo: 31,
      baslik: "Madde 31 - Basın Dışı Kitle Haberleşme Araçlarından Yararlanma Hakkı",
      metni: "Kişiler ve siyasi partiler, kamu tüzel kişilerinin elindeki basın dışı kitle haberleşme ve yayım araçlarından yararlanma hakkına sahiptir. Bu yararlanmanın şartları ve usulleri kanunla düzenlenir. Kanun, millî güvenlik, kamu düzeni, genel ahlâk ve sağlığın korunması sebepleri dışında, halkın bu araçlarla haber almasını, düşünce ve kanaatlere ulaşmasını ve kamuoyunun serbestçe oluşmasını engelleyici kayıtlar koyamaz.",
      tuzaklar: {
        aciklama: "Kamu tüzel kişilerinin elindeki basın dışı kitle haberleşme araçlarından yararlanma hakkını düzenler.",
        hap: [
          "Kişiler ve siyasi partiler kamuya ait basın dışı araçlardan yararlanma hakkına sahiptir",
          "Sınırlamalar ancak milli güvenlik, kamu düzeni, genel ahlak ve sağlık sebepleriyle yapılabilir",
          "Halkın haber almasını ve kamuoyunun serbestçe oluşmasını engelleyici kayıtlar konulamaz"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 31",
        degisiklikler: [
          "2001 yılında yapılan değişiklikle sınırlama sebepleri daraltılmış ve güvenceler artırılmıştır"
        ],
        onemliNot: "Kamuoyunun serbestçe oluşmasını engelleyecek nitelikte kayıtlar konulamayacağı kuralı anayasal güvence altındadır."
      },
      favoriMi: false,
      cipMi: false
    },
    {
      id: 32,
      maddeNo: 32,
      baslik: "Madde 32 - Düzeltme ve Cevap Hakkı",
      metni: "Düzeltme ve cevap hakkı, ancak kişilerin haysiyet ve şereflerine dokunulması veya kendileriyle ilgili gerçeğe aykırı yayınlar yapılması hallerinde tanınır ve kanunla düzenlenir. Düzeltme ve cevap yayımlanmazsa, yayımlanmasının gerekip gerekmediğine hakim tarafından ilgilinin müracaat tarihinden itibaren en geç yedi gün içerisinde karar verilir.",
      tuzaklar: {
        aciklama: "Düzeltme ve cevap hakkının şartlarını ve başvuru sürelerini düzenler.",
        hap: [
          "Düzeltme ve cevap hakkı haysiyet/şerefe dokunulması veya gerçeğe aykırı yayın yapılması halinde doğar",
          "Yayımlanmaması durumunda hakim en geç 7 gün içinde karar verir",
          "Kanunla detayları düzenlenir"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 32",
        degisiklikler: [
          "1982 Anayasası'nda orijinal yapısı korunarak lafzi muhafaza edilmiştir"
        ],
        onemliNot: "Hakimin karar verme süresi olan 'en geç yedi gün' sınav soru havuzlarında sıkça rakamsal tuzak olarak sorulur."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 33,
      maddeNo: 33,
      baslik: "Madde 33 - Dernek Kurma Hürriyeti",
      metni: "Herkes, önceden izin almaksızın dernek kurma ve bunlara üye olma ya da üyelikten çıkma hürriyetine sahiptir. Hiç kimse bir derneğe üye olmaya ve dernekte üye kalmaya zorlanamaz. Dernek kurma hürriyeti ancak, millî güvenlik, kamu düzeni, suç işlenmesinin önlenmesi, genel sağlık ve genel ahlâk ile başkalarının hürriyetlerinin korunması sebepleriyle ve kanunla sınırlanabilir. Dernek kurma hürriyetinin kullanılmasında uygulanacak şekil, şart ve usuller kanunda gösterilir. Dernekler, kanunun öngördüğü hallerde hâkim kararıyla kapatılabilir veya faaliyetten alıkonulabilir. Ancak, millî güvenliğin, kamu düzeninin, suç işlenmesini veya suçun devamını önlemenin yahut yakalamanın gerektirdiği hallerde gecikmede sakınca varsa, kanunla bir merci, derneği faaliyetten men ile yetkilendirilebilir. Bu merciin kararı, yirmidört saat içinde görevli hâkimin onayına sunulur. Hâkim, kararını kırksekiz saat içinde açıklar; aksi halde, bu idarî karar kendiliğinden yürürlükten kalkar. Birinci fıkra hükmü, Silahlı Kuvvetler ve kolluk kuvvetleri mensuplarına ve görevlerinin gerektirdiği ölçüde Devlet memurlarına kanunla sınırlamalar getirilmesine engel değildir. Silahlı Kuvvetler ve kolluk kuvvetleri mensuplarına ve görevlerinin gerektirdiği ölçüde Devlet memurlarına kanunla sınırlamalar getirilmesine engel değildir. Bu madde hükümleri vakıflarla ilgili olarak da uygulanır.",
      tuzaklar: {
        aciklama: "Dernek kurma hürriyetini, kapatma/faaliyetten alıkoyma rejimini düzenler.",
        hap: [
          "Dernek kurmak için önceden izin almak gerekmez",
          "Gecikmesinde sakınca bulunan hallerde idari merci derneği faaliyetten men edebilir",
          "İdari men kararı 24 saatte hakime sunulur, 48 saatte onaylanmazsa kendiliğinden kalkar"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 33",
        degisiklikler: [
          "2001 yılında yapılan değişiklikle dernek kurma şartları hafifletilmiş, izin alma zorunluluğu tamamen kaldırılmıştır"
        ],
        onemliNot: "Faaliyetten men kararında 24 saat içinde hakime sunma ve 48 saat içinde hakim tarafından açıklanma kuralı burada da aynen geçerlidir."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 34,
      maddeNo: 34,
      baslik: "Madde 34 - Toplantı ve Gösteri Yürüyüşü Düzenleme Hakkı",
      metni: "Herkes, önceden izin almadan, silahsız ve saldırısız toplantı ve gösteri yürüyüşü düzenleme hakkına sahiptir. Toplantı ve gösteri yürüyüşü hakkı ancak, millî güvenlik, kamu düzeni, suç işlenmesinin önlenmesi, genel sağlığın ve genel ahlâkın veya başkalarının hak ve özgürlüklerinin korunması amacıyla ve kanunla sınırlanabilir. Toplantı ve gösteri yürüyüşü düzenleme hakkının kullanılmasında uygulanacak şekil, şart ve usuller kanunda gösterilir.",
      tuzaklar: {
        aciklama: "Toplantı ve gösteri yürüyüşü düzenleme hakkının koşullarını ve sınırlarını düzenler.",
        hap: [
          "Toplantı ve gösteri yürüyüşü düzenlemek için önceden izin almak gerekmez",
          "Hakkın kullanılabilmesi için 'silahsız ve saldırısız' olma şartı aranır",
          "Kanunla ve anayasal maddede sayılan haklı sebeplerle sınırlanabilir"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 34",
        degisiklikler: [
          "2001 yılında yapılan değişiklikle bildirim/izin rejimi demokratik standartlara uyarlanmıştır"
        ],
        onemliNot: "Önceden 'izin alma' şartının aranmaması, sadece bildirim usulünün geçerli olması en temel kuraldır."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 35,
      maddeNo: 35,
      baslik: "Madde 35 - Mülkiyet Hakkı",
      metni: "Herkes, mülkiyet ve miras haklarına sahiptir. Bu haklar, ancak kamu yararı amacıyla, kanunla sınırlanabilir. Mülkiyet hakkının kullanılması toplum yararına aykırı olamaz.",
      tuzaklar: {
        aciklama: "Mülkiyet ve miras haklarını ve bu hakların sınırlarını düzenler.",
        hap: [
          "Mülkiyet ve miras hakkı anayasal güvence altındadır",
          "Bu haklar ancak kamu yararı amacıyla ve kanunla sınırlanabilir",
          "Mülkiyet hakkının kullanımı toplum yararına aykırı olamaz"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 35",
        degisiklikler: [
          "1982 Anayasası'nda orijinal haliyle korunmuştur"
        ],
        onemliNot: "Sınırlama sebebinin özel olarak 'kamu yararı' amacına bağlanmış olması bu maddeye özgü önemli bir detaydır."
      },
      favoriMi: false,
      cipMi: false
    },
    {
      id: 36,
      maddeNo: 36,
      baslik: "Madde 36 - Hak Arama Hürriyeti",
      metni: "Herkes, meşru vasıta ve yollardan faydalanmak suretiyle yargı mercileri önünde davacı veya davalı olarak iddia ve savunma ile adil yargılanma hakkına sahiptir. Hiçbir mahkeme, görev ve yetkisi içindeki davaya bakmaktan kaçınamaz.",
      tuzaklar: {
        aciklama: "Hak arama hürriyetini, iddia, savunma ve adil yargılanma hakkını düzenler.",
        hap: [
          "Meşru vasıta ve yollarla yargı önünde iddia, savunma ve adil yargılanma hakkı vardır",
          "Hiçbir mahkeme görev ve yetkisi içindeki davaya bakmaktan kaçınamaz",
          "Adil yargılanma hakkı anayasal güvencedir"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 36",
        degisiklikler: [
          "2001 yılında metne açıkça 'adil yargılanma hakkı' ibaresi eklenmiştir"
        ],
        onemliNot: "Mahkemelerin görev ve yetkisi dahilindeki davaya bakmaktan kaçınamayacağı (rakis/kaçınma yasağı) ilkesi temel güvencedir."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 37,
      maddeNo: 37,
      baslik: "Madde 37 - Kanuni Hakim Güvencesi",
      metni: "Hiç kimse kanunen tabi olduğu mahkemeden başka bir merci önüne çıkarılamaz. Bir kimseyi kanunen tabi olduğu mahkemeden başka bir merci önüne çıkarma sonucunu doğuran yargı yetkisine sahip olağanüstü merciler kurulamaz.",
      tuzaklar: {
        aciklama: "Kanuni hakim güvencesini ve olağanüstü mahkemeler yasağını düzenler.",
        hap: [
          "Kimse kanunen tabi olduğu mahkemeden başka bir merci önüne çıkarılamaz",
          "Olağanüstü merciler ve mahkemeler kurulamaz",
          "Doğal hakim (kanuni hakim) ilkesi geçerlidir"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 37",
        degisiklikler: [
          "1982 Anayasası'nda orijinal haliyle korunmuştur"
        ],
        onemliNot: "Kişinin suç işlendikten sonra kurulmuş veya o iş için özel yetkilendirilmiş olağanüstü merciler önüne çıkarılamaması esastır."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 38,
      maddeNo: 38,
      baslik: "Madde 38 - Suç ve Cezalara İlişkin Esaslar",
      metni: "Kimse, işlendiği zaman yürürlükte bulunan kanunun suç saymadığı bir fiilden dolayı cezalandırılamaz; kimseye suçu işlediği zaman kanunda o suç için konulmuş olan cezadan daha ağır bir ceza verilemez. Suç ve ceza zamanaşımı ile ceza mahkumiyetinin sonuçları konusunda da yukarıdaki fıkra uygulanır. Ceza ve ceza yerine geçen güvenlik tedbirleri ancak kanunla konulur. Suçluluğu hükmen sabit oluncaya kadar, kimse suçlu sayılamaz. Hiç kimse kendisini ve kanunda gösterilen yakınlarını suçlayan bir beyanda bulunmaya veya bu yolda delil göstermeye zorlanamaz. Kanuna aykırı olarak elde edilmiş bulgular, delil olarak kabul edilemez. Ceza sorumluluğu şahsidir. Hiç kimse, yalnızca sözleşmeden doğan bir yükümlülüğü yerine getirememesinden dolayı özgürlüğünden alıkonulamaz. Ölüm cezası ve genel müsadere cezası verilemez. İdare, kişi hürriyetinin kısıtlanması sonucunu doğuran bir müeyyide uygulayamaz. Silahlı Kuvvetlerin iç düzeni bakımından bu hükme kanunla istisnalar getirilebilir. Uluslararası Ceza Divanına taraf olmanın gerektirdiği yükümlülükler hariç olmak üzere vatandaş, suç sebebiyle yabancı bir ülkeye verilemez.",
      tuzaklar: {
        aciklama: "Suç ve cezalara ilişkin temel anayasal ilkeleri (kanunilik, masumiyet karinesi, suçun şahsiliği vb.) düzenler.",
        hap: [
          "Suçlar ve cezalar geçmişe yürütülemez (suçların ve cezaların kanuniliği)",
          "Kanuna aykırı olarak elde edilmiş bulgular delil olarak kabul edilemez",
          "Ceza sorumluluğu şahsidir, kimse borcunu ödeyemediğinden (sözleşme yükümlülüğü) hapsedilemez",
          "Ölüm cezası ve genel müsadere cezası verilemez",
          "Vatandaş suç sebebiyle yabancı bir ülkeye verilemez (suçlu iadesi yasağı, UCD istisnası hariç)"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 38",
        degisiklikler: [
          "2001 yılında hukuka aykırı delil yasağı ve sözleşme yükümlülüğünü yerine getirememe nedeniyle hapis yasağı eklenmiştir",
          "2004 yılında ölüm cezası ve genel müsadere cezası tamamen kaldırılmıştır"
        ],
        onemliNot: "Hukuka aykırı delillerin kullanılamaması ve masumiyet karinesi sınavların vazgeçilmez favori konularıdır."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 39,
      maddeNo: 39,
      baslik: "Madde 39 - İspat Hakkı",
      metni: "Kamu görev ve hizmetinde bulunanlara karşı, bu görev ve hizmetin yerine getirilmesiyle ilgili olarak yapılan isnatlardan dolayı açılan hakaret davalarında, sanık, isnadın doğruluğunu ispat hakkına sahiptir. Bunun dışındaki hallerde ispat isteminin kabulü, ancak isnat olunan fiilin doğru olup olmadığının anlaşılmasında kamu yararı bulunmasına veya şikayetçinin ispata razı olmasına bağlıdır.",
      tuzaklar: {
        aciklama: "Kamu görevlilerine yönelik isnatlarda ispat hakkı şartlarını düzenler.",
        hap: [
          "Kamu görevlilerine görevleriyle ilgili isnatlarda sanık ispat hakkına sahiptir",
          "Diğer durumlarda ispat için kamu yararı bulunması veya şikayetçinin razı olması şarttır"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 39",
        degisiklikler: [
          "1982 Anayasası'nda orijinal haliyle korunmuştur"
        ],
        onemliNot: "İspat hakkının kamu görevlilerine karşı açılan hakaret davalarında doğrudan tanınması en belirgin özelliğidir."
      },
      favoriMi: false,
      cipMi: false
    },
    {
      id: 40,
      maddeNo: 40,
      baslik: "Madde 40 - Temel Hak ve Hürriyetlerin Korunması",
      metni: "Anayasa ile tanınmış hak ve hürriyetleri ihlal edilen herkes, yetkili makama geciktirilmeden başvurma imkanının sağlanmasını isteme hakkına sahiptir. Devlet, işlemlerinde, ilgili kişilerin hangi kanun yolları ve mercilere başvuracağını and sürelerini belirtmek zorundadır. Kişinin, Resmî görevliler tarafından vaki haksız işlemler sonucu uğradığı zarar da, kanuna göre, Devletçe tazmin edilir. Devletin sorumlu olan ilgili görevliye rücu hakkı saklıdır.",
      tuzaklar: {
        aciklama: "Temel hak ve hürriyetlerin korunması, etkili başvuru yolu ve idarenin sorumluluğunu düzenler.",
        hap: [
          "Hakları ihlal edilen herkes yetkili makama geciktirilmeden başvurma hakkına sahiptir",
          "Devlet işlemlerinde başvuru yollarını ve sürelerini belirtmek zorundadır",
          "Resmi görevlilerin haksız işlemlerinden doğan zararı Devlet öder ve ilgili görevliye rücu eder"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 40",
        degisiklikler: [
          "2001 yılında yapılan değişiklikle kanun yolları ve sürelerini gösterme zorunluluğu ile devlete tazminat sorumluluğu eklenmiştir"
        ],
        onemliNot: "Devletin işlemlerinde başvuru süresi ve mercileri gösterme zorunluluğu vatandaş lehine getirilen çok önemli bir güvencedir."
      },
      favoriMi: false,
      cipMi: true
    },
{
      id: 41,
      maddeNo: 41,
      baslik: "Madde 41 - Ailenin Korunması ve Çocuk Hakları",
      metni: "Aile, Türk toplumunun temelidir ve eşler arasında eşitliğe dayanır. Devlet, ailenin huzur ve refahı ile özellikle ananın ve çocukların korunması ve aile planlamasının öğretimi ile uygulanmasını sağlamak için gerekli tedbirleri alır, teşkilatı kurar. Her çocuk, korunma ve bakımdan yararlanma, yüksek yararına açıkça aykırı olmadıkça, ana ve babasıyla kişisel ve doğrudan ilişki kurma ve sürdürme hakkına sahiptir. Devlet, her türlü istismara ve şiddete karşı çocukları koruyucu tedbirleri alır.",
      tuzaklar: {
        aciklama: "Ailenin korunması, eşler arası eşitlik ve çocuk haklarını düzenler.",
        hap: [
          "Aile Türk toplumunun temelidir ve eşler arasında eşitliğe dayanır",
          "Devlet, ailenin huzuru ile ananın ve çocukların korunmasını sağlamakla yükümlüdür",
          "Her çocuğun ana ve babasıyla kişisel ve doğrudan ilişki kurma hakkı vardır (yüksek yararına aykırı olmadıkça)",
          "Devlet çocukları her türlü istismar ve şiddete karşı korur"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 41",
        degisiklikler: [
          "2010 yılında yapılan değişiklikle çocuk hakları (kişisel ilişki kurma ve istismardan korunma) anayasal güvenceye alınmıştır"
        ],
        onemliNot: "Eşler arasında eşitlik ilkesi ve çocukların korunması kuralı anayasanın sosyal devlet ilkelerindendir."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 42,
      maddeNo: 42,
      baslik: "Madde 42 - Eğitim ve Öğrenim Hakkı ve Ödevi",
      metni: "Kimse, eğitim ve öğrenim hakkından yoksun bırakılamaz. Öğrenim hakkının kapsamı kanunla tespit edilir ve düzenlenir. Eğitim ve öğretim, Atatürk ilkeleri ve inkılapları doğrultusunda, çağdaş bilim ve eğitim esaslarına göre, Devletin gözetim ve denetimi altında yapılır. Bu esaslara aykırı eğitim ve öğretim yerleri açılamaz. Eğitim ve öğretim hürriyeti, Anayasaya sadakat borcunu ortadan kaldırmaz. İlköğretim kız ve erkek bütün vatandaşlar için zorunludur ve Devlet okullarında parasızdır. Özel ilk ve orta dereceli okulların bağlı olduğu esaslar, Devlet okulları ile erişilmek istenen seviyeye uygun olarak, kanunla düzenlenir. Devlet, maddi imkanlardan yoksun başarılı öğrencilerin, öğrenimlerini sürdürebilmeleri amacı ile burslar ve başka yollarla gerekli yardımları yapar. Devlet, durumları sebebiyle özel eğitime ihtiyacı olanları topluma yararlı kılacak tedbirleri alır. Eğitim ve öğretim kurumlarında sadece eğitim, öğretim, araştırma ve inceleme ile ilgili faaliyetler yürütülür. Bu faaliyetler her ne suretle olursa olsun engellenemez. Türkçeden başka hiçbir dil, eğitim ve öğretim kurumlarında Türk vatandaşlarına ana dilleri olarak okutulamaz ve öğretilemez. Eğitim ve öğretim kurumlarında okutulacak yabancı diller ile yabancı dille eğitim ve öğretim yapan okulların tabi olacağı esaslar kanunla düzenlenir. Milletlerarası andlaşma hükümleri saklıdır.",
      tuzaklar: {
        aciklama: "Eğitim ve öğrenim hakkı, ilköğretimin zorunluluğu ve parasızlığı ile eğitim esaslarını düzenler.",
        hap: [
          "İlköğretim kız ve erkek bütün vatandaşlar için zorunludur ve Devlet okullarında parasızdır",
          "Eğitim ve öğretim Atatürk ilkeleri ve inkılapları doğrultusunda, devletin gözetim ve denetiminde yapılır",
          "Türkçeden başka hiçbir dil eğitim kurumlarında Türk vatandaşlarına ana dilleri olarak okutulamaz",
          "Eğitim kurumlarında sadece eğitim, öğretim, araştırma ve inceleme faaliyetleri yürütülür"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 42",
        degisiklikler: [
          "Yıllar içinde bazı fıkralarda anayasa mahkemesi kararları ve yasal düzenlemeler yapılmıştır"
        ],
        onemliNot: "İlköğretimin devlet okullarında parasız ve zorunlu olması mutlak bir ödevdir."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 43,
      maddeNo: 43,
      baslik: "Madde 43 - Kıyılardan Yararlanma",
      metni: "Kıyılar, Devletin hüküm ve tasarrufu altındadır. Deniz, göl ve akarsu kıyılarıyla, deniz ve göllerin kıyılarını çevreleyen sahil şeritlerinden yararlanmada öncelikle kamu yararı gözetilir. Kıyılarla sahil şeritlerinin, kullanılış amaçlarına göre derinliği ve kişilerin bu yerlerden yararlanma imkan ve şartları kanunla düzenlenir.",
      tuzaklar: {
        aciklama: "Kıyılardan yararlanma şartlarını ve kamu yararı ilkesini düzenler.",
        hap: [
          "Kıyılar devletin hüküm ve tasarrufu altındadır",
          "Kıyı ve sahil şeritlerinden yararlanmada öncelikle kamu yararı gözetilir",
          "Kullanılış amaçları ve yararlanma şartları kanunla düzenlenir"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 43",
        degisiklikler: [
          "1982 Anayasası'nda orijinal haliyle korunmuştur"
        ],
        onemliNot: "Kıyılarda öncelikle kamu yararının gözetilmesi temel bir çevre ve kıyı yönetimi kuralıdır."
      },
      favoriMi: false,
      cipMi: false
    },
    {
      id: 44,
      maddeNo: 44,
      baslik: "Madde 44 - Toprak Mülkiyeti",
      metni: "Devlet, toprağın verimli olarak işletilmesini korumak ve geliştirmek, erozyonla kaybedilmesini önlemek ve topraksız olan veya yeter toprağı bulunmayan çiftçilikle uğraşan köylüye toprak sağlamak amacıyla gerekli tedbirleri alır. Kanun, bu amaçla, değişik tarım bölgeleri ve çeşitlerine göre toprağın genişliğini tespit edebilir. Topraksız olan veya yeter toprağı bulunmayan çiftçiye toprak sağlanması, üretimin düşürülmesi, ormanların küçülmesi ve diğer toprak ve yeraltı servetlerinin azalması sonucunu doğuramaz. Bu amaçla dağıtılan topraklar bölünemez, miras hükümleri dışında başkalarına devredilemez ve ancak dağıtılan çiftçilerle mirasçıları tarafından işletilebilir. Bu şartların kaybı halinde, dağıtılan toprağın Devletçe geri alınmasına ilişkin esaslar kanunla düzenlenir.",
      tuzaklar: {
        aciklama: "Toprak mülkiyeti, çiftçiye toprak sağlanması ve koruma esaslarını düzenler.",
        hap: [
          "Devlet toprağın verimli işletilmesini korur ve köylüye toprak sağlar",
          "Dağıtılan topraklar bölünemez, miras hükümleri dışında başkalarına devredilemez",
          "Şartların kaybedilmesi halinde dağıtılan toprak Devletçe geri alınır"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 44",
        degisiklikler: [
          "1982 Anayasası'nda orijinal haliyle korunmuştur"
        ],
        onemliNot: "Toprak reformu kapsamında dağıtılan toprakların miras dışı devredilememesi ve bölünememesi önemli bir kısıtlamadır."
      },
      favoriMi: false,
      cipMi: false
    },
    {
      id: 45,
      maddeNo: 45,
      baslik: "Madde 45 - Tarım, Hayvancılık ve Üreticinin Korunması",
      metni: "Devlet, tarım arazileri ile çayır ve mer'aların amaç dışı kullanılmasını ve tahribini önlemek, tarımsal üretim planlaması ilkelerine uygun olarak bitkisel ve hayvansal üretimi artırmak maksadıyla, tarım ve hayvancılıkla uğraşanların işletme araç ve gereçlerinin ve diğer girdilerinin sağlanmasını kolaylaştırır. Devlet, bitkisel ve hayvansal ürünlerin değerlendirilmesi ve gerçek değerlerinin üreticinin eline geçmesi için gereken tedbirleri alır.",
      tuzaklar: {
        aciklama: "Tarım, hayvancılık ve üreticinin desteklenmesi esaslarını düzenler.",
        hap: [
          "Devlet tarım arazilerinin amaç dışı kullanılmasını önler",
          "Tarımsal üretimi artırmak için üreticiye girdi ve araç-gereç sağlama kolaylığı getirir",
          "Ürünlerin gerçek değerinin üreticinin eline geçmesi için tedbir alır"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 45",
        degisiklikler: [
          "1982 Anayasası'nda orijinal haliyle korunmuştur"
        ],
        onemliNot: "Mer'aların ve tarım arazilerinin amaç dışı kullanımının önlenmesi çevre ve tarım politikalarının temelidir."
      },
      favoriMi: false,
      cipMi: false
    },
    {
      id: 46,
      maddeNo: 46,
      baslik: "Madde 46 - Kamulaştırma",
      metni: "Devlet ve kamu tüzel kişileri; kamu yararının gerektirdiği hallerde, gerçek karşılıklarını peşin ödemek şartıyla, özel mülkiyette bulunan taşınmaz malların tamamını veya bir kısmını, kanunla gösterilen esas ve usullere göre, kamulaştırmaya ve bunlar üzerinde idarî irtifaklar kurmaya yetkilidir. Kamulaştırma bedeli ile kesin hükme bağlanan artırım bedeli nakden ve peşin olarak ödenir. Ancak, tarım reformunun uygulanması, büyük enerji ve sulama projeleri ile iskân projelerinin gerçekleştirilmesi, yeni ormanların yetiştirilmesi, kıyıların korunması ve turizm amacıyla kamulaştırılan toprakların bedellerinin ödenme şekli kanunla gösterilir. Kanunun taksitle ödemeyi öngörebileceği bu hallerde, taksitlendirme süresi beş yılı aşamaz; bu takdirde taksitler eşit olarak ödenir. Kamulaştırılan topraktan, o toprağı doğrudan doğruya işleten küçük çiftçiye ait olanlarının bedeli, her halde peşin ödenir. İkinci fıkrada öngörülen taksitlendirmelerde ve herhangi bir sebeple ödenmemiş kamulaştırma bedellerinde kamu alacakları için öngörülen en yüksek faiz uygulanır.",
      tuzaklar: {
        aciklama: "Kamulaştırma şartlarını, bedel ödeme esaslarını ve istisnai taksitlendirme kurallarını düzenler.",
        hap: [
          "Kamulaştırma bedeli kural olarak nakden ve peşin ödenir",
          "Tarım reformu, büyük enerji/sulama projeleri, orman yetiştirme gibi hallerde taksit yapılabilir, süresi en çok 5 yıldır",
          "Küçük çiftçiye ait kamulaştırılan toprak bedeli her halükarda peşin ödenir",
          "Ödenmemiş bedellere kamu alacakları için öngörülen en yüksek faiz uygulanır"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 46",
        degisiklikler: [
          "2001 yılında yapılan değişiklikle kamulaştırma bedellerinin ödenme şartları ve taksitlendirme sınırları yeniden düzenlenmiştir"
        ],
        onemliNot: "Taksitlendirme süresinin 'beş yılı aşamaması' ve küçük çiftçi bedelinin herhalde peşin ödenmesi sınav tuzaklarında sıklıkla kullanılır."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 47,
      maddeNo: 47,
      baslik: "Madde 47 - Devletleştirme ve Özelleştirme",
      metni: "Kamu hizmeti niteliği taşıyan özel teşebbüsler, kamu yararının zorunlu kıldığı hallerde devletleştirilebilir. Devletleştirme gerçek karşılığı üzerinden yapılır. Gerçek karşılığın hesaplanma tarzı ve usulleri kanunla düzenlenir. Devletin, kamu iktisadi teşebbüslerinin ve diğer kamu tüzelkişilerinin mülkiyetinde bulunan işletme ve varlıkların özelleştirilmesine ilişkin esas ve usuller kanunla gösterilir. Devlet, kamu iktisadi teşebbüsleri ve diğer kamu tüzelkişileri tarafından yürütülen yatırım ve hizmetlerden hangilerinin özel hukuk sözleşmeleri ile gerçek veya tüzelkişilere yaptırılabileceği veya devredilebileceği kanunla belirlenir.",
      tuzaklar: {
        aciklama: "Devletleştirme ve özelleştirme esaslarını düzenler.",
        hap: [
          "Kamu hizmeti niteliğindeki özel teşebbüsler kamu yararı gereği devletleştirilebilir",
          "Devletleştirme gerçek karşılığı üzerinden yapılır",
          "KİT'lerin ve kamu varlıklarının özelleştirilmesi esasları kanunla düzenlenir"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 47",
        degisiklikler: [
          "1999 yılında yapılan ek fıkralarla özelleştirme ve kamu hizmetlerinin devri anayasal kapsama dahil edilmiştir"
        ],
        onemliNot: "Özelleştirme kavramı anayasaya 1999 yılında eklenmiştir."
      },
      favoriMi: false,
      cipMi: false
    },
    {
      id: 48,
      maddeNo: 48,
      baslik: "Madde 48 - Çalışma ve Sözleşme Hürriyeti",
      metni: "Herkes, dilediği alanda çalışma ve sözleşme hürriyetine sahiptir. Özel teşebbüsler kurmak serbesttir. Devlet, özel teşebbüslerin milli ekonominin gereklerine ve sosyal amaçlara uygun yürümesini, güvenlik ve kararlılık içinde çalışmasını sağlayacak tedbirleri alır.",
      tuzaklar: {
        aciklama: "Çalışma, sözleşme hürriyeti ve özel teşebbüs kurma serbestisini düzenler.",
        hap: [
          "Herkes dilediği alanda çalışma ve sözleşme hürriyetine sahiptir",
          "Özel teşebbüsler kurmak serbesttir",
          "Devlet özel teşebbüslerin milli ekonomi ve sosyal amaçlara uygun çalışmasını sağlar"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 48",
        degisiklikler: [
          "1982 Anayasası'nda orijinal haliyle korunmuştur"
        ],
        onemliNot: "Özel teşebbüs kurma hürriyeti piyasa ekonomisinin anayasal dayanağıdır."
      },
      favoriMi: false,
      cipMi: false
    },
    {
      id: 49,
      maddeNo: 49,
      baslik: "Madde 49 - Çalışma Hakkı ve Ödevi",
      metni: "Çalışma, herkesin hakkı ve ödevidir. Devlet, çalışanların hayat seviyesini yükseltmek, çalışma hayatını geliştirmek için çalışanları ve işsizleri korumak, çalışmayı desteklemek, işsizliği önlemeye elverişli ekonomik bir ortam yaratmak ve çalışma barışını sağlamak için gerekli tedbirleri alır.",
      tuzaklar: {
        aciklama: "Çalışma hakkı ve ödevi ile devletin sosyal ve ekonomik koruma yükümlülüklerini düzenler.",
        hap: [
          "Çalışma herkesin hem hakkı hem de ödevidir",
          "Devlet çalışanları ve işsizleri korumak, çalışma barışını sağlamakla yükümlüdür",
          "İşsizliği önlemeye elverişli ekonomik ortam yaratmak devletin ödevidir"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 49",
        degisiklikler: [
          "2001 yılında yapılan değişiklikle işsizlerin korunması ve çalışma barışını sağlama vurgusu eklenmiştir"
        ],
        onemliNot: "Çalışmanın hem hak hem de ödev olarak tanımlanması önemli bir anayasal özelliktir."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 50,
      maddeNo: 50,
      baslik: "Madde 50 - Çalışma Şartları ve Dinlenme Hakkı",
      metni: "Kimse, yaşına, cinsiyetine ve gücüne uymayan işlerde çalıştırılamaz. Küçükler ve kadınlar ile bedeni ve ruhi yetersizliği olanlar çalışma şartları bakımından özel olarak korunurlar. Dinlenmek, çalışanların hakkıdır. Ücretli hafta ve bayram tatili ile ücretli yıllık izin hakları ve şartları kanunla düzenlenir.",
      tuzaklar: {
        aciklama: "Çalışma şartları, dezavantajlı grupların korunması ve dinlenme hakkını düzenler.",
        hap: [
          "Kimse yaşına, cinsiyetine ve gücüne uymayan işlerde çalıştırılamaz",
          "Küçükler, kadınlar, bedeni ve ruhi yetersizliği olanlar özel olarak korunur",
          "Dinlenmek, ücretli hafta/bayram tatili ve yıllık izin çalışanların hakkıdır"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 50",
        degisiklikler: [
          "1982 Anayasası'nda orijinal haliyle korunmuştur"
        ],
        onemliNot: "Kadınların ve küçüklerin çalışma koşullarında özel koruma altında olması sosyal devlet ilkesinin gereğidir."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 51,
      maddeNo: 51,
      baslik: "Madde 51 - Sendika Kurma Hakkı",
      metni: "Çalışanlar ve işverenler, üyelerinin çalışma ilişkilerinde, ekonomik ve sosyal hak ve menfaatlerini korumak ve geliştirmek için önceden izin almaksızın sendikalar ve üst kuruluşlar kurma, bunlara serbestçe üye olma ve üyelikten serbestçe çekilme haklarına sahiptir. Hiç kimse bir sendikaya üye olmaya ya da üyelikten ayrılmaya zorlanamaz. Sendika kurma hakkı ancak, millî güvenlik, kamu düzeni, suç işlenmesinin önlenmesi, genel sağlık ve genel ahlâk ile başkalarının hak ve özgürlüklerinin korunması sebepleriyle ve kanunla sınırlanabilir. Sendika kurma hakkının kullanılmasında uygulanacak şekil, şart ve usuller kanunda gösterilir. İşçi niteliği taşımayan kamu görevlilerinin bu alandaki haklarının kapsam, istisna ve sınırları gördükleri hizmetin niteliğine uygun olarak kanunla düzenlenir. Sendika ve üst kuruluşlarının tüzükleri, yönetim ve işleyişleri, Cumhuriyetin temel niteliklerine ve demokrasi esaslarına aykırı olamaz.",
      tuzaklar: {
        aciklama: "Sendika kurma hakkını, üyelik serbestisini ve sınırlama esaslarını düzenler.",
        hap: [
          "Sendika kurmak için önceden izin almak gerekmez",
          "Hiç kimse sendikaya üye olmaya veya ayrılmaya zorlanamaz",
          "İşçi niteliği taşımayan kamu görevlilerinin sendika hakları hizmetin niteliğine göre kanunla düzenlenir",
          "Sendika tüzükleri Cumhuriyetin temel niteliklerine aykırı olamaz"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 51",
        degisiklikler: [
          "2001 yılında izin alma şartı kaldırılmış, sendikal haklar demokratikleştirilmiştir"
        ],
        onemliNot: "Önceden izin alma şartının olmaması ve üyelikte gönüllülük esası en temel sınav tuzaklarındandır."
      },
      favoriMi: false,
      cipMi: true
    },
{
      id: 53,
      maddeNo: 53,
      baslik: "Madde 53 - Toplu İş Sözleşmesi ve Toplu Sözleşme Hakkı",
      metni: "İşçiler ve işverenler, karşılıklı olarak ekonomik ve sosyal durumlarını ve çalışma şartlarını düzenlemek amacıyla toplu iş sözleşmesi yapma hakkına sahiptirler. Toplu iş sözleşmesinin nasıl yapılacağı kanunla düzenlenir. Memurlar ve diğer kamu görevlileri, toplu sözleşme yapma hakkına sahiptirler. Toplu sözleşme yapılması sırasında uyuşmazlık çıkması halinde taraflar Kamu Görevlileri Hakem Kuruluna başvurabilir. Kamu Görevlileri Hakem Kurulu kararları kesindir ve toplu sözleşme hükmündedir. Toplu sözleşme hakkının kapsamı, istisnaları, toplu sözleşmeden yararlanacaklar, toplu sözleşmenin yapılma şekli, usulü ve yürürlüğü, toplu sözleşme hükümlerinin emeklilere yansıtılması, Kamu Görevlileri Hakem Kurulunun teşkili, çalışma usul ve esasları ile diğer hususlar kanunla düzenlenir.",
      tuzaklar: {
        aciklama: "Toplu iş sözleşmesi ile kamu görevlilerinin toplu sözleşme hakkını ve Kamu Görevlileri Hakem Kurulunu düzenler.",
        hap: [
          "Memurlar ve diğer kamu görevlileri toplu sözleşme yapma hakkına sahiptir",
          "Uyuşmazlık halinde Kamu Görevlileri Hakem Kuruluna başvurulur",
          "Kamu Görevlileri Hakem Kurulu kararları kesindir ve toplu sözleşme hükmündedir"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 53",
        degisiklikler: [
          "2010 Anayasa değişikliğiyle memurlara toplu sözleşme hakkı tanınmış ve Kamu Görevlileri Hakem Kurulu ihdas edilmiştir"
        ],
        onemliNot: "Memurların toplu sözleşme yapma hakkı ve Kamu Görevlileri Hakem Kurulunun kararlarının kesinliği 2010 değişikliğiyle getirilmiştir."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 54,
      maddeNo: 54,
      baslik: "Madde 54 - Grev Hakkı ve Lokavt",
      metni: "Toplu iş sözleşmesinin yapılması sırasında, uyuşmazlık çıkması halinde işçiler grev hakkına sahiptirler. Bu hakkın kullanılmasının ve işverenin lokavta başvurmasının usul ve şartları ile kapsam ve istisnaları kanunla düzenlenir. Grev hakkı ve lokavt iyiniyet kurallarına aykırı tarzda, toplum zararına ve milli serveti tahrip edecek şekilde kullanılamaz. Grev ve lokavtın yasaklanabileceği veya ertelenebileceği haller ve işyerleri kanunla düzenlenir. Grev ve lokavtın yasaklandığı hallerde veya ertelendiği durumlarda ertelemenin sonunda, uyuşmazlık Yüksek Hakem Kurulunca çözülür. Uyuşmazlığın her safhasında taraflar da anlaşarak Yüksek Hakem Kuruluna başvurabilir. Yüksek Hakem Kurulunun kararları kesindir ve toplu iş sözleşmesi hükmündedir. Yüksek hakem kurulunun kuruluş ve görevleri kanunla düzenlenir. Greve katılmayanların işyerinde çalışmaları, greve katılanlar tarafından hiç bir şekilde engellenemez.",
      tuzaklar: {
        aciklama: "Grev hakkı, lokavt, yasaklama/erteleme halleri ve Yüksek Hakem Kurulunu düzenler.",
        hap: [
          "İşçiler grev, işverenler lokavt hakkına sahiptir",
          "Grev/lokavtın ertelendiği veya yasaklandığı durumlarda uyuşmazlığı Yüksek Hakem Kurulu çözer",
          "Yüksek Hakem Kurulu kararları kesindir ve toplu iş sözleşmesi hükmündedir",
          "Greve katılmayanların çalışması engellenemez"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 54",
        degisiklikler: [
          "2010 yılında yapılan değişiklikle siyasi grev, dayanışma grevi, genel grev ve işyeri işgali gibi yasaklayıcı fıkralar ayıklanmıştır"
        ],
        onemliNot: "Grev hakkı işçilere, lokavt ise işverenlere tanınan bir haktır; her ikisinde de Yüksek Hakem Kurulu yetkilidir."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 55,
      maddeNo: 55,
      baslik: "Madde 55 - Ücrette Adalet Sağlanması",
      metni: "Ücret emeğin karşılığıdır. Devlet, çalışanların yaptıkları işe uygun adaletli bir ücret elde etmeleri ve diğer sosyal yardımlardan yararlanmaları için gerekli tedbirleri alır. Asgarî ücretin tespitinde çalışanların geçim şartları ile ülkenin ekonomik durumu da gözönünde bulundurulur.",
      tuzaklar: {
        aciklama: "Ücret adaletini ve asgari ücretin belirlenme kriterlerini düzenler.",
        hap: [
          "Ücret emeğin karşılığıdır",
          "Devlet adaletli bir ücret elde edilmesi için gerekli tedbirleri alır",
          "Asgari ücret tespitinde çalışanların geçim şartları ve ülke ekonomisi gözetilir"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 55",
        degisiklikler: [
          "2001 yılında yapılan değişiklikle asgari ücret tespitinde 'ülkenin ekonomik durumu' ifadesi eklenmiştir"
        ],
        onemliNot: "Asgari ücretin sadece geçim şartlarına göre değil, ülkenin ekonomik durumuna göre de belirlendiği unutulmamalıdır."
      },
      favoriMi: false,
      cipMi: false
    },
    {
      id: 56,
      maddeNo: 56,
      baslik: "Madde 56 - Sağlık Hizmetleri ve Çevrenin Korunması",
      metni: "Herkes, sağlıklı ve dengeli bir çevrede yaşama hakkına sahiptir. Çevreyi geliştirmek, çevre sağlığını korumak ve çevre kirlenmesini önlemek Devletin ve vatandaşların ödevidir. Devlet, herkesin hayatını, beden ve ruh sağlığı içinde sürdürmesini sağlamak; insan ve madde gücünde tasarruf ve verimi artırarak, işbirliğini gerçekleştirmek amacıyla sağlık kuruluşlarını tek elden planlayıp hizmet vermesini düzenler. Devlet, bu görevini kamu ve özel kesimlerdeki sağlık ve sosyal kurumlarından yararlanarak, onları denetleyerek yerine getirir. Sağlık hizmetlerinin yaygın bir şekilde yerine getirilmesi için kanunla genel sağlık sigortası kurulabilir.",
      tuzaklar: {
        aciklama: "Çevre hakkını, çevreyi koruma ödevini ve genel sağlık sigortasını düzenler.",
        hap: [
          "Çevreyi korumak ve kirlenmeyi önlemek hem Devletin hem vatandaşların ortak ödevidir",
          "Devlet sağlık kuruluşlarını tek elden planlar ve denetler",
          "Sağlık hizmetleri için kanunla genel sağlık sigortası kurulabilir"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 56",
        degisiklikler: [
          "1982 Anayasası'nda orijinal haliyle korunmuştur"
        ],
        onemliNot: "Çevreyi korumak sadece devlete değil, aynı zamanda vatandaşlara da anayasal bir 'ödev' olarak yüklenmiştir."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 57,
      maddeNo: 57,
      baslik: "Madde 57 - Konut Hakkı",
      metni: "Devlet, şehirlerin özelliklerini ve çevre şartlarını gözeten bir planlama çerçevesinde, konut ihtiyacını karşılayacak tedbirleri alır, ayrıca toplu konut teşebbüslerini destekler.",
      tuzaklar: {
        aciklama: "Konut hakkını ve devletin toplu konutu destekleme yükümlülüğünü düzenler.",
        hap: [
          "Devlet konut ihtiyacını karşılayacak tedbirleri alır",
          "Planlama yapılırken şehir özellikleri ve çevre şartları gözetilir",
          "Toplu konut teşebbüsleri desteklenir"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 57",
        degisiklikler: [
          "1982 Anayasası'nda orijinal haliyle korunmıştır"
        ],
        onemliNot: "Devletin doğrudan herkese konut verme zorunluluğu yok, konut edinimini destekleme ve planlama tedbirleri alma yükümlülüğü vardır."
      },
      favoriMi: false,
      cipMi: false
    },
    {
      id: 58,
      maddeNo: 58,
      baslik: "Madde 58 - Gençliğin Korunması",
      metni: "Devlet, istiklal ve Cumhuriyetimizin emanet edildiği gençlerin müsbet ilmin ışığında, Atatürk ilke ve inkılapları doğrultusunda ve Devletin ülkesi ve milletiyle bölünmez bütünlüğünü ortadan kaldırmayı amaç edinen görüşlere karşı yetişme ve gelişmelerini sağlayıcı tedbirleri alır. Devlet, gençleri alkol düşkünlüğünden, uyuşturucu maddelerden, suçluluk, kumar ve benzeri kötü alışkanlıklardan ve cehaletten korumak için gerekli tedbirleri alır.",
      tuzaklar: {
        aciklama: "Gençliğin eğitimi, gelişimi ve kötü alışkanlıklardan korunmasını düzenler.",
        hap: [
          "Gençler pozitif bilim ışığında ve Atatürk ilkeleri doğrultusunda yetiştirilir",
          "Devlet gençleri alkol, uyuşturucu, kumar, suçluluk ve cehaletten korur"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 58",
        degisiklikler: [
          "1982 Anayasası'nda orijinal haliyle korunmuştur"
        ],
        onemliNot: "Kötü alışkanlıklardan korunma görevi anayasada gençliğin korunması maddesi başlığı altında açıkça sayılmıştır."
      },
      favoriMi: false,
      cipMi: false
    },
    {
      id: 59,
      maddeNo: 59,
      baslik: "Madde 59 - Sporun Geliştirilmesi ve Tahkim",
      metni: "Devlet, her yaştaki Türk vatandaşlarının beden ve ruh sağlığını geliştirecek tedbirleri alır, sporun kitlelere yayılmasını teşvik eder. Devlet başarılı sporcuyu korur. Spor federasyonlarının spor faaliyetlerinin yönetimine ve disiplinine ilişkin kararlarına karşı ancak zorunlu tahkim yoluna başvurulabilir. Tahkim kurulu kararları kesin olup bu kararlara karşı hiçbir yargı merciine başvurulamaz.",
      tuzaklar: {
        aciklama: "Sporun teşviki, başarılı sporcunun korunması ve sporda zorunlu tahkim yolunu düzenler.",
        hap: [
          "Devlet sporun kitlelere yayılmasını teşvik eder ve başarılı sporcuyu korur",
          "Spor federasyonu kararlarına karşı sadece zorunlu tahkim yoluna gidilebilir",
          "Spor Tahkim Kurulu kararları kesindir, hiçbir yargı merciine (mahkemeye) başvurulamaz"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 59",
        degisiklikler: [
          "2011 yılında eklenen fıkra ile sporda zorunlu tahkim yolu ve kararların yargı denetimi dışında kalması kuralı getirilmiştir"
        ],
        onemliNot: "Spor Tahkim Kurulu kararlarına karşı yargı yolunun kapalı olması anayasadaki yargı denetimi istisnalarından biridir."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 60,
      maddeNo: 60,
      baslik: "Madde 60 - Sosyal Güvenlik Hakkı",
      metni: "Herkes, sosyal güvenlik hakkına sahiptir. Devlet, bu güvenliği sağlayacak gerekli tedbirleri alır ve teşkilatı kurar.",
      tuzaklar: {
        aciklama: "Genel sosyal güvenlik hakkını ve devletin teşkilatlanma ödevini düzenler.",
        hap: [
          "Herkes sosyal güvenlik hakkına sahiptir",
          "Devlet bu güvenliği sağlamak için gerekli teşkilatı kurmakla yükümlüdür"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 60",
        degisiklikler: [
          "1982 Anayasası'nda orijinal haliyle korunmuştur"
        ],
        onemliNot: "Sosyal güvenlik hakkı temel bir sosyal haktır ve herkese tanınmıştır."
      },
      favoriMi: false,
      cipMi: false
    },
    {
      id: 61,
      maddeNo: 61,
      baslik: "Madde 61 - Sosyal Güvenlik Bakımından Özel Olarak Korunması Gerekenler",
      metni: "Devlet harp ve vazife şehitlerinin dul ve yetimleriyle, malül ve gazileri korur ve toplumda kendilerine yaraşır bir hayat seviyesi sağlar. Devlet, sakatların korunmalarını ve toplum hayatına intibaklarını sağlayıcı tedbirleri alır. Yaşlılar, Devletçe korunur, Yaşlılara Devlet yardımı ve sağlanacak diğer haklar ve kolaylıklar kanunla düzenlenir. Devlet, korunmaya muhtaç çocukların topluma kazandırılması için her türlü tedbiri alır. Bu amaçlarla gerekli teşkilat ve tesisleri kurar veya kurdurur.",
      tuzaklar: {
        aciklama: "Sosyal güvenlik açısından özel olarak korunması gereken grupları düzenler.",
        hap: [
          "Şehit dul/yetimleri, malul ve gaziler özel koruma altındadır",
          "Engelliler (sakatlar), yaşlılar ve korunmaya muhtaç çocuklar Devletçe korunur",
          "Devlet bu amaçla gerekli teşkilat ve tesisleri kurar veya kurdurur"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 61",
        degisiklikler: [
          "1982 Anayasası'nda temel yapısı korunmuştur"
        ],
        onemliNot: "Hangi grupların (şehit yakını, gazi, engelli, yaşlı, çocuk) özel olarak korunduğu seçenekli sorularda sıkça sorulur."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 62,
      maddeNo: 62,
      baslik: "Madde 62 - Yabancı Ülkelerde Çalışan Türk Vatandaşları",
      metni: "Devlet, yabancı ülkelerde çalışan Türk vatandaşlarının aile birliğinin, çocuklarının eğitiminin, kültürel ihtiyaçlarının ve sosyal güvenliklerinin sağlanması, anavatanla bağlarının korunması ve yurda dönüşlerinde yardımcı olunması için gereken tedbirleri alır.",
      tuzaklar: {
        aciklama: "Yurt dışındaki Türk vatandaşlarının korunması ve desteklenmesini düzenler.",
        hap: [
          "Yabancı ülkelerdeki Türk vatandaşlarının aile birliği, eğitimi ve sosyal güvenliği desteklenir",
          "Anavatanla bağların korunması ve yurda dönüşte yardım devletin görevidir"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 62",
        degisiklikler: [
          "1982 Anayasası'nda orijinal haliyle korunmuştur"
        ],
        onemliNot: "Devletin yurt dışındaki vatandaşlarına yönelik anayasal sorumluluğunu vurgular."
      },
      favoriMi: false,
      cipMi: false
    },
    {
      id: 63,
      maddeNo: 63,
      baslik: "Madde 63 - Tarih, Kültür ve Tabiat Varlıklarının Korunması",
      metni: "Devlet, tarih, kültür ve tabiat varlıklarının ve değerlerinin korunmasını sağlar, bu amaçla destekleyici ve teşvik edici tedbirleri alır. Bu varlıklar ve değerlerden özel mülkiyet konusu olanlara getirilecek sınırlamalar ve bu nedenle hak sahiplerine yapılacak yardımlar ve tanınacak muafiyetler kanunla düzenlenir.",
      tuzaklar: {
        aciklama: "Tarih, kültür ve tabiat varlıklarının korunmasını ve mülkiyet sınırlamalarını düzenler.",
        hap: [
          "Tarih, kültür ve tabiat varlıklarını korumak devletin görevidir",
          "Özel mülkiyet konusu varlıklara kısıtlama getirilebilir, yardımlar kanunla düzenlenir"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 63",
        degisiklikler: [
          "1982 Anayasası'nda orijinal haliyle korunmuştur"
        ],
        onemliNot: "Mülkiyet hakkı kamu yararı ve kültürel varlıkların korunması amacıyla kanunla sınırlandırılabilir."
      },
      favoriMi: false,
      cipMi: false
    },
    {
      id: 64,
      maddeNo: 64,
      baslik: "Madde 64 - Sanatın ve Sanatçının Korunması",
      metni: "Devlet, sanat faaliyetlerini ve sanatçıyı korur. Sanat eserlerinin ve sanatçının korunması, değerlendirilmesi, desteklenmesi ve sanat sevgisinin yayılması için gereken tedbirleri alır.",
      tuzaklar: {
        aciklama: "Sanat faaliyetlerinin, sanat eserlerinin ve sanatçının korunmasını düzenler.",
        hap: [
          "Devlet sanat faaliyetlerini ve sanatçıyı korur",
          "Sanat sevgisinin yayılması ve eserlerin değerlendirilmesi için tedbir alınır"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 64",
        degisiklikler: [
          "1982 Anayasası'nda orijinal haliyle korunmuştur"
        ],
        onemliNot: "Sanatın ve sanatçının devlet tarafından doğrudan desteklenmesi anayasal bir ödevdir."
      },
      favoriMi: false,
      cipMi: false
    },
    {
      id: 65,
      maddeNo: 65,
      baslik: "Madde 65 - Devletin İktisadi ve Sosyal Ödevlerinin Sınırları",
      metni: "Devlet, sosyal ve ekonomik alanlarda Anayasa ile belirlenen görevlerini, bu görevlerin amaçlarına uygun öncelikleri gözeterek malî kaynaklarının yeterliliği ölçüsünde yerine getirir.",
      tuzaklar: {
        aciklama: "Devletin sosyal ve ekonomik ödevlerinin yerine getirilmesindeki mali sınırını düzenler.",
        hap: [
          "Devlet sosyal ve ekonomik ödevlerini 'mali kaynaklarının yeterliliği ölçüsünde' yerine getirir",
          "Kişisel ve siyasi haklarda mali kaynak sınırı yoktur, bu sınır SADECE sosyal ve ekonomik haklar için geçerlidir"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 65",
        degisiklikler: [
          "2001 yılında yapılan değişiklikle metin daha esnek ve gerçekçi bir kavrama kavuşturulmuştur"
        ],
        onemliNot: "'Mali kaynakların yeterliliği ölçüsünde' kuralı sınavların en popüler sorularından biridir. Sadece İkinci Kısım Üçüncü Bölümdeki (Sosyal ve Ekonomik Haklar) ödevler için geçerlidir."
      },
      favoriMi: false,
      cipMi: true
    },
{
      id: 66,
      maddeNo: 66,
      baslik: "Madde 66 - Türk Vatandaşlığı",
      metni: "Türk Devletine vatandaşlık bağı ile bağlı olan herkes Türktür. Türk babanın veya Türk ananın çocuğu Türktür. Vatandaşlık, kanunun gösterdiği şartlarla kazanılır ve ancak kanunda belirtilen hallerde kaybedilir. Hiçbir Türk, vatana bağlılıkla bağdaşmayan bir eylemde bulunmadıkça vatandaşlıktan çıkarılamaz. Vatandaşlıktan çıkarma ile ilgili karar ve işlemlere karşı yargı yolu kapatılamaz.",
      tuzaklar: {
        aciklama: "Türk vatandaşlığının kazanılması, kaybedilmesi ve vatandaşlıktan çıkarma şartlarını düzenler.",
        hap: [
          "Türk Devletine vatandaşlık bağı ile bağlı olan herkes Türktür",
          "Türk babanın veya Türk ananın çocuğu Türktür",
          "Vatandaşlıktan çıkarma ile ilgili karar ve işlemlere karşı yargı yolu kapatılamaz"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 66",
        degisiklikler: [
          "2001 yılında yapılan değişiklikle vatandaşlıktan çıkarma kararlarına karşı yargı yolunun kapatılamayacağı kuralı getirilmiştir"
        ],
        onemliNot: "Vatandaşlıktan çıkarma işlemlerine karşı yargı yolunun açık olması temel bir hak güvencesidir."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 67,
      maddeNo: 67,
      baslik: "Madde 67 - Seçme, Seçilme ve Siyasi Faaliyette Bulunma Hakları",
      metni: "Vatandaşlar, kanunda gösterilen şartlara uygun olarak seçme, seçilme ve bağımsız olarak veya bir siyasi parti içinde siyasi faaliyette bulunma ve halkoylamasına katılma hakkına sahiptir. Seçimler ve halkoylaması serbest, eşit, gizli, tek dereceli, genel oy, açık sayım ve döküm esaslarına göre, yargı yönetim ve denetimi altında yapılır. Onsekiz yaşını dolduran her Türk vatandaşı seçme ve halkoylamasına katılma haklarına sahiptir. Silah altında bulunan er ve erbaşlar ile askeri öğrenciler, taksirli suçlardan hüküm giyenler hariç ceza infaz kurumlarında bulunan hükümlüler oy kullanamazlar. Seçim kanunları, temsilde adalet ve yönetimde istikrar ilkelerini bağdaştıracak biçimde düzenlenir. Seçim kanunlarında yapılan değişiklikler, yürürlüğe girdiği tarihten itibaren bir yıl içinde yapılacak seçimlerde uygulanmaz.",
      tuzaklar: {
        aciklama: "Seçme, seçilme ve siyasi hakların esaslarını, oy kullanamayacakları ve seçim kanunu değişiklik kuralını düzenler.",
        hap: [
          "Seçme ve halkoylamasına katılma yaşı 18'dir",
          "Er/erbaşlar, askeri öğrenciler ve taksirli suçlar hariç ceza infaz kurumlarındaki hükümlüler oy kullanamaz",
          "Seçim kanunlarında yapılan değişiklikler yürürlüğe girdiği tarihten itibaren 1 yıl içindeki seçimlerde uygulanmaz"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 67",
        degisiklikler: [
          "1995 ve 2001 yıllarında yapılan değişikliklerle seçme yaşı 18'e indirilmiş, oy kullanamayacaklar netleştirilmiş ve 1 yıl kuralı eklenmiştir"
        ],
        onemliNot: "Seçim kanunu değişikliklerinin 1 yıl içinde yapılacak seçimlerde uygulanamayacağı kuralı en sık sorulan sınav tuzaklarından biridir."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 68,
      maddeNo: 68,
      baslik: "Madde 68 - Siyasi Partilerle İlgili Hükümler (Kurma ve Üyelik)",
      metni: "Vatandaşlar, siyasi parti kurma ve usulüne göre partilere girme ve partilerden ayrılma hakkına sahiptir. Parti üyesi olabilmek için onsekiz yaşını doldurmuş olmak gerekir. Siyasi partiler, demokratik siyasi hayatın vazgeçilmez unsurlarıdır. Siyasi partiler önceden izin almadan kurulurlar. Hakimler ve savcılar, Sayıştay dahil yüksek yargı organları mensupları, kamu kurum ve kuruluşlarının memur statüsündeki görevlileri, yaptıkları hizmet bakımından işçi niteliği taşımayan diğer kamu görevlileri, Silahlı Kuvvetler mensupları ile yükseköğretim öncesi öğrencileri siyasi partilere üye olamazlar.",
      tuzaklar: {
        aciklama: "Siyasi parti kurma, üyelik şartları (18 yaş) ve üye olamayacak kamu görevlilerini düzenler.",
        hap: [
          "Siyasi parti üyesi olabilmek için 18 yaşını doldurmuş olmak gerekir",
          "Siyasi partiler önceden izin almadan kurulur",
          "Hakimler, savcılar, memurlar, TSK mensupları ve yükseköğretim öncesi öğrenciler siyasi partilere üye olamaz"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 68",
        degisiklikler: [
          "1995 yılında yapılan kapsamlı değişiklikle parti kurma ve üyelik şartları yeniden düzenlenmiştir"
        ],
        onemliNot: "Memur statüsündeki kamu görevlileri ve yargı mensuplarının siyasi partilere üye olamayacağı kuralı kesindir."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 69,
      maddeNo: 69,
      baslik: "Madde 69 - Siyasi Partilerin Uyacakları Esaslar ve Kapatılmaları",
      metni: "Siyasi partilerin faaliyetleri demokrasi ilkelerine uygun olur. Siyasi partilerin kapatılması, Yargıtay Cumhuriyet Başsavcısının açacağı dava üzerine Anayasa Mahkemesince kesin olarak karara bağlanır. Bir siyasi partinin temelli kapatılmasına beyan veya faaliyetleriyle sebep olan kurucuları dahil üyeleri, Anayasa Mahkemesinin temelli kapatmaya ilişkin kesin kararının Resmî Gazetede gerekçeli olarak yayımlanmasından başlayarak beş yıl süreyle bir başka partinin kurucusu, üyesi, yöneticisi ve deneticisi olamazlar. Yabancı devletlerden ve uluslararası kuruluşlardan maddi yardım alan siyasi partiler temelli olarak kapatılır.",
      tuzaklar: {
        aciklama: "Siyasi partilerin kapatılma davasını açacak mercii (Yargıtay C. Başsavcısı) ve karar verecek mercii (Anayasa Mahkemesi) düzenler.",
        hap: [
          "Siyasi parti kapatma davasını Yargıtay Cumhuriyet Başsavcısı açar, kararı Anayasa Mahkemesi verir",
          "Kapatılmaya beyan/faaliyetleriyle sebep olanlar 5 yıl süreyle başka partide kurucu/yönetici olamaz",
          "Yabancı devletlerden maddi yardım alan partiler temelli kapatılır"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 69",
        degisiklikler: [
          "1995 ve 2001 yıllarında yapılan değişikliklerle odak olma durumu, devlet yardımı kesilmesi ve kapatılma usulleri detaylandırılmıştır"
        ],
        onemliNot: "Kapatma davasını açanın Yargıtay C. Başsavcısı, kararı verenin ise Anayasa Mahkemesi olduğu bilgisi temel sınav bilgisidir."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 70,
      maddeNo: 70,
      baslik: "Madde 70 - Kamu Hizmetlerine Girme Hakkı",
      metni: "Her Türk, kamu hizmetlerine girme hakkına sahiptir. Hizmete alınmada, görevin gerektirdiği niteliklerden başka hiçbir ayırım gözetilemez.",
      tuzaklar: {
        aciklama: "Kamu hizmetine girme hakkını ve liyakat/eşitlik ilkesini düzenler.",
        hap: [
          "Her Türk kamu hizmetine girme hakkına sahiptir",
          "Hizmete alınmada görevin gerektirdiği niteliklerden başka hiçbir ayrım gözetilemez"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 70",
        degisiklikler: [
          "1982 Anayasası'nda orijinal haliyle korunmuştur"
        ],
        onemliNot: "Kamu hizmetine alımda yalnızca görevin gerektirdiği niteliklerin esas alınması eşitlik ilkesinin yansımasıdır."
      },
      favoriMi: false,
      cipMi: false
    },
    {
      id: 71,
      maddeNo: 71,
      baslik: "Madde 71 - Mal Bildirimi",
      metni: "Kamu hizmetine girenlerin mal bildiriminde bulunmaları ve bu bildirimlerin tekrarlanma süreleri kanunla düzenlenir. Yasama ve yürütme organlarında görev alanlar, bundan istisna edilemez.",
      tuzaklar: {
        aciklama: "Kamu hizmetine girenlerin mal bildirimi yükümlülüğünü düzenler.",
        hap: [
          "Kamu hizmetine girenler mal bildiriminde bulunmak zorundadır",
          "Yasama ve yürütme organlarında görev alanlar bu yükümlülükten istisna edilemez"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 71",
        degisiklikler: [
          "1982 Anayasası'nda orijinal haliyle korunmuştur"
        ],
        onemliNot: "Milletvekilleri ve bakanlar gibi yasama ve yürütme organı üyelerinin mal bildiriminden muaf tutulamayacağı vurgulanmıştır."
      },
      favoriMi: false,
      cipMi: false
    },
    {
      id: 72,
      maddeNo: 72,
      baslik: "Madde 72 - Vatan Hizmeti",
      metni: "Vatan hizmeti, her Türkün hakkı ve ödevidir. Bu hizmetin Silahlı Kuvvetlerde veya kamu kesiminde ne şekilde yerine getirileceği veya getirilmiş sayılacağı kanunla düzenlenir.",
      tuzaklar: {
        aciklama: "Vatan hizmetinin hak ve ödev niteliğini düzenler.",
        hap: [
          "Vatan hizmeti her Türkün hem hakkı hem de ödevidir",
          "Silahlı Kuvvetlerde veya kamu kesiminde yerine getirilme usulü kanunla düzenlenir"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 72",
        degisiklikler: [
          "1982 Anayasası'nda orijinal haliyle korunmuştur"
        ],
        onemliNot: "Vatan hizmetinin hem hak hem de ödev olarak tanımlanması madden karakteristik özelliğidir."
      },
      favoriMi: false,
      cipMi: false
    },
    {
      id: 73,
      maddeNo: 73,
      baslik: "Madde 73 - Vergi Ödevi",
      metni: "Herkes, kamu giderlerini karşılamak üzere, mali gücüne göre, vergi ödemekle yükümlüdür. Vergi yükünün adaletli ve dengeli dağılımı, maliye politikasının sosyal amacıdır. Vergi, resim, harç ve benzeri mali yükümlülükler kanunla konulur, değiştirilir veya kaldırılır. Vergi, resim, harç ve benzeri mali yükümlülüklerin muaflık, istisnalar ve indirimleriyle oranlarına ilişkin hükümlerinde kanunun belirttiği yukarı ve aşağı sınırlar içinde değişiklik yapmak yetkisi Cumhurbaşkanına verilebilir.",
      tuzaklar: {
        aciklama: "Vergi ödevinin mali güce göre alınması, kanunilik ilkesi ve Cumhurbaşkanına yetki devrini düzenler.",
        hap: [
          "Vergi mali güce göre ödenir",
          "Vergi, resim ve harçlar ancak kanunla konulur, değiştirilir veya kaldırılır (Verginin kanuniliği)",
          "Oran ve istisnalarda alt-üst sınırlar içinde kalmak kaydıyla değişiklik yetkisi Cumhurbaşkanına verilebilir"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 73",
        degisiklikler: [
          "2017 yılında yapılan anayasa değişikliğiyle 'Bakanlar Kurulu' ibaresi 'Cumhurbaşkanı' olarak güncellenmiştir"
        ],
        onemliNot: "Vergi, resim ve harçların kanunla konulması (kanunilik) ilkesi vergi hukukunun temel taşıdır."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 74,
      maddeNo: 74,
      baslik: "Madde 74 - Dilekçe, Bilgi Edinme ve Kamu Denetçisine Başvurma Hakkı",
      metni: "Vatandaşlar ve karşılıklılık esası gözetilmek kaydıyla Türkiye’de ikamet eden yabancılar kendileriyle veya kamu ile ilgili dilek ve şikayetleri hakkında, yetkili makamlara ve Türkiye Büyük Millet Meclisine yazı ile başvurma hakkına sahiptir. Kendileriyle ilgili başvurmaların sonucu gecikmeksizin, dilekçe sahiplerine yazılı olarak bildirilir. Herkes, bilgi edinme ve kamu denetçisine başvurma hakkına sahiptir. Türkiye Büyük Millet Meclisi Başkanlığına bağlı olarak kurulan Kamu Denetçiliği Kurumu idarenin işleyişiyle ilgili şikâyetleri inceler. Kamu Başdenetçisi Türkiye Büyük Millet Meclisi tarafından gizli oyla dört yıl için seçilir.",
      tuzaklar: {
        aciklama: "Dilekçe hakkı, bilgi edinme hakkı ve Kamu Denetçiliği Kurumunun esaslarını düzenler.",
        hap: [
          "Dilekçe hakkını vatandaşlar ve karşılıklılık esasıyla Türkiye'de ikamet eden yabancılar kullanabilir",
          "Başvuru sonuçları dilekçe sahiplerine gecikmeksizin yazılı olarak bildirilir",
          "Kamu Başdenetçisi TBMM tarafından gizli oyla 4 yıl için seçilir"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 74",
        degisiklikler: [
          "2010 yılında yapılan değişiklikle 'bilgi edinme hakkı' ve TBMM'ye bağlı 'Kamu Denetçiliği Kurumu (Ombudsmanlık)' sistemi eklenmiştir"
        ],
        onemliNot: "Yabancıların dilekçe hakkını kullanabilmesi için 'karşılıklılık' şartı aranması ve Kamu Başdenetçisinin 4 yıl için seçilmesi sıkça sorulur."
      },
      favoriMi: false,
      cipMi: true
    },
{
      id: 75,
      maddeNo: 75,
      baslik: "Madde 75 - TBMM'nin Kuruluşu",
      metni: "Türkiye Büyük Millet Meclisi genel oyla seçilen altıyüz milletvekilinden oluşur.",
      tuzaklar: {
        aciklama: "TBMM'nin üye tamsayısını ve seçim yöntemini düzenler.",
        hap: [
          "TBMM toplam 600 milletvekilinden oluşur",
          "Milletvekilleri genel oyla seçilir"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 75",
        degisiklikler: [
          "1995 ve 2017 yıllarında yapılan değişikliklerle milletvekili sayısı sırasıyla 550'ye ve ardından 600'e çıkarılmıştır"
        ],
        onemliNot: "Meclisin üye tamsayısının 600 olduğu bilgisi temel referanstır."
      },
      favoriMi: false,
      cipMi: false
    },
    {
      id: 76,
      maddeNo: 76,
      baslik: "Madde 76 - Milletvekili Seçilme Yeterliliği",
      metni: "Onsekiz yaşını dolduran her Türk milletvekili seçilebilir. En az ilkokul mezunu olmayanlar, kısıtlılar, askerlikle ilişiği olanlar, kamu hizmetinden yasaklılar, taksirli suçlar hariç toplam bir yıl veya daha fazla hapis cezasına hüküm giymiş olanlar; yüz kızartıcı suçlar, terör eylemleri ve devlet sırlarını açığa vurma gibi suçlardan biriyle hüküm giymiş olanlar affa uğramış olsalar bile milletvekili seçilemezler. Hakimler, savcılar, memurlar ve TSK mensupları görevlerinden çekilmedikçe aday olamazlar.",
      tuzaklar: {
        aciklama: "Milletvekili seçilme yaşını (18), engel durumları ve adaylık için istifa zorunluluğunu düzenler.",
        hap: [
          "Milletvekili seçilme yaşı 18'dir",
          "Taksirli suçlar hariç 1 yıl ve daha fazla hapis cezası alanlar affa uğrasa bile seçilemez",
          "Yüz kızartıcı suçlar ve terör suçlarından hüküm giyenler affa uğrasa bile milletvekili olamaz",
          "Kamu görevlileri aday olmak için görevlerinden çekilmelidir (istifa zorunluluğu)"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 76",
        degisiklikler: [
          "Seçilme yaşı sırasıyla 30'dan 25'e, ardından 2017'de 18'e düşürülmüştür"
        ],
        onemliNot: "Seçilme yaşının 18 olduğu ve affa uğrasalar dahi bazı ağır/yüz kızartıcı suçlardan hüküm giyenlerin milletvekili olamayacağı en önemli tuzak noktasıdır."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 77,
      maddeNo: 77,
      baslik: "Madde 77 - TBMM ve Cumhurbaşkanının Seçim Dönemi",
      metni: "Türkiye Büyük Millet Meclisi ve Cumhurbaşkanlığı seçimleri beş yılda bir aynı günde yapılır. Süresi biten milletvekili yeniden seçilebilir. Cumhurbaşkanlığı seçiminde birinci oylamada gerekli çoğunluğun sağlanamaması halinde ikinci oylama yapılır.",
      tuzaklar: {
        aciklama: "TBMM ve Cumhurbaşkanlığı seçim sürelerini ve aynı gün yapılma kuralını düzenler.",
        hap: [
          "TBMM ve Cumhurbaşkanlığı seçimleri 5 yılda bir aynı günde yapılır",
          "Süresi biten milletvekili yeniden seçilebilir"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 77",
        degisiklikler: [
          "2017 yılında yapılan anayasa değişikliğiyle seçim süresi 4 yıldan 5 yıla çıkarılmış ve iki seçim birleştirilmiştir"
        ],
        onemliNot: "Her iki seçimin de 5 yılda bir ve aynı günde yapılması 2017 sistemiyle gelmiştir."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 78,
      maddeNo: 78,
      baslik: "Madde 78 - Seçimlerin Geriye Bırakılması ve Ara Seçimler",
      metni: "Savaş sebebiyle yeni seçimlerin yapılmasına imkan görülmezse, Türkiye Büyük Millet Meclisi, seçimlerin bir yıl geriye bırakılmasına karar verebilir. TBMM üyeliklerinde boşalma olması halinde ara seçime gidilir. Ara seçim her seçim döneminde bir defa yapılır ve genel seçimden otuz ay geçmedikçe ara seçime gidilemez. Ancak boşalan üyeliklerin sayısı üye tamsayısının yüzde beşini bulduğu hallerde ara seçimlerin üç ay içinde yapılmasına karar verilir. Genel seçimlere bir yıl kala ara seçimi yapılamaz.",
      tuzaklar: {
        aciklama: "Savaş sebebiyle seçim erteleme şartlarını ve ara seçim kurallarını (30 ay, yüzde beş, 1 yıl kala yasak) düzenler.",
        hap: [
          "Seçimler yalnızca savaş sebebiyle 1 yıl geriye bırakılabilir",
          "Ara seçim her seçim döneminde 1 defa yapılır ve genel seçimden 30 ay geçmedikçe yapılamaz",
          "Üye tamsayısının %5'i kadar boşalma olursa 3 ay içinde ara seçime gidilir",
          "Genel seçimlere 1 yıl kala ara seçim yapılamaz"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 78",
        degisiklikler: [
          "Çeşitli tarihlerde ara seçim süreleri ve istisnalarına ilişkin düzenlemeler yapılmıştır"
        ],
        onemliNot: "30 ay geçmeden yapılamaması, %5 kuralı ve genel seçime 1 kala ara seçim yapılamaması rakamsal sınav sorularının vazgeçilmezidir."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 79,
      maddeNo: 79,
      baslik: "Madde 79 - Seçimlerin Genel Yönetim ve Denetimi",
      metni: "Seçimler, yargı organlarının genel yönetim ve denetimi altında yapılır. Seçimlerin düzen içinde yönetimi, dürüstlüğü, şikayet ve itirazları inceleme ve kesin karara bağlama görevi Yüksek Seçim Kurulunundur. Yüksek Seçim Kurulunun kararları aleyhine başka bir mercie başvurulamaz. Yüksek Seçim Kurulu yedi asıl ve dört yedek üyeden oluşur. Üyelerin altısı Yargıtay, beşi Danıştay Genel Kurullarınca seçilir.",
      tuzaklar: {
        aciklama: "Yüksek Seçim Kurulunun (YSK) yapısını, görevlerini ve kararlarının kesinliğini düzenler.",
        hap: [
          "YSK kararları kesindir, aleyhine başka bir mercie (Anayasa Mahkemesi dahil) başvurulamaz",
          "YSK 7 asıl ve 4 yedek üyeden oluşur",
          "Üyelerin 6'sı Yargıtay, 5'i Danıştay tarafından seçilir"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 79",
        degisiklikler: [
          "1982 Anayasası'ndaki temel yapısı korunmuştur"
        ],
        onemliNot: "YSK kararlarının kesin olması ve üyelerin Yargıtay (6) ile Danıştay'dan (5) seçilmesi temel bilgi konusudur."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 80,
      maddeNo: 80,
      baslik: "Madde 80 - Milletin Temsili",
      metni: "Türkiye Büyük Millet Meclisi üyeleri, seçildikleri bölgeyi veya kendilerini seçenleri değil, bütün Milleti temsil ederler.",
      tuzaklar: {
        aciklama: "Milletvekillerinin temsil niteliğini düzenler.",
        hap: [
          "Milletvekilleri sadece seçildikleri bölgeyi değil, bütün Milleti temsil eder"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 80",
        degisiklikler: [
          "1982 Anayasası'nda orijinal haliyle korunmuştur"
        ],
        onemliNot: "Emredici vekalet mülga olduğundan vekiller tüm milleti temsil eder, bölgeye bağlı değildir."
      },
      favoriMi: false,
      cipMi: false
    },
    {
      id: 81,
      maddeNo: 81,
      baslik: "Madde 81 - Andiçme",
      metni: "Türkiye Büyük Millet Meclisi üyeleri, göreve başlarken Anayasa'ya sadakatten ayrılmayacağına, büyük Türk milleti önünde namusum ve şerefim üzerine andiçerim şeklinde belirlenen metne göre andiçerler.",
      tuzaklar: {
        aciklama: "Milletvekillerinin Meclis'te göreve başlarken yapacağı yemin metnini ve usulünü düzenler.",
        hap: [
          "Milletvekilleri göreve başlarken namus ve şerefleri üzerine andiçerler",
          "Andiçme töreni mecliste göreve başlamanın zorunlu şartıdır"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 81",
        degisiklikler: [
          "1982 Anayasası'nda orijinal haliyle korunmuştur"
        ],
        onemliNot: "Milletvekilleri yemin etmedikçe meclis çalışmalarına katılamaz ve haklardan yararlanamaz."
      },
      favoriMi: false,
      cipMi: false
    },
    {
      id: 82,
      maddeNo: 82,
      baslik: "Madde 82 - Üyelikle Bağdaşmayan İşler",
      metni: "Türkiye Büyük Millet Meclisi üyeleri, Devlet ve diğer kamu tüzel kişileri ile bunlara bağlı kuruluşlarda ve kamu ortaklıklarında yönetim ve denetim kurullarında görev alamazlar, vekili olamazlar, taahhüt işini kabul edemezler, temsilcilik ve hakemlik yapamazlar. Yürütme organının teklif, inha, atama veya onamasına bağlı resmî veya özel herhangi bir işle görevlendirilemezler.",
      tuzaklar: {
        aciklama: "Milletvekillerinin yapamayacağı işleri ve bağdaşmazlık kurallarını düzenler.",
        hap: [
          "Milletvekilleri kamu kurum ve ortaklıklarında yönetim/denetim kurulu üyeliği yapamaz",
          "Hakemlik, temsilcilik ve ticari taahhüt işlerini kabul edemezler",
          "Yürütmenin atama veya onamasına bağlı işlerle görevlendirilemezler"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 82",
        degisiklikler: [
          "2017 yılında yapılan değişiklikle yürütme organının teklifiyle görevlendirilebilme istisnaları daraltılmıştır"
        ],
        onemliNot: "Milletvekilliği ile bağdaşmayan işler arasında hakemlik ve yönetim kurulu üyelikleri yasaktır."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 83,
      maddeNo: 83,
      baslik: "Madde 83 - Yasama Dokunulmazlığı",
      metni: "Türkiye Büyük Millet Meclisi üyeleri, Meclis çalışmalarındaki oy ve sözlerinden, düşüncelerinden sorumlu tutulamazlar (Yasama Sorumluluğu / Mutlak Dokunulmazlık). Seçimden önce veya sonra bir suç işlediği ileri sürülen bir milletvekili, Meclisin kararı olmadıkça tutulamaz, sorguya çekilemez, tutuklanamaz ve yargılanamaz (Yasama Dokunulmazlığı / Nispi Dokunulmazlık). Ağır cezayı gerektiren suçüstü hali ve seçimden önce soruşturmasına başlanılmış olmak kaydıyla Anayasanın 14 üncü maddesindeki durumlar bu hükmün dışındadır.",
      tuzaklar: {
        aciklama: "Yasama sorumsuzluğunu (kürsü dokunulmazlığı) ve yasama dokunulmazlığını düzenler.",
        hap: [
          "Yasama sorumsuzluğu (oy, söz, düşünce) ömür boyu sürer, kaldırılmaz",
          "Yasama dokunulmazlığı geçicidir, Meclis kararıyla kaldırılabilir",
          "Ağır cezayı gerektiren suçüstü halleri dokunulmazlık kapsamı dışındadır"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 83",
        degisiklikler: [
          "Çeşitli dönemlerde dokunulmazlıkların kaldırılmasına ilişkin usullerde düzenlemeler yapılmıştır"
        ],
        onemliNot: "Sorumluluk (kürsü dokunulmazlığı) ile dokunulmazlık kavramları birbirine karıştırılmamalıdır; sorumsuzluk kalkmaz, dokunulmazlık kaldırılabilir."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 84,
      maddeNo: 84,
      baslik: "Madde 84 - Milletvekilliğinin Düşmesi",
      metni: "İstifa eden milletvekilinin milletvekilliğinin düşmesi Genel Kurulca kararlaştırılır. Kesin hüküm giyme veya kısıtlanma halinde düşme, kesin mahkeme kararının Genel Kurula bildirilmesiyle olur. Bağdaşmayan görevde ısrar halinde gizli oyla karar verilir. Meclis çalışmalarına özürsüz veya izinsiz olarak bir ay içerisinde toplam beş birleşim günü katılmayan milletvekilinin milletvekilliğinin düşmesine Genel Kurulca üye tamsayısının salt çoğunluğunun oyuyla karar verilebilir.",
      tuzaklar: {
        aciklama: "Milletvekilliğinin hangi hallerde ve hangi usullerle düşeceğini düzenler.",
        hap: [
          "Kesin hüküm giyme veya kısıtlanmada karar okunmasıyla (bildirimle) düşer",
          "Özürsüz olarak 1 ayda toplam 5 birleşim günü katılmama halinde salt çoğunlukla düşürülebilir",
          "İstifa ve bağdaşmazlıkta Meclis oylaması şarttır"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 84",
        degisiklikler: [
          "1995 yılında yapılan değişiklikle düşme halleri ve oylama usulleri netleştirilmiştir"
        ],
        onemliNot: "1 ayda 5 birleşim günü devamsızlık ve kesin mahkeme kararının 'bildirilmesiyle' düşme en kritik detaylardır."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 85,
      maddeNo: 85,
      baslik: "Madde 85 - İptal İstemi",
      metni: "Yasama dokunulmazlığının kaldırılmasına veya milletvekilliğinin düşmesine karar verilmiş olması hallerinde, karar tarihinden başlayarak yedi gün içerisinde ilgili milletvekili veya bir diğer milletvekili, kararın Anayasaya, kanuna veya İçtüzüğe aykırılığı iddiasıyla iptali için Anayasa Mahkemesine başvurabilir. Anayasa Mahkemesi iptal istemini onbeş gün içerisinde kesin karara bağlar.",
      tuzaklar: {
        aciklama: "Dokunulmazlık kaldırma veya milletvekilliği düşme kararlarına karşı AYM'ye başvuru yolunu düzenler.",
        hap: [
          "Karara karşı 7 gün içinde Anayasa Mahkemesine başvurulabilir",
          "Anayasa Mahkemesi iptal istemini 15 gün içinde kesin karara bağlar"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 85",
        degisiklikler: [
          "1995 yılında yeniden düzenlenerek AYM denetim süresi ve başvuru hakları getirilmiştir"
        ],
        onemliNot: "7 günlük başvuru süresi ve AYM'nin 15 günlük karar süresi rakamsal sınav tuzaklarının favorisidir."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 86,
      maddeNo: 86,
      baslik: "Madde 86 - Ödenek ve Yolluklar",
      metni: "Türkiye Büyük Millet Meclisi üyelerinin ödenek, yolluk ve emeklilik işlemleri kanunla düzenlenir. Ödeneğin aylık tutarı en yüksek Devlet memurunun almakta olduğu miktarı, yolluk da ödenek miktarının yarısını aşamaz. Ödenek ve yollukların en çok üç aylığı önceden ödenebilir.",
      tuzaklar: {
        aciklama: "Milletvekili ödenek, yolluk üst sınırlarını ve ön ödeme şartlarını düzenler.",
        hap: [
          "Ödenek miktarı en yüksek Devlet memurunun aldığı miktarı aşamaz",
          "Yolluk, ödenek miktarının yarısını aşamaz",
          "Ödenek ve yolluklar en çok 3 aylık önceden ödenebilir"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 86",
        degisiklikler: [
          "2001 yılında yapılan değişiklikle ödenek üst sınırları netleştirilmiştir"
        ],
        onemliNot: "En yüksek devlet memuru kıstası ve 3 aylık ön ödeme sınırı bilinmelidir."
      },
      favoriMi: false,
      cipMi: false
    },
    {
      id: 87,
      maddeNo: 87,
      baslik: "Madde 87 - TBMM'nin Görev ve Yetkileri",
      metni: "Türkiye Büyük Millet Meclisinin görev ve yetkileri, kanun koymak, değiştirmek ve kaldırmak; bütçe ve kesinhesap kanun tekliflerini görüşmek ve kabul etmek; para basılmasına ve savaş ilânına karar vermek; milletlerarası andlaşmaların onaylanmasını uygun bulmak, Türkiye Büyük Millet Meclisi üye tamsayısının beşte üç çoğunluğunun kararı ile genel ve özel af ilânına karar vermektir.",
      tuzaklar: {
        aciklama: "TBMM'nin temel görev ve yetki alanlarını düzenler.",
        hap: [
          "Kanun koymak, değiştirmek ve kaldırmak TBMM'nin yetkisidir",
          "Savaş ilânına karar vermek Meclise aittir",
          "Genel ve özel af ilan etmek için üye tamsayısının beşte üç (3/5) çoğunluğu gerekir"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 87",
        degisiklikler: [
          "2017 yılında anayasa değişikliğiyle Bakanlar Kurulu'nu denetim yolları kaldırılmış ve görevler yeniden düzenlenmiştir"
        ],
        onemliNot: "Af ilan etmek için 3/5 çoğunluk (360 milletvekili) şartı kritik bir detaydır."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 88,
      maddeNo: 88,
      baslik: "Madde 88 - Kanunların Teklif Edilmesi ve Görüşülmesi",
      metni: "Kanun teklif etmeye milletvekilleri yetkilidir. Kanun tekliflerinin Türkiye Büyük Millet Meclisinde görüşülme usul ve esasları içtüzükle düzenlenir.",
      tuzaklar: {
        aciklama: "Kanun teklif etme yetkisinin kimlerde olduğunu ve görüşülme usulünü düzenler.",
        hap: [
          "Kanun teklif etmeye sadece milletvekilleri yetkilidir"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 88",
        degisiklikler: [
          "2017 yılında yapılan değişiklikle Bakanlar Kurulu'nun kanun teklif etme yetkisi kaldırılmış, sadece milletvekillerine tanınmıştır"
        ],
        onemliNot: "2017 sistemiyle birlikte yürütmenin (Cumhurbaşkanı/Bakanlar) kanun teklif etme yetkisi kalmamıştır, yalnızca milletvekilleri teklif verebilir."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 89,
      maddeNo: 89,
      baslik: "Madde 89 - Kanunların Cumhurbaşkanınca Yayımlanması",
      metni: "Cumhurbaşkanı, Türkiye Büyük Millet Meclisince kabul edilen kanunları onbeş gün içinde yayımlar. Yayımlanmasını uygun bulmadığı kanunları bir daha görüşülmek üzere gerekçesiyle birlikte Meclise geri gönderir. Meclis geri gönderilen kanunu üye tamsayısının salt çoğunluğuyla aynen kabul ederse kanun yayımlanır.",
      tuzaklar: {
        aciklama: "Cumhurbaşkanının kanunları onaylama ve veto etme (geri gönderme) süresini ve usulünü düzenler.",
        hap: [
          "Cumhurbaşkanı kanunları 15 gün içinde yayımlar veya gerekçesiyle Meclise geri gönderir",
          "Meclis geri gönderilen kanunu üye tamsayısının salt çoğunluğuyla (301) aynen kabul edebilir"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 89",
        degisiklikler: [
          "2001 ve 2017 yıllarında yapılan değişikliklerle kısmi veto ve bütçe kanunlarına ilişkin istisnalar netleştirilmiştir"
        ],
        onemliNot: "Cumhurbaşkanının 15 günlük inceleme süresi ve Meclis'in salt çoğunlukla (301) direnme hakkı temel anayasa kuralıdır."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 90,
      maddeNo: 90,
      baslik: "Madde 90 - Milletlerarası Andlaşmaları Uygun Bulma",
      metni: "Türkiye Cumhuriyeti adına yabancı devletlerle ve milletlerarası kuruluşlarla yapılacak andlaşmaların onaylanması, Türkiye Büyük Millet Meclisinin onaylamayı bir kanunla uygun bulmasına bağlıdır. Usulüne göre yürürlüğe konulmuş milletlerarası andlaşmalar kanun hükmündedir. Bunlar hakkında Anayasaya aykırılık iddiası ile Anayasa Mahkemesine başvurulamaz. Usulüne göre yürürlüğe konulmuş temel hak ve özgürlüklere ilişkin milletlerarası andlaşmalarla kanunların aynı konuda farklı hükümler içermesi nedeniyle çıkabilecek uyuşmazlıklarda milletlerarası andlaşma hükümleri esas alınır.",
      tuzaklar: {
        aciklama: "Milletlerarası antlaşmaların onaylanması, kanun hükmünde olması ve temel haklardaki üstünlüğünü düzenler.",
        hap: [
          "Milletlerarası antlaşmalar kanun hükmündedir ve bunlara karşı Anayasa Mahkemesine (norm denetimi için) başvurulamaz",
          "Temel hak ve özgürlüklere ilişkin uluslararası antlaşmalarla kanunlar çelişirse uluslararası antlaşma hükümleri esas alınır"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 90",
        degisiklikler: [
          "2004 yılında eklenen fıkra ile temel hak ve özgürlüklere ilişkin uluslararası sözleşmelere üstünlük tanınmıştır"
        ],
        onemliNot: "Temel hak ve özgürlükler alanında ulusal kanun ile uluslararası sözleşmenin çatışması halinde uluslararası sözleşmenin üstün tutulması kuralı sınavların vazgeçilmezidir."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 91,
      maddeNo: 91,
      baslik: "Madde 91 - Kanun Hükmünde Kararname Çıkarma Yetkisi",
      metni: "Madde mülga edilmiştir (yürürlükten kaldırılmıştır).",
      tuzaklar: {
        aciklama: "Eski Kanun Hükmünde Kararname (KHK) çıkarma yetkisini düzenleyen mülga maddedir.",
        hap: [
          "Madde 91 2017 yılında mülga edilmiştir (kaldırılmıştır)",
          "Artık parlamentodan yetki alarak KHK çıkarma usulü kalmamıştır"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 91",
        degisiklikler: [
          "2017 Anayasa değişikliğiyle tamamen yürürlükten (mülga) kaldırılmıştır"
        ],
        onemliNot: "2017 rejimiyle birlikte klasik KHK sistemi kalkmış, yerine Cumhurbaşkanlığı Kararnameleri gelmiştir."
      },
      favoriMi: false,
      cipMi: false
    },
    {
      id: 92,
      maddeNo: 92,
      baslik: "Madde 92 - Savaş Hali İlanı ve Silahlı Kuvvet Kullanılmasına İzin Verme",
      metni: "Milletlerarası hukukun meşru saydığı hallerde savaş hali ilanına ve Türk Silahlı Kuvvetlerinin yabancı ülkelere gönderilmesine veya yabancı silahlı kuvvetlerin Türkiye'de bulunmasına izin verme yetkisi Türkiye Büyük Millet Meclisinindir. Meclis tatilde veya ara vermede iken ani bir silahlı saldırıya uğranılması halinde Cumhurbaşkanı da TSK'nın kullanılmasına karar verebilir.",
      tuzaklar: {
        aciklama: "Savaş hali ilanı ve TSK'yı yurt dışına gönderme yetkisinin TBMM'ye ait olduğunu düzenler.",
        hap: [
          "Savaş ilanı ve TSK'yı yurt dışına gönderme yetkisi aslen TBMM'ye aittir",
          "Ani silahlı saldırı halinde tatildeki Meclis adına Cumhurbaşkanı da TSK'nın kullanımına karar verebilir"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 92",
        degisiklikler: [
          "2017 yılında yetki makamları yeni hükümet sistemine uyarlanmıştır"
        ],
        onemliNot: "Asli yetki TBMM'nindir, ancak ani saldırı durumunda Cumhurbaşkanının da yetkisi bulunur."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 93,
      maddeNo: 93,
      baslik: "Madde 93 - Toplanma ve Tatil",
      metni: "Türkiye Büyük Millet Meclisi, her yıl Ekim ayının ilk günü kendiliğinden toplanır. Meclis, bir yasama yılında en çok üç ay tatil yapabilir. Meclis Başkanı doğrudan doğruya veya üyelerin beşte birinin yazılı istemi üzerine Meclisi toplantıya çağırır.",
      tuzaklar: {
        aciklama: "TBMM'nin yıllık kendiliğinden toplanma tarihini (Ekim'in ilk günü) ve toplantıya çağırma usullerini düzenler.",
        hap: [
          "TBMM her yıl Ekim ayının ilk günü kendiliğinden toplanır",
          "Bir yasama yılında en çok 3 ay tatil yapılabilir",
          "Meclis Başkanı veya üyelerin 5'te 1'inin yazılı isteğiyle Meclis toplantıya çağrılabilir"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 93",
        degisiklikler: [
          "1995 ve sonraki değişikliklerle toplantı ve tatil süreleri güncellenmiştir"
        ],
        onemliNot: "Ekim'in ilk günü kendiliğinden toplanma kuralı ve 1/5 üye istemi sıkça sorulur."
      },
      favoriMi: false,
      cipMi: true
    },
  {
      id: 94,
      maddeNo: 94,
      baslik: "Madde 94 - Başkanlık Divanı",
      metni: "Türkiye Büyük Millet Meclisinin Başkanlık Divanı, Meclis Başkanı, Başkanvekilleri, Katip üyeler ve İdare Amirlerinden oluşur. Başkanlık Divanı, siyasi parti gruplarının üye sayısı oranında kurulur. TBMM Başkanı seçimi gizli oyla yapılır. İlk iki oylamada üye tamsayısının üçte iki (400) ve üçüncü oylamada salt çoğunluk (301) aranır. İlk seçilenlerin görev süresi iki yıldır, ikinci devre için seçilenlerin görev süresi o yasama döneminin sonuna kadar devam eder.",
      tuzaklar: {
        aciklama: "TBMM Başkanlık Divanı yapısını, seçim çoğunluklarını ve görev sürelerini (2+3 yıl) düzenler.",
        hap: [
          "Meclis Başkanı seçimi için ilk iki turda üye tamsayısının 2/3'ü (400 oy), üçüncü turda ise salt çoğunluk (301 oy) aranır",
          "Bir yasama döneminde iki seçim yapılır: İlk seçilenler 2 yıl, ikinci devre seçilenler dönemin sonuna kadar görev yapar",
          "Siyasi partiler başkanlık için aday gösteremez (milletvekilleri kendileri aday olur)"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 94",
        degisiklikler: [
          "2010 yılında yapılan değişiklikle görev süreleri 2+3 yıl olarak düzenlenmiştir"
        ],
        onemliNot: "2 yıllık ilk devre ve kalan süre için ikinci devre kuralı ile siyasi parti gruplarının başkan adayı gösterememesi en önemli tuzaklardır."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 95,
      maddeNo: 95,
      baslik: "Madde 95 - İçtüzük Siyasi Parti Grupları ve Kolluk İşleri",
      metni: "Türkiye Büyük Millet Meclisi, çalışmalarını kendi yaptığı içtüzük hükümlerine göre yürütür. Siyasi parti grupları en az yirmi üyeden meydana gelir. Meclisin bütün bina, tesis ve arazisinde kolluk ve yönetim hizmetleri Meclis Başkanlığı eliyle düzenlenir ve yürütülür.",
      tuzaklar: {
        aciklama: "İçtüzük yapımını, siyasi parti grubu kurmak için gereken en az üye sayısını (20) ve meclis kolluk hizmetlerini düzenler.",
        hap: [
          "Siyasi parti grubu kurabilmek için en az 20 milletvekili gerekir",
          "Meclisteki kolluk ve güvenlik hizmetleri Meclis Başkanlığına aittir"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 95",
        degisiklikler: [
          "1982 Anayasası'nda orijinal yapısı korunmuştur"
        ],
        onemliNot: "Grup kurmak için gerekli 20 milletvekili sayısı standart sınav bilgisidir."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 96,
      maddeNo: 96,
      baslik: "Madde 96 - Toplantı ve Karar Yeter Sayısı",
      metni: "Türkiye Büyük Millet Meclisi, yapacağı seçimler dahil bütün işlerinde üye tamsayısının en az üçte biri (200) ile toplanır. TBMM, Anayasada başkaca bir hüküm yoksa toplantıya katılanların salt çoğunluğu ile karar verir; ancak karar yeter sayısı hiçbir şekilde üye tamsayısının dörtte birinin bir fazlasından (151) az olamaz.",
      tuzaklar: {
        aciklama: "TBMM'nin toplantı yeter sayısını (200) ve karar yeter sayısını (katılanların salt çoğunluğu, ancak en az 151) düzenler.",
        hap: [
          "Toplantı yeter sayısı üye tamsayısının 3'te biridir (en az 200 milletvekili)",
          "Karar yeter sayısı toplantıya katılanların salt çoğunluğudur, ancak bu sayı hiçbir şekilde 151'den (1/4 + 1) az olamaz"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 96",
        degisiklikler: [
          "2007 yılında toplantı yeter sayısı kurumu sadeleştirilmiştir"
        ],
        onemliNot: "200 toplantı ve 151 karar alt sınırı rakamsal olarak kesinlikle bilinmelidir."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 97,
      maddeNo: 97,
      baslik: "Madde 97 - Görüşmelerin Açıklığı ve Yayımlanması",
      metni: "Türkiye Büyük Millet Meclisi Genel Kurulundaki görüşmeler açıktır ve tutanak dergisinde tam olarak yayımlanır. Meclis İçtüzük hükümlerine göre kapalı oturumlar yapabilir, bu oturumlardaki görüşmelerin yayımı Meclis kararına bağlıdır.",
      tuzaklar: {
        aciklama: "Meclis görüşmelerinin aleniliğini (açıklığını) ve tutanaklarda yayımlanmasını düzenler.",
        hap: [
          "Meclis görüşmeleri kural olarak açıktır ve tutanakta yayımlanır",
          "Kapalı oturumlardaki görüşmelerin yayımı ancak Meclis kararıyla mümkündür"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 97",
        degisiklikler: [
          "1982 Anayasası'nda orijinal haliyle korunmuştur"
        ],
        onemliNot: "Genel Kurul görüşmelerinin kural olarak açık ve halka açık/tutanaklı olması şeffaflık ilkesidir."
      },
      favoriMi: false,
      cipMi: false
    },
    {
      id: 98,
      maddeNo: 98,
      baslik: "Madde 98 - Bilgi Edinme ve Denetim Yolları",
      metni: "Türkiye Büyük Millet Meclisi; Meclis araştırması, genel görüşme, Meclis soruşturması ve yazılı soru yollarıyla bilgi edinme ve denetleme yetkisini kullanır. Yazılı soru, yazılı olarak en geç onbeş gün içinde cevaplanmak üzere milletvekillerinin, Cumhurbaşkanı yardımcıları ve bakanlara yazılı olarak soru sormalarından ibarettir.",
      tuzaklar: {
        aciklama: "TBMM'nin bilgi edinme ve denetim araçlarını (Meclis araştırması, genel görüşme, Meclis soruşturması, yazılı soru) düzenler.",
        hap: [
          "Yeni sistemde bilgi edinme ve denetim yolları: Meclis araştırması, genel görüşme, Meclis soruşturması ve yazılı sorudur",
          "Yazılı sorular en geç 15 gün içinde Cumhurbaşkanı yardımcıları ve bakanlar tarafından cevaplanmalıdır",
          "Gensoru ve sözlü soru mekanizmaları 2017'de kaldırılmıştır"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 98",
        degisiklikler: [
          "2017 yılında gensoru ve sözlü soru kaldırılmış, denetim yolları yeniden düzenlenmiştir"
        ],
        onemliNot: "Gensorunun ve sözlü sorunun artık anayasada yer almadığı, yazılı sorunun ise 15 gün içinde yanıtlanacağı çok kritik bir sınav bilgisidir."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 99,
      maddeNo: 99,
      baslik: "Madde 99 - Gensoru",
      metni: "Madde mülga edilmiştir (yürürlükten kaldırılmıştır).",
      tuzaklar: {
        aciklama: "Eski gensoru mekanizmasını düzenleyen mülga maddedir.",
        hap: [
          "Madde 99 (Gensoru) 2017 yılında mülga edilmiştir",
          "Artık parlamenter sistemdeki gensoru aracı yürürlükte değildir"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 99",
        degisiklikler: [
          "2017 Anayasa değişikliğiyle tamamen yürürlükten kaldırılmıştır"
        ],
        onemliNot: "Gensorunun kaldırıldığı bilgisi 2017 reformunun ana hatlarındandır."
      },
      favoriMi: false,
      cipMi: false
    },
    {
      id: 100,
      maddeNo: 100,
      baslik: "Madde 100 - Meclis Soruşturması",
      metni: "Madde mülga edilmiştir / Yeni sistemdeki Meclis soruşturması hükümleri 106 ncı maddeye taşınmıştır.",
      tuzaklar: {
        aciklama: "Eski Meclis soruşturması maddesi olup, güncel düzenlemesi 106. madde kapsamına alınmıştır.",
        hap: [
          "Madde 100 mülga edilmiş, Cumhurbaşkanı yardımcısı ve bakanlar hakkındaki soruşturma esasları 106. maddeye bağlanmıştır"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 100",
        degisiklikler: [
          "2017 yılında mülga edilerek ilgili hükümler yürütme denetimi çerçevesinde yeniden konumlandırılmıştır"
        ],
        onemliNot: "Meclis soruşturmasının artık 106. madde çatısı altında yürütüldüğü bilinmelidir."
      },
      favoriMi: false,
      cipMi: false
    },
{
      id: 101,
      maddeNo: 101,
      baslik: "Madde 101 - Cumhurbaşkanının Seçimi ve Nitelikleri",
      metni: "Cumhurbaşkanı, kırk yaşını doldurmuş, yükseköğrenim yapmış, milletvekili seçilme yeterliliğine sahip Türk vatandaşları arasından, doğrudan halk tarafından seçilir. Cumhurbaşkanının görev süresi beş yıldır. Bir kimse en fazla iki defa Cumhurbaşkanı seçilebilir. Cumhurbaşkanlığına, siyasi parti grupları, en son yapılan genel seçimlerde toplam geçerli oyların tek başına veya birlikte en az yüzde beşini almış olan siyasi partiler ile en az yüzbin seçmen aday gösterebilir. Cumhurbaşkanı seçilen milletvekilinin Türkiye Büyük Millet Meclisi üyeliği sona erer. Genel oyla yapılacak seçimde, geçerli oyların salt çoğunluğunu alan aday, Cumhurbaşkanı seçilir. İlk oylamada bu çoğunluk sağlanamazsa, ikinci oylama yapılır.",
      tuzaklar: {
        aciklama: "Cumhurbaşkanının seçilme şartlarını, yaşını, görev süresini ve aday gösterilme usullerini düzenler.",
        hap: [
          "Cumhurbaşkanı seçilme yaşı 40'tır ve yükseköğrenim şartı aranır",
          "Görev süresi 5 yıldır ve bir kimse en fazla 2 defa seçilebilir",
          "Aday göstermek için; siyasi parti grupları, son seçimde %5 oy almış partiler veya en az 100 bin seçmen gereklidir",
          "Seçilen milletvekilinin TBMM üyeliği sona erer"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 101",
        degisiklikler: [
          "2017 yılında yapılan değişikliklerle halk tarafından seçilme, 40 yaş, iki dönem kuralı ve 100 bin seçmenle aday gösterme sistemi getirilmiştir"
        ],
        onemliNot: "40 yaş sınırı, yükseköğrenim şartı ve en fazla iki kez seçilebilme kuralı en önemli sınav noktalarıdır."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 102,
      maddeNo: 102,
      baslik: "Madde 102 - Cumhurbaşkanının Seçimi",
      metni: "Madde mülga edilmiştir (yürürlükten kaldırılmıştır).",
      tuzaklar: {
        aciklama: "Eski Cumhurbaşkanı seçim usullerini düzenleyen mülga maddedir.",
        hap: [
          "Madde 102 2017 yılında mülga edilmiştir (kaldırılmıştır)"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 102",
        degisiklikler: [
          "2017 Anayasa değişikliğiyle tamamen yürürlükten kaldırılmıştır"
        ],
        onemliNot: "Seçim usulleri artık Madde 101 kapsamında düzenlenmektedir."
      },
      favoriMi: false,
      cipMi: false
    },
    {
      id: 103,
      maddeNo: 103,
      baslik: "Madde 103 - Cumhurbaşkanının Andiçmesi",
      metni: "Cumhurbaşkanı, görevine başlarken Türkiye Büyük Millet Meclisi önünde Anayasa'ya, hukukun üstünlüğüne ve tarafsızlığa bağlı kalacağı yönündeki resmi metne göre namusum ve şerefim üzerine andiçer.",
      tuzaklar: {
        aciklama: "Cumhurbaşkanının TBMM önünde yapacağı yemin töreni ve metin esaslarını düzenler.",
        hap: [
          "Cumhurbaşkanı TBMM önünde andiçer",
          "Görevini tarafsızlıkla yerine getireceğine namusu ve şerefi üzerine yemin eder"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 103",
        degisiklikler: [
          "1982 Anayasası'nda metinsel güncellemelerle korunmuştur"
        ],
        onemliNot: "Yirminci yüzyıl parlamenter geleneklerinden kalan resmi yemin metnini içerir."
      },
      favoriMi: false,
      cipMi: false
    },
    {
      id: 104,
      maddeNo: 104,
      baslik: "Madde 104 - Cumhurbaşkanının Görev ve Yetkileri",
      metni: "Cumhurbaşkanı Devletin başıdır. Yürütme yetkisi Cumhurbaşkanına aittir. Cumhurbaşkanı, Devlet başkanı sıfatıyla Türkiye Cumhuriyetini ve Türk Milletinin birliğini temsil eder; Anayasanın uygulanmasını, Devlet organlarının düzenli ve uyumlu çalışmasını temin eder. Yürütme yetkisine ilişkin konularda Cumhurbaşkanlığı kararnamesi çıkarabilir. Temel haklar, kişi hakları ve ödevleri ile siyasi haklar ve ödevler KCK ile düzenlenemez.",
      tuzaklar: {
        aciklama: "Cumhurbaşkanının devletin başı sıfatındaki yetkilerini ve kararname çıkarma sınırlarını düzenler.",
        hap: [
          "Yürütme yetkisi doğrudan Cumhurbaşkanına aittir",
          "Temel haklar, kişi hakları ve siyasi haklar Cumhurbaşkanlığı kararnamesiyle düzenlenemez",
          "Kanunda açıkça düzenlenen veya münhasıran kanunla öngörülen konularda kararname çıkarılamaz",
          "Kanun ile kararname çelişirse kanun hükümleri uygulanır"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 104",
        degisiklikler: [
          "2017 yılında yürütme yetkisinin tamamının Cumhurbaşkanına devriyle baştan aşağı yeniden düzenlenmiştir"
        ],
        onemliNot: "Kararname çıkarılamayacak alanlar (Temel haklar, kişi hakları, siyasi haklar ve kanuna münhasır alanlar) sınavların favori konusudur."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 105,
      maddeNo: 105,
      baslik: "Madde 105 - Cumhurbaşkanının Cezai Sorumluluğu",
      metni: "Cumhurbaşkanı hakkında, bir suç işlediği iddiasıyla TBMM üye tamsayısının salt çoğunluğunun vereceği önergeyle soruşturma açılması istenebilir. Meclis üye tamsayısının beşte üçünün (3/5) gizli oyuyla soruşturma açılmasına karar verebilir. Yüce Divana sevk kararı üye tamsayısının üçte ikisinin (2/3) gizli oyuyla alınır.",
      tuzaklar: {
        aciklama: "Cumhurbaşkanının cezai sorumluluğu, soruşturma açılması ve Yüce Divana sevk nisaplarını düzenler.",
        hap: [
          "Soruşturma önergesi için salt çoğunluk (301), soruşturma açılması için 3/5 çoğunluk (360) gerekir",
          "Yüce Divana sevk kararı için üye tamsayısının 3/3 değil, 3/2 (üçte iki) çoğunluğu (400) şarttır",
          "Hakkında soruşturma açılmasına karar verilen Cumhurbaşkanı seçim kararı alamaz"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 105",
        degisiklikler: [
          "2017 yılında cezai sorumluluk mekanizmaları yeni sisteme uyarlanarak ağırlaştırılmış çoğunluklara bağlanmıştır"
        ],
        onemliNot: "Soruşturma açılması için 3/5 (360), Yüce Divana sevk için ise 2/3 (400) çoğunluk gerekliliği mutlaka bilinmelidir."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 106,
      maddeNo: 106,
      baslik: "Madde 106 - Cumhurbaşkanı Yardımcıları, Vekalet ve Bakanlar",
      metni: "Cumhurbaşkanı, seçildikten sonra bir veya daha fazla Cumhurbaşkanı yardımcısı atayabilir. Makamın boşalması halinde 45 gün içinde seçim yapılır. Cumhurbaşkanı yardımcıları ve bakanlar milletvekili seçilme yeterliliğine sahip olanlar arasından atanır. TBMM üyeleri bakan veya yardımcısı atanırsa üyelikleri sona erer.",
      tuzaklar: {
        aciklama: "Cumhurbaşkanı yardımcıları, bakanların atanması, makamın boşalması ve vekalet esaslarını düzenler.",
        hap: [
          "Makamın boşalması halinde 45 gün içinde Cumhurbaşkanı seçimi yapılır",
          "Milletvekilleri bakan veya yardımcısı atanırsa milletvekillikleri sona erer",
          "Bakanlıkların kurulması ve kaldırılması Cumhurbaşkanlığı kararnamesiyle düzenlenir"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 106",
        degisiklikler: [
          "2017 yılında Başbakanlık makamı kaldırılmış, Cumhurbaşkanı yardımcıları ve bakanlık sistemi getirilmiştir"
        ],
        onemliNot: "Boşalma durumunda 45 gün içinde seçim yapılması ve milletvekilliğinin sona ermesi kritik kurallardır."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 107,
      maddeNo: 107,
      baslik: "Madde 107 - Cumhurbaşkanı Genel Sekreterliği",
      metni: "Madde mülga edilmiştir (yürürlükten kaldırılmıştır).",
      tuzaklar: {
        aciklama: "Eski Genel Sekreterlik teşkilatını düzenleyen mülga maddedir.",
        hap: [
          "Madde 107 2017 yılında mülga edilmiştir (kaldırılmıştır)"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 107",
        degisiklikler: [
          "2017 Anayasa değişikliğiyle tamamen yürürlükten kaldırılmıştır"
        ],
        onemliNot: "Teşkilat yapısı Cumhurbaşkanlığı kararnamelerine devredilmiştir."
      },
      favoriMi: false,
      cipMi: false
    },
    {
      id: 108,
      maddeNo: 108,
      baslik: "Madde 108 - Devlet Denetleme Kurulu",
      metni: "İdarenin hukuka uygunluğunun ve verimliliğinin sağlanması amacıyla Cumhurbaşkanlığına bağlı kurulan Devlet Denetleme Kurulu, Cumhurbaşkanının isteği üzerine tüm kamu kurumlarında inceleme ve denetleme yapar. Yargı organları Devlet Denetleme Kurulunun görev alanı dışındadır.",
      tuzaklar: {
        aciklama: "Devlet Denetleme Kurulu'nun (DDK) yapısını, kime bağlı olduğunu ve denetim dışı alanları düzenler.",
        hap: [
          "DDK doğrudan Cumhurbaşkanlığına bağlıdır",
          "Yargı organları Devlet Denetleme Kurulu'nun görev alanı dışındadır",
          "Başkan ve üyeleri Cumhurbaşkanınca atanır"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 108",
        degisiklikler: [
          "2017 yılında DDK'nın başkanı ve üyelerinin atanması ile işleyişine dair yetkiler Cumhurbaşkanına verilmiştir"
        ],
        onemliNot: "Yargı organlarının DDK denetimi dışında olması sınavların klasik ve vazgeçilmez sorusudur."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 109,
      maddeNo: 109,
      baslik: "Madde 109 - Bakanlar Kurulu (Kuruluş)",
      metni: "Madde mülga edilmiştir (yürürlükten kaldırılmıştır).",
      tuzaklar: {
        aciklama: "Eski Bakanlar Kurulu kuruluş hükümlerini düzenleyen mülga maddedir.",
        hap: [
          "Madde 109 2017 yılında mülga edilmiştir (kaldırılmıştır)"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 109",
        degisiklikler: [
          "2017 yılında parlamenter sistemin mülga olmasıyla yürürlükten kaldırılmıştır"
        ],
        onemliNot: "Bakanlar Kurulu sistemi tarihe karışmıştır."
      },
      favoriMi: false,
      cipMi: false
    },
    {
      id: 110,
      maddeNo: 110,
      baslik: "Madde 110 - Göreve Başlama ve Güvenoyu",
      metni: "Madde mülga edilmiştir (yürürlükten kaldırılmıştır).",
      tuzaklar: {
        aciklama: "Eski hükümet güvenoyu mekanizmasını düzenleyen mülga maddedir.",
        hap: [
          "Madde 110 2017 yılında mülga edilmiştir (kaldırılmıştır)"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 110",
        degisiklikler: [
          "2017 Anayasa değişikliğiyle tamamen yürürlükten kaldırılmıştır"
        ],
        onemliNot: "Yeni sistemde meclisten güvenoyu alma zorunluluğu yoktur."
      },
      favoriMi: false,
      cipMi: false
    },
    {
      id: 111,
      maddeNo: 111,
      baslik: "Madde 111 - Görev Sırasında Güvenoyu",
      metni: "Madde mülga edilmiştir (yürürlükten kaldırılmıştır).",
      tuzaklar: {
        aciklama: "Eski görev sırasında güvenoyu isteme hükümlerini düzenleyen mülga maddedir.",
        hap: [
          "Madde 111 2017 yılında mülga edilmiştir (kaldırılmıştır)"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 111",
        degisiklikler: [
          "2017 Anayasa değişikliğiyle tamamen yürürlükten kaldırılmıştır"
        ],
        onemliNot: "Güvenoyu müessesesi mülga edilmiştir."
      },
      favoriMi: false,
      cipMi: false
    },
    {
      id: 112,
      maddeNo: 112,
      baslik: "Madde 112 - Görev ve Siyasi Sorumluluk",
      metni: "Madde mülga edilmiştir (yürürlükten kaldırılmıştır).",
      tuzaklar: {
        aciklama: "Eski Bakanlar Kurulu siyasi sorumluluğunu düzenleyen mülga maddedir.",
        hap: [
          "Madde 112 2017 yılında mülga edilmiştir (kaldırılmıştır)"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 112",
        degisiklikler: [
          "2017 Anayasa değişikliğiyle tamamen yürürlükten kaldırılmıştır"
        ],
        onemliNot: "Bakanlar artık doğrudan Cumhurbaşkanına karşı sorumludur."
      },
      favoriMi: false,
      cipMi: false
    },
    {
      id: 113,
      maddeNo: 113,
      baslik: "Madde 113 - Bakanlıkların Kurulması ve Bakanlar",
      metni: "Madde mülga edilmiştir (yürürlükten kaldırılmıştır).",
      tuzaklar: {
        aciklama: "Eski bakanlık kuruluş hükümlerini düzenleyen mülga maddedir.",
        hap: [
          "Madde 113 2017 yılında mülga edilmiştir (kaldırılmıştır)"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 113",
        degisiklikler: [
          "2017 Anayasa değişikliğiyle tamamen yürürlükten kaldırılmıştır"
        ],
        onemliNot: "Bakanlıkların yapısı artık kararnameyle düzenlenmektedir."
      },
      favoriMi: false,
      cipMi: false
    },
    {
      id: 114,
      maddeNo: 114,
      baslik: "Madde 114 - Seçimlerde Geçici Bakanlar Kurulu",
      metni: "Madde mülga edilmiştir (yürürlükten kaldırılmıştır).",
      tuzaklar: {
        aciklama: "Eski seçim dönemindeki geçici bakanlar kurulunu (seçim hükümeti) düzenleyen mülga maddedir.",
        hap: [
          "Madde 114 2017 yılında mülga edilmiştir (kaldırılmıştır)"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 114",
        degisiklikler: [
          "2017 Anayasa değişikliğiyle tamamen yürürlükten kaldırılmıştır"
        ],
        onemliNot: "Tarafsız seçim bakanları uygulaması kalkmıştır."
      },
      favoriMi: false,
      cipMi: false
    },
    {
      id: 115,
      maddeNo: 115,
      baslik: "Madde 115 - Tüzükler",
      metni: "Madde mülga edilmiştir (yürürlükten kaldırılmıştır).",
      tuzaklar: {
        aciklama: "Eski tüzük çıkarma yetkisini düzenleyen mülga maddedir.",
        hap: [
          "Madde 115 2017 yılında mülga edilmiştir (kaldırılmıştır)"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 115",
        degisiklikler: [
          "2017 Anayasa değişikliğiyle tamamen yürürlükten kaldırılmıştır"
        ],
        onemliNot: "Türk hukuk sisteminde 'tüzük' çıkarılması uygulaması mülga olmuştur."
      },
      favoriMi: false,
      cipMi: false
    },
    {
      id: 116,
      maddeNo: 116,
      baslik: "Madde 116 - TBMM ve Cumhurbaşkanı Seçimlerinin Yenilenmesi",
      metni: "Türkiye Büyük Millet Meclisi, üye tamsayısının beşte üç (3/5) çoğunluğuyla seçimlerin yenilenmesine karar verebilir. Cumhurbaşkanı da seçimlerin yenilenmesine karar verebilir. Seçimlerin birlikte yenilenmesine karar verilir ve bu durumda her iki seçim aynı günde yapılır.",
      tuzaklar: {
        aciklama: "TBMM ve Cumhurbaşkanının erken seçim (seçimlerin yenilenmesi) kararı alma şartlarını düzenler.",
        hap: [
          "TBMM üye tamsayısının 3/5 çoğunluğuyla (360 milletvekili) seçimlerin yenilenmesine karar verebilir",
          "Cumhurbaşkanı da tek başına seçimlerin yenilenmesine karar verebilir",
          "Seçimler yenilendiğinde TBMM ve Cumhurbaşkanlığı seçimleri birlikte yapılır"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 116",
        degisiklikler: [
          "2017 yılında karşılıklı fesih/seçim yenileme yetkisi getirilmiştir"
        ],
        onemliNot: "Meclis'in 3/5 (360) çoğunlukla, Cumhurbaşkanının ise tek başına seçim yenileme kararı alabilmesi temel kuraldır."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 117,
      maddeNo: 117,
      baslik: "Madde 117 - Başkomutanlık ve Genelkurmay Başkanlığı",
      metni: "Başkomutanlık, Türkiye Büyük Millet Meclisinin manevi varlığından ayrılamaz ve Cumhurbaşkanı tarafından temsil olunur. Milli güvenliğin sağlanmasından ve TSK'nın yurt savunmasına hazırlanmasından Cumhurbaşkanı TBMM'ye karşı sorumludur.",
      tuzaklar: {
        aciklama: "Başkomutanlığın manevi varlığını, Cumhurbaşkanının sorumluluğunu ve Genelkurmay Başkanının atanmasını düzenler.",
        hap: [
          "Başkomutanlık TBMM'nin manevi varlığından ayrılamaz, Cumhurbaşkanı tarafından temsil edilir",
          "Milli savunmadan ve TSK'nın hazırlanmasından Cumhurbaşkanı TBMM'ye karşı sorumludur",
          "Genelkurmay Başkanı Cumhurbaşkanınca atanır"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 117",
        degisiklikler: [
          "2017 yılında yapılan değişikliklerle askeri makamların bağlılık yapıları yeni sisteme uyarlanmıştır"
        ],
        onemliNot: "Başkomutanlığın TBMM'nin manevi varlığından ayrılamaması en önemli hukuki naddedir."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 118,
      maddeNo: 118,
      baslik: "Madde 118 - Milli Güvenlik Kurulu",
      metni: "Millî Güvenlik Kurulu; Cumhurbaşkanının başkanlığında, Cumhurbaşkanı yardımcıları, Adalet, Millî Savunma, İçişleri, Dışişleri Bakanları, Genelkurmay Başkanı, Kara, Deniz ve Hava kuvvetleri komutanlarından kurulur. Kurul, devletin milli güvenlik siyaseti hakkında Cumhurbaşkanına tavsiye kararları bildirir.",
      tuzaklar: {
        aciklama: "Milli Güvenlik Kurulu'nun (MGK) üyelerini ve tavsiye niteliğindeki kararlarını düzenler.",
        hap: [
          "MGK Cumhurbaşkanının başkanlığında toplanır",
          "Cumhurbaşkanı katılamadığında toplantıya Cumhurbaşkanı yardımcısı başkanlık eder",
          "MGK kararları tavsiye niteliğindedir, Cumhurbaşkanınca değerlendirilir"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 118",
        degisiklikler: [
          "2001 ve 2017 yıllarında yapılan değişikliklerle kurulun yapısı ve sivilleşme düzeyi güçlendirilmiştir"
        ],
        onemliNot: "MGK kararlarının tavsiye niteliğinde olması ve Cumhurbaşkanı yardımcısının vekalet edeceği durumlar sıkça sorulur."
      },
      favoriMi: false,
      cipMi: true
    },
   {
      id: 119,
      maddeNo: 119,
      baslik: "Madde 119 - Olağanüstü Hal Yönetimi",
      metni: "Cumhurbaşkanı; savaş, seferberlik, şiddet hareketlerinin yaygınlaşması veya ağır ekonomik bunalım hallerinde yurdun tamamında veya bir bölgesinde süresi altı ayı geçmemek üzere olağanüstü hal (OHAL) ilan edebilir. OHAL kararı Resmi Gazetede yayımlanır ve aynı gün TBMM'nin onayına sunulur. Meclis süreyi kısaltabilir, uzatabilir veya kaldırabilir.",
      tuzaklar: {
        aciklama: "Olağanüstü hal ilan etme yetkisini (Cumhurbaşkanı), süresini (en çok 6 ay) ve Meclis onay süreçlerini düzenler.",
        hap: [
          "OHAL ilan etme yetkisi Cumhurbaşkanına aittir, süresi en çok 6 ayı geçemez",
          "OHAL kararı aynı gün TBMM onayına sunulur",
          "TBMM her defasında 4 ayı geçmemek üzere OHAL süresini uzatabilir (savaş halleri hariç)",
          "OHAL döneminde çıkarılan kararnameler 3 ay içinde TBMM'de görüşülüp karara bağlanmalıdır, aksi halde kendiliğinden kalkar"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 119",
        degisiklikler: [
          "2017 yılında sıkıyönetim kaldırılmış ve OHAL ilan yetkisi doğrudan Cumhurbaşkanına verilmiştir"
        ],
        onemliNot: "OHAL süresinin en çok 6 ay olması, Meclis uzatma sınırının 4 ay olması ve sıkıyönetimin anayasadan çıkarıldığı bilgisi kritik önem taşır."
      },
      favoriMi: false,
      cipMi: true
    },
{
      id: 120,
      maddeNo: 120,
      baslik: "Madde 120 - Şiddet Olayları Sebebiyle Olağanüstü Hal İlanı",
      metni: "Madde mülga edilmiştir (yürürlükten kaldırılmıştır).",
      tuzaklar: {
        aciklama: "Eski şiddet olayları nedeniyle OHAL ilanını düzenleyen mülga maddedir.",
        hap: [
          "Madde 120 2017 yılında mülga edilmiştir (kaldırılmıştır)"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 120",
        degisiklikler: [
          "2017 Anayasa değişikliğiyle olağanüstü hal türleri tek bir çatı altında (Madde 119) birleştirilerek bu madde mülga edilmiştir"
        ],
        onemliNot: "Tüm OHAL nedenleri artık tek bir maddede (Madde 119) düzenlenmektedir."
      },
      favoriMi: false,
      cipMi: false
    },
    {
      id: 121,
      maddeNo: 121,
      baslik: "Madde 121 - Olağanüstü Hallerle İlgili Düzenleme",
      metni: "Madde mülga edilmiştir (yürürlükten kaldırılmıştır).",
      tuzaklar: {
        aciklama: "Eski OHAL rejimi hükümlerini düzenleyen mülga maddedir.",
        hap: [
          "Madde 121 2017 yılında mülga edilmiştir (kaldırılmıştır)"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 121",
        degisiklikler: [
          "2017 Anayasa değişikliğiyle tamamen yürürlükten kaldırılmıştır"
        ],
        onemliNot: "OHAL rejiminin uygulama usulleri Madde 119 kapsamına alınmıştır."
      },
      favoriMi: false,
      cipMi: false
    },
    {
      id: 122,
      maddeNo: 122,
      baslik: "Madde 122 - Sıkıyönetim, Seferberlik ve Savaş Hali",
      metni: "Madde mülga edilmiştir (yürürlükten kaldırılmıştır).",
      tuzaklar: {
        aciklama: "Eski sıkıyönetim rejimini düzenleyen mülga maddedir.",
        hap: [
          "Madde 122 2017 yılında mülga edilmiştir (kaldırılmıştır)",
          "Anayasadan 'sıkıyönetim' kavramı tamamen çıkarılmıştır"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 122",
        degisiklikler: [
          "2017 Anayasa değişikliğiyle sıkıyönetim uygulaması kaldırılmış ve madde mülga edilmiştir"
        ],
        onemliNot: "Sıkıyönetim kavramının anayasadan kaldırıldığı bilgisi sınavlar için çok önemlidir."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 123,
      maddeNo: 123,
      baslik: "Madde 123 - İdarenin Bütünlüğü ve Kamu Tüzelkişiliği",
      metni: "İdare, kuruluş ve görevleriyle bir bütündür ve kanunla düzenlenir. İdarenin kuruluş ve görevleri, merkezden yönetim ve yerinden yönetim esaslarına dayanır. Kamu tüzelkişiliği, kanunla veya Cumhurbaşkanlığı kararnamesiyle kurulur.",
      tuzaklar: {
        aciklama: "İdarenin bütünlüğü ilkesini, merkezden/yerinden yönetim esaslarını ve kamu tüzel kişiliğinin kuruluş kaynağını düzenler.",
        hap: [
          "İdare kuruluş ve görevleriyle bir bütündür ve kanunla düzenlenir",
          "Kamu tüzelkişiliği SADECE kanunla veya Cumhurbaşkanlığı kararnamesiyle kurulur (idari işlemle/yönetmelikle kurulamaz)"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 123",
        degisiklikler: [
          "2017 yılında yapılan değişiklikle kamu tüzelkişiliğinin Cumhurbaşkanlığı kararnamesiyle de kurulabileceği hükmü eklenmiştir"
        ],
        onemliNot: "Kamu tüzel kişiliğinin kanun veya CBK ile kurulabileceği, tüzük veya yönetmelikle kurulamayacağı sık sorulan bir idare hukuku kuralıdır."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 124,
      maddeNo: 124,
      baslik: "Madde 124 - Yönetmelikler",
      metni: "Cumhurbaşkanı, bakanlıklar ve kamu tüzelkişileri, kendi görev alanlarını ilgilendiren kanunların ve Cumhurbaşkanlığı kararnamelerinin uygulanmasını sağlamak üzere ve bunlara aykırı olmamak şartıyla, yönetmelikler çıkarabilirler.",
      tuzaklar: {
        aciklama: "Yönetmelik çıkarma yetkisine sahip makamları ve yönetmeliklerin dayanağını düzenler.",
        hap: [
          "Cumhurbaşkanı, bakanlıklar ve kamu tüzelkişileri yönetmelik çıkarabilir",
          "Yönetmelikler kanunlara ve Cumhurbaşkanlığı kararnamelerine aykırı olamaz",
          "Her kamu tüzelkişisi yönetmelik çıkaramaz; sadece Cumhurbaşkanı, bakanlıklar ve kamu tüzelkişileri (üniversiteler, kamu kurumu niteliğindeki meslek kuruluşları, mahalli idareler vb.) çıkarabilir"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 124",
        degisiklikler: [
          "2017 yılında 'Başbakanlık' ibaresi metinden çıkarılmış, yetki Cumhurbaşkanına verilmiştir"
        ],
        onemliNot: "Yönetmelik çıkarma yetkisine sahip olanlar arasında Başbakanlık kalmamıştır; tüzelkişiliği olan birimler çıkarabilir."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 125,
      maddeNo: 125,
      baslik: "Madde 125 - Yargı Yolu",
      metni: "İdarenin her türlü eylem ve işlemlerine karşı yargı yolu açıktır. Yargı yetkisi, idarî eylem ve işlemlerin hukuka uygunluğunun denetimi ile sınırlı olup, hiçbir surette yerindelik denetimi şeklinde kullanılamaz. İdare, kendi eylem ve işlemlerinden doğan zararı ödemekle yükümlüdür.",
      tuzaklar: {
        aciklama: "İdari işlemlerin yargı denetimini, yerindelik denetimi yasağını ve idarenin sorumluluğunu düzenler.",
        hap: [
          "İdarenin her türlü eylem ve işlemine karşı kural olarak yargı yolu açıktır",
          "Yargı yetkisi hukuka uygunluk denetimi ile sınırlıdır, asla yerindelik denetimi yapılamaz",
          "İdare kendi eylem ve işlemlerinden doğan zararı ödemekle yükümlüdür (kusursuz veya kusurlu sorumluluk)"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 125",
        degisiklikler: [
          "Çeşitli yıllarda yapılan eklemelerle Yüksek Askeri Şura kararları ve tahkim istisnaları netleştirilmiştir"
        ],
        onemliNot: "Yargının asla 'yerindelik denetimi' yapamayacağı kuralı idare hukukunun temel taşıdır."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 126,
      maddeNo: 126,
      baslik: "Madde 126 - Merkezi İdare",
      metni: "Türkiye, merkezi idare kuruluşu bakımından, coğrafya durumuna, ekonomik şartlara ve kamu hizmetlerinin gereklerine göre, illere; iller de diğer kademeli bölümlere ayırılır. İllerin idaresi yetki genişliği esasına dayanır.",
      tuzaklar: {
        aciklama: "Merkezi idare teşkilatının coğrafi ve kademeli yapısını ile il idaresindeki yetki genişliğini düzenler.",
        hap: [
          "Türkiye merkezi idare bakımından illere, iller de kademeli bölümlere ayrılır",
          "İllerin idaresi 'yetki genişliği' esasına dayanır (merkezden yönetimin istisnasıdır)"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 126",
        degisiklikler: [
          "1982 Anayasası'nda orijinal haliyle korunmuştur"
        ],
        onemliNot: "Valilere tanınan 'yetki genişliği' kavramı merkezden yönetimin yumuşatılmış biçimidir ve sadece illerde uygulanır."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 127,
      maddeNo: 127,
      baslik: "Madde 127 - Mahalli İdareler",
      metni: "Mahalli idareler; il, belediye veya köy halkının mahalli müşterek ihtiyaçlarını karşılamak üzere kurulmuş kamu tüzelkişileridir. Organları seçmenler tarafından seçilerek oluşturulur. Mahalli idarelerin seçimleri beş yılda bir yapılır. Merkezi idare, mahalli idareler üzerinde idari vesayet yetkisine sahiptir.",
      tuzaklar: {
        aciklama: "Mahalli idarelerin (yerel yönetimlerin) niteliğini, seçim sürelerini ve merkezi idarenin vesayet yetkisini düzenler.",
        hap: [
          "Mahalli idareler (il, belediye, köy) seçmenler tarafından seçilen organlardan oluşur",
          "Mahalli idare seçimleri 5 yılda bir yapılır",
          "Merkezi idarenin yerel yönetimler üzerindeki denetim yetkisinin adı 'idari vesayet'tir"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 127",
        degisiklikler: [
          "1995 ve 2017 yıllarında yapılan değişikliklerle seçim süreleri ve vesayet denetimi esasları güncellenmiştir"
        ],
        onemliNot: "Merkezi idarenin yerel yönetimler üzerindeki denetim yetkisinin 'idari vesayet' olduğu (vesayet yetkisinin kanunla verildiği) sıkça sorulur."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 128,
      maddeNo: 128,
      baslik: "Madde 128 - Kamu Hizmeti Görevlileriyle İlgili Genel İlkeler",
      metni: "Devletin ve kamu tüzelkişilerinin genel idare esaslarına göre yürütmekle yükümlü oldukıkları kamu hizmetlerinin gerektirdiği asli ve sürekli görevler, memurlar ve diğer kamu görevlileri eliyle görülür. Memurların özlük işleri kanunla düzenlenir.",
      tuzaklar: {
        aciklama: "Asli ve sürekli kamu hizmetlerinin memurlar eliyle yürütülmesini ve kanunilik ilkesini düzenler.",
        hap: [
          "Asli ve sürekli kamu hizmetleri memurlar ve diğer kamu görevlileri eliyle görülür",
          "Memurların nitelikleri, atanmaları, hakları ve özlük işleri kanunla düzenlenir"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 128",
        degisiklikler: [
          "2010 yılında mali ve sosyal haklara ilişkin toplu sözleşme hükümlerinin saklı olduğu istisnası eklenmiştir"
        ],
        onemliNot: "Asli ve sürekli görevlerin memurlar eliyle yürütülmesi kuralı idari teşkilatın temel prensibidir."
      },
      favoriMi: false,
      cipMi: false
    },
    {
      id: 129,
      maddeNo: 129,
      baslik: "Madde 129 - Memurların Sorumlulukları ve Disiplin Güvencesi",
      metni: "Memurlar ve diğer kamu görevlileri Anayasa ve kanunlara sadık kalarak faaliyette bulunmakla yükümlüdürler. Memurlara savunma hakkı tanınmadıkça disiplin cezası verilemez. Disiplin kararları yargı denetimi dışında bırakılamaz. Memurların kusurlarından doğan tazminat davaları idare aleyhine açılır.",
      tuzaklar: {
        aciklama: "Memurların sorumluluklarını, disiplin cezalarındaki savunma hakkını ve yargı denetimini düzenler.",
        hap: [
          "Memurlara savunma hakkı tanınmadıkça disiplin cezası verilemez",
          "Disiplin kararları asla yargı denetimi dışında bırakılamaz",
          "Memurların görev kusurundan doğan davalar kendilerine değil, doğrudan idare aleyhine açılır"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 129",
        degisiklikler: [
          "2010 yılında disiplin kararlarının yargı denetimi dışında bırakılamayacağı kuralı kesin olarak eklenmiştir"
        ],
        onemliNot: "Disiplin cezalarında savunma hakkının zorunluluğu ve kararların yargı denetimine açılmış olması çok önemli bir güvencedir."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 130,
      maddeNo: 130,
      baslik: "Madde 130 - Yükseköğretim Kurumları (Üniversiteler)",
      metni: "Çağdaş eğitim-öğretim esaslarına dayanan üniversiteler, kamu tüzelkişiliğine ve bilimsel özerkliğe sahip olarak Devlet tarafından kanunla kurulur. Rektörler Cumhurbaşkanınca, dekanlar ise Yükseköğretim Kurulunca seçilir ve atanır. Üniversiteler yargı dışındaki makamlarca görevden uzaklaştırılamaz.",
      tuzaklar: {
        aciklama: "Üniversitelerin hukuki statüsünü, bilimsel özerkliğini, rektör-dekan atama usullerini düzenler.",
        hap: [
          "Üniversiteler kamu tüzel kişiliğine ve bilimsel özerkliğe sahiptir, kanunla kurulur",
          "Rektörler Cumhurbaşkanınca, dekanlar Yükseköğretim Kurulu (YÖK) tarafından atanır",
          "Üniversite organları ve öğretim elemanları yetkili organlar dışında kalan makamlarca görevden uzaklaştırılamaz"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 130",
        degisiklikler: [
          "Çeşitli yıllarda yapılan anayasa değişiklikleriyle rektörlerin atanma usulleri ve vakıf üniversitelerine ilişkin hükümler düzenlenmiştir"
        ],
        onemliNot: "Rektörü Cumhurbaşkanı'nın, dekanları ise YÖK'ün atadığı bilgisi sınavların klasik ve net sorularındandır."
      },
      favoriMi: false,
      cipMi: true
    },

{
      id: 131,
      maddeNo: 131,
      baslik: "Madde 131 - Yükseköğretim Kurulu (YÖK)",
      metni: "Yükseköğretim kurumlarının eğitim-öğretim ve bilimsel araştırma faaliyetlerini yönlendirmek, planlamak ve denetlemek amacıyla Yükseköğretim Kurulu kurulur. Yükseköğretim Kurulu, üniversiteler tarafından seçilen adaylar ile Cumhurbaşkanınca doğrudan seçilen ve atanan üyelerden kurulan bir kamu organıdır.",
      tuzaklar: {
        aciklama: "Yükseköğretim Kurulu'nun (YÖK) kuruluş amacını ve üye atama esaslarını düzenler.",
        hap: [
          "YÖK, yükseköğretim faaliyetlerini planlamak ve denetlemek amacıyla kurulmuştur",
          "YÖK üyeleri üniversiteler tarafından seçilenler ve Cumhurbaşkanınca atanan/seçilenlerden oluşur"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 131",
        degisiklikler: [
          "2004 yılında üyelerin seçimi ve rektörlük/öğretim üyeliğinde başarılı profesörlere öncelik verilmesine ilişkin düzenlemeler yapılmıştır"
        ],
        onemliNot: "YÖK'ün üyelerinin bir kısmının üniversitelerce seçilip Cumhurbaşkanınca atandığı bilinmelidir."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 132,
      maddeNo: 132,
      baslik: "Madde 132 - Yükseköğretim Kurumlarından Özel Hükümlere Tabi Olanlar",
      metni: "Türk Silahlı Kuvvetleri ve emniyet teşkilatına bağlı yükseköğretim kurumları özel kanunlarının hükümlerine tabidir.",
      tuzaklar: {
        aciklama: "TSK ve emniyet teşkilatına bağlı yükseköğretim kurumlarının tabi olduğu özel rejimleri düzenler.",
        hap: [
          "TSK ve emniyet teşkilatına bağlı yükseköğretim kurumları genel yükseköğretim hükümlerine değil, özel kanunlarına tabidir"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 132",
        degisiklikler: [
          "1982 Anayasası'nda orijinal haliyle korunmuştur"
        ],
        onemliNot: "Askeri ve emniyet yükseköğretim kurumlarının özel kanun hükümlerine tabi olması istisnai bir durumdur."
      },
      favoriMi: false,
      cipMi: false
    },
    {
      id: 133,
      maddeNo: 133,
      baslik: "Madde 133 - Radyo ve Televizyon Üst Kurulu (RTÜK) ve Yayın İlkeleri",
      metni: "Radyo ve televizyon istasyonları kurmak ve işletmek serbesttir. Radyo ve televizyon faaliyetlerini düzenlemek ve denetlemek amacıyla kurulan Radyo ve Televizyon Üst Kurulu (RTÜK) dokuz üyeden oluşur. Üyeler, siyasi parti gruplarının üye sayısı oranına göre TBMM Genel Kurulunca seçilir. Devletçe kurulan tek radyo ve televizyon kurumu ile ajansların özerkliği ve yayınların tarafsızlığı esastır.",
      tuzaklar: {
        aciklama: "RTÜK'ün üye sayısını (9 üye), seçim usulünü (TBMM tarafından parti oranlarına göre) ve yayınların tarafsızlığını düzenler.",
        hap: [
          "RTÜK 9 üyeden oluşur ve üyeleri TBMM Genel Kurulunca siyasi parti gruplarının oranına göre seçilir",
          "Devletçe kurulan tek radyo ve televizyon kurumunun özerkliği ve tarafsızlığı esastır"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 133",
        degisiklikler: [
          "1993 ve 2005 yıllarında yapılan değişikliklerle TRT tekeli kaldırılmış, özel radyo-televizyon serbestisi ve RTÜK'ün yapısı anayasal güvenceye kavuşturulmuştur"
        ],
        onemliNot: "RTÜK'ün 9 üyeden oluştuğu ve üyelerin TBMM tarafından seçildiği sınavların klasik rakam sorularındandır."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 134,
      maddeNo: 134,
      baslik: "Madde 134 - Atatürk Kültür, Dil ve Tarih Yüksek Kurumu",
      metni: "Atatürkçü düşünceyi ve Türk dilini/tarihini araştırmak amacıyla Cumhurbaşkanının gözetim ve desteğinde, Cumhurbaşkanının görevlendireceği bakana bağlı; Atatürk Araştırma Merkezi, Türk Dil Kurumu, Türk Tarih Kurumu ve Atatürk Kültür Merkezinden oluşan kamu tüzel kişiliğine sahip Atatürk Kültür, Dil ve Tarih Yüksek Kurumu kurulur.",
      tuzaklar: {
        aciklama: "Atatürk Kültür, Dil ve Tarih Yüksek Kurumu'nun yapısını, bağlı olduğu bakanlığı ve alt kurumlarını düzenler.",
        hap: [
          "Kurum, Cumhurbaşkanının gözetiminde ve görevlendireceği bakana bağlıdır",
          "Alt birimleri: Atatürk Araştırma Merkezi, TDK, TTK ve Atatürk Kültür Merkezidir",
          "Kamu tüzel kişiliğine sahiptir"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 134",
        degisiklikler: [
          "2017 yılında Hükümet sistemi değişikliğine paralel olarak ilgili bakanlık ve gözetim yetkileri Cumhurbaşkanlığı sistemine uyarlanmıştır"
        ],
        onemliNot: "Kurumun kamu tüzel kişiliğine sahip olduğu ve Cumhurbaşkanının görevlendireceği bakana bağlı olduğu bilinmelidir."
      },
      favoriMi: false,
      cipMi: false
    },
    {
      id: 135,
      maddeNo: 135,
      baslik: "Madde 135 - Kamu Kurumu Niteliğindeki Meslek Kuruluşları",
      metni: "Kamu kurumu niteliğindeki meslek kuruluşları; mesleki ihtiyaçları karşılamak, meslek disiplinini ve ahlakını korumak maksadıyla kanunla kurulan ve organları kendi üyeleri tarafından yargı gözetimi altında gizli oyla seçilen kamu tüzelkişilikleridir. Bu meslek kuruluşları amaçları dışı faaliyette bulunamazlar ve seçimlerinde siyasi partiler aday gösteremezler.",
      tuzaklar: {
        aciklama: "Meslek kuruluşlarının niteliğini, kuruluş amaçlarını, seçim usullerini ve faaliyet sınırlarını düzenler.",
        hap: [
          "Meslek kuruluşları kanunla kurulur ve kamu tüzel kişiliğine haizdir",
          "Organları yargı gözetimi altında gizli oyla seçilir",
          "Kuruluş amaçları dışında faaliyette bulunamazlar ve seçimlerinde siyasi partiler aday gösteremez",
          "Gecikmesinde sakınca bulunan hallerde idari merci tarafından faaliyetten men edilebilir (24 saatte hakime sunulur, 48 saatte açıklanır)"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 135",
        degisiklikler: [
          "1995 yılında yapılan değişiklikle siyasi partilerin aday gösteremeyeceği ve amaç dışı faaliyet yasakları netleştirilmiştir"
        ],
        onemliNot: "Meslek kuruluşlarının seçimlerinde siyasi partilerin aday gösterememesi ve faaliyetten men kararlarında 24 saat - 48 saat onay süreleri kritik sorulardır."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 136,
      maddeNo: 136,
      baslik: "Madde 136 - Diyanet İşleri Başkanlığı",
      metni: "Genel idare içinde yer alan Diyanet İşleri Başkanlığı, laiklik ilkesi doğrultusunda, bütün siyasi görüş ve düşünüşlerin dışında kalarak ve milletçe dayanışma ve bütünleşmeyi amaç edinerek, özel kanununda gösterilen görevleri yerine getirir.",
      tuzaklar: {
        aciklama: "Diyanet İşleri Başkanlığı'nın idari konumunu, laiklik ilkesine bağlılığını ve siyaset dışı kalma zorunluluğunu düzenler.",
        hap: [
          "Diyanet İşleri Başkanlığı genel idare içinde yer alır",
          "Laiklik ilkesi doğrultusunda bütün siyasi görüş ve düşünüşlerin dışında kalmak zorundadır"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 136",
        degisiklikler: [
          "1982 Anayasası'nda orijinal haliyle korunmuştur"
        ],
        onemliNot: "Diyanet İşleri Başkanlığı'nın genel idare içinde yer alması ve siyasi görüşlerin dışında kalması kuralı anayasal zorunluluktur."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 137,
      maddeNo: 137,
      baslik: "Madde 137 - Kanunsuz Emir",
      metni: "Kamu hizmetlerinde çalışan kimse, üstünden aldığı emri yönetmelik, Cumhurbaşkanlığı kararnamesi, kanun veya Anayasa hükümlerine aykırı görürse yerine getirmez ve bu aykırılığı o emri verene bildirir. Ancak üstü emrinde ısrar eder ve yazı ile yenilerse emir yerine getirilir; bu halde emri yerine getiren sorumlu olmaz. Konusu suç teşkil eden emir hiçbir suretle yerine getirilmez; yerine getiren kimse sorumluluktan kurtulamaz.",
      tuzaklar: {
        aciklama: "Kanunsuz emir karşısında memurun yükümlülüklerini, yazılı ısrar kuralını ve suç teşkil eden emir yasağını düzenler.",
        hap: [
          "Memur hukuka aykırı emri yerine getirmez, üst emrinde ısrar edip yazıyla yenilerse emir yerine getirilir ve memur sorumlu olmaz",
          "Konusu suç teşkil eden emir HİÇBİR SURETLE yerine getirilemez; yazıyla yenilense bile yerine getiren memur sorumluluktan kurtulamaz"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 137",
        degisiklikler: [
          "2017 yılında 'Tüzük' ibaresi metinden çıkarılarak Cumhurbaşkanlığı kararnamesi eklenmiştir"
        ],
        onemliNot: "Konusu suç teşkil eden emirlerin yazılı yenilense dahi asla yerine getirilemeyeceği kuralı idare ve ceza hukukunun temel taşıdır."
      },
      favoriMi: false,
      cipMi: true
    },
{
      id: 138,
      maddeNo: 138,
      baslik: "Madde 138 - Mahkemelerin Bağımsızlığı",
      metni: "Hakimler, görevlerinde bağımsızdırlar; Anayasaya, kanuna ve hukuka uygun olarak vicdani kanaatlerine göre hüküm verirler. Hiçbir organ, makam, merci veya kişi, yargı yetkisinin kullanılmasında mahkemelere ve hakimlere emir ve talimat veremez, genelge gönderemez, tavsiye ve telkinde bulunamaz. Yasama ve yürütme organları ile idare, mahkeme kararlarına uymak zorundadır.",
      tuzaklar: {
        aciklama: "Mahkemelerin ve hakimlerin bağımsızlığını, emir/talimat yasağını ve mahkeme kararlarına uyma zorunluluğunu düzenler.",
        hap: [
          "Hakimler görevlerinde tamamen bağımsızdır ve vicdani kanaatlerine göre hüküm verirler",
          "Hiçbir organ, makam veya kişi mahkemelere emir, talimat, genelge veya tavsiyede bulunamaz",
          "Yasama, yürütme ve idare mahkeme kararlarına uymak zorundadır, bunları hiçbir suretle değiştiremez ve geciktiremez"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 138",
        degisiklikler: [
          "1982 Anayasası'nda temel yapısı korunmuştur"
        ],
        onemliNot: "Yasama Meclisinde devam eden bir dava hakkında yargı yetkisinin kullanılmasıyla ilgili soru sorulamayacağı ve görüşme yapılamayacağı kuralı bu maddededir."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 139,
      maddeNo: 139,
      baslik: "Madde 139 - Hakimlik ve Savcılık Teminatı",
      metni: "Hakimler ve savcılar azlolunamaz, kendileri istemedikçe Anayasada gösterilen yaştan önce emekliye ayrılamazlar; bir mahkemenin veya kadronun kaldırılması sebebiyle de olsa, aylık, ödenek ve diğer özlük haklarından yoksun kılınamazlar.",
      tuzaklar: {
        aciklama: "Hakim ve savcıların görev güvencesini (teminatını) ve azlolunamama esaslarını düzenler.",
        hap: [
          "Hakimler ve savcılar azlolunamaz (görevden atılamaz)",
          "Kendi istekleri olmadıkça yaşından önce emekliye yazılamazlar",
          "Kadro veya mahkeme kaldırılsa bile özlük haklarından yoksun bırakılamazlar"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 139",
        degisiklikler: [
          "1982 Anayasası'nda orijinal haliyle korunmuştur"
        ],
        onemliNot: "Hakimlik ve savcılık teminatı yargı bağımsızlığının en önemli yapı taşlarından biridir."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 140,
      maddeNo: 140,
      baslik: "Madde 140 - Hakimlik ve Savcılık Mesleği",
      metni: "Hakimler ve savcılar adli ve idari yargı hakim ve savcıları olarak görev yaparlar. Bu görevler meslekten hakim ve savcılar eliyle yürütülür. Hakimler ve savcılar altmışbeş yaşını bitirinceye kadar hizmet görürler. Hakimler ve savcılar idari görevleri yönünden Adalet Bakanlığına bağlıdırlar.",
      tuzaklar: {
        aciklama: "Hakim ve savcıların mesleki statüsünü, yaş haddini (65 yaş) ve Adalet Bakanlığına idari bağımlılığını düzenler.",
        hap: [
          "Hakim ve savcılar 65 yaşını bitirinceye kadar hizmet görürler",
          "Hakimler ve savcılar idari görevleri yönünden Adalet Bakanlığına bağlıdırlar",
          "Kanunda belirtilenlerden başka resmi ve özel hiçbir görev alamazlar"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 140",
        degisiklikler: [
          "Çeşitli dönemlerde mesleğe kabul ve özlük işlerine ilişkin uyarlamalar yapılmıştır"
        ],
        onemliNot: "Hakim ve savcıların özlük/idari işler yönünden Adalet Bakanlığına bağlı olması sıkça sorulan bir detaydır."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 141,
      maddeNo: 141,
      baslik: "Madde 141 - Duruşmaların Açık ve Kararların Gerekçeli Olması",
      metni: "Mahkemelerde duruşmalar herkese açıktır. Duruşmaların kapalı yapılmasına ancak genel ahlakın veya kamu güvenliğinin kesin olarak gerekli kıldığı hallerde karar verilebilir. Bütün mahkemelerin her türlü kararları gerekçeli olarak yazılır. Davaların en az giderle ve mümkün olan süratle sonuçlandırılması, yargının görevidir.",
      tuzaklar: {
        aciklama: "Duruşmaların aleniliğini (açıklığını), kapalılık istisnalarını ve karar gerekçesi zorunluluğunu düzenler.",
        hap: [
          "Mahkemelerde duruşmalar kural olarak herkese açıktır",
          "Kapalılık kararı sadece genel ahlak veya kamu güvenliği gerektirdiğinde alınabilir",
          "Bütün mahkemelerin her türlü kararları gerekçeli olmak zorundadır"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 141",
        degisiklikler: [
          "1982 Anayasası'nda temel ilkeleri koruyarak muhafaza edilmiştir"
        ],
        onemliNot: "Kararların gerekçeli yazılması zorunluluğu adil yargılanma hakkının temel unsurudur."
      },
      favoriMi: false,
      cipMi: false
    },
    {
      id: 142,
      maddeNo: 142,
      baslik: "Madde 142 - Mahkemelerin Kuruluşu",
      metni: "Mahkemelerin kuruluşu, görev ve yetkileri, işleyişi ve yargılama usulleri kanunla düzenlenir. Disiplin mahkemeleri dışında askerî mahkemeler kurulamaz. Ancak savaş halinde, asker kişilerin görevleriyle ilgili olarak işledikleri suçlara ait davalara bakmakla görevli askerî mahkemeler kurulabilir.",
      tuzaklar: {
        aciklama: "Mahkemelerin kanunla kurulması ilkesini ve askeri mahkemelerin kaldırılması kuralını düzenler.",
        hap: [
          "Mahkemelerin kuruluşu ve yargılama usulleri kanunla düzenlenir",
          "Disiplin mahkemeleri hariç askeri mahkemeler kurulamaz (savaş hali hariç)"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 142",
        degisiklikler: [
          "2017 yılında yapılan anayasa değişikliğiyle disiplin mahkemeleri dışındaki askeri mahkemeler tamamen kaldırılmıştır"
        ],
        onemliNot: "Askeri mahkemelerin 2017 yılında kaldırıldığı (savaş hali hariç) bilgisi çok kritik bir güncel anayasa bilgisidir."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 143,
      maddeNo: 143,
      baslik: "Madde 143 - Devlet Güvenlik Mahkemeleri",
      metni: "Madde mülga edilmiştir (yürürlükten kaldırılmıştır).",
      tuzaklar: {
        aciklama: "Eski Devlet Güvenlik Mahkemelerini (DGM) düzenleyen mülga maddedir.",
        hap: [
          "Madde 143 2004 yılında mülga edilmiştir (kaldırılmıştır)"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 143",
        degisiklikler: [
          "2004 yılında (5170 sayılı kanunla) Anayasadan tamamen çıkarılmıştır"
        ],
        onemliNot: "DGM'lerin mülga olduğu bilinmelidir."
      },
      favoriMi: false,
      cipMi: false
    },
    {
      id: 144,
      maddeNo: 144,
      baslik: "Madde 144 - Adalet Hizmetlerinin Denetimi",
      metni: "Adalet hizmetleri ile savcıların idarî görevleri yönünden Adalet Bakanlığınca denetimi, adalet müfettişleri ile hâkim ve savcı mesleğinden olan iç denetçiler; araştırma, inceleme ve soruşturma işlemleri ise adalet müfettişleri eliyle yapılır.",
      tuzaklar: {
        aciklama: "Adalet hizmetlerinin ve savcıların idari görevlerinin denetim yetkisini ve denetim elemanlarını düzenler.",
        hap: [
          "Adalet hizmetleri ve savcıların idari görevleri Adalet Bakanlığınca denetlenir",
          "Denetim ve soruşturma işlemleri adalet müfettişleri ile iç denetçiler eliyle yürütülür"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 144",
        degisiklikler: [
          "2010 yılında yapılan değişiklikle denetim yetkisinin kapsamı ve denetim elemanları yeniden düzenlenmiştir"
        ],
        onemliNot: "Adalet hizmetlerinin idari yönüyle Adalet Bakanlığı denetiminde olduğu vurgulanır."
      },
      favoriMi: false,
      cipMi: false
    },
    {
      id: 145,
      maddeNo: 145,
      baslik: "Madde 145 - Askeri Yargı",
      metni: "Madde mülga edilmiştir (yürürlükten kaldırılmıştır).",
      tuzaklar: {
        aciklama: "Eski askeri yargı organlarını düzenleyen mülga maddedir.",
        hap: [
          "Madde 145 2017 yılında mülga edilmiştir (kaldırılmıştır)"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 145",
        degisiklikler: [
          "2017 Anayasa değişikliğiyle askeri yargı mercilerinin kaldırılmasına bağlı olarak mülga edilmiştir"
        ],
        onemliNot: "Askeri yargı birliği ilkesi gereği anayasadan çıkarılmıştır."
      },
      favoriMi: false,
      cipMi: false
    },
    {
      id: 146,
      maddeNo: 146,
      baslik: "Madde 146 - Anayasa Mahkemesinin Kuruluşu ve Üye Seçimi",
      metni: "Anayasa Mahkemesi onbeş üyeden kurulur. Üyeler TBMM ve Cumhurbaşkanı tarafından seçilir. Anayasa Mahkemesine üye seçilebilmek için kırkbeş yaşın doldurulmuş olması ve en az yirmi yıl çalışmış/görev yapmış olmak şarttır. Başkan ve iki başkanvekili 4 yıl için seçilir.",
      tuzaklar: {
        aciklama: "Anayasa Mahkemesi'nin üye sayısını (15), seçilme yaşını (45) ve görev sürelerini düzenler.",
        hap: [
          "Anayasa Mahkemesi 15 üyeden oluşur",
          "Üye seçilebilmek için 45 yaşın doldurulmuş olması şarttır",
          "Mahkeme başkanı ve başkanvekilleri 4 yıl için seçilir, tekrar seçilebilirler"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 146",
        degisiklikler: [
          "2010 yılında yapılan değişiklikle üye sayısı 17'den 15'e düşürülmüş ve seçim kurulları yeniden yapılandırılmıştır"
        ],
        onemliNot: "15 üye ve 45 yaş sınırı sınavların en favori rakamsal sorularındandır."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 147,
      maddeNo: 147,
      baslik: "Madde 147 - Anayasa Mahkemesi Üyelerinin Görev Süresi",
      metni: "Anayasa Mahkemesi üyeleri oniki yıl için seçilirler. Bir kimse iki defa Anayasa Mahkemesi üyesi seçilemez. Anayasa Mahkemesi üyeleri altmışbeş yaşını doldurunca emekliye ayrılırlar.",
      tuzaklar: {
        aciklama: "Anayasa Mahkemesi üyelerinin görev süresini (12 yıl) ve yaş haddini (65 yaş) düzenler.",
        hap: [
          "AYM üyeleri 12 yıl için seçilir ve bir kimse sadece bir kez üye seçilebilir (tekrar seçilemez)",
          "AYM üyeleri 65 yaşını doldurunca emekliye ayrılır"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 147",
        degisiklikler: [
          "2010 yılında üyelik süresi 12 yıl olarak sabitlenmiş ve yeniden seçilme hakkı kaldırılmıştır"
        ],
        onemliNot: "12 yıl görev süresi ve bir kişinin sadece bir kez üye olabilmesi kuralı kesinlikle bilinmelidir."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 148,
      maddeNo: 148,
      baslik: "Madde 148 - Anayasa Mahkemesinin Görev ve Yetkileri",
      metni: "Anayasa Mahkemesi, kanunların, Cumhurbaşkanlığı kararnamelerinin ve TBMM İçtüzüğünün Anayasaya uygunluğunu denetler, bireysel başvuruları karara bağlar ve Yüce Divan sıfatıyla yargılama yapar. Herkes, Anayasada güvence altına alınmış temel hak ve özgürlüklerinden AİHS kapsamındakilerin ihlal edildiği iddiasıyla bireysel başvuruda bulunabilir.",
      tuzaklar: {
        aciklama: "AYM'nin norm denetimi, bireysel başvuru yetkisi ve Yüce Divan görevlerini düzenler.",
        hap: [
          "AYM kanunları, CBK'ları ve İçtüzüğü şekil ve esas bakımından denetler",
          "Bireysel başvuru yapabilmek için olağan kanun yollarının tüketilmiş olması şarttır",
          "Yüce Divan sıfatıyla Cumhurbaşkanı, bakanlar, yüksek yargı başkanları ve üyelerini yargılar"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 148",
        degisiklikler: [
          "2010 yılında anayasa yargısına 'bireysel başvuru (Anayasa Şikayeti)' hakkı eklenmiştir"
        ],
        onemliNot: "Bireysel başvuru hakkının 2010 değişikliğiyle geldiği ve olağan kanun yollarının tüketilmesinin şart olduğu çok önemlidir."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 149,
      maddeNo: 149,
      baslik: "Madde 149 - Anayasa Mahkemesinin Çalışma ve Yargılama Usulü",
      metni: "Anayasa Mahkemesi, iki bölüm ve Genel Kurul halinde çalışır. Bölümler bireysel başvuruları, Genel Kurul ise siyasi parti davalarını, iptal davalarını ve Yüce Divan yargılamalarını karara bağlar. Anayasa değişikliğinde iptale veya siyasi parti kapatılmasına karar verilebilmesi için toplantıya katılan üyelerin üçte iki (2/3) oy çokluğu şarttır.",
      tuzaklar: {
        aciklama: "AYM'nin bölümler ve Genel Kurul olarak çalışmasını ve karar çoğunluklarını düzenler.",
        hap: [
          "AYM 2 bölüm ve Genel Kurul halinde çalışır",
          "Bireysel başvurular bölümlerde, iptal ve kapatma davaları Genel Kurulda görülür",
          "Anayasa değişikliği iptali veya parti kapatma için toplantıya katılanların 3/2 (üçte iki) çoğunluğu gerekir"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 149",
        degisiklikler: [
          "2010 yılında bölümler sistemi getirilerek bireysel başvuru denetimi yapılandırılmıştır"
        ],
        onemliNot: "Parti kapatma ve Anayasa değişikliği iptalleri için 3/2 çoğunluk şartı en kritik sınav kuralıdır."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 150,
      maddeNo: 150,
      baslik: "Madde 150 - İptal Davası Açabilenler",
      metni: "Kanunların, Cumhurbaşkanlığı kararnamelerinin, TBMM İçtüzüğünün Anayasaya aykırılığı iddiasıyla doğrudan doğruya iptal davası açabilme hakkı, Cumhurbaşkanına, TBMM'de en fazla üyeye sahip iki siyasi parti grubuna ve üye tamsayısının en az beşte biri (1/5) tutarındaki üyelere aittir.",
      tuzaklar: {
        aciklama: "Soyut norm denetimi (iptal davası) açma yetkisine sahip kişi ve kurumları düzenler.",
        hap: [
          "Doğrudan iptal davası açabilecek olanlar: Cumhurbaşkanı, TBMM'de en çok üyeye sahip ilk iki siyasi parti grubu ve üye tamsayısının en az 1/5'i (120 milletvekili)"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 150",
        degisiklikler: [
          "2017 yılında yeni hükümet sistemine uyarlanarak yetkili grup ve makamlar güncellenmiştir"
        ],
        onemliNot: "İptal davası açabilecek grupların (Cumhurbaşkanı, ilk 2 parti grubu, 1/5 milletvekili) ezbere bilinmesi gerekir."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 151,
      maddeNo: 151,
      baslik: "Madde 151 - Dava Açma Süresi (İptal Davası)",
      metni: "Anayasa Mahkemesinde doğrudan doğruya iptal davası açma hakkı, iptali istenen kanun, Cumhurbaşkanlığı kararnamesi veya içtüzüğün Resmî Gazetede yayımlanmasından başlayarak altmış gün sonra düşer.",
      tuzaklar: {
        aciklama: "Soyut norm denetimi için öngörülen dava açma süresini (60 gün) düzenler.",
        hap: [
          "Doğrudan iptal davası açma süresi Resmi Gazete'de yayımlanmasından itibaren 60 gündür"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 151",
        degisiklikler: [
          "1982 Anayasası'nda orijinal haliyle korunmuştur"
        ],
        onemliNot: "60 günlük hak düşürücü süre temel sınav bilgisidir."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 152,
      maddeNo: 152,
      baslik: "Madde 152 - Anayasaya Aykırılığın Diğer Mahkemelerde İleri Sürülmesi (Somut Norm Denetimi / Def'i)",
      metni: "Bir davaya bakmakta olan mahkeme, uygulanacak bir kanun veya CBK hükümlerini Anayasaya aykırı görürse veya tarafların iddiasını ciddi bulursa, AYM'nin kararına kadar davayı geri bırakır. AYM işin gelişinden itibaren 5 ay içinde karar verir; karar vermezse mahkeme davayı yürürlükteki kanuna göre sonuçlandırır. Red kararının Resmî Gazetede yayımlanmasından sonra 10 yıl geçmedikçe aynı hükümle tekrar başvurulamaz.",
      tuzaklar: {
        aciklama: "Somut norm denetimi (itiraz yolu), AYM'nin karar süresi (5 ay) ve 10 yıllık yeniden başvuru yasağını düzenler.",
        hap: [
          "Somut norm denetiminde AYM kararını 5 ay içinde vermek zorundadır, vermezse mahkeme yürürlükteki kanunla devam eder",
          "AYM'nin red kararının RG'de yayımlanmasından itibaren 10 yıl geçmedikçe aynı kanun hükmü için itiraz yoluyla tekrar başvurulamaz"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 152",
        degisiklikler: [
          "Çeşitli dönemlerde süreler ve CBK'lar dahil edilerek güncellenmiştir"
        ],
        onemliNot: "5 aylık AYM karar süresi ve 10 yıllık yasak süresi sınavların vazgeçilmez rakamsal tuzaklarıdır."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 153,
      maddeNo: 153,
      baslik: "Madde 153 - Anayasa Mahkemesinin Kararları",
      metni: "Anayasa Mahkemesinin kararları kesindir. İptal kararları gerekçesi yazılmadan açıklanamaz. İptal kararları geriye yürümez. AYM kararları Resmi Gazetede hemen yayımlanır ve yasama, yürütme, yargı organlarını, idareyi ve herkesi bağlar.",
      tuzaklar: {
        aciklama: "AYM kararlarının kesinliğini, geriye yürümezlik kuralını ve bağlayıcılığını düzenler.",
        hap: [
          "AYM kararları kesindir ve yasama, yürütme, yargı ile tüm idareyi bağlar",
          "İptal kararları kural olarak geriye yürümez",
          "AYM kanun koyucu gibi hareket ederek yeni bir uygulamaya yol açacak biçimde hüküm tesis edemez"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 153",
        degisiklikler: [
          "1982 Anayasası'nda temel yapısı korunmuştur"
        ],
        onemliNot: "İptal kararlarının geriye yürümemesi ve kanun koyucu gibi hareket edilemeyeceği kuralları çok önemlidir."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 154,
      maddeNo: 154,
      baslik: "Madde 154 - Yargıtay",
      metni: "Yargıtay, adliye mahkemelerince verilen ve kanunun başka bir adli yargı merciine bırakmadığı karar ve hükümlerin son inceleme merciidir. Yargıtay Birinci Başkanı Yargıtay Genel Kurulunca salt çoğunluk ve gizli oyla 4 yıl için seçilir.",
      tuzaklar: {
        aciklama: "Yargıtay'ın adli yargıdaki temyiz (son inceleme) mercii olma niteliğini ve Başkanının seçimini düzenler.",
        hap: [
          "Yargıtay adli yargı mahkemelerinin son inceleme merciidir",
          "Yargıtay Birinci Başkanı kendi üyeleri arasından Yargıtay Genel Kurulunca 4 yıl için seçilir"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 154",
        degisiklikler: [
          "2017 anayasa değişikliğiyle askeri yargının kaldırılması sonrasında adli yargı yetkileri netleştirilmiştir"
        ],
        onemliNot: "Yargıtay'ın adli yargının en üst temyiz mahkemesi olduğu temel bir adliye kuralıdır."
      },
      favoriMi: false,
      cipMi: false
    },
    {
      id: 155,
      maddeNo: 155,
      baslik: "Madde 155 - Danıştay",
      metni: "Danıştay, idari mahkemelerce verilen ve kanunun başka bir idari yargı merciine bırakmadığı karar ve hükümlerin son inceleme merciidir. Aynı zamanda idari uyuşmazlıkları çözer ve kamu hizmeti imtiyaz sözleşmeleri hakkında düşüncesini bildirir. Üyelerinin 3/4'ü HSK tarafından, 1/4'ü Cumhurbaşkanı tarafından seçilir.",
      tuzaklar: {
        aciklama: "Danıştay'ın idari yargıdaki temyiz mercii olma özelliğini, danışma görevini ve üye seçim oranlarını düzenler.",
        hap: [
          "Danıştay idari yargının son inceleme (temyiz) merciidir",
          "Üyelerinin dörtte üçü HSK, dörtte biri Cumhurbaşkanı tarafından seçilir",
          "İdari sözleşmeler hakkında düşünce bildirmek Danıştay'ın görevleri arasındadır"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 155",
        degisiklikler: [
          "2010 ve 2017 yıllarında üye seçim yetkileri ve askeri idari mahkemenin kaldırılmasına bağlı olarak düzenlenmiştir"
        ],
        onemliNot: "Danıştay üyelerinin 3/4'ünün HSK, 1/4'ünün Cumhurbaşkanı tarafından seçilmesi sınavların vazgeçilmezidir."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 156,
      maddeNo: 156,
      baslik: "Madde 156 - Askeri Yargıtay",
      metni: "Madde mülga edilmiştir (yürürlükten kaldırılmıştır).",
      tuzaklar: {
        aciklama: "Eski Askeri Yargıtay'ı düzenleyen mülga maddedir.",
        hap: [
          "Madde 156 2017 yılında mülga edilmiştir (kaldırılmıştır)"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 156",
        degisiklikler: [
          "2017 Anayasa değişikliğiyle tamamen yürürlükten kaldırılmıştır"
        ],
        onemliNot: "Askeri yargı organları tarihe karışmıştır."
      },
      favoriMi: false,
      cipMi: false
    },
    {
      id: 157,
      maddeNo: 157,
      baslik: "Madde 157 - Askeri Yüksek İdare Mahkemesi",
      metni: "Madde mülga edilmiştir (yürürlükten kaldırılmıştır).",
      tuzaklar: {
        aciklama: "Eski Askeri Yüksek İdare Mahkemesi'ni (AYİM) düzenleyen mülga maddedir.",
        hap: [
          "Madde 157 2017 yılında mülga edilmiştir (kaldırılmıştır)"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 157",
        degisiklikler: [
          "2017 Anayasa değişikliğiyle tamamen yürürlükten kaldırılmıştır"
        ],
        onemliNot: "AYİM mülga edilmiştir."
      },
      favoriMi: false,
      cipMi: false
    },
    {
      id: 158,
      maddeNo: 158,
      baslik: "Madde 158 - Uyuşmazlık Mahkemesi",
      metni: "Uyuşmazlık Mahkemesi adli ve idari yargı mercileri arasındaki görev ve hüküm uyuşmazlıklarını kesin olarak çözümlemeye yetkilidir. Bu mahkemenin Başkanlığını Anayasa Mahkemesince kendi üyeleri arasından görevlendirilen üye yapar. Diğer mahkemelerle AYM arasındaki görev uyuşmazlıklarında AYM kararı esas alınır.",
      tuzaklar: {
        aciklama: "Uyuşmazlık Mahkemesi'nin görevini ve başkanlık makamını (AYM üyesi) düzenler.",
        hap: [
          "Uyuşmazlık Mahkemesi adli ve idari yargı arasındaki uyuşmazlıkları çözer",
          "Başkanlığını Anayasa Mahkemesince görevlendirilen AYM üyesi yapar",
          "Diğer mahkemeler ile AYM arasındaki görev uyuşmazlıklarında AYM kararı esas alınır"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 158",
        degisiklikler: [
          "Askeri yargının kaldırılmasına bağlı olarak kapsamı adli ve idari yargı olarak sadeleştirilmiştir"
        ],
        onemliNot: "Uyuşmazlık Mahkemesi başkanının AYM içinden görevlendirildiği temel bir bilgidir."
      },
      favoriMi: false,
      cipMi: true
    },
  {
      id: 159,
      maddeNo: 159,
      baslik: "Madde 159 - Hâkimler ve Savcılar Kurulu (HSK)",
      metni: "Hâkimler ve Savcılar Kurulu, mahkemelerin bağımsızlığı ve hâkimlik teminatı esaslarına göre kurulur ve görev yapar. HSK onüç üyeden oluşur ve iki daire halinde çalışır. Kurulun Başkanı Adalet Bakanıdır. Üyeler 4 yıl için seçilir.",
      tuzaklar: {
        aciklama: "HSK'nın üye sayısını (13), daire sayısını (2), Başkanını (Adalet Bakanı) ve seçim usullerini düzenler.",
        hap: [
          "HSK 13 üyeden oluşur ve 2 daire halinde çalışır",
          "Kurulun Başkanı Adalet Bakanıdır; Adalet Bakanlığı ilgili Bakan Yardımcısı tabii üyesidir",
          "Üyeler 4 yıl için seçilir ve bir kimse bir kez daha seçilebilir",
          "Kurulun meslekten çıkarma dışındaki kararlarına karşı yargı mercilerine başvurulamaz"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 159",
        degisiklikler: [
          "2010 ve 2017 yıllarında yapılan büyük değişikliklerle üye sayısı 13'e düşürülmüş, yapısı ve daire düzeni yenilenmiştir"
        ],
        onemliNot: "13 üye, Adalet Bakanının başkan olması ve meslekten çıkarma dışındaki kararlara yargı yolunun kapalı olması kritik sınavlardandır."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 160,
      maddeNo: 160,
      baslik: "Madde 160 - Sayıştay",
      metni: "Sayıştay, merkezî yönetim bütçesi kapsamındaki kamu idareleri ile sosyal güvenlik kurumlarının bütün gelir ve giderleri ile mallarını Türkiye Büyük Millet Meclisi adına denetlemek ve sorumluların hesap ve işlemlerini kesin hükme bağlamakla görevlidir. Sayıştayın kesin hükümleri hakkında idari yargı yoluna başvurulamaz.",
      tuzaklar: {
        aciklama: "Sayıştay'ın TBMM adına mali denetim yapma görevini, kesin hüküm yetkisini ve idari yargı yasağını düzenler.",
        hap: [
          "Sayıştay kamu idarelerini TBMM adına denetler ve hesapları kesin hükme bağlar",
          "Sayıştay kararlarına karşı idari yargı yoluna başvurulamaz",
          "Mahallî idarelerin hesap ve işlemlerinin denetimi de Sayıştay tarafından yapılır"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 160",
        degisiklikler: [
          "2005 yılında yapılan eklemeyle mahalli idarelerin denetimi de Sayıştay kapsamına alınmıştır"
        ],
        onemliNot: "Sayıştay'ın denetimini TBMM adına yaptığı ve kararlarına karşı idari yargı yolunun kapalı olduğu en önemli hususlardandır."
      },
      favoriMi: false,
      cipMi: true
    },

{
      id: 161,
      maddeNo: 161,
      baslik: "Madde 161 - Bütçenin Hazırlanması ve Görüşülmesi",
      metni: "Kamu idarelerinin harcamaları yıllık bütçelerle yapılır. Bütçe kanununa bütçe ile ilgili hükümler dışında hiçbir hüküm konulamaz. Cumhurbaşkanı bütçe teklifini mali yılbaşından en az 75 gün önce TBMM'ye sunar. Komisyon 55 gün içinde kabul eder. Bütçe kanununun süresinde yürürlüğe konulamaması halinde geçici bütçe kanunu çıkarılır; o da çıkarılamazsa bir önceki yılın bütçesi yeniden değerleme oranına göre artırılarak uygulanır. TBMM üyeleri Genel Kurulda gider artırıcı veya gelir azaltıcı önerilerde bulunamazlar.",
      tuzaklar: {
        aciklama: "Merkezi yönetim bütçesinin sunulma sürelerini, komisyon/genel kurul aşamalarını ve bütçe kurallarını düzenler.",
        hap: [
          "Bütçe kanununa bütçe ile ilgili hükümler dışında hiçbir hüküm konulamaz",
          "Cumhurbaşkanı bütçe teklifini mali yılbaşından en az 75 gün önce TBMM'ye sunar, Komisyon 55 gün içinde görüşür",
          "Geçici bütçe de çıkarılamazsa bir önceki yılın bütçesi yeniden değerleme oranına göre artırılarak uygulanır",
          "Milletvekilleri bütçe görüşmelerinde gider artırıcı veya gelir azaltıcı önerilerde bulunamazlar"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 161",
        degisiklikler: [
          "2017 yılında yeni yönetim sistemine uyarlanarak süreler, teklif yetkileri ve bütçe süreçleri yeniden düzenlenmiştir"
        ],
        onemliNot: "75 gün ve 55 gün süreleri ile milletvekillerinin gider artırıcı öneride bulunamayacağı kuralı en önemli sınav tuzaklarıdır."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 162,
      maddeNo: 162,
      baslik: "Madde 162 - Bütçenin Görüşülmesi",
      metni: "Madde mülga edilmiştir (yürürlükten kaldırılmıştır).",
      tuzaklar: {
        aciklama: "Eski bütçe görüşme usullerini düzenleyen mülga maddedir.",
        hap: [
          "Madde 162 2017 yılında mülga edilmiştir (kaldırılmıştır)"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 162",
        degisiklikler: [
          "2017 Anayasa değişikliğiyle bütçe hükümleri tek bir maddede (Madde 161) birleştirilerek bu madde mülga edilmiştir"
        ],
        onemliNot: "Bütçe görüşme esasları Madde 161 kapsamına alınmıştır."
      },
      favoriMi: false,
      cipMi: false
    },
    {
      id: 163,
      maddeNo: 163,
      baslik: "Madde 163 - Bütçelerde Değişiklik Yapılabilme Esasları",
      metni: "Madde mülga edilmiştir (yürürlükten kaldırılmıştır).",
      tuzaklar: {
        aciklama: "Eski bütçede değişiklik esaslarını düzenleyen mülga maddedir.",
        hap: [
          "Madde 163 2017 yılında mülga edilmiştir (kaldırılmıştır)"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 163",
        degisiklikler: [
          "2017 Anayasa değişikliğiyle tamamen yürürlükten kaldırılmıştır"
        ],
        onemliNot: "Mülga maddedir."
      },
      favoriMi: false,
      cipMi: false
    },
    {
      id: 164,
      maddeNo: 164,
      baslik: "Madde 164 - Kesinhesap",
      metni: "Madde mülga edilmiştir (yürürlükten kaldırılmıştır).",
      tuzaklar: {
        aciklama: "Eski kesinhesap hükümlerini düzenleyen mülga maddedir.",
        hap: [
          "Madde 164 2017 yılında mülga edilmiştir (kaldırılmıştır)"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 164",
        degisiklikler: [
          "2017 Anayasa değişikliğiyle kesinhesap süreçleri Madde 161'e entegre edilerek bu madde mülga edilmiştir"
        ],
        onemliNot: "Kesinhesap hükümleri artık Madde 161'de yer almaktadır."
      },
      favoriMi: false,
      cipMi: false
    },
    {
      id: 165,
      maddeNo: 165,
      baslik: "Madde 165 - Kamu İktisadi Teşebbüslerinin Denetimi",
      metni: "Sermayesinin yarısından fazlası doğrudan doğruya veya dolaylı olarak Devlete ait olan kamu kuruluş ve ortaklıklarının Türkiye Büyük Millet Meclisince denetlenmesi esasları kanunla düzenlenir.",
      tuzaklar: {
        aciklama: "Kamu iktisadi teşebbüslerinin (KİT) TBMM tarafından denetlenme esaslarını düzenler.",
        hap: [
          "Sermayesinin yarısından fazlası Devlete ait olan kamu ortaklıkları TBMM tarafından denetlenir",
          "Denetim esasları kanunla düzenlenir"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 165",
        degisiklikler: [
          "1982 Anayasası'nda orijinal haliyle korunmuştur"
        ],
        onemliNot: "KİT'lerin TBMM denetimine tabi olması mali denetim ilkelerindendir."
      },
      favoriMi: false,
      cipMi: false
    },
{
      id: 166,
      maddeNo: 166,
      baslik: "Madde 166 - Planlama ve Ekonomik ve Sosyal Konsey",
      metni: "Ekonomik, sosyal ve kültürel kalkınmayı, özellikle sanayiin ve tarımın yurt düzeyinde dengeli ve uyumlu biçimde hızla gelişmesini planlamak, bu amaçla gerekli teşkilatı kurmak Devletin görevidir. Kalkınma planlarının hazırlanmasına, TBMM'ce onaylanmasına ve uygulanmasına ilişkin esaslar kanunla düzenlenir. Ekonomik ve sosyal politikaların oluşturulmasında Cumhurbaşkanına istişarî nitelikte görüş bildirmek amacıyla Ekonomik ve Sosyal Konsey kurulur.",
      tuzaklar: {
        aciklama: "Kalkınma planlaması ilkelerini, planın bağlayıcılığını ve Ekonomik ve Sosyal Konseyi düzenler.",
        hap: [
          "Kalkınma planlarının yapılması ve uygulanması Devletin görevidir",
          "Ekonomik ve Sosyal Konsey Cumhurbaşkanına istişari nitelikte görüş bildirir"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 166",
        degisiklikler: [
          "2010 yılında yapılan değişiklikle Ekonomik ve Sosyal Konsey anayasal güvenceye alınmıştır"
        ],
        onemliNot: "Ekonomik ve Sosyal Konsey'in kararlarının 'istişari (danışma) nitelikte' olduğu unutulmamalıdır."
      },
      favoriMi: false,
      cipMi: false
    },
    {
      id: 167,
      maddeNo: 167,
      baslik: "Madde 167 - Piyasaların Denetimi ve Dış Ticaretin Düzenlenmesi",
      metni: "Devlet, para, kredi, sermaye, mal ve hizmet piyasalarının sağlıklı ve düzenli işlemelerini sağlayıcı ve geliştirici tedbirleri alır; piyasalarda fiili veya anlaşma sonucu doğacak tekelleşme ve kartelleşmeyi önler. Dış ticaretin düzenlenmesi amacıyla vergi ve benzeri yükümlülükler dışında ek mali yükümlülükler koymaya ve kaldırmaya kanunla Cumhurbaşkanına yetki verilebilir.",
      tuzaklar: {
        aciklama: "Piyasaların düzenlenmesi, tekelleşme/kartelleşme yasağı ve dış ticaret düzenleme yetkisini düzenler.",
        hap: [
          "Devlet piyasaların düzenli işlemesini sağlar, tekelleşme ve kartelleşmeyi önler",
          "Dış ticarette ek mali yükümlülükler koyma ve kaldırma yetkisi kanunla Cumhurbaşkanına verilebilir"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 167",
        degisiklikler: [
          "2017 yılında yetki makamı yeni sisteme uyarlanarak Cumhurbaşkanı olarak düzenlenmiştir"
        ],
        onemliNot: "Tekel ve kartelleşmeyi önleme görevinin Devlete ait olduğu temel bir ekonomik anayasa kuralıdır."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 168,
      maddeNo: 168,
      baslik: "Madde 168 - Tabii Servetlerin ve Kaynakların Aranması ve İşletilmesi",
      metni: "Tabii servetler ve kaynaklar Devletin hüküm ve tasarrufu altındadır. Bunların aranması ve işletilmesi hakkı Devlete aittir. Devlet bu hakkını belli bir süre için, gerçek ve tüzelkişilere devredebilir. Hangi tabii servet ve kaynağın arama ve işletmesinin gerçek ve tüzelkişiler eliyle yapılacağı kanunun açık iznine bağlıdır.",
      tuzaklar: {
        aciklama: "Tabii servetlerin mülkiyetini (Devletin hüküm ve tasarrufu altında) ve işletilme devir şartlarını düzenler.",
        hap: [
          "Tabii servetler ve kaynaklar Devletin hüküm ve tasarrufu altındadır",
          "Arama ve işletme hakkı Devlete aittir, Devlet bu hakkı süreli olarak devredebilir",
          "Gerçek ve tüzel kişiler eliyle işletilme kanunun açık iznine bağlıdır"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 168",
        degisiklikler: [
          "1982 Anayasası'nda orijinal haliyle korunmuştur"
        ],
        onemliNot: "Yeraltı ve yer üstü tabii servetlerin mülkiyetinin devlete ait olduğu (özel mülkiyete konu olamayacağı) temel ilkedir."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 169,
      maddeNo: 169,
      baslik: "Madde 169 - Ormanların Korunması ve Geliştirilmesi",
      metni: "Devlet, ormanların korunması ve sahalarının genişletilmesi için gerekli tedbirleri alır. Yanan ormanların yerinde yeni orman yetiştirilir, bu yerlerde başka çeşit tarım ve hayvancılık yapılamaz. Devlet ormanlarının mülkiyeti devrolunamaz. Ormanları yakmak, yok etmek veya daraltmak amacıyla işlenen suçlar genel ve özel af kapsamına alınamaz.",
      tuzaklar: {
        aciklama: "Ormanların korunması, mülkiyet yasağı, yanan yerlerin ağaçlandırılması ve af yasağını düzenler.",
        hap: [
          "Devlet ormanlarının mülkiyeti kesinlikle devrolunamaz",
          "Yanan ormanların yerinde yeni orman yetiştirilir, asla başka tarım/hayvancılık yapılamaz",
          "Ormanları yakmak veya yok etmek amacıyla işlenen suçlar genel ve özel af kapsamına alınamaz"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 169",
        degisiklikler: [
          "1982 Anayasası'nda ormanları korumaya yönelik çok katı ve tavizsiz kurallarla muhafaza edilmiştir"
        ],
        onemliNot: "Orman suçlarının ve orman yakma eylemlerinin asla af kapsamına alınamayacağı sınavların en popüler sorularındandır."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 170,
      maddeNo: 170,
      baslik: "Madde 170 - Orman Köylüsünün Korunması",
      metni: "Ormanlar içinde veya bitişiğindeki köyler halkının kalkındırılması, ormanların ve bütünlüğünün korunması bakımlarından, ormanın gözetilmesi ve işletilmesinde Devletle bu halkın işbirliğini sağlayıcı tedbirler kanunla düzenlenir. Orman içinden nakledilen köyler halkına ait araziler, Devlet ormanı olarak derhal ağaçlandırılır.",
      tuzaklar: {
        aciklama: "Orman köylüsünün kalkındırılması ve orman içi köylerin nakledilme esaslarını düzenler.",
        hap: [
          "Orman köylüsünün kalkındırılması ve devletle işbirliği kanunla düzenlenir",
          "Orman içinden nakledilen köylülere ait araziler derhal devlet ormanı olarak ağaçlandırılır"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 170",
        degisiklikler: [
          "1982 Anayasası'nda orijinal haliyle korunmuştur"
        ],
        onemliNot: "Nakledilen orman köylüsü arazilerinin derhal devlet ormanı yapılarak ağaçlandırılması zorunludur."
      },
      favoriMi: false,
      cipMi: false
    },
    {
      id: 171,
      maddeNo: 171,
      baslik: "Madde 171 - Kooperatifçiliğin Geliştirilmesi",
      metni: "Devlet, milli ekonominin yararlarını dikkate alarak, öncelikle üretimin artırılmasını ve tüketicinin korunmasını amaçlayan kooperatifçiliğin gelişmesini sağlayacak tedbirleri alır.",
      tuzaklar: {
        aciklama: "Kooperatifçiliğin geliştirilmesi ve üretim/tüketici dengesini düzenler.",
        hap: [
          "Devlet üretimi artırma ve tüketiciyi koruma amaçlı kooperatifçiliği geliştirir"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 171",
        degisiklikler: [
          "1995 yılında yapılan değişiklikle maddenin bazı fıkraları mülga edilmiş, temel ilke korunmuştur"
        ],
        onemliNot: "Kooperatifçiliğin devlet tarafından destekleneceği anayasal hükümle güvenceye alınmıştır."
      },
      favoriMi: false,
      cipMi: false
    },
    {
      id: 172,
      maddeNo: 172,
      baslik: "Madde 172 - Tüketicilerin Korunması",
      metni: "Devlet, tüketicileri koruyucu ve aydınlatıcı tedbirler alır, tüketicilerin kendilerini koruyucu girişimlerini teşvik eder.",
      tuzaklar: {
        aciklama: "Tüketicilerin korunması ve aydınlatılması ödevini düzenler.",
        hap: [
          "Devlet tüketicileri koruyucu ve aydınlatıcı tedbirler almakla yükümlüdür"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 172",
        degisiklikler: [
          "1982 Anayasası'nda orijinal haliyle korunmuştur"
        ],
        onemliNot: "Tüketici haklarının korunması sosyal devlet ilkesinin uzantısıdır."
      },
      favoriMi: false,
      cipMi: false
    },
    {
      id: 173,
      maddeNo: 173,
      baslik: "Madde 173 - Esnaf ve Sanatkarların Korunması",
      metni: "Devlet, esnaf ve sanatkarı koruyucu ve destekleyici tedbirleri alır.",
      tuzaklar: {
        aciklama: "Esnaf ve sanatkarın korunması ve desteklenmesini düzenler.",
        hap: [
          "Devlet esnaf ve sanatkarı koruyucu ve destekleyici tedbirler alır"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 173",
        degisiklikler: [
          "1982 Anayasası'nda orijinal haliyle korunmuştur"
        ],
        onemliNot: "Esnaf ve sanatkarların devlet eliyle korunması anayasal ödevler arasındadır."
      },
      favoriMi: false,
      cipMi: false
    },
    {
      id: 174,
      maddeNo: 174,
      baslik: "Madde 174 - İnkılap Kanunlarının Korunması",
      metni: "Anayasanın hiçbir hükmü, Türk toplumunu çağdaş uygarlık seviyesinin üstüne çıkarma ve Türkiye Cumhuriyetinin laiklik niteliğini koruma amacını güden inkılap kanunlarının (Tevhidi Tedrisat, Şapka, Tekke ve Zaviyeler, Medeni Nikah, Uluslararası Erkam, Harf İnkılabı, Unvanların Kaldırılması, Kisve Kanunu) Anayasaya aykırı olduğu şeklinde anlaşılamaz ve yorumlanamaz.",
      tuzaklar: {
        aciklama: "İnkılap kanunlarının Anayasa'ya aykırı olamayacağını (koruma altına alındığını) düzenler.",
        hap: [
          "İnkılap kanunları Anayasa'ya aykırı olduğu şeklinde yorumlanamaz (koruma altındadır)",
          "Tevhidi Tedrisat, şapka, tekke/zaviyeler, medeni nikah, harf inkılabı ve kılık kıyafet kanunları bu kapsamdadır"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 174",
        degisiklikler: [
          "1982 Anayasası'nda başlangıçtan beri korunan temel inkılap kanunları maddesidir"
        ],
        onemliNot: "İnkılap kanunlarının Anayasa yargısına ve iptal denetimine tabi olamayacağı (koruma altındaki kanunlar olduğu) en temel anayasa hukuku bilgisidir."
      },
      favoriMi: false,
      cipMi: true
    },
{
      id: 175,
      maddeNo: 175,
      baslik: "Madde 175 - Anayasanın Değiştirilmesi",
      metni: "Anayasanın değiştirilmesi TBMM üye tamsayısının en az üçte biri tarafından yazıyla teklif edilebilir. Değiştirme teklifinin kabulü Meclisin üye tamsayısının beşte üç (3/5) çoğunluğunun gizli oyuyla mümkündür. 3/5 ile 2/3 arasında kabul edilen değişiklikler Cumhurbaşkanı iade etmezse halkoyuna sunulur. Üçte iki (2/3) çoğunlukla kabul edilen değişiklikler ise Cumhurbaşkanınca gerekli görülürse halkoyuna sunulabilir.",
      tuzaklar: {
        aciklama: "Anayasa değişiklik teklifi, kabul nisapları (3/5 ve 2/3) ve halkoylaması (referandum) zorunluluklarını düzenler.",
        hap: [
          "Anayasa değişikliği teklifi için üye tamsayısının en az 1/3'ünün yazılı teklifi şarttır",
          "Kabul edilmesi için Meclis üye tamsayısının en az beşte üçünün (3/5 - 360) gizli oyu gerekir",
          "3/5 ile kabul edilen anayasa değişiklikleri halkoyuna (referanduma) sunulması zorunlu olan değişikliklerdir",
          "2/3 (400) ve üzeri oyla kabul edilen değişikliklerde halkoyuna sunma yetkisi Cumhurbaşkanının takdirindedir"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 175",
        degisiklikler: [
          "17 Mayıs 1987 tarihli ve 3361 sayılı Kanunla kapsamlı bir şekilde değiştirilmiştir"
        ],
        onemliNot: "3/5 (360) nisabı ile 2/3 (400) nisabının referandum açısından doğurduğu sonuçlar sınavların en temel anayasa hukuku sorularıdır."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 176,
      maddeNo: 176,
      baslik: "Madde 176 - Başlangıç ve Kenar Başlıklar",
      metni: "Anayasanın dayandığı temel görüş ve ilkeleri belirten başlangıç kısmı, Anayasa metnine dahildir. Madde kenar başlıkları, sadece ilgili oldukları maddelerin konusunu ve maddeler arasındaki sıralama ve bağlantıyı gösterir. Bu başlıklar, Anayasa metninden sayılmaz.",
      tuzaklar: {
        aciklama: "Başlangıç kısmının metne dahil olduğunu, kenar başlıkların ise metinden sayılmadığını düzenler.",
        hap: [
          "Anayasa'nın 'Başlangıç' kısmı metne dahildir ve bağlayıcıdır",
          "Maddelerin kenar başlıkları sadece konu göstergesidir ve Anayasa metninden SAYILMAZ"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 176",
        degisiklikler: [
          "1982 Anayasası'nda orijinal haliyle korunmuştur"
        ],
        onemliNot: "Başlangıç kısmının metne dahil olduğu, kenar başlıkların ise metne dahil olmadığı kuralı klasik sınav sorusudur."
      },
      favoriMi: false,
      cipMi: true
    },
    {
      id: 177,
      maddeNo: 177,
      baslik: "Madde 177 - Anayasanın Yürürlüğe Girmesi",
      metni: "Bu Anayasa, halkoylaması sonucu kabul edilip Resmî Gazetede yayımlanması ile Türkiye Cumhuriyeti Anayasası olur ve kanunda belirtilen istisnai hükümler dışındaki kısımlarıyla bütünüyle yürürlüğe girer.",
      tuzaklar: {
        aciklama: "Anayasa'nın halkoylaması sonucunda Resmi Gazete'de yayımlanarak yürürlüğe girmesini düzenler.",
        hap: [
          "Anayasa halkoylaması sonucu kabul edilip Resmi Gazete'de yayımlandığı gün yürürlüğe girmiştir"
        ]
      },
      tarihce: {
        baslik: "1982 Anayasası - Madde 177",
        degisiklikler: [
          "7 Kasım 1982 tarihinde Resmi Gazete'de yayımlanarak yürürlüğe girmiştir"
        ],
        onemliNot: "Kurucu referandumun yürürlük şartını belirleyen son maddedir."
      },
      favoriMi: false,
      cipMi: false
    }

  ]
};

window.anayasaDB = anayasaDB;