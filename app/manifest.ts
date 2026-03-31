import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "Proses",
    description:
      "Logo Yazılım çözümleri, ERP danışmanlığı, e-Dönüşüm ve özel entegrasyon hizmetleri.",
    start_url: "/",
    display: "standalone",
    background_color: "#0B1220",
    theme_color: "#db1a5d",
    lang: "tr-TR",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
