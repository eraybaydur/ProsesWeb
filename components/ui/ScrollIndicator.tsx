'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function ScrollIndicator({ label = 'Kesfet' }: { label?: string }) {
    return (
        <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); window.scrollTo({ top: window.innerHeight, behavior: 'smooth' }); } }}
            aria-label={label}
        >
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                {label}
            </span>
            <motion.div
                className="w-6 h-10 rounded-full border-2 border-slate-300 dark:border-slate-600 flex items-start justify-center p-1"
                whileHover={{ borderColor: '#10b981' }}
            >
                <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-burgundy"
                    animate={{ y: [0, 16, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
            </motion.div>
            <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
                <ChevronDown className="w-5 h-5 text-slate-400" />
            </motion.div>
        </motion.div>
    );
}
