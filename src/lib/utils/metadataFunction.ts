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

export function MetadataFunction({
  title,
  description,
  url,
  image,
}: MetadataProps): Metadata {
  const imageObject = {
    url: image.url,
    width: image.width ?? 1200,
    height: image.height ?? 630,
    alt: image.alt,
  };

  return {
    metadataBase: new URL(url),
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: url,
      siteName: "SwiftBuy",
      images: [imageObject],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageObject],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: url,
    },
  };
}
