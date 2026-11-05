import { Product } from "@/types";
import { AlertCircle, CheckCircle2 } from "lucide-react";

interface ProductSpecTableProps {
  product: Product;
}

export default function ProductSpecTable({ product }: ProductSpecTableProps) {
  const specs = [
    { label: "Available Sizes", value: product.availableSizes.join(" • ") },
    { label: "Paper & Materials", value: product.paperMaterials.join(" • ") },
    ...(product.gsmOptions && product.gsmOptions.length > 0
      ? [{ label: "GSM Weights", value: product.gsmOptions.join(" • ") }]
      : []),
    { label: "Printing Colors", value: product.printingColors.join(" • ") },
    { label: "Finishing Options", value: product.finishingOptions.join(" • ") },
    { label: "Minimum Order Quantity (MOQ)", value: product.minOrderQuantity },
    {
      label: "Standard Quantities",
      value: product.availableQuantities.map((q) => q.toLocaleString()).join(", ") + " units",
    },
    { label: "Production Turnaround", value: product.productionTime },
  ];

  return (
    <div className="space-y-6">
      <div className="border border-[#EAEAEA] rounded-xs overflow-hidden bg-white">
        <div className="bg-[#FAF9F6] px-6 py-4 border-b border-[#EAEAEA]">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[#171717]">
            Technical Specifications & Options
          </h3>
          <p className="text-xs text-neutral-500 font-light mt-0.5">
            Configurable parameters available for quotation
          </p>
        </div>

        <div className="divide-y divide-[#EAEAEA]">
          {specs.map((item, idx) => (
            <div
              key={idx}
              className="px-6 py-3.5 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 text-xs"
            >
              <span className="font-semibold text-neutral-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A45D] shrink-0" />
                <span>{item.label}</span>
              </span>
              <span className="sm:col-span-2 text-neutral-600 font-light leading-relaxed">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Production & Capability Disclaimer */}
      <div className="p-4 bg-[#FAF9F6] border border-[#EAEAEA] rounded-xs flex items-start gap-3 text-xs text-neutral-600 leading-relaxed font-light">
        <AlertCircle className="w-4 h-4 text-[#C8A45D] shrink-0 mt-0.5" />
        <p>
          <strong className="text-neutral-900 font-medium">Specification Notice:</strong>{" "}
          Specifications listed above represent configurable sample parameters. Final paper stocks, custom Pantone ink formulations, exact die-lines, and delivery schedules are confirmed during official consultation and digital proof sign-off.
        </p>
      </div>
    </div>
  );
}
