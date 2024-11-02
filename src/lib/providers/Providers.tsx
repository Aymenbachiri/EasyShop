import Navbar from "@/components/navbar/Navbar";
import { LenisScrollProvider } from "./LenisScrollProvider";
//import { ReduxProvider } from "./ReduxProvider";
import { ThemeProvider } from "./ThemeProvider";
import { ClerkProvider } from "@clerk/nextjs";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer/Footer";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <ThemeProvider>
        {/* <ReduxProvider></ReduxProvider> */}
        <LenisScrollProvider />
        <NextTopLoader />
        <Navbar />
        {children}
        <Footer />
        <Toaster position="top-center" />
      </ThemeProvider>
    </ClerkProvider>
  );
}
