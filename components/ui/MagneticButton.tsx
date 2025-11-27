'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef } from 'react';

export default function MagneticButton({ children, className = '', onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) {
    return (
        <motion.button
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative px-8 py-4 rounded-full bg-gradient-to-r from-burgundy via-crimson to-burgundy bg-[length:300%_300%] hover:animate-gradient text-white font-semibold tracking-tight overflow-hidden group shadow-lg hover:shadow-[0_0_30px_rgba(220,20,60,0.4)] transition-all duration-300 ${className}`}
        >
            <span className="relative z-10">{children}</span>
        </motion.button>
    );
}
