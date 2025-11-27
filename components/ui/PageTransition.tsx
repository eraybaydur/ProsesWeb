'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MatrixRain from './MatrixRain';

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

export function PageTransitionProvider({ children }: { children: ReactNode }) {
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [targetSection, setTargetSection] = useState<string | null>(null);

    const navigateToSection = useCallback((sectionId: string) => {
        setTargetSection(sectionId);
        setIsTransitioning(true);

        // After animation peaks, scroll to section
        setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'auto', block: 'start' });
            }
        }, 800); // Slightly longer delay to let the rain fall

        // End transition
        setTimeout(() => {
            setIsTransitioning(false);
            setTargetSection(null);
        }, 1600); // Longer total duration
    }, []);

    return (
        <TransitionContext.Provider value={{ navigateToSection }}>
            {children}

            <AnimatePresence>
                {isTransitioning && (
                    <motion.div
                        className="fixed inset-0 z-[9998] flex items-center justify-center backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <MatrixRain className="absolute inset-0 z-0 opacity-80" color="#DC143C" />

                        <motion.div
                            className="relative z-10 flex flex-col items-center justify-center gap-4 p-12 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.2 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            <div className="text-center">
                                <motion.p
                                    className="text-crimson font-mono text-sm tracking-widest uppercase mb-2"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    SYSTEM ACCESS
                                </motion.p>
                                <motion.h3
                                    className="text-3xl md:text-5xl font-bold text-white font-mono"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    {targetSection?.toUpperCase().replace(/-/g, ' ')}
                                </motion.h3>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </TransitionContext.Provider>
    );
}
