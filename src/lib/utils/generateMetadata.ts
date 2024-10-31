import type { Metadata } from "next";

type MetadataImage = {
  url: string;
  width?: number;
  height?: number;
  alt: string;
};

type MetadataProps = {
  title: string;
  description: string;
  url: string;
  image: MetadataImage;
};

export function generateMetadata({
  title,
  description,
  url,
  image,
}: MetadataProps): Metadata {
  // Create the image object with fallback values
  const imageObject = {
    url: image.url,
    width: image.width ?? 1200,
    height: image.height ?? 630,
    alt: image.alt,
  };

  return {
    metadataBase: new URL(url), // Add metadataBase for absolute URLs
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: url,
      siteName: "SwiftBuy", // Add siteName for better SEO
      images: [imageObject],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageObject],
    },
    // Add these optional but recommended fields
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: url,
    },
  };
}
