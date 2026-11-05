import { Star, Quote, Info } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-[#FAF9F6] border-b border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          overline="Client Experiences"
          title="Endorsed by Dubai's Business Leaders"
          description="Read how our dedication to speed, paper craftsmanship, and color accuracy transforms corporate collateral across the UAE."
        />

        {/* Informative Sample Content Notice */}
        <div className="mb-10 max-w-xl mx-auto px-4 py-2.5 bg-white border border-[#C8A45D]/30 rounded-xs flex items-center justify-center gap-2 text-xs text-neutral-500">
          <Info className="w-3.5 h-3.5 text-[#C8A45D] shrink-0" />
          <span>Note: The following entries represent illustrative client feedback profiles.</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white p-8 sm:p-10 border border-[#EAEAEA] rounded-xs relative flex flex-col justify-between space-y-6 hover:border-[#C8A45D] transition-all duration-300 hover:shadow-md"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C8A45D] text-[#C8A45D]" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#C8A45D]/30" />
                </div>

                <p className="text-base text-neutral-700 italic font-light leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#EAEAEA] flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-[#171717]">
                    {t.author}
                  </h4>
                  <p className="text-xs text-neutral-500">
                    {t.position}, <span className="font-medium text-[#171717]">{t.company}</span>
                  </p>
                </div>

                <span className="text-[11px] text-[#C8A45D] font-medium uppercase tracking-wider bg-[#FAF9F6] px-2 py-1 rounded-xs border border-[#EAEAEA]">
                  {t.industry}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
