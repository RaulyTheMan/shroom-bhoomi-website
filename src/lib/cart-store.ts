import { useSyncExternalStore } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = {
  slug: string;
  name: string;
  weightId: string;
  weightLabel: string;
  unitPriceInPaise: number;
  qty: number;
  image: string;
};

type CartState = {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: Omit<CartItem, "qty">, qty?: number) => void;
  removeItem: (slug: string, weightId: string) => void;
  setQty: (slug: string, weightId: string, qty: number) => void;
  clear: () => void;
  open: () => void;
  close: () => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      isOpen: false,
      addItem: (item, qty = 1) =>
        set((state) => {
          const existing = state.items.find(
            (i) => i.slug === item.slug && i.weightId === item.weightId
          );
          if (existing) {
            return {
              items: state.items.map((i) =>
                i === existing ? { ...i, qty: i.qty + qty } : i
              ),
            };
          }
          return { items: [...state.items, { ...item, qty }] };
        }),
      removeItem: (slug, weightId) =>
        set((state) => ({
          items: state.items.filter(
            (i) => !(i.slug === slug && i.weightId === weightId)
          ),
        })),
      setQty: (slug, weightId, qty) =>
        set((state) => ({
          items: state.items.map((i) =>
            i.slug === slug && i.weightId === weightId ? { ...i, qty } : i
          ),
        })),
      clear: () => set({ items: [] }),
      open: () => set({ isOpen: true }),
      close: () => set({ isOpen: false }),
    }),
    {
      name: "shroom-bhoomi-cart",
      partialize: (state) => ({ items: state.items }),
    }
  )
);

const noopSubscribe = () => () => {};

export function useHasHydrated() {
  return useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false
  );
}
