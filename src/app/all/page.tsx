import { products } from "@/lib/products";
import { ProductCard } from "@/components/product/ProductCard";
import { Reveal } from "@/components/ui/Reveal";

export default function AllProductsPage() {
  return (
    <section className="px-6 lg:px-[50px] py-16">
      <h1 className="font-display text-red text-4xl sm:text-5xl lg:text-[64px] leading-tight mb-12">
        Shop All
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 max-w-[1628px] mx-auto">
        {products.map((product, i) => (
          <Reveal key={product.slug} delay={i * 0.08}>
            <ProductCard product={product} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
