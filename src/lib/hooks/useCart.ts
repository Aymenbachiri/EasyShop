import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import {
  type ProductCartProps,
  addToCart,
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../redux/easyShopSlice";

export function useCart() {
  const products: ProductCartProps[] = useSelector(
    (state: RootState) => state.shop.products,
  );
  const dispatch = useDispatch();

  const totalPrice = products.reduce((acc, product) => {
    acc += product.price * product.quantity!;
    return acc;
  }, 0);

  const handleResetCart = () => {
    const confirmed = window.confirm(
      "Are you sure you want to clear your cart?",
    );
    if (confirmed) {
      dispatch(clearCart());
    }
  };

  const handleAddToCart = (product: ProductCartProps) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  const handleDecreaseQuantity = (id: string) => {
    dispatch(decreaseQuantity(id));
  };

  const handleIncreaseQuantity = (id: string) => {
    dispatch(increaseQuantity(id));
  };

  const handleRemoveFromCart = (id: string) => {
    dispatch(removeFromCart(id));
  };

  return {
    cart: products,
    length: products.length,
    products,
    totalPrice,
    handleAddToCart,
    handleResetCart,
    handleDecreaseQuantity,
    handleIncreaseQuantity,
    handleRemoveFromCart,
  };
}
