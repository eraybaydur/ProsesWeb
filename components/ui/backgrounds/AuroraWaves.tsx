'use client';

import { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface Props {
    colors?: string[];
    speed?: number;
    blur?: number;
    className?: string;
}

/** Soft flowing aurora / gradient wave bands */
export default function AuroraWaves({
    colors = ['#a855f7', '#06b6d4', '#10b981'],
    speed = 0.0008,
    blur = 80,
    className,
}: Props) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const rafRef = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let w = 0, h = 0;

        function resize() {
            const rect = canvas!.getBoundingClientRect();
            w = rect.width;
            h = rect.height;
            canvas!.width = w;
            canvas!.height = h;
        }
        resize();
        window.addEventListener('resize', resize);

        let time = 0;

        function frame() {
            if (!ctx) return;
            ctx.clearRect(0, 0, w, h);
            time += speed;

            ctx.filter = `blur(${blur}px)`;

            colors.forEach((color, i) => {
                const offset = i * 2.1;
                const yBase = h * (0.3 + i * 0.15);

                ctx.beginPath();
                ctx.moveTo(-100, h);

                for (let x = -100; x <= w + 100; x += 20) {
                    const y = yBase
                        + Math.sin(x * 0.003 + time * 3 + offset) * (h * 0.12)
                        + Math.sin(x * 0.007 + time * 2 + offset * 2) * (h * 0.06)
                        + Math.cos(x * 0.001 + time * 1.5) * (h * 0.04);
                    ctx.lineTo(x, y);
                }

                ctx.lineTo(w + 100, h);
                ctx.closePath();

                ctx.globalAlpha = 0.22;
                ctx.fillStyle = color;
                ctx.fill();
            });

            ctx.filter = 'none';
            ctx.globalAlpha = 1;
            rafRef.current = requestAnimationFrame(frame);
        }

        rafRef.current = requestAnimationFrame(frame);

        return () => {
            cancelAnimationFrame(rafRef.current);
            window.removeEventListener('resize', resize);
        };
    }, [colors, speed, blur]);

    return (
        <canvas
            ref={canvasRef}
            className={cn('absolute inset-0 w-full h-full pointer-events-none', className)}
        />
    );
}
