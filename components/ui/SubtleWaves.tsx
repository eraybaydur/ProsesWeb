'use client';

import { motion } from 'framer-motion';

export default function SubtleWaves() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Wave layers */}
            <svg
                className="absolute bottom-0 left-0 w-full h-[70%] opacity-30 dark:opacity-40"
                viewBox="0 0 1440 600"
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#059669" stopOpacity="0.5" />
                        <stop offset="50%" stopColor="#10b981" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#059669" stopOpacity="0.5" />
                    </linearGradient>
                    <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
                        <stop offset="50%" stopColor="#34d399" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0.4" />
                    </linearGradient>
                    <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#047857" stopOpacity="0.3" />
                        <stop offset="50%" stopColor="#059669" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#047857" stopOpacity="0.3" />
                    </linearGradient>
                </defs>

                {/* Wave 1 - Back, slowest */}
                <motion.path
                    d="M0,300 C150,250 350,350 500,300 C650,250 850,350 1000,300 C1150,250 1350,350 1440,300 L1440,600 L0,600 Z"
                    fill="url(#waveGradient3)"
                    animate={{
                        d: [
                            "M0,300 C150,250 350,350 500,300 C650,250 850,350 1000,300 C1150,250 1350,350 1440,300 L1440,600 L0,600 Z",
                            "M0,320 C150,370 350,270 500,320 C650,370 850,270 1000,320 C1150,370 1350,270 1440,320 L1440,600 L0,600 Z",
                            "M0,300 C150,250 350,350 500,300 C650,250 850,350 1000,300 C1150,250 1350,350 1440,300 L1440,600 L0,600 Z",
                        ],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Wave 2 - Middle */}
                <motion.path
                    d="M0,350 C200,300 400,400 600,350 C800,300 1000,400 1200,350 C1350,310 1400,380 1440,350 L1440,600 L0,600 Z"
                    fill="url(#waveGradient1)"
                    animate={{
                        d: [
                            "M0,350 C200,300 400,400 600,350 C800,300 1000,400 1200,350 C1350,310 1400,380 1440,350 L1440,600 L0,600 Z",
                            "M0,370 C200,420 400,320 600,370 C800,420 1000,320 1200,370 C1350,410 1400,340 1440,370 L1440,600 L0,600 Z",
                            "M0,350 C200,300 400,400 600,350 C800,300 1000,400 1200,350 C1350,310 1400,380 1440,350 L1440,600 L0,600 Z",
                        ],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Wave 3 - Front, fastest */}
                <motion.path
                    d="M0,400 C180,360 360,440 540,400 C720,360 900,440 1080,400 C1260,360 1380,420 1440,400 L1440,600 L0,600 Z"
                    fill="url(#waveGradient2)"
                    animate={{
                        d: [
                            "M0,400 C180,360 360,440 540,400 C720,360 900,440 1080,400 C1260,360 1380,420 1440,400 L1440,600 L0,600 Z",
                            "M0,420 C180,460 360,380 540,420 C720,460 900,380 1080,420 C1260,460 1380,400 1440,420 L1440,600 L0,600 Z",
                            "M0,400 C180,360 360,440 540,400 C720,360 900,440 1080,400 C1260,360 1380,420 1440,400 L1440,600 L0,600 Z",
                        ],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </svg>

            {/* Top subtle wave - decorative */}
            <svg
                className="absolute top-0 left-0 w-full h-[30%] opacity-10 dark:opacity-15 rotate-180"
                viewBox="0 0 1440 300"
                preserveAspectRatio="none"
            >
                <motion.path
                    d="M0,150 C240,100 480,200 720,150 C960,100 1200,200 1440,150 L1440,300 L0,300 Z"
                    fill="url(#waveGradient1)"
                    animate={{
                        d: [
                            "M0,150 C240,100 480,200 720,150 C960,100 1200,200 1440,150 L1440,300 L0,300 Z",
                            "M0,170 C240,220 480,120 720,170 C960,220 1200,120 1440,170 L1440,300 L0,300 Z",
                            "M0,150 C240,100 480,200 720,150 C960,100 1200,200 1440,150 L1440,300 L0,300 Z",
                        ],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </svg>
        </div>
    );
}
