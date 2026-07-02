"use client";

import { motion } from "motion/react";
import clsx from "clsx";
import type { ProductWeight } from "@/types/product";
import { tapScale } from "@/lib/motion";

type WeightSelectorProps = {
  weights: ProductWeight[];
  selectedId: string;
  onSelect: (id: string) => void;
};

export function WeightSelector({
  weights,
  selectedId,
  onSelect,
}: WeightSelectorProps) {
  return (
    <div className="flex gap-3" role="radiogroup" aria-label="Select weight">
      {weights.map((w) => {
        const isSelected = w.id === selectedId;
        return (
          <motion.button
            key={w.id}
            type="button"
            role="radio"
            aria-checked={isSelected}
            onClick={() => onSelect(w.id)}
            whileTap={tapScale}
            className={clsx(
              "h-[43px] px-6 rounded-chip border font-metropolis font-medium text-[20px] transition-colors duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red focus-visible:ring-offset-1",
              isSelected
                ? "bg-red text-white border-red"
                : "bg-cream-alt text-ink border-hairline hover:bg-cream hover:border-red/40"
            )}
          >
            {w.label}
          </motion.button>
        );
      })}
    </div>
  );
}
