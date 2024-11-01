import en from "./src/translation/en.json";

type Messages = typeof en;

declare global {
  type IntlMessages = Messages;
}
