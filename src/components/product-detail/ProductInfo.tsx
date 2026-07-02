"use client";

import { useState } from "react";
import { WeightSelector } from "@/components/product/WeightSelector";
import { AddToCartButtons } from "@/components/product/AddToCartButtons";
import type { Product } from "@/types/product";

export function ProductInfo({ product }: { product: Product }) {
  const [selectedWeightId, setSelectedWeightId] = useState(
    product.weights[0].id
  );
  const selectedWeight =
    product.weights.find((w) => w.id === selectedWeightId) ??
    product.weights[0];

  return (
    <div className="flex flex-col gap-6 w-full max-w-[392px]">
      <h2 className="font-metropolis font-bold text-3xl sm:text-4xl lg:text-[48px] text-ink">
        {product.name}
      </h2>
      <WeightSelector
        weights={product.weights}
        selectedId={selectedWeightId}
        onSelect={setSelectedWeightId}
      />
      <p className="font-metropolis font-light text-[20px] leading-relaxed text-ink-soft">
        {product.description}
      </p>
      <AddToCartButtons
        slug={product.slug}
        name={product.name}
        image={product.images.main}
        weight={selectedWeight}
      />
    </div>
  );
}
