import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { solutions, getSolutionBySlug } from '@/lib/solutions';
import { buildSolutionJsonLd, siteConfig } from '@/lib/seo';
import { SolutionPageClient } from '@/components/pages/SolutionPageClient';

export async function generateStaticParams() {
  return solutions.map(s => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) return {};

  return {
    title: solution.seo.title,
    description: solution.seo.description,
    keywords: solution.seo.keywords,
    alternates: { canonical: `/cozumler/${solution.slug}` },
    openGraph: {
      title: solution.seo.title,
      description: solution.seo.description,
      url: `${siteConfig.url}/cozumler/${solution.slug}`,
      type: 'website',
      locale: 'tr_TR',
      images: [{ url: solution.logo, alt: solution.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: solution.seo.title,
      description: solution.seo.description,
      images: [solution.logo],
    },
  };
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) notFound();

  const jsonLd = buildSolutionJsonLd(solution);
  const { icon, ...solutionData } = solution;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SolutionPageClient solution={solutionData} />
    </>
  );
}
