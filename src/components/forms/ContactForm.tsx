"use client";

import { useState } from "react";
import { MessageSquare, Mail, CheckCircle2, AlertCircle } from "lucide-react";
import { services } from "@/data/services";
import { ContactFormData, createContactWhatsAppUrl, createContactMailtoUrl } from "@/lib/whatsapp";

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [submittedMethod, setSubmittedMethod] = useState<"whatsapp" | "email" | null>(null);

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.message) {
      alert("Please fill in your name, phone number, and message.");
      return;
    }
    const url = createContactWhatsAppUrl(formData);
    setSubmittedMethod("whatsapp");
    window.open(url, "_blank");
  };

  const handleSubmitMailto = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) {
      alert("Please fill in your name, email, and message.");
      return;
    }
    const url = createContactMailtoUrl(formData);
    setSubmittedMethod("email");
    window.location.href = url;
  };

  return (
    <div className="bg-white p-8 sm:p-10 border border-[#EAEAEA] rounded-xs shadow-xs space-y-6">
      <div className="space-y-1">
        <h3 className="text-2xl font-light font-serif text-[#171717]">
          Send Us a Message
        </h3>
        <p className="text-sm text-neutral-500 font-light">
          Submit directly via prefilled WhatsApp or open in your email client.
        </p>
      </div>

      {submittedMethod && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xs flex items-start gap-3 text-emerald-800 text-sm">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">
              {submittedMethod === "whatsapp"
                ? "Opening WhatsApp chat..."
                : "Opening your email client..."}
            </p>
            <p className="text-xs text-emerald-700 mt-0.5">
              Your inquiry has been compiled with all required specifications. If the window did not open, click the button below again.
            </p>
          </div>
        </div>
      )}

      <form className="space-y-5">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Tariq Al-Mansoor"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="w-full px-4 py-3 bg-[#FAF9F6] border border-[#EAEAEA] rounded-xs text-sm text-[#171717] focus:outline-hidden focus:border-[#C8A45D] transition-colors"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              required
              placeholder="e.g. name@company.ae"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-[#FAF9F6] border border-[#EAEAEA] rounded-xs text-sm text-[#171717] focus:outline-hidden focus:border-[#C8A45D] transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2">
              Phone / WhatsApp Number *
            </label>
            <input
              type="tel"
              required
              placeholder="e.g. +971 50 123 4567"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 bg-[#FAF9F6] border border-[#EAEAEA] rounded-xs text-sm text-[#171717] focus:outline-hidden focus:border-[#C8A45D] transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2">
            Interested Printing Service
          </label>
          <select
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full px-4 py-3 bg-[#FAF9F6] border border-[#EAEAEA] rounded-xs text-sm text-[#171717] focus:outline-hidden focus:border-[#C8A45D] transition-colors"
          >
            <option value="">Select a service (optional)</option>
            {services.map((s) => (
              <option key={s.id} value={s.name}>
                {s.name}
              </option>
            ))}
            <option value="Custom Printing Inquiry">Other / Custom Inquiry</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2">
            Your Message & Specifications *
          </label>
          <textarea
            required
            rows={4}
            placeholder="Tell us about your print requirements, preferred paper, dimensions, or deadlines..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 bg-[#FAF9F6] border border-[#EAEAEA] rounded-xs text-sm text-[#171717] focus:outline-hidden focus:border-[#C8A45D] transition-colors resize-none"
          />
        </div>

        {/* Dual Working Submission Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={handleSubmitWhatsApp}
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-[#20ba59] transition-all cursor-pointer shadow-sm"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Send via WhatsApp</span>
          </button>

          <button
            type="button"
            onClick={handleSubmitMailto}
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#171717] text-white text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-[#C8A45D] hover:text-[#171717] transition-all cursor-pointer border border-[#171717] hover:border-[#C8A45D]"
          >
            <Mail className="w-4 h-4" />
            <span>Send via Email</span>
          </button>
        </div>

        <p className="text-[11px] text-neutral-400 text-center flex items-center justify-center gap-1.5 pt-1">
          <AlertCircle className="w-3.5 h-3.5 text-neutral-400" />
          <span>Inquiries are securely handled via direct encrypted WhatsApp or your native email client.</span>
        </p>
      </form>
    </div>
  );
}
