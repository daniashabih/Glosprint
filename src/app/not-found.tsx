import { Home, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white px-4 py-20">
      <div className="max-w-md mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAF9F6] border border-[#C8A45D]/40 text-[#9E7B35] text-xs font-semibold uppercase tracking-wider rounded-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#C8A45D]" />
          <span>Page Not Located</span>
        </div>

        <h1 className="text-6xl sm:text-7xl font-light font-serif text-[#171717]">
          404
        </h1>

        <h2 className="text-xl sm:text-2xl font-serif text-[#171717]">
          The Requested Page Does Not Exist
        </h2>

        <p className="text-sm text-neutral-600 font-light leading-relaxed">
          The page or printing resource you are looking for may have been moved, renamed, or is currently undergoing bespoke curation.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Button href="/" variant="primary" size="md" icon={<Home className="w-4 h-4" />}>
            Return Home
          </Button>
          <Button href="/services" variant="secondary" size="md">
            Browse Services
          </Button>
        </div>
      </div>
    </div>
  );
}
