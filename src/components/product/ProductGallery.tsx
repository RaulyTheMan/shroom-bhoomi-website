import Image from "next/image";
import { ThumbnailRow } from "./ThumbnailRow";
import { IMAGE_HOVER_CLASS } from "@/lib/motion";

type ProductGalleryProps = {
  main: string;
  thumbnails: string[];
  alt: string;
};

export function ProductGallery({ main, thumbnails, alt }: ProductGalleryProps) {
  return (
    <div className="w-full max-w-[808px]">
      <div className="relative w-full aspect-[808/939] rounded-[33px] overflow-hidden">
        <Image
          src={main}
          alt={alt}
          fill
          priority
          className={`object-cover ${IMAGE_HOVER_CLASS}`}
          sizes="(min-width: 1024px) 45vw, 100vw"
        />
      </div>
      <div className="mt-4">
        <ThumbnailRow mode="images" images={thumbnails} alt={alt} />
      </div>
    </div>
  );
}
