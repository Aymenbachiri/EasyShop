export function ProductCardSkeleton() {
  return (
    <main className="relative block animate-pulse rounded-md rounded-tr-3xl border border-gray-600 shadow-xl">
      <span className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-rose-300 px-6 py-4 font-medium uppercase tracking-widest text-transparent">
        Save
      </span>

      <div className="mx-auto flex h-[20em] w-[20em] items-center justify-center rounded-tr-3xl bg-gray-300"></div>
      <div className="p-4 text-center">
        <section className="flex items-center justify-between">
          <div className="h-4 w-1/4 rounded bg-gray-300"></div>
          <div className="h-4 w-1/4 rounded bg-gray-300"></div>
        </section>
        <div className="mx-auto mt-2 h-6 w-3/4 rounded bg-gray-300"></div>
        <div className="mt-2 h-4 w-full rounded bg-gray-300"></div>
        <div className="mt-1 h-4 w-full rounded bg-gray-300"></div>
        <div className="mt-1 h-4 w-2/3 rounded bg-gray-300"></div>

        <section className="mt-4 flex items-center justify-center gap-2">
          <div className="h-8 w-24 rounded-md bg-indigo-300"></div>
          <div className="h-8 w-24 rounded-md bg-indigo-300"></div>
        </section>
      </div>
    </main>
  );
}
