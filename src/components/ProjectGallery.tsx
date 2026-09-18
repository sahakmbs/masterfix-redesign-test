"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { allProjectImages, services, type ServiceSlug } from "@/lib/site";

const filters: Array<{ id: "all" | ServiceSlug; label: string }> = [
  { id: "all", label: "All trades" },
  ...services.map((s) => ({ id: s.slug, label: s.shortName })),
];

export function ProjectGallery({
  initialTrade,
  images,
}: {
  initialTrade?: ServiceSlug | "all";
  images?: { src: string; trade: ServiceSlug; label: string }[];
}) {
  const source = images ?? allProjectImages;
  const [trade, setTrade] = useState<"all" | ServiceSlug>(initialTrade ?? "all");

  const filtered = useMemo(
    () => (trade === "all" ? source : source.filter((i) => i.trade === trade)),
    [source, trade]
  );

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="Filter projects by trade"
      >
        {filters.map((f) => {
          const active = trade === f.id;
          return (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setTrade(f.id)}
              className={`min-h-11 rounded-full px-4 text-sm font-heading font-semibold uppercase tracking-wide transition ${
                active
                  ? "bg-brand-navy text-white"
                  : "bg-brand-mist text-brand-navy hover:bg-brand-navy/10"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((img) => (
          <li
            key={img.src}
            className="group relative aspect-[4/3] overflow-hidden rounded-sm bg-brand-mist"
          >
            <Image
              src={img.src}
              alt={`${img.label} project photo`}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
            />
            <span className="absolute bottom-3 left-3 rounded-sm bg-brand-navy/85 px-2.5 py-1 text-[10px] font-heading font-bold uppercase tracking-wider text-white">
              {img.label}
            </span>
          </li>
        ))}
      </ul>
      {filtered.length === 0 ? (
        <p className="mt-8 text-brand-slate/70">No photos for this filter yet.</p>
      ) : null}
    </div>
  );
}
