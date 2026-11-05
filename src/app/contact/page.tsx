import { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageSquare, ArrowUpRight, Navigation } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ContactForm from "@/components/forms/ContactForm";
import { companyInfo } from "@/data/company";
import { createWhatsAppChatUrl } from "@/lib/whatsapp";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us | GLOSPRINT — Printing Press Dubai",
  description:
    "Contact GLOSPRINT in Dubai for quotations and consultations. Located in Al Quoz Industrial 3. Call +971 4 345 8921 or message our WhatsApp team.",
  canonicalPath: "/contact",
  keywords: [
    "Contact Printing Press Dubai",
    "GLOSPRINT Dubai Phone Number",
    "Printing Press Al Quoz",
    "Dubai Printing WhatsApp",
  ],
});

export default function ContactPage() {
  const whatsappUrl = createWhatsAppChatUrl();
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${companyInfo.geo.latitude},${companyInfo.geo.longitude}`;

  return (
    <>
      {/* Page Header */}
      <div className="bg-[#FAF9F6] border-b border-[#EAEAEA] py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Contact", url: "/contact" }]} />
          
          <div className="mt-6 max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C8A45D]">
              Direct Engagement
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-light text-[#171717] font-serif leading-tight">
              Contact GLOSPRINT
            </h1>
            <p className="mt-4 text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
              Visit our Al Quoz printing atelier, schedule an executive paper consultation, or submit your specifications for immediate pricing.
            </p>
          </div>
        </div>
      </div>

      {/* Main Contact Section */}
      <section className="py-20 md:py-28 bg-white border-b border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right Column: Direct Contact Information Cards */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct WhatsApp Callout */}
              <div className="p-6 bg-emerald-50/60 border border-emerald-200 rounded-xs space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xs bg-[#25D366] text-white flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#171717] uppercase tracking-wide">
                      Instant WhatsApp Channel
                    </h3>
                    <p className="text-xs text-neutral-600">
                      Typically responds in under 15 minutes
                    </p>
                  </div>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-[#20ba59] transition-all"
                >
                  <span>Chat With Print Consultant</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Physical Address Card */}
              <div className="p-6 bg-[#FAF9F6] border border-[#EAEAEA] rounded-xs space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xs bg-white border border-[#EAEAEA] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#C8A45D]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                      Facility & Showroom
                    </h4>
                    <p className="text-sm font-medium text-[#171717]">
                      {companyInfo.address.street}
                    </p>
                    <p className="text-xs text-neutral-500">
                      {companyInfo.address.neighborhood}, {companyInfo.address.city}, {companyInfo.address.country}
                    </p>
                  </div>
                </div>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#C8A45D] hover:underline pt-1"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                </a>
              </div>

              {/* Phone & Email */}
              <div className="p-6 bg-[#FAF9F6] border border-[#EAEAEA] rounded-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xs bg-white border border-[#EAEAEA] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#C8A45D]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                      Landline
                    </h4>
                    <a href={`tel:${companyInfo.phone}`} className="text-sm font-medium text-[#171717] hover:text-[#C8A45D]">
                      {companyInfo.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-[#EAEAEA]">
                  <div className="w-10 h-10 rounded-xs bg-white border border-[#EAEAEA] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#C8A45D]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                      Electronic Mail
                    </h4>
                    <a href={`mailto:${companyInfo.email}`} className="text-sm font-medium text-[#171717] hover:text-[#C8A45D]">
                      {companyInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="p-6 bg-[#FAF9F6] border border-[#EAEAEA] rounded-xs space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xs bg-white border border-[#EAEAEA] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#C8A45D]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                      Operating Hours
                    </h4>
                    <p className="text-sm font-medium text-[#171717]">
                      {companyInfo.openingHours[0].days}
                    </p>
                    <p className="text-xs text-neutral-500">
                      {companyInfo.openingHours[0].hours}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Visual Card */}
      <section className="py-16 bg-[#FAF9F6] border-b border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[#EAEAEA] rounded-xs p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#C8A45D]">
                Visit Our Showroom
              </span>
              <h3 className="text-xl font-medium font-serif text-[#171717]">
                Touch Our Sample Swatches in Al Quoz, Dubai
              </h3>
              <p className="text-sm text-neutral-600 font-light max-w-xl">
                We invite corporate marketing teams, luxury founders, and creative agencies to browse hundreds of paperboards, foils, and binding samples.
              </p>
            </div>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#171717] text-white text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-[#C8A45D] hover:text-[#171717] transition-all shrink-0"
            >
              <Navigation className="w-4 h-4 text-[#C8A45D]" />
              <span>Get GPS Directions</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
