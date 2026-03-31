'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import { Database, FileText, Code, Workflow, ArrowUpRight } from 'lucide-react';
import { usePageTransition } from '@/components/ui/PageTransition';
import Image from 'next/image';

const services = [
    {
        title: 'Logo ERP Çözümleri',
        description: 'Tiger 3, Go 3 ve J-Platform kurulum, eğitim ve destek hizmetleri ile işletmenizin verimliliğini artırın.',
        targetId: 'solutions',
        icon: Database,
        image: '/images/erp-dashboard.jpg',
        glowColor: 'bg-crimson',
        iconColor: 'text-crimson',
    },
    {
        title: 'e-Dönüşüm',
        description: 'e-Fatura, e-Arşiv, e-Defter ve e-İrsaliye entegrasyonlarıyla yasal süreçlerinizi dijitalleştirin.',
        targetId: 'solutions',
        icon: FileText,
        image: '/images/digital-transform.jpg',
        glowColor: 'bg-accent-red',
        iconColor: 'text-accent-red',
    },
    {
        title: 'Özel Yazılım Geliştirme',
        description: '.NET ve SQL tabanlı butik çözümlerle işletmenize özel ihtiyaçları karşılıyoruz.',
        targetId: 'techflow',
        icon: Code,
        image: '/images/code-office.jpg',
        glowColor: 'bg-burgundy',
        iconColor: 'text-burgundy',
    },
    {
        title: 'Süreç Danışmanlığı',
        description: 'Şirket içi iş akışlarının analizi ve dijitalleştirilmesi konusunda uzman danışmanlık.',
        targetId: 'features',
        icon: Workflow,
        image: '/images/consulting.jpg',
        glowColor: 'bg-purple-500',
        iconColor: 'text-purple-500',
    },
];

// Wave Divider Component for smooth section transitions
function WaveDivider({
    position = 'top',
    flip = false,
    reduceMotion = false,
}: {
    position?: 'top' | 'bottom';
    flip?: boolean;
    reduceMotion?: boolean;
}) {
    return (
        <div className={`absolute ${position === 'top' ? '-top-1' : '-bottom-1'} left-0 right-0 overflow-hidden pointer-events-none z-10`}>
            <svg
                className={`w-full h-16 md:h-24 ${flip ? 'rotate-180' : ''}`}
                viewBox="0 0 1440 100"
                preserveAspectRatio="none"
                fill="none"
            >
                <motion.path
                    d="M0,50 C150,20 350,80 500,50 C650,20 850,80 1000,50 C1150,20 1350,80 1440,50 L1440,100 L0,100 Z"
                    className="fill-slate-50 dark:fill-deep-space"
                    initial={{ d: "M0,50 C150,20 350,80 500,50 C650,20 850,80 1000,50 C1150,20 1350,80 1440,50 L1440,100 L0,100 Z" }}
                    animate={reduceMotion ? undefined : {
                        d: [
                            "M0,50 C150,20 350,80 500,50 C650,20 850,80 1000,50 C1150,20 1350,80 1440,50 L1440,100 L0,100 Z",
                            "M0,60 C150,80 350,30 500,60 C650,80 850,30 1000,60 C1150,80 1350,30 1440,60 L1440,100 L0,100 Z",
                            "M0,50 C150,20 350,80 500,50 C650,20 850,80 1000,50 C1150,20 1350,80 1440,50 L1440,100 L0,100 Z",
                        ]
                    }}
                    transition={reduceMotion ? undefined : { duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
            </svg>
        </div>
    );
}

// Enhanced Connection Lines with animated data flow
function ConnectionLines() {
    return (
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden md:block" style={{ overflow: 'visible' }}>
            <defs>
                <linearGradient id="lineGradientServices1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgb(16, 185, 129)" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="rgb(52, 211, 153)" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="rgb(110, 231, 183)" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient id="lineGradientServices2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgb(16, 185, 129)" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="rgb(5, 150, 105)" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset="50%" stopColor="rgb(16, 185, 129)">
                        <animate attributeName="offset" values="0;1;0" dur="2s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="100%" stopColor="transparent" />
                </linearGradient>
                <filter id="glowLine">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* Horizontal line top row - Card 1 to Card 2 */}
            <motion.path
                d="M 33% 25% Q 50% 20%, 67% 25%"
                stroke="url(#lineGradientServices1)"
                strokeWidth="2"
                fill="none"
                filter="url(#glowLine)"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
            />

            {/* Animated flow on top line */}
            <motion.circle
                r="4"
                fill="rgb(16, 185, 129)"
                filter="url(#glowLine)"
                initial={{ opacity: 0 }}
                animate={{
                    opacity: [0, 1, 1, 0],
                    offsetDistance: ['0%', '100%']
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1
                }}
                style={{ offsetPath: "path('M 33% 25% Q 50% 20%, 67% 25%')" } as React.CSSProperties}
            />

            {/* Vertical line left - Card 1 to Card 3 */}
            <motion.path
                d="M 16% 40% Q 14% 50%, 16% 60%"
                stroke="url(#lineGradientServices2)"
                strokeWidth="2"
                fill="none"
                filter="url(#glowLine)"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8 }}
            />

            {/* Horizontal line bottom row - Card 3 to Card 4 */}
            <motion.path
                d="M 33% 75% Q 42% 70%, 50% 75%"
                stroke="url(#lineGradientServices1)"
                strokeWidth="2"
                fill="none"
                filter="url(#glowLine)"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
            />

            {/* Diagonal line - Card 2 to Card 4 */}
            <motion.path
                d="M 83% 40% Q 75% 55%, 67% 65%"
                stroke="url(#lineGradientServices2)"
                strokeWidth="1.5"
                fill="none"
                strokeDasharray="6 4"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.6 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 1.2 }}
            />

            {/* Multiple animated dots */}
            {[0, 1, 2].map((i) => (
                <motion.circle
                    key={i}
                    r="3"
                    fill="rgb(52, 211, 153)"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [0, 0.8, 0.8, 0],
                        cx: ['16%', '16%'],
                        cy: ['40%', '60%']
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                        delay: i * 0.5
                    }}
                />
            ))}

            {/* Pulsing nodes at intersections */}
            {[
                { cx: '33%', cy: '25%' },
                { cx: '67%', cy: '25%' },
                { cx: '16%', cy: '50%' },
                { cx: '33%', cy: '75%' },
                { cx: '67%', cy: '65%' },
            ].map((pos, i) => (
                <motion.circle
                    key={`node-${i}`}
                    cx={pos.cx}
                    cy={pos.cy}
                    r="5"
                    fill="rgb(16, 185, 129)"
                    opacity="0.3"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                >
                    <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
                </motion.circle>
            ))}
        </svg>
    );
}

// Service Card Component
function ServiceCard({
    service,
    index,
}: {
    service: typeof services[0];
    index: number;
}) {
    const { navigateToSection } = usePageTransition();
    const Icon = service.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="relative"
        >
            <motion.div
                role="button"
                tabIndex={0}
                onClick={() => navigateToSection(service.targetId)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); navigateToSection(service.targetId); } }}
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="h-full rounded-3xl bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10
                           backdrop-blur-sm group relative overflow-hidden cursor-pointer
                           hover:border-burgundy/30 dark:hover:border-burgundy/30 transition-colors duration-300
                           shadow-lg shadow-slate-200/20 dark:shadow-black/10"
            >
                {/* Card Header Image */}
                <div className="relative h-32 w-full rounded-t-2xl overflow-hidden">
                    <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Gradient overlay for text contrast */}
                    <div className="absolute bottom-0 left-0 right-0 h-[50px] bg-gradient-to-t from-burgundy to-transparent" />
                </div>

                {/* Card Body */}
                <div className="p-8">
                {/* Glow effect behind icon */}
                <motion.div
                    className={`absolute top-40 left-6 w-24 h-24 ${service.glowColor} rounded-full blur-3xl opacity-0 group-hover:opacity-20`}
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                />

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-burgundy/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`absolute top-0 right-0 w-full h-full ${service.glowColor} opacity-10 blur-3xl`} />
                </div>

                {/* Arrow indicator */}
                <motion.div
                    className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                >
                    <div className="p-2 rounded-full bg-slate-100 dark:bg-white/10">
                        <ArrowUpRight className="w-5 h-5 text-slate-900 dark:text-white" />
                    </div>
                </motion.div>

                {/* Icon with animated container */}
                <motion.div
                    className="relative mb-6 w-fit"
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="relative p-4 rounded-2xl bg-white dark:bg-white/10 shadow-lg dark:shadow-none border border-slate-100 dark:border-white/5">
                        {/* Pulse ring on hover */}
                        <motion.div
                            className={`absolute inset-0 rounded-2xl ${service.glowColor} opacity-0 group-hover:opacity-20`}
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                        <Icon className={`w-8 h-8 ${service.iconColor} relative z-10`} />
                    </div>

                    {/* Floating particles around icon */}
                    <motion.div
                        className={`absolute -top-1 -right-1 w-2 h-2 rounded-full ${service.glowColor} opacity-0 group-hover:opacity-60`}
                        animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                    />
                    <motion.div
                        className={`absolute -bottom-1 -left-1 w-1.5 h-1.5 rounded-full ${service.glowColor} opacity-0 group-hover:opacity-40`}
                        animate={{ y: [0, 8, 0], x: [0, -4, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                    />
                    <motion.div
                        className={`absolute top-1/2 -right-2 w-1 h-1 rounded-full ${service.glowColor} opacity-0 group-hover:opacity-50`}
                        animate={{ x: [0, 6, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity, delay: 0.3 }}
                    />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600 dark:from-white dark:to-gray-400 group-hover:from-burgundy group-hover:to-crimson transition-all duration-300">
                        {service.title}
                    </h3>
                    <p className="text-slate-600 dark:text-gray-400 leading-relaxed">
                        {service.description}
                    </p>
                </div>
                </div>

                {/* Bottom accent line */}
                <motion.div
                    className={`absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-burgundy to-transparent opacity-0 group-hover:opacity-40 rounded-full`}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
                />

                {/* Shine effect on hover */}
                <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '200%' }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                >
                    <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default function Services() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const shouldReduceMotion = useReducedMotion();

    // Scroll-based parallax
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    // Parallax transforms - daha güçlü efektler
    const backgroundY = useTransform(smoothProgress, [0, 1], ['-15%', '15%']);
    const orbsY = useTransform(smoothProgress, [0, 1], ['50%', '-50%']);
    const contentY = useTransform(smoothProgress, [0, 1], ['10%', '-10%']);
    const gridOpacity = useTransform(smoothProgress, [0, 0.5, 1], [0.3, 1, 0.3]);
    const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
    const contentOpacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);

    return (
        <section
            id="services"
            ref={sectionRef}
            className="py-32 relative overflow-hidden bg-slate-50 dark:bg-deep-space"
        >
            {/* Wave Divider Top */}
            <WaveDivider position="top" reduceMotion={shouldReduceMotion ?? undefined} />

            {/* Parallax Background Layer */}
            <motion.div
                className="absolute inset-0 -z-10"
                style={{ y: shouldReduceMotion ? 0 : backgroundY }}
            >
                {/* Grid Background */}
                <motion.div
                    className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"
                    style={{ opacity: shouldReduceMotion ? 0.5 : gridOpacity }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-burgundy/5 via-transparent to-burgundy/5" />
            </motion.div>

            {/* Parallax Floating orbs */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{ y: shouldReduceMotion ? 0 : orbsY }}
            >
                <motion.div
                    className="absolute top-20 right-20 w-72 h-72 bg-burgundy/10 rounded-full blur-[120px]"
                    animate={shouldReduceMotion ? undefined : { scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={shouldReduceMotion ? undefined : { duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute bottom-20 left-20 w-56 h-56 bg-crimson/10 rounded-full blur-[100px]"
                    animate={shouldReduceMotion ? undefined : { scale: [1.2, 1, 1.2], opacity: [0.15, 0.35, 0.15] }}
                    transition={shouldReduceMotion ? undefined : { duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-red/5 rounded-full blur-[150px]"
                    animate={shouldReduceMotion ? undefined : { scale: [1, 1.1, 1] }}
                    transition={shouldReduceMotion ? undefined : { duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                />
            </motion.div>

            {/* Tech Globe - Right Side */}
            <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none z-[1] overflow-hidden">
                <motion.div
                    className="absolute top-1/2 -translate-y-1/2 -right-[200px] w-[500px] h-[500px]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                >
                    {/* Glow effect behind */}
                    <div className="absolute inset-0 rounded-full bg-burgundy/20 blur-[80px]" />

                    {/* Wireframe Globe SVG */}
                    <motion.svg
                        viewBox="0 0 200 200"
                        className="w-full h-full"
                        animate={shouldReduceMotion ? undefined : { rotate: 360 }}
                        transition={shouldReduceMotion ? undefined : { duration: 60, repeat: Infinity, ease: 'linear' }}
                    >
                        <defs>
                            <linearGradient id="globeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="rgba(0, 255, 65, 0.6)" />
                                <stop offset="100%" stopColor="rgba(0, 143, 17, 0.2)" />
                            </linearGradient>
                            <radialGradient id="glowGradient" cx="30%" cy="30%">
                                <stop offset="0%" stopColor="rgba(0, 255, 65, 0.3)" />
                                <stop offset="100%" stopColor="transparent" />
                            </radialGradient>
                        </defs>

                        {/* Inner glow */}
                        <circle cx="100" cy="100" r="80" fill="url(#glowGradient)" />

                        {/* Main circle */}
                        <circle cx="100" cy="100" r="80" fill="none" stroke="url(#globeGradient)" strokeWidth="1" />

                        {/* Horizontal lines */}
                        {[20, 40, 60, 100, 140, 160, 180].map((y, i) => {
                            const r = Math.sqrt(80 * 80 - (y - 100) * (y - 100));
                            return r > 0 ? (
                                <ellipse
                                    key={`h-${i}`}
                                    cx="100"
                                    cy={y}
                                    rx={r}
                                    ry={r * 0.3}
                                    fill="none"
                                    stroke="rgba(0, 255, 65, 0.3)"
                                    strokeWidth="0.5"
                                />
                            ) : null;
                        })}

                        {/* Vertical ellipses */}
                        {[0, 30, 60, 90, 120, 150].map((angle, i) => (
                            <ellipse
                                key={`v-${i}`}
                                cx="100"
                                cy="100"
                                rx={80 * Math.cos((angle * Math.PI) / 180)}
                                ry="80"
                                fill="none"
                                stroke="rgba(0, 255, 65, 0.25)"
                                strokeWidth="0.5"
                                transform={`rotate(${angle} 100 100)`}
                            />
                        ))}

                        {/* Pulsing dots on globe */}
                        {[
                            { cx: 120, cy: 70 },
                            { cx: 80, cy: 130 },
                            { cx: 140, cy: 100 },
                            { cx: 100, cy: 50 },
                        ].map((dot, i) => (
                            <motion.circle
                                key={`dot-${i}`}
                                cx={dot.cx}
                                cy={dot.cy}
                                r="3"
                                fill="rgba(0, 255, 65, 0.8)"
                                animate={{
                                    r: [2, 4, 2],
                                    opacity: [0.5, 1, 0.5],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: i * 0.5,
                                }}
                            />
                        ))}
                    </motion.svg>

                    {/* Orbiting particle */}
                    <motion.div
                        className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-burgundy shadow-[0_0_10px_rgba(0,255,65,0.8)]"
                        animate={shouldReduceMotion ? undefined : { rotate: 360 }}
                        transition={shouldReduceMotion ? undefined : {
                            duration: 10,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                        style={{
                            transformOrigin: '-100px 0',
                        }}
                    />
                </motion.div>
            </div>

            {/* Main Content with Parallax */}
            <motion.div
                className="site-container relative z-10"
                style={{
                    y: shouldReduceMotion ? 0 : contentY,
                    opacity: shouldReduceMotion ? 1 : contentOpacity
                }}
            >
                {/* Header */}
                <motion.div
                    className="mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-burgundy uppercase tracking-wider mb-4"
                    >
                        <span className="w-8 h-px bg-burgundy" />
                        Hizmetlerimiz
                    </motion.span>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600 dark:from-white dark:to-gray-400">Dijital Dönüşüm</span> <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-burgundy via-crimson to-accent-red">
                            Çözümlerimiz
                        </span>
                    </h2>
                    <p className="text-slate-600 dark:text-gray-400 max-w-2xl text-lg leading-relaxed">
                        İşletmenizin ihtiyaçlarına yönelik uçtan uca teknoloji çözümleri sunuyoruz.
                    </p>
                </motion.div>

                {/* Cards Grid with Connection Lines */}
                <div className="relative">
                    {!shouldReduceMotion && <ConnectionLines />}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                service={service}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Wave Divider Bottom */}
            <WaveDivider position="bottom" flip reduceMotion={shouldReduceMotion ?? undefined} />
        </section>
    );
}
