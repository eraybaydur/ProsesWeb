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
        }, 50);

        return () => clearInterval(interval);
    }, [text]);

    return (
        <span className="text-white/90">{displayedText}</span>
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
        }, 600);

        // End transition
        setTimeout(() => {
            setIsTransitioning(false);
            setTargetSection(null);
        }, 1000);
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
                        className="fixed inset-0 z-[9998] flex items-center justify-center bg-[#0a0a0a]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {/* Terminal text with cursor */}
                        <div className="font-mono text-xl md:text-2xl flex items-center">
                            <TypewriterText text={formattedSection} />
                            <motion.span
                                animate={{ opacity: [1, 0] }}
                                transition={{ duration: 0.4, repeat: Infinity, repeatType: 'reverse' }}
                                className="inline-block w-[3px] h-6 md:h-7 bg-burgundy ml-0.5"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </TransitionContext.Provider>
    );
}
