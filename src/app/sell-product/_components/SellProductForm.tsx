"use client";

import { FormField } from "@/components/common/FormField";
import { SellProductBtn } from "./SellProductBtn";
import { SellProduct } from "../_lib/sellProduct";

export function SellProductForm() {
  const { register, handleSubmit, errors, loading } = SellProduct();

  console.log("Form rendered, errors:", errors);

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mb-0 mt-8 max-w-md space-y-4"
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
        registration={register("imageurl")}
        error={errors.imageurl}
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
      <SellProductBtn loading={loading} />
    </form>
  );
}
