import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { IMAGE_HOVER_CLASS } from "@/lib/motion";

export function CookbookBanner() {
  return (
    <section className="relative w-full h-[280px] sm:h-[400px] lg:h-[571px] overflow-hidden">
      <Reveal className="relative w-full h-full">
        <Image
          src="/images/home/cookbook-banner.jpg"
          alt="Close-up of mushroom gills"
          fill
          className={`object-cover ${IMAGE_HOVER_CLASS}`}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10 h-full flex items-end justify-center pb-10 lg:pb-14">
          <Button href="/cook-with-us" variant="filled">
            View the Cookbook
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
