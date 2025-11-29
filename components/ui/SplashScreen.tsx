'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function SplashScreen() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1600);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-md bg-black/40"
                >
                    {/* Glass card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="relative flex flex-col items-center px-14 py-12 rounded-3xl bg-white/[0.02] border border-white/[0.06] shadow-2xl"
                    >
                        {/* Glow effect */}
                        <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-b from-crimson/10 to-transparent blur-2xl" />

                        {/* Logo */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1, duration: 0.3 }}
                            className="w-24 h-24 relative"
                        >
                            <Image
                                src="/logo.webp"
                                alt="Proses"
                                fill
                                className="object-contain"
                                priority
                            />
                        </motion.div>

                        {/* Tech loading indicator */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.25, duration: 0.3 }}
                            className="mt-8"
                        >
                            <div className="relative flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="w-1 bg-gradient-to-t from-burgundy to-crimson rounded-full"
                                        animate={{
                                            height: ['8px', '20px', '8px'],
                                        }}
                                        transition={{
                                            duration: 0.6,
                                            repeat: Infinity,
                                            delay: i * 0.1,
                                            ease: 'easeInOut',
                                        }}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
