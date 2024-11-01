"use client";
import {
  useTranslations,
  type AbstractIntlMessages,
  type TranslationValues,
} from "next-intl";

type TypedTranslator<Messages extends AbstractIntlMessages> = {
  (key: keyof Messages, values?: TranslationValues): string;
  (key: (keyof Messages)[], values?: TranslationValues): string[];
};

export function ClientTranslation<Namespace extends keyof IntlMessages>(
  namespace: Namespace,
) {
  const t = useTranslations(namespace);
  return {
    t: t as unknown as TypedTranslator<IntlMessages[Namespace]>,
  };
}
