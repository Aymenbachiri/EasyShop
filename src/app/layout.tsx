import localFont from "next/font/local";
import "./globals.css";
import { generateMetadata } from "@/lib/utils/generateMetadata";

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

export const metadata = generateMetadata({
  title: "About Us | SwiftBuy - Your Trusted Online Shopping Destination",
  description:
    "Learn more about SwiftBuy, the leading ecommerce platform offering top deals on electronics, fashion, and more. Discover our mission, values, and commitment to providing you with the best shopping experience. Join millions of satisfied customers today!",
  url: "https://swiftbuy.vercel.app/about",
  image: {
    url: "https://img.freepik.com/free-vector/about-us-concept-illustration_114360-669.jpg",
    alt: "About SwiftBuy",
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
