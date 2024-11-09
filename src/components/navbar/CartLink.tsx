"use client";

import { useCart } from "@/lib/hooks/useCart";
import { MyLink } from "../common/MyLink";
import { CartIcon } from "@/lib/icons/CartIcon";

export function CartLink() {
  const { cart } = useCart();

  return (
    <MyLink href="/cart" className="relative flex items-center justify-center">
      <span className="absolute top-[-10px] z-10 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[10px] text-white dark:text-white md:right-[-3px]">
        {cart.length}
      </span>
      <CartIcon />
    </MyLink>
  );
}
