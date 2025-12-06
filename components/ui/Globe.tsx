'use client';

import { useEffect, useRef, useState } from 'react';
import createGlobe from 'cobe';

interface GlobeProps {
    className?: string;
    dark?: number;
    baseColor?: [number, number, number];
    glowColor?: [number, number, number];
    markerColor?: [number, number, number];
}

export default function Globe({
    className,
    dark = 1,
    baseColor = [0, 0.5, 0.25], // Matrix green
    glowColor = [0, 1, 0.25], // Bright matrix green
    markerColor = [0, 1, 0.25], // Bright matrix green
}: GlobeProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    // Intersection Observer for lazy loading
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '200px' }
        );

        if (canvasRef.current) {
            observer.observe(canvasRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible || !canvasRef.current) return;

        let phi = 0;
        let animationId: number;
        let globe: ReturnType<typeof createGlobe> | null = null;

        globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 1,
            width: 500,
            height: 500,
            phi: 0,
            theta: 0.25,
            dark,
            diffuse: 1.2,
            mapSamples: 8000,
            mapBrightness: 6,
            baseColor,
            markerColor,
            glowColor,
            markers: [
                // Türkiye - Bursa (Proses lokasyonu)
                { location: [40.1885, 29.0610], size: 0.1 },
                // İstanbul
                { location: [41.0082, 28.9784], size: 0.08 },
                // Ankara
                { location: [39.9334, 32.8597], size: 0.06 },
                // İzmir
                { location: [38.4237, 27.1428], size: 0.05 },
            ],
            onRender: (state) => {
                state.phi = phi;
                phi += 0.002;
            },
        });

        return () => {
            if (globe) {
                globe.destroy();
            }
        };
    }, [isVisible, dark, baseColor, glowColor, markerColor]);

    return (
        <canvas
            ref={canvasRef}
            className={className}
            style={{
                width: 500,
                height: 500,
                maxWidth: '100%',
                aspectRatio: 1,
            }}
        />
    );
}
