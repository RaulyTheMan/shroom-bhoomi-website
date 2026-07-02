"use client";

import { AnimatePresence, motion } from "motion/react";
import { useCartStore, useHasHydrated } from "@/lib/cart-store";
import { DURATION, EASE } from "@/lib/motion";

export function CartBadge() {
  const items = useCartStore((s) => s.items);
  const open = useCartStore((s) => s.open);
  const hasHydrated = useHasHydrated();
  const count = hasHydrated ? items.reduce((sum, i) => sum + i.qty, 0) : 0;

  return (
    <button
      type="button"
      onClick={open}
      aria-label="Open cart"
      className="relative inline-flex items-center justify-center w-10 h-10 rounded-full text-ink transition-colors duration-150 ease-out hover:text-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <path
          d="M6 8h12l-1.2 10.2a2 2 0 0 1-2 1.8H9.2a2 2 0 0 1-2-1.8L6 8Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M9 8V6a3 3 0 0 1 6 0v2" strokeLinecap="round" />
      </svg>
      <AnimatePresence>
        {count > 0 && (
          <motion.span
            key={count}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: DURATION.fast, ease: EASE.out }}
            className="absolute -top-1 -right-1 flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full bg-red text-white text-[11px] font-metropolis font-semibold"
          >
            {count}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
