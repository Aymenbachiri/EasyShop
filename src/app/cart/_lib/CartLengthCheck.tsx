"use client";

import { useCart } from "@/lib/hooks/useCart";
import { EmptyCart } from "../_components/EmptyCart";

export function CartLengthCheck({ children }: { children: React.ReactNode }) {
  const { products } = useCart();

  if (products.length > 0) {
    return <>{children}</>;
  } else {
    return <EmptyCart />;
  }
}
