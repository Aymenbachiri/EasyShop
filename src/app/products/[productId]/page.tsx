import SingleProductPage from "@/page/SingleProductPage";

type Params = Promise<{ productId: number }>;

export default async function page({ params }: { params: Params }) {
  return <SingleProductPage params={params} />;
}
