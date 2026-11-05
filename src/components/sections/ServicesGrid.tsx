import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/data/services";
import Button from "@/components/ui/Button";

interface ServicesGridProps {
  limit?: number;
  showAllLink?: boolean;
}

export default function ServicesGrid({ limit = 6, showAllLink = true }: ServicesGridProps) {
  const displayServices = limit ? services.slice(0, limit) : services;

  return (
    <section className="py-20 md:py-28 bg-[#101010] border-b border-[#2B2B2B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          overline="Our Printing Expertise"
          title="Bespoke Printing Services in Dubai"
          description="Crafted with German offset litho engineering and artisan embellishments. Each service is tailored for corporations, retail brands, and creative leaders."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} priority={index < 2} />
          ))}
        </div>

        {showAllLink && (
          <div className="mt-14 text-center">
            <Button href="/services" variant="outline" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
              View All 15 Printing Services
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
