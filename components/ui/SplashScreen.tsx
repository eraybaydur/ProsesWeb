'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const text = 'Proses Yazılım';

export default function SplashScreen() {
    const [isLoading, setIsLoading] = useState(true);
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        // Typewriter effect
        let currentIndex = 0;
        const typeInterval = setInterval(() => {
            if (currentIndex <= text.length) {
                setDisplayedText(text.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typeInterval);
            }
        }, 80);

        // Exit after typing completes
        const timer = setTimeout(() => setIsLoading(false), 1800);

        return () => {
            clearInterval(typeInterval);
            clearTimeout(timer);
        };
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-xl"
                >
                    {/* Text with cursor */}
                    <div className="font-mono text-xl md:text-2xl flex items-center">
                        <span className="text-white/90">{displayedText}</span>
                        <motion.span
                            animate={{ opacity: [1, 1, 0, 0] }}
                            transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
                            className="inline-block w-[0.45em] h-[1.1em] bg-burgundy ml-1"
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
