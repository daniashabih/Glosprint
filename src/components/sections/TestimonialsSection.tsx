import { Info } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-[#101010] border-b border-[#2B2B2B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          overline="Client Experiences"
          title="Endorsed by Dubai's Business Leaders"
          description="Read how our dedication to speed, paper craftsmanship, and color accuracy transforms corporate collateral across the UAE."
        />

        {/* Informative Sample Content Notice */}
        <div className="mb-10 max-w-xl mx-auto px-4 py-2.5 bg-[#191919] border border-[#2B2B2B] rounded-xs flex items-center justify-center gap-2 text-xs text-[#858585]">
          <Info className="w-3.5 h-3.5 text-[#C8A45D] shrink-0" />
          <span>Note: The following entries represent illustrative client feedback profiles.</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
