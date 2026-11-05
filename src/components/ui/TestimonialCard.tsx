import { Star, Quote } from "lucide-react";
import { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 sm:p-10 border border-[#EAEAEA] rounded-xs relative flex flex-col justify-between space-y-6 hover:border-[#C8A45D] transition-all duration-300 hover:shadow-md">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#C8A45D] text-[#C8A45D]" />
            ))}
          </div>
          <Quote className="w-8 h-8 text-[#C8A45D]/30" />
        </div>

        <p className="text-base text-neutral-700 italic font-light leading-relaxed">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>

      <div className="pt-4 border-t border-[#EAEAEA] flex items-center justify-between">
        <div>
          <h4 className="text-sm font-semibold text-[#171717]">
            {testimonial.author}
          </h4>
          <p className="text-xs text-neutral-500">
            {testimonial.position},{" "}
            <span className="font-medium text-[#171717]">{testimonial.company}</span>
          </p>
        </div>

        <span className="text-[11px] text-[#C8A45D] font-medium uppercase tracking-wider bg-[#FAF9F6] px-2.5 py-1 rounded-xs border border-[#EAEAEA]">
          {testimonial.industry}
        </span>
      </div>
    </div>
  );
}
