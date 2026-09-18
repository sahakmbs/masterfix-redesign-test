"use client";

import Image from "next/image";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { allProjectImages, services, type ServiceSlug } from "@/lib/site";
import { easeCraft } from "@/components/motion/Reveal";

const filters: Array<{ id: "all" | ServiceSlug; label: string }> = [
  { id: "all", label: "All trades" },
  ...services.map((s) => ({ id: s.slug, label: s.shortName })),
];

export function ProjectGallery({
  initialTrade,
  images,
  showFilters = true,
}: {
  initialTrade?: ServiceSlug | "all";
  images?: { src: string; trade: ServiceSlug; label: string }[];
  showFilters?: boolean;
}) {
  const source = images ?? allProjectImages;
  const [trade, setTrade] = useState<"all" | ServiceSlug>(initialTrade ?? "all");
  const [active, setActive] = useState<number | null>(null);
  const reduce = useReducedMotion();

  const filtered = useMemo(
    () => (trade === "all" ? source : source.filter((i) => i.trade === trade)),
    [source, trade]
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight")
        setActive((i) => (i === null ? i : (i + 1) % filtered.length));
      if (e.key === "ArrowLeft")
        setActive((i) =>
          i === null ? i : (i - 1 + filtered.length) % filtered.length
        );
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, filtered.length]);

  return (
    <div>
      {showFilters ? (
        <LayoutGroup>
          <div
            className="flex flex-wrap gap-2"
            role="tablist"
            aria-label="Filter projects by trade"
          >
            {filters.map((f) => {
              const isActive = trade === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setTrade(f.id)}
                  className={`relative min-h-11 overflow-hidden rounded-full px-4 text-[11px] font-semibold uppercase tracking-[0.14em] transition ${
                    isActive ? "text-parchment" : "text-ink/70 hover:text-ink"
                  }`}
                >
                  {isActive ? (
                    <motion.span
                      layoutId={reduce ? undefined : "chip"}
                      className="absolute inset-0 rounded-full bg-ink"
                      transition={{ type: "spring", stiffness: 380, damping: 34 }}
                    />
                  ) : (
                    <span className="absolute inset-0 rounded-full bg-parchment-deep" />
                  )}
                  <span className="relative z-10">{f.label}</span>
                </button>
              );
            })}
          </div>
        </LayoutGroup>
      ) : null}

      <motion.ul
        layout
        className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((img, idx) => (
            <motion.li
              key={img.src}
              layout
              initial={reduce ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: easeCraft }}
              className="mb-4 break-inside-avoid"
            >
              <button
                type="button"
                onClick={() => setActive(idx)}
                className="group relative block w-full overflow-hidden rounded-[2px] bg-parchment-deep text-left focus-visible:outline-offset-4"
              >
                <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[4/3]">
                  <Image
                    src={img.src}
                    alt={`${img.label} project photo`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-700 ease-out group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent opacity-80 transition duration-500 group-hover:opacity-100" />
                  <span className="absolute bottom-3 left-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-parchment">
                    {img.label}
                  </span>
                  <span className="absolute bottom-3 right-3 translate-y-2 text-[10px] uppercase tracking-[0.16em] text-parchment/0 transition duration-500 group-hover:translate-y-0 group-hover:text-parchment/90">
                    Expand
                  </span>
                </div>
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      {filtered.length === 0 ? (
        <p className="mt-8 text-charcoal/60">No photos for this filter yet.</p>
      ) : null}

      <AnimatePresence>
        {active !== null && filtered[active] ? (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/92 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Project photo"
          >
            <button
              type="button"
              className="absolute right-5 top-5 z-10 rounded-[2px] border border-white/20 px-3 py-2 text-[11px] uppercase tracking-[0.16em] text-parchment"
              onClick={() => setActive(null)}
            >
              Close
            </button>
            <motion.div
              className="relative aspect-[4/3] w-full max-w-5xl overflow-hidden rounded-[2px]"
              initial={reduce ? false : { scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.4, ease: easeCraft }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[active].src}
                alt={`${filtered[active].label} enlarged`}
                fill
                sizes="90vw"
                className="object-contain"
                priority
              />
            </motion.div>
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3">
              <button
                type="button"
                className="rounded-[2px] border border-white/25 px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-parchment"
                onClick={(e) => {
                  e.stopPropagation();
                  setActive((i) =>
                    i === null ? i : (i - 1 + filtered.length) % filtered.length
                  );
                }}
              >
                Prev
              </button>
              <span className="px-3 py-2 text-[11px] uppercase tracking-[0.16em] text-parchment/60">
                {filtered[active].label} · {active + 1}/{filtered.length}
              </span>
              <button
                type="button"
                className="rounded-[2px] border border-white/25 px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-parchment"
                onClick={(e) => {
                  e.stopPropagation();
                  setActive((i) => (i === null ? i : (i + 1) % filtered.length));
                }}
              >
                Next
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
