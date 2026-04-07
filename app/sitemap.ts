import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/seo';
import { solutions, services, regions } from '@/lib/solutions';

const LAST_UPDATED = '2026-04-01';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(LAST_UPDATED);

  const solutionUrls = solutions.map(s => ({
    url: `${siteConfig.url}/cozumler/${s.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: ['logo-tiger-3', 'logo-go-wings', 'logo-crm'].includes(s.slug) ? 0.9 : 0.8,
  }));

  const serviceUrls = services.map(s => ({
    url: `${siteConfig.url}/hizmetler/${s.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: s.slug === 'e-donusum' ? 0.9 : 0.8,
  }));

  const regionUrls = regions.map(r => ({
    url: `${siteConfig.url}/${r.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [
    { url: siteConfig.url, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${siteConfig.url}/cozumler`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteConfig.url}/hizmetler`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteConfig.url}/iletisim`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    ...solutionUrls,
    ...serviceUrls,
    ...regionUrls,
  ];
}
