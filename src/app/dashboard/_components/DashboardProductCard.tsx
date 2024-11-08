import { type ProductsType } from "@/app/products/_lib/getProducts";
import { MyLink } from "@/components/common/MyLink";
import { EditIcon } from "@/lib/icons/EditIcon";
import { DeleteDashboardProductBtn } from "./DeleteDashboardProductBtn";

export function DashboardProductCard({ product }: { product: ProductsType }) {
  return (
    <main className="mx-auto my-4 w-full max-w-sm overflow-hidden rounded-lg bg-transparent shadow-lg ring-4 ring-red-500 ring-opacity-40 sm:max-w-md md:max-w-lg lg:max-w-xl">
      <div className="flex flex-col sm:flex-row">
        <section className="relative h-64 w-full bg-transparent sm:h-auto sm:w-1/2">
          <img
            loading="lazy"
            className="h-full w-full bg-transparent object-cover"
            src={product.imageUrl as string}
            alt="Product Image"
          />
          <div className="absolute right-0 top-0 m-2 rounded-md bg-red-500 px-2 py-1 text-sm font-medium text-white">
            {product.price} $
          </div>
          <div className="absolute left-0 top-0 m-2 rounded-md bg-green-500 px-2 py-1 text-sm font-medium text-white">
            {product.category}
          </div>
        </section>
        <div className="flex flex-col justify-between p-4 sm:w-1/2">
          <section>
            <h3 className="mb-2 line-clamp-2 text-lg font-medium">
              {product.title}
            </h3>
            <p className="mb-4 line-clamp-3 text-sm">{product.description}</p>
          </section>
          <section className="flex flex-col space-y-4">
            <nav className="flex flex-wrap items-center justify-between gap-2">
              <MyLink
                href={`/products/${product.id}`}
                className="rounded bg-blue-500 px-4 py-2 text-sm font-bold text-white hover:bg-blue-600"
              >
                view
              </MyLink>
              <DeleteDashboardProductBtn id={product.id} />
              <MyLink
                href={`/editProduct/${product.id}`}
                className="rounded-full bg-gray-500 p-2 text-center font-bold text-white hover:bg-gray-600"
              >
                <EditIcon />
              </MyLink>
            </nav>
          </section>
        </div>
      </div>
    </main>
  );
}
