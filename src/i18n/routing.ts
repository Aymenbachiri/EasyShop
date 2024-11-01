import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["ar", "en", "fr"],

  // Used when no locale matches
  defaultLocale: "en",
  localePrefix: "as-needed",
  pathnames: {
    "/dashboard": {
      en: "/dashboard",
      fr: "/dashboard",
      ar: "/dashboard",
    },
  },
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
