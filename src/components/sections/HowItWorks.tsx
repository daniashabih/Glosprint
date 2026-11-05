import { ProcessStep } from "@/types";
import {
  Layers,
  FileText,
  Calculator,
  FileCheck,
  Printer,
  Truck,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

export const howItWorksSteps: ProcessStep[] = [
  {
    step: "01",
    number: 1,
    title: "Choose Your Product",
    description:
      "Explore our comprehensive printing catalog across business stationery, custom packaging, marketing collateral, or signage.",
    detail:
      "Select from verified dimensions, paper stocks, and embellishments tailored to your brand identity.",
    iconName: "Layers",
  },
  {
    step: "02",
    number: 2,
    title: "Submit Your Specifications",
    description:
      "Provide dimensions, required quantity, paper substrate, finishing preferences, and upload your artwork files.",
    detail:
      "Our interactive estimator accepts PDF, AI, PSD, and EPS files up to 25MB with bleed and color notes.",
    iconName: "FileText",
  },
  {
    step: "03",
    number: 3,
    title: "Receive Your Quotation",
    description:
      "Our estimation engineers review your technical specifications and provide transparent, competitive trade pricing.",
    detail:
      "We calculate exact paper mill costs, finishing die tooling, and turnaround options without hidden fees.",
    iconName: "Calculator",
  },
  {
    step: "04",
    number: 4,
    title: "Artwork Approval & Proofing",
    description:
      "Review and approve a complimentary high-resolution digital proof (or physical structural white prototype for packaging).",
    detail:
      "We verify 300+ DPI image resolution, 3mm bleed limits, text outlines, and CMYK color boundaries.",
    iconName: "FileCheck",
  },
  {
    step: "05",
    number: 5,
    title: "Printing & Quality Control",
    description:
      "Your order is scheduled on Heidelberg offset or high-speed digital presses under ISO 12647-2 color protocols.",
    detail:
      "Every batch undergoes rigorous quality-control checks for ink density, registration, and finishing adhesion.",
    iconName: "Printer",
  },
  {
    step: "06",
    number: 6,
    title: "Doorstep Delivery or Collection",
    description:
      "Carefully packaged in moisture-barrier cartons and dispatched via our dedicated fleet across Dubai and the UAE.",
    detail:
      "Real-time tracking and emergency same-day dispatch available for conference venues and hotels.",
    iconName: "Truck",
  },
];

const iconMap = {
  Layers: Layers,
  FileText: FileText,
  Calculator: Calculator,
  FileCheck: FileCheck,
  Printer: Printer,
  Truck: Truck,
};

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-[#FAF9F6] border-b border-[#EAEAEA]" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          overline="Customer Journey"
          title="How It Works: Precision From Concept to Delivery"
          description="A seamless, transparent 6-step manufacturing workflow engineered for flawless execution, predictable lead times, and zero unpleasant surprises."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {howItWorksSteps.map((step) => {
            const IconComponent = iconMap[step.iconName as keyof typeof iconMap] || Layers;
            return (
              <div
                key={step.step}
                className="bg-white border border-[#EAEAEA] rounded-xs p-6 sm:p-8 flex flex-col justify-between space-y-5 transition-all duration-300 hover:shadow-md hover:border-[#C8A45D]/60 relative group"
              >
                {/* Step Number Watermark */}
                <span className="text-4xl font-serif font-light text-neutral-200 group-hover:text-[#C8A45D]/30 transition-colors">
                  {step.step}
                </span>

                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xs bg-[#FAF9F6] border border-[#EAEAEA] flex items-center justify-center text-[#C8A45D]">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-serif font-medium text-[#171717] group-hover:text-[#C8A45D] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-neutral-600 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EAEAEA]/80 text-[11px] text-neutral-500 font-light leading-relaxed">
                  {step.detail}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Strip */}
        <div className="mt-14 p-6 sm:p-8 bg-white border border-[#EAEAEA] rounded-xs flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-serif font-medium text-[#171717]">
              Ready to start your custom printing project?
            </h4>
            <p className="text-xs text-neutral-500 font-light">
              Submit your specifications and our estimating team will respond promptly.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/request-quote"
              className="inline-flex items-center gap-1.5 px-6 py-3 bg-[#171717] hover:bg-[#C8A45D] text-white text-xs font-semibold uppercase tracking-wider transition-colors rounded-xs"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
