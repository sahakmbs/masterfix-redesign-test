import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Container, Eyebrow, SectionHeading } from "@/components/Section";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Siding, fencing, tile, laminate, drywall, and paint — high-performance contracting across King County.",
};

export default function ServicesIndexPage() {
  return (
    <>
      <section className="bg-brand-navy py-20 text-white md:py-28">
        <Container>
          <Eyebrow>Services</Eyebrow>
          <h1 className="mt-3 max-w-3xl font-heading text-4xl font-black uppercase tracking-tight md:text-6xl">
            Six trades. One standard of finish.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/75">
            Exterior envelopes and interior finishes executed with commercial discipline —
            each trade has its own page, gallery, and practical guidance.
          </p>
        </Container>
      </section>

      <section className="bg-brand-light py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Select a trade"
            title="Explore by craft"
          />
          <ul className="mt-12 space-y-6">
            {services.map((s, idx) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group grid overflow-hidden rounded-sm bg-white shadow-sm ring-1 ring-brand-navy/5 md:grid-cols-5"
                >
                  <div className="relative aspect-[16/10] md:col-span-2 md:aspect-auto md:min-h-[220px]">
                    <Image
                      src={s.heroImage}
                      alt=""
                      fill
                      sizes="(max-width:768px) 100vw, 40vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-6 md:col-span-3 md:p-10">
                    <span className="font-heading text-xs font-bold text-brand-amber">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h2 className="mt-2 font-heading text-2xl font-extrabold text-brand-navy md:text-3xl">
                      {s.name}
                    </h2>
                    <p className="mt-3 max-w-xl text-brand-slate/75">{s.summary}</p>
                    <span className="mt-5 text-xs font-heading font-bold uppercase tracking-wider text-brand-navy">
                      Open service page →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
