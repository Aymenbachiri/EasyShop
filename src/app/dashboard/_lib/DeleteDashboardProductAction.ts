"use server";

import { apiUrl } from "@/components/common/Constants";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function DeleteDashboardProductAction(formData: FormData) {
  const productId = formData.get("id") as string;
  const user = await currentUser();
  if (!user) redirect("/signin");

  try {
    const res = await fetch(`${apiUrl}/${productId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("Failed to delete product");
    }
    revalidatePath("/dashboard");
  } catch (error) {
    console.log(error);
  }
}
