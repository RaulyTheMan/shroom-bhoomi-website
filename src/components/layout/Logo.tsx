import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  variant?: "nav" | "footer";
};

const SRC = {
  nav: "/images/logo/logo-nav.png",
  footer: "/images/logo/logo-footer.png",
};

// Both source files are 1545x605 (ratio 309:121). Pass that exact ratio as
// the intrinsic width/height so Next.js's aspect-ratio check always matches
// the file, regardless of display size — Tailwind's preflight resets
// `img { height: auto }`, which fights arbitrary width/height props unless
// CSS classes (higher specificity) also lock the actual rendered box.
const INTRINSIC = { width: 309, height: 121 };

const IMG_CLASS = {
  nav: "w-[129px] h-[51px]",
  footer: "w-[245px] h-[96px]",
};

export function Logo({ variant = "nav" }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Shroom Bhoomi home"
      className="inline-block transition-opacity duration-150 ease-out hover:opacity-80"
    >
      <Image
        src={SRC[variant]}
        alt="Shroom Bhoomi"
        width={INTRINSIC.width}
        height={INTRINSIC.height}
        priority={variant === "nav"}
        className={IMG_CLASS[variant]}
      />
    </Link>
  );
}
