import { EditProductForm } from "@/app/edit-product/_components/EditProductForm";
import { EditProductFormFallback } from "@/app/edit-product/_components/EditProductFormFallback";
import { getProductById } from "@/app/products/_lib/getProductById";
import { type ProductsType } from "@/app/products/_lib/getProducts";
import { MySuspense } from "@/lib/utils/MySuspense";
import { ProtectedRoute } from "@/lib/utils/ProtectedRoute";

export default async function EditProductPage({
  productId,
}: {
  productId: string;
}) {
  const product: ProductsType = await getProductById(productId);

  return (
    <ProtectedRoute>
      <main className="mx-auto mt-[10%] max-w-md rounded-lg shadow-lg">
        <h1 className="px-6 py-4 text-center text-2xl font-bold uppercase text-white">
          Edit Product: {product.title}
        </h1>
        <MySuspense fallback={<EditProductFormFallback />}>
          <EditProductForm product={product} />
        </MySuspense>
      </main>
    </ProtectedRoute>
  );
}
