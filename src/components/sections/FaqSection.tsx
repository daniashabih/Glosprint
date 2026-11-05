import SectionHeading from "@/components/ui/SectionHeading";
import FaqAccordion from "@/components/ui/FaqAccordion";
import { generalFaqs } from "@/data/home";

export default function FaqSection() {
  return (
    <section className="py-20 md:py-28 bg-[#101010] border-b border-[#2B2B2B]">
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
