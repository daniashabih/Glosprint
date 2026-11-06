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
      className={`logo-container transition-opacity hover:opacity-90 ${className}`.trim()}
      aria-label="GLOSPRINT — Premium Printing & Creative Branding"
    >
      <Image
        src="/logo/glosprint-logo.png"
        alt="GLOSPRINT — Premium Printing & Creative Branding"
        width={866}
        height={288}
        priority={priority}
        unoptimized
      />
    </Link>
  );
}
