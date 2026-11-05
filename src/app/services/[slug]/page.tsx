import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  MessageSquare,
  FileCheck,
  Package,
} from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import JsonLd from "@/components/seo/JsonLd";
import FaqAccordion from "@/components/ui/FaqAccordion";
import CtaBanner from "@/components/sections/CtaBanner";
import { services } from "@/data/services";
import { createServiceSchema, createFAQSchema } from "@/lib/structured-data";
import { createWhatsAppChatUrl } from "@/lib/whatsapp";
import { buildMetadata } from "@/lib/seo";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found | GLOSPRINT Dubai",
    };
  }

  return buildMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    canonicalPath: `/services/${service.slug}`,
    keywords: [
      service.name,
      `${service.name} Dubai`,
      `Best ${service.name} in UAE`,
      "Luxury Printing Dubai",
      "Commercial Printing Press Dubai",
    ],
    image: service.heroImage,
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const serviceSchema = createServiceSchema(service);
  const faqSchema = createFAQSchema(service.faqs);
  const whatsappUrl = createWhatsAppChatUrl(
    `Hello GLOSPRINT, I am interested in a quote for ${service.name} in Dubai.`
  );

  const relatedServices = services.filter((s) =>
    service.relatedServiceSlugs.includes(s.slug)
  );

  return (
    <>
      <JsonLd data={serviceSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}

      {/* Hero Section */}
      <div className="bg-[#101010] border-b border-[#2B2B2B] py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Services", url: "/services" },
              { name: service.name, url: `/services/${service.slug}` },
            ]}
          />

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#191919] border border-[#C8A45D]/40 rounded-xs text-xs font-semibold uppercase tracking-wider text-[#DFCA95]">
                <Sparkles className="w-3.5 h-3.5 text-[#C8A45D]" />
                <span>{service.category}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white font-serif leading-tight">
                {service.name}
              </h1>

              <p className="text-base sm:text-lg text-[#B3B3B3] font-light leading-relaxed">
                {service.shortDescription}
              </p>

              {/* Quick Specs Bar */}
              <div className="flex flex-wrap items-center gap-6 pt-2 text-sm text-[#B3B3B3]">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#C8A45D]" />
                  <span>Turnaround: <strong className="text-white">{service.turnaround}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Package className="w-4 h-4 text-[#C8A45D]" />
                  <span>Min Order: <strong className="text-white">{service.minOrder}</strong></span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <Button
                  href={`/request-a-quote?service=${encodeURIComponent(service.name)}`}
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Request a Quote
                </Button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold uppercase tracking-wider text-emerald-400 bg-[#191919] hover:bg-emerald-950/40 border border-emerald-800/60 rounded-xs transition-colors w-full sm:w-auto"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Inquire via WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Visual Hero Image */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-xs overflow-hidden border border-[#2B2B2B] bg-[#191919] shadow-2xl">
                <Image
                  src={service.heroImage}
                  alt={`${service.name} — GLOSPRINT Dubai`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content & Benefits Section */}
      <section className="py-20 md:py-28 bg-[#080808] border-b border-[#2B2B2B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Full Description & Key Benefits */}
            <div className="lg:col-span-7 space-y-10">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C8A45D]">
                  Craftsmanship & Standards
                </span>
                <h2 className="mt-2 text-2xl sm:text-3xl font-light font-serif text-white">
                  Precision Execution & Luxury Finishes
                </h2>
                <div className="mt-4 text-[#B3B3B3] leading-relaxed font-light space-y-4 text-base">
                  <p>{service.fullDescription}</p>
                </div>
              </div>

              {/* Benefits Checklist */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white font-serif">
                  Key Advantages of Choosing GLOSPRINT:
                </h3>
                <div className="space-y-3">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#C8A45D] shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-[#B3B3B3] font-light leading-relaxed">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Options & Materials Grid */}
              <div className="space-y-6 pt-4 border-t border-[#2B2B2B]">
                <h3 className="text-xl font-medium font-serif text-white">
                  Available Stocks & Customizations
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {service.options.map((option) => (
                    <div
                      key={option.category}
                      className="p-5 bg-[#191919] border border-[#2B2B2B] rounded-xs space-y-3"
                    >
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-white border-b border-[#C8A45D]/40 pb-1.5 inline-block">
                        {option.category}
                      </h4>
                      <ul className="space-y-1.5">
                        {option.choices.map((choice) => (
                          <li key={choice} className="text-xs text-[#B3B3B3] flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C8A45D]" />
                            <span>{choice}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Technical Specifications & Finishes Sticky Card */}
            <div className="lg:col-span-5 space-y-8">
              {/* Technical Specs Card */}
              <div className="p-8 bg-[#191919] border border-[#2B2B2B] rounded-xs space-y-6 shadow-xl">
                <div className="flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-[#C8A45D]" />
                  <h3 className="text-lg font-medium font-serif text-white">
                    Technical Specifications
                  </h3>
                </div>

                <div className="divide-y divide-[#2B2B2B] text-sm">
                  {service.specs.map((spec) => (
                    <div key={spec.label} className="py-3 flex justify-between gap-4">
                      <span className="text-[#858585] font-light">{spec.label}</span>
                      <span className="font-medium text-white text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <Button
                    href={`/request-a-quote?service=${encodeURIComponent(service.name)}`}
                    variant="primary"
                    size="md"
                    className="w-full"
                  >
                    Request Instant Quote
                  </Button>
                </div>
              </div>

              {/* Luxury Finishes Showcase Box */}
              <div className="p-8 bg-[#141414] border border-[#2B2B2B] rounded-xs space-y-4">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#858585]">
                  Signature Embellishments Available
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.finishes.map((f) => (
                    <span
                      key={f}
                      className="px-3 py-1.5 bg-[#191919] border border-[#C8A45D]/40 text-xs font-medium text-[#B3B3B3] rounded-xs"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-20 md:py-28 bg-[#141414] border-b border-[#2B2B2B]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C8A45D]">
                Frequently Asked Questions
              </span>
              <h2 className="mt-2 text-3xl font-light font-serif text-white">
                {service.name} FAQs
              </h2>
            </div>

            <FaqAccordion faqs={service.faqs} />
          </div>
        </section>
      )}

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-20 bg-[#080808] border-b border-[#2B2B2B]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C8A45D]">
                Complementary Solutions
              </span>
              <h2 className="mt-2 text-3xl font-light font-serif text-white">
                Related Printing Services
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedServices.map((rel) => (
                <div
                  key={rel.id}
                  className="group p-6 bg-[#191919] hover:bg-[#202020] border border-[#2B2B2B] rounded-xs hover:border-[#C8A45D] transition-all space-y-4"
                >
                  <h3 className="text-lg font-medium font-serif text-white group-hover:text-[#C8A45D] transition-colors">
                    <Link href={`/services/${rel.slug}`}>{rel.name}</Link>
                  </h3>
                  <p className="text-xs text-[#B3B3B3] line-clamp-2 leading-relaxed font-light">
                    {rel.shortDescription}
                  </p>
                  <Link
                    href={`/services/${rel.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-white group-hover:text-[#C8A45D] transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner />
    </>
  );
}
