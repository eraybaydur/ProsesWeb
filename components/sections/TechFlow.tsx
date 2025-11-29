'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

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

// Data flow particles
const dataParticles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
}));

// Tiger/Go3 & B2B Status strings
const dataStrings = [
    'TIGER 3 REST API: ACTIVE',
    'GO 3 WEB SERVICE: LISTENING',
    '{ "b2b_status": "ORDER_SYNCED" }',
    'WEB → REST API → TIGER 3',
    '█▀▀ █▄█ █▄░█ █▀▀   █▀▄ ▄▀█ ▀█▀ ▄▀█',
    'ORDER#B2B-999 → TIGER SALES ✓',
    '◉ B2B Portal ◉ Mobil Saha ◉ Pazaryeri',
    'LOBJECTS.DLL → JSON SERVICE',
];

export default function TechFlow() {
    const sectionRef = useRef<HTMLDivElement>(null);

    // For parallax movement - starts when section enters viewport
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end end"]
    });

    // For content visibility - starts when section top hits viewport top
    const { scrollYProgress: contentProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    // Smooth spring for parallax
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });

    // Different parallax speeds for layers - starts early when entering viewport
    const y1 = useTransform(smoothProgress, [0, 1], ['20%', '-80%']);
    const y2 = useTransform(smoothProgress, [0, 1], ['10%', '-50%']);
    const y3 = useTransform(smoothProgress, [0, 1], ['30%', '-100%']);
    const y4 = useTransform(smoothProgress, [0, 1], ['15%', '-60%']);

    // Code columns opacity - smooth fade in
    const codeOpacityRaw = useTransform(scrollYProgress, [0, 0.2, 0.85, 0.95], [0, 0.6, 0.5, 0]);
    const codeOpacity = useSpring(codeOpacityRaw, { stiffness: 30, damping: 20 });

    // Center content - smooth fade in
    const centerOpacityRaw = useTransform(scrollYProgress, [0.05, 0.25, 0.8, 0.92], [0, 1, 1, 0]);
    const centerOpacity = useSpring(centerOpacityRaw, { stiffness: 30, damping: 20 });

    // Background blur effect - only at the very end for transition
    const bgBlur = useTransform(contentProgress, [0.7, 0.95], [0, 12]);

    return (
        <section
            id="techflow"
            ref={sectionRef}
            className="relative h-[120vh] md:h-[200vh] bg-slate-50 dark:bg-deep-space overflow-hidden"
        >
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-burgundy/5 via-transparent to-crimson/5" />

            {/* Sticky Container */}
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                {/* Blur overlay that increases on scroll */}
                <motion.div
                    style={{ backdropFilter: useTransform(bgBlur, (b) => `blur(${b}px)`) }}
                    className="absolute inset-0 z-[5] pointer-events-none"
                />

                {/* Left Code Column */}
                <motion.div
                    style={{ y: y1, opacity: codeOpacity }}
                    className="hidden md:flex absolute left-[5%] top-0 h-[200%] w-[280px] flex-col gap-3 font-mono text-sm"
                >
                    {[...codeLines, ...codeLines, ...codeLines].map((line, i) => (
                        <div
                            key={i}
                            className={`${line.color} whitespace-nowrap`}
                        >
                            <span className="text-slate-500 dark:text-slate-600 mr-3">{String(i + 1).padStart(2, '0')}</span>
                            {line.text}
                        </div>
                    ))}
                </motion.div>

                {/* Right Code Column */}
                <motion.div
                    style={{ y: y3, opacity: codeOpacity }}
                    className="hidden md:flex absolute right-[5%] top-0 h-[200%] w-[280px] flex-col gap-3 font-mono text-sm text-right"
                >
                    {[...codeLines].reverse().concat([...codeLines, ...codeLines]).map((line, i) => (
                        <div
                            key={i}
                            className={`${line.color} whitespace-nowrap`}
                        >
                            {line.text}
                            <span className="text-slate-500 dark:text-slate-600 ml-3">{String(i + 1).padStart(2, '0')}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Data Flow Lines - Left Side */}
                <motion.div
                    style={{ y: y2, opacity: codeOpacity }}
                    className="hidden md:block absolute left-[25%] top-0 h-[200%] w-px"
                >
                    <div className="h-full w-full bg-gradient-to-b from-transparent via-burgundy/30 to-transparent" />
                    {dataParticles.slice(0, 15).map((particle) => (
                        <motion.div
                            key={particle.id}
                            className="absolute w-2 h-2 rounded-full bg-burgundy/60"
                            style={{ left: -4 }}
                            animate={{
                                y: ['0%', '100%'],
                                opacity: [0, 1, 1, 0],
                            }}
                            transition={{
                                duration: particle.duration,
                                delay: particle.delay,
                                repeat: Infinity,
                                ease: 'linear',
                            }}
                        />
                    ))}
                </motion.div>

                {/* Data Flow Lines - Right Side */}
                <motion.div
                    style={{ y: y4, opacity: codeOpacity }}
                    className="hidden md:block absolute right-[25%] top-0 h-[200%] w-px"
                >
                    <div className="h-full w-full bg-gradient-to-b from-transparent via-crimson/30 to-transparent" />
                    {dataParticles.slice(15).map((particle) => (
                        <motion.div
                            key={particle.id}
                            className="absolute w-2 h-2 rounded-full bg-crimson/60"
                            style={{ left: -4 }}
                            animate={{
                                y: ['100%', '0%'],
                                opacity: [0, 1, 1, 0],
                            }}
                            transition={{
                                duration: particle.duration,
                                delay: particle.delay,
                                repeat: Infinity,
                                ease: 'linear',
                            }}
                        />
                    ))}
                </motion.div>

                {/* Floating Data Strings - Left */}
                <motion.div
                    style={{ y: y2, opacity: codeOpacity }}
                    className="hidden md:block absolute left-[15%] top-[10%] font-mono text-xs text-slate-400 dark:text-slate-600"
                >
                    {dataStrings.slice(0, 4).map((str, i) => (
                        <motion.div
                            key={i}
                            className="mb-8"
                            animate={{ opacity: [0.3, 0.7, 0.3] }}
                            transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                        >
                            {str}
                        </motion.div>
                    ))}
                </motion.div>

                {/* Floating Data Strings - Right */}
                <motion.div
                    style={{ y: y4, opacity: codeOpacity }}
                    className="hidden md:block absolute right-[15%] bottom-[10%] font-mono text-xs text-slate-400 dark:text-slate-600 text-right"
                >
                    {dataStrings.slice(4).map((str, i) => (
                        <motion.div
                            key={i}
                            className="mb-8"
                            animate={{ opacity: [0.3, 0.7, 0.3] }}
                            transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                        >
                            {str}
                        </motion.div>
                    ))}
                </motion.div>

                {/* Mobile floating code snippets - visible only on mobile */}
                <div className="md:hidden absolute inset-0 overflow-hidden pointer-events-none">
                    {/* Top left code */}
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
                    {/* Bottom right code */}
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
                    {/* Mobile data flow line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-burgundy/20 to-transparent" />
                </div>

                {/* Center Content - Fixed position, only opacity changes */}
                <motion.div
                    style={{ opacity: centerOpacity }}
                    className="relative z-10 text-center px-4 sm:px-6 max-w-4xl"
                >
                    {/* Glowing Orb Background - Responsive sizes */}
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[500px] md:h-[500px] bg-burgundy/20 rounded-full blur-[80px] md:blur-[100px]" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] md:w-[300px] md:h-[300px] bg-crimson/20 rounded-full blur-[60px] md:blur-[80px]" />
                    </div>

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-burgundy/10 border border-burgundy/20 text-burgundy dark:text-crimson mb-4 md:mb-6 font-mono text-xs md:text-sm"
                    >
                        <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-500 animate-pulse" />
                        LOGO ÇÖZÜM ORTAĞI
                    </motion.div>

                    {/* Main Title */}
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-4 md:mb-6 tracking-tight leading-tight"
                    >
                        Tiger 3 & Go Wings ile{' '}
                        <span className="text-transparent block bg-clip-text bg-gradient-to-r from-burgundy via-crimson to-accent-red">
                            Tam Entegre
                        </span>
                    </motion.h2>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-6 md:mb-8 max-w-2xl mx-auto"
                    >
                        <span className="hidden sm:inline">Özel Web Servisler, B2B Portalları ve Mobil Çözümler.</span>
                        <span className="sm:hidden">Web Servisler, B2B ve Mobil Çözümler.</span>
                        <br />
                        <span className="text-burgundy dark:text-crimson font-medium">Logo verilerinizi web dünyasına taşıyoruz.</span>
                    </motion.p>

                    {/* Stats Row */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex justify-center gap-4 sm:gap-8 md:gap-16 font-mono"
                    >
                        {[
                            { value: 'REST API', label: 'Web Servis' },
                            { value: 'B2B', label: 'Bayi Portalı' },
                            { value: 'Mobil', label: 'Saha Satış' },
                        ].map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-burgundy dark:text-crimson">
                                    {stat.value}
                                </div>
                                <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-500">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    style={{ opacity: useTransform(scrollYProgress, [0, 0.15], [1, 0]) }}
                    className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 md:gap-2 text-slate-400"
                >
                    <span className="text-xs md:text-sm font-mono">scroll</span>
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-4 h-6 md:w-5 md:h-8 rounded-full border-2 border-slate-400 flex items-start justify-center p-0.5 md:p-1"
                    >
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-burgundy"
                        />
                    </motion.div>
                </motion.div>
            </div>

        </section>
    );
}
