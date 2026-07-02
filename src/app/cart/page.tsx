"use client";

import { AnimatePresence, motion } from "motion/react";
import { useCartStore, useHasHydrated } from "@/lib/cart-store";
import { formatINR } from "@/lib/format";
import { CartLineItem } from "@/components/cart/CartLineItem";
import { Button } from "@/components/ui/Button";
import { DURATION } from "@/lib/motion";

export default function CartPage() {
  const items = useCartStore((s) => s.items);
  const hasHydrated = useHasHydrated();
  const subtotal = items.reduce(
    (sum, i) => sum + i.unitPriceInPaise * i.qty,
    0
  );

  const view = !hasHydrated ? "loading" : items.length === 0 ? "empty" : "populated";
  const fade = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: DURATION.fast },
  };

  return (
    <AnimatePresence mode="wait">
      {view === "loading" && (
        <motion.div key="loading" className="max-w-3xl mx-auto px-6 py-16" {...fade} />
      )}

      {view === "empty" && (
        <motion.div
          key="empty"
          className="max-w-3xl mx-auto px-6 py-24 text-center"
          {...fade}
        >
          <h1 className="font-metropolis font-bold text-3xl text-ink mb-4">
            Your cart is empty
          </h1>
          <Button href="/" variant="filled">
            Back to Home
          </Button>
        </motion.div>
      )}

      {view === "populated" && (
        <motion.div key="populated" className="max-w-3xl mx-auto px-6 py-16" {...fade}>
          <h1 className="font-metropolis font-bold text-3xl text-ink mb-8">
            Your Cart
          </h1>

          <div>
            {items.map((item) => (
              <CartLineItem key={`${item.slug}-${item.weightId}`} item={item} />
            ))}
          </div>

          <div className="mt-8 flex items-center justify-between font-metropolis">
            <span className="font-medium text-lg text-ink">Subtotal</span>
            <span className="font-semibold text-lg text-ink">
              {formatINR(subtotal)}
            </span>
          </div>

          <div className="mt-6">
            <Button variant="filled" fullWidth disabled>
              Checkout (coming soon)
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
