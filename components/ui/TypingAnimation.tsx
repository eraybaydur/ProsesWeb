'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TypingAnimationProps {
    words: string[];
    className?: string;
    cursorClassName?: string;
    typingSpeed?: number;
    deletingSpeed?: number;
    delayBetweenWords?: number;
}

export default function TypingAnimation({
    words,
    className,
    cursorClassName,
    typingSpeed = 100,
    deletingSpeed = 50,
    delayBetweenWords = 2000,
}: TypingAnimationProps) {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [isWaiting, setIsWaiting] = useState(false);

    useEffect(() => {
        const currentWord = words[currentWordIndex];

        if (isWaiting) {
            const waitTimer = setTimeout(() => {
                setIsWaiting(false);
                setIsDeleting(true);
            }, delayBetweenWords);
            return () => clearTimeout(waitTimer);
        }

        if (isDeleting) {
            if (currentText === '') {
                setIsDeleting(false);
                setCurrentWordIndex((prev) => (prev + 1) % words.length);
            } else {
                const deleteTimer = setTimeout(() => {
                    setCurrentText(currentText.slice(0, -1));
                }, deletingSpeed);
                return () => clearTimeout(deleteTimer);
            }
        } else {
            if (currentText === currentWord) {
                setIsWaiting(true);
            } else {
                const typeTimer = setTimeout(() => {
                    setCurrentText(currentWord.slice(0, currentText.length + 1));
                }, typingSpeed);
                return () => clearTimeout(typeTimer);
            }
        }
    }, [currentText, isDeleting, isWaiting, currentWordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords]);

    return (
        <span className={cn('relative inline-flex', className)}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-burgundy via-crimson to-accent-red">
                {currentText}
            </span>
            <motion.span
                className={cn(
                    'inline-block w-[0.45em] h-[1.1em] bg-burgundy ml-1',
                    cursorClassName
                )}
                animate={{ opacity: [1, 1, 0, 0] }}
                transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
            />
        </span>
    );
}
