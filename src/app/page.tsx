import Image from "next/image";
import Link from "next/link";
import { Container, Eyebrow, SectionHeading } from "@/components/Section";
import { processSteps, services, site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[88vh] overflow-hidden bg-brand-navy text-white">
        <Image
          src="/images/front.webp"
          alt="Seattle MasterFix project exterior"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-brand-navy/35" />
        <Container className="relative flex min-h-[88vh] flex-col justify-end pb-16 pt-28 md:justify-center md:pb-24">
          <div className="max-w-3xl reveal">
            <Eyebrow>{site.name}</Eyebrow>
            <h1 className="mt-4 font-heading text-4xl font-black uppercase leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              {site.tagline}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
              {site.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center rounded-sm bg-brand-amber px-6 text-sm font-heading font-bold uppercase tracking-wide text-brand-navy"
              >
                Request an estimate
              </Link>
              <Link
                href="/projects"
                className="inline-flex min-h-12 items-center rounded-sm border border-white/40 px-6 text-sm font-heading font-bold uppercase tracking-wide text-white hover:bg-white/10"
              >
                View projects
              </Link>
            </div>
            <p className="mt-8 text-xs uppercase tracking-[0.18em] text-white/55">
              WA #{site.license} · UBI {site.ubi} · {site.credentials}
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="How we work"
            title="A clear path from concept to completion"
            body="MasterFix guides property owners and GCs through the entire build-out — with honest scopes and schedule control."
          />
          <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <li
                key={step.step}
                className="rounded-sm border border-brand-navy/10 bg-brand-light p-6"
              >
                <span className="font-heading text-sm font-bold text-brand-amber">
                  {step.step}
                </span>
                <h3 className="mt-3 font-heading text-lg font-extrabold text-brand-navy">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-slate/75">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
          <div className="mt-10">
            <Link
              href="/how-we-work"
              className="text-sm font-heading font-bold uppercase tracking-wide text-brand-navy underline decoration-brand-amber decoration-2 underline-offset-4"
            >
              See the full process
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-brand-light py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Trades"
            title="Real job-site photography by trade"
            body="Tap any trade for its dedicated page — scope notes, timelines, cost drivers, and a gallery of our own work."
          />
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group block overflow-hidden rounded-sm bg-white shadow-sm ring-1 ring-brand-navy/5"
                >
                  <div className="relative aspect-[5/4] overflow-hidden">
                    <Image
                      src={s.heroImage}
                      alt={s.name}
                      fill
                      sizes="(max-width:768px) 100vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-lg font-extrabold text-brand-navy">
                      {s.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-slate/75">
                      {s.summary}
                    </p>
                    <span className="mt-4 inline-block text-xs font-heading font-bold uppercase tracking-wider text-brand-amber">
                      View service →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-brand-navy py-20 text-white md:py-28">
        <Container className="relative">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading
                light
                eyebrow="King County"
                title="High-performance contracting without the theater"
                body="We combine commercial construction discipline with finish-level craftsmanship — for exteriors that shed water and interiors that hold up to daily use."
              />
              <ul className="mt-8 space-y-3 text-sm text-white/80">
                <li>• Licensed, bonded, and fully insured in Washington</li>
                <li>• Serving property owners and general contractors</li>
                <li>• Clear communication from feasibility through closeout</li>
              </ul>
            </div>
            <div className="rounded-sm border border-white/15 bg-white/5 p-8 backdrop-blur">
              <p className="font-heading text-sm font-bold uppercase tracking-[0.18em] text-brand-amber">
                Ready to start
              </p>
              <p className="mt-4 text-2xl font-heading font-extrabold">
                Request a project estimate or book a consultation.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center rounded-sm bg-brand-amber px-5 text-sm font-heading font-bold uppercase tracking-wide text-brand-navy"
                >
                  Start your project
                </Link>
                <a
                  href={site.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center rounded-sm border border-white/35 px-5 text-sm font-heading font-bold uppercase tracking-wide"
                >
                  Book consult
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
