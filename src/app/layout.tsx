import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "@/lib/providers/Providers";
import { MetadataFunction } from "@/lib/utils/metadataFunction";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const url = process.env.NEXT_PUBLIC_URL;

export const metadata = MetadataFunction({
  title: "EasyShop | Shop the Best Deals Online - Electronics, Fashion & More",
  description:
    "Discover unbeatable prices and exclusive deals on SwiftBuy, your one-stop online shop for electronics, fashion, home essentials, and more. Fast shipping, secure checkout, and 24/7 customer support for a seamless shopping experience. Shop now!",
  url: `${url}`,
  image: {
    url: `${url}/assets/images/og-images/homePage-og.jpg`,
    alt: "EasyShop",
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
