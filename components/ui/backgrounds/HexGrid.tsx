'use client';

import { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface Props {
    color?: string;
    size?: number;
    speed?: number;
    className?: string;
}

/** Hexagonal grid with sequential light-up scan effect */
export default function HexGrid({
    color = '#3b82f6',
    size = 32,
    speed = 0.002,
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

        // Draw a single hexagon path
        function hexPath(cx: number, cy: number, r: number) {
            ctx!.beginPath();
            for (let i = 0; i < 6; i++) {
                const angle = (Math.PI / 3) * i - Math.PI / 6;
                const x = cx + r * Math.cos(angle);
                const y = cy + r * Math.sin(angle);
                if (i === 0) ctx!.moveTo(x, y);
                else ctx!.lineTo(x, y);
            }
            ctx!.closePath();
        }

        function frame() {
            if (!ctx) return;
            ctx.clearRect(0, 0, w, h);
            time += speed;

            const hexW = size * 2;
            const hexH = size * Math.sqrt(3);
            const cols = Math.ceil(w / (hexW * 0.75)) + 2;
            const rows = Math.ceil(h / hexH) + 2;

            for (let row = -1; row < rows; row++) {
                for (let col = -1; col < cols; col++) {
                    const offset = row % 2 === 0 ? 0 : hexW * 0.375;
                    const cx = col * hexW * 0.75 + offset;
                    const cy = row * hexH * 0.5;

                    // Distance-based wave scan
                    const dx = cx - w * 0.5;
                    const dy = cy - h * 0.5;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const maxDist = Math.sqrt((w * 0.5) ** 2 + (h * 0.5) ** 2);

                    // Two overlapping waves for continuous movement
                    const wave1 = Math.sin(dist * 0.008 - time * 4);
                    const wave2 = Math.sin(dist * 0.012 - time * 3 + 2);
                    const combined = (wave1 + wave2) * 0.5;

                    const intensity = Math.max(0, combined);
                    const alpha = 0.04 + intensity * 0.35;

                    // Hex outline
                    ctx.globalAlpha = alpha;
                    ctx.strokeStyle = color;
                    ctx.lineWidth = 0.5 + intensity * 1;
                    hexPath(cx, cy, size * 0.9);
                    ctx.stroke();

                    // Fill bright hexes
                    if (intensity > 0.3) {
                        ctx.globalAlpha = (intensity - 0.3) * 0.2;
                        ctx.fillStyle = color;
                        hexPath(cx, cy, size * 0.9);
                        ctx.fill();
                    }
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
    }, [color, size, speed]);

    return (
        <canvas
            ref={canvasRef}
            className={cn('absolute inset-0 w-full h-full pointer-events-none', className)}
        />
    );
}
