import EditProductPage from "@/_page/EditProductPage";
import { getProductById } from "@/app/products/_lib/getProductById";
import {
  type ProductsType,
  getProducts,
} from "@/app/products/_lib/getProducts";
import { BASE_URL } from "@/components/common/Constants";
import { MetadataFunction } from "@/lib/utils/metadataFunction";
import type { Metadata } from "next";

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
      url: product.imageUrl as string,
      alt: product.title,
    },
  });
}

export default async function page({ params }: { params: Params }) {
  return <EditProductPage productId={(await params).productId} />;
}
