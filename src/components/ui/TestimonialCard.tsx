import { Star, Quote } from "lucide-react";
import { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-[#191919] p-8 sm:p-10 border border-[#2B2B2B] rounded-xs relative flex flex-col justify-between space-y-6 hover:bg-[#202020] hover:border-[#C8A45D] transition-all duration-300 hover:shadow-xl">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#C8A45D] text-[#C8A45D]" />
            ))}
          </div>
          <Quote className="w-8 h-8 text-[#C8A45D]/30" />
        </div>

        <p className="text-base text-[#B3B3B3] italic font-light leading-relaxed">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>

      <div className="pt-4 border-t border-[#2B2B2B] flex items-center justify-between">
        <div>
          <h4 className="text-sm font-semibold text-white">
            {testimonial.author}
          </h4>
          <p className="text-xs text-[#858585]">
            {testimonial.position},{" "}
            <span className="font-medium text-[#B3B3B3]">{testimonial.company}</span>
          </p>
        </div>

        <span className="text-[11px] text-[#C8A45D] font-medium uppercase tracking-wider bg-[#141414] px-2.5 py-1 rounded-xs border border-[#2B2B2B]">
          {testimonial.industry}
        </span>
      </div>
    </div>
  );
}
