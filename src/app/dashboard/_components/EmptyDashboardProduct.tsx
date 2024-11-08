import { MyImage } from "@/components/common/MyImage";

export function EmptyDashboardProduct() {
  return (
    <main className="mx-auto flex h-full w-full flex-col-reverse items-center justify-center gap-6 p-4 text-center text-gray-800 dark:text-gray-300 md:flex-row">
      <MyImage
        src="/assets/images/empty-products.webp"
        alt="No products available"
        width={350}
        height={450}
        className="mb-4 rounded-md md:mb-0"
      />
      <section className="flex flex-col items-center justify-center gap-2 px-4 md:items-start md:text-left">
        <p className="text-xl font-semibold dark:text-gray-200">
          No products available
        </p>
        <p className="text-base text-gray-600 dark:text-gray-400">
          Please check back later or add new products.
        </p>
      </section>
    </main>
  );
}
