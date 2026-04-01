'use client';

import { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface Props {
    color?: string;
    dotSize?: number;
    gap?: number;
    waveSpeed?: number;
    waveAmplitude?: number;
    className?: string;
}

/** Animated dot grid with a radial wave ripple effect */
export default function DotGrid({
    color = '#10b981',
    dotSize = 2,
    gap = 28,
    waveSpeed = 0.003,
    waveAmplitude = 4,
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
            time += waveSpeed;

            const cols = Math.ceil(w / gap);
            const rows = Math.ceil(h / gap);
            const cx = w / 2;
            const cy = h / 2;

            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    const baseX = c * gap + gap / 2;
                    const baseY = r * gap + gap / 2;

                    const dx = baseX - cx;
                    const dy = baseY - cy;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    const wave = Math.sin(dist * 0.02 - time * 3) * waveAmplitude;
                    const x = baseX + (dx / (dist || 1)) * wave * 0.3;
                    const y = baseY + (dy / (dist || 1)) * wave * 0.3;

                    const scale = 0.5 + 0.5 * Math.sin(dist * 0.015 - time * 2);
                    const alpha = 0.25 + scale * 0.55;
                    const size = dotSize * (0.6 + scale * 0.6);

                    ctx.globalAlpha = alpha;
                    ctx.fillStyle = color;
                    ctx.beginPath();
                    ctx.arc(x, y, size, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            ctx.globalAlpha = 1;
            rafRef.current = requestAnimationFrame(frame);
        }

        rafRef.current = requestAnimationFrame(frame);

        return () => {
            cancelAnimationFrame(rafRef.current);
            window.removeEventListener('resize', resize);
        };
    }, [color, dotSize, gap, waveSpeed, waveAmplitude]);

    return (
        <canvas
            ref={canvasRef}
            className={cn('absolute inset-0 w-full h-full pointer-events-none', className)}
        />
    );
}
