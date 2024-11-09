import { MyImage } from "@/components/common/MyImage";
import { MyLink } from "@/components/common/MyLink";

export function EmptyCart() {
  return (
    <main className="mt-[20%] h-[78vh] flex-col items-center justify-center md:mt-0 md:flex md:h-[80vh] md:flex-row">
      <section className="flex justify-center px-2">
        <MyImage
          src="/assets/images/empty_cart.webp"
          alt="empty cart"
          width={200}
          height={200}
          sizes="200px"
          className="rounded-full"
        />
      </section>
      <section className="flex max-w-[500px] flex-col items-center gap-4 rounded-md p-4 py-8 shadow-lg">
        <h1 className="text-xl font-bold uppercase">Your Cart feels lonely.</h1>
        <p className="-mt-2 px-10 text-center text-sm">
          Your Shopping cart lives to serve. Give it purpose - fill it with
          books, electronics, videos, etc. and make it happy.
        </p>
        <MyLink
          href="/products"
          className="cursor-pointer rounded-md px-8 py-2 text-lg font-semibold duration-300 hover:bg-black hover:text-white active:bg-gray-900 dark:hover:bg-gray-900"
        >
          Continue Shopping
        </MyLink>
      </section>
    </main>
  );
}
