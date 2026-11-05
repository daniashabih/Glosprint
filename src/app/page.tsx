import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import IndustriesSection from "@/components/sections/IndustriesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FaqSection from "@/components/sections/FaqSection";
import CtaBanner from "@/components/sections/CtaBanner";
import JsonLd from "@/components/seo/JsonLd";
import { generalFaqs } from "@/data/home";
import { createFAQSchema } from "@/lib/structured-data";

export default function Home() {
  const faqSchema = createFAQSchema(generalFaqs);

  return (
    <>
      {faqSchema && <JsonLd data={faqSchema} />}
      <Hero />
      <ServicesGrid limit={6} showAllLink={true} />
      <WhyChooseUs />
      <PortfolioPreview />
      <IndustriesSection />
      <ProcessSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaBanner />
    </>
  );
}
