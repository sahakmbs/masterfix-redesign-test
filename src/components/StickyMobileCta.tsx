import Link from "next/link";
import { site } from "@/lib/site";

export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-ink/10 bg-parchment/95 p-3 shadow-[0_-12px_40px_rgba(7,21,37,0.14)] backdrop-blur-md md:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-2">
        <a
          href={site.phoneHref}
          className="inline-flex min-h-12 items-center justify-center rounded-[2px] border border-ink/25 bg-paper px-3 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-ink"
        >
          Call
        </a>
        <Link
          href="/contact"
          className="inline-flex min-h-12 items-center justify-center rounded-[2px] bg-bronze px-3 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-ink"
        >
          Start project
        </Link>
      </div>
    </div>
  );
}
