import { Star, Quote } from "lucide-react";
import { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white dark:bg-[#1C1F26] p-8 sm:p-10 border border-[#EAEAEA] dark:border-[#30333B] rounded-xs relative flex flex-col justify-between space-y-6 hover:border-[#C8A45D] dark:hover:border-[#DFCA95] transition-all duration-300 hover:shadow-md dark:hover:shadow-xl">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#C8A45D] text-[#C8A45D]" />
            ))}
          </div>
          <Quote className="w-8 h-8 text-[#C8A45D]/30" />
        </div>

        <p className="text-base text-neutral-700 dark:text-neutral-200 italic font-light leading-relaxed">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>

      <div className="pt-4 border-t border-[#EAEAEA] dark:border-[#30333B] flex items-center justify-between">
        <div>
          <h4 className="text-sm font-semibold text-[#171717] dark:text-white">
            {testimonial.author}
          </h4>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            {testimonial.position},{" "}
            <span className="font-medium text-[#171717] dark:text-neutral-200">{testimonial.company}</span>
          </p>
        </div>

        <span className="text-[11px] text-[#C8A45D] dark:text-[#DFCA95] font-medium uppercase tracking-wider bg-[#FAF9F6] dark:bg-[#181A20] px-2.5 py-1 rounded-xs border border-[#EAEAEA] dark:border-[#30333B]">
          {testimonial.industry}
        </span>
      </div>
    </div>
  );
}
