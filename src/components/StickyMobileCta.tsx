import Link from "next/link";
import { site } from "@/lib/site";

export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-brand-navy/10 bg-white/95 p-3 shadow-[0_-8px_30px_rgba(11,37,69,0.12)] backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-2">
        <a
          href={site.phoneHref}
          className="inline-flex min-h-12 items-center justify-center rounded-sm border-2 border-brand-navy bg-white px-3 text-center text-sm font-heading font-bold uppercase tracking-wide text-brand-navy"
        >
          Call
        </a>
        <Link
          href="/contact"
          className="inline-flex min-h-12 items-center justify-center rounded-sm bg-brand-amber px-3 text-center text-sm font-heading font-bold uppercase tracking-wide text-brand-navy"
        >
          Start your project
        </Link>
      </div>
    </div>
  );
}
