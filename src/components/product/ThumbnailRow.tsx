import Image from "next/image";
import { IMAGE_HOVER_CLASS } from "@/lib/motion";

type ThumbnailRowProps =
  | { mode: "placeholder"; count: number }
  | { mode: "images"; images: string[]; alt: string };

export function ThumbnailRow(props: ThumbnailRowProps) {
  if (props.mode === "placeholder") {
    return (
      <div className="flex gap-4">
        {Array.from({ length: props.count }).map((_, i) => (
          <div
            key={i}
            className="w-[100px] h-[116px] sm:w-[119px] sm:h-[138px] rounded-chip bg-placeholder"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="flex gap-3">
      {props.images.map((src, i) => (
        <div
          key={src}
          className="relative w-[70px] h-[78px] sm:w-[90px] sm:h-[98px] rounded-[18px] overflow-hidden"
        >
          <Image
            src={src}
            alt={`${props.alt} ${i + 1}`}
            fill
            className={`object-cover ${IMAGE_HOVER_CLASS}`}
            sizes="90px"
          />
        </div>
      ))}
    </div>
  );
}
