import SingleProductPage from "@/page/SingleProductPage";
import type { Metadata } from "next";
import { getProductById } from "../_lib/getProductById";
import { MetadataFunction } from "@/lib/utils/metadataFunction";

const url = process.env.NEXT_PUBLIC_URL;

type Props = {
  params: { productId: number };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const ProductId = params.productId;
  const product = await getProductById(ProductId);

  return MetadataFunction({
    title: product.title,
    description: product.description,
    url: `${url}/products/${product.id}`,
    image: {
      url: product.image as string,
      alt: product.title,
    },
  });
}

type Params = Promise<{ productId: number }>;
export default async function page({ params }: { params: Params }) {
  return <SingleProductPage params={params} />;
}
