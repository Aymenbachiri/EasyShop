import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";

type Params = Promise<{ locale: string }>;

export default function LocalePage(props: { params: Params }) {
  const params = use(props.params);
  const locale = params.locale;
  setRequestLocale(locale);
  const t = useTranslations("HomePage");
  return <div>{t("title")}</div>;
}
