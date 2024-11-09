import { Cart } from "@/app/cart/_components/Cart";
import { CartLengthCheck } from "@/app/cart/_lib/CartLengthCheck";

export default function CartPage() {
  return (
    <CartLengthCheck>
      <Cart />
    </CartLengthCheck>
  );
}
