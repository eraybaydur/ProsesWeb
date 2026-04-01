'use client';

import { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface Props {
    color?: string;
    gridSize?: number;
    pulseSpeed?: number;
    className?: string;
}

/** Grid of squares that pulse in a radial wave pattern */
export default function PulseGrid({
    color = '#f59e0b',
    gridSize = 40,
    pulseSpeed = 0.004,
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
            time += pulseSpeed;

            const cols = Math.ceil(w / gridSize) + 1;
            const rows = Math.ceil(h / gridSize) + 1;
            const cx = w / 2;
            const cy = h / 2;

            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    const x = c * gridSize;
                    const y = r * gridSize;

                    const dx = x - cx;
                    const dy = y - cy;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    const pulse = Math.sin(dist * 0.015 - time * 4);
                    const scale = Math.max(0, pulse);
                    const alpha = scale * 0.4;
                    const size = gridSize * 0.3 * scale;

                    if (alpha < 0.01) continue;

                    ctx.globalAlpha = alpha;
                    ctx.fillStyle = color;

                    // Rounded rectangle
                    const radius = size * 0.3;
                    const sx = x + (gridSize - size) / 2;
                    const sy = y + (gridSize - size) / 2;

                    ctx.beginPath();
                    ctx.roundRect(sx, sy, size, size, radius);
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
    }, [color, gridSize, pulseSpeed]);

    return (
        <canvas
            ref={canvasRef}
            className={cn('absolute inset-0 w-full h-full pointer-events-none', className)}
        />
    );
}
