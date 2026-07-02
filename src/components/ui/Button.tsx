"use client";

import Link from "next/link";
import { motion } from "motion/react";
import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";
import { tapScale } from "@/lib/motion";

type ButtonVariant = "filled" | "outline" | "whatsapp";

type CommonProps = {
  variant?: ButtonVariant;
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
};

// Motion's animation props (onDrag/onAnimationStart/etc.) collide in type with
// React's native DOM event handlers of the same name — omit the native ones.
type MotionConflictingProps =
  | "onDrag"
  | "onDragStart"
  | "onDragEnd"
  | "onAnimationStart"
  | "onAnimationEnd"
  | "onAnimationIteration";

type ButtonAsButton = CommonProps &
  Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "className" | MotionConflictingProps
  > & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
  onClick?: () => void;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

// Active/press states use `brightness` filters rather than background-color
// swaps or opacity modifiers: brightness reliably darkens regardless of how
// light or dark the base color already is, whereas an opacity modifier on a
// light color (e.g. bg-cream-alt/80) blends toward transparency and can read
// as *lighter*, not darker, against the page background.
const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  filled: "bg-red text-cream hover:bg-red-dark active:brightness-90",
  outline: "bg-cream-alt text-red hover:bg-cream active:brightness-95",
  whatsapp: "bg-whatsapp text-cream hover:brightness-95 active:brightness-90",
};

const BASE_CLASSES =
  "inline-flex items-center justify-center h-[47px] px-8 rounded-btn border border-red-dark font-display text-[15px] uppercase tracking-wide whitespace-nowrap transition-colors duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none";

const MotionLink = motion.create(Link);

export function Button(props: ButtonProps) {
  const { variant = "filled", fullWidth, className, children } = props;
  const classes = clsx(
    BASE_CLASSES,
    VARIANT_CLASSES[variant],
    fullWidth && "w-full",
    className
  );

  if ("href" in props && props.href) {
    return (
      <MotionLink
        href={props.href}
        className={classes}
        onClick={props.onClick}
        whileTap={tapScale}
      >
        {children}
      </MotionLink>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- stripping non-DOM props before spreading onto <button>
  const { href, variant: v, fullWidth: fw, className: cn, children: c, ...buttonProps } =
    props as ButtonAsButton;
  return (
    <motion.button className={classes} whileTap={tapScale} {...buttonProps}>
      {children}
    </motion.button>
  );
}
