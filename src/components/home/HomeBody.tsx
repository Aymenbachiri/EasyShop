import { AppearAnimation } from "@/lib/animation/AppearAnimation";
import { MyLink } from "../common/MyLink";
import { MyImage } from "../common/MyImage";

export default function HomeBody() {
  return (
    <main className="mx-auto mt-[10%] max-w-7xl px-8 py-12 md:mt-[6%] md:px-12 lg:px-32">
      <div className="grid list-none grid-cols-1 items-center gap-4 lg:grid-cols-2 lg:gap-24">
        <aside className="text-center md:text-start">
          <AppearAnimation>
            <h2 className="text-xs font-bold uppercase tracking-wide text-gray-500">
              Welcome to EasyShop
            </h2>
          </AppearAnimation>
          <AppearAnimation delay={0.2} from="left">
            <p className="mt-8 text-balance text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-400">
              Shop Smarter, Live Better
            </p>
          </AppearAnimation>
          <AppearAnimation delay={0.4} from="left">
            <p className="mt-4 text-base font-medium text-gray-500">
              Discover the best deals on products you love, all in one place. At
              EasyShop, we offer a seamless shopping experience tailored just
              for you.
            </p>
          </AppearAnimation>
          <AppearAnimation delay={0.6} from="bottom">
            <MyLink
              href="/products"
              className="mt-5 inline-flex h-12 w-full items-center justify-center gap-3 rounded-xl bg-gray-900 px-5 py-3 font-medium text-white duration-200 hover:bg-gray-800 focus:ring-2 focus:ring-black focus:ring-offset-2 md:w-auto"
              aria-label="Shop Now"
            >
              Shop Now
            </MyLink>
          </AppearAnimation>
        </aside>
        <AppearAnimation delay={0.8} from="right">
          <section className="mx-auto h-[22em] w-[27em] rounded-3xl border bg-gray-50 p-2 md:h-[34em] md:w-[34em]">
            <div className="h-full overflow-hidden rounded-3xl border bg-white shadow-lg">
              <MyImage
                alt="man shopping"
                className="relative w-full rounded-2xl drop-shadow-2xl"
                src="/assets/images/shopping.webp"
                width={600}
                height={700}
                style={{ borderRadius: "1rem" }}
              />
            </div>
          </section>
        </AppearAnimation>
      </div>
    </main>
  );
}
