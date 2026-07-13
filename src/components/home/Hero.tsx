import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative w-full h-[480px] sm:h-[600px] lg:h-[750px] overflow-hidden -mt-[120px] lg:-mt-[135px]">
      <Image
        src="/images/home/hero-bg.jpg"
        alt="Inside the Shroom Bhoomi mushroom farm"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/25" />
      <div className="relative z-10 h-full flex flex-col gap-6 px-6 sm:px-10 lg:px-[50px] pt-[130px] sm:pt-[130px] lg:pt-[175px] max-w-[500px]">
        <h1 className="font-metropolis font-bold text-4xl sm:text-5xl lg:text-[64px] leading-tight text-white">
          Straight from the Farm
        </h1>
        <p className="font-metropolis font-light text-base sm:text-lg lg:text-[20px] leading-relaxed text-white max-w-[350px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="flex items-center gap-6">
          <Button href="/shop" variant="filled">
            Shop Now
          </Button>
          <a
            href="/cook-with-us"
            className="font-display text-[15px] text-cream underline underline-offset-2 transition-colors duration-150 ease-out hover:text-cream/70"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
