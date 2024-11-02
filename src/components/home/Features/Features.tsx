import { AppearAnimation } from "@/lib/animation/AppearAnimation";
import { FeaturesList } from "./FeaturesList";

export default function Features() {
  return (
    <main className="my-[3em] grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 md:my-[5em] md:px-8 lg:my-[13em] lg:grid-cols-3 lg:px-16">
      {FeaturesList.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-4 text-center"
        >
          <AppearAnimation>
            <span className="flex items-center rounded-full bg-emerald-500 p-4 text-white">
              {feature.icon}
            </span>
          </AppearAnimation>
          <section className="flex w-full min-w-0 flex-col items-center justify-center gap-0 text-base">
            <AppearAnimation delay={0.2} from="left">
              <h3 className="mb-2 py-2 text-lg font-semibold leading-6 text-slate-700 dark:text-slate-200">
                {feature.label}
              </h3>
            </AppearAnimation>
            <AppearAnimation delay={0.4} from="bottom">
              <p className="text-slate-500 dark:text-slate-400">
                {feature.description}
              </p>
            </AppearAnimation>
          </section>
        </div>
      ))}
    </main>
  );
}
