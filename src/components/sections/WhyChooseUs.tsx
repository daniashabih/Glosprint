import { ShieldCheck, Cpu, Sparkles, Zap, Leaf, Users } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { whyChooseGlosprint, keyStats } from "@/data/home";

export default function WhyChooseUs() {
  const iconMap: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#C8A45D]" />,
    Cpu: <Cpu className="w-6 h-6 text-[#C8A45D]" />,
    Sparkles: <Sparkles className="w-6 h-6 text-[#C8A45D]" />,
    Zap: <Zap className="w-6 h-6 text-[#C8A45D]" />,
    Leaf: <Leaf className="w-6 h-6 text-[#C8A45D]" />,
    Users: <Users className="w-6 h-6 text-[#C8A45D]" />,
  };

  return (
    <section className="py-20 md:py-28 bg-[#141414] border-b border-[#2B2B2B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          overline="The GLOSPRINT Distinction"
          title="Why Dubai's Premier Brands Trust Us"
          description="We unite uncompromising German press engineering with bespoke European artisanal hand-finishing to deliver print work that demands respect."
        />

        {/* 6 Key Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseGlosprint.map((pillar) => (
            <div
              key={pillar.title}
              className="p-8 bg-[#191919] border border-[#2B2B2B] rounded-xs transition-all duration-300 hover:bg-[#202020] hover:border-[#C8A45D] hover:shadow-xl space-y-4"
            >
              <div className="w-12 h-12 rounded-xs bg-[#101010] border border-[#C8A45D]/30 flex items-center justify-center">
                {iconMap[pillar.icon]}
              </div>

              <h3 className="text-xl font-medium text-white font-serif">
                {pillar.title}
              </h3>

              <p className="text-sm text-[#B3B3B3] leading-relaxed font-light">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quantitative Benchmark Stats */}
        <div className="mt-16 pt-12 border-t border-[#2B2B2B] grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {keyStats.map((stat) => (
            <div key={stat.label} className="space-y-1">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-light text-white font-serif tracking-tight">
                <span className="text-[#C8A45D]">{stat.value}</span>
              </p>
              <p className="text-sm font-semibold uppercase tracking-wider text-white">
                {stat.label}
              </p>
              <p className="text-xs text-[#858585]">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
