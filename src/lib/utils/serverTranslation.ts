import { type AbstractIntlMessages, type TranslationValues } from "next-intl";
import { getTranslations } from "next-intl/server";

type TypedTranslator<Messages extends AbstractIntlMessages> = {
  (key: keyof Messages, values?: TranslationValues): string;
  (key: (keyof Messages)[], values?: TranslationValues): string[];
};

export async function ServerTranslation<Namespace extends keyof IntlMessages>(
  namespace: Namespace,
) {
  const t = await getTranslations(namespace);
  return {
    t: t as unknown as TypedTranslator<IntlMessages[Namespace]>,
  };
}
