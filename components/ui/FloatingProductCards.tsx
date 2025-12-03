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

// Orbital positions for a nice arc layout - Expanded for centered text
const positions = [
    { x: 0, y: -350, scale: 1, zIndex: 5 },      // Top - Main product
    { x: 420, y: -100, scale: 0.92, zIndex: 4 },   // Right top
    { x: 320, y: 250, scale: 0.88, zIndex: 3 },   // Right bottom
    { x: -420, y: -100, scale: 0.92, zIndex: 4 },  // Left top
    { x: -320, y: 250, scale: 0.88, zIndex: 3 },  // Left bottom
];

export default function FloatingProductCards() {
    const { navigateToSection } = usePageTransition();

    return (
        <div className="relative w-[1100px] h-[1100px] hidden lg:flex items-center justify-center pointer-events-none">
            {/* Central glow effect - Larger */}
            <div className="absolute w-[600px] h-[600px] bg-gradient-to-br from-burgundy/5 dark:from-burgundy/10 to-crimson/5 dark:to-crimson/10 rounded-full blur-3xl" />

            {/* Rotating orbit rings - Expanded */}
            <svg className="absolute w-full h-full pointer-events-none" viewBox="0 0 1100 1100">
                <defs>
                    <linearGradient id="orbitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8B0000" stopOpacity="0.2" />
                        <stop offset="50%" stopColor="#DC143C" stopOpacity="0.05" />
                        <stop offset="100%" stopColor="#8B0000" stopOpacity="0.2" />
                    </linearGradient>
                </defs>
                <motion.ellipse
                    cx="550"
                    cy="550"
                    rx="480"
                    ry="350"
                    fill="none"
                    stroke="url(#orbitGradient)"
                    strokeWidth="1"
                    strokeDasharray="8 4"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
                    style={{ transformOrigin: 'center' }}
                />
                <motion.ellipse
                    cx="550"
                    cy="550"
                    rx="350"
                    ry="250"
                    fill="none"
                    stroke="url(#orbitGradient)"
                    strokeWidth="1"
                    strokeDasharray="4 8"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                    style={{ transformOrigin: 'center' }}
                />
            </svg>

            {products.map((product, index) => (
                <motion.div
                    key={product.id}
                    className="absolute pointer-events-auto"
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
                        duration: 1.2,
                        delay: product.delay + 0.3,
                        type: 'spring',
                        stiffness: 60,
                        damping: 15
                    }}
                >
                    <motion.div
                        className="relative group cursor-pointer"
                        onClick={() => navigateToSection(product.id)}
                        animate={{
                            y: [0, -15, 0],
                        }}
                        transition={{
                            duration: 5 + index * 0.5,
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
                            relative p-5 rounded-2xl
                            bg-white/80 dark:bg-slate-900/80
                            backdrop-blur-md
                            border border-slate-200/50 dark:border-white/10
                            shadow-lg shadow-black/5 dark:shadow-black/20
                            overflow-hidden
                            min-w-[150px]
                            transition-all duration-300
                            group-hover:shadow-xl group-hover:shadow-burgundy/20
                            group-hover:border-burgundy/30
                            group-hover:bg-white/95 dark:group-hover:bg-slate-900/95
                        `}>
                            {/* Gradient accent bar */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-burgundy to-crimson" />

                            {/* Hover glow */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-burgundy/20 to-crimson/20 blur-xl -z-10" style={{ transform: 'scale(0.8)' }} />

                            {/* Content */}
                            <div className="relative z-10 flex flex-col items-center gap-3">
                                {/* Logo container */}
                                <div className="relative w-16 h-16 flex items-center justify-center rounded-xl bg-slate-100/50 dark:bg-white/5 p-2 group-hover:bg-white/80 dark:group-hover:bg-white/10 transition-colors">
                                    <Image
                                        src={product.logo}
                                        alt={product.name}
                                        width={56}
                                        height={56}
                                        className="object-contain drop-shadow-sm"
                                    />
                                </div>

                                {/* Text */}
                                <div className="text-center">
                                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white whitespace-nowrap">
                                        {product.name}
                                    </h3>
                                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 whitespace-nowrap">
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
                            className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-burgundy to-crimson"
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
        </div>
    );
}
