import { API_URL } from "@/components/common/Constants";

export type ProductsType = {
  id: string;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string | URL;
};

export async function getProducts(): Promise<ProductsType[]> {
  try {
    const res = await fetch(`${API_URL}/products`);

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
