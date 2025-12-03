'use client';

import { createContext, useContext, useState, useCallback, ReactNode, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TransitionContextType {
    navigateToSection: (sectionId: string) => void;
}

const TransitionContext = createContext<TransitionContextType | null>(null);

export const usePageTransition = () => {
    const context = useContext(TransitionContext);
    if (!context) {
        throw new Error('usePageTransition must be used within PageTransitionProvider');
    }
    return context;
};

// Typewriter component
function TypewriterText({ text }: { text: string }) {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        setDisplayedText('');
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex <= text.length) {
                setDisplayedText(text.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, 60);

        return () => clearInterval(interval);
    }, [text]);

    return (
        <span className="text-white">{displayedText}</span>
    );
}

export function PageTransitionProvider({ children }: { children: ReactNode }) {
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [targetSection, setTargetSection] = useState<string | null>(null);

    const navigateToSection = useCallback((sectionId: string) => {
        setTargetSection(sectionId);
        setIsTransitioning(true);

        // After animation, scroll to section
        setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'auto', block: 'start' });
            }
        }, 800);

        // End transition
        setTimeout(() => {
            setIsTransitioning(false);
            setTargetSection(null);
        }, 1400);
    }, []);

    const formattedSection = targetSection
        ?.replace(/-/g, ' ')
        .replace(/\b\w/g, c => c.toUpperCase()) || '';

    return (
        <TransitionContext.Provider value={{ navigateToSection }}>
            {children}

            <AnimatePresence>
                {isTransitioning && (
                    <motion.div
                        className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/70 backdrop-blur-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                        {/* Subtle glow behind text */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-burgundy/10 rounded-full blur-[100px]" />

                        {/* Terminal text with cursor */}
                        <motion.div
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1, duration: 0.3 }}
                            className="relative font-mono text-2xl md:text-3xl flex items-center"
                        >
                            <TypewriterText text={formattedSection} />
                            <motion.span
                                animate={{ opacity: [1, 1, 0, 0] }}
                                transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
                                className="inline-block w-[0.5em] h-[1.15em] bg-burgundy ml-1"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </TransitionContext.Provider>
    );
}
