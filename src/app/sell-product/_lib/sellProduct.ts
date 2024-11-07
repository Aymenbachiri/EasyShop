import { useForm } from "react-hook-form";
import { type ProductFormData, productSchema } from "./productSchema";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { apiUrl } from "@/components/common/Constants";

async function registerProduct(data: ProductFormData): Promise<void> {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorText = await response.text();
      const errorMessage = errorText
        ? JSON.parse(errorText)?.error || errorText
        : `Failed to add product: ${response.statusText}`;
      throw new Error(errorMessage);
    }

    return await response.json();
  } catch (error) {
    console.error("Error adding product:", error);
    throw error;
  }
}

export function SellProduct() {
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "men",
      imageurl: "",
      price: 0,
      creator: user?.firstName || user?.lastName || "Unknown Creator",
    },
  });

  const onSubmit = async (data: ProductFormData) => {
    if (!user) {
      toast.error("You must be logged in to sell products");
      return;
    }

    setLoading(true);
    try {
      await toast.promise(registerProduct(data), {
        loading: "Adding product...",
        success: "Product added successfully!",
        error: (err: Error) => err.message,
      });

      reset();
      router.push("/dashboard");
    } catch (error) {
      console.error("Error during product submission:", error);
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
