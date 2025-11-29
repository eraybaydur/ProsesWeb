'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { usePageTransition } from '@/components/ui/PageTransition';
import GlassCard from '@/components/ui/GlassCard';
import { useIsMobile } from '@/hooks/use-mobile';

const solutions = [
    {
        id: 'tiger',
        name: 'Logo Tiger 3',
        logo: '/tiger.png',
        description: 'Orta ve büyük ölçekli işletmeler için kapsamlı ERP çözümü.',
        color: 'from-orange-400 to-amber-600',
        features: ['Üretim Yönetimi', 'Finans', 'Satış & Dağıtım']
    },
    {
        id: 'go3',
        name: 'Logo Go 3',
        logo: '/gowings.png',
        description: "KOBİ'ler için kullanımı kolay ve ekonomik ERP çözümü.",
        color: 'from-blue-400 to-indigo-600',
        features: ['Stok Takibi', 'Fatura Yönetimi', 'Raporlama']
    },
    {
        id: 'crm',
        name: 'Logo CRM',
        logo: '/logocrm.png',
        description: 'Müşteri ilişkilerinizi ve satış süreçlerinizi profesyonelce yönetin.',
        color: 'from-purple-400 to-pink-600',
        features: ['Müşteri Takibi', 'Satış Pipeline', 'Analitik']
    },
    {
        id: 'flow',
        name: 'Logo Flow',
        logo: '/logoflow.png',
        description: 'İş süreçlerinizi, onay mekanizmalarınızı ve akışlarınızı otomatikleştirin.',
        color: 'from-emerald-400 to-teal-600',
        features: ['İş Akışları', 'Onay Süreçleri', 'Otomasyon']
    },
    {
        id: 'mind',
        name: 'Logo Mind',
        logo: '/logomind.png',
        description: 'İş zekası çözümleri ile verilerinizi analiz edip anlamlandırın.',
        color: 'from-cyan-400 to-blue-600',
        features: ['Dashboard', 'Veri Analizi', 'Raporlama']
    },
    {
        id: 'budget',
        name: 'Logo Budget',
        logo: '/logobudget.png',
        description: 'Bütçe planlama ve yönetim süreçlerinizi hatasız gerçekleştirin.',
        color: 'from-rose-400 to-red-600',
        features: ['Bütçe Planlama', 'Maliyet Takibi', 'Tahminleme']
    }
];

interface SpotlightCardProps {
    solution: typeof solutions[0];
    index: number;
    activeIndex: MotionValue<number>;
    totalCards: number;
    onNavigate: (id: string) => void;
}

// Spring config for smooth animations
const springConfig = { stiffness: 100, damping: 20, mass: 0.5 };

function SpotlightCard({ solution, index, activeIndex, totalCards, onNavigate }: SpotlightCardProps) {
    // X position - spread cards horizontally based on distance from active
    const xRaw = useTransform(activeIndex, (active) => {
        const diff = index - active;
        return diff * 350;
    });
    const x = useSpring(xRaw, springConfig);

    // Scale - active card is larger (smooth interpolation)
    const scaleRaw = useTransform(activeIndex, (active) => {
        const distance = Math.abs(index - active);
        // Smooth interpolation instead of step function
        if (distance < 1) return 1 - (distance * 0.15);
        return 0.85 - ((distance - 1) * 0.1);
    });
    const scale = useSpring(scaleRaw, springConfig);

    // Opacity - fade distant cards (smooth interpolation)
    const opacityRaw = useTransform(activeIndex, (active) => {
        const distance = Math.abs(index - active);
        // Smooth falloff
        return Math.max(0.1, 1 - (distance * 0.3));
    });
    const opacity = useSpring(opacityRaw, springConfig);

    // Z-index based on distance from active
    const zIndex = useTransform(activeIndex, (active) => {
        const distance = Math.abs(index - active);
        return Math.round(totalCards - distance);
    });

    // Blur for non-active cards (smooth)
    const blurRaw = useTransform(activeIndex, (active) => {
        const distance = Math.abs(index - active);
        return Math.min(4, distance * 2);
    });
    const blur = useSpring(blurRaw, springConfig);

    // Rotation for 3D effect (smooth)
    const rotateYRaw = useTransform(activeIndex, (active) => {
        const diff = index - active;
        // Smooth rotation based on position
        return diff * -12;
    });
    const rotateY = useSpring(rotateYRaw, springConfig);

    // Glow opacity - smooth transition based on distance
    const glowOpacityRaw = useTransform(activeIndex, (active) => {
        const distance = Math.abs(index - active);
        // Smooth falloff: 0.6 at center, fading to 0 at distance 1
        return Math.max(0, 0.6 - distance * 0.6);
    });
    const glowOpacity = useSpring(glowOpacityRaw, springConfig);

    // Glow scale - grows when active
    const glowScaleRaw = useTransform(activeIndex, (active) => {
        const distance = Math.abs(index - active);
        return Math.max(0.8, 1.1 - distance * 0.3);
    });
    const glowScale = useSpring(glowScaleRaw, springConfig);

    return (
        <motion.div
            style={{
                x,
                scale,
                opacity,
                zIndex,
                rotateY,
                filter: useTransform(blur, (b) => `blur(${b}px)`),
            }}
            className="absolute left-1/2 -translate-x-1/2 w-[420px] cursor-pointer"
            onClick={() => onNavigate(solution.id)}
        >
            {/* Dynamic Glow Effect - smooth transition */}
            <motion.div
                style={{
                    opacity: glowOpacity,
                    scale: glowScale,
                }}
                className={`absolute -inset-4 bg-gradient-to-br ${solution.color} rounded-[2.5rem] blur-2xl`}
            />

            <GlassCard className="relative h-full p-8 !bg-white/10 dark:!bg-black/30 backdrop-blur-xl border border-white/20 dark:border-white/10 overflow-hidden rounded-[2rem]">
                {/* Animated border gradient */}
                <div className={`absolute inset-0 rounded-[2rem] bg-gradient-to-br ${solution.color} opacity-10`} />

                <div className="flex flex-col h-full items-center text-center relative z-10">
                    {/* Logo Container */}
                    <div className="relative w-full h-48 mb-6 p-6 rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${solution.color} opacity-10`} />
                        <Image
                            src={solution.logo}
                            alt={solution.name}
                            fill
                            className="object-contain p-4 drop-shadow-xl"
                        />
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                        {solution.name}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 text-base">
                        {solution.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                        {solution.features.map((feature) => (
                            <span
                                key={feature}
                                className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${solution.color} text-white`}
                            >
                                {feature}
                            </span>
                        ))}
                    </div>

                    <button className={`w-full py-3 rounded-xl bg-gradient-to-r ${solution.color} transition-all duration-300 flex items-center justify-center gap-2 text-white font-bold shadow-lg hover:shadow-xl hover:scale-105`}>
                        Detaylı İncele
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </GlassCard>
        </motion.div>
    );
}

export default function LogoSolutions() {
    const { navigateToSection } = usePageTransition();
    const sectionRef = useRef<HTMLDivElement>(null);
    const isMobile = useIsMobile();
    const [currentIndex, setCurrentIndex] = useState(0);

    // Single scroll progress for the entire section
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    // Active card index based on scroll with "sticky" stops at each card
    // Each card gets a pause zone where it stays focused
    const totalCards = solutions.length;
    const pauseRatio = 0.08; // How much scroll % each card "pauses" (roughly 1 second worth)
    const transitionRatio = 0.07; // How much scroll % for transition between cards

    // Build input/output arrays for stepped animation
    // Pattern: [pause on card 0] [transition to 1] [pause on card 1] [transition to 2] ...
    const scrollInputs: number[] = [];
    const cardOutputs: number[] = [];

    let currentScroll = 0.05; // Start after 5% scroll

    for (let i = 0; i < totalCards; i++) {
        // Start of pause for card i
        scrollInputs.push(currentScroll);
        cardOutputs.push(i);

        // End of pause for card i
        currentScroll += pauseRatio;
        scrollInputs.push(currentScroll);
        cardOutputs.push(i);

        // Transition to next card (if not last)
        if (i < totalCards - 1) {
            currentScroll += transitionRatio;
        }
    }

    const activeIndex = useTransform(
        scrollYProgress,
        scrollInputs,
        cardOutputs
    );

    // Discrete active index for indicators
    const discreteActiveIndex = useTransform(activeIndex, (value) => Math.round(value));

    // Track current index for button states
    useEffect(() => {
        const unsubscribe = discreteActiveIndex.on('change', (value) => {
            setCurrentIndex(value);
        });
        return () => unsubscribe();
    }, [discreteActiveIndex]);

    // Navigate to specific card by scrolling
    const scrollToCard = useCallback((index: number) => {
        if (!sectionRef.current) return;

        const sectionTop = sectionRef.current.offsetTop;
        const sectionHeight = sectionRef.current.offsetHeight;
        const viewportHeight = window.innerHeight;
        const scrollableDistance = sectionHeight - viewportHeight;

        // Calculate target scroll position based on stepped animation
        // Each card starts at: 0.05 + (index * (pauseRatio + transitionRatio))
        const targetProgress = 0.05 + (index * (pauseRatio + transitionRatio)) + (pauseRatio / 2);
        const targetScroll = sectionTop + (scrollableDistance * targetProgress);

        window.scrollTo({
            top: targetScroll,
            behavior: 'smooth'
        });
    }, [pauseRatio, transitionRatio]);

    const goToPrevious = useCallback(() => {
        if (currentIndex > 0) {
            scrollToCard(currentIndex - 1);
        }
    }, [currentIndex, scrollToCard]);

    const goToNext = useCallback(() => {
        if (currentIndex < solutions.length - 1) {
            scrollToCard(currentIndex + 1);
        }
    }, [currentIndex, scrollToCard]);

    // Get current solution color for dynamic glow
    const currentSolution = solutions[currentIndex] || solutions[0];

    return (
        <section id="solutions" ref={sectionRef} className="relative bg-slate-50 dark:bg-deep-space py-20 md:py-0 md:h-[400vh] -mt-[100vh]">
            {/* Desktop Spotlight View */}
            <div className="hidden md:block sticky top-0 h-screen overflow-hidden">
                {/* Grid Background - Same as TechFlow */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

                {/* Gradient Overlays - Same as TechFlow */}
                <div className="absolute inset-0 bg-gradient-to-b from-burgundy/5 via-transparent to-crimson/5 pointer-events-none" />

                {/* Central Glow Orb - Changes color based on active card */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <motion.div
                        className={`w-[600px] h-[600px] rounded-full bg-gradient-to-br ${currentSolution.color} opacity-20 blur-[120px]`}
                        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="absolute w-[400px] h-[400px] rounded-full bg-burgundy/30 blur-[100px]"
                        animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.3, 0.2] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>

                {/* Floating Particles */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {Array.from({ length: 20 }).map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 rounded-full bg-burgundy/40"
                            style={{
                                left: `${10 + (i * 4.5) % 80}%`,
                                top: `${20 + (i * 7) % 60}%`,
                            }}
                            animate={{
                                y: [0, -30, 0],
                                opacity: [0.2, 0.5, 0.2],
                            }}
                            transition={{
                                duration: 3 + (i % 3),
                                repeat: Infinity,
                                delay: i * 0.2,
                                ease: "easeInOut",
                            }}
                        />
                    ))}
                </div>

                {/* Data Flow Lines - Continuation from TechFlow */}
                <motion.div
                    style={{ opacity: useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 0.3, 0.3, 0]) }}
                    className="absolute left-[15%] top-0 h-full w-px bg-gradient-to-b from-transparent via-burgundy/20 to-transparent"
                />
                <motion.div
                    style={{ opacity: useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 0.3, 0.3, 0]) }}
                    className="absolute right-[15%] top-0 h-full w-px bg-gradient-to-b from-transparent via-crimson/20 to-transparent"
                />

                <div className="container mx-auto px-6 h-full flex flex-col justify-center relative z-10">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-burgundy/5 border border-burgundy/10 text-burgundy dark:text-crimson mb-6"
                        >
                            <Sparkles className="w-4 h-4" />
                            <span className="text-sm font-semibold tracking-wide uppercase">Dijital Dönüşüm</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight"
                        >
                            Logo ERP <span className="text-transparent bg-clip-text bg-gradient-to-r from-burgundy via-crimson to-accent-red">Çözümlerimiz</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto"
                        >
                            İşletmenizin ihtiyaçlarına özel, verimliliği artıran ve büyümeyi hızlandıran entegre yazılım çözümleri.
                        </motion.p>
                    </div>

                    {/* Spotlight Cards Container */}
                    <div className="relative h-[500px] flex items-center justify-center" style={{ perspective: '1500px' }}>
                        {solutions.map((solution, index) => (
                            <SpotlightCard
                                key={solution.id}
                                solution={solution}
                                index={index}
                                activeIndex={activeIndex}
                                totalCards={solutions.length}
                                onNavigate={navigateToSection}
                            />
                        ))}

                        {/* Navigation Arrows */}
                        <button
                            onClick={goToPrevious}
                            disabled={currentIndex === 0}
                            className="absolute left-8 top-1/2 -translate-y-1/2 z-20"
                        >
                            <motion.div
                                whileHover={{ scale: currentIndex > 0 ? 1.1 : 1 }}
                                whileTap={{ scale: currentIndex > 0 ? 0.95 : 1 }}
                                className={`w-14 h-14 rounded-full bg-white/10 dark:bg-black/30 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 ${
                                    currentIndex > 0
                                        ? 'text-slate-700 dark:text-white cursor-pointer hover:bg-white/20 dark:hover:bg-white/10'
                                        : 'text-slate-400 dark:text-slate-600 cursor-not-allowed'
                                }`}
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </motion.div>
                        </button>
                        <button
                            onClick={goToNext}
                            disabled={currentIndex === solutions.length - 1}
                            className="absolute right-8 top-1/2 -translate-y-1/2 z-20"
                        >
                            <motion.div
                                whileHover={{ scale: currentIndex < solutions.length - 1 ? 1.1 : 1 }}
                                whileTap={{ scale: currentIndex < solutions.length - 1 ? 0.95 : 1 }}
                                className={`w-14 h-14 rounded-full bg-white/10 dark:bg-black/30 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 ${
                                    currentIndex < solutions.length - 1
                                        ? 'text-slate-700 dark:text-white cursor-pointer hover:bg-white/20 dark:hover:bg-white/10'
                                        : 'text-slate-400 dark:text-slate-600 cursor-not-allowed'
                                }`}
                            >
                                <ChevronRight className="w-6 h-6" />
                            </motion.div>
                        </button>
                    </div>

                    {/* Progress Indicators */}
                    <div className="flex justify-center gap-3 mt-8">
                        {solutions.map((solution, index) => (
                            <button
                                key={solution.id}
                                onClick={() => scrollToCard(index)}
                                className="relative p-1 group"
                            >
                                <motion.div
                                    animate={{
                                        scale: currentIndex === index ? 1.3 : 1,
                                    }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                    className="relative"
                                >
                                    <div
                                        className={`w-3 h-3 rounded-full bg-gradient-to-r ${solution.color} transition-opacity duration-300 ${
                                            currentIndex === index ? 'opacity-100' : 'opacity-30 group-hover:opacity-60'
                                        }`}
                                    />
                                </motion.div>
                            </button>
                        ))}
                    </div>

                    {/* Scroll hint */}
                    <motion.div
                        style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
                        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400"
                    >
                        <span className="text-sm">Kaydırarak keşfedin</span>
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <ChevronRight className="w-5 h-5 rotate-90" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Mobile View - Simple Grid */}
            <div className="md:hidden container mx-auto px-6">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-burgundy/5 border border-burgundy/10 text-burgundy dark:text-crimson mb-6">
                        <Sparkles className="w-4 h-4" />
                        <span className="text-sm font-semibold tracking-wide uppercase">Dijital Dönüşüm</span>
                    </div>

                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
                        Logo ERP <span className="text-transparent bg-clip-text bg-gradient-to-r from-burgundy via-crimson to-accent-red">Çözümlerimiz</span>
                    </h2>

                    <p className="text-slate-600 dark:text-slate-400 text-base">
                        İşletmenizin ihtiyaçlarına özel entegre yazılım çözümleri.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    {solutions.map((solution) => (
                        <motion.div
                            key={solution.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            onClick={() => navigateToSection(solution.id)}
                            className="cursor-pointer"
                        >
                            <GlassCard className="relative p-6 !bg-white/10 dark:!bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl">
                                <div className="flex items-center gap-4">
                                    <div className="relative w-16 h-16 rounded-xl bg-white/5 border border-white/10 overflow-hidden flex-shrink-0">
                                        <Image
                                            src={solution.logo}
                                            alt={solution.name}
                                            fill
                                            className="object-contain p-2"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                                            {solution.name}
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2">
                                            {solution.description}
                                        </p>
                                    </div>
                                    <ArrowRight className="w-5 h-5 text-slate-400" />
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
