import { Metadata } from "next";
import { companyInfo } from "@/data/company";

interface MetaOptions {
  title: string;
  description: string;
  canonicalPath?: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
}

const defaultKeywords = [
  "Printing Press in Dubai",
  "Printing Services in Dubai",
  "Best Printing Company in Dubai",
  "Business Card Printing Dubai",
  "Brochure Printing Dubai",
  "Flyer Printing Dubai",
  "Packaging Printing Dubai",
  "Offset Printing Dubai",
  "Digital Printing Dubai",
  "Corporate Printing Dubai",
  "Luxury Printing Press UAE",
  "Gold Foil Printing Dubai",
  "Custom Rigid Boxes Dubai",
];

export function buildMetadata({
  title,
  description,
  canonicalPath = "",
  keywords = [],
  image = "/logo/glosprint-logo-full.png",
  type = "website",
  publishedTime,
}: MetaOptions): Metadata {
  const url = `${companyInfo.siteUrl}${canonicalPath}`;
  const allKeywords = Array.from(new Set([...keywords, ...defaultKeywords]));

  return {
    title,
    description,
    keywords: allKeywords,
    metadataBase: new URL(companyInfo.siteUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: `${companyInfo.name} — ${companyInfo.tagline}`,
      images: [
        {
          url: image.startsWith("http") ? image : `${companyInfo.siteUrl}${image}`,
          width: 1200,
          height: 630,
          alt: `${companyInfo.name} Dubai — ${title}`,
        },
      ],
      locale: "en_AE",
      type,
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.startsWith("http") ? image : `${companyInfo.siteUrl}${image}`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
