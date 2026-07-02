import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  variant?: "nav" | "footer";
};

const SIZES = {
  nav: { width: 129, height: 51 },
  footer: { width: 245, height: 96 },
};

const SRC = {
  nav: "/images/logo/logo-nav.png",
  footer: "/images/logo/logo-footer.png",
};

// Tailwind's preflight resets `img { height: auto }`, which fights next/image's
// width/height attributes and triggers a Next.js dev warning + potential CLS.
// Explicit w-*/h-* classes (class selector) win over that element-selector
// reset, so both dimensions stay locked to the intended fixed size.
const IMG_CLASS = {
  nav: "w-[129px] h-[51px]",
  footer: "w-[245px] h-[96px]",
};

export function Logo({ variant = "nav" }: LogoProps) {
  const { width, height } = SIZES[variant];
  return (
    <Link
      href="/"
      aria-label="Shroom Bhoomi home"
      className="inline-block transition-opacity duration-150 ease-out hover:opacity-80"
    >
      <Image
        src={SRC[variant]}
        alt="Shroom Bhoomi"
        width={width}
        height={height}
        priority={variant === "nav"}
        className={IMG_CLASS[variant]}
      />
    </Link>
  );
}
