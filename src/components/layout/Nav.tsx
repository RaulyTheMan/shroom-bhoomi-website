"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Logo } from "./Logo";
import { CartBadge } from "@/components/cart/CartBadge";
import { NAV_LINKS } from "@/lib/constants";
import { DURATION, EASE } from "@/lib/motion";

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-cream w-full">
      <div className="h-[116px] px-6 lg:px-[50px] flex items-center justify-between">
        <Logo variant="nav" />

        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-metropolis font-semibold text-[20px] text-ink hover:text-red transition-colors duration-150 ease-out"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <CartBadge />
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 text-ink rounded-full transition-colors duration-150 ease-out hover:text-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <motion.line
                x1="4"
                y1="12"
                x2="20"
                y2="12"
                strokeLinecap="round"
                animate={mobileOpen ? { y: 0, rotate: 45 } : { y: -5, rotate: 0 }}
                transition={{ duration: DURATION.base, ease: EASE.inOut }}
              />
              <motion.line
                x1="4"
                y1="12"
                x2="20"
                y2="12"
                strokeLinecap="round"
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: DURATION.fast }}
              />
              <motion.line
                x1="4"
                y1="12"
                x2="20"
                y2="12"
                strokeLinecap="round"
                animate={mobileOpen ? { y: 0, rotate: -45 } : { y: 5, rotate: 0 }}
                transition={{ duration: DURATION.base, ease: EASE.inOut }}
              />
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {mobileOpen && (
          <motion.nav
            key="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: DURATION.moderate, ease: EASE.inOut }}
            className="md:hidden flex flex-col gap-1 px-6 overflow-hidden"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-metropolis font-semibold text-[18px] text-ink py-2 transition-colors duration-150 ease-out hover:text-red"
              >
                {link.label}
              </Link>
            ))}
            <div className="pb-6" />
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
