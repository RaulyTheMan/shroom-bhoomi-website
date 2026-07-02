"use client";

import { AnimatePresence, motion } from "motion/react";
import { useCartStore, useHasHydrated } from "@/lib/cart-store";
import { formatINR } from "@/lib/format";
import { CartLineItem } from "./CartLineItem";
import { Button } from "@/components/ui/Button";
import { DURATION, EASE } from "@/lib/motion";

export function CartDrawer() {
  const isOpen = useCartStore((s) => s.isOpen);
  const close = useCartStore((s) => s.close);
  const items = useCartStore((s) => s.items);
  const hasHydrated = useHasHydrated();

  const subtotal = hasHydrated
    ? items.reduce((sum, i) => sum + i.unitPriceInPaise * i.qty, 0)
    : 0;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50">
          <motion.button
            type="button"
            aria-label="Close cart"
            onClick={close}
            className="absolute inset-0 bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: DURATION.base, ease: EASE.out }}
          />
          <motion.div
            className="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-xl flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: DURATION.moderate, ease: EASE.inOut }}
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-hairline">
              <h2 className="font-metropolis font-semibold text-lg text-ink">
                Your Cart
              </h2>
              <button
                type="button"
                onClick={close}
                aria-label="Close cart"
                className="text-ink text-xl leading-none transition-colors duration-150 ease-out hover:text-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red rounded-sm"
              >
                ×
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6">
              {!hasHydrated || items.length === 0 ? (
                <p className="py-10 text-center font-metropolis font-light text-ink-soft">
                  Your cart is empty.
                </p>
              ) : (
                items.map((item) => (
                  <CartLineItem key={`${item.slug}-${item.weightId}`} item={item} />
                ))
              )}
            </div>

            {hasHydrated && items.length > 0 && (
              <div className="px-6 py-5 border-t border-hairline space-y-4">
                <div className="flex items-center justify-between font-metropolis">
                  <span className="font-medium text-ink">Subtotal</span>
                  <span className="font-semibold text-ink">{formatINR(subtotal)}</span>
                </div>
                <Button href="/cart" variant="filled" fullWidth onClick={close}>
                  View Cart
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
