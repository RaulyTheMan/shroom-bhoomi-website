"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { useCartStore } from "@/lib/cart-store";
import type { ProductWeight } from "@/types/product";
import { DURATION } from "@/lib/motion";

type AddToCartButtonsProps = {
  slug: string;
  name: string;
  image: string;
  weight: ProductWeight;
};

const CONFIRMATION_MS = 600;

export function AddToCartButtons({
  slug,
  name,
  image,
  weight,
}: AddToCartButtonsProps) {
  const router = useRouter();
  const addItem = useCartStore((s) => s.addItem);
  const openCart = useCartStore((s) => s.open);
  const [justAdded, setJustAdded] = useState(false);
  const resetTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const item = {
    slug,
    name,
    image,
    weightId: weight.id,
    weightLabel: weight.label,
    unitPriceInPaise: weight.priceInPaise,
  };

  const handleAddToCart = () => {
    addItem(item);
    setJustAdded(true);
    if (resetTimeout.current) clearTimeout(resetTimeout.current);
    resetTimeout.current = setTimeout(() => setJustAdded(false), CONFIRMATION_MS);
    openCart();
  };

  return (
    <div className="flex flex-col gap-3 w-full max-w-[392px]">
      <Button variant="outline" fullWidth onClick={handleAddToCart}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={justAdded ? "added" : "idle"}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: DURATION.fast }}
            className="inline-block"
          >
            {justAdded ? "Added ✓" : "Add to Cart"}
          </motion.span>
        </AnimatePresence>
      </Button>
      <Button
        variant="filled"
        fullWidth
        onClick={() => {
          addItem(item);
          router.push("/cart");
        }}
      >
        Buy Now
      </Button>
    </div>
  );
}
