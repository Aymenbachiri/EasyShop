import { apiUrl } from "@/components/common/Constants";
import { type ProductsType } from "./getProducts";
import { notFound } from "next/navigation";

export async function getProductById(productId: string): Promise<ProductsType> {
  try {
    const res = await fetch(`${apiUrl}/${productId}`);

    if (res.status === 404) return notFound();
    if (res.status === 500) return notFound();

    if (!res.ok) {
      throw new Error(
        `Failed to fetch products: ${res.status} ${res.statusText}`,
      );
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}
