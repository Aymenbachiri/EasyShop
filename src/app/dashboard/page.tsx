import DashboardPage from "@/components/_page/DashboardPage";
import { BASE_URL } from "@/components/common/Constants";
import { AppearAnimation } from "@/lib/animation/AppearAnimation";
import { MetadataFunction } from "@/lib/utils/metadataFunction";
import { MySuspense } from "@/lib/utils/MySuspense";
import { DashboardPageFallback } from "./_components/DashboardPageFallback";

export const metadata = MetadataFunction({
  title: "Dashboard | EasyShop",
  description:
    "Manage your products, orders, and more in your EasyShop dashboard.",
  url: `${BASE_URL}/dashboard/:creator`,
  image: {
    url: `${BASE_URL}/assets/images/og-images/dashboardPage-og.jpg`,
    alt: "Dashboard | EasyShop",
  },
});

export default function page() {
  return (
    <main className="px-4 py-8 sm:px-6 lg:px-8">
      <section className="mb-10 max-w-xl sm:text-center md:mx-auto md:mb-12 md:mt-24 lg:max-w-2xl">
        <h2 className="mb-6 mt-10 max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl md:mx-auto">
          <AppearAnimation from="top">
            <span className="relative sm:mt-20 md:mt-0">
              Welcome to your dashboard
            </span>
          </AppearAnimation>
        </h2>
        <AppearAnimation delay={0.2} from="right">
          <p className="text-base text-gray-700 dark:text-gray-300 md:text-lg">
            Manage your products, orders, and more in your EasyShop dashboard.
          </p>
        </AppearAnimation>
      </section>
      <MySuspense fallback={<DashboardPageFallback />}>
        <DashboardPage />
      </MySuspense>
    </main>
  );
}
