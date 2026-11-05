import { companyInfo } from "@/data/company";
import { Product } from "@/types";
import { QuoteFormState } from "@/lib/validation";

/**
 * Clean phone number for WhatsApp wa.me links (digits only, e.g. 971508921764)
 */
export function getCleanWhatsAppNumber(): string {
  return companyInfo.whatsappNumber.replace(/[^0-9]/g, "");
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  service?: string;
  message: string;
}

export function createContactWhatsAppUrl(data: ContactFormData): string {
  const number = getCleanWhatsAppNumber();
  const text = encodeURIComponent(
    `*GLOSPRINT GENERAL INQUIRY*\n` +
    `--------------------------------------\n` +
    `*Name:* ${data.fullName}\n` +
    `*Email:* ${data.email}\n` +
    `*Phone:* ${data.phone}\n` +
    `*Service:* ${data.service || "General Inquiry"}\n` +
    `*Message:* ${data.message}\n` +
    `--------------------------------------`
  );
  return `https://wa.me/${number}?text=${text}`;
}

export function createContactMailtoUrl(data: ContactFormData): string {
  const subject = encodeURIComponent(`Inquiry from ${data.fullName} - ${data.service || "General"}`);
  const body = encodeURIComponent(
    `Name: ${data.fullName}\nEmail: ${data.email}\nPhone: ${data.phone}\nService: ${data.service || "General Inquiry"}\n\nMessage:\n${data.message}`
  );
  return `mailto:${companyInfo.email}?subject=${subject}&body=${body}`;
}

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

export function createQuoteWhatsAppUrl(data: QuoteFormData): string {
  const number = getCleanWhatsAppNumber();
  const text = encodeURIComponent(
    `*GLOSPRINT QUOTE REQUEST*\n` +
    `--------------------------------------\n` +
    `*Name:* ${data.fullName}\n` +
    `*Email:* ${data.email}\n` +
    `*Phone:* ${data.phone}\n` +
    `*Service:* ${data.service}\n` +
    `*Quantity:* ${data.quantity}\n` +
    (data.size ? `*Size:* ${data.size}\n` : "") +
    (data.paperPreference ? `*Paper Stock:* ${data.paperPreference}\n` : "") +
    (data.finishingPreference ? `*Finishing:* ${data.finishingPreference}\n` : "") +
    (data.urgency ? `*Urgency:* ${data.urgency}\n` : "") +
    (data.notes ? `*Notes:* ${data.notes}\n` : "") +
    `--------------------------------------`
  );
  return `https://wa.me/${number}?text=${text}`;
}

/**
 * Generate a prefilled WhatsApp link for general inquiries
 */
export function createWhatsAppChatUrl(message?: string): string {
  const number = getCleanWhatsAppNumber();
  const text = message
    ? encodeURIComponent(message)
    : encodeURIComponent(
        `Hello GLOSPRINT, I would like to inquire about your premium commercial printing and branding services in Dubai.`
      );
  return `https://wa.me/${number}?text=${text}`;
}

/**
 * Generate a WhatsApp inquiry link from an individual product detail page
 */
export function createProductWhatsAppUrl(
  product: Product,
  options?: {
    size?: string;
    material?: string;
    finishing?: string;
    quantity?: number | string;
  }
): string {
  const number = getCleanWhatsAppNumber();
  const lines: string[] = [
    `*GLOSPRINT PRODUCT INQUIRY*`,
    `--------------------------------------`,
    `*Product:* ${product.name}`,
    `*Category:* ${product.categoryName}`,
    options?.quantity
      ? `*Requested Quantity:* ${options.quantity}`
      : `*Min Order Quantity:* ${product.minOrderQuantity}`,
    options?.size ? `*Size / Format:* ${options.size}` : `*Available Sizes:* ${product.availableSizes[0]}`,
    options?.material ? `*Stock / Material:* ${options.material}` : `*Material:* ${product.paperMaterials[0]}`,
    options?.finishing ? `*Finishing:* ${options.finishing}` : `*Finishing Options:* ${product.finishingOptions.slice(0, 2).join(", ")}`,
    `*Standard Turnaround:* ${product.productionTime}`,
    `--------------------------------------`,
    `Please provide custom quote pricing and production availability.`,
    `Sent from glosprint.ae/products/${product.slug}`,
  ];

  return `https://wa.me/${number}?text=${encodeURIComponent(lines.join("\n"))}`;
}

/**
 * Generate a WhatsApp link for the Interactive Quote Estimator
 */
export function createInteractiveQuoteWhatsAppUrl(data: QuoteFormState): string {
  const number = getCleanWhatsAppNumber();
  const lines: (string | null)[] = [
    `*GLOSPRINT — OFFICIAL QUOTATION REQUEST*`,
    `======================================`,
    `*Customer:* ${data.fullName}`,
    data.companyName ? `*Company:* ${data.companyName}` : null,
    `*Email:* ${data.email}`,
    `*Phone:* ${data.phone}`,
    `--------------------------------------`,
    `*Category:* ${data.category}`,
    `*Product:* ${data.product}`,
    `*Quantity:* ${data.quantity} units`,
    data.size ? `*Dimensions / Size:* ${data.size}` : null,
    data.material ? `*Material / Stock:* ${data.material}` : null,
    data.finishing ? `*Finishing:* ${data.finishing}` : null,
    data.deliveryDate ? `*Required Delivery:* ${data.deliveryDate}` : null,
    data.artworkFile ? `*Artwork:* Attached / Uploaded (${data.artworkFile.name})` : `*Artwork:* Will provide upon quotation`,
    data.artworkNotes ? `*Special Instructions:* ${data.artworkNotes}` : null,
    `======================================`,
    `Sent via GLOSPRINT Interactive Estimator`,
  ];

  const filteredMessage = lines.filter(Boolean).join("\n");
  return `https://wa.me/${number}?text=${encodeURIComponent(filteredMessage)}`;
}

/**
 * Generate mailto link for quote inquiry fallback
 */
export function createQuoteMailtoUrl(data: QuoteFormState | QuoteFormData): string {
  const isFormState = "category" in data && "product" in data;
  const productName = isFormState
    ? (data as QuoteFormState).product || (data as QuoteFormState).category
    : (data as QuoteFormData).service;
  const company = "companyName" in data && (data as QuoteFormState).companyName
    ? ` (${(data as QuoteFormState).companyName})`
    : "";
  const subject = encodeURIComponent(
    `Quotation Request: ${productName} - ${data.fullName}${company}`
  );

  const lines = [
    `Hello GLOSPRINT Estimations Team,`,
    ``,
    `Please prepare a custom quotation based on the following specifications:`,
    ``,
    `Customer Name: ${data.fullName}`,
    `Company: ${"companyName" in data ? (data as QuoteFormState).companyName || "N/A" : "N/A"}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    ``,
    `Service / Product: ${productName}`,
    `Quantity: ${data.quantity}`,
    "size" in data && data.size ? `Size: ${data.size}` : ``,
    "material" in data && (data as QuoteFormState).material ? `Material: ${(data as QuoteFormState).material}` : ``,
    "paperPreference" in data && (data as QuoteFormData).paperPreference ? `Paper Stock: ${(data as QuoteFormData).paperPreference}` : ``,
    "finishing" in data && (data as QuoteFormState).finishing ? `Finishing: ${(data as QuoteFormState).finishing}` : ``,
    "finishingPreference" in data && (data as QuoteFormData).finishingPreference ? `Finishing: ${(data as QuoteFormData).finishingPreference}` : ``,
    "deliveryDate" in data && (data as QuoteFormState).deliveryDate ? `Required Date: ${(data as QuoteFormState).deliveryDate}` : ``,
    "urgency" in data && (data as QuoteFormData).urgency ? `Urgency: ${(data as QuoteFormData).urgency}` : ``,
    "artworkNotes" in data && (data as QuoteFormState).artworkNotes ? `Notes: ${(data as QuoteFormState).artworkNotes}` : ``,
    "notes" in data && (data as QuoteFormData).notes ? `Notes: ${(data as QuoteFormData).notes}` : ``,
    ``,
    `Best regards,`,
    `${data.fullName}`,
  ];

  const body = encodeURIComponent(lines.filter((l) => l !== "").join("\n"));
  return `mailto:${companyInfo.quoteEmail}?subject=${subject}&body=${body}`;
}
