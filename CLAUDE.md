# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Next.js 16 website for Proses, a Logo ERP solutions provider based in Bursa, Turkey. Features animated UI with Framer Motion, Lenis smooth scrolling, dark/light mode, and Three.js for 3D effects.

## Development Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm start        # Run production build
npm run lint     # ESLint check
```

## Architecture

### Tech Stack
- **Next.js 16** with App Router, React 19, React Compiler enabled
- **Tailwind CSS v4** with `@theme inline` configuration
- **Framer Motion** for animations
- **Lenis** for smooth scrolling
- **Three.js** for 3D effects
- **next-themes** for dark/light mode
- **Lucide React** for icons

### Component Organization
- `components/ui/` - Reusable primitives (MagneticButton, TiltCard, GlassCard, etc.)
- `components/layout/` - Navbar, Footer
- `components/sections/` - Page sections (Hero, Stats, Services, Features, etc.)
- `components/providers/` - Context providers (theme-provider, SmoothScroll)

### Provider Hierarchy (app/layout.tsx)
```
ThemeProvider → PageTransitionProvider → SmoothScroll → SplashScreen → {children}
```

### Fonts
Four fonts loaded via `next/font/google`:
- `--font-inter` (body text via `--font-sans`)
- `--font-outfit` (headings via `--font-heading`)
- `--font-geist-sans`, `--font-geist-mono`

### Brand Colors (globals.css)
```css
--burgundy: #db1a5d    /* Main Brand */
--crimson: #dc3063     /* Secondary */
--dark-red: #b0154a    /* Darker Variant */
--accent-red: #e05572  /* Lighter Accent */
--deep-space           /* Background - changes light/dark */
```
Available as Tailwind classes: `bg-burgundy`, `text-crimson`, etc.

## Important Patterns

### Client Components
Add `'use client'` directive for components using:
- Framer Motion animations
- React hooks (useState, useEffect)
- Browser APIs or event handlers

### Imports
Always use path alias: `@/components/...` not relative imports.

### Utility Function
`cn()` from `@/lib/utils` for conditional Tailwind classes:
```tsx
import { cn } from "@/lib/utils"
cn("base-class", condition && "conditional-class")
```

### Custom CSS Utilities (globals.css)
- `animate-gradient` - Animated gradient backgrounds (use with `bg-300%`)
- `animate-marquee`, `animate-marquee2` - Scrolling text
- `delay-1000` - 1s animation delay
- `bg-dot` - Dot pattern background

### Animation Patterns
- Use `viewport={{ once: true }}` for scroll animations
- Stagger with `delay: index * 0.1`
- `MagneticButton` - Cursor-following buttons with spring physics
- `TiltCard` - Mouse-position-based 3D tilt effect
