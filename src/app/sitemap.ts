import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://easyshop.vercel.app",
      lastModified: "2024-10-19",
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://easyshop.vercel.app/about",
      lastModified: "2024-10-19",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://easyshop.vercel.app/signin",
      lastModified: "2024-10-19",
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://easyshop.vercel.app/signup",
      lastModified: "2024-10-19",
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://easyshop.vercel.app/products",
      lastModified: "2024-10-19",
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];
}
