import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/ui/FloatingActions";
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
    default: "GLOSPRINT — Premium Printing Solutions & Creative Branding in Dubai",
    template: "%s | GLOSPRINT Dubai",
  },
  description:
    "Dubai's premier commercial printing and creative branding company. Specializing in bespoke business cards, custom packaging, corporate stationery, large format signage, and promotional merchandise.",
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
    "Promotional Merchandise Dubai",
    "Custom Packaging Dubai",
  ],
  metadataBase: new URL(companyInfo.siteUrl),
  alternates: {
    canonical: companyInfo.siteUrl,
  },
  openGraph: {
    title: "GLOSPRINT — Premium Printing Solutions & Creative Branding in Dubai",
    description:
      "Dubai's premier commercial printing and creative branding company for high-end packaging, foil business cards, corporate stationery, promotional merchandise, and large format displays.",
    url: companyInfo.siteUrl,
    siteName: "GLOSPRINT Dubai",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "/logo/glosprint-logo-full.png",
        width: 1200,
        height: 630,
        alt: "GLOSPRINT — Premium Printing & Creative Branding — Dubai, UAE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GLOSPRINT — Premium Printing & Creative Branding Dubai",
    description:
      "Premium printing solutions, custom packaging, corporate stationery, and creative branding in Dubai, UAE.",
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
      className={`dark ${jakartaSans.variable} ${playfairDisplay.variable} scroll-smooth antialiased`}
    >
      <head>
        <link rel="icon" href="/logo/glosprint-icon.png" />
      </head>
      <body className="min-h-screen flex flex-col bg-[#080808] text-white font-sans selection:bg-[#C8A45D]/30 selection:text-white">
        <GoogleAnalytics />
        <JsonLd data={orgSchema} />
        <JsonLd data={localBusinessSchema} />
        <Header />
        <main className="flex-1 bg-[#080808]">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
