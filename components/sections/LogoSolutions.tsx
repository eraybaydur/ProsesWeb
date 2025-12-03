'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import { ArrowRight, Cpu, Zap, Database, Shield, BarChart3, Workflow } from 'lucide-react';
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
        depth: 0 // En önde
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
        depth: 1
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
        depth: 2
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
        depth: 0
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
        depth: 1
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
        depth: 2
    }
];

// Tech Background with parallax support
interface TechBackgroundProps {
    scrollProgress: number;
}

// Tech Background - Circuit nodes representing ERP modules
function TechCircuitBackground({ scrollProgress }: TechBackgroundProps) {
    const nodes = [
        { x: 10, y: 20 }, { x: 25, y: 15 }, { x: 40, y: 25 }, { x: 55, y: 10 },
        { x: 70, y: 30 }, { x: 85, y: 20 }, { x: 15, y: 50 }, { x: 30, y: 45 },
        { x: 45, y: 55 }, { x: 60, y: 40 }, { x: 75, y: 60 }, { x: 90, y: 45 },
        { x: 20, y: 75 }, { x: 35, y: 80 }, { x: 50, y: 70 }, { x: 65, y: 85 },
        { x: 80, y: 75 }, { x: 95, y: 80 }, { x: 5, y: 35 }, { x: 95, y: 55 }
    ];

    const connections = [
        [0, 1], [1, 2], [2, 3], [3, 4], [4, 5],
        [6, 7], [7, 8], [8, 9], [9, 10], [10, 11],
        [12, 13], [13, 14], [14, 15], [15, 16], [16, 17],
        [0, 6], [1, 7], [2, 8], [3, 9], [4, 10], [5, 11],
        [6, 12], [7, 13], [8, 14], [9, 15], [10, 16], [11, 17],
        [18, 0], [18, 6], [19, 5], [19, 11]
    ];

    const offsetX = scrollProgress * -15;

    return (
        <motion.div
            className="absolute inset-0 overflow-hidden pointer-events-none opacity-40 dark:opacity-35"
            style={{ x: `${offsetX}%` }}
        >
            <svg className="w-[120%] h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
                <defs>
                    <linearGradient id="dataFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="40%" stopColor="rgba(16, 185, 129, 0.8)">
                            <animate attributeName="offset" values="0;1;0" dur="3s" repeatCount="indefinite" />
                        </stop>
                        <stop offset="60%" stopColor="rgba(52, 211, 153, 0.8)">
                            <animate attributeName="offset" values="0.2;1.2;0.2" dur="3s" repeatCount="indefinite" />
                        </stop>
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="0.3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {connections.map(([from, to], i) => (
                    <g key={`conn-${i}`}>
                        <line
                            x1={nodes[from].x}
                            y1={nodes[from].y}
                            x2={nodes[to].x}
                            y2={nodes[to].y}
                            stroke="rgba(16, 185, 129, 0.15)"
                            strokeWidth="0.12"
                        />
                        <line
                            x1={nodes[from].x}
                            y1={nodes[from].y}
                            x2={nodes[to].x}
                            y2={nodes[to].y}
                            stroke="url(#dataFlow)"
                            strokeWidth="0.2"
                            filter="url(#glow)"
                            opacity="0.5"
                        />
                    </g>
                ))}

                {nodes.map((node, i) => (
                    <g key={`node-${i}`}>
                        <circle
                            cx={node.x}
                            cy={node.y}
                            r="0.8"
                            fill="none"
                            stroke="rgba(16, 185, 129, 0.25)"
                            strokeWidth="0.1"
                        >
                            <animate
                                attributeName="r"
                                values="0.6;1;0.6"
                                dur={`${2.5 + i * 0.2}s`}
                                repeatCount="indefinite"
                            />
                        </circle>
                        <circle
                            cx={node.x}
                            cy={node.y}
                            r="0.35"
                            fill="rgba(16, 185, 129, 0.5)"
                            filter="url(#glow)"
                        >
                            <animate
                                attributeName="opacity"
                                values="0.3;0.8;0.3"
                                dur={`${1.5 + i * 0.15}s`}
                                repeatCount="indefinite"
                            />
                        </circle>
                    </g>
                ))}
            </svg>
        </motion.div>
    );
}

// Hexagon Grid Background
function HexagonGrid({ scrollProgress }: TechBackgroundProps) {
    const offsetX = scrollProgress * -8;

    return (
        <motion.div
            className="absolute inset-0 overflow-hidden pointer-events-none opacity-25 dark:opacity-20"
            style={{ x: `${offsetX}%` }}
        >
            <svg className="w-[120%] h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
                <defs>
                    <pattern id="hexagons" width="8" height="14" patternUnits="userSpaceOnUse" patternTransform="scale(1.5)">
                        <path
                            d="M4 0 L8 2 L8 6 L4 8 L0 6 L0 2 Z M4 8 L8 10 L8 14 L4 16 L0 14 L0 10 Z M8 2 L12 4 L12 8 L8 10 L4 8 L4 4 Z"
                            fill="none"
                            stroke="rgba(16, 185, 129, 0.2)"
                            strokeWidth="0.25"
                        />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#hexagons)" />
            </svg>
        </motion.div>
    );
}

// Data Stream Animation - vertical data flow
function DataStream({ scrollProgress }: TechBackgroundProps) {
    const streams = [
        { x: 12, duration: 8, delay: 0 },
        { x: 28, duration: 10, delay: 2 },
        { x: 45, duration: 7, delay: 1 },
        { x: 62, duration: 9, delay: 3 },
        { x: 78, duration: 11, delay: 0.5 },
        { x: 92, duration: 8, delay: 2.5 },
    ];

    const offsetX = scrollProgress * -20;

    return (
        <motion.div
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{ x: `${offsetX}%` }}
        >
            {streams.map((stream, i) => (
                <motion.div
                    key={i}
                    className="absolute w-[2px]"
                    style={{ left: `${stream.x}%`, height: '30%' }}
                    initial={{ top: '-30%', opacity: 0 }}
                    animate={{
                        top: ['130%', '-30%'],
                        opacity: [0, 0.5, 0.5, 0]
                    }}
                    transition={{
                        duration: stream.duration,
                        delay: stream.delay,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    <div className="w-full h-full bg-gradient-to-b from-transparent via-burgundy/60 to-crimson/40 rounded-full" />
                </motion.div>
            ))}
        </motion.div>
    );
}

// ERP Module Icons floating
function FloatingERPIcons({ scrollProgress }: TechBackgroundProps) {
    // ERP-themed icons using SVG paths
    const modules = [
        { icon: 'chart', x: 8, y: 25, size: 32, duration: 20, speed: 0.8 },
        { icon: 'database', x: 85, y: 35, size: 28, duration: 25, speed: 1.2 },
        { icon: 'gear', x: 42, y: 78, size: 34, duration: 18, speed: 0.6 },
        { icon: 'graph', x: 70, y: 18, size: 30, duration: 22, speed: 1.0 },
        { icon: 'cube', x: 22, y: 62, size: 26, duration: 28, speed: 0.9 },
        { icon: 'flow', x: 92, y: 68, size: 30, duration: 24, speed: 0.7 },
    ];

    const iconPaths: Record<string, string> = {
        chart: 'M3 3v18h18M9 17V9m4 8V5m4 12v-5',
        database: 'M12 2C6.5 2 2 4 2 6.5V17.5C2 20 6.5 22 12 22s10-2 10-4.5V6.5C22 4 17.5 2 12 2zm0 4c5.5 0 8-1.5 8-2.5S17.5 2 12 2 4 3.5 4 4.5 6.5 6 12 6z',
        gear: 'M12 15a3 3 0 100-6 3 3 0 000 6z M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z',
        graph: 'M18 20V10M12 20V4M6 20v-6',
        cube: 'M21 16.5V7.5L12 2L3 7.5v9l9 5.5 9-5.5zM12 12L3 7.5M12 12v10M12 12l9-4.5',
        flow: 'M5 3v4M3 5h4M6 17v4m-2-2h4M13 3l7 7-7 7',
    };

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {modules.map((mod, i) => {
                const offsetX = scrollProgress * -35 * mod.speed;
                return (
                    <motion.div
                        key={i}
                        className="absolute"
                        style={{
                            left: `${mod.x}%`,
                            top: `${mod.y}%`,
                            x: `${offsetX}%`,
                        }}
                        animate={{
                            y: [0, -25, 0],
                            rotate: [0, 5, -5, 0],
                            opacity: [0.15, 0.35, 0.15],
                        }}
                        transition={{
                            duration: mod.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <svg
                            width={mod.size}
                            height={mod.size}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-burgundy/30 dark:text-burgundy/40"
                        >
                            <path d={iconPaths[mod.icon]} />
                        </svg>
                    </motion.div>
                );
            })}
        </div>
    );
}

// Animated wave forms - representing data flow
function DataWaves({ scrollProgress }: TechBackgroundProps) {
    const offsetX = scrollProgress * -12;

    return (
        <motion.div
            className="absolute inset-0 overflow-hidden pointer-events-none opacity-30 dark:opacity-25"
            style={{ x: `${offsetX}%` }}
        >
            <svg className="absolute bottom-0 w-[150%] h-[40%]" viewBox="0 0 1440 320" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="rgba(16, 185, 129, 0.3)" />
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                    <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="rgba(52, 211, 153, 0.2)" />
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                </defs>

                {/* Wave 1 - slower */}
                <path fill="url(#waveGradient1)">
                    <animate
                        attributeName="d"
                        dur="8s"
                        repeatCount="indefinite"
                        values="
                            M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,165.3C672,171,768,213,864,218.7C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                            M0,192L48,186.7C96,181,192,171,288,181.3C384,192,480,224,576,218.7C672,213,768,171,864,165.3C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                            M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,165.3C672,171,768,213,864,218.7C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z
                        "
                    />
                </path>

                {/* Wave 2 - faster */}
                <path fill="url(#waveGradient2)">
                    <animate
                        attributeName="d"
                        dur="5s"
                        repeatCount="indefinite"
                        values="
                            M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,229.3C672,235,768,213,864,202.7C960,192,1056,192,1152,197.3C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                            M0,256L48,245.3C96,235,192,213,288,218.7C384,224,480,256,576,261.3C672,267,768,245,864,234.7C960,224,1056,224,1152,229.3C1248,235,1344,245,1392,250.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                            M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,229.3C672,235,768,213,864,202.7C960,192,1056,192,1152,197.3C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z
                        "
                    />
                </path>
            </svg>
        </motion.div>
    );
}

// Glowing Orbs with parallax
function GlowingOrbs({ scrollProgress }: TechBackgroundProps) {
    const orbs = [
        { x: 15, y: 25, size: 400, color: 'burgundy', delay: 0, speed: 0.5 },
        { x: 75, y: 20, size: 320, color: 'indigo', delay: 1, speed: 0.8 },
        { x: 45, y: 65, size: 280, color: 'emerald', delay: 2, speed: 0.6 },
        { x: 90, y: 55, size: 200, color: 'purple', delay: 1.5, speed: 0.7 },
    ];

    const colorMap: Record<string, string> = {
        burgundy: 'from-burgundy/15 via-burgundy/5',
        indigo: 'from-indigo-500/12 via-indigo-500/4',
        emerald: 'from-emerald-500/12 via-emerald-500/4',
        purple: 'from-purple-500/12 via-purple-500/4',
    };

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {orbs.map((orb, i) => {
                const offsetX = scrollProgress * -30 * orb.speed;
                return (
                    <motion.div
                        key={i}
                        className={`absolute rounded-full bg-gradient-radial ${colorMap[orb.color]} to-transparent blur-3xl`}
                        style={{
                            left: `${orb.x}%`,
                            top: `${orb.y}%`,
                            width: orb.size,
                            height: orb.size,
                            x: `${offsetX}%`,
                            transform: 'translate(-50%, -50%)',
                        }}
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.25, 0.45, 0.25],
                        }}
                        transition={{
                            duration: 5 + i * 1.5,
                            delay: orb.delay,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                );
            })}
        </div>
    );
}

// Combined Tech Background with parallax
function TechBackground({ scrollProgress }: TechBackgroundProps) {
    return (
        <>
            <HexagonGrid scrollProgress={scrollProgress} />
            <TechCircuitBackground scrollProgress={scrollProgress} />
            <DataWaves scrollProgress={scrollProgress} />
            <DataStream scrollProgress={scrollProgress} />
            <FloatingERPIcons scrollProgress={scrollProgress} />
            <GlowingOrbs scrollProgress={scrollProgress} />
        </>
    );
}

// Card with mouse parallax and inner parallax
interface ParallaxCardProps {
    solution: typeof solutions[0];
    index: number;
    scrollProgress: number;
    totalCards: number;
    onNavigate: (id: string) => void;
    mouseX: number;
    mouseY: number;
}

function ParallaxCard({ solution, index, scrollProgress, totalCards, onNavigate, mouseX, mouseY }: ParallaxCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [cardBounds, setCardBounds] = useState({ x: 0, y: 0, width: 0, height: 0 });
    const Icon = solution.icon;

    // Calculate card visibility for scale and opacity effects
    const cardPosition = index / totalCards;
    const distanceFromCenter = Math.abs(scrollProgress - cardPosition);
    const isInFocus = distanceFromCenter < 0.2;
    const scaleAmount = 1 - distanceFromCenter * 0.1;
    const opacityAmount = 1 - distanceFromCenter * 0.3;

    // Mouse parallax for card rotation
    useEffect(() => {
        if (cardRef.current) {
            const rect = cardRef.current.getBoundingClientRect();
            setCardBounds({ x: rect.x, y: rect.y, width: rect.width, height: rect.height });
        }
    }, [scrollProgress]);

    // Calculate rotation based on mouse position relative to card
    const centerX = cardBounds.x + cardBounds.width / 2;
    const centerY = cardBounds.y + cardBounds.height / 2;
    const rotateY = ((mouseX - centerX) / (typeof window !== 'undefined' ? window.innerWidth : 1)) * 10;
    const rotateX = ((centerY - mouseY) / (typeof window !== 'undefined' ? window.innerHeight : 1)) * 10;

    // Inner parallax offsets
    const logoOffsetX = ((mouseX - centerX) / (typeof window !== 'undefined' ? window.innerWidth : 1)) * 20;
    const logoOffsetY = ((mouseY - centerY) / (typeof window !== 'undefined' ? window.innerHeight : 1)) * 20;
    const contentOffsetX = ((mouseX - centerX) / (typeof window !== 'undefined' ? window.innerWidth : 1)) * 10;
    const contentOffsetY = ((mouseY - centerY) / (typeof window !== 'undefined' ? window.innerHeight : 1)) * 10;
    const bgOffsetX = ((mouseX - centerX) / (typeof window !== 'undefined' ? window.innerWidth : 1)) * 5;
    const bgOffsetY = ((mouseY - centerY) / (typeof window !== 'undefined' ? window.innerHeight : 1)) * 5;

    return (
        <motion.div
            ref={cardRef}
            onClick={() => onNavigate(solution.id)}
            className="group relative flex-shrink-0 w-[340px] md:w-[420px] cursor-pointer"
            style={{
                scale: scaleAmount,
                opacity: opacityAmount,
                transformStyle: 'preserve-3d',
                perspective: '1000px',
            }}
            whileHover={{ scale: scaleAmount * 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            {/* Card glow */}
            <motion.div
                className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                style={{
                    background: `linear-gradient(135deg, ${solution.color}40, transparent)`,
                    transform: `translate(${bgOffsetX * 0.5}px, ${bgOffsetY * 0.5}px)`,
                }}
            />

            {/* Card with 3D rotation */}
            <motion.div
                className="relative h-[480px] md:h-[540px] rounded-3xl overflow-hidden
                           bg-white/80 dark:bg-white/5
                           backdrop-blur-xl
                           border border-slate-200 dark:border-white/10
                           shadow-xl shadow-slate-200/50 dark:shadow-black/20
                           group-hover:border-slate-300 dark:group-hover:border-white/20
                           transition-colors duration-500"
                style={{
                    transform: isInFocus
                        ? `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`
                        : 'rotateY(0deg) rotateX(0deg)',
                    transformStyle: 'preserve-3d',
                }}
            >
                {/* Top gradient bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${solution.gradient}`} />

                {/* Background pattern with parallax */}
                <motion.div
                    className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
                    style={{
                        backgroundImage: `radial-gradient(${solution.color} 1px, transparent 1px)`,
                        backgroundSize: '20px 20px',
                        transform: `translate(${bgOffsetX}px, ${bgOffsetY}px)`,
                    }}
                />

                {/* Animated gradient background */}
                <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                        background: `radial-gradient(circle at ${50 + rotateY * 3}% ${50 - rotateX * 3}%, ${solution.color}15, transparent 50%)`,
                    }}
                />

                {/* Content with inner parallax */}
                <div className="relative h-full flex flex-col p-6 md:p-8" style={{ transformStyle: 'preserve-3d' }}>
                    {/* Header - Logo has most parallax */}
                    <div className="flex items-start justify-between mb-8">
                        <motion.div
                            className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center bg-gradient-to-br shadow-lg"
                            style={{
                                background: `linear-gradient(135deg, ${solution.color}20, ${solution.color}05)`,
                                boxShadow: `0 8px 32px ${solution.color}20`,
                                transform: `translate(${logoOffsetX}px, ${logoOffsetY}px) translateZ(40px)`,
                            }}
                        >
                            <div className="relative w-10 h-10 md:w-12 md:h-12">
                                <Image
                                    src={solution.logo}
                                    alt={solution.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </motion.div>
                        <motion.div
                            className="w-10 h-10 rounded-xl flex items-center justify-center bg-slate-100 dark:bg-white/5"
                            style={{
                                transform: `translate(${-logoOffsetX * 0.5}px, ${logoOffsetY * 0.5}px) translateZ(20px)`,
                            }}
                        >
                            <Icon className="w-5 h-5" style={{ color: solution.color }} />
                        </motion.div>
                    </div>

                    {/* Title & Description - Medium parallax */}
                    <motion.div
                        style={{
                            transform: `translate(${contentOffsetX}px, ${contentOffsetY}px) translateZ(20px)`,
                        }}
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">
                            {solution.name}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-8">
                            {solution.description}
                        </p>
                    </motion.div>

                    {/* Features - Less parallax */}
                    <motion.div
                        className="space-y-3 mt-auto mb-6"
                        style={{
                            transform: `translate(${contentOffsetX * 0.5}px, ${contentOffsetY * 0.5}px) translateZ(10px)`,
                        }}
                    >
                        {solution.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div
                                    className="w-1.5 h-1.5 rounded-full"
                                    style={{ backgroundColor: solution.color }}
                                />
                                <span className="text-sm text-slate-500 dark:text-slate-400">
                                    {feature}
                                </span>
                            </div>
                        ))}
                    </motion.div>

                    {/* CTA */}
                    <div className="flex items-center justify-between pt-6 border-t border-slate-200 dark:border-white/10">
                        <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                            0{index + 1}
                        </span>
                        <div
                            className="flex items-center gap-2 font-medium group-hover:gap-3 transition-all duration-300"
                            style={{ color: solution.color }}
                        >
                            <span>Detaylar</span>
                            <ArrowRight className="w-4 h-4" />
                        </div>
                    </div>
                </div>

                {/* Large number watermark */}
                <motion.div
                    className="absolute -bottom-8 -right-4 text-[12rem] font-black leading-none
                               text-slate-100 dark:text-white/[0.02] pointer-events-none select-none"
                    style={{
                        transform: `translate(${-bgOffsetX * 2}px, ${-bgOffsetY * 2}px)`,
                    }}
                >
                    {index + 1}
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default function LogoSolutions() {
    const { navigateToSection } = usePageTransition();
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [scrollProgressValue, setScrollProgressValue] = useState(0);

    // Mouse tracking
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Track scroll progress value
    useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (v) => setScrollProgressValue(v));
        return () => unsubscribe();
    }, [scrollYProgress]);

    // Smooth spring for main horizontal movement
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Mouse motion values for background parallax
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        mouseX.set(mousePosition.x);
        mouseY.set(mousePosition.y);
    }, [mousePosition, mouseX, mouseY]);

    // Smooth mouse values
    const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    // Background mouse parallax
    const bgParallaxX = useTransform(smoothMouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 1920], [-20, 20]);
    const bgParallaxY = useTransform(smoothMouseY, [0, typeof window !== 'undefined' ? window.innerHeight : 1080], [-20, 20]);

    // Horizontal movement for cards
    const cardsX = useTransform(smoothProgress, [0, 1], ["0%", "-65%"]);

    // Progress bar animation
    const lineProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const headerY = useTransform(smoothProgress, [0, 0.3], [0, -100]);
    const headerOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);

    return (
        <section ref={containerRef} className="relative h-[400vh]">
            <div className="sticky top-0 h-screen overflow-hidden bg-slate-100 dark:bg-[#030303]">

                {/* === DEEP BACKGROUND LAYER === */}
                <motion.div
                    className="absolute inset-0 overflow-hidden"
                    style={{
                        x: bgParallaxX,
                        y: bgParallaxY,
                    }}
                >
                    {/* Base gradient */}
                    <div className="absolute inset-[-50px] bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200 dark:from-[#030303] dark:via-[#0a0a0a] dark:to-[#050510]" />

                    {/* Noise texture */}
                    <div className="absolute inset-[-50px] opacity-[0.015] dark:opacity-[0.03]"
                        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }}
                    />
                </motion.div>

                {/* === TECH BACKGROUND ANIMATION === */}
                <TechBackground scrollProgress={scrollProgressValue} />

                {/* === HEADER === */}
                <motion.div
                    style={{ y: headerY, opacity: headerOpacity }}
                    className="absolute top-8 left-6 md:left-12 z-30"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <motion.div
                            className="w-2 h-2 rounded-full bg-burgundy"
                            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                        <span className="text-sm font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                            Çözümler
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white tracking-tight">
                        Logo ERP
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-burgundy to-crimson">
                            Ekosistemi
                        </span>
                    </h2>
                </motion.div>

                {/* === CARDS CONTAINER === */}
                <div className="absolute inset-0 flex items-center" style={{ perspective: '1500px' }}>
                    <motion.div
                        style={{ x: cardsX }}
                        className="flex gap-6 md:gap-10 pl-6 md:pl-12 lg:pl-20 pr-[50vw]"
                    >
                        {solutions.map((solution, index) => (
                            <ParallaxCard
                                key={solution.id}
                                solution={solution}
                                index={index}
                                scrollProgress={scrollProgressValue}
                                totalCards={solutions.length}
                                onNavigate={navigateToSection}
                                mouseX={mousePosition.x}
                                mouseY={mousePosition.y}
                            />
                        ))}
                    </motion.div>
                </div>

                {/* === HORIZONTAL TIMELINE === */}
                <div className="absolute bottom-8 left-6 md:left-12 right-6 md:right-12 z-20">
                    <div className="relative flex items-center justify-between">
                        {/* Timeline base line */}
                        <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-slate-200 dark:bg-white/10 -translate-y-1/2" />

                        {/* Animated progress line */}
                        <motion.div
                            className="absolute left-0 top-1/2 h-[2px] bg-gradient-to-r from-burgundy to-crimson -translate-y-1/2 origin-left"
                            style={{
                                scaleX: lineProgress,
                                width: '100%'
                            }}
                        />

                        {/* Timeline nodes */}
                        {solutions.map((solution, index) => {
                            const nodePosition = index / (solutions.length - 1);
                            const isActive = scrollProgressValue >= nodePosition - 0.08;
                            const isCurrent = Math.abs(scrollProgressValue - nodePosition) < 0.1;

                            return (
                                <motion.div
                                    key={solution.id}
                                    className="relative z-10 flex flex-col items-center"
                                    initial={false}
                                >
                                    {/* Node circle */}
                                    <motion.div
                                        className={`relative w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                                            isActive
                                                ? 'border-burgundy bg-burgundy'
                                                : 'border-slate-300 dark:border-white/20 bg-slate-100 dark:bg-[#0a0a0a]'
                                        }`}
                                        animate={{
                                            scale: isCurrent ? 1.3 : 1,
                                        }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    >
                                        {/* Pulse effect for current node */}
                                        {isCurrent && (
                                            <motion.div
                                                className="absolute inset-0 rounded-full bg-burgundy"
                                                animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                            />
                                        )}

                                        {/* Inner dot for active nodes */}
                                        {isActive && (
                                            <motion.div
                                                className="absolute inset-1 rounded-full bg-white"
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ type: "spring", stiffness: 500 }}
                                            />
                                        )}
                                    </motion.div>

                                    {/* Solution name label */}
                                    <motion.span
                                        className={`absolute -bottom-6 text-[10px] font-medium whitespace-nowrap transition-all duration-300 ${
                                            isCurrent
                                                ? 'text-burgundy scale-110'
                                                : isActive
                                                    ? 'text-slate-600 dark:text-slate-300'
                                                    : 'text-slate-400 dark:text-slate-500'
                                        }`}
                                    >
                                        {solution.name.replace('Logo ', '')}
                                    </motion.span>

                                    {/* Connection data flow animation */}
                                    {index < solutions.length - 1 && isActive && (
                                        <motion.div
                                            className="absolute left-full top-1/2 -translate-y-1/2 w-2 h-2"
                                            initial={{ x: 0, opacity: 0 }}
                                            animate={{
                                                x: [0, 50, 100],
                                                opacity: [0, 1, 0]
                                            }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                                ease: "linear"
                                            }}
                                        >
                                            <div
                                                className="w-2 h-2 rounded-full"
                                                style={{ backgroundColor: solution.color }}
                                            />
                                        </motion.div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* === SCROLL INDICATOR === */}
                <motion.div
                    style={{ opacity: useTransform(smoothProgress, [0, 0.1], [1, 0]) }}
                    className="absolute bottom-8 right-6 md:right-12 flex items-center gap-2 text-slate-400"
                >
                    <span className="text-xs font-mono uppercase tracking-wider">Kaydır</span>
                    <motion.div
                        animate={{ x: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <ArrowRight className="w-4 h-4" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
