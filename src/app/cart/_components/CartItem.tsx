"use client";

import { type ProductCartProps } from "@/lib/redux/easyShopSlice";

type CartItemProps = {
  product: ProductCartProps;
  onDecrease: (id: string) => void;
  onIncrease: (id: string) => void;
  onRemove: (id: string) => void;
};

export function CartItem({
  product,
  onDecrease,
  onIncrease,
  onRemove,
}: CartItemProps) {
  const { quantity, imageUrl, title, category } = product;

  return (
    <li className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
      <section className="relative shrink-0">
        <span className="absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full border bg-black text-sm font-medium text-white shadow sm:-right-2 sm:-top-2">
          {quantity}
        </span>
        <img
          className="h-24 w-24 max-w-full rounded-lg object-cover"
          src={imageUrl}
          alt={title}
        />
      </section>
      <div className="relative flex flex-1 flex-col justify-between">
        <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
          <section className="pr-8 sm:pr-5">
            <p className="text-base font-semibold text-gray-900">{title}</p>
            <p className="mx-0 mb-0 mt-1 text-sm text-gray-400">{category}</p>
          </section>
          <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
            <p className="w-20 shrink-0 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
              ${quantity ? quantity * product.price : null}
            </p>
            <div className="sm:order-1">
              <section className="mx-auto flex h-8 items-stretch text-gray-600">
                <button
                  onClick={() => onDecrease(product.id)}
                  className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
                >
                  -
                </button>
                <p className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
                  {quantity}
                </p>
                <button
                  onClick={() => onIncrease(product.id)}
                  className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
                >
                  +
                </button>
              </section>
            </div>
          </div>
        </div>
        <section className="absolute right-0 top-0 flex sm:bottom-0 sm:top-auto">
          <button
            onClick={() => onRemove(product.id)}
            className="text-xs text-gray-800 underline"
          >
            Remove
          </button>
        </section>
      </div>
    </li>
  );
}
