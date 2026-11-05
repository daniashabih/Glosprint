import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import PortfolioCard from "@/components/ui/PortfolioCard";
import { portfolioItems } from "@/data/portfolio";
import Button from "@/components/ui/Button";

export default function PortfolioPreview() {
  const previewItems = portfolioItems.slice(0, 4);

  return (
    <section className="py-20 md:py-28 bg-[#080808] border-b border-[#2B2B2B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            overline="Selected Works"
            title="Where Craftsmanship Meets Vision"
            description="A glimpse into recent bespoke packaging, executive corporate suites, and architectural signage engineered in our Dubai facility."
            align="left"
            className="mb-0"
          />

          <div className="mt-6 md:mt-0">
            <Button href="/portfolio" variant="secondary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
              Explore Full Portfolio
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {previewItems.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
