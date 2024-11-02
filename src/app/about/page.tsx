import AboutPage from "@/page/AboutPage";
import { generateMetadata } from "@/lib/utils/generateMetadata";

const url = process.env.NEXT_PUBLIC_URL;

export const metadata = generateMetadata({
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
