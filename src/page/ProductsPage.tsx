import { ProductCard } from "@/app/products/_components/ProductCard";
import {
  getProducts,
  type ProductsType,
} from "@/app/products/_lib/getProducts";

export default async function ProductsPage() {
  const products: ProductsType[] = await getProducts();

  return (
    <main className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </section>
    </main>
  );
}
