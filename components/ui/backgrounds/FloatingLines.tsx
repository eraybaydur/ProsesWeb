'use client';

import { useEffect, useRef } from 'react';
import {
    Clock, Mesh, OrthographicCamera, PlaneGeometry,
    Scene, ShaderMaterial, Vector2, Vector3, WebGLRenderer,
} from 'three';

const vertexShader = `
precision highp float;
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
precision highp float;

uniform float iTime;
uniform vec3  iResolution;
uniform float animationSpeed;
uniform bool enableTop;
uniform bool enableMiddle;
uniform bool enableBottom;
uniform int topLineCount;
uniform int middleLineCount;
uniform int bottomLineCount;
uniform float topLineDistance;
uniform float middleLineDistance;
uniform float bottomLineDistance;
uniform vec3 topWavePosition;
uniform vec3 middleWavePosition;
uniform vec3 bottomWavePosition;
uniform vec3 lineGradient[8];
uniform int lineGradientCount;

const vec3 BLACK = vec3(0.0);

mat2 rotate(float r) {
  return mat2(cos(r), sin(r), -sin(r), cos(r));
}

vec3 getLineColor(float t) {
  if (lineGradientCount <= 0) return vec3(1.0);
  if (lineGradientCount == 1) return lineGradient[0];
  float clampedT = clamp(t, 0.0, 0.9999);
  float scaled = clampedT * float(lineGradientCount - 1);
  int idx = int(floor(scaled));
  float f = fract(scaled);
  int idx2 = min(idx + 1, lineGradientCount - 1);
  return mix(lineGradient[idx], lineGradient[idx2], f) * 0.5;
}

float wave(vec2 uv, float offset) {
  float time = iTime * animationSpeed;
  float x_movement = time * 0.1;
  float amp = sin(offset + time * 0.2) * 0.3;
  float y = sin(uv.x + offset + x_movement) * amp;
  float m = uv.y - y;
  return 0.0175 / max(abs(m) + 0.01, 1e-3) + 0.01;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 baseUv = (2.0 * fragCoord - iResolution.xy) / iResolution.y;
  baseUv.y *= -1.0;
  vec3 col = vec3(0.0);

  if (enableBottom) {
    for (int i = 0; i < bottomLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(bottomLineCount - 1), 1.0);
      vec3 lineCol = getLineColor(t);
      float angle = bottomWavePosition.z * log(length(baseUv) + 1.0);
      vec2 ruv = baseUv * rotate(angle);
      col += lineCol * wave(
        ruv + vec2(bottomLineDistance * fi + bottomWavePosition.x, bottomWavePosition.y),
        1.5 + 0.2 * fi
      ) * 0.2;
    }
  }

  if (enableMiddle) {
    for (int i = 0; i < middleLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(middleLineCount - 1), 1.0);
      vec3 lineCol = getLineColor(t);
      float angle = middleWavePosition.z * log(length(baseUv) + 1.0);
      vec2 ruv = baseUv * rotate(angle);
      col += lineCol * wave(
        ruv + vec2(middleLineDistance * fi + middleWavePosition.x, middleWavePosition.y),
        2.0 + 0.15 * fi
      );
    }
  }

  if (enableTop) {
    for (int i = 0; i < topLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(topLineCount - 1), 1.0);
      vec3 lineCol = getLineColor(t);
      float angle = topWavePosition.z * log(length(baseUv) + 1.0);
      vec2 ruv = baseUv * rotate(angle);
      ruv.x *= -1.0;
      col += lineCol * wave(
        ruv + vec2(topLineDistance * fi + topWavePosition.x, topWavePosition.y),
        1.0 + 0.2 * fi
      ) * 0.1;
    }
  }

  float brightness = max(col.r, max(col.g, col.b));
  fragColor = vec4(col, brightness);
}

void main() {
  vec4 color = vec4(0.0);
  mainImage(color, gl_FragCoord.xy);
  gl_FragColor = color;
}
`;

const MAX_GRADIENT_STOPS = 8;

function hexToVec3(hex: string): Vector3 {
    let v = hex.trim().replace('#', '');
    if (v.length === 3) v = v[0]+v[0]+v[1]+v[1]+v[2]+v[2];
    const r = parseInt(v.slice(0,2),16)/255;
    const g = parseInt(v.slice(2,4),16)/255;
    const b = parseInt(v.slice(4,6),16)/255;
    return new Vector3(r, g, b);
}

interface WavePos { x?: number; y?: number; rotate?: number; }

interface Props {
    linesGradient?: string[];
    enabledWaves?: ('top'|'middle'|'bottom')[];
    lineCount?: number | number[];
    lineDistance?: number | number[];
    topWavePosition?: WavePos;
    middleWavePosition?: WavePos;
    bottomWavePosition?: WavePos;
    animationSpeed?: number;
    className?: string;
}

export default function FloatingLines({
    linesGradient,
    enabledWaves = ['top','middle','bottom'],
    lineCount = [6],
    lineDistance = [5],
    topWavePosition,
    middleWavePosition,
    bottomWavePosition = { x: 2.0, y: -0.7, rotate: -1 },
    animationSpeed = 1,
    className,
}: Props) {
    const containerRef = useRef<HTMLDivElement>(null);

    const getCount = (wt: string) => {
        if (typeof lineCount === 'number') return lineCount;
        const i = enabledWaves.indexOf(wt as 'top'|'middle'|'bottom');
        return i >= 0 ? (lineCount[i] ?? 6) : 0;
    };
    const getDist = (wt: string) => {
        if (typeof lineDistance === 'number') return lineDistance;
        const i = enabledWaves.indexOf(wt as 'top'|'middle'|'bottom');
        return i >= 0 ? (lineDistance[i] ?? 0.1) : 0.1;
    };

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        let active = true;

        const scene = new Scene();
        const camera = new OrthographicCamera(-1,1,1,-1,0,1);
        camera.position.z = 1;

        const renderer = new WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        renderer.domElement.style.width = '100%';
        renderer.domElement.style.height = '100%';
        container.appendChild(renderer.domElement);

        const uniforms: Record<string, { value: unknown }> = {
            iTime: { value: 0 },
            iResolution: { value: new Vector3(1,1,1) },
            animationSpeed: { value: animationSpeed },
            enableTop: { value: enabledWaves.includes('top') },
            enableMiddle: { value: enabledWaves.includes('middle') },
            enableBottom: { value: enabledWaves.includes('bottom') },
            topLineCount: { value: enabledWaves.includes('top') ? getCount('top') : 0 },
            middleLineCount: { value: enabledWaves.includes('middle') ? getCount('middle') : 0 },
            bottomLineCount: { value: enabledWaves.includes('bottom') ? getCount('bottom') : 0 },
            topLineDistance: { value: (enabledWaves.includes('top') ? getDist('top') : 0.01) * 0.01 },
            middleLineDistance: { value: (enabledWaves.includes('middle') ? getDist('middle') : 0.01) * 0.01 },
            bottomLineDistance: { value: (enabledWaves.includes('bottom') ? getDist('bottom') : 0.01) * 0.01 },
            topWavePosition: { value: new Vector3(topWavePosition?.x ?? 10, topWavePosition?.y ?? 0.5, topWavePosition?.rotate ?? -0.4) },
            middleWavePosition: { value: new Vector3(middleWavePosition?.x ?? 5, middleWavePosition?.y ?? 0, middleWavePosition?.rotate ?? 0.2) },
            bottomWavePosition: { value: new Vector3(bottomWavePosition?.x ?? 2, bottomWavePosition?.y ?? -0.7, bottomWavePosition?.rotate ?? 0.4) },
            lineGradient: { value: Array.from({ length: MAX_GRADIENT_STOPS }, () => new Vector3(1,1,1)) },
            lineGradientCount: { value: 0 },
        };

        if (linesGradient && linesGradient.length > 0) {
            const stops = linesGradient.slice(0, MAX_GRADIENT_STOPS);
            uniforms.lineGradientCount.value = stops.length;
            stops.forEach((hex, i) => {
                const c = hexToVec3(hex);
                (uniforms.lineGradient.value as Vector3[])[i].set(c.x, c.y, c.z);
            });
        }

        const material = new ShaderMaterial({ uniforms, vertexShader, fragmentShader, transparent: true });
        const geometry = new PlaneGeometry(2,2);
        scene.add(new Mesh(geometry, material));

        const clock = new Clock();

        const setSize = () => {
            if (!active) return;
            const w = container.clientWidth || 1;
            const h = container.clientHeight || 1;
            renderer.setSize(w, h, false);
            (uniforms.iResolution.value as Vector3).set(renderer.domElement.width, renderer.domElement.height, 1);
        };
        setSize();

        const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(() => active && setSize()) : null;
        if (ro) ro.observe(container);

        let raf = 0;
        const loop = () => {
            if (!active) return;
            uniforms.iTime.value = clock.getElapsedTime();
            renderer.render(scene, camera);
            raf = requestAnimationFrame(loop);
        };
        loop();

        return () => {
            active = false;
            cancelAnimationFrame(raf);
            if (ro) ro.disconnect();
            geometry.dispose();
            material.dispose();
            renderer.dispose();
            renderer.forceContextLoss();
            renderer.domElement.remove();
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div
            ref={containerRef}
            className={className}
            style={{ position: 'absolute', inset: 0, mixBlendMode: 'screen' }}
        />
    );
}
