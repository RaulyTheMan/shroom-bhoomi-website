export type ProductWeight = {
  id: string;
  label: string;
  priceInPaise: number;
};

export type Product = {
  slug: string;
  name: string;
  priceInPaise: number;
  weights: ProductWeight[];
  description: string;
  images: {
    main: string;
    thumbnails: string[];
  };
};
