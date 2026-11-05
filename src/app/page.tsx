import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import IndustriesSection from "@/components/sections/IndustriesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CtaBanner from "@/components/sections/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid limit={6} showAllLink={true} />
      <WhyChooseUs />
      <PortfolioPreview />
      <IndustriesSection />
      <ProcessSection />
      <TestimonialsSection />
      <CtaBanner />
    </>
  );
}
