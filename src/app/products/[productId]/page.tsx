import SingleProductPage from "@/page/SingleProductPage";
import type { Metadata } from "next";
import { getProductById } from "../_lib/getProductById";
import { MetadataFunction } from "@/lib/utils/metadataFunction";
import { getProducts, type ProductsType } from "../_lib/getProducts";
import { BASE_URL } from "@/components/common/Constants";

export async function generateStaticParams(): Promise<{ productId: string }[]> {
  const products: ProductsType[] = await getProducts();
  return products.map((product) => ({
    productId: product.id,
  }));
}

type Params = Promise<{ productId: string }>;
export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const ProductId = (await params).productId;
  const product = await getProductById(ProductId);

  return MetadataFunction({
    title: product.title,
    description: product.description,
    url: `${BASE_URL}/products/${product.id}`,
    image: {
      url: product.image as string,
      alt: product.title,
    },
  });
}

export default function page({ params }: { params: Params }) {
  return <SingleProductPage params={params} />;
}
