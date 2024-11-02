import { getProductById } from "@/app/products/_lib/getProductById";
import { type ProductsType } from "@/app/products/_lib/getProducts";
import { notFound } from "next/navigation";

type Params = Promise<{ productId: number }>;

export default async function SingleProductPage({
  params,
}: {
  params: Params;
}) {
  const { productId } = await params;
  if (isNaN(Number(productId))) {
    return notFound();
  }
  const product: ProductsType = await getProductById(productId);
  const { category, description, image, price, title } = product;
  if (!product) {
    return notFound();
  }

  return (
    <main className="mt-[10%] flex min-h-screen items-center justify-center dark:text-white md:mt-[10%]">
      <div className="container mx-auto flex min-h-screen items-center justify-center px-4 py-8">
        <div className="-mx-4 flex flex-wrap">
          <div className="mb-8 w-full px-4 md:w-1/2">
            <img
              src={image as string}
              alt={title}
              className="mx-auto mb-4 h-auto w-2/3 rounded-lg shadow-md md:w-full"
              loading="lazy"
            />
          </div>
          <div className="w-full px-4 md:w-1/2">
            <h2 className="mb-2 text-3xl font-bold">{title}</h2>
            <section className="mb-4">
              <span className="mr-2 text-2xl font-bold">${price}</span>
              <span className="text-gray-500 line-through dark:text-white">
                ${price + 100}
              </span>
            </section>
            {/* <section className="flex items-center mb-4">
              {Array.from({ length: starCount }, (_, index) => (
                <StarIcon key={index} index={index} />
              ))}
              <span className="ml-2 text-gray-600 dark:text-white">
                {starCount}.0 ({reviewsCount} reviews)
              </span>
            </section> */}
            <p className="mb-6 text-gray-700 dark:text-white">{description}</p>
            <section className="mb-6">
              <h3 className="mb-2 text-lg font-semibold">Color:</h3>
              <div className="flex space-x-2">
                <button className="h-8 w-8 rounded-full bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"></button>
                <button className="h-8 w-8 rounded-full bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"></button>
                <button className="h-8 w-8 rounded-full bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"></button>
              </div>
            </section>
            <section className="mb-6">
              <h2 className="mb-1 flex items-start justify-start gap-1 text-lg font-semibold">
                {/* <TagIcon /> */}
                {category}
              </h2>
            </section>
            {/* <section className="mb-6">
              <h2 className="text-lg font-semibold mb-1 flex justify-start items-start gap-1">
                <StoreIcon />
                {creator}
              </h2>
            </section> */}
            {/* <AddToCartBtn product={productWithId} /> */}
          </div>
        </div>
      </div>
    </main>
  );
}
