'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const toggleVisibility = () => {
            const scrolled = window.scrollY;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

            // Show button after scrolling 400px
            setIsVisible(scrolled > 400);

            // Calculate scroll progress percentage
            setScrollProgress((scrolled / maxScroll) * 100);
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 group"
                    aria-label="Başa dön"
                >
                    {/* Progress ring background */}
                    <div className="relative w-14 h-14">
                        {/* Background circle */}
                        <div className="absolute inset-0 rounded-full bg-burgundy shadow-xl shadow-burgundy/30 dark:shadow-burgundy/40 border border-burgundy" />

                        {/* Progress ring SVG */}
                        <svg
                            className="absolute inset-0 w-14 h-14 -rotate-90"
                            viewBox="0 0 56 56"
                        >
                            {/* Background track */}
                            <circle
                                cx="28"
                                cy="28"
                                r="24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                className="text-white/20"
                            />
                            {/* Progress indicator */}
                            <motion.circle
                                cx="28"
                                cy="28"
                                r="24"
                                fill="none"
                                stroke="url(#progressGradient)"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeDasharray={150.8}
                                strokeDashoffset={150.8 - (150.8 * scrollProgress) / 100}
                                initial={{ strokeDashoffset: 150.8 }}
                                animate={{ strokeDashoffset: 150.8 - (150.8 * scrollProgress) / 100 }}
                                transition={{ duration: 0.1 }}
                            />
                            <defs>
                                <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#ffffff" />
                                    <stop offset="100%" stopColor="#fce7ef" />
                                </linearGradient>
                            </defs>
                        </svg>

                        {/* Arrow icon */}
                        <motion.div
                            className="absolute inset-0 flex items-center justify-center"
                            whileHover={{ y: -2 }}
                            transition={{ type: 'spring', stiffness: 400 }}
                        >
                            <ArrowUp className="w-5 h-5 text-white" />
                        </motion.div>

                        {/* Hover glow effect */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-crimson to-burgundy opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                    </div>

                    {/* Tooltip */}
                    <motion.span
                        className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                        initial={{ x: 10, opacity: 0 }}
                        whileHover={{ x: 0, opacity: 1 }}
                    >
                        Başa Dön
                        {/* Tooltip arrow */}
                        <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-slate-900 dark:bg-white rotate-45" />
                    </motion.span>
                </motion.button>
            )}
        </AnimatePresence>
    );
}
