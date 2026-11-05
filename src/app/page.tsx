import Hero from "@/components/sections/Hero";
import CategoryNavigation from "@/components/sections/CategoryNavigation";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import ShowcasesSection from "@/components/sections/ShowcasesSection";
import FinishesShowcase from "@/components/sections/FinishesShowcase";
import CapabilitiesSection from "@/components/sections/CapabilitiesSection";
import HowItWorks from "@/components/sections/HowItWorks";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import IndustriesSection from "@/components/sections/IndustriesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FaqSection from "@/components/sections/FaqSection";
import CtaBanner from "@/components/sections/CtaBanner";
import JsonLd from "@/components/seo/JsonLd";
import { generalFaqs } from "@/data/home";
import { createFAQSchema, createOrganizationSchema } from "@/lib/structured-data";

export default function Home() {
  const faqSchema = createFAQSchema(generalFaqs);
  const organizationSchema = createOrganizationSchema();

  return (
    <>
      {organizationSchema && <JsonLd data={organizationSchema} />}
      {faqSchema && <JsonLd data={faqSchema} />}

      {/* 1. Premium Printing Hero */}
      <Hero />

      {/* 2. Product Category Navigation */}
      <CategoryNavigation />

      {/* 3. Popular Printing Products */}
      <FeaturedProducts />

      {/* 4. Core Craftsmanship Showcases: Business Cards, Packaging, Stationery */}
      <ShowcasesSection />

      {/* 5. Luxury Finishes Showcase */}
      <FinishesShowcase />

      {/* 6. Manufacturing Capabilities */}
      <CapabilitiesSection />

      {/* 7. How It Works (6-Step Customer Workflow) */}
      <HowItWorks />

      {/* 8. Featured Portfolio */}
      <PortfolioPreview />

      {/* 9. Value Pillars & Why Choose Us */}
      <WhyChooseUs />

      {/* 10. Industries Served */}
      <IndustriesSection />

      {/* 11. Customer Testimonials */}
      <TestimonialsSection />

      {/* 12. Frequently Asked Questions */}
      <FaqSection />

      {/* 13. Conversion CTA Banner */}
      <CtaBanner />
    </>
  );
}
