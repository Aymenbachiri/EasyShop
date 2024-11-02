import { type ProductsType } from "./getProducts";

export async function getProductById(productId: number): Promise<ProductsType> {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`, {
      cache: "no-store",
    });

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
