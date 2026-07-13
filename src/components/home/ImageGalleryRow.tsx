import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { IMAGE_HOVER_CLASS } from "@/lib/motion";

const PHOTOS = [
  { src: "/images/home/gallery-1.jpg", alt: "Fresh oyster mushrooms" },
  { src: "/images/home/gallery-2.jpg", alt: "Cluster of oyster mushrooms" },
  { src: "/images/home/gallery-3.jpg", alt: "Golden mushrooms close up" },
];

export function ImageGalleryRow() {
  return (
    <section className="px-6 lg:px-[50px] pb-12">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-[1628px] mx-auto">
        {PHOTOS.map((photo, i) => (
          <Reveal key={photo.src} delay={i * 0.08}>
            <div className="relative w-full aspect-[522/571] rounded-chip overflow-hidden">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className={`object-cover ${IMAGE_HOVER_CLASS}`}
                sizes="(min-width: 640px) 33vw, 100vw"
              />
            </div>
          </Reveal>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Button href="/all" variant="filled">
          Shop All
        </Button>
      </div>
    </section>
  );
}
