'use client';

import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

interface GlassCardProps extends HTMLMotionProps<'div'> {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export default function GlassCard({
    children,
    className,
    hoverEffect = true,
    ...props
}: GlassCardProps) {
    return (
        <motion.div
            className={cn(
                'relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md',
                'shadow-[0_4px_24px_-1px_rgba(0,0,0,0.1)]',
                'dark:bg-black/20 dark:border-white/5',
                hoverEffect && 'hover:bg-white/10 dark:hover:bg-white/5 transition-colors duration-300',
                className
            )}
            {...props}
        >
            {/* Inner glow effect */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
}
