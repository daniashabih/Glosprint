import { companyInfo } from "@/data/company";

export interface QuoteFormData {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  quantity: string;
  size?: string;
  paperPreference?: string;
  finishingPreference?: string;
  urgency?: string;
  notes?: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  service?: string;
  message: string;
}

/**
 * Clean phone number for WhatsApp wa.me links
 */
export function getCleanWhatsAppNumber(): string {
  return companyInfo.whatsappNumber.replace(/[^0-9]/g, "");
}

/**
 * Generate a prefilled WhatsApp link for general or service inquiries
 */
export function createWhatsAppChatUrl(message?: string): string {
  const number = getCleanWhatsAppNumber();
  const text = message
    ? encodeURIComponent(message)
    : encodeURIComponent(
        `Hello GLOSPRINT, I would like to inquire about your premium printing services in Dubai.`
      );
  return `https://wa.me/${number}?text=${text}`;
}

/**
 * Generate a prefilled WhatsApp link for a detailed quote inquiry
 */
export function createQuoteWhatsAppUrl(data: QuoteFormData): string {
  const number = getCleanWhatsAppNumber();
  const message = [
    `*NEW QUOTATION INQUIRY — GLOSPRINT DUBAI*`,
    `--------------------------------------`,
    `*Customer:* ${data.fullName}`,
    `*Email:* ${data.email}`,
    `*Phone:* ${data.phone}`,
    `*Required Service:* ${data.service}`,
    `*Quantity:* ${data.quantity}`,
    data.size ? `*Dimensions / Size:* ${data.size}` : null,
    data.paperPreference ? `*Paper / Material:* ${data.paperPreference}` : null,
    data.finishingPreference ? `*Finishing Preference:* ${data.finishingPreference}` : null,
    data.urgency ? `*Timeline:* ${data.urgency}` : null,
    data.notes ? `*Additional Instructions:* ${data.notes}` : null,
    `--------------------------------------`,
    `Sent from glosprint.ae`,
  ]
    .filter(Boolean)
    .join("\n");

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/**
 * Generate mailto link for quote inquiry fallback
 */
export function createQuoteMailtoUrl(data: QuoteFormData): string {
  const subject = encodeURIComponent(`Quotation Request: ${data.service} - ${data.fullName}`);
  const body = encodeURIComponent(
    [
      `Hello GLOSPRINT Team,`,
      ``,
      `Please provide a quotation based on the following specifications:`,
      ``,
      `Customer Name: ${data.fullName}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Service: ${data.service}`,
      `Quantity: ${data.quantity}`,
      data.size ? `Size: ${data.size}` : ``,
      data.paperPreference ? `Material Preference: ${data.paperPreference}` : ``,
      data.finishingPreference ? `Finishes: ${data.finishingPreference}` : ``,
      data.urgency ? `Required Timeline: ${data.urgency}` : ``,
      data.notes ? `Notes: ${data.notes}` : ``,
      ``,
      `Best regards,`,
      `${data.fullName}`,
    ]
      .filter((line) => line !== undefined)
      .join("\n")
  );

  return `mailto:${companyInfo.quoteEmail}?subject=${subject}&body=${body}`;
}

/**
 * Generate WhatsApp URL for contact form
 */
export function createContactWhatsAppUrl(data: ContactFormData): string {
  const number = getCleanWhatsAppNumber();
  const message = [
    `*NEW WEBSITE INQUIRY — GLOSPRINT*`,
    `--------------------------------------`,
    `*Name:* ${data.fullName}`,
    `*Email:* ${data.email}`,
    `*Phone:* ${data.phone}`,
    data.service ? `*Interested Service:* ${data.service}` : null,
    `*Message:* ${data.message}`,
    `--------------------------------------`,
    `Sent from glosprint.ae`,
  ]
    .filter(Boolean)
    .join("\n");

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/**
 * Generate mailto link for contact form
 */
export function createContactMailtoUrl(data: ContactFormData): string {
  const subject = encodeURIComponent(`General Inquiry from ${data.fullName}`);
  const body = encodeURIComponent(
    [
      `Hello GLOSPRINT,`,
      ``,
      `Name: ${data.fullName}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      data.service ? `Interested Service: ${data.service}` : ``,
      `Message:`,
      data.message,
    ]
      .filter(Boolean)
      .join("\n")
  );

  return `mailto:${companyInfo.email}?subject=${subject}&body=${body}`;
}
