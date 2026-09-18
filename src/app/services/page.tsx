import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Container, Eyebrow, SectionHeading } from "@/components/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Siding, fencing, tile, laminate, drywall, and paint — high-performance contracting across King County.",
};

export default function ServicesIndexPage() {
  return (
    <>
      <section className="bg-ink pb-20 pt-32 text-parchment md:pb-28 md:pt-40">
        <Container>
          <Reveal>
            <Eyebrow light>Services</Eyebrow>
            <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
              Six trades.
              <br />
              One standard of finish.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-parchment/70">
              Exterior envelopes and interior finishes executed with commercial discipline —
              each trade has its own page, gallery, and practical guidance.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-parchment py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Select a trade" title="Explore by craft" />
          </Reveal>
          <Stagger className="mt-12 space-y-5" stagger={0.08}>
            {services.map((s, idx) => (
              <StaggerItem key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group grid overflow-hidden rounded-[2px] bg-paper ring-1 ring-ink/8 transition hover:ring-ink/20 md:grid-cols-5"
                >
                  <div className="relative aspect-[16/10] overflow-hidden md:col-span-2 md:aspect-auto md:min-h-[240px]">
                    <Image
                      src={s.heroImage}
                      alt=""
                      fill
                      sizes="(max-width:768px) 100vw, 40vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.05]"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-7 md:col-span-3 md:p-11">
                    <span className="font-display text-3xl text-bronze/80">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h2 className="mt-2 font-display text-2xl text-ink md:text-4xl">{s.name}</h2>
                    <p className="mt-3 max-w-xl text-charcoal/65">{s.summary}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink transition group-hover:gap-3">
                      Open service page <span aria-hidden>→</span>
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>
    </>
  );
}
