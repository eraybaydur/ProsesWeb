'use client';

import { useState, useEffect, useCallback, useMemo, type ReactNode } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import DotGrid from '@/components/ui/backgrounds/DotGrid';
import AuroraWaves from '@/components/ui/backgrounds/AuroraWaves';
import PulseGrid from '@/components/ui/backgrounds/PulseGrid';
import HexGrid from '@/components/ui/backgrounds/HexGrid';
import FloatingLines from '@/components/ui/backgrounds/FloatingLines';
import NetworkMesh from '@/components/ui/backgrounds/NetworkMesh';
import GradientOrbs from '@/components/ui/backgrounds/GradientOrbs';

type EffectsProfile = {
    compact: boolean;
    reduced: boolean;
};

type BackgroundLayer = {
    visual: ReactNode;
    tint: string;
    ambient: string;
};

const createSlideBackgrounds = ({ compact, reduced }: EffectsProfile): Record<number, BackgroundLayer> => {
    const densityFactor = compact ? 1.15 : 1;
    const speedFactor = reduced ? 0.25 : compact ? 0.55 : 0.7;

    return {
        0: {
            visual: (
                <GradientOrbs
                    colors={['#db1a5d', '#e05572', '#ff7eb3', '#b0154a']}
                    orbCount={compact ? 3 : 5}
                    speed={0.3 * speedFactor}
                    blur={compact ? 60 : 90}
                />
            ),
            tint: 'radial-gradient(110% 85% at 20% 40%, rgba(219,26,93,0.10), transparent 68%)',
            ambient: 'linear-gradient(135deg, rgba(255,255,255,0.20), rgba(219,26,93,0.03) 46%, rgba(219,26,93,0.08))',
        },
        1: {
            visual: (
                <DotGrid
                    color="#f97316"
                    dotSize={1.7}
                    gap={Math.round(34 * densityFactor)}
                    waveSpeed={0.0022 * speedFactor}
                    waveAmplitude={reduced ? 1.4 : 2.4}
                />
            ),
            tint: 'radial-gradient(110% 85% at 18% 40%, rgba(249,115,22,0.14), transparent 68%)',
            ambient: 'linear-gradient(135deg, rgba(255,255,255,0.28), rgba(241,245,249,0.06) 44%, rgba(249,115,22,0.08))',
        },
        2: {
            visual: <HexGrid color="#3b82f6" size={compact ? 34 : 30} speed={0.0014 * speedFactor} />,
            tint: 'radial-gradient(95% 80% at 20% 35%, rgba(59,130,246,0.13), transparent 66%)',
            ambient: 'linear-gradient(120deg, rgba(255,255,255,0.25), rgba(148,163,184,0.04) 48%, rgba(59,130,246,0.08))',
        },
        3: {
            visual: (
                <AuroraWaves
                    colors={['#a855f7', '#c084fc', '#7c3aed']}
                    speed={0.00055 * speedFactor}
                    blur={compact ? 76 : 86}
                />
            ),
            tint: 'radial-gradient(96% 84% at 16% 38%, rgba(168,85,247,0.14), transparent 66%)',
            ambient: 'linear-gradient(135deg, rgba(255,255,255,0.24), rgba(236,72,153,0.03) 46%, rgba(124,58,237,0.09))',
        },
        4: {
            visual: (
                <NetworkMesh
                    color="#06b6d4"
                    nodeCount={compact ? 22 : 28}
                    connectionDistance={compact ? 112 : 130}
                    speed={0.18 * speedFactor}
                />
            ),
            tint: 'radial-gradient(105% 82% at 17% 38%, rgba(6,182,212,0.13), transparent 66%)',
            ambient: 'linear-gradient(140deg, rgba(255,255,255,0.22), rgba(14,116,144,0.03) 46%, rgba(6,182,212,0.08))',
        },
        5: {
            visual: (
                <PulseGrid
                    color="#10b981"
                    gridSize={compact ? 46 : 42}
                    pulseSpeed={0.0026 * speedFactor}
                />
            ),
            tint: 'radial-gradient(100% 82% at 20% 40%, rgba(16,185,129,0.14), transparent 67%)',
            ambient: 'linear-gradient(130deg, rgba(255,255,255,0.24), rgba(15,118,110,0.03) 44%, rgba(16,185,129,0.08))',
        },
        6: {
            visual: (
                <FloatingLines
                    linesGradient={['#f59e0b', '#fbbf24', '#f97316']}
                    enabledWaves={['middle', 'bottom']}
                    lineCount={compact ? [4, 3] : [5, 4]}
                    animationSpeed={reduced ? 0.22 : compact ? 0.35 : 0.45}
                />
            ),
            tint: 'radial-gradient(102% 82% at 15% 38%, rgba(245,158,11,0.14), transparent 66%)',
            ambient: 'linear-gradient(130deg, rgba(255,255,255,0.24), rgba(161,98,7,0.03) 45%, rgba(245,158,11,0.08))',
        },
    };
};

const slides: Array<{
    id: string; name: string; headline: string; description: string;
    features: string[]; image: string; video?: string | string[]; logo: string;
    slug: string; color: string;
    playbackRate?: number; duration?: number;
}> = [
    {
        id: 'intro',
        name: 'Endüstriyel Dijital Dönüşüm',
        headline: 'Proses Yazılım',
        description: 'Üretimden satışa, pazarlamadan finansa — tüm iş süreçlerinizi uçtan uca dijitalleştiriyoruz. Sektörünüze özel ERP ve yazılım çözümleriyle verimliliğinizi artırın.',
        features: ['Üretim & Planlama', 'Satış & Pazarlama', 'Finans & Muhasebe', 'Tedarik Zinciri'],
        image: '/images/consulting.jpg',
        video: ['/videos/slide-intro2.mp4', '/videos/slide-intro.mp4'],
        logo: '/proses-logo.webp',
        slug: '',
        color: '#db1a5d',
        playbackRate: 1,
        duration: 16000,
    },
    {
        id: 'tiger',
        name: 'Logo Tiger 3 Enterprise',
        headline: 'Kurumsal ERP Çözümü',
        description: 'İşletmenizi bütünleşik yönetin, sınırları aşın! Ölçeklenebilir, esnek ve sektör bağımsız yapısıyla tüm iş süreçlerinizi uçtan uca yöneten kapsamlı ERP çözümü.',
        features: ['Üretim Planlama (MPS/MRP)', 'Finans ve Maliyet Muhasebesi', 'Tedarik ve Stok Yönetimi', 'Çoklu Şirket Konsolidasyonu'],
        image: '/images/solution-tiger.webp',
        video: '/videos/slide-tiger.mp4',
        logo: '/tiger.webp',
        slug: 'logo-tiger-3',
        color: '#f97316',
    },
    {
        id: 'go3',
        name: 'Logo GO Wings',
        headline: 'KOBİ Dostu Web Tabanlı ERP',
        description: 'Web üzerinden kullanılabilen, KOBİ\'lerin siparişten muhasebeye tüm iş süreçlerini her an her yerde yönetmesini sağlayan tam kapsamlı ERP çözümü.',
        features: ['Web & Masaüstü Hybrid Yapı', 'Finansal Yönetim', 'Stok & Sipariş Takibi', 'e-Çözümler Entegrasyonu'],
        image: '/images/solution-go3.webp',
        video: '/videos/slide-go.mp4',
        logo: '/gowings.webp',
        slug: 'logo-go-wings',
        color: '#3b82f6',
    },
    {
        id: 'crm',
        name: 'Logo CRM',
        headline: 'Müşteri İlişkileri Yönetimi',
        description: 'Müşteri ilişkilerinizi güçlendirin, satış süreçlerinizi optimize edin ve müşteri memnuniyetini artırın.',
        features: ['Müşteri Veri Yönetimi', 'Satış Fırsatı Takibi', 'Kampanya Yönetimi', '360° Müşteri Görünümü'],
        image: '/images/solution-crm.webp',
        video: '/videos/slide-crm.mp4',
        logo: '/logocrm.webp',
        slug: 'logo-crm',
        color: '#a855f7',
    },
    {
        id: 'flow',
        name: 'Logo Flow',
        headline: 'İş Süreçleri Otomasyonu',
        description: 'İş akışlarınızı dijitalleştirin, onay mekanizmalarını otomatikleştirin ve operasyonel verimliliği artırın.',
        features: ['Süreç Tasarımı', 'Onay Mekanizmaları', 'Görev Yönetimi', 'Entegrasyon API'],
        image: '/images/solution-flow.webp',
        video: '/videos/slide-flow.mp4',
        logo: '/logoflow.webp',
        slug: 'logo-flow',
        color: '#06b6d4',
    },
    {
        id: 'mind',
        name: 'Logo Mind',
        headline: 'İş Zekası Platformu',
        description: 'Verilerinizi anlamlandırın, güçlü analizlerle stratejik kararlar alın ve rekabet avantajı elde edin.',
        features: ['Gelişmiş Raporlama', 'Dashboard Tasarımı', 'Veri Görselleştirme', 'KPI Takibi'],
        image: '/images/solution-mind.webp',
        video: '/videos/slide-mind.mp4',
        logo: '/logomind.webp',
        slug: 'logo-mind',
        color: '#10b981',
    },
    {
        id: 'budget',
        name: 'Logo Budget',
        headline: 'Bütçe Planlama Sistemi',
        description: 'Bütçe planlama, takip ve raporlama süreçlerinizi profesyonelce yönetin, mali hedeflerinize ulaşın.',
        features: ['Bütçe Planlama', 'Revizyon Yönetimi', 'Senaryo Analizi', 'Detaylı Raporlama'],
        image: '/images/solution-budget.webp',
        video: '/videos/slide-budget.mp4',
        logo: '/logobudget.webp',
        slug: 'logo-budget',
        color: '#f59e0b',
    },
];

const AUTOPLAY_INTERVAL = 7400;

export default function TechFlow() {
    const [current, setCurrent] = useState(0);
    const [isCompactEffects, setIsCompactEffects] = useState(false);
    const prefersReducedMotion = useReducedMotion();

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 1024px)');
        const handleChange = () => setIsCompactEffects(mediaQuery.matches);
        handleChange();
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    const goTo = useCallback((index: number) => {
        setCurrent(index);
    }, []);

    const next = useCallback(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
    }, []);

    const prev = useCallback(() => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    }, []);

    useEffect(() => {
        const interval = slides[current].duration ?? AUTOPLAY_INTERVAL;
        const timer = setTimeout(next, interval);
        return () => clearTimeout(timer);
    }, [current, next]);

    const slideBackgrounds = useMemo(
        () => createSlideBackgrounds({ compact: isCompactEffects, reduced: Boolean(prefersReducedMotion) }),
        [isCompactEffects, prefersReducedMotion]
    );

    const backgroundOpacityClass = prefersReducedMotion
        ? 'opacity-20 dark:opacity-28'
        : isCompactEffects
            ? 'opacity-24 dark:opacity-34'
            : 'opacity-30 dark:opacity-42';

    const slideVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    };

    const textContainerVariants = {
        initial: {},
        animate: {
            transition: {
                staggerChildren: prefersReducedMotion ? 0.03 : 0.075,
                delayChildren: prefersReducedMotion ? 0 : 0.08,
            },
        },
    };

    const textItemVariants = {
        initial: prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 14, filter: 'blur(4px)' },
        animate: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                duration: prefersReducedMotion ? 0.24 : 0.45,
                ease: [0.22, 1, 0.36, 1] as const,
            },
        },
    };

    const slide = slides[current];
    const currentBackground = slideBackgrounds[current];

    return (
        <section
            id="techflow"
            className="relative h-screen w-full bg-slate-50 dark:bg-deep-space overflow-hidden"
        >
            {/* ──── Slide content ──── */}
            <div className="relative z-[10] w-full h-full">
                <AnimatePresence mode="sync">
                    <motion.div
                        key={slide.id}
                        variants={slideVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: prefersReducedMotion ? 0.5 : 2, ease: 'easeInOut' }}
                        className="absolute inset-0 w-full h-full"
                    >
                            {/* Animated background: text'in arkasında, görselin üstünde */}
                            <motion.div
                                key={`bg-${slide.id}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: prefersReducedMotion ? 0.2 : 0.8, ease: 'easeOut' }}
                                className={`absolute inset-0 z-[12] pointer-events-none ${backgroundOpacityClass}`}
                            >
                                {currentBackground.visual}
                                <div
                                    className="absolute inset-0"
                                    style={{ background: currentBackground.tint }}
                                />
                                <div
                                    className="absolute inset-0"
                                    style={{ background: currentBackground.ambient }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/8 to-slate-50/80 dark:from-transparent dark:via-deep-space/15 dark:to-deep-space/90 lg:bg-gradient-to-r lg:from-slate-50/85 lg:via-slate-50/20 lg:to-transparent dark:lg:from-deep-space/90 dark:lg:via-deep-space/35 dark:lg:to-transparent" />
                                <div className="absolute inset-0 bg-gradient-to-b from-slate-100/8 via-transparent to-slate-200/16 dark:from-white/[0.03] dark:via-transparent dark:to-black/25" />
                                <div className="absolute inset-0 [mask-image:radial-gradient(circle_at_50%_50%,black_40%,transparent_100%)] bg-slate-200/12 dark:bg-black/18" />
                            </motion.div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">

                                {/* Left: Text — animasyonun üstünde */}
                                <motion.div
                                    variants={textContainerVariants}
                                    initial="initial"
                                    animate="animate"
                                    className="relative z-[15] flex flex-col justify-center order-2 lg:order-1 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-20 lg:py-0"
                                >
                                    <motion.span
                                        variants={textItemVariants}
                                        className="inline-block text-xs font-bold uppercase tracking-widest mb-4 px-3 py-1 rounded-full w-fit"
                                        style={{ color: slide.color, backgroundColor: `${slide.color}15` }}
                                    >
                                        {slide.headline}
                                    </motion.span>

                                    <motion.h1
                                        variants={textItemVariants}
                                        className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 tracking-tight leading-[1.1] text-slate-900 dark:text-white"
                                    >
                                        {slide.name}
                                    </motion.h1>

                                    <motion.p
                                        variants={textItemVariants}
                                        className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-lg"
                                    >
                                        {slide.description}
                                    </motion.p>

                                    <motion.div variants={textItemVariants} className="grid grid-cols-2 gap-x-6 gap-y-3 mb-10">
                                        {slide.features.map((f, i) => (
                                            <motion.div
                                                key={i}
                                                initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: -8 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.3, delay: prefersReducedMotion ? i * 0.02 : 0.1 + i * 0.05 }}
                                                className="flex items-center gap-2.5"
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: slide.color }} />
                                                <span className="text-sm text-slate-600 dark:text-slate-300">{f}</span>
                                            </motion.div>
                                        ))}
                                    </motion.div>

                                    <motion.div variants={textItemVariants}>
                                        <Link
                                        href={slide.slug ? `/cozumler/${slide.slug}` : '/iletisim'}
                                        className="relative inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-sm transition-all duration-500 hover:-translate-y-1 group w-fit overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:focus-visible:ring-offset-deep-space"
                                        style={{
                                            backgroundColor: slide.color,
                                            boxShadow: `0 4px 24px ${slide.color}35, 0 0 0 1px ${slide.color}20`,
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.boxShadow = `0 8px 40px ${slide.color}50, 0 0 0 1px ${slide.color}40, 0 0 20px ${slide.color}25`;
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.boxShadow = `0 4px 24px ${slide.color}35, 0 0 0 1px ${slide.color}20`;
                                        }}
                                    >
                                        {/* Shine sweep on hover */}
                                        <span className="absolute inset-0 overflow-hidden rounded-full">
                                            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                                        </span>
                                        {/* Glass highlight top */}
                                        <span className="absolute inset-0 rounded-full bg-gradient-to-b from-white/20 via-white/5 to-transparent pointer-events-none" />
                                        {/* Inner border glow */}
                                        <span className="absolute inset-[1px] rounded-full border border-white/10 pointer-events-none" />
                                        <span className="relative z-10">{slide.slug ? 'Detaylı Bilgi' : 'İletişime Geçin'}</span>
                                        <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                                    </Link>
                                    </motion.div>
                                </motion.div>

                                {/* Right: Image — animasyonun altında */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: prefersReducedMotion ? 0.5 : 2, ease: 'easeInOut' }}
                                    className="relative z-[1] order-1 lg:order-2 h-[50vh] lg:h-full lg:[mask-image:linear-gradient(to_right,transparent,black_25%)] lg:[-webkit-mask-image:linear-gradient(to_right,transparent,black_25%)]"
                                >
                                    <motion.div
                                        className="relative w-full h-full overflow-hidden bg-slate-100 dark:bg-white/5"
                                        animate={
                                            prefersReducedMotion
                                                ? { scale: 1 }
                                                : { scale: [1.015, 1.03, 1.015], x: [0, -3, 0], y: [0, 2, 0] }
                                        }
                                        transition={{ duration: 6.5, ease: 'easeInOut', repeat: Infinity }}
                                    >
                                        <motion.div
                                            initial={{ scale: prefersReducedMotion ? 1 : 1.06 }}
                                            animate={{ scale: 1 }}
                                            transition={{ duration: prefersReducedMotion ? 0.22 : 0.9, ease: 'easeOut' }}
                                            className="absolute inset-0"
                                        >
                                            {slide.video ? (
                                                <video
                                                    src={Array.isArray(slide.video) ? slide.video[0] : slide.video}
                                                    autoPlay
                                                    muted
                                                    playsInline
                                                    loop={!Array.isArray(slide.video)}
                                                    className="absolute inset-0 w-full h-full object-cover"
                                                    ref={(el) => {
                                                        if (!el) return;
                                                        el.playbackRate = slide.playbackRate ?? 0.7;
                                                        if (Array.isArray(slide.video)) {
                                                            const videos = slide.video;
                                                            let idx = 0;
                                                            el.onended = () => {
                                                                idx = (idx + 1) % videos.length;
                                                                el.src = videos[idx];
                                                                el.playbackRate = slide.playbackRate ?? 0.7;
                                                                el.play();
                                                            };
                                                        }
                                                    }}
                                                />
                                            ) : (
                                                <Image
                                                    src={slide.image}
                                                    alt={slide.name}
                                                    fill
                                                    className="object-cover"
                                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                                    priority
                                                />
                                            )}
                                        </motion.div>

                                        <motion.div
                                            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: prefersReducedMotion ? 0.18 : 0.42, delay: prefersReducedMotion ? 0 : 0.2 }}
                                            className="absolute bottom-6 left-6 right-6 flex items-end z-[3]"
                                        >
                                            <div className="w-[45%] max-w-[200px]">
                                                <Image
                                                    src={slide.logo}
                                                    alt={slide.name}
                                                    width={200}
                                                    height={50}
                                                    className="w-full h-auto drop-shadow-[0_2px_12px_rgba(0,0,0,0.3)]"
                                                />
                                            </div>
                                        </motion.div>

                                        {/* Edge fades */}
                                        <div className="absolute inset-0 pointer-events-none z-[4]">
                                                                                        <div className="absolute top-0 left-0 right-0 h-[25%] bg-gradient-to-b from-slate-50 dark:from-deep-space to-transparent" />
                                            <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-slate-50 dark:from-deep-space to-transparent" />
                                        </div>

                                        <div
                                            className="absolute bottom-0 left-0 right-0 h-1/4 z-[5] pointer-events-none"
                                            style={{ background: `linear-gradient(to top, ${slide.color}18, transparent)` }}
                                        />
                                    </motion.div>
                                </motion.div>
                            </div>
                        </motion.div>
                </AnimatePresence>
            </div>

            {/* ──── Navigation — sağ alt ──── */}
            <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-[60] flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                    {slides.map((s, i) => (
                        <motion.button
                            key={s.id}
                            onClick={() => goTo(i)}
                            aria-label={`${s.name} ürününe git`}
                            whileHover={prefersReducedMotion ? undefined : { scale: 1.08 }}
                            whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
                            className="relative h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:focus-visible:ring-offset-deep-space"
                            style={{
                                width: i === current ? 24 : 8,
                                backgroundColor: i === current ? slide.color : undefined,
                            }}
                        >
                            {i !== current && (
                                <span className="block w-2 h-2 rounded-full bg-slate-300 dark:bg-white/20" />
                            )}
                            {i === current && (
                                <motion.span
                                    className="absolute inset-0 rounded-full origin-left"
                                    style={{ backgroundColor: `${slide.color}60` }}
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: (slide.duration ?? AUTOPLAY_INTERVAL) / 1000, ease: [0.33, 1, 0.68, 1] }}
                                    key={`progress-${current}`}
                                />
                            )}
                        </motion.button>
                    ))}
                </div>

                <span className="text-xs text-slate-400 dark:text-slate-500 tabular-nums mx-2">
                    {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                </span>

                <motion.button
                    onClick={prev}
                    whileHover={prefersReducedMotion ? undefined : { y: -1, scale: 1.03 }}
                    whileTap={prefersReducedMotion ? undefined : { scale: 0.96 }}
                    className="w-9 h-9 rounded-full border border-slate-300 dark:border-white/15 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:border-burgundy hover:text-burgundy transition-colors bg-white/80 dark:bg-deep-space/80 backdrop-blur-sm"
                    aria-label="Önceki ürün"
                >
                    <ChevronLeft className="w-4 h-4" />
                </motion.button>
                <motion.button
                    onClick={next}
                    whileHover={prefersReducedMotion ? undefined : { y: -1, scale: 1.03 }}
                    whileTap={prefersReducedMotion ? undefined : { scale: 0.96 }}
                    className="w-9 h-9 rounded-full border border-slate-300 dark:border-white/15 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:border-burgundy hover:text-burgundy transition-colors bg-white/80 dark:bg-deep-space/80 backdrop-blur-sm"
                    aria-label="Sonraki ürün"
                >
                    <ChevronRight className="w-4 h-4" />
                </motion.button>
            </div>
        </section>
    );
}
