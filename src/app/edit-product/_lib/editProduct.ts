import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
  editProductSchema,
  type EditProductFormData,
} from "./editProductSchema";
import { useRouter } from "next/navigation";
import { apiUrl } from "@/components/common/Constants";

export type initialDataType = {
  id: string;
  title: string;
  description: string;
  category: "men" | "women" | "electronics" | "jewelery";
  imageUrl: string | URL;
  price: number;
  creator?: string | undefined;
};

async function editProduct(id: string, data: EditProductFormData) {
  const res = await fetch(apiUrl + `/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "Failed to edit product");
  }
}

export function EditProduct({ initialData }: { initialData: initialDataType }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditProductFormData>({
    resolver: zodResolver(editProductSchema),
    defaultValues: initialData as EditProductFormData,
  });

  const onSubmit = async (data: EditProductFormData) => {
    setLoading(true);

    try {
      await toast.promise(editProduct(initialData.id, data), {
        loading: "Updating product...",
        success: "Product updated successfully!",
        error: (err) => err.message || "Failed to update product",
      });

      router.push("/dashboard");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    loading,
  };
}
