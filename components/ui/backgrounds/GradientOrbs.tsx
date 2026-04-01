'use client';

import { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface Props {
    colors?: string[];
    orbCount?: number;
    speed?: number;
    blur?: number;
    className?: string;
}

/** Large, soft gradient orbs that drift and morph — premium aesthetic */
export default function GradientOrbs({
    colors = ['#db1a5d', '#e05572', '#ff7eb3'],
    orbCount = 5,
    speed = 0.3,
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

        interface Orb {
            x: number; y: number;
            vx: number; vy: number;
            radius: number;
            baseRadius: number;
            color: string;
            phase: number;
            morphPhase: number;
        }

        let orbs: Orb[] = [];

        function init() {
            const rect = canvas!.getBoundingClientRect();
            w = rect.width;
            h = rect.height;
            canvas!.width = w;
            canvas!.height = h;

            const minDim = Math.min(w, h);
            orbs = Array.from({ length: orbCount }, (_, i) => {
                const baseRadius = minDim * (0.18 + Math.random() * 0.22);
                return {
                    x: w * (0.15 + Math.random() * 0.7),
                    y: h * (0.15 + Math.random() * 0.7),
                    vx: (Math.random() - 0.5) * speed * 0.5,
                    vy: (Math.random() - 0.5) * speed * 0.5,
                    radius: baseRadius,
                    baseRadius,
                    color: colors[i % colors.length],
                    phase: Math.random() * Math.PI * 2,
                    morphPhase: Math.random() * Math.PI * 2,
                };
            });
        }

        init();
        window.addEventListener('resize', init);

        let time = 0;

        function frame() {
            if (!ctx) return;
            ctx.clearRect(0, 0, w, h);
            time += 0.008 * speed;

            for (const orb of orbs) {
                // Smooth drift
                orb.x += orb.vx + Math.sin(time * 0.7 + orb.phase) * 0.3;
                orb.y += orb.vy + Math.cos(time * 0.5 + orb.phase) * 0.3;

                // Soft boundary bounce
                const margin = orb.baseRadius * 0.5;
                if (orb.x < -margin) orb.vx = Math.abs(orb.vx) * 0.8;
                if (orb.x > w + margin) orb.vx = -Math.abs(orb.vx) * 0.8;
                if (orb.y < -margin) orb.vy = Math.abs(orb.vy) * 0.8;
                if (orb.y > h + margin) orb.vy = -Math.abs(orb.vy) * 0.8;

                // Pulsing radius
                const pulse = Math.sin(time * 1.5 + orb.morphPhase) * 0.12;
                const r = orb.baseRadius * (1 + pulse);

                // Draw soft gradient orb
                const gradient = ctx.createRadialGradient(
                    orb.x, orb.y, 0,
                    orb.x, orb.y, r
                );
                gradient.addColorStop(0, orb.color + '55');
                gradient.addColorStop(0.4, orb.color + '30');
                gradient.addColorStop(0.7, orb.color + '15');
                gradient.addColorStop(1, orb.color + '00');

                ctx.globalCompositeOperation = 'lighter';
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(orb.x, orb.y, r, 0, Math.PI * 2);
                ctx.fill();
            }

            ctx.globalCompositeOperation = 'source-over';
            rafRef.current = requestAnimationFrame(frame);
        }

        rafRef.current = requestAnimationFrame(frame);

        return () => {
            cancelAnimationFrame(rafRef.current);
            window.removeEventListener('resize', init);
        };
    }, [colors, orbCount, speed]);

    return (
        <canvas
            ref={canvasRef}
            style={{ filter: `blur(${blur}px)` }}
            className={cn('absolute inset-0 w-full h-full pointer-events-none', className)}
        />
    );
}
