"use client";

import { useReducedMotion } from "framer-motion";

export function TradeMarquee({ items }: { items: string[] }) {
  const reduce = useReducedMotion();
  const row = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-ink/10 bg-ink text-parchment">
      <div
        className={`flex gap-0 whitespace-nowrap py-4 ${reduce ? "" : "marquee-track"}`}
        aria-hidden={!reduce}
      >
        {(reduce ? items : row).map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex items-center gap-8 px-8 text-[11px] font-semibold uppercase tracking-[0.28em] text-parchment/80"
          >
            <span className="text-bronze">◆</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
