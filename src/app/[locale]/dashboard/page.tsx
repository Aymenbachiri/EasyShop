import { ProtectedRoute } from "@/lib/utils/ProtectedRoute";

export default async function page() {
  return (
    <ProtectedRoute>
      <div>page</div>
    </ProtectedRoute>
  );
}
