"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-navy/95 text-white backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center" onClick={() => setOpen(false)}>
          <Image
            src="/logos/smpc-logo-white.webp"
            alt={`${site.shortName} logo`}
            width={180}
            height={56}
            className="h-10 w-auto md:h-12"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-sm px-3 py-2 text-xs font-heading font-semibold uppercase tracking-[0.14em] transition ${
                  active
                    ? "text-brand-amber"
                    : "text-white/85 hover:text-brand-amber"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className="text-sm font-medium text-white/90 hover:text-brand-amber"
          >
            {site.phone}
          </a>
          <Link
            href="/contact"
            className="rounded-sm bg-brand-amber px-4 py-2.5 text-xs font-heading font-bold uppercase tracking-wider text-brand-navy transition hover:bg-white"
          >
            Start your project
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-white/20 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`block h-0.5 bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`block h-0.5 bg-white transition ${open ? "opacity-0" : ""}`} />
            <span
              className={`block h-0.5 bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-white/10 bg-brand-navy px-4 py-4 lg:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-sm px-3 py-3 font-heading text-sm font-semibold uppercase tracking-wider text-white hover:bg-white/5 hover:text-brand-amber"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={site.phoneHref}
              className="mt-2 rounded-sm px-3 py-3 text-sm text-brand-amber"
            >
              Call {site.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
