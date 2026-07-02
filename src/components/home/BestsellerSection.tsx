import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { IMAGE_HOVER_CLASS } from "@/lib/motion";
import { ProductPriceBlock } from "@/components/product/ProductPriceBlock";
import { AddToCartButtons } from "@/components/product/AddToCartButtons";
import { ThumbnailRow } from "@/components/product/ThumbnailRow";
import { getProductBySlug } from "@/lib/products";

export function BestsellerSection() {
  const product = getProductBySlug("oyster-mushrooms");
  if (!product) return null;
  const defaultWeight = product.weights[0];

  return (
    <section className="px-6 lg:px-[50px] py-12">
      <SectionHeading className="mb-10">OUR BESTSELLER</SectionHeading>
      <Reveal className="flex flex-col lg:flex-row gap-10 max-w-[1140px] mx-auto items-start">
        <div className="relative w-full lg:w-[522px] aspect-[522/571] rounded-chip overflow-hidden shrink-0">
          <Image
            src="/images/home/bestseller.jpg"
            alt={product.name}
            fill
            className={`object-cover ${IMAGE_HOVER_CLASS}`}
            sizes="(min-width: 1024px) 522px, 100vw"
          />
        </div>
        <div className="flex flex-col gap-6">
          <ProductPriceBlock name={product.name} priceInPaise={product.priceInPaise} />
          <AddToCartButtons
            slug={product.slug}
            name={product.name}
            image={product.images.main}
            weight={defaultWeight}
          />
          <ThumbnailRow mode="placeholder" count={3} />
        </div>
      </Reveal>
    </section>
  );
}
