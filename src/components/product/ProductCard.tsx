import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";
import { formatINR } from "@/lib/format";
import { IMAGE_HOVER_CLASS } from "@/lib/motion";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red rounded-chip"
    >
      <div className="relative w-full aspect-[522/571] rounded-chip overflow-hidden">
        <Image
          src={product.images.main}
          alt={product.name}
          fill
          className={`object-cover ${IMAGE_HOVER_CLASS}`}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="mt-4 flex items-center justify-between gap-4">
        <p className="font-metropolis font-medium text-lg text-ink group-hover:text-red transition-colors duration-150 ease-out">
          {product.name}
        </p>
        <p className="font-metropolis font-medium text-lg text-ink shrink-0">
          {formatINR(product.priceInPaise)}
        </p>
      </div>
    </Link>
  );
}
