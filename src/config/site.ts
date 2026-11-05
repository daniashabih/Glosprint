import { companyInfo } from "@/data/company";

export const siteConfig = {
  name: companyInfo.name,
  legalName: companyInfo.legalName,
  tagline: companyInfo.tagline,
  description: companyInfo.description,
  url: companyInfo.siteUrl,
  ogImage: `${companyInfo.siteUrl}/logo/glosprint-logo-full.png`,
  brandPillars: [
    "Premium Printing Solutions",
    "High-Quality Precision Printing",
    "Creative & Bespoke Branding",
    "Corporate & Commercial Printing",
    "Custom Luxury Packaging & Boxes",
    "Promotional Merchandise & Specialty Products",
    "Dedicated Professional Customer Service",
  ],
  contact: {
    phone: companyInfo.phone,
    phoneDisplay: companyInfo.phoneDisplay,
    whatsappNumber: companyInfo.whatsappNumber,
    whatsappDisplay: companyInfo.whatsappDisplay,
    email: companyInfo.email,
    quoteEmail: companyInfo.quoteEmail,
    address: companyInfo.address,
    openingHours: companyInfo.openingHours,
    socialLinks: companyInfo.socialLinks,
  },
  quotation: {
    pricingNotice:
      "All quotations are customized to your exact paper stock, dimensions, custom finishes, and order quantity. We operate a Quote-on-Request system to ensure precise and competitive trade pricing without hidden costs.",
    leadTimeNotice:
      "Standard turnaround is 3–5 business days following final artwork approval. Express and same-day digital options are available upon consultation.",
    proofNotice:
      "A complimentary digital PDF proof is provided before every production run. Physical mockups and paper swatches are available upon request.",
  },
};

export type SiteConfig = typeof siteConfig;
