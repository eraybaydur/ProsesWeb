'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { usePageTransition } from './PageTransition';

const products = [
    { id: 'tiger', name: 'Tiger 3 Enterprise', logo: '/tiger.png', description: 'Kurumsal ERP', delay: 0 },
    { id: 'go3', name: 'Go 3', logo: '/gowings.png', description: 'KOBİ Çözümü', delay: 0.1 },
    { id: 'crm', name: 'Logo CRM', logo: '/logocrm.png', description: 'Müşteri İlişkileri', delay: 0.2 },
    { id: 'mind', name: 'Logo Mind', logo: '/logomind.png', description: 'İş Zekası', delay: 0.3 },
    { id: 'flow', name: 'e-Dönüşüm', logo: '/logoflow.png', description: 'Dijital Fatura', delay: 0.4 },
];

// Orbital positions for a nice arc layout
const positions = [
    { x: 0, y: -140, scale: 1, zIndex: 5 },      // Top - Main product
    { x: 170, y: -50, scale: 0.92, zIndex: 4 },   // Right top
    { x: 190, y: 100, scale: 0.88, zIndex: 3 },   // Right bottom
    { x: -170, y: -50, scale: 0.92, zIndex: 4 },  // Left top
    { x: -190, y: 100, scale: 0.88, zIndex: 3 },  // Left bottom
];

export default function FloatingProductCards() {
    const { navigateToSection } = usePageTransition();

    return (
        <div className="relative w-[550px] h-[550px] hidden lg:flex items-center justify-center">
            {/* Central glow effect */}
            <div className="absolute w-72 h-72 bg-gradient-to-br from-burgundy/10 dark:from-burgundy/20 to-crimson/10 dark:to-crimson/20 rounded-full blur-3xl" />

            {/* Rotating orbit rings */}
            <svg className="absolute w-full h-full pointer-events-none" viewBox="0 0 500 500">
                <defs>
                    <linearGradient id="orbitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8B0000" stopOpacity="0.3" />
                        <stop offset="50%" stopColor="#DC143C" stopOpacity="0.1" />
                        <stop offset="100%" stopColor="#8B0000" stopOpacity="0.3" />
                    </linearGradient>
                </defs>
                <motion.ellipse
                    cx="250"
                    cy="250"
                    rx="200"
                    ry="150"
                    fill="none"
                    stroke="url(#orbitGradient)"
                    strokeWidth="1"
                    strokeDasharray="8 4"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                    style={{ transformOrigin: 'center' }}
                />
                <motion.ellipse
                    cx="250"
                    cy="250"
                    rx="140"
                    ry="100"
                    fill="none"
                    stroke="url(#orbitGradient)"
                    strokeWidth="1"
                    strokeDasharray="4 8"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                    style={{ transformOrigin: 'center' }}
                />
            </svg>

            {products.map((product, index) => (
                <motion.div
                    key={product.id}
                    className="absolute"
                    style={{ zIndex: positions[index].zIndex }}
                    initial={{
                        opacity: 0,
                        scale: 0.3,
                        x: 0,
                        y: 0
                    }}
                    animate={{
                        opacity: 1,
                        scale: positions[index].scale,
                        x: positions[index].x,
                        y: positions[index].y,
                    }}
                    transition={{
                        duration: 0.8,
                        delay: product.delay + 0.3,
                        type: 'spring',
                        stiffness: 80,
                        damping: 12
                    }}
                >
                    <motion.div
                        className="relative group cursor-pointer"
                        onClick={() => navigateToSection(product.id)}
                        animate={{
                            y: [0, -12, 0],
                        }}
                        transition={{
                            duration: 4 + index * 0.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: index * 0.4,
                        }}
                        whileHover={{
                            scale: 1.1,
                            zIndex: 50,
                            transition: { duration: 0.2 }
                        }}
                    >
                        {/* Card */}
                        <div className={`
                            relative p-6 rounded-2xl
                            bg-white/90 dark:bg-slate-900/90
                            backdrop-blur-xl
                            border border-slate-200/50 dark:border-white/10
                            shadow-xl shadow-black/10 dark:shadow-black/30
                            overflow-hidden
                            min-w-[160px]
                            transition-all duration-300
                            group-hover:shadow-2xl group-hover:shadow-burgundy/20
                            group-hover:border-burgundy/30
                        `}>
                            {/* Gradient accent bar */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-burgundy to-crimson" />

                            {/* Hover glow */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-burgundy/30 to-crimson/30 blur-xl -z-10" style={{ transform: 'scale(0.8)' }} />

                            {/* Content */}
                            <div className="relative z-10 flex flex-col items-center gap-4">
                                {/* Logo container */}
                                <div className="relative w-20 h-20 flex items-center justify-center rounded-xl bg-slate-100/50 dark:bg-white/5 p-2 group-hover:bg-white/80 dark:group-hover:bg-white/10 transition-colors">
                                    <Image
                                        src={product.logo}
                                        alt={product.name}
                                        width={72}
                                        height={72}
                                        className="object-contain drop-shadow-md"
                                    />
                                </div>

                                {/* Text */}
                                <div className="text-center">
                                    <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                                        {product.name}
                                    </h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                                        {product.description}
                                    </p>
                                </div>
                            </div>

                            {/* Shine effect on hover */}
                            <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                            </div>
                        </div>

                        {/* Floating particles around card */}
                        <motion.div
                            className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-gradient-to-r from-burgundy to-crimson"
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: index * 0.2,
                            }}
                        />
                    </motion.div>
                </motion.div>
            ))}

            {/* Center Logo badge */}
            <motion.div
                className="absolute z-10"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5, type: 'spring' }}
            >
                <div className="relative p-4 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-xl shadow-burgundy/20 border border-burgundy/20">
                    <div className="w-20 h-12 flex items-center justify-center">
                        <Image
                            src="/logo.webp"
                            alt="Logo"
                            width={80}
                            height={48}
                            className="object-contain"
                        />
                    </div>
                    {/* Pulse ring */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-burgundy/20 to-crimson/20 animate-pulse" />
                </div>
            </motion.div>
        </div>
    );
}
