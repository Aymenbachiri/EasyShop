import { LoadingLoader } from "@/components/common/LoadingLoader";
import { Suspense } from "react";

export function MySuspense({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<LoadingLoader style={{ minHeight: "10vh" }} />}>
      {children}
    </Suspense>
  );
}
