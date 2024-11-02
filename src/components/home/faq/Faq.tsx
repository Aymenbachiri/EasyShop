import { AppearAnimation } from "@/lib/animation/AppearAnimation";
import { Accordion } from "./FaqContext";
import { FaqItem } from "./FaqItem";
import { faqList } from "./FaqList";

export default function Faq() {
  return (
    <AppearAnimation from="left">
      <main className="mx-auto my-[7%] max-w-7xl divide-y divide-slate-200 rounded dark:divide-slate-700">
        <Accordion
          className="flex w-full flex-col"
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          variants={{
            expanded: {
              opacity: 1,
              scale: 1,
            },
            collapsed: {
              opacity: 0,
              scale: 0.7,
            },
          }}
        >
          {faqList.map((item) => (
            <FaqItem
              key={item.value}
              value={item.value}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </Accordion>
      </main>
    </AppearAnimation>
  );
}
