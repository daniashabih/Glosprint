import SectionHeading from "@/components/ui/SectionHeading";
import FaqAccordion from "@/components/ui/FaqAccordion";
import { generalFaqs } from "@/data/home";

export default function FaqSection() {
  return (
    <section className="py-20 md:py-28 bg-[#F7F7F9] dark:bg-[#181A20] border-b border-[#E5E5E5] dark:border-[#30333B] transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          overline="Clear Answers"
          title="Frequently Asked Questions"
          description="Everything you need to know about our commercial and luxury printing services, delivery timelines, paper stocks, and proofing in Dubai."
        />

        <FaqAccordion faqs={generalFaqs} />
      </div>
    </section>
  );
}
