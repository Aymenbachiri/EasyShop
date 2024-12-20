import { MarqueeDemo } from "./MarqueeDemo";

export default function Testimonials() {
  return (
    <main className="px-4 py-8 sm:px-6 lg:px-8">
      <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl">
        What Our Customers Say
      </h2>
      <MarqueeDemo />
    </main>
  );
}
