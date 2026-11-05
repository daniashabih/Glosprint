import { Metadata } from "next";
import Image from "next/image";
import { Check, ShieldCheck, Award, Sparkles, Printer, ArrowRight, HeartHandshake } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import CtaBanner from "@/components/sections/CtaBanner";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Us | GLOSPRINT — Luxury Printing Press Dubai",
  description:
    "Learn about GLOSPRINT's artisan heritage, German Heidelberg press technology, and commitment to luxury commercial printing across Dubai and the UAE.",
  canonicalPath: "/about",
  keywords: [
    "About GLOSPRINT Dubai",
    "Luxury Printing Press Dubai",
    "Commercial Printers Al Quoz",
    "Heidelberg Press Dubai",
    "Packaging Manufacturer Dubai",
  ],
});

export default function AboutPage() {
  const values = [
    {
      title: "Unyielding Precision",
      description:
        "We measure print registration down to microns and verify Pantone swatches under D50 daylight illuminants to ensure zero margin for error.",
      icon: <ShieldCheck className="w-6 h-6 text-[#C8A45D]" />,
    },
    {
      title: "Artisan Glamour",
      description:
        "Print is a sensory medium. We combine tactile cotton papers, deep hot foils, and dimensional varnishes to create irresistible luxury.",
      icon: <Sparkles className="w-6 h-6 text-[#C8A45D]" />,
    },
    {
      title: "Dubai Agility",
      description:
        "Dubai moves fast. With 24-hour turnaround capabilities and dedicated emergency press queues, we keep your business moving forward.",
      icon: <Printer className="w-6 h-6 text-[#C8A45D]" />,
    },
    {
      title: "Sustainable Integrity",
      description:
        "We champion FSC-certified forest papers, bio-degradable coatings, and eco-friendly vegetable soy inks that honor our environment.",
      icon: <Award className="w-6 h-6 text-[#C8A45D]" />,
    },
  ];

  return (
    <>
      {/* Page Header */}
      <div className="bg-[#101010] border-b border-[#2B2B2B] py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "About Us", url: "/about" }]} />
          
          <div className="mt-6 max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C8A45D]">
              Our Heritage & Vision
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-light text-white font-serif leading-tight">
              Premium Printing & Creative Branding.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#B3B3B3] font-light leading-relaxed">
              Founded in Dubai, GLOSPRINT was conceived to bridge the divide between industrial manufacturing efficiency and bespoke haute-couture print craftsmanship.
            </p>
          </div>
        </div>
      </div>

      {/* Brand Story Section */}
      <section className="py-20 md:py-28 bg-[#080808] border-b border-[#2B2B2B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C8A45D]">
                The Atelier Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-light font-serif text-white leading-tight">
                Crafting Physical Distinction in a Digital World
              </h2>
              <div className="space-y-4 text-[#B3B3B3] text-sm sm:text-base leading-relaxed font-light">
                <p>
                  In a digital age saturated with ephemeral pixels and fleeting messages, the physical touch of an exquisitely crafted object holds unprecedented power. When a client slides open a velvet-lined rigid presentation box or holds an executive business card with mirror-foiled bevels, your brand transcends digital noise into tangible luxury.
                </p>
                <p>
                  GLOSPRINT operates from an advanced production atelier in Al Quoz, Dubai. Here, multi-color German Heidelberg offset presses and Swiss digital cutting tables work alongside vintage letterpress platens and master bookbinders. This fusion of industrial scale and hand craftsmanship allows us to execute projects of any magnitude without sacrificing intimacy of detail.
                </p>
                <p>
                  From multinational banking corporations in the DIFC to bespoke perfumeries in the Dubai Mall and high-society nuptials, we are privileged to produce work that defines prestige across the United Arab Emirates.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Button href="/services" variant="primary" size="md">
                  Explore Services
                </Button>
                <Button href="/portfolio" variant="secondary" size="md">
                  View Our Work
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-xs overflow-hidden border border-[#2B2B2B] bg-[#191919] shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=1000&q=80"
                  alt="GLOSPRINT Dubai Printing Atelier & Luxury Craftsmen"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 md:py-28 bg-[#101010] border-b border-[#2B2B2B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 sm:p-10 bg-[#191919] hover:bg-[#202020] hover:border-[#C8A45D] border border-[#2B2B2B] transition-all rounded-xs space-y-4 shadow-lg">
              <div className="w-12 h-12 rounded-xs bg-[#141414] border border-[#C8A45D]/30 flex items-center justify-center">
                <HeartHandshake className="w-6 h-6 text-[#C8A45D]" />
              </div>
              <h3 className="text-2xl font-light font-serif text-white">
                Our Mission
              </h3>
              <p className="text-sm sm:text-base text-[#B3B3B3] leading-relaxed font-light">
                To empower brands in Dubai and the GCC with print collateral that commands authority, captivates audiences, and elevates brand perception through impeccable tactile execution, speed, and uncompromising quality standards.
              </p>
            </div>

            <div className="p-8 sm:p-10 bg-[#191919] hover:bg-[#202020] hover:border-[#C8A45D] border border-[#2B2B2B] transition-all rounded-xs space-y-4 shadow-lg">
              <div className="w-12 h-12 rounded-xs bg-[#141414] border border-[#C8A45D]/30 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-[#C8A45D]" />
              </div>
              <h3 className="text-2xl font-light font-serif text-white">
                Our Vision
              </h3>
              <p className="text-sm sm:text-base text-[#B3B3B3] leading-relaxed font-light">
                To be universally recognized as the Middle East&apos;s definitive luxury print house, setting the global benchmark for creative finishes, packaging engineering, and sustainable manufacturing excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-28 bg-[#080808] border-b border-[#2B2B2B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            overline="Guiding Principles"
            title="Our Four Pillars of Excellence"
            description="Every sheet fed through our presses and every ribbon hand-tied by our finishing staff is governed by these steadfast standards."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="p-8 bg-[#191919] border border-[#2B2B2B] rounded-xs space-y-4 hover:bg-[#202020] hover:border-[#C8A45D] transition-all shadow-md"
              >
                <div className="w-12 h-12 rounded-xs bg-[#141414] border border-[#2B2B2B] flex items-center justify-center">
                  {v.icon}
                </div>
                <h3 className="text-lg font-medium text-white font-serif">
                  {v.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#B3B3B3] leading-relaxed font-light">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitment Section */}
      <section className="py-20 md:py-28 bg-[#101010] border-b border-[#2B2B2B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-square rounded-xs overflow-hidden border border-[#2B2B2B] bg-[#191919] shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
                  alt="Quality control and offset printing at GLOSPRINT Dubai"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C8A45D]">
                Quality Assurance Guarantee
              </span>
              <h2 className="text-3xl sm:text-4xl font-light font-serif text-white">
                State-of-the-Art German & Swiss Technology
              </h2>
              <p className="text-[#B3B3B3] text-sm sm:text-base leading-relaxed font-light">
                Our plant is equipped with calibrated multi-unit Heidelberg Speedmaster offset presses, Xerox Iridesse digital engines with specialty metallic toners, and Zünd precision flatbed cutters.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  "ISO 12647-2 Certified Color Management",
                  "Automated Spectrophotometer In-line Scanning",
                  "100% Pre-Dispatch Manual Quality Auditing",
                  "Complimentary Digital & CAD White Samples",
                  "FSC / PEFC Chain of Custody Compliance",
                  "Climate Controlled Stock Storage in Dubai",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#C8A45D] shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-white">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button href="/request-a-quote" variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                  Start Your Project
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
