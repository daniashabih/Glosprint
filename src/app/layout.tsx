import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import GoogleAnalytics from "@/components/seo/GoogleAnalytics";
import { companyInfo } from "@/data/company";
import { createOrganizationSchema, createLocalBusinessSchema } from "@/lib/structured-data";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "GLOSPRINT — Luxury Printing Press & Creative Solutions in Dubai",
    template: "%s | GLOSPRINT Dubai",
  },
  description:
    "Dubai's premier commercial and luxury printing press. Specializing in bespoke business cards, gold foil packaging, corporate stationery, large format signage, and offset printing. Where Print Meets Glamour.",
  keywords: [
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
  ],
  metadataBase: new URL(companyInfo.siteUrl),
  alternates: {
    canonical: companyInfo.siteUrl,
  },
  openGraph: {
    title: "GLOSPRINT — Luxury Printing Press & Creative Solutions in Dubai",
    description:
      "Where Print Meets Glamour. Dubai's luxury printing house for high-end packaging, foil business cards, corporate stationery, and large format displays.",
    url: companyInfo.siteUrl,
    siteName: "GLOSPRINT Dubai",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "/logo/glosprint-logo-full.png",
        width: 1200,
        height: 630,
        alt: "GLOSPRINT — Where Print Meets Glamour — Dubai, UAE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GLOSPRINT — Luxury Printing Press Dubai",
    description:
      "Where Print Meets Glamour. Premier luxury printing solutions in Dubai, UAE.",
    images: ["/logo/glosprint-logo-full.png"],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || undefined,
  },
  icons: {
    icon: "/logo/glosprint-icon.png",
    apple: "/logo/glosprint-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = createOrganizationSchema();
  const localBusinessSchema = createLocalBusinessSchema();

  return (
    <html
      lang="en"
      className={`${jakartaSans.variable} ${playfairDisplay.variable} scroll-smooth antialiased`}
    >
      <head>
        <link rel="icon" href="/logo/glosprint-icon.png" />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-[#171717] font-sans selection:bg-[#C8A45D]/20 selection:text-[#171717]">
        <GoogleAnalytics />
        <JsonLd data={orgSchema} />
        <JsonLd data={localBusinessSchema} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
