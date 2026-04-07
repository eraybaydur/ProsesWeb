import {
  Database,
  Zap,
  BarChart3,
  Workflow,
  Cpu,
  Shield,
  FileText,
  Code,
  Headphones,
  Settings,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

// ────────────────────────────────────────────
// Type Definitions
// ────────────────────────────────────────────

export interface SolutionFeature {
  title: string;
  description: string;
}

export interface SolutionBenefit {
  value: string;
  label: string;
}

export interface SolutionFaq {
  question: string;
  answer: string;
}

export interface SolutionSeo {
  title: string;
  description: string;
  keywords: string[];
}

export interface Solution {
  slug: string;
  name: string;
  headline: string;
  description: string;
  shortDescription: string;
  logo: string;
  targetAudience: string;
  features: SolutionFeature[];
  modules: string[];
  benefits: SolutionBenefit[];
  integrations: string[];
  faq: SolutionFaq[];
  seo: SolutionSeo;
  color: string;
  gradient: string;
  icon: LucideIcon;
}

export interface Service {
  slug: string;
  name: string;
  headline: string;
  description: string;
  features: SolutionFeature[];
  subServices?: { name: string; description: string }[];
  faq: SolutionFaq[];
  seo: SolutionSeo;
  icon: LucideIcon;
  relatedSolutions: string[];
}

export interface Region {
  slug: string;
  name: string;
  headline: string;
  description: string;
  highlights: string[];
  seo: SolutionSeo;
}

// ────────────────────────────────────────────
// Solutions (Products)
// ────────────────────────────────────────────

export const solutions: Solution[] = [
  {
    slug: "logo-tiger-3",
    name: "Logo Tiger 3 Enterprise",
    headline: "İşletmenizi Bütünleşik Yönetin, Sınırları Aşın!",
    description:
      "Logo'nun kurumsal kaynak planlama alanındaki bilgi birikimi ile yeni nesil teknolojilerini bir araya getirerek geliştirdiği Logo Tiger 3 Enterprise, kurumsal kaynak planlama süreçlerine yeni bir bakış açısı getiriyor. Ölçeklenebilir, esnek, geliştirilebilir, güvenilir ve sektör bağımsız yapısıyla değişen ihtiyaçlara kolayca uyum sağlar.\n\nRol bazlı kişiselleştirilebilir masaüstü, app-in-app teknolojisi, ürün içi arama motoru ve kolay entegrasyon yetenekleriyle zenginleştirilen Tiger 3 Enterprise, ihtiyaca göre yeniden şekillendirilebilen uçtan uca bir ERP deneyimi sunar. Kullanıcı yorumları dikkate alınarak geliştirilen estetik tasarımıyla benzersiz bir kullanıcı deneyimi sağlar.\n\nKapsamlı üretim faaliyetleri olan orta ve büyük ölçekli işletmelere yönelik Tiger 3 Enterprise, üretimde sürdürülebilir verimliliği destekler, süreçleri kolaylaştırır ve geniş fonksiyon yelpazesiyle üretim süreçlerindeki tüm ihtiyaçları karşılar. Proses Yazılım olarak 15 yılı aşkın deneyimimizle Bursa ve çevresindeki işletmelerin dijital dönüşüm yolculuğunda yanındayız.",
    shortDescription:
      "Üretimden satışa, finanstan tedarik zincirine — tüm iş süreçlerinizi uçtan uca yöneten kapsamlı kurumsal ERP çözümü.",
    logo: "/tiger.webp",
    targetAudience:
      "Orta ve büyük ölçekli üretim, ticaret ve hizmet işletmeleri",
    features: [
      {
        title: "Üretim Planlama ve Çizelgeleme",
        description:
          "Ana Üretim Çizelgeleme (MPS), Malzeme İhtiyaç Planlama (MRP), Kapasite Çizelgeleme ve Sipariş Teslim Tarihi Atama (CTP) fonksiyonlarıyla üretim süreçlerinizi safha bazlı yönetin. Gantt şeması üzerinde görselleştirme ile hızlı karar alın.",
      },
      {
        title: "Finans ve Muhasebe Yönetimi",
        description:
          "TFRS'ye uygun finansal raporlama, çift yönlü denetim ile sistem tutarlılığı, e-Beyanname gönderimi, esnek döviz sistemi ve uluslararası muhasebe standartları (FAS52/US GAAP) desteğiyle mali süreçlerinizi eksiksiz yönetin.",
      },
      {
        title: "Maliyet Muhasebesi",
        description:
          "Malzeme, genel gider, istasyon ve işçilik maliyetlerini hesaplayarak safha bazlı üretim maliyeti değerlendirmesi yapın. Satış öncesi ve stok durumunda birim maliyetleri anlık görüntüleyin.",
      },
      {
        title: "Tedarik ve Stok Yönetimi",
        description:
          "Tedarikçi tekliflerini değerlendirin, karşılaştırın ve satın alma kararlarını hızla verin. Matris ara birimi, çevrim katsayıları ve boyut tanımlama ile stok operasyonlarınızı en üst düzeye çıkarın.",
      },
      {
        title: "Satış, Dağıtım ve Fiyatlandırma",
        description:
          "Otomatik teklif şablonları, kampanya stratejileri, plasiye bazlı hedef ve performans ölçümü, rota tanımlama ve dövizli fatura desteğiyle satış süreçlerinizi optimize edin.",
      },
      {
        title: "Çoklu Şirket ve Konsolidasyon",
        description:
          "Grup bazında kârlılık hesaplama, envanteri bütün olarak görme, nakit akışı analizi ve konsolidasyon tabloları ile birden fazla şirketi tek merkezden etkin şekilde yönetin.",
      },
      {
        title: "Duran Varlık Yönetimi",
        description:
          "Sabit kıymet alım, zimmet ve elden çıkarma süreçlerini takip edin. VUK, TFRS ve yurt dışı raporlamaya uygun birden fazla amortisman tablosu desteği ile varlıklarınızı doğru değerleyin.",
      },
      {
        title: "Dış Ticaret Modülü",
        description:
          "İthalat ve ihracat işlemlerini muhasebe, finans, satın alma, satış ve dağıtım süreçleriyle entegre şekilde yönetin. Tüm yasal yükümlülükleri tek noktadan takip edin.",
      },
    ],
    modules: [
      "Genel Muhasebe",
      "Cari Hesap",
      "Stok Yönetimi",
      "Satın Alma",
      "Satış ve Dağıtım",
      "Üretim Planlama (MPS/MRP/CTP)",
      "Kapasite Çizelgeleme",
      "Maliyet Muhasebesi",
      "Duran Varlık Yönetimi",
      "Dış Ticaret",
      "Banka ve Çek/Senet",
      "Kalite Yönetimi",
      "Konsolidasyon Tabloları",
      "Yönetici Konsolu",
    ],
    benefits: [
      {
        value: "%40",
        label: "Operasyonel verimlilik artışı",
      },
      {
        value: "%30",
        label: "Stok maliyetlerinde azalma",
      },
      {
        value: "2x",
        label: "Daha hızlı raporlama süresi",
      },
    ],
    integrations: [
      "e-Fatura / e-Arşiv",
      "e-İrsaliye / e-Defter",
      "Logo CRM",
      "Logo Flow (İş Akışı Yönetimi)",
      "Logo Mind (İş Analitik)",
      "Logo Budget (Bütçe Planlama)",
      "Logo İnsan Kaynakları",
      "Logo Ocean / Neon (Depo Yönetimi)",
      "Logo Diva (Perakende)",
      "Logo Mobile Sales (Saha Satış)",
      "B2B / e-Ticaret Portalları",
    ],
    faq: [
      {
        question: "Logo Tiger 3 Enterprise hangi ölçekteki firmalara uygundur?",
        answer:
          "Tiger 3 Enterprise, kapsamlı üretim faaliyetleri olan orta ve büyük ölçekli işletmeler için tasarlanmıştır. Üretim, ticaret ve hizmet sektörlerinde faaliyet gösteren, çok şubeli veya çok şirketli yapılara sahip firmalar için idealdir. Ölçeklenebilir yapısıyla zaman içinde değişen gereksinimlere kolayca uyum sağlar.",
      },
      {
        question: "Tiger 3 Enterprise'ın üretim planlama özellikleri nelerdir?",
        answer:
          "Tiger 3 Enterprise; Ana Üretim Çizelgeleme (MPS), Malzeme İhtiyaç Planlama (MRP), Sipariş Teslim Tarihi Atama (CTP) ve Kapasite Çizelgeleme fonksiyonlarını sunar. Gantt şeması üzerinde görselleştirme, sonlu/sonsuz kapasite planlama ve alternatif makine yönlendirme özellikleri ile üretim süreçlerinizi uçtan uca optimize eder.",
      },
      {
        question: "Tiger 3 kurulumu ne kadar sürer?",
        answer:
          "Standart bir Tiger 3 kurulumu ortalama 4-8 hafta sürmektedir. Süre, firmanın büyüklüğüne, modül sayısına ve özelleştirme ihtiyacına göre değişebilir. Proses Yazılım olarak detaylı proje planı ile süreci şeffaf şekilde yönetiyoruz.",
      },
      {
        question: "Logo GO Wings'ten Tiger 3 Enterprise'a geçiş yapılabilir mi?",
        answer:
          "Evet, Logo GO Wings kullanıcıları verilerini kaybetmeden Tiger 3 Enterprise'a yükseltme yapabilir. Veri aktarımı ve eğitim süreçlerinde Proses Yazılım ekibi tam destek sağlamaktadır.",
      },
      {
        question: "Tiger 3 Enterprise hangi Logo çözümleriyle entegre çalışır?",
        answer:
          "Tiger 3 Enterprise; Logo CRM, Logo Flow, Logo Mind, Logo Budget, İnsan Kaynakları, Depo Yönetim Sistemleri (Ocean/Neon), Saha Satış Yönetimi, Perakende (Diva) ve e-Çözümler ile sorunsuz entegre çalışır. App-in-app teknolojisi sayesinde Logo Store üzerinden ek widget ve uygulamalar da eklenebilir.",
      },
      {
        question: "Tiger 3 Enterprise'ın lisans maliyeti nedir?",
        answer:
          "Lisans maliyeti kullanıcı sayısına ve seçilen modüllere göre değişmektedir. Firmanıza özel fiyat teklifi almak için bizimle iletişime geçebilirsiniz. Proses Yazılım olarak en uygun lisans paketini birlikte belirleyelim.",
      },
    ],
    seo: {
      title: "Logo Tiger 3 Enterprise ERP | Proses Yazılım - Bursa",
      description:
        "Logo Tiger 3 Enterprise ERP ile üretim planlama (MPS/MRP/CTP), finans, tedarik zinciri ve maliyet muhasebesi yönetimi. Bursa Logo yetkili iş ortağı Proses Yazılım'dan kurulum ve destek.",
      keywords: [
        "Logo Tiger 3 Enterprise",
        "Tiger 3 ERP",
        "Logo Tiger Enterprise",
        "ERP yazılımı",
        "üretim planlama MRP",
        "maliyet muhasebesi",
        "kurumsal kaynak planlama",
        "Logo ERP Bursa",
        "Logo yazılım çözüm ortağı",
        "kapasite çizelgeleme",
      ],
    },
    color: "#f97316",
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    icon: Database,
  },
  {
    slug: "logo-go-wings",
    name: "Logo GO Wings",
    headline: "KOBİ'lerin Dijital Dönüşüm Ortağı — Her An, Her Yerde",
    description:
      "Logo'nun teknolojik bilgi birikimi ile inovasyon yeteneğini bir araya getirerek geliştirdiği web üzerinden kullanılabilen Logo GO Wings, KOBİ'lerin siparişten muhasebeye kadar uzanan iş süreçlerini tek noktadan zaman ve mekandan bağımsız uçtan uca yönetmenizi sağlıyor. Tam kapsamlı ve esnek yapıda olan Logo GO Wings, kullanıcı yorumlarına göre yenilenen arayüzüyle kolay ve verimli uygulamalar sunuyor.\n\nYeni nesil teknolojilerle geliştirilen hem masaüstü hem de web üzerinden kullanılabilen hybrid yapılı Logo GO Wings, rol bazlı kişiselleştirilebilir masaüstü, ürün içi arama motoru ve app-in-app teknolojisi ile kullanıcı deneyimini bambaşka bir boyuta taşıyor. Estetik tasarımı ve entegrasyona uygun yapısıyla iş süreçlerinizde benzersiz bir deneyim sunuyor.\n\nProses Yazılım olarak Logo GO Wings kurulumunu hızlı bir şekilde tamamlıyor, eğitim ve destek hizmetlerimizle firmanızın sisteme sorunsuz adapte olmasını sağlıyoruz. Bursa ve çevresindeki KOBİ'lerin dijital dönüşüm yolculuğunda yanındayız.",
    shortDescription:
      "Web üzerinden kullanılabilen, KOBİ'ler için tam kapsamlı ve esnek ERP çözümü — her an, her yerde elinizin altında.",
    logo: "/gowings.webp",
    targetAudience: "Küçük ve orta büyüklükteki ticaret ve hizmet işletmeleri",
    features: [
      {
        title: "Finansal Yönetim ve Nakit Akışı",
        description:
          "Cari hesap işlemleri, banka, kredi kartı, çek ve senet takibi, kasa işlemleri ve banka kredi takibi ile tüm nakit akışınızı yönetin. Esnek ödeme ve tahsilat yapısı sayesinde tüm finansal ihtiyaçlarınıza pratik çözümler üretin.",
      },
      {
        title: "Stok Operasyonları ve Maliyet Takibi",
        description:
          "Stok durumunu anlık izleyin, stok maliyetlerini şeffaf takip edin. Stok kartlarını detaylı görüntüleyin, fotoğraf ekleyin, birden fazla birim tanımlayın. Sınırsız barkod, seri ve lot numarası desteğiyle envanter kontrolünüzü güçlendirin.",
      },
      {
        title: "Sipariş ve Satış Yönetimi",
        description:
          "Siparişten irsaliye ve faturaya kadar tüm satış süreçlerini hızla yönetin. Çoklu para birimi, ambar bazlı fiyat tanımlama, toplu fiyat güncelleme ve satıcı bazında performans ölçümü ile satış operasyonlarınızı optimize edin.",
      },
      {
        title: "Satın Alma Süreçleri",
        description:
          "Sipariş aşamasından malın teslim alınması ve fatura girişine kadar tüm satın alma süreçlerini planlayın. Fiyat, indirim ve ödeme koşullarının geçerlilik süreleri ve maliyetleri yakından takip edin. Stok miktarı yetersiz olduğunda otomatik satın alma siparişi oluşturun.",
      },
      {
        title: "Yasal Mevzuat Uyumu ve e-Çözümler",
        description:
          "Güncel yasal mevzuata tam uyumlu yapı, standart hesap planı otomatik oluşturma, e-Beyanname (Form Ba-Bs, KDV, MUHSGK), e-Fatura, e-Defter ve e-Arşiv entegrasyonlarıyla tüm yasal yükümlülüklerinizi karşılayın.",
      },
      {
        title: "Kullanıcı Dostu Hybrid Arayüz",
        description:
          "Hem masaüstü hem web üzerinden kullanılabilen hybrid yapı, rol bazlı kişiselleştirilebilir masaüstü, sürükle-bırak ile fonksiyon gruplama, kısayol tuşu özelleştirme ve geliştirilmiş arama özellikleri ile verimli bir kullanıcı deneyimi yaşayın.",
      },
    ],
    modules: [
      "Genel Muhasebe",
      "Cari Hesap",
      "Stok Yönetimi",
      "Satın Alma",
      "Satış Yönetimi",
      "Fatura Yönetimi",
      "Banka ve Çek/Senet",
      "Kasa İşlemleri",
      "Sabit Kıymet",
      "Talep Yönetimi",
      "Teminat",
      "Yönetim Karar Destek",
      "İş Akış Yönetimi",
      "e-Mutabakat",
    ],
    benefits: [
      {
        value: "7/24",
        label: "Web üzerinden her yerden erişim",
      },
      {
        value: "%100",
        label: "Yasal mevzuata tam uyum",
      },
      {
        value: "Hybrid",
        label: "Masaüstü + web kullanım esnekliği",
      },
    ],
    integrations: [
      "e-Fatura / e-Arşiv",
      "e-İrsaliye",
      "e-Defter",
      "e-Mutabakat",
      "Logo CRM",
      "Logo Flow İş Akış Yönetimi",
      "Depo Yönetim Sistemleri",
      "Saha Satış Yönetimi",
      "İş Analitiği Çözümleri",
      "Logo Perakende Çözümleri",
    ],
    faq: [
      {
        question: "Logo GO Wings ile Logo Tiger 3 arasındaki fark nedir?",
        answer:
          "Logo GO Wings, KOBİ'ler için web üzerinden de kullanılabilen hybrid yapılı bir ERP çözümüdür. Tiger 3 Enterprise ise kapsamlı üretim planlama, insan kaynakları ve maliyet muhasebesi gibi ileri modüller sunan kurumsal ölçekli bir çözümdür. İhtiyaçlarınız büyüdüğünde GO Wings'ten Tiger 3'e yükseltilebilir.",
      },
      {
        question: "Logo GO Wings web üzerinden kullanılabilir mi?",
        answer:
          "Evet, Logo GO Wings hem masaüstü hem de web üzerinden kullanılabilen hybrid yapıya sahiptir. Web tarayıcısı üzerinden zaman ve mekandan bağımsız olarak tüm iş süreçlerinizi yönetebilirsiniz.",
      },
      {
        question: "Logo GO Wings'i özelleştirebilir miyim?",
        answer:
          "Evet, Logo GO Wings app-in-app teknolojisi sayesinde widget ve app'lerle zenginleştirilebilir. Rol bazlı kişiselleştirilebilir masaüstü, sürükle-bırak ile fonksiyon gruplama ve kısayol tuşu özelleştirme imkanı sunar. Logo ve iş ortaklarının geliştirdiği sektöre özel uygulamalar da entegre edilebilir.",
      },
      {
        question: "GO Wings ile e-Fatura kesebilir miyim?",
        answer:
          "Evet, Logo GO Wings e-Fatura, e-Arşiv Fatura, e-İrsaliye ve e-Defter entegrasyonlarını tam olarak destekler. GİB standartlarına uygun altyapıyla yasal yükümlülüklerinizi kolayca karşılayabilirsiniz. Ayrıca e-Beyanname özelliği ile Form Ba-Bs, KDV, MUHSGK gibi beyannameleri hazırlayabilirsiniz.",
      },
    ],
    seo: {
      title: "Logo GO Wings | KOBİ ERP Çözümü | Proses Yazılım",
      description:
        "Logo GO Wings ile KOBİ'ler için web üzerinden kullanılabilen, tam kapsamlı ve esnek ERP çözümü. Bursa Logo çözüm ortağı Proses Yazılım.",
      keywords: [
        "Logo GO Wings",
        "KOBİ ERP",
        "web tabanlı ERP",
        "bulut ERP",
        "küçük işletme ERP",
        "Logo yazılım",
        "Bursa ERP",
        "muhasebe programı",
        "Logo Go Wings",
      ],
    },
    color: "#6366f1",
    gradient: "from-blue-500 via-indigo-500 to-violet-500",
    icon: Zap,
  },
  {
    slug: "logo-crm",
    name: "Logo CRM",
    headline: "Satış Öncesinde ve Sonrasında Süreçleriniz Elinizin Altında!",
    description:
      "Tüm şirketler, müşterilerle doğru iletişimi kurarak mevcut müşterilerinin sadakatını artırmayı ve potansiyel müşterilerine ulaşabilmeyi hedefliyor. Yeni nesil teknolojilerle geliştirilen Logo CRM ile pazarlama, satış ve müşteri hizmetleri süreçlerini uçtan uca yönetin, müşteri ilişkilerinde başarıyı yakalayın.\n\nLogo CRM güçlü kurumsal hafıza oluşturarak potansiyel ve aktif müşterilerinizi, bayilerinizi, tedarikçilerinizi kolayca tanımlayıp gruplamanızı sağlıyor. Fırsatlardan aktivitelere, dokümanlardan sözleşmelere kadar tüm ilişkili kayıtları tek noktadan yönetin. Otomatik görevler ile müşterilerinizin özel gün kutlamalarından sözleşme bitiş tarihlerine kadar tüm süreçlerin size zamanında bildirilmesini sağlayın.\n\nWeb tabanlı yapısı sayesinde her an her yerden erişilebilen Logo CRM'in mobil uygulaması da ürünün web arayüzündeki tüm modül ve fonksiyonları kapsıyor. Yakınımdakiler özelliği ile bulunulan bölgedeki müşterileri harita üzerinde görüntüleyin, Check-in/Check-out ile saha çalışanlarınızı takip edin. Proses Yazılım olarak Logo CRM kurulumunda sektöre özel özelleştirmeler yapıyor, satış ekiplerinize uygulamalı eğitim veriyoruz.",
    shortDescription:
      "Pazarlama, satış ve müşteri hizmetleri süreçlerini uçtan uca yöneten, web tabanlı ve mobil uyumlu CRM çözümü.",
    logo: "/logocrm.webp",
    targetAudience:
      "Her ölçekten satış ve müşteri ilişkileri odaklı işletmeler",
    features: [
      {
        title: "Güçlü Kurumsal Hafıza",
        description:
          "Potansiyel ve aktif müşterilerinizi, bayilerinizi, tedarikçilerinizi kolayca tanımlayıp gruplayın. Kişiler, fırsatlar, takvim etkinlikleri, aktiviteler, dokümanlar ve sözleşmeler gibi tüm ilişkili kayıtları tek noktadan yönetin.",
      },
      {
        title: "Satış ve Fırsat Yönetimi",
        description:
          "Satış fırsatlarınızı aşama aşama izleyin, teklif süreçlerini yönetin ve satış hedeflerinize ulaşma oranınızı artırın. Kampanya yönetimi ile hedefli pazarlama faaliyetleri planlayın ve ROI analizi yapın.",
      },
      {
        title: "Satış Sonrası Destek",
        description:
          "Özelleştirilebilen Satış Sonrası Destek modülü ile destek taleplerini, müşteri memnuniyetini, şikâyet yönetimini ve IP santralinizle entegre çağrı merkezi süreçlerinizi yönetin. E-posta ile gelen talepleri otomatik olarak sisteme aktarın.",
      },
      {
        title: "Otomatik Görevler ve Bildirimler",
        description:
          "Otomatik gönderim yönetim sistemi ile müşteri özel gün kutlamalarından sözleşme bitiş tarihlerine, verilen tekliflerin durumundan satış sonrası süreçlere kadar tüm işlemlerin zamanında bildirilmesini sağlayın.",
      },
      {
        title: "Mobil Uygulama ve Saha Takibi",
        description:
          "Web tabanlı yapı ile her yerden erişim sağlayın. Mobil uygulamadaki Yakınımdakiler özelliği ile müşterileri harita üzerinde görün, Check-in/Check-out ile saha ekiplerini takip edin ve rota optimizasyonu yapın.",
      },
      {
        title: "ERP ve Flow Entegrasyonu",
        description:
          "Tiger 3 ve GO Wings ile çift yönlü veri senkronizasyonu sayesinde cari hesap, sipariş ve fatura bilgilerine CRM üzerinden erişin. Logo Flow entegrasyonu ile iş akışlarına CRM içinden doğrudan ulaşın.",
      },
    ],
    modules: [
      "Kişi ve Firma Yönetimi",
      "Fırsat Yönetimi",
      "Teklif Yönetimi",
      "Kampanya Yönetimi",
      "Satış Sonrası Destek",
      "Aktivite Yönetimi",
      "Sözleşme Yönetimi",
      "Otomatik Görevler",
      "KPI ve Dashboard",
      "Raporlama ve Grafik Raporları",
      "E-posta Yönetimi",
      "Outlook Eklentisi",
      "Mobil Uygulama",
    ],
    benefits: [
      {
        value: "%35",
        label: "Satış dönüşüm oranı artışı",
      },
      {
        value: "7/24",
        label: "Mobil ile her yerden erişim",
      },
      {
        value: "3x",
        label: "Daha hızlı teklif süreci",
      },
    ],
    integrations: [
      "Logo Tiger 3 Enterprise",
      "Logo GO Wings",
      "Logo Flow İş Akış Yönetimi",
      "IP Santral Entegrasyonu",
      "Outlook Eklentisi",
      "e-Posta Sunucuları",
      "SMS Servisleri",
    ],
    faq: [
      {
        question: "Logo CRM hangi ERP ürünleriyle entegre çalışır?",
        answer:
          "Logo CRM, Logo Tiger 3 Enterprise ve Logo GO Wings ile entegre çalışmaktadır. Cari hesap, sipariş, fatura ve stok bilgileri çift yönlü olarak senkronize edilir. Ayrıca Logo Flow entegrasyonu ile iş akışlarına CRM içinden erişim sağlanır.",
      },
      {
        question: "Logo CRM'in paket seçenekleri nelerdir?",
        answer:
          "Logo CRM; Basic (maks. 6 kullanıcı), Standard (maks. 16 kullanıcı) ve Enterprise (sınırsız kullanıcı) olmak üzere üç farklı pakette sunulmaktadır. Her paket, işletmenizin büyüklüğüne ve ihtiyaçlarına göre farklı modül ve fonksiyonlar içerir.",
      },
      {
        question: "Logo CRM mobil cihazlardan kullanılabilir mi?",
        answer:
          "Evet, Logo CRM web tabanlı yapısı sayesinde her an her yerden erişilebilir. Mobil uygulaması web arayüzündeki tüm modül ve fonksiyonları kapsıyor. Yakınımdakiler özelliği ile müşterileri harita üzerinde görüntüleyebilir, Check-in/Check-out ile saha çalışanlarınızın takibini yapabilirsiniz.",
      },
      {
        question: "CRM yazılımı sadece satış ekipleri için mi?",
        answer:
          "Hayır, Logo CRM satış ekiplerinin yanı sıra pazarlama, müşteri hizmetleri ve yönetim ekipleri tarafından da kullanılmaktadır. Kampanya yönetimi, satış sonrası destek, KPI dashboard ve yönetici raporları gibi modüllerle tüm müşteri odaklı departmanları kapsar.",
      },
    ],
    seo: {
      title: "Logo CRM | Müşteri İlişkileri Yönetimi | Proses Yazılım",
      description:
        "Logo CRM ile pazarlama, satış ve müşteri hizmetleri süreçlerini uçtan uca yönetin. Mobil uygulama, ERP entegrasyonu ve otomatik görevler. Proses Yazılım Bursa.",
      keywords: [
        "Logo CRM",
        "müşteri ilişkileri yönetimi",
        "CRM yazılımı",
        "satış yönetimi",
        "müşteri takibi",
        "saha satış CRM",
        "mobil CRM",
        "Logo CRM entegrasyon",
        "Bursa CRM",
      ],
    },
    color: "#ec4899",
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    icon: BarChart3,
  },
  {
    slug: "logo-flow",
    name: "Logo Flow",
    headline: "İş Akışlarınızı Elektronik Ortama Taşıyın, Hızınızı Katlayın!",
    description:
      "Logo'nun dijital teknolojilerdeki deneyimi ile iş süreçlerine olan hakimiyetini bir araya getiren Logo Flow İş Akış Yönetimi çözümü, kağıt üzerinde yürütülen tüm süreçleri elektronik ortama taşıyor. İş süreçlerinin oluşturulmasını, takip edilmesini ve sonuçlandırılmasını tamamen dijital ortama taşıyan Logo Flow, iş akışlarının daha verimli ve sorunsuz gerçekleşmesini sağlarken işletme genelinde standardizasyonu artırıyor, maliyetleri ve kayıpları azaltıyor.\n\nSürükle-bırak iş akışı ve form tasarımcısıyla satın alma onayları, masraf onayları, müşteri şikâyet süreçleri, seyahat planlama, yardım masası ve daha birçok iş akışını kolayca dijitalleştirin. Low-code platform yapısıyla IT bağımlılığını azaltın, hazır şablon akışlar ve şablon yönetimi ile hızlı implementasyon sağlayın. iOS ve Android mobil uygulaması sayesinde zaman ve mekandan bağımsız iş akış yönetimi gerçekleştirin.\n\nLogo Tiger 3, GO Wings, İnsan Kaynakları, CRM ve DocPlace ürünleriyle entegre çalışan Logo Flow, ERP süreçlerinizi de otomatikleştirebilir. Proses Yazılım olarak süreç analizi, tasarım ve devreye alma hizmetlerimizle iş süreçlerinizi en verimli şekilde dijitalleştiriyoruz.",
    shortDescription:
      "Kağıt üzerindeki tüm iş süreçlerini elektronik ortama taşıyan, low-code iş akış yönetimi çözümü.",
    logo: "/logoflow.webp",
    targetAudience:
      "Her ölçekten ve sektörden süreç otomasyonu ihtiyacı olan işletmeler",
    features: [
      {
        title: "Sürükle-Bırak Süreç ve Form Tasarımı",
        description:
          "Sürükle-bırak arayüzle iş akışlarınızı ve formlarınızı görsel olarak tasarlayın. Programlama dili bilmeye gerek duymadan low-code platform üzerinde kolay ve hızlı görsel uyarlama ile süreçlerinizi oluşturun.",
      },
      {
        title: "Otomatik Süreç Başlatma ve Görev Atama",
        description:
          "Logo çözümlerinde ve diğer uygulamalarda yapılan işlemler arka planda izlenerek otomatik akış başlatılıyor. Başlatılan akışlar belirli kişiler, ekipler ya da departmanlara görev olarak atanabiliyor ve sistem üzerinde görüntülenebiliyor.",
      },
      {
        title: "Yetkilendirme ve Yetki Devretme",
        description:
          "Bağımsız organizasyon grubu ve hiyerarşi tanımlamaları, yetki devirleri ve vekalet atamaları kolayca yapılabiliyor. KPI anlamında verimlilik artışı sağlanarak insan kaynağı en etkin şekilde yönetiliyor.",
      },
      {
        title: "Zaman Aşımı Kontrolü ve Anlık Bilgilendirme",
        description:
          "Ayrıntılı yönetim ekranı ve zaman aşımı kontrolü ile görevlerin durumunu anlık izleyin. E-posta bildirim özelliği ve mail üzerinden onay işlemleri sayesinde değişiklikleri anında öğrenin ve aksiyona geçin.",
      },
      {
        title: "Özelleştirilebilir Dashboard ve Raporlama",
        description:
          "İşletmenizin ihtiyaçlarına göre uyarlanabilen dashboard üzerinden akışları kısayol olarak ekleyin, onay bekleyen işlerin detayına ulaşın. Grafik bileşenleri ile görsel rapor tasarımı ve KPI raporlama ile süreçlerinizi analiz edin.",
      },
      {
        title: "Mobil Uygulama ve Güvenlik",
        description:
          "iOS ve Android cihazlarda kullanılabilen mobil uygulama ile her yerden iş akışlarınızı yönetin. Kağıt üzerindeki evrak kaybolma riskini ortadan kaldıran güvenlik odaklı tasarım ile elektronik imza desteği sunuyor.",
      },
    ],
    modules: [
      "Süreç Tasarımcısı",
      "Form Tasarımcısı",
      "Görev Yönetimi",
      "Onay Yönetimi",
      "Zaman Aşımı Kontrolü",
      "Bildirim Merkezi",
      "Dashboard",
      "KPI Raporlama",
      "Özel Akış Raporları",
      "Entegrasyon Modülü",
      "Arşivleme ve Bakım",
      "Mobil Uygulama (iOS & Android)",
      "Elektronik İmza",
      "Barkod Okuma ve Oluşturma",
    ],
    benefits: [
      {
        value: "%70",
        label: "Manuel iş yükünde azalma",
      },
      {
        value: "%50",
        label: "Onay sürelerinde kısalma",
      },
      {
        value: "7/24",
        label: "Mobil ile her yerden erişim",
      },
    ],
    integrations: [
      "Logo Tiger 3 Enterprise",
      "Logo GO Wings",
      "Logo İnsan Kaynakları (HR)",
      "Logo CRM",
      "Logo DocPlace",
      "E-posta Sunucuları",
      "Active Directory / LDAP",
      "REST API",
    ],
    faq: [
      {
        question: "Logo Flow ile hangi süreçler otomatikleştirilebilir?",
        answer:
          "Masraf onayları, satın alma sipariş onayları, müşteri şikâyet süreçleri, personel masraf formları, seyahat planlama, yardım masası ve daha birçok iş süreci Logo Flow ile otomatikleştirilebilir. Hazır şablon akışlar sayesinde hızlıca başlayabilirsiniz.",
      },
      {
        question: "Logo Flow kullanmak için yazılım bilgisi gerekli mi?",
        answer:
          "Hayır, Logo Flow low-code platform yapısıyla sürükle-bırak arayüzü sayesinde programlama dili bilmeye gerek duymadan süreçlerinizi ve formlarınızı tasarlayabilirsiniz. Şablon yönetimi ile kolay ve hızlı implementasyon sağlanıyor. Proses Yazılım olarak başlangıç eğitimi ile iş birimlerinizin kendi süreçlerini yönetmesini sağlıyoruz.",
      },
      {
        question: "Logo Flow mobil cihazlarda kullanılabilir mi?",
        answer:
          "Evet, Logo Flow iOS ve Android cihazlarda kullanılabilen mobil uygulaması sayesinde zaman ve mekandan bağımsız iş akış yönetimi sağlıyor. Mobil ortamda onay verme, görev takibi ve form doldurma işlemlerini rahatlıkla yapabilirsiniz.",
      },
      {
        question: "Flow ile ERP arasında veri aktarımı nasıl yapılır?",
        answer:
          "Logo Flow; Tiger 3, GO Wings, İnsan Kaynakları, CRM ve DocPlace ürünleriyle entegre çalışabiliyor. Süreç adımlarında ERP verilerini okuyabilir, güncelleyebilir veya yeni kayıt oluşturabilirsiniz. Ayrıca Logo Çözüm Ortaklarının sektöre özel geliştirdiği uygulamalar da sisteme entegre edilebilir.",
      },
    ],
    seo: {
      title: "Logo Flow BPM | İş Akış Yönetimi Çözümü | Proses Yazılım",
      description:
        "Logo Flow ile iş akışlarınızı elektronik ortama taşıyın. Low-code süreç tasarımı, onay akışları, mobil uygulama ve ERP entegrasyonu. Proses Yazılım Bursa.",
      keywords: [
        "Logo Flow",
        "iş akış yönetimi",
        "BPM yazılımı",
        "süreç otomasyonu",
        "onay akışı",
        "low-code BPM",
        "iş süreçleri yönetimi",
        "dijital iş akışı",
        "Bursa BPM",
      ],
    },
    color: "#10b981",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    icon: Workflow,
  },
  {
    slug: "logo-mind",
    name: "Logo Mind",
    headline: "Verilerinizi Değere Dönüştüren İş Zekâsı Platformu",
    description:
      "Logo Mind, işletmenizin tüm verilerini anlamlı gösterge panellerine ve raporlara dönüştüren iş zekâsı (BI) çözümüdür. Ad-hoc raporlama, veri görselleştirme ve KPI takibi ile operasyonel ve stratejik kararlarınızı veriye dayalı olarak alın.\n\nLogo ERP ürünleriyle hazır veri bağlantıları sayesinde kurulum sonrası hemen raporlamaya başlayabilirsiniz. Satış trendleri, kârlılık analizleri, stok devir hızları ve finansal göstergelerinizi interaktif panolarda takip edin.\n\nProses Yazılım olarak Logo Mind kurulumunda sektöre özel gösterge panelleri tasarlıyor, kullanıcı eğitimleri veriyor ve özel rapor geliştirme hizmetleri sunuyoruz.",
    shortDescription:
      "Gösterge panelleri, ad-hoc raporlama ve KPI takibi sunan iş zekâsı platformu.",
    logo: "/logomind.webp",
    targetAudience:
      "Veri odaklı karar almak isteyen orta ve büyük ölçekli işletmeler",
    features: [
      {
        title: "İnteraktif Gösterge Panelleri",
        description:
          "Sürükle-bırak araçlarıyla özelleştirilebilir dashboard'lar oluşturun. Gerçek zamanlı veri akışıyla anlık kararlar alın.",
      },
      {
        title: "Ad-Hoc Raporlama",
        description:
          "IT desteği olmadan kendi raporlarınızı oluşturun. Filtreleme, gruplama, pivot ve drill-down özellikleriyle verilerinizi derinlemesine analiz edin.",
      },
      {
        title: "Veri Görselleştirme",
        description:
          "Grafik, harita, ısı haritası ve trend çizgileriyle verilerinizi görsel olarak anlamlı hale getirin. Sunum kalitesinde raporlar oluşturun.",
      },
      {
        title: "KPI Takibi ve Uyarılar",
        description:
          "Kritik performans göstergelerinizi tanımlayın, hedef değerlerle karşılaştırın ve eşik aşımlarında otomatik uyarı alın.",
      },
      {
        title: "Hazır Logo ERP Bağlantıları",
        description:
          "Tiger 3, GO Wings ve diğer Logo ürünleriyle önceden tanımlı veri bağlantıları sayesinde kurulum sonrası hemen raporlamaya başlayın.",
      },
      {
        title: "Mobil Erişim",
        description:
          "Gösterge panellerinize ve raporlarınıza tablet ve akıllı telefonlardan her yerden erişin. Yönetim toplantılarında anlık veriye ulaşın.",
      },
    ],
    modules: [
      "Dashboard Tasarımcısı",
      "Rapor Tasarımcısı",
      "KPI Yönetimi",
      "Veri Kaynağı Yönetimi",
      "Zamanlayıcı",
      "Kullanıcı ve Yetki Yönetimi",
      "Mobil Uygulama",
      "Veri Ambarı",
    ],
    benefits: [
      {
        value: "%80",
        label: "Rapor hazırlama süresinde azalma",
      },
      {
        value: "Anlık",
        label: "Gerçek zamanlı veri erişimi",
      },
      {
        value: "%45",
        label: "Karar alma hızında artış",
      },
    ],
    integrations: [
      "Logo Tiger 3 Enterprise",
      "Logo GO Wings",
      "SQL Server / Oracle",
      "Excel / CSV",
      "REST API",
    ],
    faq: [
      {
        question: "Logo Mind sadece Logo ERP verileriyle mi çalışır?",
        answer:
          "Hayır, Logo Mind farklı veri kaynaklarını destekler. SQL Server, Oracle, Excel, CSV ve REST API gibi kaynaklardan veri alabilir. Ancak Logo ERP ürünleriyle hazır bağlantılar sunarak en hızlı kurulumu sağlar.",
      },
      {
        question: "İş zekâsı yazılımı kullanmak için teknik bilgi gerekir mi?",
        answer:
          "Logo Mind'ın kullanıcı dostu arayüzü sayesinde temel raporları ve panelleri teknik bilgi olmadan oluşturabilirsiniz. İleri düzey analizler için Proses Yazılım eğitim ve danışmanlık desteği sunmaktadır.",
      },
      {
        question: "Mind ile hangi tür raporlar oluşturulabilir?",
        answer:
          "Satış analizleri, kârlılık raporları, stok devir hızları, alacak yaşlandırma, üretim verimliliği, finansal tablolar ve daha birçok rapor oluşturulabilir. Sektöre özel hazır rapor şablonları da mevcuttur.",
      },
      {
        question: "Logo Mind bulut üzerinde çalışır mı?",
        answer:
          "Evet, Logo Mind hem yerel sunucu hem de bulut ortamında çalışabilir. Bulut çözümüyle farklı lokasyonlardan güvenli erişim sağlayabilirsiniz.",
      },
    ],
    seo: {
      title: "Logo Mind İş Zekâsı (BI) | Proses Yazılım",
      description:
        "Logo Mind iş zekâsı ile gösterge panelleri, KPI takibi ve ad-hoc raporlama. Logo ERP entegrasyonlu BI çözümü. Proses Yazılım Bursa.",
      keywords: [
        "Logo Mind",
        "iş zekâsı",
        "BI yazılımı",
        "raporlama",
        "gösterge paneli",
        "dashboard",
        "veri analizi",
        "KPI takibi",
        "Logo BI",
      ],
    },
    color: "#06b6d4",
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    icon: Cpu,
  },
  {
    slug: "logo-budget",
    name: "Logo Budget",
    headline: "Bütçe Planlama ve Kontrol ile Finansal Disiplin",
    description:
      "Logo Budget, işletmelerin bütçe planlama, kontrol ve analiz süreçlerini dijitalleştiren kapsamlı bir çözümdür. Yukarıdan aşağıya (top-down) veya aşağıdan yukarıya (bottom-up) bütçeleme yöntemleriyle departman bazlı bütçe oluşturabilir, gerçekleşen verilerle karşılaştırma yapabilirsiniz.\n\nVaryans analizi ile bütçe sapmalarını anlık olarak tespit edebilir, senaryo analizi ile farklı iş senaryolarının finansal etkilerini önceden görebilirsiniz. Logo ERP'den gerçekleşen verileri otomatik olarak çekerek bütçe-gerçekleşen karşılaştırmalarınızı güncel tutun.\n\nProses Yazılım olarak Logo Budget kurulumunda bütçe modelinizi birlikte tasarlıyor, departman yöneticilerinize eğitim veriyor ve ilk bütçe döngüsünde tam destek sağlıyoruz.",
    shortDescription:
      "Top-down ve bottom-up bütçeleme, varyans analizi ve senaryo planlama çözümü.",
    logo: "/logobudget.webp",
    targetAudience:
      "Bütçe planlama ihtiyacı olan orta ve büyük ölçekli işletmeler, finans departmanları",
    features: [
      {
        title: "Çoklu Bütçeleme Yöntemleri",
        description:
          "Top-down, bottom-up ve karma bütçeleme yaklaşımlarıyla organizasyonunuza uygun bütçe süreçleri tasarlayın.",
      },
      {
        title: "Varyans Analizi",
        description:
          "Bütçe ile gerçekleşen değerleri otomatik karşılaştırın, sapmaları anlık tespit edin ve düzeltici aksiyonlar planlayın.",
      },
      {
        title: "Senaryo Analizi",
        description:
          "İyimser, kötümser ve en olası senaryolarla bütçe modellerinizi oluşturun. What-if analizleriyle stratejik kararlarınızı destekleyin.",
      },
      {
        title: "Departman Bazlı Bütçe Yönetimi",
        description:
          "Her departman için ayrı bütçe kalemleri tanımlayın, onay akışlarıyla bütçe taleplerini yönetin ve harcama limitlerini kontrol edin.",
      },
      {
        title: "ERP Gerçekleşen Veri Entegrasyonu",
        description:
          "Logo Tiger 3 ve GO Wings'ten gerçekleşen muhasebe verilerini otomatik çekerek bütçe karşılaştırmalarınızı güncel tutun.",
      },
      {
        title: "Raporlama ve Sunum",
        description:
          "Bütçe performans raporları, sapma grafikleri ve yönetim kurulu sunumları için profesyonel çıktılar oluşturun.",
      },
    ],
    modules: [
      "Bütçe Planlama",
      "Bütçe Onay Akışı",
      "Gerçekleşen Veri Takibi",
      "Varyans Analizi",
      "Senaryo Yönetimi",
      "Departman Bütçeleri",
      "Konsolidasyon",
      "Raporlama",
    ],
    benefits: [
      {
        value: "%90",
        label: "Excel bağımlılığında azalma",
      },
      {
        value: "%40",
        label: "Bütçe hazırlama süresinde kısalma",
      },
      {
        value: "Anlık",
        label: "Bütçe-gerçekleşen karşılaştırma",
      },
    ],
    integrations: [
      "Logo Tiger 3 Enterprise",
      "Logo GO Wings",
      "Logo Mind",
      "Excel İçe/Dışa Aktarma",
    ],
    faq: [
      {
        question: "Logo Budget hangi bütçeleme yöntemlerini destekler?",
        answer:
          "Logo Budget top-down (yukarıdan aşağıya), bottom-up (aşağıdan yukarıya) ve karma bütçeleme yöntemlerini destekler. Organizasyonunuzun yapısına uygun bütçe süreçlerini esnek şekilde tasarlayabilirsiniz.",
      },
      {
        question:
          "Budget ile ERP arasında gerçekleşen veriler otomatik aktarılır mı?",
        answer:
          "Evet, Logo Budget Logo Tiger 3 ve GO Wings'ten muhasebe gerçekleşen verilerini otomatik olarak çeker. Böylece bütçe-gerçekleşen karşılaştırmalarınız her zaman güncel kalır.",
      },
      {
        question: "Excel'den Logo Budget'a geçiş zor mu?",
        answer:
          "Hayır, Logo Budget Excel'den veri içe aktarma desteği sunar. Mevcut bütçe tablolarınızı sisteme kolayca aktarabilirsiniz. Proses Yazılım olarak geçiş sürecinde tam destek sağlıyoruz.",
      },
    ],
    seo: {
      title: "Logo Budget | Bütçe Planlama ve Kontrol | Proses Yazılım",
      description:
        "Logo Budget ile bütçe planlama, varyans analizi ve senaryo yönetimi. Logo ERP entegrasyonlu bütçe kontrolü. Proses Yazılım Bursa.",
      keywords: [
        "Logo Budget",
        "bütçe planlama",
        "bütçe kontrol",
        "varyans analizi",
        "senaryo analizi",
        "finansal planlama",
        "Logo bütçe yazılımı",
        "Bursa bütçe yönetimi",
      ],
    },
    color: "#f43f5e",
    gradient: "from-rose-500 via-red-500 to-orange-500",
    icon: Shield,
  },
];

// ────────────────────────────────────────────
// Services
// ────────────────────────────────────────────

export const services: Service[] = [
  {
    slug: "e-donusum",
    name: "e-Dönüşüm",
    headline: "e-Fatura, e-Arşiv, e-İrsaliye, e-Defter ve Daha Fazlası",
    description:
      "Gelir İdaresi Başkanlığı'nın belirlediği standartlara uygun olarak geliştirilen Logo e-Çözümler; e-Fatura, e-Arşiv Fatura, e-Defter, e-İrsaliye, e-Müstahsil Makbuzu, e-Serbest Meslek Makbuzu, e-Dekont ve e-Adisyon gibi pek çok farklı uygulamayı içerir. Logo e-Çözümler sayesinde işletmeler kâğıt, baskı, arşivleme ve iş gücü maliyetlerini düşürür; operasyonel yükü azaltır ve finansal süreçleri hızlandırır.\n\nTüm Logo ERP ürünleriyle (Tiger 3 Enterprise, GO Wings) sorunsuz entegre çalışan e-Çözümler, GİB onaylı altyapı ile yasal uyumluluğunuzu garanti altına alır. e-Mutabakat ve e-Ekstre gibi katma değerli çözümler de dijital dönüşüm yolculuğunuza uçtan uca rehberlik eder.\n\nProses Yazılım olarak e-Dönüşüm geçiş sürecinizde GİB başvurusu, entegratör bağlantısı, test ve devreye alma adımlarının tamamında yanınızdayız. Sınırsız kullanıcı yetkilendirmesi ve saklama hizmeti dahil çözümlerimizle maliyet avantajı sağlıyoruz.",
    features: [
      {
        title: "e-Fatura",
        description:
          "GİB'e kayıtlı mükelleflere UBL-TR formatında e-Fatura gönderimi ve alımı. Yasal anlamda kâğıt faturayla eş değer faturalama imkânı sunar. Saklama hizmeti pakete dahildir; faturaların kaybolma ve fiziki zarar görmesini engeller. Sınırsız kullanıcı yetkilendirmesi ile her çalışan veya departman için belirlenen yetki çerçevesinde erişim izni verilir. Süreçler otomatik olarak yürütüldüğünden manuel girişten kaynaklı kullanıcı hataları en aza iner. Baskı, posta ve arşivleme masraflarını minimize eder.",
      },
      {
        title: "e-Arşiv Fatura",
        description:
          "GİB'e kayıtlı olmayan mükellefler ve bireysel müşterilere e-Arşiv Fatura düzenleme. 433 sayılı VUK Genel Tebliği'ne uygun şekilde elektronik ortamda düzenlenir. Hazırlanan faturalar otomatik olarak e-posta veya SMS ile alıcılara anında gönderilir. Arşivlenmiş faturaları hızlıca sorgulayarak geçmiş işlem verilerine anında erişim sağlanır. ERP programları ve diğer yazılımlarla kolayca entegre edilir. e-Arşiv kullanan işletmeler ödeme kaydedici cihaz kullanmak zorunda kalmaz.",
      },
      {
        title: "e-İrsaliye",
        description:
          "Kâğıt sevk irsaliyesi ile aynı hukuki niteliğe sahip dijital irsaliye çözümü. Mevcut yazılım sistemlerine sorunsuz adapte olur ve otomatik veri aktarımı sağlar. Belgeleri şirket sunucularında dijital ortamda saklayarak fiziki hasar riskini minimize eder. Elektronik ortamda saklanan irsaliyeler saniyeler içinde bulunur. Saklama hizmeti pakete dahildir. Kâğıt, baskı, posta ve arşivleme maliyetlerini ortadan kaldırır. Brüt satış hasılatı 10 milyon TL ve üzeri olan e-Fatura mükellefleri için zorunludur.",
      },
      {
        title: "e-Defter",
        description:
          "Muhasebe kayıtlarını dijital ortamda güvenli şekilde saklayan ve yönetebilen elektronik defter çözümü. Şematron kontrolleri ile otomatik olarak hatalı veri oluşumunu engeller. XBRL teknolojisi sayesinde uluslararası standartlarda kolay raporlama ve kaliteli veri elde edilir. e-Defter ve berat dosyaları güvenli ortamda saklanır, internet bağlantısıyla her yerden erişilir. Kâğıt, baskı ve noter onayı giderlerini ortadan kaldırır. Mevzuat değişikliklerine dinamik olarak adapte olur.",
      },
      {
        title: "e-Müstahsil Makbuzu",
        description:
          "Vergi mükellefi olmayan çiftçilerden yapılan alımlar için GİB standartlarına uygun elektronik makbuz oluşturma çözümü. Meyve, sebze gibi tarımsal ürün satışlarında fatura yerine kullanılır. e-Arşiv altyapısında GİB'e raporlanır. Düşük maliyet, çevre dostu yaklaşım ve yasal mevzuata tam uyum sağlar. Küçük çiftçileri kayıt altına alarak şeffaf ticaret ortamı oluşturur. Hizmet süresince makbuza kolay erişim imkânı sunar.",
      },
      {
        title: "e-Serbest Meslek Makbuzu",
        description:
          "Serbest meslek erbabının makbuzlarını elektronik ortamda düzenlemesi, iletmesi ve saklaması için tasarlanmış çözüm. Kullanıcı dostu arayüzü sayesinde makbuzlar kısa sürede oluşturulur. Manuel veri girişi ortadan kalkar, otomatik hesaplama ile hatasız işlem garanti edilir. GİB Portal, özel entegratör ve Logo ERP/İşbaşı ile tam entegre çalışır. e-Posta, SMS veya WhatsApp üzerinden hızlı iletim yapılır. Saklama hizmeti pakete dahildir.",
      },
      {
        title: "e-Dekont",
        description:
          "Banka ve ödeme kuruluşları tarafından düzenlenen dekontun elektronik ortamda düzenlenmesi ve muhatabına iletilmesi uygulaması. Kâğıt dekontun tüm hukuki niteliklerine sahiptir. Elektronik sertifika ile imzalanır; SMS, e-posta, FTP veya web uygulaması yöntemleriyle iletilebilir. Para transferleri elektronik ortamda kolayca izlenir ve raporlanır. Geriye dönük dekontlara saniyeler içinde ulaşılır; toplu ibraz ile denetim süreci kısalır.",
      },
      {
        title: "e-Adisyon",
        description:
          "Satış noktalarında adisyonların elektronik belge olarak düzenlenmesi çözümü. Perakende işletmeler, restoranlar ve hizmet sektörü için pratik ve yasal uyumlu bir uygulama sunar. Logo'nun kurumsal yazılım ekosistemiyle entegre çalışır. İş süreçlerini hızlandırır ve dijital kayıt tutma imkânı sağlar.",
      },
    ],
    subServices: [
      {
        name: "e-Fatura",
        description:
          "GİB'e kayıtlı mükellefler arası UBL-TR standardında elektronik fatura gönderimi ve alımı. Yasal geçerliliğe sahip, saklama hizmeti dahil, sınırsız kullanıcı yetkilendirmesi ile dijital faturalama.",
      },
      {
        name: "e-Arşiv Fatura",
        description:
          "GİB'e kayıtlı olmayan mükellefler ve bireysel müşterilere elektronik fatura düzenleme. Otomatik e-posta/SMS gönderimi, geçmiş veri sorgulama ve ödeme kaydedici cihaz muafiyeti.",
      },
      {
        name: "e-İrsaliye",
        description:
          "Kâğıt irsaliye ile eş hukuki değerde elektronik sevk irsaliyesi. Otomatik veri aktarımı, saklama hizmeti dahil ve sevk süreçlerinde hız artışı.",
      },
      {
        name: "e-Defter",
        description:
          "XBRL teknolojisiyle yevmiye ve büyük defterin elektronik oluşturulması. Şematron kontrolleri, GİB'e berat gönderimi, her yerden erişim ve noter masrafı tasarrufu.",
      },
      {
        name: "e-Müstahsil Makbuzu",
        description:
          "Vergi mükellefi olmayan çiftçilerden yapılan alımlarda GİB'e uygun elektronik makbuz. e-Arşiv altyapısında raporlama ve düşük maliyetli dijital çözüm.",
      },
      {
        name: "e-Serbest Meslek Makbuzu",
        description:
          "Serbest meslek erbabı için elektronik makbuz düzenleme. Otomatik hesaplama, çok kanallı gönderim (e-posta, SMS, WhatsApp) ve saklama hizmeti dahil.",
      },
      {
        name: "e-Dekont",
        description:
          "Banka ve ödeme kuruluşlarının dekontlarını elektronik ortamda düzenleme ve iletme. Elektronik sertifika ile imza, geriye dönük toplu ibraz imkânı.",
      },
      {
        name: "e-Adisyon",
        description:
          "Satış noktalarındaki adisyon belgelerinin elektronik ortamda düzenlenmesi. Perakende, restoran ve hizmet sektörü için dijital çözüm.",
      },
    ],
    faq: [
      {
        question: "e-Fatura'ya geçiş zorunlu mu?",
        answer:
          "Brüt satış hasılatı belirli bir tutarı aşan mükellefler için e-Fatura zorunludur. GİB her yıl zorunluluk kapsamını genişletmektedir. e-Fatura'ya geçince e-Defter kullanımı da zorunlu hale gelir. Güncel zorunluluk limitleri için bizimle iletişime geçebilirsiniz.",
      },
      {
        question: "e-Fatura ile e-Arşiv Fatura arasındaki fark nedir?",
        answer:
          "e-Fatura, GİB'e kayıtlı iki mükellef arasında düzenlenir ve her iki tarafın da e-Fatura mükellefi olması gerekir. e-Arşiv Fatura ise GİB'e kayıtlı olmayan mükelleflere veya bireysel müşterilere kesilen elektronik faturadır. Her iki belge de yasal geçerliliğe sahiptir. e-Fatura mükellefi kâğıt fatura kesemez.",
      },
      {
        question: "e-İrsaliye kimler için zorunludur?",
        answer:
          "2022 ve sonraki hesap dönemlerinde brüt satış hasılatı 10 milyon TL ve üzeri olan e-Fatura mükellefleri için e-İrsaliye zorunludur. e-İrsaliye düzenlendiği tarihten itibaren 5 iş günü geçerlidir. Malın fiili sevkinden önce düzenlenmesi zorunludur.",
      },
      {
        question: "e-Serbest Meslek Makbuzu kimler için zorunludur?",
        answer:
          "Serbest meslek faaliyeti yürüten tüm mükellefler (avukat, muhasebeci, mühendis, doktor vb.) için zorunludur. Makbuzun tahsilatın yapıldığı anda düzenlenmesi gerekir. Mali mühür bulunması şarttır ancak e-Fatura veya e-Arşiv sistemine dahil olma zorunluluğu yoktur.",
      },
      {
        question: "e-Dönüşüm geçiş süreci ne kadar sürer?",
        answer:
          "Logo ERP kullanıyorsanız e-Dönüşüm geçişi ortalama 3-5 iş günü içinde tamamlanır. GİB başvurusu, entegratör bağlantısı, test belgeleri ve canlıya geçiş adımlarını Proses Yazılım olarak uçtan uca yönetiyoruz.",
      },
      {
        question: "Hangi e-Dönüşüm uygulamalarını destekliyorsunuz?",
        answer:
          "e-Fatura, e-Arşiv Fatura, e-İrsaliye, e-Defter, e-Müstahsil Makbuzu, e-Serbest Meslek Makbuzu, e-Dekont ve e-Adisyon uygulamalarının tamamını destekliyoruz. Tüm çözümler Logo ERP ürünleriyle entegre çalışır ve GİB onaylıdır.",
      },
      {
        question: "e-Dönüşüm çözümleri hangi Logo ürünleriyle uyumlu?",
        answer:
          "Logo e-Çözümler; Tiger 3 Enterprise, GO Wings ve diğer Logo ERP ürünleriyle sorunsuz entegre çalışır. On-premise dağıtım modeliyle mevcut ERP altyapınıza ek kurulum gerektirmeden devreye alınabilir.",
      },
    ],
    seo: {
      title: "e-Dönüşüm Çözümleri | e-Fatura, e-Arşiv, e-İrsaliye, e-Defter | Proses",
      description:
        "e-Fatura, e-Arşiv Fatura, e-İrsaliye, e-Defter, e-Müstahsil, e-SMM, e-Dekont ve e-Adisyon. Logo ERP uyumlu GİB onaylı e-Dönüşüm çözümleri. Proses Yazılım Bursa.",
      keywords: [
        "e-Fatura",
        "e-Arşiv Fatura",
        "e-İrsaliye",
        "e-Defter",
        "e-Müstahsil Makbuzu",
        "e-Serbest Meslek Makbuzu",
        "e-Dekont",
        "e-Adisyon",
        "e-Dönüşüm",
        "Logo e-Çözümler",
        "GİB entegrasyon",
        "Bursa e-Fatura",
        "elektronik fatura",
      ],
    },
    icon: FileText,
    relatedSolutions: ["logo-tiger-3", "logo-go-wings"],
  },
  {
    slug: "ozel-yazilim",
    name: "Özel Yazılım & Entegrasyon",
    headline: "İşletmenize Özel Yazılım Çözümleri ve Sistem Entegrasyonları",
    description:
      "Standart ERP modüllerinin karşılamadığı ihtiyaçlarınız için özel yazılım geliştirme ve entegrasyon hizmetleri sunuyoruz. B2B portalları, e-ticaret entegrasyonları, REST API bağlantıları, mobil uygulamalar ve özel raporlama çözümleriyle Logo ERP altyapınızı genişletin.\n\nProses Yazılım'ın deneyimli yazılım geliştirme ekibi, ihtiyaç analizinden tasarıma, geliştirmeden teste ve devreye almaya kadar tüm süreçleri yönetir. Modern teknolojiler ve güvenli entegrasyon yöntemleriyle iş süreçlerinizi dijitalleştiriyoruz.",
    features: [
      {
        title: "B2B Portal Geliştirme",
        description:
          "Bayilerinizin ve iş ortaklarınızın sipariş, stok sorgulama ve cari hesap bilgilerine erişebildiği web portalları geliştiriyoruz.",
      },
      {
        title: "REST API ve Web Servisleri",
        description:
          "Logo ERP verilerinize güvenli API'ler üzerinden erişim sağlayın. Üçüncü parti uygulamalarla çift yönlü veri entegrasyonu kurun.",
      },
      {
        title: "e-Ticaret Entegrasyonu",
        description:
          "Trendyol, Hepsiburada, Amazon ve kendi e-ticaret sitenizle Logo ERP arasında sipariş, stok ve fatura senkronizasyonu.",
      },
      {
        title: "Mobil Uygulama Çözümleri",
        description:
          "Saha satış, depo sayım, üretim takibi gibi ihtiyaçlar için Logo ERP entegrasyonlu mobil uygulamalar geliştiriyoruz.",
      },
      {
        title: "Özel Rapor ve Dashboard Geliştirme",
        description:
          "İşletmenize özel raporlar, yönetim panelleri ve veri analiz araçları tasarlayıp geliştiriyoruz.",
      },
      {
        title: "Veri Aktarım ve Dönüştürme",
        description:
          "Farklı sistemler arasında veri aktarımı, format dönüştürme ve veri temizleme hizmetleri sunuyoruz.",
      },
    ],
    faq: [
      {
        question: "Özel yazılım geliştirme süreci nasıl işler?",
        answer:
          "İhtiyaç analizi, teknik tasarım, geliştirme, test ve devreye alma aşamalarından oluşur. Her aşamada onayınızı alarak ilerliyoruz. Proje büyüklüğüne göre ortalama 2-12 hafta sürmektedir.",
      },
      {
        question: "e-Ticaret sitemle Logo ERP'yi entegre edebilir misiniz?",
        answer:
          "Evet, WooCommerce, Shopify, OpenCart gibi popüler e-ticaret platformlarını ve Trendyol, Hepsiburada gibi pazar yerlerini Logo ERP ile entegre ediyoruz. Sipariş, stok, fiyat ve fatura senkronizasyonu sağlıyoruz.",
      },
      {
        question: "API entegrasyonu güvenli mi?",
        answer:
          "Evet, tüm API entegrasyonlarımız OAuth 2.0, JWT token ve SSL/TLS şifreleme ile korunmaktadır. Veri güvenliği en öncelikli konumuz olup düzenli güvenlik denetimleri gerçekleştiriyoruz.",
      },
    ],
    seo: {
      title:
        "Özel Yazılım & ERP Entegrasyon Hizmetleri | Proses Yazılım",
      description:
        "B2B portal, e-ticaret entegrasyonu, REST API ve mobil çözümler. Logo ERP özel yazılım geliştirme. Proses Yazılım Bursa.",
      keywords: [
        "özel yazılım geliştirme",
        "ERP entegrasyon",
        "B2B portal",
        "e-ticaret entegrasyonu",
        "Logo API",
        "REST API",
        "Bursa yazılım",
        "Logo özel geliştirme",
      ],
    },
    icon: Code,
    relatedSolutions: ["logo-tiger-3", "logo-go-wings", "logo-crm"],
  },
  {
    slug: "erp-danismanligi",
    name: "ERP Danışmanlığı & Kurulum",
    headline: "Uzman Kadroyla ERP Kurulum, Eğitim ve Danışmanlık",
    description:
      "Logo ERP kurulumu, özelleştirme, veri aktarımı ve eğitim süreçlerinin tamamında uzman danışman kadromuzla yanınızdayız. İş süreçlerinizi analiz ediyor, en uygun çözümü tasarlıyor ve sorunsuz bir geçiş süreci yönetiyoruz.\n\nProses Yazılım olarak 15 yılı aşkın Logo ERP danışmanlık deneyimimizle Bursa ve çevresinde 200'den fazla başarılı kurulum gerçekleştirdik. Sektöre özel en iyi uygulamaları bilen ekibimiz, ERP yatırımınızdan maksimum değer almanızı sağlar.",
    features: [
      {
        title: "Süreç Analizi ve İhtiyaç Belirleme",
        description:
          "Mevcut iş süreçlerinizi haritalandırıyor, iyileştirme fırsatlarını tespit ediyor ve ERP çözümünü ihtiyaçlarınıza göre tasarlıyoruz.",
      },
      {
        title: "Kurulum ve Özelleştirme",
        description:
          "Logo ERP kurulumunu gerçekleştiriyor, parametreleri sektörünüze göre yapılandırıyor ve özel ekranlar oluşturuyoruz.",
      },
      {
        title: "Veri Aktarımı (Migrasyon)",
        description:
          "Mevcut sisteminizden Logo ERP'ye cari hesap, stok, muhasebe ve diğer verileri güvenli şekilde aktarıyoruz.",
      },
      {
        title: "Kullanıcı Eğitimi",
        description:
          "Modül bazlı uygulamalı eğitimlerle ekiplerinizin sistemi etkin kullanmasını sağlıyoruz. Eğitim dokümanları ve video materyalleri sunuyoruz.",
      },
      {
        title: "Canlıya Geçiş Desteği",
        description:
          "Go-live sürecinde yerinde destek sağlıyor, olası sorunları anında çözüyor ve geçiş döneminde tam güvence veriyoruz.",
      },
      {
        title: "Sürekli İyileştirme",
        description:
          "Devreye alma sonrası süreç optimizasyonu, yeni modül önerileri ve performans değerlendirmesi ile sürekli iyileştirme sağlıyoruz.",
      },
    ],
    faq: [
      {
        question: "ERP kurulum süreci ne kadar sürer?",
        answer:
          "Proje kapsamına göre Logo GO Wings için 1-3 hafta, Logo Tiger 3 için 4-12 hafta sürmektedir. Detaylı proje planıyla süreci şeffaf şekilde yönetiyoruz.",
      },
      {
        question: "Mevcut verileri yeni ERP'ye aktarabilir misiniz?",
        answer:
          "Evet, Excel, Access, diğer ERP yazılımları veya muhasebe programlarından Logo ERP'ye veri aktarımı gerçekleştiriyoruz. Veri doğrulama ve temizleme süreçleriyle veri bütünlüğünü garanti ediyoruz.",
      },
      {
        question: "ERP eğitimi nasıl veriliyor?",
        answer:
          "Modül bazlı, uygulamalı eğitimler firmanızda yerinde veya online olarak verilmektedir. Her departman kendi kullandığı modüller üzerinde eğitim alır. Eğitim sonrası destek hattımız her zaman açıktır.",
      },
      {
        question: "Farklı sektörlere özel ERP çözümleri sunuyor musunuz?",
        answer:
          "Evet, otomotiv yan sanayi, tekstil, gıda, metal işleme, makine imalat ve ticaret sektörlerinde özel deneyimimiz bulunmaktadır. Sektöre özel parametreler ve raporlar ile ERP'nizi ihtiyaçlarınıza tam uyarlıyoruz.",
      },
    ],
    seo: {
      title: "ERP Danışmanlığı & Kurulum | Logo ERP Uzmanı | Proses Yazılım",
      description:
        "Logo ERP danışmanlık, kurulum, veri aktarımı ve eğitim hizmetleri. 200+ başarılı kurulum deneyimi. Proses Yazılım Bursa.",
      keywords: [
        "ERP danışmanlığı",
        "ERP kurulum",
        "Logo ERP danışman",
        "ERP eğitimi",
        "veri aktarımı",
        "ERP implementasyon",
        "Bursa ERP danışmanlık",
        "Logo kurulum",
      ],
    },
    icon: Settings,
    relatedSolutions: ["logo-tiger-3", "logo-go-wings", "logo-flow"],
  },
  {
    slug: "teknik-destek",
    name: "Teknik Destek & Bakım",
    headline: "Kesintisiz Çalışma İçin 7/24 Teknik Destek ve Bakım",
    description:
      "Logo ERP yazılımlarınızın sorunsuz çalışması için kapsamlı teknik destek ve bakım hizmetleri sunuyoruz. Uzaktan erişim, telefon ve yerinde destek seçenekleriyle sorunlarınızı en hızlı şekilde çözüyoruz.\n\nGüncelleme yönetimi, performans optimizasyonu, yedekleme kontrolü ve güvenlik denetimleriyle sisteminizin sağlığını sürekli izliyoruz. Proses Yazılım olarak Bursa merkezli yapımızla aynı gün yerinde müdahale garantisi veriyoruz.",
    features: [
      {
        title: "Uzaktan Destek",
        description:
          "Anlık uzaktan erişimle sorunlarınızı dakikalar içinde tespit edip çözüyoruz. Ekran paylaşımıyla kullanıcılarınıza rehberlik ediyoruz.",
      },
      {
        title: "Yerinde Teknik Destek",
        description:
          "Bursa ve çevresinde aynı gün yerinde müdahale. Donanım, ağ ve sunucu sorunlarında uzman teknik ekip desteği.",
      },
      {
        title: "Güncelleme ve Yama Yönetimi",
        description:
          "Logo yazılım güncellemelerini test edip güvenli şekilde uyguluyoruz. Yasal mevzuat değişikliklerini zamanında sisteminize yansıtıyoruz.",
      },
      {
        title: "Performans Optimizasyonu",
        description:
          "Veritabanı bakımı, sorgu optimizasyonu ve sistem yapılandırma iyileştirmeleriyle ERP performansınızı artırıyoruz.",
      },
      {
        title: "Yedekleme ve Felaket Kurtarma",
        description:
          "Otomatik yedekleme planları oluşturuyor, yedekleme testi yapıyor ve felaket kurtarma senaryoları hazırlıyoruz.",
      },
      {
        title: "Periyodik Bakım Sözleşmeleri",
        description:
          "Aylık veya yıllık bakım sözleşmeleriyle düzenli sistem kontrolü, raporlama ve öncelikli destek hizmeti sunuyoruz.",
      },
    ],
    faq: [
      {
        question: "Teknik destek hizmetinizin kapsamı nedir?",
        answer:
          "Logo ERP yazılımlarıyla ilgili tüm teknik sorunlar, kullanım soruları, hata çözümleri, güncelleme uygulamaları ve performans iyileştirmeleri destek kapsamındadır. Ayrıca sunucu ve veritabanı bakımı da hizmetlerimiz arasındadır.",
      },
      {
        question: "Destek taleplerine ne kadar sürede dönüş yapıyorsunuz?",
        answer:
          "Bakım sözleşmeli müşterilerimize ortalama 30 dakika içinde ilk yanıt veriyoruz. Kritik sorunlarda aynı gün yerinde müdahale garantimiz bulunmaktadır.",
      },
      {
        question: "Uzaktan destek güvenli mi?",
        answer:
          "Evet, uzaktan destek bağlantılarımız şifreli tüneller üzerinden gerçekleştirilmektedir. Bağlantı sadece sizin onayınızla başlar ve oturum kayıtları tutulur.",
      },
      {
        question: "Bakım sözleşmesi olmadan destek alabilir miyim?",
        answer:
          "Evet, sözleşme dışı destek talepleri de değerlendirilmektedir. Ancak bakım sözleşmeli müşterilerimiz öncelikli destek, indirimli servis ücretleri ve periyodik bakım avantajlarından yararlanmaktadır.",
      },
    ],
    seo: {
      title: "Logo ERP Teknik Destek & Bakım | Proses Yazılım",
      description:
        "Logo ERP teknik destek, güncelleme yönetimi ve bakım hizmetleri. Aynı gün yerinde müdahale garantisi. Proses Yazılım Bursa.",
      keywords: [
        "Logo teknik destek",
        "ERP bakım",
        "Logo güncelleme",
        "ERP destek hizmeti",
        "Logo servis",
        "Bursa Logo destek",
        "ERP bakım sözleşmesi",
      ],
    },
    icon: Headphones,
    relatedSolutions: [
      "logo-tiger-3",
      "logo-go-wings",
      "logo-crm",
      "logo-flow",
      "logo-mind",
      "logo-budget",
    ],
  },
];

// ────────────────────────────────────────────
// Regions
// ────────────────────────────────────────────

export const regions: Region[] = [
  {
    slug: "bursa-logo-bayi",
    name: "Bursa ERP Danışmanlığı",
    headline: "Bursa'da Logo ERP Çözüm Ortağınız",
    description:
      "Proses Yazılım, Bursa Nilüfer merkezli ofisiyle Türkiye'nin dördüncü büyük sanayi şehrine yerinde hizmet sunmaktadır. Otomotiv yan sanayiden tekstile, gıdadan makine imalatına kadar Bursa'nın çeşitli sanayi yapısına özel Logo ERP çözümleri geliştiriyoruz. 15 yılı aşkın yerel deneyimimiz ve 200'den fazla başarılı referansımızla Bursa iş dünyasının güvenilir teknoloji ortağıyız.\n\nBursa'nın dinamik iş ortamında rekabet avantajı elde etmek isteyen işletmelere Logo Tiger 3 Enterprise, Logo GO Wings ve tüm Logo ürün ailesinde danışmanlık, kurulum, eğitim ve teknik destek hizmetleri veriyoruz. Aynı gün yerinde müdahale garantimiz, uzaktan destek altyapımız ve sektörel uzmanlığımızla dijital dönüşüm yolculuğunuzda yanınızdayız.",
    highlights: [
      "Yerinde destek ve eğitim",
      "Bursa sanayisinde 15+ yıl deneyim",
      "200+ yerel referans",
      "Aynı gün müdahale garantisi",
      "Nilüfer merkezli ofis",
    ],
    seo: {
      title: "Bursa ERP Danışmanlığı | Logo Yazılım Çözüm Ortağı | Proses",
      description:
        "Bursa'da Logo ERP çözüm ortağı Proses Yazılım. Tiger 3, GO Wings kurulum, danışmanlık ve teknik destek. 200+ yerel referans.",
      keywords: [
        "Bursa ERP",
        "Bursa Logo Yazılım",
        "Bursa ERP danışmanlığı",
        "Logo çözüm ortağı Bursa",
        "Bursa ERP kurulum",
        "Bursa muhasebe yazılımı",
        "Nilüfer ERP",
        "Bursa iş yazılımları",
      ],
    },
  },
];

// ────────────────────────────────────────────
// Helper Functions
// ────────────────────────────────────────────

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRegionBySlug(slug: string): Region | undefined {
  return regions.find((r) => r.slug === slug);
}

export function getOtherSolutions(currentSlug: string): Solution[] {
  return solutions.filter((s) => s.slug !== currentSlug);
}
