import { MyLink } from "@/components/common/MyLink";
import { CartTotalPrice } from "./CartTotalPrice";
import { ResetCartBtn } from "./ResetCartBtn";

export function CartCheckout() {
  return (
    <main>
      <div className="mt-6 border-b border-t py-2">
        <section className="flex items-center justify-between">
          <p className="text-sm text-gray-400">Subtotal</p>
          <p className="text-lg font-semibold text-gray-900">
            $<CartTotalPrice />
          </p>
        </section>
        <section className="flex items-center justify-between">
          <p className="text-sm text-gray-400">Shipping</p>
          <p className="text-lg font-semibold text-gray-900">Free</p>
        </section>
      </div>
      <section className="mt-6 flex items-center justify-between border-b">
        <p className="text-sm font-medium text-gray-900">Total</p>
        <p className="text-2xl font-semibold text-gray-900">
          <span className="text-xs font-normal text-gray-400">USD</span>{" "}
          <CartTotalPrice />
        </p>
      </section>
      <section className="mt-8 flex items-center justify-between">
        <ResetCartBtn />
      </section>
      <section className="mt-6 flex items-center gap-4 text-center">
        <button
          type="button"
          className="group inline-flex w-full items-center justify-center rounded-md bg-gray-900 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out hover:bg-gray-800 focus:shadow"
        >
          Checkout
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-4 h-6 w-6 transition-all group-hover:ml-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>
        <MyLink href="/products">
          Continue Shopping
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-4 h-6 w-6 transition-all group-hover:ml-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </MyLink>
      </section>
    </main>
  );
}
