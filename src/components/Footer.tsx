import Image from "next/image";
import Link from "next/link";
import { nav, services, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t-4 border-brand-amber bg-brand-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <Image
            src="/logos/smpc-logo-white.webp"
            alt={site.shortName}
            width={160}
            height={50}
            className="h-12 w-auto"
          />
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            {site.tagline}
          </p>
          <p className="mt-3 text-xs text-white/50">
            WA License # {site.license} · UBI {site.ubi}
            <br />
            {site.credentials}
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xs font-bold uppercase tracking-[0.18em] text-brand-amber">
            Navigate
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-brand-amber">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/privacy" className="hover:text-brand-amber">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-brand-amber">
                Terms
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-xs font-bold uppercase tracking-[0.18em] text-brand-amber">
            Services
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-brand-amber">
                  {s.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-xs font-bold uppercase tracking-[0.18em] text-brand-amber">
            Contact
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <a href={site.phoneHref} className="hover:text-brand-amber">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-brand-amber">
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.estimatesEmail}`}
                className="hover:text-brand-amber"
              >
                {site.estimatesEmail}
              </a>
            </li>
            <li className="pt-1 text-white/60">{site.address.full}</li>
            <li className="text-white/60">{site.areaServed}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/45">
        © {year} {site.name}. All rights reserved. · TEST redesign repository
      </div>
    </footer>
  );
}
