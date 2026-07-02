import { Hero } from "@/components/home/Hero";
import { ValueProp } from "@/components/home/ValueProp";
import { ImageGalleryRow } from "@/components/home/ImageGalleryRow";
import { BestsellerSection } from "@/components/home/BestsellerSection";
import { CookbookBanner } from "@/components/home/CookbookBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProp />
      <ImageGalleryRow />
      <BestsellerSection />
      <CookbookBanner />
    </>
  );
}
