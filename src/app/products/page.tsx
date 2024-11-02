import ProductsPage from "@/page/ProductsPage";
import { generateMetadata } from "@/lib/utils/generateMetadata";
import { AppearAnimation } from "@/lib/animation/AppearAnimation";
import { MySuspense } from "@/lib/utils/MySuspense";

const url = process.env.NEXT_PUBLIC_URL;

export const metadata = generateMetadata({
  title: "Products | EasyShop",
  description:
    "Discover the best deals on products you love, all in one place. At EasyShop, we offer a seamless shopping experience tailored just for you.",
  url: `${url}/products`,
  image: {
    url: `${url}/assets/images/og-images/productsPage-og.jpg`,
    alt: "Products | EasyShop",
  },
});

export default function page() {
  return (
    <main className="px-4 py-8 sm:px-6 lg:px-8">
      <section className="mb-10 max-w-xl sm:text-center md:mx-auto md:mb-12 md:mt-24 lg:max-w-2xl">
        <h2 className="mb-6 mt-10 max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl md:mx-auto">
          <AppearAnimation from="top">
            <span className="relative sm:mt-20 md:mt-0">
              Our Latest Products
            </span>
          </AppearAnimation>
        </h2>
        <AppearAnimation delay={0.2} from="right">
          <p className="text-base text-gray-700 dark:text-gray-300 md:text-lg">
            Explore our range of high-quality products, each carefully selected
            to meet your needs.
          </p>
        </AppearAnimation>
      </section>
      <MySuspense>
        <ProductsPage />
      </MySuspense>
    </main>
  );
}
