export function DashboardProductCardSkeleton() {
  return (
    <main className="mx-auto my-4 w-full max-w-sm animate-pulse overflow-hidden rounded-lg bg-transparent shadow-lg ring-4 ring-red-500 ring-opacity-40 sm:max-w-md md:max-w-lg lg:max-w-xl">
      <div className="flex flex-col sm:flex-row">
        {/* Image Placeholder */}
        <section className="relative h-64 w-full rounded-md bg-gray-300 sm:h-auto sm:w-1/2">
          <div className="h-full w-full bg-gray-300"></div>
          <div className="absolute right-0 top-0 m-2 h-6 w-16 rounded-md bg-red-300"></div>
          <div className="absolute left-0 top-0 m-2 h-6 w-20 rounded-md bg-green-300"></div>
        </section>

        <div className="flex flex-col justify-between p-4 sm:w-1/2">
          <section>
            {/* Title Placeholder */}
            <div className="mb-2 h-6 w-3/4 rounded-md bg-gray-300"></div>
            {/* Description Placeholder */}
            <div className="mb-2 h-4 w-full rounded-md bg-gray-300"></div>
            <div className="mb-2 h-4 w-full rounded-md bg-gray-300"></div>
            <div className="h-4 w-2/3 rounded-md bg-gray-300"></div>
          </section>

          {/* Action Buttons Placeholder */}
          <section className="mt-4 flex flex-wrap items-center gap-2">
            <div className="h-8 w-16 rounded bg-blue-300"></div>
            <div className="h-8 w-16 rounded bg-red-300"></div>
            <div className="h-8 w-8 rounded-full bg-gray-300"></div>
          </section>
        </div>
      </div>
    </main>
  );
}
