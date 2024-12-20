"use client";

import { useCart } from "@/lib/hooks/useCart";
import { CartItem } from "./CartItem";

export function CartProducts() {
  const {
    products,
    handleDecreaseQuantity,
    handleIncreaseQuantity,
    handleRemoveFromCart,
  } = useCart();

  return (
    <ul className="-my-8">
      {products.map((product) => (
        <CartItem
          key={product.id}
          onDecrease={handleDecreaseQuantity}
          onIncrease={handleIncreaseQuantity}
          onRemove={handleRemoveFromCart}
          product={product}
        />
      ))}
    </ul>
  );
}
