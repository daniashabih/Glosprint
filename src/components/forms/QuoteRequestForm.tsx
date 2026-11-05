"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { MessageSquare, Mail, CheckCircle2, ShieldCheck, Zap, Sparkles, AlertCircle } from "lucide-react";
import { services } from "@/data/services";
import { QuoteFormData, createQuoteWhatsAppUrl, createQuoteMailtoUrl } from "@/lib/whatsapp";

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  quantity?: string;
}

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

  const [errors, setErrors] = useState<FormErrors>({});
  const [lastAction, setLastAction] = useState<"whatsapp" | "email" | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your name.";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Name must be at least 2 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone / WhatsApp.";
    } else if (formData.phone.trim().replace(/[^0-9]/g, "").length < 7) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!formData.quantity) {
      newErrors.quantity = "Please choose a quantity.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const url = createQuoteWhatsAppUrl(formData);
    setLastAction("whatsapp");
    window.open(url, "_blank");
  };

  const handleSubmitMailto = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const url = createQuoteMailtoUrl(formData);
    setLastAction("email");
    window.location.href = url;
  };

  return (
    <div className="bg-[#191919] p-8 sm:p-12 border border-[#2B2B2B] rounded-xs shadow-xl space-y-8">
      {/* Title & Introductory Text */}
      <div className="border-b border-[#2B2B2B] pb-6 space-y-2">
        <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C8A45D]">
          Bespoke Estimation
        </span>
        <h2 className="text-2xl sm:text-3xl font-light font-serif text-white">
          Request a Custom Printing Quotation
        </h2>
        <p className="text-sm text-[#B3B3B3] font-light leading-relaxed">
          Specify your print requirements below. We provide fast, accurate pricing within 1 to 2 business hours during Dubai working hours.
        </p>
      </div>

      {lastAction && (
        <div className="p-4 bg-emerald-950/40 border border-emerald-800 rounded-xs flex items-start gap-3 text-emerald-300 text-sm">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-semibold">
              {lastAction === "whatsapp"
                ? "Launching your pre-filled WhatsApp inquiry..."
                : "Launching your pre-formatted email draft..."}
            </p>
            <p className="text-xs text-emerald-400">
              Your detailed printing parameters have been compiled. Simply press send in the opened window.
            </p>
          </div>
        </div>
      )}

      {Object.keys(errors).length > 0 && (
        <div className="p-4 bg-rose-950/40 border border-rose-800 rounded-xs flex items-start gap-2.5 text-rose-300 text-xs">
          <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
          <span>Please fill in the required contact information below.</span>
        </div>
      )}

      <form className="space-y-6" noValidate>
        {/* Customer Contact Details */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white border-l-2 border-[#C8A45D] pl-3">
            1. Contact Information
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#B3B3B3] uppercase tracking-wider mb-2">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Sarah Jenkins"
                value={formData.fullName}
                onChange={(e) => {
                  setFormData({ ...formData, fullName: e.target.value });
                  if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                }}
                className={`w-full px-4 py-3 bg-[#101010] border rounded-xs text-sm text-white placeholder:text-[#858585] focus:outline-hidden transition-colors ${
                  errors.fullName
                    ? "border-rose-500 focus:border-rose-400"
                    : "border-[#2B2B2B] focus:border-[#C8A45D] focus:ring-1 focus:ring-[#C8A45D]/30"
                }`}
              />
              {errors.fullName && <p className="mt-1 text-xs text-rose-400">{errors.fullName}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#B3B3B3] uppercase tracking-wider mb-2">
                Email Address *
              </label>
              <input
                type="email"
                required
                placeholder="s.jenkins@company.ae"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) setErrors({ ...errors, email: undefined });
                }}
                className={`w-full px-4 py-3 bg-[#101010] border rounded-xs text-sm text-white placeholder:text-[#858585] focus:outline-hidden transition-colors ${
                  errors.email
                    ? "border-rose-500 focus:border-rose-400"
                    : "border-[#2B2B2B] focus:border-[#C8A45D] focus:ring-1 focus:ring-[#C8A45D]/30"
                }`}
              />
              {errors.email && <p className="mt-1 text-xs text-rose-400">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#B3B3B3] uppercase tracking-wider mb-2">
                Phone / WhatsApp *
              </label>
              <input
                type="tel"
                required
                placeholder="+971 50 123 4567"
                value={formData.phone}
                onChange={(e) => {
                  setFormData({ ...formData, phone: e.target.value });
                  if (errors.phone) setErrors({ ...errors, phone: undefined });
                }}
                className={`w-full px-4 py-3 bg-[#101010] border rounded-xs text-sm text-white placeholder:text-[#858585] focus:outline-hidden transition-colors ${
                  errors.phone
                    ? "border-rose-500 focus:border-rose-400"
                    : "border-[#2B2B2B] focus:border-[#C8A45D] focus:ring-1 focus:ring-[#C8A45D]/30"
                }`}
              />
              {errors.phone && <p className="mt-1 text-xs text-rose-400">{errors.phone}</p>}
            </div>
          </div>
        </div>

        {/* Project Specifics */}
        <div className="space-y-4 pt-4 border-t border-[#2B2B2B]">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white border-l-2 border-[#C8A45D] pl-3">
            2. Print Specifications
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#B3B3B3] uppercase tracking-wider mb-2">
                Service Required *
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 bg-[#101010] border border-[#2B2B2B] rounded-xs text-sm text-white focus:outline-hidden focus:border-[#C8A45D] focus:ring-1 focus:ring-[#C8A45D]/30"
              >
                {services.map((s) => (
                  <option key={s.id} value={s.name} className="bg-[#191919] text-white">
                    {s.name}
                  </option>
                ))}
                <option value="Bespoke Luxury Packaging" className="bg-[#191919] text-white">Bespoke Luxury Packaging</option>
                <option value="Custom Signage & Fabrication" className="bg-[#191919] text-white">Custom Signage & Fabrication</option>
                <option value="Other / Multi-Item Suite" className="bg-[#191919] text-white">Other / Multi-Item Suite</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#B3B3B3] uppercase tracking-wider mb-2">
                Estimated Quantity *
              </label>
              <select
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                className="w-full px-4 py-3 bg-[#101010] border border-[#2B2B2B] rounded-xs text-sm text-white focus:outline-hidden focus:border-[#C8A45D] focus:ring-1 focus:ring-[#C8A45D]/30"
              >
                <option value="50" className="bg-[#191919] text-white">50 Units</option>
                <option value="100" className="bg-[#191919] text-white">100 Units</option>
                <option value="250" className="bg-[#191919] text-white">250 Units</option>
                <option value="500" className="bg-[#191919] text-white">500 Units</option>
                <option value="1,000" className="bg-[#191919] text-white">1,000 Units</option>
                <option value="2,500" className="bg-[#191919] text-white">2,500 Units</option>
                <option value="5,000" className="bg-[#191919] text-white">5,000 Units</option>
                <option value="10,000+" className="bg-[#191919] text-white">10,000+ Units (Enterprise Bulk)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#B3B3B3] uppercase tracking-wider mb-2">
                Dimensions / Size
              </label>
              <input
                type="text"
                placeholder="e.g. Standard UAE, A4, or 25x20x10cm"
                value={formData.size}
                onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                className="w-full px-4 py-3 bg-[#101010] border border-[#2B2B2B] rounded-xs text-sm text-white placeholder:text-[#858585] focus:outline-hidden focus:border-[#C8A45D] focus:ring-1 focus:ring-[#C8A45D]/30"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div>
              <label className="block text-xs font-semibold text-[#B3B3B3] uppercase tracking-wider mb-2">
                Paper / Material Preference
              </label>
              <select
                value={formData.paperPreference}
                onChange={(e) => setFormData({ ...formData, paperPreference: e.target.value })}
                className="w-full px-4 py-3 bg-[#101010] border border-[#2B2B2B] rounded-xs text-sm text-white focus:outline-hidden focus:border-[#C8A45D] focus:ring-1 focus:ring-[#C8A45D]/30"
              >
                <option value="450gsm Velvet Soft-Touch Board" className="bg-[#191919] text-white">450gsm Velvet Soft-Touch Board</option>
                <option value="600gsm Cotton Triplex Board" className="bg-[#191919] text-white">600gsm Cotton Triplex Board</option>
                <option value="350gsm Silk Coated Artboard" className="bg-[#191919] text-white">350gsm Silk Coated Artboard</option>
                <option value="170gsm Silk / Gloss Text" className="bg-[#191919] text-white">170gsm Silk / Gloss Text</option>
                <option value="Handmade Italian Textured Paper" className="bg-[#191919] text-white">Handmade Italian Textured Paper</option>
                <option value="1800gsm Rigid Core Greyboard" className="bg-[#191919] text-white">1800gsm Rigid Core Greyboard</option>
                <option value="Waterproof Polypropylene (BOPP)" className="bg-[#191919] text-white">Waterproof Polypropylene (BOPP)</option>
                <option value="Cast Acrylic / Stainless Steel" className="bg-[#191919] text-white">Cast Acrylic / Stainless Steel</option>
                <option value="Recommend Best Material" className="bg-[#191919] text-white">Recommend Best Material for My Budget</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#B3B3B3] uppercase tracking-wider mb-2">
                Luxury Finishes Desired
              </label>
              <select
                value={formData.finishingPreference}
                onChange={(e) => setFormData({ ...formData, finishingPreference: e.target.value })}
                className="w-full px-4 py-3 bg-[#101010] border border-[#2B2B2B] rounded-xs text-sm text-white focus:outline-hidden focus:border-[#C8A45D] focus:ring-1 focus:ring-[#C8A45D]/30"
              >
                <option value="Champagne Gold Hot Foil" className="bg-[#191919] text-white">Champagne Gold Hot Foil</option>
                <option value="Silver Mirror Foil" className="bg-[#191919] text-white">Silver Mirror Foil</option>
                <option value="3D Raised Spot UV" className="bg-[#191919] text-white">3D Raised Spot UV</option>
                <option value="Blind Debossing / Embossing" className="bg-[#191919] text-white">Blind Debossing / Embossing</option>
                <option value="Beveled Gold Edge Gilding" className="bg-[#191919] text-white">Beveled Gold Edge Gilding</option>
                <option value="Soft-Touch Velvet Matte Lamination" className="bg-[#191919] text-white">Soft-Touch Velvet Matte Lamination</option>
                <option value="Multiple Finishes (Foil + Spot UV)" className="bg-[#191919] text-white">Multiple Finishes (Foil + Spot UV)</option>
                <option value="Standard Clean Matte / Gloss" className="bg-[#191919] text-white">Standard Clean Matte / Gloss</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#B3B3B3] uppercase tracking-wider mb-2">
                Target Timeline
              </label>
              <select
                value={formData.urgency}
                onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                className="w-full px-4 py-3 bg-[#101010] border border-[#2B2B2B] rounded-xs text-sm text-white focus:outline-hidden focus:border-[#C8A45D] focus:ring-1 focus:ring-[#C8A45D]/30"
              >
                <option value="Standard (2-4 Days)" className="bg-[#191919] text-white">Standard (2 – 4 Days)</option>
                <option value="Express (24-48 Hours)" className="bg-[#191919] text-white">Express (24 – 48 Hours)</option>
                <option value="Urgent Same-Day Emergency" className="bg-[#191919] text-white">Urgent Same-Day Emergency</option>
                <option value="Flexible / Forward Planning" className="bg-[#191919] text-white">Flexible / Forward Planning</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#B3B3B3] uppercase tracking-wider mb-2">
              Additional Instructions / Special Requests
            </label>
            <textarea
              rows={3}
              placeholder="Provide any additional specifications: e.g. Pantone codes, foil placement, packaging insert requirements, or multi-item suites..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full px-4 py-3 bg-[#101010] border border-[#2B2B2B] rounded-xs text-sm text-white placeholder:text-[#858585] focus:outline-hidden focus:border-[#C8A45D] focus:ring-1 focus:ring-[#C8A45D]/30 resize-none"
            />
          </div>
        </div>

        {/* Transmission Buttons */}
        <div className="pt-4 border-t border-[#2B2B2B] space-y-4">
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
              className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C8A45D] text-[#080808] text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xs hover:bg-[#DFCA95] transition-all cursor-pointer border border-[#C8A45D]"
            >
              <Mail className="w-4 h-4" />
              <span>Submit via Email</span>
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#858585] pt-2">
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
