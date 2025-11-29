'use client';

import { motion } from 'framer-motion';
import { Database, FileText, Code, Workflow, ArrowUpRight } from 'lucide-react';
import { usePageTransition } from '@/components/ui/PageTransition';

const services = [
    {
        title: 'Logo ERP Çözümleri',
        description: 'Tiger 3, Go 3 ve J-Platform kurulum, eğitim ve destek hizmetleri ile işletmenizin verimliliğini artırın.',
        icon: Database,
        colSpan: 'md:col-span-2',
        glowColor: 'bg-crimson',
        iconColor: 'text-crimson',
        gridPosition: { row: 1, col: 1 },
    },
    {
        title: 'e-Dönüşüm',
        description: 'e-Fatura, e-Arşiv, e-Defter ve e-İrsaliye entegrasyonlarıyla yasal süreçlerinizi dijitalleştirin.',
        icon: FileText,
        colSpan: 'md:col-span-1',
        glowColor: 'bg-accent-red',
        iconColor: 'text-accent-red',
        gridPosition: { row: 1, col: 3 },
    },
    {
        title: 'Özel Yazılım Geliştirme',
        description: '.NET ve SQL tabanlı butik çözümlerle işletmenize özel ihtiyaçları karşılıyoruz.',
        icon: Code,
        colSpan: 'md:col-span-1',
        glowColor: 'bg-burgundy',
        iconColor: 'text-burgundy',
        gridPosition: { row: 2, col: 1 },
    },
    {
        title: 'Süreç Danışmanlığı',
        description: 'Şirket içi iş akışlarının analizi ve dijitalleştirilmesi konusunda uzman danışmanlık.',
        icon: Workflow,
        colSpan: 'md:col-span-2',
        glowColor: 'bg-purple-500',
        iconColor: 'text-purple-500',
        gridPosition: { row: 2, col: 2 },
    },
];

// Connection lines between cards
function ConnectionLines() {
    return (
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden md:block" style={{ overflow: 'visible' }}>
            <defs>
                <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgb(220, 20, 60)" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="rgb(139, 0, 0)" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="rgb(168, 85, 247)" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgb(220, 20, 60)" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="rgb(139, 0, 0)" stopOpacity="0.3" />
                </linearGradient>
            </defs>

            {/* Horizontal line top row */}
            <motion.line
                x1="33%"
                y1="25%"
                x2="67%"
                y2="25%"
                stroke="url(#lineGradient1)"
                strokeWidth="1"
                strokeDasharray="8 4"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
            />

            {/* Vertical line left */}
            <motion.line
                x1="16%"
                y1="40%"
                x2="16%"
                y2="60%"
                stroke="url(#lineGradient2)"
                strokeWidth="1"
                strokeDasharray="8 4"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8 }}
            />

            {/* Horizontal line bottom row */}
            <motion.line
                x1="33%"
                y1="75%"
                x2="50%"
                y2="75%"
                stroke="url(#lineGradient1)"
                strokeWidth="1"
                strokeDasharray="8 4"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
            />

            {/* Animated dots on lines */}
            <motion.circle
                r="3"
                fill="rgb(220, 20, 60)"
                initial={{ opacity: 0 }}
                animate={{
                    opacity: [0, 1, 1, 0],
                    cx: ['33%', '67%'],
                    cy: ['25%', '25%']
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 1
                }}
            />
            <motion.circle
                r="3"
                fill="rgb(139, 0, 0)"
                initial={{ opacity: 0 }}
                animate={{
                    opacity: [0, 1, 1, 0],
                    cx: ['16%', '16%'],
                    cy: ['40%', '60%']
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1.5,
                    delay: 0.5
                }}
            />
        </svg>
    );
}

// Service Card Component
function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
    const { navigateToSection } = usePageTransition();
    const Icon = service.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className={`${service.colSpan} relative`}
        >
            <motion.div
                onClick={() => navigateToSection(service.title)}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="h-full p-8 rounded-3xl bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10
                           backdrop-blur-sm group relative overflow-hidden cursor-pointer
                           hover:border-crimson/30 dark:hover:border-crimson/30 transition-colors duration-300"
            >
                {/* Glow effect behind icon */}
                <motion.div
                    className={`absolute top-6 left-6 w-20 h-20 ${service.glowColor} rounded-full blur-2xl opacity-0 group-hover:opacity-30`}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-crimson/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`absolute top-0 right-0 w-full h-full ${service.glowColor} opacity-10 blur-2xl`} />
                </div>

                {/* Arrow indicator */}
                <motion.div
                    className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    initial={{ x: -10, opacity: 0 }}
                    whileHover={{ x: 0, opacity: 1 }}
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
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                        <Icon className={`w-8 h-8 ${service.iconColor} relative z-10`} />
                    </div>

                    {/* Floating particles around icon */}
                    <motion.div
                        className={`absolute -top-1 -right-1 w-2 h-2 rounded-full ${service.glowColor} opacity-0 group-hover:opacity-60`}
                        animate={{ y: [0, -8, 0], x: [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                    />
                    <motion.div
                        className={`absolute -bottom-1 -left-1 w-1.5 h-1.5 rounded-full ${service.glowColor} opacity-0 group-hover:opacity-40`}
                        animate={{ y: [0, 6, 0], x: [0, -3, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                    />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-burgundy dark:group-hover:text-crimson transition-colors duration-300">
                        {service.title}
                    </h3>
                    <p className="text-slate-600 dark:text-gray-400 leading-relaxed">
                        {service.description}
                    </p>
                </div>

                {/* Bottom accent line */}
                <motion.div
                    className={`absolute bottom-0 left-8 right-8 h-0.5 ${service.glowColor} opacity-0 group-hover:opacity-50 rounded-full`}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                />
            </motion.div>
        </motion.div>
    );
}

export default function Services() {
    return (
        <section id="services" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-deep-space">
            {/* Grid Background - consistent with TechFlow */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

            {/* Gradient Overlay - starts purple (from Stats), ends burgundy for smooth transition to TechFlow */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-burgundy/5" />

            {/* Floating background orbs */}
            <motion.div
                className="absolute top-20 right-20 w-64 h-64 bg-crimson/10 rounded-full blur-[100px]"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute bottom-20 left-20 w-48 h-48 bg-burgundy/10 rounded-full blur-[80px]"
                animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="inline-block text-sm font-semibold text-crimson uppercase tracking-wider mb-4"
                    >
                        Hizmetlerimiz
                    </motion.span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                        Dijital Dönüşüm <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-burgundy to-crimson">
                            Çözümlerimiz
                        </span>
                    </h2>
                    <p className="text-slate-600 dark:text-gray-400 max-w-2xl text-lg">
                        İşletmenizin ihtiyaçlarına yönelik uçtan uca teknoloji çözümleri sunuyoruz.
                    </p>
                </motion.div>

                {/* Cards Grid with Connection Lines */}
                <div className="relative">
                    <ConnectionLines />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                        {services.map((service, index) => (
                            <ServiceCard key={index} service={service} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
