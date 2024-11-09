import type { MetadataRoute } from "next";
import { getProducts, type ProductsType } from "./products/_lib/getProducts";

const staticRoutes = [
  { path: "", lastModified: "2024-11-09T10:54:00.000Z" },
  { path: "/about", lastModified: "2024-11-09T10:54:00.000Z" },
  { path: "/products", lastModified: "2024-11-09T10:54:00.000Z" },
  { path: "/dashboard", lastModified: "2024-11-09T10:54:00.000Z" },
  { path: "/sell-product", lastModified: "2024-11-09T10:54:00.000Z" },
  { path: "/cart", lastModified: "2024-11-09T10:54:00.000Z" },
  { path: "/signin", lastModified: "2024-11-09T10:54:00.000Z" },
  { path: "/signup", lastModified: "2024-11-09T10:54:00.000Z" },
];

async function fetchProductIds(): Promise<{ productId: string }[]> {
  const products: ProductsType[] = await getProducts();
  return products.map((product) => ({
    productId: product.id,
  }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = staticRoutes.map((route) => ({
    url: `https://easyshop.vercel.app${route.path}`,
    lastModified: route.lastModified,
    changeFrequency: "weekly" as const,
    priority: route.path === "" ? 1 : 0.8,
  }));

  const productIds = await fetchProductIds();
  const productRoutes = productIds.map(({ productId }) => ({
    url: `https://easyshop.vercel.app/products/${productId}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...routes, ...productRoutes];
}
