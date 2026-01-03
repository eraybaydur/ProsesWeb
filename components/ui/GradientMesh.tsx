'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GradientMeshProps {
    className?: string;
    interactive?: boolean;
    mouseX?: number;
    mouseY?: number;
}

export default function GradientMesh({
    className,
    interactive = false,
    mouseX = 50,
    mouseY = 50
}: GradientMeshProps) {
    return (
        <div className={cn("absolute inset-0 overflow-hidden", className)}>
            {/* Base gradient layer */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-deep-space dark:via-slate-900 dark:to-deep-space" />

            {/* Animated mesh gradients */}
            <motion.div
                className="absolute inset-0"
                animate={{
                    background: [
                        'radial-gradient(ellipse 80% 50% at 20% 40%, rgba(219, 26, 93, 0.15), transparent 50%), radial-gradient(ellipse 60% 80% at 80% 50%, rgba(220, 48, 99, 0.1), transparent 50%)',
                        'radial-gradient(ellipse 80% 50% at 30% 30%, rgba(219, 26, 93, 0.12), transparent 50%), radial-gradient(ellipse 60% 80% at 70% 60%, rgba(220, 48, 99, 0.15), transparent 50%)',
                        'radial-gradient(ellipse 80% 50% at 20% 40%, rgba(219, 26, 93, 0.15), transparent 50%), radial-gradient(ellipse 60% 80% at 80% 50%, rgba(220, 48, 99, 0.1), transparent 50%)',
                    ],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Interactive spotlight following mouse */}
            {interactive && (
                <motion.div
                    className="absolute inset-0 transition-opacity duration-300"
                    style={{
                        background: `radial-gradient(600px circle at ${mouseX}% ${mouseY}%, rgba(219, 26, 93, 0.08), transparent 40%)`,
                    }}
                />
            )}

            {/* Floating orbs */}
            <motion.div
                className="absolute w-[500px] h-[500px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(219, 26, 93, 0.2) 0%, transparent 70%)',
                    filter: 'blur(60px)',
                }}
                animate={{
                    x: ['-10%', '5%', '-10%'],
                    y: ['-10%', '10%', '-10%'],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(220, 48, 99, 0.15) 0%, transparent 70%)',
                    filter: 'blur(80px)',
                }}
                animate={{
                    x: ['10%', '-5%', '10%'],
                    y: ['10%', '-10%', '10%'],
                    scale: [1.1, 1, 1.1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Noise texture overlay */}
            <div
                className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>
    );
}
