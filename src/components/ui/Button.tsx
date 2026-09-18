"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";
import { easeCraft } from "@/components/motion/Reveal";

type Variant = "primary" | "secondary" | "ghost" | "light";

const styles: Record<Variant, string> = {
  primary:
    "bg-bronze text-ink hover:bg-bronze-light shadow-[0_1px_0_rgba(7,21,37,0.08)]",
  secondary:
    "border border-ink/20 bg-transparent text-ink hover:border-ink/50 hover:bg-ink/[0.03]",
  ghost:
    "border border-white/35 bg-transparent text-white hover:bg-white/10",
  light:
    "bg-parchment text-ink hover:bg-white",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
  type,
  disabled,
  onClick,
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
}) {
  const reduce = useReducedMotion();
  const base =
    "group relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-[2px] px-6 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 disabled:opacity-40";

  const inner = (
    <>
      <span className="relative z-10">{children}</span>
      {!reduce && variant === "primary" ? (
        <span
          aria-hidden
          className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
        />
      ) : null}
    </>
  );

  const cls = `${base} ${styles[variant]} ${className}`;

  if (href) {
    const isExternal =
      external ||
      href.startsWith("http") ||
      href.startsWith("tel:") ||
      href.startsWith("mailto:");
    if (isExternal) {
      return (
        <motion.a
          href={href}
          {...(href.startsWith("http")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className={cls}
          whileHover={reduce ? undefined : { y: -1 }}
          whileTap={reduce ? undefined : { scale: 0.985 }}
          transition={{ duration: 0.25, ease: easeCraft }}
        >
          {inner}
        </motion.a>
      );
    }
    return (
      <motion.div
        className="inline-flex"
        whileHover={reduce ? undefined : { y: -1 }}
        whileTap={reduce ? undefined : { scale: 0.985 }}
        transition={{ duration: 0.25, ease: easeCraft }}
      >
        <Link href={href} className={cls}>
          {inner}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type ?? "button"}
      disabled={disabled}
      onClick={onClick}
      className={cls}
      whileHover={reduce || disabled ? undefined : { y: -1 }}
      whileTap={reduce || disabled ? undefined : { scale: 0.985 }}
      transition={{ duration: 0.25, ease: easeCraft }}
    >
      {inner}
    </motion.button>
  );
}
