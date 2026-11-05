"use client";

import { useState, useId, useMemo, ChangeEvent, FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import {
  UploadCloud,
  FileCheck2,
  Calendar,
  MessageSquare,
  CheckCircle2,
  Send,
  AlertCircle,
  Copy,
  Check,
} from "lucide-react";
import { productCategories } from "@/data/categories";
import { products } from "@/data/products";
import { companyInfo } from "@/data/company";
import {
  createInteractiveQuoteWhatsAppUrl,
  createQuoteMailtoUrl,
} from "@/lib/whatsapp";
import {
  QuoteFormState,
  validateQuoteForm,
  FormErrors,
} from "@/lib/validation";

export default function InteractiveQuoteEstimator() {
  const searchParams = useSearchParams();
  const initialCategoryParam = searchParams.get("category") || "business-corporate";
  const initialProductParam = searchParams.get("product") || "";

  const [formState, setFormState] = useState<QuoteFormState>({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    category: initialCategoryParam,
    product: initialProductParam,
    quantity: "500",
    size: "",
    material: "",
    finishing: "",
    deliveryDate: "",
    artworkNotes: "",
    artworkFile: null,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  // Available products for current category
  const categoryProducts = useMemo(() => {
    return products.filter((p) => p.categoryId === formState.category);
  }, [formState.category]);

  // Selected product object
  const currentProduct = useMemo(() => {
    if (!formState.product) return categoryProducts[0];
    return (
      categoryProducts.find((p) => p.name === formState.product) ||
      categoryProducts[0]
    );
  }, [categoryProducts, formState.product]);

  // Initialize product, size, material if empty
  const activeProduct = currentProduct || products[0];
  const activeSize = formState.size || activeProduct.availableSizes[0] || "Standard Size";
  const activeMaterial = formState.material || activeProduct.paperMaterials[0] || "Premium Stock";
  const activeFinishing = formState.finishing || activeProduct.finishingOptions[0] || "Standard Finish";

  // Handle category change
  const handleCategoryChange = (catId: string) => {
    const newCategoryProducts = products.filter((p) => p.categoryId === catId);
    const firstProduct = newCategoryProducts[0];
    setFormState((prev) => ({
      ...prev,
      category: catId,
      product: firstProduct ? firstProduct.name : "",
      size: firstProduct ? firstProduct.availableSizes[0] : "",
      material: firstProduct ? firstProduct.paperMaterials[0] : "",
      finishing: firstProduct ? firstProduct.finishingOptions[0] : "",
    }));
  };

  // Handle product change
  const handleProductChange = (prodName: string) => {
    const prod = products.find((p) => p.name === prodName);
    setFormState((prev) => ({
      ...prev,
      product: prodName,
      size: prod ? prod.availableSizes[0] : "",
      material: prod ? prod.paperMaterials[0] : "",
      finishing: prod ? prod.finishingOptions[0] : "",
    }));
  };

  // Handle file input
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 25 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          artworkFile: "File size exceeds 25MB limit.",
        }));
        return;
      }
      setFormState((prev) => ({ ...prev, artworkFile: file }));
      setErrors((prev) => ({ ...prev, artworkFile: undefined }));
    }
  };

  // Handle generic input change
  const handleInputChange = (field: keyof QuoteFormState, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  // Validate and submit
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validateQuoteForm({
      ...formState,
      product: formState.product || activeProduct.name,
      size: formState.size || activeSize,
      material: formState.material || activeMaterial,
      finishing: formState.finishing || activeFinishing,
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
  };

  // Copy specs to clipboard
  const handleCopyDetails = () => {
    const details = [
      `GLOSPRINT PRINT SPECIFICATIONS`,
      `Client: ${formState.fullName} (${formState.companyName || "Private"})`,
      `Phone: ${formState.phone}`,
      `Email: ${formState.email}`,
      `Product: ${formState.product || activeProduct.name}`,
      `Category: ${formState.category}`,
      `Quantity: ${formState.quantity} units`,
      `Size: ${formState.size || activeSize}`,
      `Material: ${formState.material || activeMaterial}`,
      `Finishing: ${formState.finishing || activeFinishing}`,
      formState.deliveryDate ? `Required Date: ${formState.deliveryDate}` : null,
      formState.artworkNotes ? `Notes: ${formState.artworkNotes}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    navigator.clipboard.writeText(details);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Generate WhatsApp and Mailto links
  const activeSubmissionData: QuoteFormState = {
    ...formState,
    product: formState.product || activeProduct.name,
    size: formState.size || activeSize,
    material: formState.material || activeMaterial,
    finishing: formState.finishing || activeFinishing,
  };

  const whatsappUrl = createInteractiveQuoteWhatsAppUrl(activeSubmissionData);
  const mailtoUrl = createQuoteMailtoUrl(activeSubmissionData);

  const fileInputId = useId();

  return (
    <div className="bg-[#191919] border border-[#2B2B2B] rounded-xs shadow-2xl overflow-hidden">
      {/* Estimator Header */}
      <div className="bg-[#141414] border-b border-[#2B2B2B] text-white p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C8A45D]">
            Live Technical Quotation
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-light mt-1 text-white">
            Printing Specification & Quote Estimator
          </h2>
          <p className="text-xs sm:text-sm text-[#B3B3B3] mt-1.5 font-light max-w-xl">
            Configure your exact materials, dimensions, and finishing requirements. We calculate custom trade quotes without automated guesswork.
          </p>
        </div>

        <div className="shrink-0">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold uppercase tracking-wider px-4 py-3 rounded-xs transition-colors shadow-xs"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Fast WhatsApp Quote</span>
          </a>
        </div>
      </div>

      {isSubmitted ? (
        /* Submission Success / Preview State */
        <div className="p-8 sm:p-12 text-center max-w-2xl mx-auto space-y-6">
          <div className="w-16 h-16 bg-emerald-950/60 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-800">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-serif text-white">
              Quotation Request Prepared!
            </h3>
            <p className="text-sm text-[#B3B3B3] font-light leading-relaxed">
              Thank you, <strong className="text-white font-medium">{formState.fullName}</strong>. Your custom specification draft for <strong className="text-white font-medium">{formState.product || activeProduct.name}</strong> has been assembled with all selected technical options.
            </p>
          </div>

          {/* Review Box */}
          <div className="text-left bg-[#141414] border border-[#2B2B2B] p-5 rounded-xs space-y-2 text-xs text-[#B3B3B3]">
            <p className="font-semibold text-white border-b border-[#2B2B2B] pb-2">
              Order Summary Draft:
            </p>
            <p><strong className="text-white">Product:</strong> {formState.product || activeProduct.name}</p>
            <p><strong className="text-white">Quantity:</strong> {formState.quantity} units</p>
            <p><strong className="text-white">Size:</strong> {formState.size || activeSize}</p>
            <p><strong className="text-white">Material:</strong> {formState.material || activeMaterial}</p>
            <p><strong className="text-white">Finishing:</strong> {formState.finishing || activeFinishing}</p>
            {formState.deliveryDate && (
              <p><strong className="text-white">Delivery By:</strong> {formState.deliveryDate}</p>
            )}
            {formState.artworkFile && (
              <p><strong className="text-white">File:</strong> {formState.artworkFile.name}</p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-3 rounded-xs text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send via WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={handleCopyDetails}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#141414] border border-[#2B2B2B] hover:border-[#C8A45D] text-white px-5 py-3 rounded-xs text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? "Copied to Clipboard!" : "Copy Specifications"}</span>
            </button>

            <a
              href={mailtoUrl}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C8A45D] hover:bg-[#DFCA95] text-[#080808] px-5 py-3 rounded-xs text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <span>Email Request</span>
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsSubmitted(false)}
            className="text-xs text-[#C8A45D] hover:text-[#DFCA95] hover:underline pt-4 block mx-auto cursor-pointer"
          >
            ← Modify Specifications or Configure Another Product
          </button>
        </div>
      ) : (
        /* The 10-Step Form & Live Summary */
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#2B2B2B]">
          {/* Form Interactive Steps */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-8 p-6 sm:p-8 space-y-8"
          >
            {/* Step 1: Select Category */}
            <div className="space-y-3">
              <label className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-white">
                <span className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#C8A45D] text-[#080808] font-bold text-[10px] flex items-center justify-center font-mono">1</span>
                  Select Product Category
                </span>
                <span className="text-[#858585] font-light normal-case">Step 1 of 10</span>
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                {productCategories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`p-3 text-left rounded-xs border text-xs transition-all cursor-pointer ${
                      formState.category === cat.id
                        ? "border-[#C8A45D] bg-[#202020] text-white font-semibold ring-1 ring-[#C8A45D]"
                        : "border-[#2B2B2B] bg-[#141414] text-[#B3B3B3] hover:bg-[#202020] hover:border-[#C8A45D] hover:text-white"
                    }`}
                  >
                    <div className="line-clamp-1">{cat.name.split("&")[0].trim()}</div>
                    <div className="text-[10px] text-[#858585] font-light mt-0.5">
                      {cat.itemCountDescription.split(" ")[0]} items
                    </div>
                  </button>
                ))}
              </div>
              {errors.category && (
                <p className="text-xs text-rose-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.category}</span>
                </p>
              )}
            </div>

            {/* Step 2: Select Product */}
            <div className="space-y-3">
              <label className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-white">
                <span className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#C8A45D] text-[#080808] font-bold text-[10px] flex items-center justify-center font-mono">2</span>
                  Select Specific Product
                </span>
                <span className="text-[#858585] font-light normal-case">Step 2 of 10</span>
              </label>

              <select
                value={formState.product || activeProduct.name}
                onChange={(e) => handleProductChange(e.target.value)}
                className="w-full px-4 py-3 bg-[#101010] border border-[#2B2B2B] rounded-xs text-xs text-white focus:outline-hidden focus:border-[#C8A45D] focus:ring-1 focus:ring-[#C8A45D]/40 transition-colors"
              >
                {categoryProducts.map((p) => (
                  <option key={p.id} value={p.name} className="bg-[#191919] text-white">
                    {p.name} (MOQ: {p.minOrderQuantity})
                  </option>
                ))}
              </select>
              {errors.product && (
                <p className="text-xs text-rose-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.product}</span>
                </p>
              )}
            </div>

            {/* Step 3 & 4: Paper/Material & Size */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Step 3: Material */}
              <div className="space-y-3">
                <label className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white">
                  <span className="w-5 h-5 rounded-full bg-[#C8A45D] text-[#080808] font-bold text-[10px] flex items-center justify-center font-mono">3</span>
                  Paper / Substrate Material
                </label>
                <select
                  value={activeMaterial}
                  onChange={(e) => handleInputChange("material", e.target.value)}
                  className="w-full px-4 py-3 bg-[#101010] border border-[#2B2B2B] rounded-xs text-xs text-white focus:outline-hidden focus:border-[#C8A45D] focus:ring-1 focus:ring-[#C8A45D]/40 transition-colors"
                >
                  {activeProduct.paperMaterials.map((mat, i) => (
                    <option key={i} value={mat} className="bg-[#191919] text-white">
                      {mat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Step 4: Size */}
              <div className="space-y-3">
                <label className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white">
                  <span className="w-5 h-5 rounded-full bg-[#C8A45D] text-[#080808] font-bold text-[10px] flex items-center justify-center font-mono">4</span>
                  Dimensions & Format
                </label>
                <select
                  value={activeSize}
                  onChange={(e) => handleInputChange("size", e.target.value)}
                  className="w-full px-4 py-3 bg-[#101010] border border-[#2B2B2B] rounded-xs text-xs text-white focus:outline-hidden focus:border-[#C8A45D] focus:ring-1 focus:ring-[#C8A45D]/40 transition-colors"
                >
                  {activeProduct.availableSizes.map((sz, i) => (
                    <option key={i} value={sz} className="bg-[#191919] text-white">
                      {sz}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Step 5 & 6: Printing Type & Finishing */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Step 5: Printing Type */}
              <div className="space-y-3">
                <label className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white">
                  <span className="w-5 h-5 rounded-full bg-[#C8A45D] text-[#080808] font-bold text-[10px] flex items-center justify-center font-mono">5</span>
                  Printing Color Mode
                </label>
                <select
                  defaultValue={activeProduct.printingColors[0]}
                  className="w-full px-4 py-3 bg-[#101010] border border-[#2B2B2B] rounded-xs text-xs text-white focus:outline-hidden focus:border-[#C8A45D] focus:ring-1 focus:ring-[#C8A45D]/40 transition-colors"
                >
                  {activeProduct.printingColors.map((clr, i) => (
                    <option key={i} value={clr} className="bg-[#191919] text-white">
                      {clr}
                    </option>
                  ))}
                </select>
              </div>

              {/* Step 6: Finishing */}
              <div className="space-y-3">
                <label className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white">
                  <span className="w-5 h-5 rounded-full bg-[#C8A45D] text-[#080808] font-bold text-[10px] flex items-center justify-center font-mono">6</span>
                  Luxury Finishing / Coating
                </label>
                <select
                  value={activeFinishing}
                  onChange={(e) => handleInputChange("finishing", e.target.value)}
                  className="w-full px-4 py-3 bg-[#101010] border border-[#2B2B2B] rounded-xs text-xs text-white focus:outline-hidden focus:border-[#C8A45D] focus:ring-1 focus:ring-[#C8A45D]/40 transition-colors"
                >
                  {activeProduct.finishingOptions.map((fn, i) => (
                    <option key={i} value={fn} className="bg-[#191919] text-white">
                      {fn}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Step 7 & 8: Quantity & Delivery Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Step 7: Quantity */}
              <div className="space-y-3">
                <label className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white">
                  <span className="w-5 h-5 rounded-full bg-[#C8A45D] text-[#080808] font-bold text-[10px] flex items-center justify-center font-mono">7</span>
                  Quantity (Units / Pieces)
                </label>
                <div className="space-y-2">
                  <input
                    type="text"
                    value={formState.quantity}
                    onChange={(e) => handleInputChange("quantity", e.target.value)}
                    placeholder="e.g. 500"
                    className="w-full px-4 py-3 bg-[#101010] border border-[#2B2B2B] rounded-xs text-xs text-white placeholder:text-[#858585] focus:outline-hidden focus:border-[#C8A45D] focus:ring-1 focus:ring-[#C8A45D]/40 transition-colors"
                  />
                  <div className="flex flex-wrap gap-1.5">
                    {activeProduct.availableQuantities.slice(0, 4).map((q) => (
                      <button
                        key={q}
                        type="button"
                        onClick={() => handleInputChange("quantity", q.toString())}
                        className={`px-2.5 py-1 text-[10px] font-semibold border rounded-xs transition-colors cursor-pointer ${
                          formState.quantity === q.toString()
                            ? "bg-[#C8A45D] text-[#080808] border-[#C8A45D]"
                            : "bg-[#141414] text-[#B3B3B3] border-[#2B2B2B] hover:border-[#C8A45D] hover:text-white"
                        }`}
                      >
                        {q.toLocaleString()}
                      </button>
                    ))}
                  </div>
                </div>
                {errors.quantity && (
                  <p className="text-xs text-rose-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.quantity}</span>
                  </p>
                )}
              </div>

              {/* Step 8: Delivery Requirements */}
              <div className="space-y-3">
                <label className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white">
                  <span className="w-5 h-5 rounded-full bg-[#C8A45D] text-[#080808] font-bold text-[10px] flex items-center justify-center font-mono">8</span>
                  Required Delivery Timeline
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={formState.deliveryDate}
                    onChange={(e) => handleInputChange("deliveryDate", e.target.value)}
                    className="w-full px-4 py-3 bg-[#101010] border border-[#2B2B2B] rounded-xs text-xs text-white focus:outline-hidden focus:border-[#C8A45D] focus:ring-1 focus:ring-[#C8A45D]/40 transition-colors"
                  />
                  <Calendar className="w-4 h-4 text-[#858585] absolute right-3 top-3.5 pointer-events-none" />
                </div>
                <p className="text-[10px] text-[#858585] font-light">
                  Standard production: {activeProduct.productionTime}
                </p>
              </div>
            </div>

            {/* Step 9: Artwork Upload (Optional) */}
            <div className="space-y-3">
              <label className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-white">
                <span className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#C8A45D] text-[#080808] font-bold text-[10px] flex items-center justify-center font-mono">9</span>
                  Upload Artwork File (Optional)
                </span>
                <span className="text-[10px] text-[#858585] font-light normal-case">
                  PDF, AI, PSD, PNG up to 25 MB
                </span>
              </label>

              <label
                htmlFor={fileInputId}
                className={`border-2 border-dashed rounded-xs p-6 flex flex-col items-center justify-center text-center cursor-pointer transition-colors ${
                  formState.artworkFile
                    ? "border-emerald-500 bg-emerald-950/30"
                    : "border-[#2B2B2B] bg-[#141414] hover:bg-[#202020] hover:border-[#C8A45D]"
                }`}
              >
                <input
                  id={fileInputId}
                  type="file"
                  onChange={handleFileChange}
                  accept=".pdf,.png,.jpg,.jpeg,.ai,.psd,.eps,.tiff,.zip"
                  className="sr-only"
                />

                {formState.artworkFile ? (
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-medium">
                    <FileCheck2 className="w-5 h-5" />
                    <span>{formState.artworkFile.name} ({(formState.artworkFile.size / (1024 * 1024)).toFixed(2)} MB)</span>
                  </div>
                ) : (
                  <div className="space-y-1">
                    <UploadCloud className="w-7 h-7 text-[#C8A45D] mx-auto" />
                    <p className="text-xs font-medium text-white">
                      Drag & drop your print-ready file, or <span className="text-[#C8A45D] underline">browse</span>
                    </p>
                    <p className="text-[10px] text-[#858585] font-light">
                      Print-ready PDF with 3mm bleed recommended. Don&apos;t have artwork yet? Leave blank for consultation.
                    </p>
                  </div>
                )}
              </label>
              {errors.artworkFile && (
                <p className="text-xs text-rose-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.artworkFile}</span>
                </p>
              )}
            </div>

            {/* Step 10: Customer Contact & Submit */}
            <div className="space-y-4 pt-4 border-t border-[#2B2B2B]">
              <label className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white">
                <span className="w-5 h-5 rounded-full bg-[#C8A45D] text-[#080808] font-bold text-[10px] flex items-center justify-center font-mono">10</span>
                Your Contact Information
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    value={formState.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    placeholder="Full Name *"
                    className="w-full px-4 py-3 bg-[#101010] border border-[#2B2B2B] rounded-xs text-xs text-white placeholder:text-[#858585] focus:outline-hidden focus:border-[#C8A45D] focus:ring-1 focus:ring-[#C8A45D]/40 transition-colors"
                  />
                  {errors.fullName && (
                    <p className="text-xs text-rose-400 mt-1">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    value={formState.companyName}
                    onChange={(e) => handleInputChange("companyName", e.target.value)}
                    placeholder="Company / Brand Name (Optional)"
                    className="w-full px-4 py-3 bg-[#101010] border border-[#2B2B2B] rounded-xs text-xs text-white placeholder:text-[#858585] focus:outline-hidden focus:border-[#C8A45D] focus:ring-1 focus:ring-[#C8A45D]/40 transition-colors"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="Business Email Address *"
                    className="w-full px-4 py-3 bg-[#101010] border border-[#2B2B2B] rounded-xs text-xs text-white placeholder:text-[#858585] focus:outline-hidden focus:border-[#C8A45D] focus:ring-1 focus:ring-[#C8A45D]/40 transition-colors"
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-400 mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <input
                    type="tel"
                    value={formState.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="Phone / WhatsApp Number *"
                    className="w-full px-4 py-3 bg-[#101010] border border-[#2B2B2B] rounded-xs text-xs text-white placeholder:text-[#858585] focus:outline-hidden focus:border-[#C8A45D] focus:ring-1 focus:ring-[#C8A45D]/40 transition-colors"
                  />
                  {errors.phone && (
                    <p className="text-xs text-rose-400 mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <textarea
                  rows={3}
                  value={formState.artworkNotes}
                  onChange={(e) => handleInputChange("artworkNotes", e.target.value)}
                  placeholder="Additional instructions, Pantone codes, packaging fitment requests, or special delivery notes..."
                  className="w-full px-4 py-3 bg-[#101010] border border-[#2B2B2B] rounded-xs text-xs text-white placeholder:text-[#858585] focus:outline-hidden focus:border-[#C8A45D] focus:ring-1 focus:ring-[#C8A45D]/40 transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#C8A45D] hover:bg-[#DFCA95] text-[#080808] py-3.5 px-6 rounded-xs text-xs font-bold uppercase tracking-widest transition-colors shadow-md cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Generate Quotation Draft</span>
                </button>
              </div>
            </div>
          </form>

          {/* Right Column: Live Order Summary Panel */}
          <div className="lg:col-span-4 bg-[#141414] p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="border-b border-[#2B2B2B] pb-4">
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#C8A45D]">
                  Dynamic Preview
                </span>
                <h3 className="text-lg font-serif font-medium text-white mt-0.5">
                  Live Order Summary
                </h3>
                <p className="text-[11px] text-[#858585] font-light mt-0.5">
                  Updates in real time as you adjust specifications
                </p>
              </div>

              {/* Summary Items */}
              <div className="space-y-3 text-xs">
                <div className="flex justify-between items-start pb-2 border-b border-[#2B2B2B]">
                  <span className="text-[#858585] font-light">Product:</span>
                  <span className="font-semibold text-white text-right max-w-[60%]">
                    {formState.product || activeProduct.name}
                  </span>
                </div>

                <div className="flex justify-between items-start pb-2 border-b border-[#2B2B2B]">
                  <span className="text-[#858585] font-light">Category:</span>
                  <span className="font-medium text-[#B3B3B3] text-right">
                    {activeProduct.categoryName}
                  </span>
                </div>

                <div className="flex justify-between items-start pb-2 border-b border-[#2B2B2B]">
                  <span className="text-[#858585] font-light">Quantity:</span>
                  <span className="font-semibold text-white">
                    {formState.quantity} units
                  </span>
                </div>

                <div className="flex justify-between items-start pb-2 border-b border-[#2B2B2B]">
                  <span className="text-[#858585] font-light">Dimensions:</span>
                  <span className="font-medium text-[#B3B3B3] text-right max-w-[60%]">
                    {activeSize}
                  </span>
                </div>

                <div className="flex justify-between items-start pb-2 border-b border-[#2B2B2B]">
                  <span className="text-[#858585] font-light">Material:</span>
                  <span className="font-medium text-[#B3B3B3] text-right max-w-[60%]">
                    {activeMaterial}
                  </span>
                </div>

                <div className="flex justify-between items-start pb-2 border-b border-[#2B2B2B]">
                  <span className="text-[#858585] font-light">Finishing:</span>
                  <span className="font-medium text-[#B3B3B3] text-right max-w-[60%]">
                    {activeFinishing}
                  </span>
                </div>

                <div className="flex justify-between items-start pb-2 border-b border-[#2B2B2B]">
                  <span className="text-[#858585] font-light">Turnaround:</span>
                  <span className="font-medium text-[#B3B3B3]">
                    {activeProduct.productionTime.split("(")[0].trim()}
                  </span>
                </div>

                <div className="flex justify-between items-start pb-2 border-b border-[#2B2B2B]">
                  <span className="text-[#858585] font-light">Artwork:</span>
                  <span className="font-medium text-[#B3B3B3]">
                    {formState.artworkFile ? formState.artworkFile.name : "To be supplied"}
                  </span>
                </div>
              </div>

              {/* Price System Notice - No invented prices */}
              <div className="p-4 bg-[#191919] border border-[#2B2B2B] rounded-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider font-semibold text-white">
                    Pricing Model:
                  </span>
                  <span className="text-xs font-semibold text-[#C8A45D] uppercase tracking-wider">
                    Quote on Request
                  </span>
                </div>
                <p className="text-[11px] text-[#B3B3B3] font-light leading-relaxed">
                  GLOSPRINT operates an authentic trade pricing system. Exact costs are calculated based on paper availability, quantity tiers, and bespoke finishing dies rather than inaccurate automated rates.
                </p>
              </div>
            </div>

            {/* Direct WhatsApp Pre-Fill Link */}
            <div className="space-y-3 pt-4 border-t border-[#2B2B2B]">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white py-3 px-4 rounded-xs text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send Specs on WhatsApp</span>
              </a>

              <p className="text-[10px] text-center text-[#858585] font-light">
                Direct WhatsApp consultation with an estimator: {companyInfo.whatsappDisplay}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
