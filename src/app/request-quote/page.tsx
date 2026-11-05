import { Suspense } from "react";
import { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import InteractiveQuoteEstimator from "@/components/quote/InteractiveQuoteEstimator";
import HowItWorks from "@/components/sections/HowItWorks";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Request a Printing Quote | Interactive Technical Estimator | GLOSPRINT Dubai",
  description:
    "Configure your exact printing specifications, paper substrates, luxury finishes, and order quantities. Get a tailored trade quotation from GLOSPRINT's estimation team.",
  canonicalPath: "/request-quote",
  keywords: [
    "Printing Quote Dubai",
    "Request Printing Quote",
    "Commercial Printing Pricing UAE",
    "Custom Packaging Quotation",
    "Business Cards Quote Dubai",
  ],
});

export default function RequestQuotePage() {
  return (
    <>
      {/* Header Banner */}
      <div className="bg-[#FAF9F6] border-b border-[#EAEAEA] py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ name: "Request a Quote", url: "/request-quote" }]}
          />

          <div className="mt-6 max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C8A45D]">
              Bespoke Estimation
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-light text-[#171717] font-serif leading-tight">
              Request a Custom Quote
            </h1>
            <p className="mt-4 text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
              Configure your exact dimensions, materials, and finishing embellishments. Our estimation engineers calculate accurate trade pricing tailored to your production volume.
            </p>
          </div>
        </div>
      </div>

      {/* Main Form Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Suspense
          fallback={
            <div className="py-20 text-center text-xs text-neutral-400">
              Loading quotation estimator...
            </div>
          }
        >
          <InteractiveQuoteEstimator />
        </Suspense>
      </div>

      {/* Workflow Section */}
      <HowItWorks />
    </>
  );
}
