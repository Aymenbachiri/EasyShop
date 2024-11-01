import { LenisScrollProvider } from "./LenisScrollProvider";
//import { ReduxProvider } from "./ReduxProvider";
import { ThemeProvider } from "./ThemeProvider";
import { ClerkProvider } from "@clerk/nextjs";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <ThemeProvider>
        {/* <ReduxProvider></ReduxProvider> */}
        <LenisScrollProvider />
        <NextTopLoader />
        {children}
        <Toaster position="top-center" />
      </ThemeProvider>
    </ClerkProvider>
  );
}
