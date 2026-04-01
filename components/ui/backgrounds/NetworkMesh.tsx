'use client';

import { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface Props {
    color?: string;
    nodeCount?: number;
    connectionDistance?: number;
    speed?: number;
    className?: string;
}

/** Floating nodes connected by lines when near each other */
export default function NetworkMesh({
    color = '#3b82f6',
    nodeCount = 40,
    connectionDistance = 150,
    speed = 0.4,
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

        interface Node {
            x: number; y: number; vx: number; vy: number; size: number;
        }

        let nodes: Node[] = [];

        function init() {
            const rect = canvas!.getBoundingClientRect();
            w = rect.width;
            h = rect.height;
            canvas!.width = w;
            canvas!.height = h;

            nodes = Array.from({ length: nodeCount }, () => ({
                x: Math.random() * w,
                y: Math.random() * h,
                vx: (Math.random() - 0.5) * speed,
                vy: (Math.random() - 0.5) * speed,
                size: 1.5 + Math.random() * 2,
            }));
        }

        init();
        window.addEventListener('resize', init);

        function frame() {
            if (!ctx) return;
            ctx.clearRect(0, 0, w, h);

            // Move nodes
            for (const n of nodes) {
                n.x += n.vx;
                n.y += n.vy;
                if (n.x < 0 || n.x > w) n.vx *= -1;
                if (n.y < 0 || n.y > h) n.vy *= -1;
            }

            // Draw connections
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < connectionDistance) {
                        const alpha = (1 - dist / connectionDistance) * 0.3;
                        ctx.strokeStyle = color;
                        ctx.globalAlpha = alpha;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.stroke();
                    }
                }
            }

            // Draw nodes
            for (const n of nodes) {
                ctx.globalAlpha = 0.6;
                ctx.fillStyle = color;
                ctx.beginPath();
                ctx.arc(n.x, n.y, n.size, 0, Math.PI * 2);
                ctx.fill();
            }

            ctx.globalAlpha = 1;
            rafRef.current = requestAnimationFrame(frame);
        }

        rafRef.current = requestAnimationFrame(frame);

        return () => {
            cancelAnimationFrame(rafRef.current);
            window.removeEventListener('resize', init);
        };
    }, [color, nodeCount, connectionDistance, speed]);

    return (
        <canvas
            ref={canvasRef}
            className={cn('absolute inset-0 w-full h-full pointer-events-none', className)}
        />
    );
}
