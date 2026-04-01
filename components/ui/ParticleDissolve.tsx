'use client';

import { useRef, useEffect } from 'react';

interface Particle {
    ox: number; oy: number;
    vx: number; vy: number;
    size: number; color: string;
    alpha: number; delay: number;
}

interface Props {
    src: string;
    duration?: number;
    density?: number;
    accentColor?: string;
    onComplete?: () => void;
}

export default function ParticleDissolve({
    src, duration = 1400, density = 65,
    accentColor, onComplete,
}: Props) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const rafRef = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const rect = canvas.getBoundingClientRect();
        const w = Math.floor(rect.width);
        const h = Math.floor(rect.height);
        canvas.width = w;
        canvas.height = h;

        const img = new window.Image();
        img.crossOrigin = 'anonymous';
        img.src = src;

        img.onload = () => {
            ctx.drawImage(img, 0, 0, w, h);
            let pixels: Uint8ClampedArray;
            try { pixels = ctx.getImageData(0, 0, w, h).data; }
            catch { onComplete?.(); return; }

            const cellW = Math.max(Math.floor(w / density), 2);
            const cols = Math.ceil(w / cellW);
            const rows = Math.ceil(h / cellW);
            const particles: Particle[] = [];
            const cx = w / 2, cy = h / 2;
            const maxDist = Math.sqrt(cx * cx + cy * cy);

            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    const x = c * cellW + cellW / 2;
                    const y = r * cellW + cellW / 2;
                    const px = Math.min(Math.floor(x), w - 1);
                    const py = Math.min(Math.floor(y), h - 1);
                    const idx = (py * w + px) * 4;
                    const red = pixels[idx], green = pixels[idx+1], blue = pixels[idx+2], a = pixels[idx+3];
                    if (a < 15) continue;

                    const angle = Math.random() * Math.PI * 2;
                    const speed = 50 + Math.random() * 150;
                    const dist = Math.sqrt((x-cx)**2 + (y-cy)**2);
                    const nd = dist / maxDist;
                    const useAcc = accentColor && Math.random() < 0.1;
                    const color = useAcc ? accentColor : `rgb(${red},${green},${blue})`;

                    particles.push({
                        ox: x, oy: y,
                        vx: Math.cos(angle) * speed,
                        vy: Math.sin(angle) * speed - 30,
                        size: cellW * (0.55 + Math.random() * 0.5),
                        color, alpha: a / 255,
                        delay: nd * 0.3 + Math.random() * 0.08,
                    });
                }
            }

            const t0 = performance.now();
            function frame() {
                if (!ctx) return;
                const elapsed = performance.now() - t0;
                const t = Math.min(elapsed / duration, 1);
                ctx.clearRect(0, 0, w, h);

                const imgAlpha = Math.max(0, 1 - t * 3);
                if (imgAlpha > 0.001) {
                    ctx.globalAlpha = imgAlpha;
                    ctx.drawImage(img, 0, 0, w, h);
                }

                let alive = false;
                for (const p of particles) {
                    const pt = (t - p.delay) / (1 - p.delay);
                    if (pt < 0) {
                        const sa = Math.max(0, 1 - t * 2);
                        if (sa > 0.01) {
                            ctx.globalAlpha = p.alpha * sa;
                            ctx.fillStyle = p.color;
                            ctx.fillRect(p.ox - p.size/2, p.oy - p.size/2, p.size, p.size);
                        }
                        alive = true; continue;
                    }
                    if (pt >= 1) continue;
                    alive = true;
                    const ease = pt * pt;
                    const x = p.ox + p.vx * ease;
                    const y = p.oy + p.vy * ease + ease * ease * 60;
                    const fadeOut = Math.pow(1 - pt, 1.8);
                    const s = p.size * (1 - ease * 0.4);
                    ctx.globalAlpha = p.alpha * fadeOut;
                    ctx.fillStyle = p.color;
                    ctx.beginPath();
                    ctx.arc(x, y, Math.max(s/2, 0.5), 0, Math.PI * 2);
                    ctx.fill();
                }
                ctx.globalAlpha = 1;
                if (!alive || t >= 1) { ctx.clearRect(0, 0, w, h); onComplete?.(); return; }
                rafRef.current = requestAnimationFrame(frame);
            }
            rafRef.current = requestAnimationFrame(frame);
        };

        img.onerror = () => onComplete?.();
        return () => cancelAnimationFrame(rafRef.current);
    }, [src, duration, density, accentColor, onComplete]);

    return (
        <canvas ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 50 }}
        />
    );
}
