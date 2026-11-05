import { companyInfo } from "@/data/company";
import { Product } from "@/types";
import { QuoteFormState } from "@/lib/validation";

/**
 * Clean phone number for WhatsApp wa.me links (digits only, e.g. 971508921764)
 */
export function getCleanWhatsAppNumber(): string {
  return companyInfo.whatsappNumber.replace(/[^0-9]/g, "");
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
export function createQuoteMailtoUrl(data: QuoteFormState): string {
  const subject = encodeURIComponent(
    `Quotation Request: ${data.product || data.category} - ${data.fullName}${data.companyName ? ` (${data.companyName})` : ""}`
  );

  const lines = [
    `Hello GLOSPRINT Estimations Team,`,
    ``,
    `Please prepare a custom quotation based on the following specifications:`,
    ``,
    `Customer Name: ${data.fullName}`,
    `Company: ${data.companyName || "N/A"}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    ``,
    `Category: ${data.category}`,
    `Product: ${data.product}`,
    `Quantity: ${data.quantity}`,
    data.size ? `Size: ${data.size}` : ``,
    data.material ? `Material: ${data.material}` : ``,
    data.finishing ? `Finishing: ${data.finishing}` : ``,
    data.deliveryDate ? `Required Date: ${data.deliveryDate}` : ``,
    data.artworkNotes ? `Notes: ${data.artworkNotes}` : ``,
    ``,
    `Best regards,`,
    `${data.fullName}`,
  ];

  const body = encodeURIComponent(lines.filter((l) => l !== "").join("\n"));
  return `mailto:${companyInfo.quoteEmail}?subject=${subject}&body=${body}`;
}
