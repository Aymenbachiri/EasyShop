import Navbar from "@/components/navbar/Navbar";
import { LenisScrollProvider } from "./LenisScrollProvider";
import { ThemeProvider } from "./ThemeProvider";
import { ClerkProvider } from "@clerk/nextjs";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer/Footer";
import { ReduxProvider } from "./ReduxProivder";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <ThemeProvider>
        <ReduxProvider>
          <LenisScrollProvider />
          <NextTopLoader />
          <Navbar />
          {children}
          <Footer />
          <Toaster position="top-center" />
        </ReduxProvider>
      </ThemeProvider>
    </ClerkProvider>
  );
}
