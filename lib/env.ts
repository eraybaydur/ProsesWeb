const DEFAULT_SITE_URL = "https://prosesyazilim.com";

const normalizeUrl = (value: string) => value.trim().replace(/\/+$/, "");

const getValidatedSiteUrl = () => {
  const raw = process.env.NEXT_PUBLIC_SITE_URL ?? process.env.SITE_URL ?? DEFAULT_SITE_URL;
  const normalized = normalizeUrl(raw);

  if (!URL.canParse(normalized)) {
    throw new Error(
      `Geçersiz SITE_URL/NEXT_PUBLIC_SITE_URL: "${raw}". Örnek: "https://prosesyazilim.com"`
    );
  }

  return normalized;
};

export const siteUrl = getValidatedSiteUrl();
