import Image from "next/image";
import Link from "next/link";
import { ProjectGallery } from "@/components/ProjectGallery";
import { Container, Eyebrow, SectionHeading } from "@/components/Section";
import type { Service } from "@/lib/site";
import { site } from "@/lib/site";

export function ServicePageView({ service }: { service: Service }) {
  return (
    <>
      <section className="relative min-h-[60vh] overflow-hidden bg-brand-navy text-white">
        <Image
          src={service.heroImage}
          alt={service.name}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/70 to-brand-navy/40" />
        <Container className="relative flex min-h-[60vh] flex-col justify-end pb-14 pt-24">
          <Eyebrow>Service</Eyebrow>
          <h1 className="mt-3 max-w-4xl font-heading text-4xl font-black uppercase tracking-tight md:text-5xl lg:text-6xl">
            {service.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">{service.headline}</p>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-20">
        <Container className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="text-lg leading-relaxed text-brand-slate/85">{service.intro}</p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-sm bg-brand-light p-5">
                <h2 className="font-heading text-sm font-bold uppercase tracking-wider text-brand-amber">
                  Timeline (directional)
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-brand-slate/80">
                  {service.timeline}
                </p>
              </div>
              <div className="rounded-sm bg-brand-light p-5">
                <h2 className="font-heading text-sm font-bold uppercase tracking-wider text-brand-amber">
                  Materials we work with
                </h2>
                <ul className="mt-2 space-y-1 text-sm text-brand-slate/80">
                  {service.materials.map((m) => (
                    <li key={m}>• {m}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <aside className="rounded-sm border border-brand-navy/10 bg-brand-light p-6">
            <h2 className="font-heading text-lg font-extrabold text-brand-navy">
              Cost drivers
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-brand-slate/80">
              {service.costDrivers.map((c) => (
                <li key={c} className="border-b border-brand-navy/5 pb-2">
                  {c}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-sm bg-brand-amber text-sm font-heading font-bold uppercase tracking-wide text-brand-navy"
            >
              Get an estimate
            </Link>
          </aside>
        </Container>
      </section>

      <section className="bg-brand-light py-16 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="Avoid these"
            title="Common mistakes on this trade"
          />
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {service.mistakes.map((m) => (
              <li
                key={m.title}
                className="rounded-sm border border-brand-navy/10 bg-white p-6"
              >
                <h3 className="font-heading text-base font-extrabold text-brand-navy">
                  {m.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-slate/75">
                  {m.body}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-20">
        <Container>
          <SectionHeading eyebrow="On site" title="How we typically execute" />
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((p, i) => (
              <li key={p.title} className="rounded-sm bg-brand-light p-5">
                <span className="text-xs font-heading font-bold text-brand-amber">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-heading font-extrabold text-brand-navy">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-brand-slate/75">{p.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-brand-light py-16 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="Gallery"
            title={`${service.shortName} project photography`}
            body="Real MasterFix job-site photos — not stock."
          />
          <div className="mt-10">
            <ProjectGallery
              initialTrade={service.slug}
              images={service.images.map((src) => ({
                src,
                trade: service.slug,
                label: service.shortName,
              }))}
            />
          </div>
        </Container>
      </section>

      <section className="bg-brand-navy py-16 text-white">
        <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="font-heading text-2xl font-extrabold md:text-3xl">
              Ready to discuss {service.shortName.toLowerCase()}?
            </h2>
            <p className="mt-2 text-white/70">
              Call {site.phone} or start a structured estimate request.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={site.phoneHref}
              className="inline-flex min-h-12 items-center rounded-sm border border-white/30 px-5 text-sm font-heading font-bold uppercase tracking-wide"
            >
              Call now
            </a>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center rounded-sm bg-brand-amber px-5 text-sm font-heading font-bold uppercase tracking-wide text-brand-navy"
            >
              Start your project
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
