import { DashboardProductCardSkeleton } from "./DashboardProductCardSkeleton";

export function DashboardPageFallback() {
  return (
    <main className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <DashboardProductCardSkeleton />
        <DashboardProductCardSkeleton />
        <DashboardProductCardSkeleton />
        <DashboardProductCardSkeleton />
        <DashboardProductCardSkeleton />
        <DashboardProductCardSkeleton />
      </section>
    </main>
  );
}
