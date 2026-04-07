'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Check, Phone, TrendingUp, TrendingDown, Clock } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { getOtherSolutions } from '@/lib/solutions';
import type { Solution } from '@/lib/solutions';

type SolutionPageProps = {
  solution: Omit<Solution, 'icon'>;
};

const heroImages: Record<string, string> = {
  'logo-tiger-3': '/images/factory.jpg',
  'logo-go-wings': '/images/consulting.jpg',
  'logo-crm': '/images/team-meeting.jpg',
  'logo-flow': '/images/dashboard-analytics.jpg',
  'logo-mind': '/images/data-screen.jpg',
  'logo-budget': '/images/erp-dashboard.jpg',
};

type Screenshot = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

const screenshots: Record<string, Screenshot[]> = {
  'logo-tiger-3': [
    {
      src: '/images/logo-tiger/tiger-desktop.webp',
      alt: 'Logo Tiger 3 Enterprise Masaüstü',
      title: 'Kişiselleştirilebilir Masaüstü',
      description: 'Rol bazlı kısayollar, arama motoru ve estetik arayüz tasarımı ile tüm modüllere hızlı erişim.',
    },
    {
      src: '/images/logo-tiger/tiger-production-planning.webp',
      alt: 'Logo Tiger 3 Üretim Çizelgeleme',
      title: 'Üretim Planlama ve Çizelgeleme',
      description: 'Gantt diyagramı ile üretim emirlerini görsel olarak planlayın, kapasite ve öncelikleri yönetin.',
    },
    {
      src: '/images/logo-tiger/tiger-mrp.webp',
      alt: 'Logo Tiger 3 MRP Planlama',
      title: 'Malzeme İhtiyaç Planlama (MRP)',
      description: 'Günlük ve haftalık bazda stok, sipariş ve üretim ihtiyaçlarını detaylı şekilde analiz edin.',
    },
    {
      src: '/images/logo-tiger/tiger-cost-analysis.webp',
      alt: 'Logo Tiger 3 Maliyet Analizi',
      title: 'Üretim Maliyet Hesaplama',
      description: 'Gerçekleşen üretim maliyetlerini hammadde, işçilik, enerji ve genel gider kalemlerine göre detaylandırın.',
    },
    {
      src: '/images/logo-tiger/tiger-capacity-planning.webp',
      alt: 'Logo Tiger 3 Kapasite Planlama',
      title: 'Kapasite Planlama (CTP)',
      description: 'İş merkezlerinin kapasitelerini dönemsel olarak izleyin, darboğazları önceden tespit edin.',
    },
    {
      src: '/images/logo-tiger/tiger-finance.webp',
      alt: 'Logo Tiger 3 Finans Yönetimi',
      title: 'Cari Hesap ve Borç Takibi',
      description: 'Borç-alacak hareketlerini detaylı takip edin, karşı işlem eşleştirme ve vade analizleri yapın.',
    },
  ],
  'logo-crm': [
    {
      src: '/images/logo-crm/crm-dashboard.webp',
      alt: 'Logo CRM Dashboard',
      title: 'Ana Sayfa ve Özet Bilgiler',
      description: 'Firmalar, teklifler, aktiviteler ve onay bekleyen kayıtları tek ekrandan takip edin.',
    },
    {
      src: '/images/logo-crm/crm-auto-tasks.webp',
      alt: 'Logo CRM Otomatik Görevler',
      title: 'Otomatik Görevler',
      description: 'Zamana veya işleme bağlı otomatik bildirimler, ERP aktarımı ve e-posta dinleme görevlerini yönetin.',
    },
    {
      src: '/images/logo-crm/crm-flow-integration.webp',
      alt: 'Logo CRM Flow Entegrasyonu',
      title: 'Logo Flow Entegrasyonu',
      description: 'İzin talep süreçleri, destek akışları ve onay mekanizmalarını CRM içinden doğrudan yönetin.',
    },
    {
      src: '/images/logo-crm/crm-mobile-map.webp',
      alt: 'Logo CRM Mobil Yakınımdakiler',
      title: 'Mobil — Yakınımdakiler',
      description: 'Bulunduğunuz bölgedeki müşterileri ve açık fırsatları harita üzerinde görüntüleyin.',
    },
    {
      src: '/images/logo-crm/crm-mobile-checkin.webp',
      alt: 'Logo CRM Mobil Check-in',
      title: 'Mobil — Check-in/Check-out',
      description: 'Saha çalışanlarının müşteri ziyaretlerini takip edin, giriş-çıkış saatlerini kayıt altına alın.',
    },
  ],
  'logo-go-wings': [
    {
      src: '/images/logo-go-wings/gowings-desktop-menu.webp',
      alt: 'Logo GO Wings Masaüstü ve Menü',
      title: 'Kişiselleştirilebilir Masaüstü',
      description: 'Rol bazlı kısayollar, erişim ağacı ve ürün içi arama motoru ile tüm modüllere hızlı erişim sağlayın.',
    },
    {
      src: '/images/logo-go-wings/gowings-web-dashboard.webp',
      alt: 'Logo GO Wings Web Arayüzü',
      title: 'Web Tabanlı Arayüz',
      description: 'Tarayıcı üzerinden her yerden erişim, widget ekleme ve app-in-app teknolojisi ile zenginleştirilebilir masaüstü.',
    },
    {
      src: '/images/logo-go-wings/gowings-invoice.webp',
      alt: 'Logo GO Wings Fatura Yönetimi',
      title: 'Fatura ve Satın Alma Yönetimi',
      description: 'Satın alma faturaları, cari hesap bilgileri ve çoklu para birimi desteği ile tüm fatura süreçlerini yönetin.',
    },
  ],
  'logo-flow': [
    {
      src: '/images/logo-flow/flow-dashboard.webp',
      alt: 'Logo Flow Dashboard',
      title: 'Özelleştirilebilir Dashboard',
      description: 'Masraf onayları, satın alma siparişleri, seyahat planlama gibi tüm akışlarınızı tek ekrandan takip edin.',
    },
    {
      src: '/images/logo-flow/flow-workflow-screen.webp',
      alt: 'Logo Flow İş Akışı Yönetimi',
      title: 'İş Akışı Yönetim Ekranı',
      description: 'Masraf onay süreçlerini, görev atamalarını ve zaman aşımı kontrollerini detaylı şekilde yönetin.',
    },
    {
      src: '/images/logo-flow/flow-form-desktop.webp',
      alt: 'Logo Flow Form Tasarımı',
      title: 'Kişiye Özel Form Tasarımı',
      description: 'Yardım masası, talep formları ve onay süreçlerini sürükle-bırak ile kolayca oluşturun.',
    },
    {
      src: '/images/logo-flow/flow-mobile.webp',
      alt: 'Logo Flow Mobil Uygulama',
      title: 'Mobil Uygulama',
      description: 'iOS ve Android cihazlardan zaman ve mekandan bağımsız iş akış yönetimi.',
    },
  ],
};

const benefitIcons = [TrendingUp, TrendingDown, Clock];

export function SolutionPageClient({ solution }: SolutionPageProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const otherSolutions = getOtherSolutions(solution.slug);
  const descriptionParagraphs = solution.description.split('\n\n');
  const heroImage = heroImages[solution.slug] || '/images/erp-dashboard.jpg';

  // Split features into two columns
  const midpoint = Math.ceil(solution.features.length / 2);
  const featuresCol1 = solution.features.slice(0, midpoint);
  const featuresCol2 = solution.features.slice(midpoint);

  return (
    <>
      <Navbar />

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-slate-50 dark:bg-deep-space">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={solution.name}
            fill
            className="object-cover opacity-15 dark:opacity-30 dark:mix-blend-luminosity"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white dark:from-deep-space/80 dark:via-deep-space/60 dark:to-deep-space" />
        </div>

        {/* Product color glow */}
        <div
          className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full blur-[150px] pointer-events-none opacity-10 dark:opacity-20"
          style={{ backgroundColor: solution.color }}
        />

        <div className="site-container relative z-10 py-32 md:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Text & CTAs */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <Breadcrumb
                  items={[
                    { label: 'Çözümler', href: '/cozumler' },
                    { label: solution.name },
                  ]}
                />
              </motion.div>

              <motion.div
                className="flex items-center gap-3 mt-10 mb-8"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center border backdrop-blur-md"
                  style={{
                    backgroundColor: `${solution.color}20`,
                    borderColor: `${solution.color}30`,
                  }}
                >
                  <div className="relative w-7 h-7">
                    <Image src={solution.logo} alt={solution.name} fill className="object-contain" />
                  </div>
                </div>
                <span
                  className="text-sm font-bold tracking-widest uppercase"
                  style={{ color: solution.color }}
                >
                  {solution.slug === 'logo-tiger-3' ? 'Flagship ERP' : solution.name}
                </span>
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tighter leading-[1.05] text-slate-900 dark:text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                {solution.name}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-400 dark:from-white dark:to-white/40">
                  ile Sınırları Kaldırın.
                </span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-slate-500 dark:text-white/55 font-medium max-w-xl leading-relaxed mb-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                {solution.headline}
              </motion.p>

              <motion.div
                className="flex flex-wrap items-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link
                  href="/iletisim"
                  className="px-8 py-4 rounded-full text-white font-bold text-sm transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: solution.color,
                    boxShadow: `0 0 30px ${solution.color}30`,
                  }}
                >
                  Hemen İnceleyin
                </Link>
                <a
                  href="tel:08506776737"
                  className="px-8 py-4 rounded-full font-medium text-sm border border-slate-300 dark:border-white/20 bg-white/60 dark:bg-white/5 backdrop-blur-md hover:bg-white/80 dark:hover:bg-white/10 transition-all text-slate-700 dark:text-white flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Bizi Arayın
                </a>
              </motion.div>
            </div>

            {/* Right: Floating stat badges */}
            <motion.div
              className="lg:col-span-5 relative hidden lg:flex items-center justify-end"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className="relative w-full max-w-sm h-[400px]">
                {solution.benefits.map((benefit, i) => {
                  const Icon = benefitIcons[i] || TrendingUp;
                  const positions = [
                    'absolute -top-4 -right-4 z-30',
                    'relative z-20 mt-16',
                    'absolute -bottom-8 -left-8 z-30',
                  ];
                  const isMain = i === 1;

                  return (
                    <motion.div
                      key={i}
                      className={`${positions[i]} bg-white/80 dark:bg-white/[0.06] backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-xl dark:shadow-2xl rounded-3xl ${
                        isMain ? 'p-8' : 'p-6'
                      }`}
                      animate={{ y: [0, i % 2 === 0 ? -12 : 8, 0] }}
                      transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      {isMain && (
                        <Icon className="w-7 h-7 mb-4" style={{ color: solution.color }} />
                      )}
                      <div className="text-xs text-slate-400 dark:text-white/45 mb-1 font-semibold uppercase tracking-wider">
                        {benefit.label}
                      </div>
                      <div className={`font-extrabold text-slate-900 dark:text-white flex items-baseline gap-2 ${isMain ? 'text-5xl' : 'text-3xl'}`}>
                        {benefit.value}
                        {!isMain && <Icon className="w-5 h-5" style={{ color: solution.color }} />}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Mobile stats strip */}
          <motion.div
            className="mt-12 flex flex-wrap gap-8 border-t border-slate-200 dark:border-white/10 pt-8 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {solution.benefits.map((benefit, i) => (
              <div key={i}>
                <span className="block text-3xl font-bold text-slate-900 dark:text-white">{benefit.value}</span>
                <span className="text-xs text-slate-400 dark:text-white/35 mt-1 block uppercase tracking-wider">{benefit.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ HAKKINDA — Editorial Layout ═══════════ */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            {/* Left: Sticky header */}
            <div className="md:col-span-4">
              <div className="sticky top-28">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
                  Güç ve Esneklik<br />Bir Arada.
                </h2>
                <div className="w-12 h-1 rounded mb-6" style={{ backgroundColor: solution.color }} />
                <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
                  {solution.shortDescription}
                </p>
              </div>
            </div>

            {/* Right: Rich content */}
            <div className="md:col-span-8">
              <p className="text-xl md:text-2xl text-slate-800 dark:text-slate-200 leading-normal font-medium mb-12">
                {descriptionParagraphs[0]}
              </p>

              {descriptionParagraphs.length > 1 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  {descriptionParagraphs.slice(1).map((paragraph, i) => (
                    <div
                      key={i}
                      className="bg-slate-50 dark:bg-white/[0.03] p-8 rounded-3xl border border-slate-100 dark:border-white/[0.06]"
                    >
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        {paragraph}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ ÖZELLİKLER — Numbered Two-Column ═══════════ */}
      <section className="py-24 md:py-32 border-t border-slate-200/60 dark:border-white/[0.04] bg-slate-50/50 dark:bg-transparent relative">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="site-container relative">
          <div className="flex justify-between items-end mb-16">
            <div>
              <div className="w-12 h-1 rounded mb-5" style={{ backgroundColor: solution.color }} />
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                Kritik Yetenekler
              </h2>
            </div>
            <span className="text-sm text-slate-400 dark:text-slate-500 hidden md:block tabular-nums">
              {solution.features.length} özellik
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
            {/* Column 1 */}
            <div className="divide-y divide-slate-200 dark:divide-white/[0.06]">
              {featuresCol1.map((feature, i) => (
                <motion.div
                  key={i}
                  className="py-8 group"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                >
                  <div
                    className="font-mono text-sm font-bold mb-2"
                    style={{ color: solution.color }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground transition-colors duration-300 group-hover:text-burgundy dark:group-hover:text-crimson">
                    {feature.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Column 2 */}
            <div className="divide-y divide-slate-200 dark:divide-white/[0.06]">
              {featuresCol2.map((feature, i) => (
                <motion.div
                  key={i}
                  className="py-8 group"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (midpoint + i) * 0.06 }}
                >
                  <div
                    className="font-mono text-sm font-bold mb-2"
                    style={{ color: solution.color }}
                  >
                    {String(midpoint + i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground transition-colors duration-300 group-hover:text-burgundy dark:group-hover:text-crimson">
                    {feature.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ MODÜLLER — Pill Tags ═══════════ */}
      <section className="py-20 md:py-24 border-t border-slate-200/60 dark:border-white/[0.04] bg-slate-50 dark:bg-white/[0.01]">
        <div className="site-container text-center">
          <h2 className="text-sm font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase mb-10">
            İhtiyacınıza Göre Ölçeklenebilir Modüller
          </h2>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl mx-auto">
            {solution.modules.map((mod, i) => (
              <motion.div
                key={i}
                className="px-6 py-3 bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] rounded-full font-semibold text-sm text-foreground whitespace-nowrap transition-all duration-300 hover:shadow-lg cursor-default"
                style={{
                  // @ts-expect-error CSS custom properties
                  '--hover-color': solution.color,
                }}
                whileHover={{
                  borderColor: solution.color,
                  color: solution.color,
                  scale: 1.05,
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
              >
                {mod}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ EKRAN GÖRÜNTÜLERİ — Screenshots Gallery ═══════════ */}
      {screenshots[solution.slug] && screenshots[solution.slug].length > 0 && (
        <section className="py-20 md:py-28 bg-slate-50/50 dark:bg-white/[0.02]">
          <div className="site-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Uygulama Ekran Görüntüleri
              </h2>
              <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                {solution.name} arayüzünden kesitler
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {screenshots[solution.slug].map((shot, i) => (
                <motion.div
                  key={shot.src}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] shadow-sm hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      fill
                      className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-4 md:p-5">
                    <h3 className="font-semibold text-slate-900 dark:text-white text-sm md:text-base">{shot.title}</h3>
                    <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-1">{shot.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════ KİMLER İÇİN + ENTEGRASYONLAR — Dark Split Panel ═══════════ */}
      <section className="py-20 md:py-28">
        <div className="site-container">
          <div className="bg-slate-900 dark:bg-white/[0.04] rounded-[2rem] md:rounded-[3rem] overflow-hidden grid grid-cols-1 lg:grid-cols-2 text-white">
            {/* Left: Target Audience */}
            <div className="p-10 md:p-16 lg:p-20 relative overflow-hidden">
              <div
                className="absolute inset-0 bg-gradient-radial from-transparent to-transparent pointer-events-none opacity-10"
                style={{ background: `radial-gradient(circle at 30% 30%, ${solution.color}30, transparent 70%)` }}
              />
              <h2 className="text-3xl md:text-4xl font-bold mb-8 relative z-10">
                Kimler İçin İdeal?
              </h2>
              <p className="text-white/60 text-lg leading-relaxed relative z-10">
                {solution.targetAudience}
              </p>
            </div>

            {/* Right: Integrations */}
            <div className="p-10 md:p-16 lg:p-20 bg-slate-800/50 dark:bg-white/[0.02] border-t lg:border-t-0 lg:border-l border-white/[0.06]">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ekosistem Uyumu
              </h2>
              <p className="text-white/45 mb-8 text-sm">
                Kapalı bir kutu değil, dijital merkeziniz. Onlarca sistemle entegre çalışır.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {solution.integrations.map((integration, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3 text-white/80 font-medium text-sm"
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.04 }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" style={{ color: solution.color }} />
                    </div>
                    {integration}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ SSS — Card Accordion ═══════════ */}
      <section className="py-20 md:py-28 border-t border-slate-200/60 dark:border-white/[0.04]">
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-4">
              <div className="w-12 h-1 rounded mb-5" style={{ backgroundColor: solution.color }} />
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Sıkça Sorulan<br />Sorular
              </h2>
              <p className="text-slate-500 dark:text-slate-400">
                Teknik detaylar ve geçiş süreçleri hakkında merak edilenler.
              </p>
            </div>

            <div className="md:col-span-8 space-y-4">
              {solution.faq.map((item, i) => {
                const isActive = activeIndex === i;
                return (
                  <div
                    key={i}
                    className={`bg-slate-50 dark:bg-white/[0.03] rounded-2xl border transition-colors duration-300 ${
                      isActive
                        ? 'border-slate-300 dark:border-white/[0.12]'
                        : 'border-slate-200 dark:border-white/[0.06]'
                    }`}
                  >
                    <button
                      onClick={() => setActiveIndex(isActive ? null : i)}
                      className="w-full flex items-center justify-between p-6 text-left cursor-pointer group"
                    >
                      <span
                        className={`font-bold text-base md:text-lg pr-4 transition-colors duration-300 ${
                          isActive ? '' : 'text-foreground'
                        }`}
                        style={isActive ? { color: solution.color } : undefined}
                      >
                        {item.question}
                      </span>
                      <motion.span
                        className="relative flex-shrink-0 w-5 h-5"
                        animate={{ rotate: isActive ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="absolute inset-y-0 left-[9px] w-[2px] bg-current rounded" />
                        <span className="absolute inset-x-0 top-[9px] h-[2px] bg-current rounded" />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <p className="px-6 pb-6 text-slate-500 dark:text-slate-400 leading-relaxed">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ DİĞER ÇÖZÜMLER — Horizontal Scroll ═══════════ */}
      <section className="py-20 md:py-24 border-t border-slate-200/60 dark:border-white/[0.04] overflow-hidden">
        <div className="site-container mb-10">
          <div className="w-12 h-1 rounded mb-5" style={{ backgroundColor: solution.color }} />
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            Ekosistemi Genişletin
          </h2>
        </div>

        {/* Horizontal scroll ribbon */}
        <div className="flex overflow-x-auto gap-4 px-6 pb-8 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {otherSolutions.map((other, i) => (
            <motion.div
              key={other.slug}
              className="snap-start"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link
                href={`/cozumler/${other.slug}`}
                className="group flex items-center gap-5 min-w-[300px] md:min-w-[380px] bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] p-6 rounded-3xl hover:shadow-xl transition-all duration-300"
              >
                <div
                  className="w-14 h-14 rounded-2xl border flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 overflow-hidden"
                  style={{
                    backgroundColor: `${other.color}10`,
                    borderColor: `${other.color}20`,
                  }}
                >
                  <div className="relative w-8 h-8">
                    <Image src={other.logo} alt={other.name} fill className="object-contain" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-foreground group-hover:text-burgundy dark:group-hover:text-crimson transition-colors">
                    {other.name}
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
                    {other.shortDescription}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
          {/* Scroll spacer */}
          <div className="min-w-[1px] shrink-0" />
        </div>
      </section>

      {/* ═══════════ CTA — Cinematic Footer ═══════════ */}
      <section className="relative min-h-[450px] flex items-center justify-center overflow-hidden bg-slate-900 dark:bg-deep-space">
        <Image
          src="/images/code-office.jpg"
          alt=""
          fill
          className="object-cover opacity-20 mix-blend-screen"
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent dark:from-deep-space dark:via-deep-space/60" />
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{ background: `radial-gradient(circle at 50% 50%, ${solution.color}, transparent 70%)` }}
        />

        <div className="relative z-10 px-6 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
              Dijital Dönüşümünüze<br />Bugün Başlayın.
            </h2>
            <p className="text-lg md:text-xl text-white/55 mb-10 leading-relaxed">
              {solution.name} hakkında detaylı bilgi almak ve işletmenize özel
              çözüm önerilerimizi dinlemek için bizimle iletişime geçin.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/iletisim"
                className="px-10 py-5 rounded-full bg-white font-bold text-lg transition-all duration-300 hover:scale-105"
                style={{ color: solution.color }}
              >
                Bize Ulaşın
              </Link>
              <a
                href="tel:08506776737"
                className="px-8 py-5 rounded-full text-white/70 font-medium border border-white/20 hover:border-white/35 hover:text-white transition-all duration-300 backdrop-blur-sm flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                0850 677 67 37
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
