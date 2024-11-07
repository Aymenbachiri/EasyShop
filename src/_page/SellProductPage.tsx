import { SellProductForm } from "@/app/sell-product/_components/SellProductForm";
import { ProtectedRoute } from "@/lib/utils/ProtectedRoute";

export default function SellProductPage() {
  return (
    <ProtectedRoute>
      <main className="mt-[10%] min-h-screen text-gray-800 dark:text-gray-200">
        <div className="container mx-auto px-4 py-36">
          <h1 className="mb-4 text-center text-4xl font-bold">
            Sell Your Product
          </h1>
          <p className="mb-6 text-center text-lg">
            List your products on EasyShop and reach a wider audience. Fill out
            the form below to get started.
          </p>
          <SellProductForm />
        </div>
      </main>
    </ProtectedRoute>
  );
}
