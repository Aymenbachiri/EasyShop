export type ProductsType = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string | URL;
};

export async function getProducts(): Promise<ProductsType[]> {
  try {
    const res = await fetch(`https://fakestoreapi.com/products`, {
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
