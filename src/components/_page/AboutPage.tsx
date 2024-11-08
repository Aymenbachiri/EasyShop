import { MyImage } from "@/components/common/MyImage";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen items-center justify-center p-12 text-center">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <article className="flex flex-col items-center justify-center gap-4 md:flex-row">
          <section className="mb-4 w-2/3 space-x-4 space-y-4 text-center md:mb-0 md:w-1/2">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-4xl">
              About Us | EasyShop - Empowering Your Shopping Experience
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              At EasyShop, we are dedicated to providing customers with an
              unmatched online shopping experience. Learn more about our
              journey, core values, and commitment to delivering the best
              products at unbeatable prices. Join us as we continue to innovate
              and elevate your shopping journey.
            </p>
          </section>
          <section className="ml-0 mt-12 flex-1 md:ml-4 lg:mt-0">
            <MyImage
              src="/assets/images/company.webp"
              width={600}
              height={600}
              sizes="(min-width: 1280px) 593px, (min-width: 1040px) 524px, (min-width: 780px) 440px, (min-width: 660px) 592px, calc(95.29vw - 18px)"
              alt="EasyShop company"
              className="transform rounded-lg object-cover shadow-lg transition-transform hover:scale-105"
            />
          </section>
        </article>
      </div>
    </main>
  );
}
