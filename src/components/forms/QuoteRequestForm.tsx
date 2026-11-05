"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { MessageSquare, Mail, CheckCircle2, ShieldCheck, Zap, Sparkles } from "lucide-react";
import { services } from "@/data/services";
import { QuoteFormData, createQuoteWhatsAppUrl, createQuoteMailtoUrl } from "@/lib/whatsapp";

export default function QuoteRequestForm() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") || "";

  const [formData, setFormData] = useState<QuoteFormData>(() => ({
    fullName: "",
    email: "",
    phone: "",
    service: preselectedService || "Business Card Printing",
    quantity: "250",
    size: "Standard",
    paperPreference: "450gsm Velvet Soft-Touch Board",
    finishingPreference: "Champagne Gold Foil",
    urgency: "Standard (2-4 Days)",
    notes: "",
  }));

  const [lastAction, setLastAction] = useState<"whatsapp" | "email" | null>(null);

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.quantity) {
      alert("Please fill in your name, phone number, and required quantity.");
      return;
    }
    const url = createQuoteWhatsAppUrl(formData);
    setLastAction("whatsapp");
    window.open(url, "_blank");
  };

  const handleSubmitMailto = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.quantity) {
      alert("Please fill in your name, email, and required quantity.");
      return;
    }
    const url = createQuoteMailtoUrl(formData);
    setLastAction("email");
    window.location.href = url;
  };

  return (
    <div className="bg-white p-8 sm:p-12 border border-[#EAEAEA] rounded-xs shadow-xs space-y-8">
      {/* Title & Introductory Text */}
      <div className="border-b border-[#EAEAEA] pb-6 space-y-2">
        <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C8A45D]">
          Bespoke Estimation
        </span>
        <h2 className="text-2xl sm:text-3xl font-light font-serif text-[#171717]">
          Request a Custom Printing Quotation
        </h2>
        <p className="text-sm text-neutral-600 font-light leading-relaxed">
          Specify your print requirements below. We provide fast, accurate pricing within 1 to 2 business hours during Dubai working hours.
        </p>
      </div>

      {lastAction && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xs flex items-start gap-3 text-emerald-800 text-sm">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">
              {lastAction === "whatsapp"
                ? "Launching your pre-filled WhatsApp inquiry..."
                : "Launching your pre-formatted email draft..."}
            </p>
            <p className="text-xs text-emerald-700 mt-0.5">
              Your detailed printing parameters have been compiled. Simply press send in the opened window.
            </p>
          </div>
        </div>
      )}

      <form className="space-y-6">
        {/* Customer Contact Details */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[#171717] border-l-2 border-[#C8A45D] pl-3">
            1. Contact Information
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Sarah Jenkins"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-4 py-3 bg-[#FAF9F6] border border-[#EAEAEA] rounded-xs text-sm text-[#171717] focus:outline-hidden focus:border-[#C8A45D]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                Email Address *
              </label>
              <input
                type="email"
                required
                placeholder="s.jenkins@company.ae"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-[#FAF9F6] border border-[#EAEAEA] rounded-xs text-sm text-[#171717] focus:outline-hidden focus:border-[#C8A45D]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                Phone / WhatsApp *
              </label>
              <input
                type="tel"
                required
                placeholder="+971 50 123 4567"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 bg-[#FAF9F6] border border-[#EAEAEA] rounded-xs text-sm text-[#171717] focus:outline-hidden focus:border-[#C8A45D]"
              />
            </div>
          </div>
        </div>

        {/* Project Specifics */}
        <div className="space-y-4 pt-4 border-t border-[#EAEAEA]">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[#171717] border-l-2 border-[#C8A45D] pl-3">
            2. Print Specifications
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                Service Required *
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 bg-[#FAF9F6] border border-[#EAEAEA] rounded-xs text-sm text-[#171717] focus:outline-hidden focus:border-[#C8A45D]"
              >
                {services.map((s) => (
                  <option key={s.id} value={s.name}>
                    {s.name}
                  </option>
                ))}
                <option value="Bespoke Luxury Packaging">Bespoke Luxury Packaging</option>
                <option value="Custom Signage & Fabrication">Custom Signage & Fabrication</option>
                <option value="Other / Multi-Item Suite">Other / Multi-Item Suite</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                Estimated Quantity *
              </label>
              <select
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                className="w-full px-4 py-3 bg-[#FAF9F6] border border-[#EAEAEA] rounded-xs text-sm text-[#171717] focus:outline-hidden focus:border-[#C8A45D]"
              >
                <option value="50">50 Units</option>
                <option value="100">100 Units</option>
                <option value="250">250 Units</option>
                <option value="500">500 Units</option>
                <option value="1,000">1,000 Units</option>
                <option value="2,500">2,500 Units</option>
                <option value="5,000">5,000 Units</option>
                <option value="10,000+">10,000+ Units (Enterprise Bulk)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                Dimensions / Size
              </label>
              <input
                type="text"
                placeholder="e.g. Standard UAE, A4, or 25x20x10cm"
                value={formData.size}
                onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                className="w-full px-4 py-3 bg-[#FAF9F6] border border-[#EAEAEA] rounded-xs text-sm text-[#171717] focus:outline-hidden focus:border-[#C8A45D]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div>
              <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                Paper / Material Preference
              </label>
              <select
                value={formData.paperPreference}
                onChange={(e) => setFormData({ ...formData, paperPreference: e.target.value })}
                className="w-full px-4 py-3 bg-[#FAF9F6] border border-[#EAEAEA] rounded-xs text-sm text-[#171717] focus:outline-hidden focus:border-[#C8A45D]"
              >
                <option value="450gsm Velvet Soft-Touch Board">450gsm Velvet Soft-Touch Board</option>
                <option value="600gsm Cotton Triplex Board">600gsm Cotton Triplex Board</option>
                <option value="350gsm Silk Coated Artboard">350gsm Silk Coated Artboard</option>
                <option value="170gsm Silk / Gloss Text">170gsm Silk / Gloss Text</option>
                <option value="Handmade Italian Textured Paper">Handmade Italian Textured Paper</option>
                <option value="1800gsm Rigid Core Greyboard">1800gsm Rigid Core Greyboard</option>
                <option value="Waterproof Polypropylene (BOPP)">Waterproof Polypropylene (BOPP)</option>
                <option value="Cast Acrylic / Stainless Steel">Cast Acrylic / Stainless Steel</option>
                <option value="Recommend Best Material">Recommend Best Material for My Budget</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                Luxury Finishes Desired
              </label>
              <select
                value={formData.finishingPreference}
                onChange={(e) => setFormData({ ...formData, finishingPreference: e.target.value })}
                className="w-full px-4 py-3 bg-[#FAF9F6] border border-[#EAEAEA] rounded-xs text-sm text-[#171717] focus:outline-hidden focus:border-[#C8A45D]"
              >
                <option value="Champagne Gold Hot Foil">Champagne Gold Hot Foil</option>
                <option value="Silver Mirror Foil">Silver Mirror Foil</option>
                <option value="3D Raised Spot UV">3D Raised Spot UV</option>
                <option value="Blind Debossing / Embossing">Blind Debossing / Embossing</option>
                <option value="Beveled Gold Edge Gilding">Beveled Gold Edge Gilding</option>
                <option value="Soft-Touch Velvet Matte Lamination">Soft-Touch Velvet Matte Lamination</option>
                <option value="Multiple Finishes (Foil + Spot UV)">Multiple Finishes (Foil + Spot UV)</option>
                <option value="Standard Clean Matte / Gloss">Standard Clean Matte / Gloss</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                Target Timeline
              </label>
              <select
                value={formData.urgency}
                onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                className="w-full px-4 py-3 bg-[#FAF9F6] border border-[#EAEAEA] rounded-xs text-sm text-[#171717] focus:outline-hidden focus:border-[#C8A45D]"
              >
                <option value="Standard (2-4 Days)">Standard (2 – 4 Days)</option>
                <option value="Express (24-48 Hours)">Express (24 – 48 Hours)</option>
                <option value="Urgent Same-Day Emergency">Urgent Same-Day Emergency</option>
                <option value="Flexible / Forward Planning">Flexible / Forward Planning</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
              Additional Instructions / Special Requests
            </label>
            <textarea
              rows={3}
              placeholder="Provide any additional specifications: e.g. Pantone codes, foil placement, packaging insert requirements, or multi-item suites..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full px-4 py-3 bg-[#FAF9F6] border border-[#EAEAEA] rounded-xs text-sm text-[#171717] focus:outline-hidden focus:border-[#C8A45D] resize-none"
            />
          </div>
        </div>

        {/* Transmission Buttons */}
        <div className="pt-4 border-t border-[#EAEAEA] space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              onClick={handleSubmitWhatsApp}
              className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-xs hover:bg-[#20ba59] transition-all cursor-pointer shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Submit via WhatsApp (Fastest)</span>
            </button>

            <button
              type="button"
              onClick={handleSubmitMailto}
              className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#171717] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-xs hover:bg-[#C8A45D] hover:text-[#171717] transition-all cursor-pointer border border-[#171717] hover:border-[#C8A45D]"
            >
              <Mail className="w-4 h-4" />
              <span>Submit via Email</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-6 text-xs text-neutral-500 pt-2">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#C8A45D]" />
              <span>No Spam Guarantee</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-[#C8A45D]" />
              <span>Fast Dubai Response</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#C8A45D]" />
              <span>Free Pre-Press Artwork Check</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
