import Image from "next/image";
import Link from "next/link";
import { nav, services, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-ink text-parchment">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-bronze/10 blur-3xl"
      />
      <div className="mx-auto max-w-7xl px-5 pt-16 lg:px-8 lg:pt-20">
        <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Image
              src="/logos/smpc-logo-white.webp"
              alt={site.shortName}
              width={160}
              height={50}
              className="h-11 w-auto"
            />
            <p className="mt-6 max-w-sm font-display text-2xl leading-snug text-parchment/95 md:text-3xl">
              Built for King County weather.
              <br />
              Finished with quiet precision.
            </p>
            <p className="mt-5 text-sm leading-relaxed text-parchment/55">
              Crew-led contracting for property owners and GCs — exteriors that shed rain,
              interiors that hold up to daily use.
            </p>
            <p className="mt-6 text-[11px] uppercase tracking-[0.18em] text-parchment/40">
              WA #{site.license} · UBI {site.ubi} · {site.credentials}
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
            <div>
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-bronze">
                Navigate
              </h2>
              <ul className="mt-5 space-y-2.5 text-sm text-parchment/70">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="transition hover:text-bronze-light">
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/privacy" className="transition hover:text-bronze-light">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="transition hover:text-bronze-light">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-bronze">
                Trades
              </h2>
              <ul className="mt-5 space-y-2.5 text-sm text-parchment/70">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="transition hover:text-bronze-light"
                    >
                      {s.shortName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-bronze">
                Contact
              </h2>
              <ul className="mt-5 space-y-2.5 text-sm text-parchment/70">
                <li>
                  <a href={site.phoneHref} className="transition hover:text-bronze-light">
                    {site.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="transition hover:text-bronze-light"
                  >
                    {site.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${site.estimatesEmail}`}
                    className="transition hover:text-bronze-light"
                  >
                    {site.estimatesEmail}
                  </a>
                </li>
                <li className="pt-2 text-parchment/45">{site.address.full}</li>
                <li className="text-parchment/45">{site.areaServed}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 py-7 text-xs text-parchment/40 sm:flex-row sm:items-center">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="tracking-[0.14em] uppercase">TEST redesign · craft over chrome</p>
        </div>
      </div>
    </footer>
  );
}
