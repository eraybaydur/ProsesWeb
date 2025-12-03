'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import FloatingProductCards from '@/components/ui/FloatingProductCards';
import GlassCard from '@/components/ui/GlassCard';
import TypingAnimation from '@/components/ui/TypingAnimation';

// Logo Tiger/Go3 & Web Service pseudo-code
const codeLines = [
    { text: 'const tiger = new LogoTiger3();', color: 'text-blue-400' },
    { text: 'await tiger.RestAPI.connect();', color: 'text-emerald-400' },
    { text: 'function syncB2BOrders(orders) {', color: 'text-purple-400' },
    { text: '  return orders.map(toLObjects);', color: 'text-slate-400' },
    { text: 'export class WebServiceHandler {', color: 'text-yellow-400' },
    { text: '  async postToTiger(data) {...}', color: 'text-slate-400' },
    { text: 'const stock = await api.getGo3Stock();', color: 'text-cyan-400' },
    { text: 'SELECT * FROM LG_001_ITEMS WHERE...', color: 'text-orange-400' },
    { text: 'interface IB2BUser { code: string }', color: 'text-pink-400' },
    { text: 'mutation updateDealer($id: ID!) {', color: 'text-rose-400' },
    { text: '  order.status = "4"; // Sipariş Alındı', color: 'text-emerald-400' },
    { text: 'import { LObjects } from "@logo";', color: 'text-blue-400' },
    { text: 'const dispatch = createIrsaliye();', color: 'text-violet-400' },
    { text: 'async function checkDealerRisk() {', color: 'text-amber-400' },
    { text: '  return await service.query(code);', color: 'text-slate-400' },
    { text: 'UPDATE LG_001_01_ORFICHE SET ...;', color: 'text-teal-400' },
];

// Mobile code lines - shorter versions
const mobileCodeLines = [
    { text: 'tiger.connect()', color: 'text-blue-400' },
    { text: 'sync(orders)', color: 'text-emerald-400' },
    { text: 'api.getStock()', color: 'text-cyan-400' },
    { text: 'SELECT * FROM...', color: 'text-orange-400' },
    { text: 'updateDealer()', color: 'text-rose-400' },
    { text: 'createOrder()', color: 'text-violet-400' },
];

// Typing animation words
const typingWords = ['Tam Entegre', 'Süper Hızlı', 'Güvenli', 'Ölçeklenebilir'];

// Advanced Particle System Component
function AdvancedParticleSystem({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
    const particles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        duration: Math.random() * 15 + 10,
        delay: Math.random() * 5,
        type: i % 3, // 0: circle, 1: square, 2: diamond
    }));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((particle) => {
                // Calculate distance from mouse for reaction effect
                const dx = particle.x - mouseX;
                const dy = particle.y - mouseY;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const maxDistance = 30;
                const influence = Math.max(0, 1 - distance / maxDistance);
                const offsetX = dx * influence * 0.5;
                const offsetY = dy * influence * 0.5;

                return (
                    <motion.div
                        key={particle.id}
                        className={`absolute ${
                            particle.type === 0 ? 'rounded-full' :
                            particle.type === 1 ? 'rounded-sm' : 'rotate-45'
                        } bg-burgundy/20 dark:bg-burgundy/30`}
                        style={{
                            left: `${particle.x}%`,
                            top: `${particle.y}%`,
                            width: particle.size,
                            height: particle.size,
                        }}
                        animate={{
                            y: [0, -50 - Math.random() * 50, 0],
                            x: [offsetX, offsetX + (Math.random() * 30 - 15), offsetX],
                            opacity: [0.1, 0.4 + influence * 0.3, 0.1],
                            scale: [0.8, 1.2 + influence * 0.5, 0.8],
                        }}
                        transition={{
                            duration: particle.duration,
                            delay: particle.delay,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                );
            })}

            {/* Connecting lines between nearby particles */}
            <svg className="absolute inset-0 w-full h-full opacity-10 dark:opacity-20">
                <defs>
                    <linearGradient id="particleLine" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
                        <stop offset="50%" stopColor="#10b981" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                    </linearGradient>
                </defs>
                {particles.slice(0, 15).map((p1, i) =>
                    particles.slice(i + 1, i + 4).map((p2, j) => (
                        <motion.line
                            key={`${i}-${j}`}
                            x1={`${p1.x}%`}
                            y1={`${p1.y}%`}
                            x2={`${p2.x}%`}
                            y2={`${p2.y}%`}
                            stroke="url(#particleLine)"
                            strokeWidth="0.5"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: [0, 1, 0] }}
                            transition={{
                                duration: 8 + i * 0.5,
                                delay: i * 0.3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    ))
                )}
            </svg>
        </div>
    );
}

// Enhanced Scroll Indicator
function ScrollIndicator() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer z-20"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
            <motion.span
                className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em]"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                Keşfet
            </motion.span>
            <motion.div
                className="relative w-7 h-12 rounded-full border-2 border-slate-300 dark:border-slate-600 flex items-start justify-center p-1.5 overflow-hidden"
                whileHover={{ borderColor: '#10b981', scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
            >
                {/* Glowing background on hover */}
                <motion.div
                    className="absolute inset-0 bg-burgundy/10 rounded-full"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                />
                <motion.div
                    className="w-2 h-2 rounded-full bg-burgundy"
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
            </motion.div>
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
                <ChevronDown className="w-5 h-5 text-slate-400" />
            </motion.div>
        </motion.div>
    );
}

export default function TechFlow() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

    // Mouse tracking
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
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
    const backgroundY = useTransform(smoothScrollY, [0, 500], [0, 100]);
    const codeLeftY = useTransform(smoothScrollY, [0, 500], [0, -150]);
    const codeRightY = useTransform(smoothScrollY, [0, 500], [0, 150]);
    const contentY = useTransform(smoothScrollY, [0, 500], [0, -30]);
    const contentOpacity = useTransform(smoothScrollY, [0, 400], [1, 0]);
    const contentScale = useTransform(smoothScrollY, [0, 500], [1, 0.95]);
    const orbsY = useTransform(smoothScrollY, [0, 500], [0, 80]);

    return (
        <section
            id="techflow"
            ref={sectionRef}
            className="relative min-h-screen w-full bg-slate-50 dark:bg-deep-space overflow-hidden flex items-center pt-20"
        >
            {/* Parallax Background Layer */}
            <motion.div className="absolute inset-0 -z-10" style={{ y: backgroundY }}>
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-burgundy/5 via-transparent to-crimson/5" />
            </motion.div>

            {/* Interactive Mouse Gradient Spotlight */}
            <motion.div
                className="absolute inset-0 pointer-events-none z-0"
                style={{
                    background: `radial-gradient(800px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(16, 185, 129, 0.08), transparent 40%)`,
                }}
            />

            {/* Advanced Particle System */}
            <AdvancedParticleSystem mouseX={mousePosition.x} mouseY={mousePosition.y} />

            {/* Parallax Glowing Orbs */}
            <motion.div className="absolute inset-0 pointer-events-none" style={{ y: orbsY }}>
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 -left-32 w-96 h-96 bg-burgundy/15 dark:bg-burgundy/25 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.35, 0.15] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-1/4 -right-32 w-96 h-96 bg-crimson/10 dark:bg-crimson/20 rounded-full blur-[120px]"
                />
            </motion.div>

            {/* Background Animation Layer - Code Columns with Parallax */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Left Code Column - with scroll parallax */}
                <motion.div
                    style={{ y: codeLeftY }}
                    className="hidden md:block absolute left-[2%] top-0 h-[200%] w-[280px]"
                >
                    <motion.div
                        animate={{ y: ['0%', '-50%'] }}
                        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                        className="flex flex-col gap-3 font-mono text-sm opacity-20 dark:opacity-15"
                    >
                        {[...codeLines, ...codeLines, ...codeLines, ...codeLines].map((line, i) => (
                            <div key={i} className={`${line.color} whitespace-nowrap`}>
                                <span className="text-slate-500 dark:text-slate-600 mr-3">{String(i % 16 + 1).padStart(2, '0')}</span>
                                {line.text}
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Right Code Column - with scroll parallax (opposite direction) */}
                <motion.div
                    style={{ y: codeRightY }}
                    className="hidden md:block absolute right-[2%] top-0 h-[200%] w-[280px]"
                >
                    <motion.div
                        animate={{ y: ['-50%', '0%'] }}
                        transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
                        className="flex flex-col gap-3 font-mono text-sm text-right opacity-20 dark:opacity-15"
                    >
                        {[...codeLines, ...codeLines, ...codeLines, ...codeLines].map((line, i) => (
                            <div key={i} className={`${line.color} whitespace-nowrap`}>
                                {line.text}
                                <span className="text-slate-500 dark:text-slate-600 ml-3">{String(i % 16 + 1).padStart(2, '0')}</span>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Data Flow Lines - Left Side */}
                <div className="hidden md:block absolute left-[20%] top-0 h-full w-px">
                    <div className="h-full w-full bg-gradient-to-b from-transparent via-burgundy/15 to-transparent" />
                    {Array.from({ length: 10 }).map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 rounded-full bg-burgundy/50"
                            style={{ left: -4 }}
                            animate={{
                                y: ['0%', '1000%'],
                                opacity: [0, 1, 1, 0],
                                scale: [0.5, 1, 1, 0.5],
                            }}
                            transition={{
                                duration: 4 + Math.random() * 3,
                                delay: i * 0.5,
                                repeat: Infinity,
                                ease: 'linear',
                            }}
                        />
                    ))}
                </div>

                {/* Data Flow Lines - Right Side */}
                <div className="hidden md:block absolute right-[20%] top-0 h-full w-px">
                    <div className="h-full w-full bg-gradient-to-b from-transparent via-crimson/15 to-transparent" />
                    {Array.from({ length: 10 }).map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 rounded-full bg-crimson/50"
                            style={{ left: -4 }}
                            animate={{
                                y: ['100%', '-100%'],
                                opacity: [0, 1, 1, 0],
                                scale: [0.5, 1, 1, 0.5],
                            }}
                            transition={{
                                duration: 4 + Math.random() * 3,
                                delay: i * 0.5,
                                repeat: Infinity,
                                ease: 'linear',
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Main Content Container with Parallax */}
            <motion.div
                className="container mx-auto px-6 relative z-10 h-full flex flex-col items-center justify-center text-center"
                style={{ y: contentY, opacity: contentOpacity, scale: contentScale }}
            >
                {/* Floating Product Cards - Centered & Absolute */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="hidden lg:flex absolute inset-0 items-center justify-center z-0 pointer-events-none"
                >
                    <div className="scale-100 origin-center pointer-events-auto">
                        <FloatingProductCards />
                    </div>
                </motion.div>

                {/* Text Content - Centered */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                    className="relative z-10 max-w-3xl flex flex-col items-center"
                >
                    {/* Glowing Orb Background for Text */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-burgundy/10 rounded-full blur-[100px] -z-10" />

                    {/* Glassmorphism Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <GlassCard className="px-4 py-2 rounded-full !bg-white/50 dark:!bg-white/5 !border-burgundy/20 mb-6">
                            <div className="flex items-center gap-2 font-mono text-xs md:text-sm text-burgundy dark:text-crimson">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                LOGO ÇÖZÜM ORTAĞI
                            </div>
                        </GlassCard>
                    </motion.div>

                    {/* Main Title with Typing Animation */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.1]"
                    >
                        Tiger 3 & Go Wings ile{' '}
                        <span className="block mt-2">
                            <TypingAnimation
                                words={typingWords}
                                typingSpeed={80}
                                deletingSpeed={40}
                                delayBetweenWords={2500}
                            />
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl leading-relaxed"
                    >
                        Özel Web Servisler, B2B Portalları ve Mobil Çözümler.
                        <span className="block mt-2 text-burgundy dark:text-crimson font-medium">
                            Logo verilerinizi web dünyasına taşıyoruz.
                        </span>
                    </motion.p>

                    {/* Stats Row */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex justify-center gap-8 sm:gap-12 font-mono"
                    >
                        {[
                            { value: 'REST API', label: 'Web Servis' },
                            { value: 'B2B', label: 'Bayi Portalı' },
                            { value: 'Mobil', label: 'Saha Satış' },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                className="text-center"
                                whileHover={{ scale: 1.05, y: -2 }}
                                transition={{ type: "spring", stiffness: 400 }}
                            >
                                <div className="text-xl sm:text-2xl font-bold text-burgundy dark:text-crimson">
                                    {stat.value}
                                </div>
                                <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-500">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Mobile Floating Code Snippets */}
                <div className="lg:hidden absolute inset-0 overflow-hidden pointer-events-none z-0">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                        className="absolute top-[15%] left-4 font-mono text-[10px] text-slate-400 dark:text-slate-600"
                    >
                        {mobileCodeLines.slice(0, 3).map((line, i) => (
                            <motion.div
                                key={i}
                                className={`${line.color} mb-2`}
                                animate={{ opacity: [0.3, 0.6, 0.3] }}
                                transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                            >
                                {line.text}
                            </motion.div>
                        ))}
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                        className="absolute bottom-[15%] right-4 font-mono text-[10px] text-slate-400 dark:text-slate-600 text-right"
                    >
                        {mobileCodeLines.slice(3).map((line, i) => (
                            <motion.div
                                key={i}
                                className={`${line.color} mb-2`}
                                animate={{ opacity: [0.3, 0.6, 0.3] }}
                                transition={{ duration: 2, delay: i * 0.3 + 0.5, repeat: Infinity }}
                            >
                                {line.text}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>

            {/* Enhanced Scroll Indicator */}
            <ScrollIndicator />
        </section>
    );
}
