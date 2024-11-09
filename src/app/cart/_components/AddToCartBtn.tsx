"use client";

import { useCart } from "@/lib/hooks/useCart";
import { type ProductCartProps } from "@/lib/redux/easyShopSlice";
import toast from "react-hot-toast";

export function AddToCartBtn({ product }: { product: ProductCartProps }) {
  const { handleAddToCart } = useCart();
  const handleClick = () => {
    handleAddToCart(product);
    toast.success(`${product.title} added to cart successfully!`);
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-2 space-x-4 rounded-md bg-indigo-600 text-white transition-colors duration-300 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
        />
      </svg>
      Add To Cart
    </button>
  );
}
