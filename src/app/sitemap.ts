import type { MetadataRoute } from "next";

const locales = ["en", "fr"];
const staticRoutes = ["", "/about", "/products"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const localizedRoutes = staticRoutes.flatMap((route) =>
    locales.map((locale) => ({
      url: `https://easyshop.vercel.app${locale === "en" ? "" : `/${locale}`}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
      alternates: {
        languages: locales.reduce(
          (acc, lang) => {
            acc[lang] =
              `https://easyshop.vercel.app${lang === "en" ? "" : `/${lang}`}${route}`;
            return acc;
          },
          {} as Record<string, string>,
        ),
      },
    })),
  );

  return localizedRoutes;
}
