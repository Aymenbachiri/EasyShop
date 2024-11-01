import { ServerTranslation } from "@/lib/utils/serverTranslation";
import { setRequestLocale } from "next-intl/server";

type Params = Promise<{ locale: string }>;

export default async function LocalePage(props: { params: Params }) {
  const params = await props.params;
  const locale = params.locale;
  setRequestLocale(locale);
  const { t } = await ServerTranslation("HomePage");
  return <div>{t("title")}</div>;
}
