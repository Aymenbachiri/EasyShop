import CartPage from "@/components/_page/CartPage";
import { BASE_URL } from "@/components/common/Constants";
import { MetadataFunction } from "@/lib/utils/metadataFunction";

export const metadata = MetadataFunction({
  title: "Your Shopping Cart - EasyShop",
  description:
    "View the items in your shopping cart and proceed to checkout on ShopBase.",
  url: `${BASE_URL}/cart`,
  image: {
    url: `${BASE_URL}/assets/images/og-images/cartPage-og.jpg`,
    alt: "Your Shopping Cart - EasyShop",
  },
});

export default function page() {
  return <CartPage />;
}
