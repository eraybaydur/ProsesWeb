# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 website for a Logo ERP solutions provider (Bursa-based). The site features:
- Modern animated hero section with gradient backgrounds and glowing orbs
- Interactive UI components with Framer Motion animations
- Dark/light mode support via next-themes
- Tailwind CSS v4 for styling
- React 19 with React Compiler enabled
- TypeScript with strict mode

## Development Commands

### Running the Development Server
```bash
npm run dev
```
Opens at http://localhost:3000 with hot-reload enabled.

### Building for Production
```bash
npm run build
```
Creates optimized production build in `.next` directory.

### Starting Production Server
```bash
npm start
```
Runs the production build (requires running `npm run build` first).

### Linting
```bash
npm run lint
```
Runs ESLint with Next.js config.

## Architecture

### Directory Structure
- `app/` - Next.js App Router (pages and layouts)
  - `layout.tsx` - Root layout with Geist fonts
  - `page.tsx` - Home page (client component)
  - `globals.css` - Global styles with Tailwind v4, custom CSS variables, and animations
- `components/` - React components organized by type:
  - `ui/` - Reusable UI primitives (MagneticButton, TiltCard, ThemeToggle)
  - `layout/` - Layout components (Navbar, Footer)
  - `sections/` - Page sections (Hero, Stats, Services, Features, References, LogoSolutions)
  - `providers/` - React context providers (theme-provider)
- `public/` - Static assets

### Key Technologies

**Framework & Runtime:**
- Next.js 16 with App Router
- React 19 with React Compiler enabled (`next.config.ts`)
- TypeScript with strict mode and `@/*` path alias

**Styling:**
- Tailwind CSS v4 with inline theme configuration via `@theme inline`
- Dark/light mode: CSS variables adapt via `.dark` class (managed by next-themes)
- Custom CSS variables in `globals.css` for Proses brand colors:
  - `--burgundy: #8B0000` (Dark Red)
  - `--crimson: #DC143C` (Crimson Red)
  - `--dark-red: #6B0000` (Darker Red)
  - `--accent-red: #FF2D2D` (Bright Red Accent)
  - `--deep-space` and `--slate-*` colors change between light/dark modes
- Geist Sans and Geist Mono fonts via `next/font/google`

**Animations:**
- Framer Motion for UI animations and interactions
- Motion components with spring physics for magnetic buttons and tilt cards
- Smooth entrance animations with staggered delays

**Icons:**
- Lucide React for icons

### Component Patterns

**Client Components:**
All interactive components use `'use client'` directive at the top. This includes:
- All components using Framer Motion hooks
- Components with event handlers and state
- Components using browser APIs

**Hero Section Architecture:**
- Modern gradient background with animated burgundy/crimson glowing orbs
- Grid pattern overlay for depth and tech aesthetic
- Animated gradient text using burgundy to crimson gradient
- Floating indicator dots on large screens with red gradient
- Responsive design with mobile-first approach
- Brand logo (logo.png) used in Navbar

**Animation Patterns:**
- `MagneticButton`: Buttons that follow cursor with spring physics using gradient background
- `TiltCard`: Cards that tilt based on mouse position with 3D transforms
- Motion components use `initial`, `animate`, and `transition` props for entrance animations
- `whileInView` for scroll-triggered animations
- Spring animations configured with `stiffness`, `damping`, and `mass`
- Custom `animate-gradient` utility for animated gradient text
- Pulse animations on badge indicators

**CSS Custom Properties:**
Colors are defined as CSS variables in `globals.css` and made available to Tailwind via `@theme inline`. Use Tailwind classes like `bg-deep-space`, `bg-burgundy`, `text-crimson`, etc.

## Important Notes

### Module Resolution
- Path alias `@/*` maps to project root (configured in `tsconfig.json`)
- Always use `@/components/...` instead of relative imports

### Client vs Server Components
- Default to server components unless you need:
  - Interactive hooks (useState, useEffect, etc.)
  - Browser APIs
  - Framer Motion animations
  - Event handlers
- Add `'use client'` directive at top of file when needed

### Styling Conventions
- Use Tailwind utility classes for most styling
- Custom colors available via Tailwind (burgundy, crimson, dark-red, accent-red, deep-space, slate-800, slate-900)
- Color scheme: Red/burgundy theme matching Proses brand logo
- Responsive design with mobile-first approach
- Use `cn()` utility from `clsx` + `tailwind-merge` for conditional classes
- Custom animations: `animate-gradient`, `animate-pulse`, `animate-marquee`, `animate-marquee2`
- Utility classes: `bg-300%` (for gradient size), `delay-1000` (animation delay)
- Custom scrollbar styling with burgundy/crimson colors
- Smooth scrolling enabled globally
- Gradient text using `bg-gradient-to-r from-burgundy to-crimson`

### Animation Best Practices
- Use `viewport={{ once: true }}` for scroll animations to prevent re-triggering
- Stagger animations with delay multipliers (`delay: index * 0.1`)
- Keep spring physics subtle with appropriate stiffness/damping values
- Use `whileInView` for performance-optimized viewport-triggered animations

### TypeScript
- Strict mode enabled
- Target ES2017
- Use proper typing for props (avoid `any`)
