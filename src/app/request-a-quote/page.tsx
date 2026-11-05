import { Metadata } from "next";
import { Suspense } from "react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import InteractiveQuoteEstimator from "@/components/quote/InteractiveQuoteEstimator";
import HowItWorks from "@/components/sections/HowItWorks";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Request a Printing Quote | GLOSPRINT Dubai",
  description:
    "Request an instant custom quotation for luxury business cards, rigid boxes, packaging, brochures, corporate stationery, and large format printing in Dubai.",
  canonicalPath: "/request-quote",
  keywords: [
    "Printing Quotation Dubai",
    "Instant Print Quote UAE",
    "Luxury Printing Estimate",
    "Custom Packaging Pricing Dubai",
  ],
});

export default function RequestAQuotePage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-[#101010] border-b border-[#2B2B2B] py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Request a Quote", url: "/request-quote" }]} />

          <div className="mt-6 max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C8A45D]">
              Fast Quotation System
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-light text-white font-serif leading-tight">
              Request a Print Quote
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#B3B3B3] font-light leading-relaxed">
              Select your printing specifications, materials, and finishes below. Receive itemized pricing directly via WhatsApp or official email.
            </p>
          </div>
        </div>
      </div>

      {/* Form Container with Suspense boundary */}
      <section className="py-16 md:py-24 bg-[#080808] border-b border-[#2B2B2B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<div className="p-12 text-center text-sm text-[#858585]">Loading quotation calculator...</div>}>
            <InteractiveQuoteEstimator />
          </Suspense>
        </div>
      </section>

      <HowItWorks />
    </>
  );
}
