import { RightIcon } from "@/lib/icons/RightIcon";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./FaqContext";

export type FaqItemProps = {
  value: string;
  question: string;
  answer: string;
};

export function FaqItem({ value, question, answer }: FaqItemProps) {
  return (
    <AccordionItem value={value} className="py-2">
      <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50">
        <div className="flex items-center">
          <RightIcon className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:rotate-90 dark:text-zinc-50" />
          <div className="ml-2 text-zinc-950 dark:text-zinc-50">{question}</div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="origin-left">
        <p className="pl-6 pr-2 text-zinc-500 dark:text-zinc-400">{answer}</p>
      </AccordionContent>
    </AccordionItem>
  );
}
