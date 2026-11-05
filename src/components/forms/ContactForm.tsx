"use client";

import { useState } from "react";
import { MessageSquare, Mail, CheckCircle2, AlertCircle } from "lucide-react";
import { services } from "@/data/services";
import { ContactFormData, createContactWhatsAppUrl, createContactMailtoUrl } from "@/lib/whatsapp";

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedMethod, setSubmittedMethod] = useState<"whatsapp" | "email" | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Name must be at least 2 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone / WhatsApp number.";
    } else if (formData.phone.trim().replace(/[^0-9]/g, "").length < 7) {
      newErrors.phone = "Please enter a valid phone number with country/area code.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message or specifications.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const url = createContactWhatsAppUrl(formData);
    setSubmittedMethod("whatsapp");
    window.open(url, "_blank");
  };

  const handleSubmitMailto = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const url = createContactMailtoUrl(formData);
    setSubmittedMethod("email");
    window.location.href = url;
  };

  return (
    <div className="bg-[#191919] p-8 sm:p-10 border border-[#2B2B2B] rounded-xs shadow-xl space-y-6">
      <div className="space-y-1">
        <h3 className="text-2xl font-light font-serif text-white">
          Send Us a Message
        </h3>
        <p className="text-sm text-[#B3B3B3] font-light">
          Submit directly via prefilled WhatsApp or open in your email client.
        </p>
      </div>

      {/* Success Notification */}
      {submittedMethod && (
        <div className="p-4 bg-emerald-950/40 border border-emerald-800 rounded-xs flex items-start gap-3 text-emerald-300 text-sm">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-semibold">
              {submittedMethod === "whatsapp"
                ? "Opening WhatsApp Chat..."
                : "Opening Email Client..."}
            </p>
            <p className="text-xs text-emerald-400">
              Your inquiry has been compiled with all provided parameters. If the window did not open automatically, click the submission button again.
            </p>
          </div>
        </div>
      )}

      {/* Error Summary if any */}
      {Object.keys(errors).length > 0 && (
        <div className="p-4 bg-rose-950/40 border border-rose-800 rounded-xs flex items-start gap-2.5 text-rose-300 text-xs">
          <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
          <span>Please correct the highlighted fields below to continue.</span>
        </div>
      )}

      <form className="space-y-5" noValidate>
        {/* Full Name */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#B3B3B3] mb-2">
            Full Name *
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Tariq Al-Mansoor"
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
          {errors.fullName && (
            <p className="mt-1 text-xs text-rose-400">{errors.fullName}</p>
          )}
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#B3B3B3] mb-2">
              Email Address *
            </label>
            <input
              type="email"
              required
              placeholder="e.g. name@company.ae"
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
            {errors.email && (
              <p className="mt-1 text-xs text-rose-400">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#B3B3B3] mb-2">
              Phone / WhatsApp Number *
            </label>
            <input
              type="tel"
              required
              placeholder="e.g. +971 50 123 4567"
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
            {errors.phone && (
              <p className="mt-1 text-xs text-rose-400">{errors.phone}</p>
            )}
          </div>
        </div>

        {/* Service Selection */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#B3B3B3] mb-2">
            Interested Printing Service
          </label>
          <select
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full px-4 py-3 bg-[#101010] border border-[#2B2B2B] rounded-xs text-sm text-white focus:outline-hidden focus:border-[#C8A45D] focus:ring-1 focus:ring-[#C8A45D]/30 transition-colors"
          >
            <option value="" className="bg-[#191919] text-white">Select a service (optional)</option>
            {services.map((s) => (
              <option key={s.id} value={s.name} className="bg-[#191919] text-white">
                {s.name}
              </option>
            ))}
            <option value="Custom Printing Inquiry" className="bg-[#191919] text-white">Other / Custom Inquiry</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#B3B3B3] mb-2">
            Your Message & Specifications *
          </label>
          <textarea
            required
            rows={4}
            placeholder="Tell us about your print requirements, preferred paper, dimensions, or deadlines..."
            value={formData.message}
            onChange={(e) => {
              setFormData({ ...formData, message: e.target.value });
              if (errors.message) setErrors({ ...errors, message: undefined });
            }}
            className={`w-full px-4 py-3 bg-[#101010] border rounded-xs text-sm text-white placeholder:text-[#858585] focus:outline-hidden transition-colors resize-none ${
              errors.message
                ? "border-rose-500 focus:border-rose-400"
                : "border-[#2B2B2B] focus:border-[#C8A45D] focus:ring-1 focus:ring-[#C8A45D]/30"
            }`}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-rose-400">{errors.message}</p>
          )}
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
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#C8A45D] text-[#080808] text-xs font-bold uppercase tracking-wider rounded-xs hover:bg-[#DFCA95] transition-all cursor-pointer border border-[#C8A45D]"
          >
            <Mail className="w-4 h-4" />
            <span>Send via Email</span>
          </button>
        </div>

        <p className="text-[11px] text-[#858585] text-center flex items-center justify-center gap-1.5 pt-1">
          <AlertCircle className="w-3.5 h-3.5 text-[#858585]" />
          <span>Inquiries are securely handled via direct encrypted WhatsApp or your native email client.</span>
        </p>
      </form>
    </div>
  );
}
