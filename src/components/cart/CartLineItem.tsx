"use client";

import Image from "next/image";
import { useCartStore, type CartItem } from "@/lib/cart-store";
import { formatINR } from "@/lib/format";

export function CartLineItem({ item }: { item: CartItem }) {
  const setQty = useCartStore((s) => s.setQty);
  const removeItem = useCartStore((s) => s.removeItem);

  return (
    <div className="flex gap-4 py-4 border-b border-hairline">
      <div className="relative w-16 h-16 shrink-0 rounded-chip overflow-hidden bg-placeholder">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="64px"
          className="object-cover"
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-metropolis font-medium text-sm text-ink truncate">
          {item.name}
        </p>
        <p className="font-metropolis font-light text-xs text-ink-soft">
          {item.weightLabel}
        </p>
        <div className="mt-2 flex items-center gap-3">
          <div className="flex items-center border border-hairline rounded-chip">
            <button
              type="button"
              onClick={() =>
                setQty(item.slug, item.weightId, Math.max(1, item.qty - 1))
              }
              className="w-6 h-6 flex items-center justify-center text-ink rounded-sm transition-colors duration-150 ease-out hover:bg-cream-alt active:bg-cream focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red"
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span className="w-6 text-center text-sm font-metropolis">
              {item.qty}
            </span>
            <button
              type="button"
              onClick={() => setQty(item.slug, item.weightId, item.qty + 1)}
              className="w-6 h-6 flex items-center justify-center text-ink rounded-sm transition-colors duration-150 ease-out hover:bg-cream-alt active:bg-cream focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
          <button
            type="button"
            onClick={() => removeItem(item.slug, item.weightId)}
            className="text-xs font-metropolis text-ink-soft underline transition-colors duration-150 ease-out hover:text-red"
          >
            Remove
          </button>
        </div>
      </div>
      <p className="font-metropolis font-medium text-sm text-ink whitespace-nowrap">
        {formatINR(item.unitPriceInPaise * item.qty)}
      </p>
    </div>
  );
}
