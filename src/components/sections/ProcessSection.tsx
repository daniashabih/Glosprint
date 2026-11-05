import SectionHeading from "@/components/ui/SectionHeading";
import { printingProcess } from "@/data/home";

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 md:py-28 bg-[#080808] border-b border-[#2B2B2B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          overline="Artisan Methodology"
          title="Our Precision Printing Process"
          description="From microscopic digital file inspections to final hand-gilded packaging assembly, every project advances through rigorous quality stages."
        />

        <div className="relative mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {printingProcess.map((step) => (
              <div
                key={step.step}
                className="relative flex flex-col p-6 bg-[#191919] border border-[#2B2B2B] rounded-xs transition-all duration-300 hover:bg-[#202020] hover:border-[#C8A45D] hover:shadow-xl group"
              >
                {/* Step Number Display */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-light font-serif text-[#C8A45D] group-hover:text-[#DFCA95] transition-colors">
                    {step.step}
                  </span>
                  <div className="w-8 h-px bg-[#C8A45D]/40" />
                </div>

                <h3 className="text-base font-semibold text-white mb-2 font-serif leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs text-[#B3B3B3] leading-relaxed font-light mb-3">
                  {step.description}
                </p>

                <p className="text-[11px] text-[#858585] pt-3 border-t border-[#2B2B2B] leading-relaxed">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
