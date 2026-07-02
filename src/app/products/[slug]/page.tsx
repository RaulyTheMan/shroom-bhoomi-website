import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/lib/products";
import { PageHeading } from "@/components/product-detail/PageHeading";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductInfo } from "@/components/product-detail/ProductInfo";
import { WhatsAppCTA } from "@/components/product-detail/WhatsAppCTA";
import { DashedDivider } from "@/components/ui/DashedDivider";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <PageHeading />
      <section className="px-6 lg:px-[50px] pb-16">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 max-w-[1623px] mx-auto">
          <ProductGallery
            main={product.images.main}
            thumbnails={product.images.thumbnails}
            alt={product.name}
          />
          <ProductInfo product={product} />
        </div>
      </section>
      <div className="px-6 lg:px-[50px]">
        <DashedDivider />
      </div>
      <WhatsAppCTA />
      <div className="px-6 lg:px-[50px]">
        <DashedDivider />
      </div>
    </>
  );
}
