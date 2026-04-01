'use client';

import { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface Props {
    color?: string;
    ringCount?: number;
    speed?: number;
    className?: string;
}

/** Floating concentric rings that drift and pulse */
export default function FloatingRings({
    color = '#3b82f6',
    ringCount = 12,
    speed = 0.5,
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

        interface Ring {
            x: number; y: number;
            vx: number; vy: number;
            radius: number;
            baseRadius: number;
            phase: number;
            lineWidth: number;
            alpha: number;
        }

        let rings: Ring[] = [];

        function init() {
            const rect = canvas!.getBoundingClientRect();
            w = rect.width;
            h = rect.height;
            canvas!.width = w;
            canvas!.height = h;

            rings = Array.from({ length: ringCount }, () => ({
                x: Math.random() * w,
                y: Math.random() * h,
                vx: (Math.random() - 0.5) * speed,
                vy: (Math.random() - 0.5) * speed,
                radius: 30 + Math.random() * 80,
                baseRadius: 30 + Math.random() * 80,
                phase: Math.random() * Math.PI * 2,
                lineWidth: 1 + Math.random() * 2,
                alpha: 0.15 + Math.random() * 0.3,
            }));
        }

        init();
        window.addEventListener('resize', init);

        let time = 0;

        function frame() {
            if (!ctx) return;
            ctx.clearRect(0, 0, w, h);
            time += 0.01;

            for (const ring of rings) {
                ring.x += ring.vx;
                ring.y += ring.vy;

                // Wrap around
                if (ring.x < -ring.radius) ring.x = w + ring.radius;
                if (ring.x > w + ring.radius) ring.x = -ring.radius;
                if (ring.y < -ring.radius) ring.y = h + ring.radius;
                if (ring.y > h + ring.radius) ring.y = -ring.radius;

                // Pulsing radius
                const pulse = Math.sin(time * 2 + ring.phase) * 0.15;
                const r = ring.baseRadius * (1 + pulse);

                ctx.globalAlpha = ring.alpha * (0.7 + 0.3 * Math.sin(time + ring.phase));
                ctx.strokeStyle = color;
                ctx.lineWidth = ring.lineWidth;

                // Outer ring
                ctx.beginPath();
                ctx.arc(ring.x, ring.y, r, 0, Math.PI * 2);
                ctx.stroke();

                // Inner ring
                ctx.globalAlpha = ring.alpha * 0.4;
                ctx.lineWidth = ring.lineWidth * 0.5;
                ctx.beginPath();
                ctx.arc(ring.x, ring.y, r * 0.6, 0, Math.PI * 2);
                ctx.stroke();
            }

            ctx.globalAlpha = 1;
            rafRef.current = requestAnimationFrame(frame);
        }

        rafRef.current = requestAnimationFrame(frame);

        return () => {
            cancelAnimationFrame(rafRef.current);
            window.removeEventListener('resize', init);
        };
    }, [color, ringCount, speed]);

    return (
        <canvas
            ref={canvasRef}
            className={cn('absolute inset-0 w-full h-full pointer-events-none', className)}
        />
    );
}
