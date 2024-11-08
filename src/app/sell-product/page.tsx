import { MetadataFunction } from "@/lib/utils/metadataFunction";
import { BASE_URL } from "@/components/common/Constants";
import SellProductPage from "@/components/_page/SellProductPage";

export const metadata = MetadataFunction({
  title: "Sell Your Product | EasyShop",
  description:
    "List your product on EasyShop and reach a wide audience. Easy, fast, and effective.",
  url: `${BASE_URL}/products`,
  image: {
    url: `${BASE_URL}/assets/images/og-images/sellProductPage-og.jpg`,
    alt: "selll Product | EasyShop",
  },
});

export default function page() {
  return <SellProductPage />;
}
