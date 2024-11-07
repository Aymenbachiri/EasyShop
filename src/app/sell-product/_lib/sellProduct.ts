import { useForm } from "react-hook-form";
import { type ProductFormData, productSchema } from "./productSchema";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { API_URL } from "@/components/common/Constants";

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
  });

  const registerProduct = async (data: ProductFormData): Promise<void> => {
    const res = await fetch(`${API_URL}/product`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error || "Failed to add product");
    }
  };

  const onSubmit = async (data: ProductFormData) => {
    console.log("Submitting data:", data);
    if (user) {
      data.creator = user.fullName || user.lastName || "Unknown Creator";
    }

    setLoading(true);
    try {
      await toast.promise(registerProduct(data), {
        loading: "Adding product...",
        success: "Product added successfully!",
        error: (err: Error) => err.message || "Failed to add product",
      });

      reset();
    } catch (error) {
      console.error("Product addition error:", error);
      toast.error("An unexpected error occurred");
    } finally {
      setLoading(false);
      router.push("/dashboard");
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    loading,
  };
}
