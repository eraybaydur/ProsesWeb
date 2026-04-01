import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/seo';
import { solutions, services, regions } from '@/lib/solutions';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const solutionUrls = solutions.map(s => ({
    url: `${siteConfig.url}/cozumler/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: ['logo-tiger-3', 'logo-go-3', 'logo-crm'].includes(s.slug) ? 0.9 : 0.8,
  }));

  const serviceUrls = services.map(s => ({
    url: `${siteConfig.url}/hizmetler/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: s.slug === 'e-donusum' ? 0.9 : 0.8,
  }));

  const regionUrls = regions.map(r => ({
    url: `${siteConfig.url}/${r.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [
    { url: siteConfig.url, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${siteConfig.url}/cozumler`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteConfig.url}/iletisim`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    ...solutionUrls,
    ...serviceUrls,
    ...regionUrls,
  ];
}
