'use client';

import { useRef, useState, useEffect } from 'react';
import MagneticButton from '@/components/ui/MagneticButton';
import FloatingProductCards from '@/components/ui/FloatingProductCards';
import GlassCard from '@/components/ui/GlassCard';
import { ArrowRight, Phone, ChevronDown } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';

// Morphing text words
const morphingWords = ['Dijitalleştirin', 'Otomatikleştirin', 'Dönüştürün', 'Hızlandırın'];

// 3D Floating Product Icons Component
function Floating3DProducts() {
    const products = [
        { name: 'Tiger', icon: '🐯', color: '#f97316', delay: 0 },
        { name: 'Go3', icon: '🚀', color: '#6366f1', delay: 0.5 },
        { name: 'CRM', icon: '👥', color: '#ec4899', delay: 1 },
        { name: 'Flow', icon: '⚡', color: '#10b981', delay: 1.5 },
    ];

    return (
        <div className="relative w-80 h-80">
            {products.map((product, index) => {
                const angle = (index / products.length) * Math.PI * 2;
                const radius = 100;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                    <motion.div
                        key={product.name}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            x: x,
                            y: y,
                            rotateY: [0, 360],
                        }}
                        transition={{
                            opacity: { duration: 0.5, delay: product.delay },
                            scale: { duration: 0.5, delay: product.delay },
                            x: { duration: 0.5, delay: product.delay },
                            y: { duration: 0.5, delay: product.delay },
                            rotateY: { duration: 8, repeat: Infinity, ease: "linear", delay: product.delay },
                        }}
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        <motion.div
                            className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl shadow-xl backdrop-blur-sm"
                            style={{
                                background: `linear-gradient(135deg, ${product.color}30, ${product.color}10)`,
                                border: `1px solid ${product.color}40`,
                                boxShadow: `0 10px 40px ${product.color}30`,
                            }}
                            animate={{
                                y: [0, -10, 0],
                                rotateX: [0, 10, 0],
                            }}
                            transition={{
                                duration: 3 + index * 0.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            whileHover={{ scale: 1.2 }}
                        >
                            {product.icon}
                        </motion.div>
                        <motion.span
                            className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-medium text-slate-600 dark:text-slate-400 whitespace-nowrap"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: product.delay + 0.3 }}
                        >
                            {product.name}
                        </motion.span>
                    </motion.div>
                );
            })}

            {/* Center Logo */}
            <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-burgundy to-crimson flex items-center justify-center shadow-2xl"
                animate={{
                    scale: [1, 1.05, 1],
                    boxShadow: [
                        '0 0 30px rgba(16, 185, 129, 0.3)',
                        '0 0 50px rgba(16, 185, 129, 0.5)',
                        '0 0 30px rgba(16, 185, 129, 0.3)',
                    ],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <span className="text-white font-bold text-lg">LOGO</span>
            </motion.div>
        </div>
    );
}

// Lottie-style animated background
function AnimatedBackground({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
    const particles = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
    }));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Animated gradient mesh */}
            <motion.div
                className="absolute inset-0"
                style={{
                    background: `radial-gradient(circle at ${mouseX}% ${mouseY}%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)`,
                }}
                animate={{
                    opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Floating particles */}
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full bg-burgundy/30 dark:bg-burgundy/40"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: particle.size,
                        height: particle.size,
                    }}
                    animate={{
                        y: [0, -100, 0],
                        x: [0, Math.random() * 50 - 25, 0],
                        opacity: [0, 0.6, 0],
                        scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: particle.duration,
                        delay: particle.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Animated lines/connections */}
            <svg className="absolute inset-0 w-full h-full opacity-20 dark:opacity-30">
                <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
                        <stop offset="50%" stopColor="#10b981" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                    </linearGradient>
                </defs>
                {[1, 2, 3, 4, 5].map((i) => (
                    <motion.line
                        key={i}
                        x1={`${i * 20}%`}
                        y1="0%"
                        x2={`${i * 20 + 10}%`}
                        y2="100%"
                        stroke="url(#lineGradient)"
                        strokeWidth="1"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                            pathLength: [0, 1, 0],
                            opacity: [0, 0.5, 0],
                        }}
                        transition={{
                            duration: 4 + i,
                            delay: i * 0.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </svg>

            {/* Hexagon grid pattern */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
                <svg width="100%" height="100%">
                    <defs>
                        <pattern id="hexagons-hero" width="50" height="86.6" patternUnits="userSpaceOnUse">
                            <path
                                d="M25 0 L50 14.4 L50 43.3 L25 57.7 L0 43.3 L0 14.4 Z"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="0.5"
                                className="text-burgundy"
                            />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#hexagons-hero)" />
                </svg>
            </div>
        </div>
    );
}

// Morphing Text Component
function MorphingText() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % morphingWords.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <span className="relative inline-block min-w-[280px] md:min-w-[380px]">
            <AnimatePresence mode="wait">
                <motion.span
                    key={currentIndex}
                    className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-burgundy via-crimson to-accent-red"
                    initial={{ opacity: 0, y: 20, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    exit={{ opacity: 0, y: -20, rotateX: 90 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    {morphingWords[currentIndex]}
                </motion.span>
            </AnimatePresence>
            <motion.span
                className="absolute -bottom-2 left-0 right-0 h-[0.15em] bg-burgundy/30 -z-10 skew-x-12"
                layoutId="underline"
            />
        </span>
    );
}

// Scroll Indicator Component
function ScrollIndicator() {
    return (
        <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                Keşfet
            </span>
            <motion.div
                className="w-6 h-10 rounded-full border-2 border-slate-300 dark:border-slate-600 flex items-start justify-center p-1"
                whileHover={{ borderColor: '#10b981' }}
            >
                <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-burgundy"
                    animate={{ y: [0, 16, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
            </motion.div>
            <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
                <ChevronDown className="w-5 h-5 text-slate-400" />
            </motion.div>
        </motion.div>
    );
}

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

    // Mouse tracking for interactive gradient
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setMousePosition({
                    x: ((e.clientX - rect.left) / rect.width) * 100,
                    y: ((e.clientY - rect.top) / rect.height) * 100,
                });
            }
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Scroll-based parallax
    const { scrollY } = useScroll();
    const smoothScrollY = useSpring(scrollY, { stiffness: 100, damping: 30 });

    // Parallax transforms
    const backgroundY = useTransform(smoothScrollY, [0, 500], [0, 150]);
    const contentY = useTransform(smoothScrollY, [0, 500], [0, -50]);
    const orbsY = useTransform(smoothScrollY, [0, 500], [0, 100]);
    const opacity = useTransform(smoothScrollY, [0, 400], [1, 0]);
    const scale = useTransform(smoothScrollY, [0, 500], [1, 0.95]);

    // Mouse-based gradient position
    const mouseX = useMotionValue(50);
    const mouseY = useMotionValue(50);
    const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    useEffect(() => {
        mouseX.set(mousePosition.x);
        mouseY.set(mousePosition.y);
    }, [mousePosition, mouseX, mouseY]);

    return (
        <section ref={containerRef} className="relative min-h-screen w-full flex items-center pt-20 overflow-hidden">
            {/* Parallax Background Layer */}
            <motion.div
                className="absolute inset-0 -z-10"
                style={{ y: backgroundY }}
            >
                {/* Base background */}
                <div className="absolute inset-0 bg-slate-50 dark:bg-deep-space" />

                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-burgundy/5 via-transparent to-crimson/5" />
            </motion.div>

            {/* Interactive Mouse Gradient Spotlight */}
            <motion.div
                className="absolute inset-0 -z-5 pointer-events-none"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(16, 185, 129, 0.12), transparent 40%)`,
                }}
            />

            {/* Animated Background (Lottie-style) */}
            <AnimatedBackground mouseX={mousePosition.x} mouseY={mousePosition.y} />

            {/* Parallax Orbs */}
            <motion.div className="absolute inset-0 -z-5 pointer-events-none" style={{ y: orbsY }}>
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 -left-32 w-96 h-96 bg-burgundy/20 dark:bg-burgundy/30 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-1/4 -right-32 w-96 h-96 bg-crimson/15 dark:bg-crimson/25 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-1/2 right-1/4 w-64 h-64 bg-accent-red/10 dark:bg-accent-red/20 rounded-full blur-[80px]"
                />
            </motion.div>

            {/* Gradient Overlay for content readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80 dark:to-deep-space/80 z-[1] pointer-events-none" />

            {/* Main Content with Parallax */}
            <motion.div
                className="container mx-auto px-6 relative z-10"
                style={{ y: contentY, opacity, scale }}
            >
                <div className="flex items-center justify-between gap-12">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mb-8 inline-block"
                        >
                            <GlassCard className="px-4 py-2 rounded-full !bg-white/40 dark:!bg-white/5 !border-burgundy/20">
                                <div className="flex items-center gap-3">
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-burgundy opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-burgundy"></span>
                                    </span>
                                    <span className="text-sm text-slate-800 dark:text-slate-200 tracking-tight font-medium whitespace-nowrap">
                                        Logo Yazılım Yetkili İş Ortağı
                                    </span>
                                </div>
                            </GlassCard>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-slate-900 dark:text-white"
                        >
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                İş Süreçlerinizi
                            </motion.span>{' '}
                            <span className="block mt-2">
                                <MorphingText />
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-12 max-w-2xl leading-relaxed font-light"
                        >
                            Bursa merkezli uzman kadromuzla, işletmenizin dijital dönüşüm yolculuğunda yanınızdayız.
                            <span className="block mt-4 text-slate-500 dark:text-slate-400 text-lg">
                                Tiger 3, Go 3 ve e-Dönüşüm süreçlerinde profesyonel entegrasyon ve danışmanlık hizmetleri.
                            </span>
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-5"
                        >
                            <MagneticButton>
                                <span className="flex items-center gap-2 px-2">
                                    Hizmetleri İncele <ArrowRight className="w-5 h-5" />
                                </span>
                            </MagneticButton>

                            <MagneticButton className="bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-burgundy/5 hover:border-burgundy/30 text-slate-900 dark:text-white backdrop-blur-sm">
                                <span className="flex items-center gap-2 px-2">
                                    <Phone className="w-4 h-4" /> İletişime Geçin
                                </span>
                            </MagneticButton>
                        </motion.div>
                    </div>

                    {/* 3D Floating Products - Desktop */}
                    <div className="hidden xl:flex items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            style={{ perspective: '1000px' }}
                        >
                            <Floating3DProducts />
                        </motion.div>
                    </div>

                    {/* Original Floating Cards - Tablet */}
                    <div className="hidden lg:block xl:hidden relative z-20">
                        <FloatingProductCards />
                    </div>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <ScrollIndicator />
        </section>
    );
}
