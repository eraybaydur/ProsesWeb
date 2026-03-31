'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import FloatingProductCards from '@/components/ui/FloatingProductCards';
import GlassCard from '@/components/ui/GlassCard';
import TypingAnimation from '@/components/ui/TypingAnimation';
import ScrollIndicator from '@/components/ui/ScrollIndicator';

const codeLines = [
    { text: 'const tiger = new LogoTiger3();', color: 'text-blue-400' },
    { text: 'await tiger.RestAPI.connect();', color: 'text-emerald-400' },
    { text: 'function syncB2BOrders(orders) {', color: 'text-purple-400' },
    { text: '  return orders.map(toLObjects);', color: 'text-slate-400' },
    { text: 'export class WebServiceHandler {', color: 'text-yellow-400' },
    { text: '  async postToTiger(data) {...}', color: 'text-slate-400' },
    { text: 'const stock = await api.getGo3Stock();', color: 'text-cyan-400' },
    { text: 'SELECT * FROM LG_001_ITEMS WHERE...', color: 'text-orange-400' },
];

const typingWords = ['Tam Entegre', 'Hızlı', 'Güvenli', 'Ölçeklenebilir'];

const mobileProducts = [
    { name: 'Tiger 3', logo: '/tiger.webp' },
    { name: 'Go 3', logo: '/gowings.webp' },
    { name: 'CRM', logo: '/logocrm.webp' },
    { name: 'Flow', logo: '/logoflow.webp' },
    { name: 'Mind', logo: '/logomind.webp' },
];

export default function TechFlow() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

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

    const { scrollY } = useScroll();
    const smoothScrollY = useSpring(scrollY, { stiffness: 100, damping: 30 });

    const backgroundY = useTransform(smoothScrollY, [0, 500], [0, 100]);
    const codeLeftY = useTransform(smoothScrollY, [0, 500], [0, -150]);
    const codeRightY = useTransform(smoothScrollY, [0, 500], [0, 150]);
    const contentY = useTransform(smoothScrollY, [0, 500], [0, -24]);
    const contentOpacity = useTransform(smoothScrollY, [0, 400], [1, 0]);
    const contentScale = useTransform(smoothScrollY, [0, 500], [1, 0.95]);
    const orbsY = useTransform(smoothScrollY, [0, 500], [0, 80]);

    return (
        <section
            id="techflow"
            ref={sectionRef}
            className="relative min-h-screen w-full bg-slate-50 dark:bg-deep-space overflow-hidden flex items-center pt-20"
        >
            {/* Parallax Background */}
            <motion.div className="absolute inset-0 -z-10" style={{ y: backgroundY }}>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
                <div className="absolute inset-0 bg-gradient-to-b from-burgundy/5 via-transparent to-crimson/5" />
            </motion.div>

            {/* Mouse Gradient Spotlight */}
            <div
                className="absolute inset-0 pointer-events-none z-0 transition-all duration-300"
                style={{
                    background: `radial-gradient(520px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(219, 26, 93, 0.06), transparent 45%)`,
                }}
            />

            {/* Parallax Glowing Orbs */}
            <motion.div className="absolute inset-0 pointer-events-none" style={{ y: orbsY }}>
                <motion.div
                    animate={{ scale: [1, 1.12, 1], opacity: [0.14, 0.24, 0.14] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 -left-28 w-80 h-80 bg-burgundy/10 dark:bg-burgundy/20 rounded-full blur-[110px]"
                />
                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.12, 0.22, 0.12] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-1/4 -right-28 w-80 h-80 bg-crimson/10 dark:bg-crimson/20 rounded-full blur-[110px]"
                />
            </motion.div>

            {/* Code Columns with fade edges */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Left Code Column */}
                <motion.div
                    style={{ y: codeLeftY }}
                    className="hidden xl:block absolute left-[3%] top-0 h-[200%] w-[240px]"
                >
                    {/* Fade edges */}
                    <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-50 dark:from-deep-space to-transparent z-10" />
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 dark:from-deep-space to-transparent z-10" />

                    <motion.div
                        animate={{ y: ['0%', '-50%'] }}
                        transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
                        className="flex flex-col gap-4 font-mono text-sm opacity-15 dark:opacity-10"
                    >
                        {[...codeLines, ...codeLines, ...codeLines, ...codeLines].map((line, i) => (
                            <div key={i} className={`${line.color} whitespace-nowrap`}>
                                <span className="text-slate-400 dark:text-slate-600 mr-3 select-none">{String(i % 8 + 1).padStart(2, '0')}</span>
                                {line.text}
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Right Code Column */}
                <motion.div
                    style={{ y: codeRightY }}
                    className="hidden xl:block absolute right-[3%] top-0 h-[200%] w-[240px]"
                >
                    <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-50 dark:from-deep-space to-transparent z-10" />
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 dark:from-deep-space to-transparent z-10" />

                    <motion.div
                        animate={{ y: ['-50%', '0%'] }}
                        transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
                        className="flex flex-col gap-4 font-mono text-sm text-right opacity-15 dark:opacity-10"
                    >
                        {[...codeLines, ...codeLines, ...codeLines, ...codeLines].map((line, i) => (
                            <div key={i} className={`${line.color} whitespace-nowrap`}>
                                {line.text}
                                <span className="text-slate-400 dark:text-slate-600 ml-3 select-none">{String(i % 8 + 1).padStart(2, '0')}</span>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Main Content */}
            <motion.div
                className="site-container relative z-10 h-full flex flex-col items-center justify-center text-center"
                style={{ y: contentY, opacity: contentOpacity, scale: contentScale }}
            >
                {/* Desktop Floating Product Cards */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="hidden xl:flex absolute inset-0 items-center justify-center z-0 pointer-events-none"
                >
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-slate-50 to-transparent dark:from-deep-space" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-slate-50 to-transparent dark:from-deep-space" />
                    <div className="origin-center pointer-events-auto scale-[0.68] 2xl:scale-[0.82]">
                        <FloatingProductCards />
                    </div>
                </motion.div>

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                    className="relative z-10 max-w-3xl flex flex-col items-center"
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-burgundy/10 rounded-full blur-[90px] -z-10" />

                    {/* Subtle Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <GlassCard className="px-3 py-1.5 rounded-full !bg-white/40 dark:!bg-white/5 !border-burgundy/15 mb-8">
                            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 tracking-wider uppercase">
                                <span className="relative flex h-1.5 w-1.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                                </span>
                                Logo Cozum Ortagi
                            </div>
                        </GlassCard>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-[1.15] bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600 dark:from-white dark:to-gray-400 text-balance"
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
                        className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl leading-relaxed text-balance"
                    >
                        Özel Web Servisler, B2B Portalları ve Mobil Çözümler.
                        <span className="block mt-2 text-burgundy dark:text-crimson font-medium">
                            Logo verilerinizi web dünyasına taşıyoruz.
                        </span>
                    </motion.p>

                    {/* Mobile Product Strip */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45 }}
                        className="flex lg:hidden items-center gap-6 mb-10"
                    >
                        {mobileProducts.map((product) => (
                            <div key={product.name} className="flex flex-col items-center gap-1.5">
                                <div className="w-11 h-11 rounded-xl bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 flex items-center justify-center p-1.5">
                                    <Image
                                        src={product.logo}
                                        alt={product.name}
                                        width={32}
                                        height={32}
                                        className="object-contain"
                                    />
                                </div>
                                <span className="text-[10px] text-slate-400 dark:text-slate-500 font-medium">
                                    {product.name}
                                </span>
                            </div>
                        ))}
                    </motion.div>

                    {/* Stats Row - Strong numbers */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex justify-center gap-8 sm:gap-14"
                    >
                        {[
                            { value: '150+', label: 'Entegrasyon' },
                            { value: '50+', label: 'B2B Portal' },
                            { value: '7/24', label: 'Kesintisiz Destek' },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                className="text-center"
                                whileHover={{ scale: 1.05, y: -2 }}
                                transition={{ type: "spring", stiffness: 400 }}
                            >
                                <div className="text-2xl sm:text-3xl font-bold text-burgundy dark:text-crimson">
                                    {stat.value}
                                </div>
                                <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.div>

            <ScrollIndicator />
        </section>
    );
}
