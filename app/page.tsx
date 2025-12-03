'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Stats from '@/components/sections/Stats';
import Services from '@/components/sections/Services';
import TechFlow from '@/components/sections/TechFlow';
import LogoSolutions from '@/components/sections/LogoSolutions';
import SolutionDetails from '@/components/sections/SolutionDetails';
import Features from '@/components/sections/Features';
import References from '@/components/sections/References';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';
import ScrollToTop from '@/components/ui/ScrollToTop';

// Force rebuild
export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-white dark:bg-deep-space text-slate-900 dark:text-white selection:bg-crimson/20 selection:text-crimson dark:selection:bg-crimson/30 dark:selection:text-white">
      <Navbar />

      <TechFlow />
      <Stats />
      <Services />
      <LogoSolutions />
      <ProcessTimeline />
      <SolutionDetails />
      <Features />
      <References />
      <FAQ />
      <CTA />

      <Footer />
      <ScrollToTop />
    </main>
  );
}
