import { formatINR } from "@/lib/format";

type ProductPriceBlockProps = {
  name: string;
  priceInPaise: number;
};

export function ProductPriceBlock({ name, priceInPaise }: ProductPriceBlockProps) {
  return (
    <div>
      <p className="font-metropolis font-medium text-3xl md:text-4xl lg:text-[36px] text-ink">
        {name}
      </p>
      <p className="font-metropolis font-medium text-3xl md:text-4xl lg:text-[36px] text-ink mt-2">
        {formatINR(priceInPaise)}
      </p>
    </div>
  );
}
