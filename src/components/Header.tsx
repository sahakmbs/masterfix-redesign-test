"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { nav, site } from "@/lib/site";
import { easeCraft } from "@/components/motion/Reveal";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,border,backdrop-filter,padding] duration-500 ${
        scrolled || open
          ? "border-b border-white/10 bg-ink/92 py-2 backdrop-blur-xl"
          : "border-b border-transparent bg-gradient-to-b from-ink/70 to-transparent py-3"
      }`}
      initial={false}
      animate={{
        paddingTop: scrolled ? 8 : 12,
        paddingBottom: scrolled ? 8 : 12,
      }}
      transition={{ duration: 0.35, ease: easeCraft }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 lg:px-8">
        <Link href="/" className="relative z-10 flex shrink-0 items-center">
          <Image
            src="/logos/smpc-logo-white.webp"
            alt={`${site.shortName} logo`}
            width={180}
            height={56}
            className={`w-auto transition-all duration-500 ${
              scrolled ? "h-9 md:h-10" : "h-10 md:h-12"
            }`}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-[2px] px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors ${
                  active ? "text-bronze-light" : "text-white/75 hover:text-white"
                }`}
              >
                {item.label}
                {active ? (
                  <motion.span
                    layoutId={reduce ? undefined : "nav-underline"}
                    className="absolute inset-x-3 -bottom-0.5 h-px bg-bronze"
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={site.phoneHref}
            className="text-sm text-white/80 transition hover:text-bronze-light"
          >
            {site.phone}
          </a>
          <Link
            href="/contact"
            className="rounded-[2px] bg-bronze px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink transition hover:bg-bronze-light"
          >
            Start project
          </Link>
        </div>

        <button
          type="button"
          className="relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-[2px] border border-white/20 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`block h-px bg-white transition duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px bg-white transition duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px bg-white transition duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: easeCraft }}
            className="overflow-hidden border-t border-white/10 bg-ink lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-5 py-5" aria-label="Mobile">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-[2px] px-3 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-white/90 hover:bg-white/5 hover:text-bronze-light"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={site.phoneHref}
                className="mt-2 rounded-[2px] px-3 py-3.5 text-sm text-bronze-light"
              >
                Call {site.phone}
              </a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
