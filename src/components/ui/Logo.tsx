import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  priority?: boolean;
}

export default function Logo({
  className = "",
  priority = false,
}: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center justify-start shrink-0 leading-none transition-opacity hover:opacity-90 ${className}`}
      aria-label="GLOSPRINT — Premium Printing & Creative Branding"
    >
      <Image
        src="/logo/glosprint-logo.png"
        alt="GLOSPRINT — Premium Printing & Creative Branding"
        width={807}
        height={133}
        priority={priority}
        unoptimized
        className="glosprint-logo-img block w-auto h-[38px] md:h-[44px] max-w-full object-contain select-none"
      />
    </Link>
  );
}
