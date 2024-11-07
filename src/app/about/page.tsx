import AboutPage from "@/_page/AboutPage";
import { MetadataFunction } from "@/lib/utils/metadataFunction";

const url = process.env.NEXT_PUBLIC_URL;

export const metadata = MetadataFunction({
  title: "About Us | EasyShop",
  description:
    "Learn more about EasyShop, the leading ecommerce platform offering top deals on electronics, fashion, and more. Discover our mission, values, and commitment to providing you with the best shopping experience. Join millions of satisfied customers today!",
  url: `${url}/about`,
  image: {
    url: `${url}/assets/images/og-images/aboutPage-og.jpg`,
    alt: "About Us |EasyShop",
  },
});

export default function page() {
  return <AboutPage />;
}
