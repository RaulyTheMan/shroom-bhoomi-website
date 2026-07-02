import clsx from "clsx";

type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <p
      className={clsx(
        "font-metropolis font-light text-3xl md:text-4xl lg:text-[36px] text-ink text-center max-w-4xl mx-auto",
        className
      )}
    >
      {children}
    </p>
  );
}
