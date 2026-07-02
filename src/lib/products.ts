import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    slug: "oyster-mushrooms",
    name: "OYSTER MUSHROOMS",
    priceInPaise: 60000,
    weights: [
      { id: "200g", label: "200g", priceInPaise: 30000 },
      { id: "400g", label: "400g", priceInPaise: 55000 },
      { id: "1kg", label: "1KG", priceInPaise: 120000 },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dol",
    images: {
      main: "/images/product/oyster-main.jpg",
      thumbnails: [
        "/images/product/oyster-thumb-1.jpg",
        "/images/product/oyster-thumb-2.jpg",
        "/images/product/oyster-thumb-3.jpg",
      ],
    },
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
