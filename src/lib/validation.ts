export interface QuoteFormState {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  category: string;
  product: string;
  quantity: string;
  size: string;
  material: string;
  finishing: string;
  deliveryDate: string;
  artworkNotes: string;
  artworkFile?: File | null;
}

export interface FormErrors {
  [key: string]: string | undefined;
}

const ALLOWED_MIME_TYPES = [
  "application/pdf",
  "image/png",
  "image/jpeg",
  "image/webp",
  "image/tiff",
  "application/postscript", // .ai / .eps
  "image/vnd.adobe.photoshop", // .psd
];

const ALLOWED_EXTENSIONS = [
  ".pdf",
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
  ".ai",
  ".eps",
  ".psd",
  ".tiff",
  ".zip",
];

const MAX_FILE_SIZE_BYTES = 25 * 1024 * 1024; // 25 MB

export function validateQuoteForm(data: QuoteFormState): {
  isValid: boolean;
  errors: FormErrors;
} {
  const errors: FormErrors = {};

  // Full Name
  if (!data.fullName.trim()) {
    errors.fullName = "Please enter your full name.";
  } else if (data.fullName.trim().length < 2) {
    errors.fullName = "Name must be at least 2 characters.";
  }

  // Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!emailRegex.test(data.email.trim())) {
    errors.email = "Please enter a valid business email address.";
  }

  // Phone
  const phoneDigits = data.phone.replace(/[^0-9]/g, "");
  if (!data.phone.trim()) {
    errors.phone = "Please enter your phone or WhatsApp number.";
  } else if (phoneDigits.length < 7) {
    errors.phone = "Please enter a valid phone number with country/area code.";
  }

  // Category & Product
  if (!data.category.trim()) {
    errors.category = "Please select a product category.";
  }
  if (!data.product.trim()) {
    errors.product = "Please specify the product you need.";
  }

  // Quantity
  if (!data.quantity.trim()) {
    errors.quantity = "Please enter your required order quantity.";
  } else {
    const qtyNum = parseInt(data.quantity.replace(/[^0-9]/g, ""), 10);
    if (isNaN(qtyNum) || qtyNum <= 0) {
      errors.quantity = "Quantity must be a valid positive number.";
    }
  }

  // File validation if provided
  if (data.artworkFile) {
    const file = data.artworkFile;
    const fileExt = `.${file.name.split(".").pop()?.toLowerCase()}`;
    const isValidType =
      ALLOWED_MIME_TYPES.includes(file.type) ||
      ALLOWED_EXTENSIONS.includes(fileExt);

    if (!isValidType) {
      errors.artworkFile =
        "Unsupported file format. Please upload PDF, AI, PSD, EPS, TIFF, PNG, JPG, or ZIP.";
    } else if (file.size > MAX_FILE_SIZE_BYTES) {
      errors.artworkFile =
        "File exceeds 25 MB limit. Please supply a download link in the notes field.";
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
