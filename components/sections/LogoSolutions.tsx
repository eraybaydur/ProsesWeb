'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Database, Zap, BarChart3, Workflow, Cpu, Shield } from 'lucide-react';
import { usePageTransition } from '@/components/ui/PageTransition';

const solutions = [
    {
        id: 'tiger',
        name: 'Logo Tiger 3',
        logo: '/tiger.png',
        description: 'Orta ve büyük ölçekli işletmeler için kapsamlı ERP çözümü.',
        color: '#f97316',
        gradient: 'from-orange-500 via-amber-500 to-yellow-500',
        icon: Database,
        features: ['Üretim Yönetimi', 'Finans', 'Satış & Dağıtım'],
    },
    {
        id: 'go3',
        name: 'Logo Go 3',
        logo: '/gowings.png',
        description: "KOBİ'ler için kullanımı kolay ve ekonomik ERP çözümü.",
        color: '#6366f1',
        gradient: 'from-blue-500 via-indigo-500 to-violet-500',
        icon: Zap,
        features: ['Stok Takibi', 'Fatura Yönetimi', 'Raporlama'],
    },
    {
        id: 'crm',
        name: 'Logo CRM',
        logo: '/logocrm.png',
        description: 'Müşteri ilişkilerinizi ve satış süreçlerinizi profesyonelce yönetin.',
        color: '#ec4899',
        gradient: 'from-purple-500 via-pink-500 to-rose-500',
        icon: BarChart3,
        features: ['Müşteri Takibi', 'Satış Pipeline', 'Analitik'],
    },
    {
        id: 'flow',
        name: 'Logo Flow',
        logo: '/logoflow.png',
        description: 'İş süreçlerinizi, onay mekanizmalarınızı ve akışlarınızı otomatikleştirin.',
        color: '#10b981',
        gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
        icon: Workflow,
        features: ['İş Akışları', 'Onay Süreçleri', 'Otomasyon'],
    },
    {
        id: 'mind',
        name: 'Logo Mind',
        logo: '/logomind.png',
        description: 'İş zekası çözümleri ile verilerinizi analiz edip anlamlandırın.',
        color: '#06b6d4',
        gradient: 'from-cyan-500 via-blue-500 to-indigo-500',
        icon: Cpu,
        features: ['Dashboard', 'Veri Analizi', 'Raporlama'],
    },
    {
        id: 'budget',
        name: 'Logo Budget',
        logo: '/logobudget.png',
        description: 'Bütçe planlama ve yönetim süreçlerinizi hatasız gerçekleştirin.',
        color: '#f43f5e',
        gradient: 'from-rose-500 via-red-500 to-orange-500',
        icon: Shield,
        features: ['Bütçe Planlama', 'Maliyet Takibi', 'Tahminleme'],
    }
];

// Simple Solution Card
function SolutionCard({
    solution,
    index,
    onNavigate
}: {
    solution: typeof solutions[0];
    index: number;
    onNavigate: (id: string) => void;
}) {
    const Icon = solution.icon;

    return (
        <motion.div
            onClick={() => onNavigate(solution.id)}
            className="group relative flex-shrink-0 w-[320px] md:w-[380px] cursor-pointer"
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
            {/* Card glow on hover */}
            <div
                className="absolute -inset-3 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                style={{ background: `${solution.color}20` }}
            />

            {/* Card */}
            <div className="relative h-[440px] md:h-[480px] rounded-2xl overflow-hidden
                           bg-white/90 dark:bg-white/[0.03]
                           backdrop-blur-sm
                           border border-slate-200/80 dark:border-white/[0.08]
                           shadow-lg shadow-slate-200/30 dark:shadow-none
                           group-hover:border-slate-300 dark:group-hover:border-white/15
                           transition-all duration-300">

                {/* Top gradient bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${solution.gradient}`} />

                {/* Content */}
                <div className="relative h-full flex flex-col p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                        <div
                            className="w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center"
                            style={{ background: `${solution.color}15` }}
                        >
                            <div className="relative w-8 h-8 md:w-10 md:h-10">
                                <Image
                                    src={solution.logo}
                                    alt={solution.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-slate-100 dark:bg-white/5">
                            <Icon className="w-4 h-4" style={{ color: solution.color }} />
                        </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                        {solution.name}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                        {solution.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mt-auto mb-5">
                        {solution.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <div
                                    className="w-1 h-1 rounded-full"
                                    style={{ backgroundColor: solution.color }}
                                />
                                <span className="text-xs text-slate-500 dark:text-slate-400">
                                    {feature}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-200/80 dark:border-white/[0.06]">
                        <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                            0{index + 1}
                        </span>
                        <div
                            className="flex items-center gap-1.5 text-sm font-medium group-hover:gap-2.5 transition-all duration-300"
                            style={{ color: solution.color }}
                        >
                            <span>Detaylar</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function LogoSolutions() {
    const { navigateToSection } = usePageTransition();
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Daha yumuşak, "luxury" hissi veren spring ayarları
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Horizontal movement for cards - daha az hareket mesafesi
    const cardsX = useTransform(smoothProgress, [0, 1], ["5%", "-60%"]);

    // Header animations
    const headerY = useTransform(smoothProgress, [0, 0.15], [0, -60]);
    const headerOpacity = useTransform(smoothProgress, [0, 0.12], [1, 0]);

    // Progress line
    const lineProgress = useTransform(smoothProgress, [0, 1], [0, 1]);

    // Scroll indicator opacity
    const scrollIndicatorOpacity = useTransform(smoothProgress, [0, 0.08], [1, 0]);

    // Parallax layers - farklı hızlarda hareket
    const layer1X = useTransform(smoothProgress, [0, 1], ['0%', '-20%']);
    const layer2X = useTransform(smoothProgress, [0, 1], ['0%', '-35%']);
    const layer3X = useTransform(smoothProgress, [0, 1], ['0%', '-50%']);
    const gridX = useTransform(smoothProgress, [0, 1], ['0%', '-10%']);

    // Orb positions (Restored)
    const orb1X = useTransform(smoothProgress, [0, 1], ['0%', '-40%']);
    const orb2X = useTransform(smoothProgress, [0, 1], ['0%', '-25%']);
    const orb3X = useTransform(smoothProgress, [0, 1], ['0%', '-55%']);

    return (
        <section ref={containerRef} className="relative h-[400vh]">
            <div className="sticky top-0 h-screen overflow-hidden bg-slate-50 dark:bg-deep-space">

                {/* Scan Lines Overlay */}
                <div
                    className="absolute inset-0 pointer-events-none z-[1] opacity-[0.015] dark:opacity-[0.03]"
                    style={{
                        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, currentColor 2px, currentColor 3px)',
                        backgroundSize: '100% 4px',
                    }}
                />

                {/* Isometric Grid - Layer 1 */}
                <motion.div
                    className="absolute inset-0 will-change-transform"
                    style={{ x: gridX }}
                >
                    <svg className="absolute inset-[-20%] w-[140%] h-[140%] opacity-[0.08] dark:opacity-[0.06]">
                        <defs>
                            <pattern id="isometric-grid" width="56" height="100" patternUnits="userSpaceOnUse">
                                <line x1="0" y1="100" x2="28" y2="50" stroke="currentColor" strokeWidth="0.5" className="text-burgundy" />
                                <line x1="28" y1="50" x2="56" y2="100" stroke="currentColor" strokeWidth="0.5" className="text-burgundy" />
                                <line x1="0" y1="0" x2="28" y2="50" stroke="currentColor" strokeWidth="0.5" className="text-burgundy" />
                                <line x1="28" y1="50" x2="56" y2="0" stroke="currentColor" strokeWidth="0.5" className="text-burgundy" />
                                <line x1="28" y1="0" x2="28" y2="100" stroke="currentColor" strokeWidth="0.3" className="text-slate-400 dark:text-slate-600" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#isometric-grid)" />
                    </svg>
                </motion.div>

                {/* Floating Isometric Cubes - Layer 2 */}
                <motion.div
                    className="absolute inset-0 will-change-transform pointer-events-none"
                    style={{ x: layer1X }}
                >
                    <svg className="absolute top-[15%] left-[8%] w-[100px] h-[116px] opacity-15 dark:opacity-25" viewBox="0 0 100 116">
                        <polygon points="50,0 100,29 100,87 50,116 0,87 0,29" fill="none" stroke="currentColor" strokeWidth="1" className="text-burgundy" />
                        <line x1="50" y1="0" x2="50" y2="58" stroke="currentColor" strokeWidth="0.5" className="text-burgundy" />
                        <line x1="0" y1="29" x2="50" y2="58" stroke="currentColor" strokeWidth="0.5" className="text-burgundy" />
                        <line x1="100" y1="29" x2="50" y2="58" stroke="currentColor" strokeWidth="0.5" className="text-burgundy" />
                    </svg>
                    <svg className="absolute bottom-[30%] left-[3%] w-[60px] h-[70px] opacity-10 dark:opacity-15" viewBox="0 0 100 116">
                        <polygon points="50,0 100,29 100,87 50,116 0,87 0,29" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-indigo-500" />
                    </svg>
                </motion.div>

                {/* More Isometric Elements - Layer 3 */}
                <motion.div
                    className="absolute inset-0 will-change-transform pointer-events-none"
                    style={{ x: layer2X }}
                >
                    <svg className="absolute top-[25%] right-[12%] w-[120px] h-[104px] opacity-8 dark:opacity-12" viewBox="0 0 100 87">
                        <polygon points="25,0 75,0 100,43.5 75,87 25,87 0,43.5" fill="none" stroke="currentColor" strokeWidth="1" className="text-emerald-500" />
                    </svg>
                    <svg className="absolute bottom-[25%] right-[20%] w-[50px] h-[83px] opacity-10 dark:opacity-15" viewBox="0 0 60 100">
                        <polygon points="30,0 60,50 30,100 0,50" fill="none" stroke="currentColor" strokeWidth="1" className="text-burgundy" />
                    </svg>
                    <div className="absolute top-[20%] right-[30%] w-1.5 h-1.5 rounded-full bg-burgundy/25" />
                    <div className="absolute top-[50%] right-[18%] w-2 h-2 rounded-full bg-emerald-500/15" />
                </motion.div>

                {/* Animated scan line (moving) */}
                <motion.div
                    className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-burgundy/30 to-transparent pointer-events-none z-[2]"
                    animate={{ top: ['0%', '100%'] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                />

                {/* Subtle glowing orbs */}
                <motion.div
                    className="absolute top-[10%] left-[15%] w-[350px] h-[350px] bg-burgundy/5 dark:bg-burgundy/8 rounded-full blur-[100px] will-change-transform"
                    style={{ x: orb1X }}
                />
                <motion.div
                    className="absolute bottom-[15%] right-[10%] w-[250px] h-[250px] bg-indigo-400/4 dark:bg-indigo-500/6 rounded-full blur-[80px] will-change-transform"
                    style={{ x: orb2X }}
                />

                {/* Header */}
                <motion.div
                    style={{ y: headerY, opacity: headerOpacity }}
                    className="absolute top-8 left-6 md:left-12 z-30"
                >
                    <div className="flex items-center gap-2 mb-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-burgundy" />
                        <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                            Çözümler
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white tracking-tight">
                        Logo ERP
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-burgundy to-crimson">
                            Ekosistemi
                        </span>
                    </h2>
                </motion.div>

                {/* Cards Container */}
                <div className="absolute inset-0 flex items-center">
                    <motion.div
                        style={{ x: cardsX }}
                        className="flex gap-5 md:gap-8 pl-6 md:pl-12 lg:pl-20 pr-[40vw] will-change-transform"
                    >
                        {solutions.map((solution, index) => (
                            <SolutionCard
                                key={solution.id}
                                solution={solution}
                                index={index}
                                onNavigate={navigateToSection}
                            />
                        ))}
                    </motion.div>
                </div>

                {/* Timeline */}
                <div className="absolute bottom-8 left-6 md:left-12 right-6 md:right-12 z-20">
                    <div className="relative h-8 flex items-center">
                        {/* Base line */}
                        <div className="absolute left-0 right-0 h-[1px] bg-slate-200 dark:bg-white/10" />

                        {/* Progress line */}
                        <motion.div
                            className="absolute left-0 h-[1px] bg-burgundy origin-left"
                            style={{ scaleX: lineProgress, width: '100%' }}
                        />

                        {/* Nodes */}
                        <div className="relative w-full flex justify-between">
                            {solutions.map((solution, index) => (
                                <motion.div
                                    key={solution.id}
                                    className="flex flex-col items-center"
                                >
                                    <motion.div
                                        className="w-2 h-2 rounded-full bg-slate-300 dark:bg-white/20"
                                        style={{
                                            backgroundColor: useTransform(
                                                smoothProgress,
                                                [index / solutions.length - 0.05, index / solutions.length + 0.05],
                                                ['rgb(203 213 225)', 'rgb(219 26 93)']
                                            )
                                        }}
                                    />
                                    <span className="absolute top-4 text-[9px] font-medium text-slate-400 dark:text-slate-500 whitespace-nowrap">
                                        {solution.name.replace('Logo ', '')}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    style={{ opacity: scrollIndicatorOpacity }}
                    className="absolute bottom-8 right-6 md:right-12 flex items-center gap-2 text-slate-400"
                >
                    <span className="text-[10px] font-mono uppercase tracking-wider">Kaydır</span>
                    <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ArrowRight className="w-3.5 h-3.5" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
