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
    headline: "Orta ve Büyük Ölçekli İşletmeler İçin Kapsamlı ERP Çözümü",
    description:
      "Logo Tiger 3 Enterprise, Türkiye'nin en yaygın kullanılan orta ölçek ERP yazılımıdır. Üretimden finansmana, tedarik zincirinden insan kaynaklarına kadar işletmenizin tüm süreçlerini tek bir platformda yönetmenizi sağlar. Çoklu döviz, çoklu şirket ve çoklu depo desteğiyle uluslararası operasyonlarınızı kolayca takip edebilirsiniz.\n\nTiger 3, güçlü raporlama altyapısı ve esnek parametrik yapısıyla her sektöre uyarlanabilir. Üretim planlama (MRP), maliyet muhasebesi, bütçe kontrolü ve kalite yönetimi modülleriyle üretim süreçlerinizi uçtan uca dijitalleştirin. Gerçek zamanlı veri akışı sayesinde anlık kararlar alabilir, rekabet avantajınızı artırabilirsiniz.\n\nProses Yazılım olarak Logo Tiger 3 Enterprise kurulumu, özelleştirmesi ve entegrasyonunda 15 yılı aşkın deneyimimizle Bursa ve çevresindeki işletmelere hizmet veriyoruz. Sektöre özel çözümlerimiz ve uzman danışman kadromuzla dijital dönüşüm yolculuğunuzda yanınızdayız.",
    shortDescription:
      "Üretim, finans, tedarik zinciri ve insan kaynaklarını tek platformda yöneten kapsamlı ERP çözümü.",
    logo: "/tiger.webp",
    targetAudience:
      "Orta ve büyük ölçekli üretim, ticaret ve hizmet işletmeleri",
    features: [
      {
        title: "Üretim Planlama (MRP/MRP II)",
        description:
          "Malzeme ihtiyaç planlaması, iş emri yönetimi, kapasite planlama ve üretim takibi ile verimli üretim süreçleri oluşturun.",
      },
      {
        title: "Finans ve Muhasebe Yönetimi",
        description:
          "Genel muhasebe, mizan, bilanço, gelir tablosu, KDV beyannamesi ve e-defter entegrasyonu ile mali süreçlerinizi eksiksiz yönetin.",
      },
      {
        title: "Tedarik Zinciri Yönetimi",
        description:
          "Satın alma, depo yönetimi, stok optimizasyonu ve lojistik takibi ile tedarik zincirinizi uçtan uca kontrol edin.",
      },
      {
        title: "İnsan Kaynakları ve Bordro",
        description:
          "Personel özlük bilgileri, bordro hesaplama, izin yönetimi ve performans değerlendirme süreçlerini otomatikleştirin.",
      },
      {
        title: "Çoklu Şirket ve Döviz Desteği",
        description:
          "Birden fazla şirketi tek merkezden yönetin; çoklu döviz, çoklu depo ve konsolidasyon raporlarıyla global operasyonlarınızı takip edin.",
      },
      {
        title: "Gelişmiş Raporlama ve Analiz",
        description:
          "Pivot tablolar, özelleştirilebilir raporlar ve gerçek zamanlı gösterge panelleriyle veriye dayalı kararlar alın.",
      },
    ],
    modules: [
      "Genel Muhasebe",
      "Cari Hesap",
      "Stok Yönetimi",
      "Satın Alma",
      "Satış ve Dağıtım",
      "Üretim Planlama",
      "Maliyet Muhasebesi",
      "İnsan Kaynakları",
      "Bordro",
      "Banka ve Çek/Senet",
      "Sabit Kıymet",
      "Kalite Yönetimi",
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
      "e-İrsaliye",
      "e-Defter",
      "Logo CRM",
      "Logo Mind",
      "B2B / e-Ticaret Portalları",
    ],
    faq: [
      {
        question: "Logo Tiger 3 Enterprise hangi ölçekteki firmalara uygundur?",
        answer:
          "Tiger 3 Enterprise, yıllık cirosu 10 milyon TL ve üzeri olan orta ve büyük ölçekli işletmeler için tasarlanmıştır. Üretim, ticaret ve hizmet sektörlerinde faaliyet gösteren, çok şubeli veya çok şirketli yapılara sahip firmalar için idealdir.",
      },
      {
        question: "Tiger 3 kurulumu ne kadar sürer?",
        answer:
          "Standart bir Tiger 3 kurulumu ortalama 4-8 hafta sürmektedir. Süre, firmanın büyüklüğüne, modül sayısına ve özelleştirme ihtiyacına göre değişebilir. Proses Yazılım olarak detaylı proje planı ile süreci şeffaf şekilde yönetiyoruz.",
      },
      {
        question: "Logo Go 3'ten Tiger 3'e geçiş yapılabilir mi?",
        answer:
          "Evet, Logo Go 3 kullanıcıları verilerini kaybetmeden Tiger 3 Enterprise'a yükseltme yapabilir. Veri aktarımı ve eğitim süreçlerinde Proses Yazılım ekibi tam destek sağlamaktadır.",
      },
      {
        question: "Tiger 3 ile e-Fatura ve e-Defter entegrasyonu mümkün mü?",
        answer:
          "Evet, Logo Tiger 3 Enterprise tüm e-Dönüşüm süreçlerini (e-Fatura, e-Arşiv Fatura, e-İrsaliye, e-Defter) entegre olarak destekler. GİB onaylı altyapı ile yasal uyumluluğunuz garanti altındadır.",
      },
      {
        question: "Tiger 3 Enterprise'ın lisans maliyeti nedir?",
        answer:
          "Lisans maliyeti kullanıcı sayısına ve seçilen modüllere göre değişmektedir. Firmanıza özel fiyat teklifi almak için bizimle iletişime geçebilirsiniz. Proses Yazılım olarak en uygun lisans paketini birlikte belirleyelim.",
      },
    ],
    seo: {
      title: "Logo Tiger 3 Enterprise ERP | Proses Yazılım",
      description:
        "Logo Tiger 3 Enterprise ERP ile üretim, finans ve tedarik zinciri yönetimi. Bursa Logo çözüm ortağı Proses Yazılım'dan kurulum ve destek.",
      keywords: [
        "Logo Tiger 3",
        "Tiger ERP",
        "Logo Tiger Enterprise",
        "ERP yazılımı",
        "üretim yönetimi",
        "Logo ERP Bursa",
        "kurumsal kaynak planlama",
        "Logo yazılım çözüm ortağı",
      ],
    },
    color: "#f97316",
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    icon: Database,
  },
  {
    slug: "logo-go-3",
    name: "Logo Go 3",
    headline: "KOBİ'ler İçin Hızlı ve Ekonomik ERP Çözümü",
    description:
      "Logo Go 3, küçük ve orta büyüklükteki işletmeler için tasarlanmış, hızlı kurulum ve kolay kullanım sunan ERP yazılımıdır. Muhasebe, stok takibi, satın alma ve satış süreçlerinizi tek bir platformda yönetmenizi sağlar. Uygun maliyetli yapısıyla bütçenizi zorlamadan profesyonel bir iş yönetim sistemi kurabilirsiniz.\n\nGo 3, sade ve kullanıcı dostu arayüzüyle kısa sürede kullanılmaya başlanabilir. Temel ticari süreçlerinizi dijitalleştirerek kağıt bazlı iş akışlarından kurtulmanızı sağlar. İhtiyaçlarınız büyüdüğünde Logo Tiger 3 Enterprise'a sorunsuz geçiş yapabilirsiniz.\n\nProses Yazılım olarak Logo Go 3 kurulumunu ortalama 1-2 hafta gibi kısa sürede tamamlıyoruz. Eğitim ve destek hizmetlerimizle firmanızın sisteme hızla adapte olmasını sağlıyoruz.",
    shortDescription:
      "Küçük ve orta ölçekli işletmeler için uygun maliyetli, hızlı kurulumlu ERP çözümü.",
    logo: "/gowings.webp",
    targetAudience: "Küçük ve orta büyüklükteki ticaret ve hizmet işletmeleri",
    features: [
      {
        title: "Muhasebe ve Finans",
        description:
          "Genel muhasebe, cari hesap takibi, banka hareketleri ve çek/senet yönetimi ile mali süreçlerinizi eksiksiz yönetin.",
      },
      {
        title: "Stok ve Depo Yönetimi",
        description:
          "Stok giriş-çıkış takibi, depo transferleri, minimum stok uyarıları ve barkod desteğiyle envanter kontrolünüzü güçlendirin.",
      },
      {
        title: "Satın Alma Yönetimi",
        description:
          "Tedarikçi yönetimi, sipariş takibi, fiyat karşılaştırma ve otomatik sipariş oluşturma ile satın alma süreçlerinizi optimize edin.",
      },
      {
        title: "Satış ve Faturalama",
        description:
          "Teklif, sipariş, irsaliye ve fatura akışını dijital ortamda yönetin. e-Fatura ve e-Arşiv entegrasyonuyla yasal uyumluluğu sağlayın.",
      },
      {
        title: "Kolay Kullanım ve Hızlı Kurulum",
        description:
          "Sade arayüz tasarımı, hazır şablonlar ve adım adım kurulum sihirbazıyla en kısa sürede sistemi devreye alın.",
      },
      {
        title: "Tiger 3'e Kolay Geçiş",
        description:
          "İşletmeniz büyüdüğünde veri kaybı yaşamadan Logo Tiger 3 Enterprise'a sorunsuz yükseltme yapın.",
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
      "Sabit Kıymet",
    ],
    benefits: [
      {
        value: "%60",
        label: "Daha hızlı kurulum süresi",
      },
      {
        value: "%50",
        label: "Lisans maliyeti tasarrufu",
      },
      {
        value: "1 hafta",
        label: "Ortalama devreye alma süresi",
      },
    ],
    integrations: [
      "e-Fatura / e-Arşiv",
      "e-İrsaliye",
      "e-Defter",
      "Logo CRM",
    ],
    faq: [
      {
        question: "Logo Go 3 ile Logo Tiger 3 arasındaki fark nedir?",
        answer:
          "Logo Go 3 temel ticari süreçleri (muhasebe, stok, satış, satın alma) kapsarken, Tiger 3 üretim planlama, insan kaynakları, maliyet muhasebesi gibi ileri modüller sunar. Go 3, KOBİ'ler için uygun maliyetli bir başlangıç noktasıdır ve ihtiyaç duyulduğunda Tiger 3'e yükseltilebilir.",
      },
      {
        question: "Logo Go 3 kaç kullanıcıyı destekler?",
        answer:
          "Logo Go 3, işletmenizin ihtiyacına göre farklı kullanıcı paketleriyle sunulmaktadır. Tek kullanıcıdan başlayarak onlarca eş zamanlı kullanıcıya kadar ölçeklenebilir.",
      },
      {
        question: "Logo Go 3 bulut üzerinde kullanılabilir mi?",
        answer:
          "Evet, Logo Go 3 hem yerel sunucu hem de bulut ortamında çalışabilir. Bulut çözümüyle her yerden güvenli erişim sağlayabilir, sunucu maliyetlerinizi azaltabilirsiniz.",
      },
      {
        question: "Go 3 ile e-Fatura kesebilir miyim?",
        answer:
          "Evet, Logo Go 3 e-Fatura, e-Arşiv Fatura ve e-İrsaliye entegrasyonlarını tam olarak destekler. GİB onaylı altyapıyla yasal yükümlülüklerinizi kolayca karşılayabilirsiniz.",
      },
    ],
    seo: {
      title: "Logo Go 3 ERP | KOBİ ERP Çözümü | Proses Yazılım",
      description:
        "Logo Go 3 ile KOBİ'ler için hızlı kurulum, kolay kullanım ve uygun maliyetli ERP. Bursa Logo çözüm ortağı Proses Yazılım.",
      keywords: [
        "Logo Go 3",
        "KOBİ ERP",
        "Logo Go Plus",
        "küçük işletme ERP",
        "uygun fiyatlı ERP",
        "Logo yazılım",
        "Bursa ERP",
        "muhasebe programı",
      ],
    },
    color: "#6366f1",
    gradient: "from-blue-500 via-indigo-500 to-violet-500",
    icon: Zap,
  },
  {
    slug: "logo-crm",
    name: "Logo CRM",
    headline: "Müşteri İlişkilerinizi Güçlendirin, Satışlarınızı Artırın",
    description:
      "Logo CRM, müşteri ilişkilerinizi merkezi bir platformda yönetmenizi sağlayan kapsamlı bir CRM çözümüdür. Potansiyel müşteri takibinden satış hunisi yönetimine, kampanya planlamasından servis taleplerinin takibine kadar tüm müşteri süreçlerinizi dijitalleştirin.\n\nSatış ekibinizin performansını gerçek zamanlı olarak izleyebilir, müşteri segmentasyonuyla hedefli kampanyalar oluşturabilir ve teklif süreçlerinizi otomatikleştirebilirsiniz. Logo Tiger 3 ve Go 3 ile entegre çalışarak ERP verilerinizle CRM süreçlerinizi birleştirir.\n\nProses Yazılım olarak Logo CRM kurulumunda sektöre özel özelleştirmeler yapıyor, satış ekiplerinize uygulamalı eğitim veriyoruz. Doğru CRM stratejisiyle müşteri memnuniyetinizi ve satış dönüşüm oranlarınızı artırmanıza yardımcı oluyoruz.",
    shortDescription:
      "Potansiyel müşteri, satış hunisi ve kampanya yönetimi için kapsamlı CRM çözümü.",
    logo: "/logocrm.webp",
    targetAudience:
      "Satış ekipleri olan orta ve büyük ölçekli işletmeler, B2B firmalar",
    features: [
      {
        title: "Potansiyel Müşteri Yönetimi (Lead)",
        description:
          "Potansiyel müşterileri kaynaklarına göre sınıflandırın, otomatik atama kurallarıyla satış ekibine yönlendirin ve dönüşüm oranlarını takip edin.",
      },
      {
        title: "Satış Hunisi ve Fırsat Yönetimi",
        description:
          "Satış fırsatlarınızı aşama aşama izleyin, tahmini gelir analizleri yapın ve satış hedeflerinize ulaşma oranınızı artırın.",
      },
      {
        title: "Kampanya Yönetimi",
        description:
          "E-posta, SMS ve sosyal medya kampanyalarını planlayın, yürütün ve ROI analiziyle kampanya etkinliğinizi ölçün.",
      },
      {
        title: "Servis ve Destek Takibi",
        description:
          "Müşteri şikâyetleri ve servis taleplerini kaydedin, SLA sürelerini izleyin ve müşteri memnuniyetini ölçümleyin.",
      },
      {
        title: "360° Müşteri Görünümü",
        description:
          "Müşteri iletişim geçmişi, satın alma davranışları, açık teklifler ve destek talepleri gibi tüm bilgileri tek ekranda görüntüleyin.",
      },
      {
        title: "Logo ERP Entegrasyonu",
        description:
          "Tiger 3 ve Go 3 ile çift yönlü veri senkronizasyonu sayesinde cari hesap, sipariş ve fatura bilgilerine CRM üzerinden erişin.",
      },
    ],
    modules: [
      "Lead Yönetimi",
      "Fırsat Yönetimi",
      "Teklif Yönetimi",
      "Kampanya Yönetimi",
      "Servis Yönetimi",
      "Aktivite Yönetimi",
      "Raporlama ve Analiz",
      "Müşteri Segmentasyonu",
      "E-posta Entegrasyonu",
    ],
    benefits: [
      {
        value: "%35",
        label: "Satış dönüşüm oranı artışı",
      },
      {
        value: "%25",
        label: "Müşteri memnuniyeti artışı",
      },
      {
        value: "3x",
        label: "Daha hızlı teklif süreci",
      },
    ],
    integrations: [
      "Logo Tiger 3 Enterprise",
      "Logo Go 3",
      "e-Posta Sunucuları",
      "SMS Servisleri",
    ],
    faq: [
      {
        question: "Logo CRM hangi ERP ürünleriyle entegre çalışır?",
        answer:
          "Logo CRM, Logo Tiger 3 Enterprise ve Logo Go 3 ile entegre çalışmaktadır. Cari hesap, sipariş, fatura ve stok bilgileri çift yönlü olarak senkronize edilir.",
      },
      {
        question: "CRM yazılımı sadece satış ekipleri için mi?",
        answer:
          "Hayır, Logo CRM satış ekiplerinin yanı sıra pazarlama, müşteri hizmetleri ve yönetim ekipleri tarafından da kullanılmaktadır. Kampanya yönetimi, servis takibi ve yönetici raporları gibi modüllerle tüm müşteri odaklı departmanları kapsar.",
      },
      {
        question: "Logo CRM mobil cihazlardan kullanılabilir mi?",
        answer:
          "Evet, Logo CRM web tabanlı arayüzü sayesinde tablet ve akıllı telefonlardan erişilebilir. Saha satış ekipleri müşteri ziyaretlerinde anlık bilgi güncellemesi yapabilir.",
      },
    ],
    seo: {
      title: "Logo CRM | Müşteri İlişkileri Yönetimi | Proses Yazılım",
      description:
        "Logo CRM ile müşteri yönetimi, satış hunisi ve kampanya takibi. Logo ERP entegrasyonlu CRM çözümü. Proses Yazılım Bursa.",
      keywords: [
        "Logo CRM",
        "müşteri ilişkileri yönetimi",
        "CRM yazılımı",
        "satış yönetimi",
        "müşteri takibi",
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
    headline: "İş Süreçlerinizi Otomatikleştirin, Verimliliği Artırın",
    description:
      "Logo Flow, iş süreçlerinizi görsel tasarım aracıyla modelleyip otomatikleştirmenizi sağlayan BPM (İş Süreçleri Yönetimi) çözümüdür. Onay akışları, görev atamaları, bildirimler ve SLA takibi gibi ihtiyaçlarınızı kodlama gerektirmeden karşılayabilirsiniz.\n\nSürükle-bırak süreç tasarımcısıyla satın alma onayları, izin talepleri, sözleşme yönetimi ve daha birçok iş akışını kolayca dijitalleştirin. No-code/low-code yaklaşımıyla IT bağımlılığını azaltın, iş birimlerinin kendi süreçlerini yönetmesini sağlayın.\n\nLogo Tiger 3 ve Go 3 ile entegre çalışan Flow, ERP süreçlerinizi de otomatikleştirebilir. Proses Yazılım olarak süreç analizi, tasarım ve devreye alma hizmetlerimizle iş süreçlerinizi en verimli şekilde dijitalleştiriyoruz.",
    shortDescription:
      "Görsel süreç tasarımcısıyla iş akışlarını otomatikleştiren no-code BPM çözümü.",
    logo: "/logoflow.webp",
    targetAudience:
      "Süreç otomasyonu ihtiyacı olan orta ve büyük ölçekli işletmeler",
    features: [
      {
        title: "Görsel Süreç Tasarımcısı",
        description:
          "Sürükle-bırak arayüzle iş akışlarınızı görsel olarak modelleyin. BPMN 2.0 standardına uygun süreç diyagramları oluşturun.",
      },
      {
        title: "Onay Akışları",
        description:
          "Çok seviyeli onay mekanizmaları, paralel ve sıralı onay akışları, yetki devri ve otomatik eskalasyon kuralları tanımlayın.",
      },
      {
        title: "Görev ve İş Yönetimi",
        description:
          "Otomatik görev atama, önceliklendirme, son tarih takibi ve performans ölçümleriyle ekip verimliliğinizi artırın.",
      },
      {
        title: "SLA İzleme ve Uyarılar",
        description:
          "Süreç adımları için SLA süreleri belirleyin, gecikmelerde otomatik uyarı ve eskalasyon kurallarıyla hizmet kalitesini koruyun.",
      },
      {
        title: "No-Code / Low-Code Yaklaşım",
        description:
          "Teknik bilgi gerektirmeden formlar, kurallar ve süreçler oluşturun. İleri ihtiyaçlar için script desteğiyle genişletin.",
      },
      {
        title: "ERP Entegrasyonu",
        description:
          "Logo Tiger 3 ve Go 3 verilerini süreçlerde kullanın. ERP işlemlerini süreç adımı olarak tetikleyin, veriye dayalı karar noktaları oluşturun.",
      },
    ],
    modules: [
      "Süreç Tasarımcısı",
      "Form Tasarımcısı",
      "Görev Yönetimi",
      "Onay Yönetimi",
      "SLA Yönetimi",
      "Bildirim Merkezi",
      "Raporlama",
      "Entegrasyon Modülü",
      "Doküman Yönetimi",
      "Mobil Uygulama",
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
        value: "5x",
        label: "Daha hızlı süreç devreye alma",
      },
    ],
    integrations: [
      "Logo Tiger 3 Enterprise",
      "Logo Go 3",
      "E-posta Sunucuları",
      "Active Directory / LDAP",
      "REST API",
    ],
    faq: [
      {
        question: "Logo Flow ile hangi süreçler otomatikleştirilebilir?",
        answer:
          "Satın alma onayları, izin talepleri, masraf onayları, sözleşme yönetimi, müşteri şikâyet süreçleri, kalite kontrol akışları ve daha birçok iş süreci Logo Flow ile otomatikleştirilebilir.",
      },
      {
        question: "Logo Flow kullanmak için yazılım bilgisi gerekli mi?",
        answer:
          "Hayır, Logo Flow'un sürükle-bırak arayüzü sayesinde teknik bilgi olmadan süreçlerinizi tasarlayabilirsiniz. Proses Yazılım olarak başlangıç eğitimi ile iş birimlerinizin kendi süreçlerini yönetmesini sağlıyoruz.",
      },
      {
        question: "Flow ile ERP arasında veri aktarımı nasıl yapılır?",
        answer:
          "Logo Flow, Tiger 3 ve Go 3 ile hazır entegrasyon bağlantılarına sahiptir. Süreç adımlarında ERP verilerini okuyabilir, güncelleyebilir veya yeni kayıt oluşturabilirsiniz.",
      },
    ],
    seo: {
      title: "Logo Flow BPM | İş Süreçleri Otomasyonu | Proses Yazılım",
      description:
        "Logo Flow ile iş süreçlerinizi otomatikleştirin. No-code süreç tasarımı, onay akışları ve ERP entegrasyonu. Proses Yazılım Bursa.",
      keywords: [
        "Logo Flow",
        "iş süreçleri yönetimi",
        "BPM yazılımı",
        "süreç otomasyonu",
        "onay akışı",
        "no-code BPM",
        "iş akışı yönetimi",
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
          "Tiger 3, Go 3 ve diğer Logo ürünleriyle önceden tanımlı veri bağlantıları sayesinde kurulum sonrası hemen raporlamaya başlayın.",
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
      "Logo Go 3",
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
          "Logo Tiger 3 ve Go 3'ten gerçekleşen muhasebe verilerini otomatik çekerek bütçe karşılaştırmalarınızı güncel tutun.",
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
      "Logo Go 3",
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
          "Evet, Logo Budget Logo Tiger 3 ve Go 3'ten muhasebe gerçekleşen verilerini otomatik olarak çeker. Böylece bütçe-gerçekleşen karşılaştırmalarınız her zaman güncel kalır.",
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
    headline: "e-Fatura, e-Arşiv, e-İrsaliye ve e-Defter Çözümleri",
    description:
      "Türkiye'nin e-Dönüşüm sürecinde işletmenizin yasal yükümlülüklerini eksiksiz karşılamanızı sağlıyoruz. e-Fatura, e-Arşiv Fatura, e-İrsaliye ve e-Defter entegrasyonlarını Logo ERP altyapınızla sorunsuz şekilde devreye alıyoruz. GİB onaylı entegratör bağlantıları ve Logo yazılımlarının yerleşik e-Dönüşüm modülleriyle yasal uyumluluk ve operasyonel verimlilik bir arada.\n\nProses Yazılım olarak e-Dönüşüm geçiş sürecinizde başvuru, kurulum, test ve devreye alma adımlarının tamamında yanınızdayız. Mevcut iş akışlarınıza entegre edilen çözümlerle kâğıt maliyetlerinizi azaltın, fatura süreçlerinizi hızlandırın.",
    features: [
      {
        title: "e-Fatura Entegrasyonu",
        description:
          "GİB'e kayıtlı mükelleflere UBL-TR formatında e-Fatura gönderimi ve alımı. Logo ERP'den tek tıkla e-Fatura oluşturma.",
      },
      {
        title: "e-Arşiv Fatura",
        description:
          "GİB'e kayıtlı olmayan mükelleflere ve bireysel müşterilere e-Arşiv Fatura düzenleme. Otomatik e-posta ve SMS gönderimi.",
      },
      {
        title: "e-İrsaliye",
        description:
          "Sevk irsaliyelerinizi elektronik ortamda düzenleyin ve GİB üzerinden gönderin. Lojistik süreçlerinizi hızlandırın.",
      },
      {
        title: "e-Defter",
        description:
          "Yevmiye defteri ve büyük defterin elektronik ortamda oluşturulması, GİB'e berat gönderimi ve arşivleme.",
      },
      {
        title: "Otomatik Belge Eşleştirme",
        description:
          "Gelen e-Fatura ve e-İrsaliyeleri sipariş ve irsaliyelerle otomatik eşleştirin. Manuel veri girişini minimize edin.",
      },
      {
        title: "Yasal Uyumluluk Takibi",
        description:
          "GİB mevzuat değişikliklerini takip ediyor, sisteminizi güncel tutuyoruz. Yasal son tarihlerde hatırlatma bildirimleri gönderiyoruz.",
      },
    ],
    subServices: [
      {
        name: "e-Fatura",
        description:
          "GİB'e kayıtlı mükellefler arası elektronik fatura gönderimi ve alımı. UBL-TR standardında, yasal geçerliliğe sahip dijital faturalama.",
      },
      {
        name: "e-Arşiv Fatura",
        description:
          "GİB'e kayıtlı olmayan mükellefler ve bireysel müşterilere elektronik fatura düzenleme. E-ticaret ve perakende satışlar için zorunlu çözüm.",
      },
      {
        name: "e-İrsaliye",
        description:
          "Sevk irsaliyelerinin elektronik ortamda düzenlenmesi ve GİB üzerinden gönderimi. Mal kabul süreçlerinde hız ve şeffaflık.",
      },
      {
        name: "e-Defter",
        description:
          "Yevmiye defteri ve büyük defterin XBRL formatında elektronik oluşturulması. GİB'e berat gönderimi ve yasal arşivleme.",
      },
    ],
    faq: [
      {
        question: "e-Fatura'ya geçiş zorunlu mu?",
        answer:
          "Brüt satış hasılatı belirli bir tutarı aşan mükellefler için e-Fatura zorunludur. GİB her yıl zorunluluk kapsamını genişletmektedir. Güncel zorunluluk limitleri için bizimle iletişime geçebilirsiniz.",
      },
      {
        question: "e-Dönüşüm geçiş süreci ne kadar sürer?",
        answer:
          "Logo ERP kullanıyorsanız e-Dönüşüm geçişi ortalama 3-5 iş günü içinde tamamlanır. GİB başvurusu, entegratör bağlantısı, test faturaları ve canlıya geçiş adımlarını Proses Yazılım olarak uçtan uca yönetiyoruz.",
      },
      {
        question: "Hangi e-Dönüşüm entegratörleriyle çalışıyorsunuz?",
        answer:
          "Logo yazılımlarının desteklediği tüm GİB onaylı entegratörlerle çalışmaktayız. İşletmenizin ihtiyacına ve mevcut altyapınıza en uygun entegratörü birlikte belirliyoruz.",
      },
      {
        question: "e-Fatura ve e-Arşiv Fatura arasındaki fark nedir?",
        answer:
          "e-Fatura, GİB'e kayıtlı iki mükellef arasında düzenlenir. e-Arşiv Fatura ise GİB'e kayıtlı olmayan mükelleflere veya bireysel müşterilere kesilen elektronik faturadır. Her iki belge de yasal geçerliliğe sahiptir.",
      },
    ],
    seo: {
      title: "e-Dönüşüm Çözümleri | e-Fatura, e-Arşiv, e-İrsaliye | Proses",
      description:
        "e-Fatura, e-Arşiv Fatura, e-İrsaliye ve e-Defter entegrasyonu. Logo ERP ile uyumlu e-Dönüşüm çözümleri. Proses Yazılım Bursa.",
      keywords: [
        "e-Fatura",
        "e-Arşiv Fatura",
        "e-İrsaliye",
        "e-Defter",
        "e-Dönüşüm",
        "Logo e-Fatura",
        "GİB entegrasyon",
        "Bursa e-Fatura",
        "elektronik fatura",
      ],
    },
    icon: FileText,
    relatedSolutions: ["logo-tiger-3", "logo-go-3"],
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
    relatedSolutions: ["logo-tiger-3", "logo-go-3", "logo-crm"],
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
          "Proje kapsamına göre Logo Go 3 için 1-3 hafta, Logo Tiger 3 için 4-12 hafta sürmektedir. Detaylı proje planıyla süreci şeffaf şekilde yönetiyoruz.",
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
    relatedSolutions: ["logo-tiger-3", "logo-go-3", "logo-flow"],
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
      "logo-go-3",
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
      "Proses Yazılım, Bursa Nilüfer merkezli ofisiyle Türkiye'nin dördüncü büyük sanayi şehrine yerinde hizmet sunmaktadır. Otomotiv yan sanayiden tekstile, gıdadan makine imalatına kadar Bursa'nın çeşitli sanayi yapısına özel Logo ERP çözümleri geliştiriyoruz. 15 yılı aşkın yerel deneyimimiz ve 200'den fazla başarılı referansımızla Bursa iş dünyasının güvenilir teknoloji ortağıyız.\n\nBursa'nın dinamik iş ortamında rekabet avantajı elde etmek isteyen işletmelere Logo Tiger 3 Enterprise, Logo Go 3 ve tüm Logo ürün ailesinde danışmanlık, kurulum, eğitim ve teknik destek hizmetleri veriyoruz. Aynı gün yerinde müdahale garantimiz, uzaktan destek altyapımız ve sektörel uzmanlığımızla dijital dönüşüm yolculuğunuzda yanınızdayız.",
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
        "Bursa'da Logo ERP çözüm ortağı Proses Yazılım. Tiger 3, Go 3 kurulum, danışmanlık ve teknik destek. 200+ yerel referans.",
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
