"use client";

import { type ProductsType } from "@/app/products/_lib/getProducts";
import { FormField } from "@/components/common/FormField";
import { UpdateProductBtn } from "./UpdateProductBtn";
import { EditProduct, type initialDataType } from "../_lib/editProduct";

export function EditProductForm({ product }: { product: ProductsType }) {
  const initialData: initialDataType = {
    id: product.id,
    title: product.title,
    description: product.description,
    category: product.category as "men" | "women" | "electronics" | "jewelery",
    imageUrl: product.imageUrl,
    price: product.price,
    creator: product.creator as string,
  };
  const { register, handleSubmit, errors, loading } = EditProduct({
    initialData,
  });

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mb-0 mt-[10%] max-w-md space-y-4"
    >
      <FormField
        label="Product Title"
        type="text"
        placeholder="Enter the product title"
        registration={register("title")}
        error={errors.title}
        variant="input"
      />
      <FormField
        label="Product Description"
        placeholder="Enter a description for your product"
        registration={register("description")}
        error={errors.description}
        variant="textarea"
      />
      <FormField
        label="Category"
        placeholder="Select a category"
        registration={register("category")}
        error={errors.category}
        variant="select"
        options={[
          { value: "men", label: "men" },
          { value: "women", label: "women" },
          { value: "electronics", label: "electronics" },
          { value: "jewelery", label: "jewelery" },
        ]}
      />
      <FormField
        label="ImageUrl"
        type="text"
        placeholder="Example: www.unsplash.com/photos/1352"
        registration={register("imageUrl")}
        error={errors.imageUrl}
        variant="input"
      />
      <FormField
        label="Price"
        type="number"
        placeholder="Enter the price"
        registration={register("price", { valueAsNumber: true })}
        error={errors.price}
        variant="input"
        valueAsNumber
      />
      <UpdateProductBtn loading={loading} />
    </form>
  );
}
