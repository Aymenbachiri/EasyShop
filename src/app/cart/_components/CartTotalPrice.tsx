"use client";

import { useCart } from "@/lib/hooks/useCart";

export function CartTotalPrice() {
  const { totalPrice } = useCart();

  return <>{totalPrice}</>;
}
