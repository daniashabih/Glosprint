import { Briefcase, Building2, ShoppingBag, Utensils, Calendar, HeartPulse, Check } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { industriesWeServe } from "@/data/home";

export default function IndustriesSection() {
  const iconMap: Record<string, React.ReactNode> = {
    Briefcase: <Briefcase className="w-5 h-5 text-[#C8A45D]" />,
    Building2: <Building2 className="w-5 h-5 text-[#C8A45D]" />,
    ShoppingBag: <ShoppingBag className="w-5 h-5 text-[#C8A45D]" />,
    Utensils: <Utensils className="w-5 h-5 text-[#C8A45D]" />,
    Calendar: <Calendar className="w-5 h-5 text-[#C8A45D]" />,
    HeartPulse: <HeartPulse className="w-5 h-5 text-[#C8A45D]" />,
  };

  return (
    <section id="industries" className="py-20 md:py-28 bg-[#080808] border-b border-[#2B2B2B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          overline="Tailored UAE Solutions"
          title="Industries We Empower Across Dubai"
          description="Every sector possesses distinct print expectations. We design specialized print collateral adapted to the rigor and glamour of your commercial domain."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industriesWeServe.map((ind) => (
            <div
              key={ind.id}
              className="bg-[#191919] border border-[#2B2B2B] p-8 rounded-xs hover:bg-[#202020] hover:border-[#C8A45D] transition-all duration-300 hover:shadow-xl flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xs bg-[#101010] border border-[#C8A45D]/30 flex items-center justify-center">
                  {iconMap[ind.iconName]}
                </div>
                <h3 className="text-xl font-medium text-white font-serif">
                  {ind.title}
                </h3>
                <p className="text-sm text-[#B3B3B3] leading-relaxed font-light">
                  {ind.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#2B2B2B]">
                <p className="text-[11px] uppercase tracking-wider font-semibold text-[#858585] mb-2">
                  Specialized Deliverables:
                </p>
                <ul className="space-y-1.5">
                  {ind.typicalProducts.map((prod) => (
                    <li key={prod} className="text-xs text-[#B3B3B3] flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C8A45D]" />
                      <span>{prod}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
