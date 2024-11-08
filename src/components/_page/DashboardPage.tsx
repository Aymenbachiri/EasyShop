import { DashboardProductCard } from "@/app/dashboard/_components/DashboardProductCard";
import { getDashboardProducts } from "@/app/dashboard/_lib/getDashboardProducts";
import { type ProductsType } from "@/app/products/_lib/getProducts";
import { ProtectedRoute } from "@/lib/utils/ProtectedRoute";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const user = await currentUser();
  if (!user) redirect("/signin");

  const creator = user.firstName as string;
  const dashboardProducts: ProductsType[] = await getDashboardProducts(creator);

  return (
    <ProtectedRoute>
      <main className="my-20 grid gap-4 gap-y-8 md:mx-[200px] md:mt-[200px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {dashboardProducts.map((item) => (
          <DashboardProductCard key={item.id} product={item} />
        ))}
      </main>
    </ProtectedRoute>
  );
}
