import Image from "next/image";
import { ProjectGallery } from "@/components/ProjectGallery";
import { Container, Eyebrow, SectionHeading } from "@/components/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import type { Service } from "@/lib/site";
import { site } from "@/lib/site";

export function ServicePageView({ service }: { service: Service }) {
  return (
    <>
      <section className="relative min-h-[72vh] overflow-hidden bg-ink text-parchment">
        <div className="absolute inset-0 overflow-hidden">
          <div className="ken-burns absolute inset-[-3%] h-[106%] w-[106%]">
            <Image
              src={service.heroImage}
              alt={service.name}
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-50"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/65 to-ink/35" />
        </div>
        <Container className="relative flex min-h-[72vh] flex-col justify-end pb-16 pt-28">
          <Reveal>
            <Eyebrow light>Service · {service.shortName}</Eyebrow>
            <h1 className="mt-4 max-w-4xl font-display text-4xl leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
              {service.name}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-parchment/75">{service.headline}</p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-paper py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="font-display text-2xl leading-snug text-ink md:text-3xl">
              {service.intro}
            </p>
            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              <div className="rounded-[2px] border border-ink/10 bg-parchment p-6">
                <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-bronze">
                  Timeline
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/75">
                  {service.timeline}
                </p>
              </div>
              <div className="rounded-[2px] border border-ink/10 bg-parchment p-6">
                <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-bronze">
                  Materials
                </h2>
                <ul className="mt-3 space-y-2 text-sm text-charcoal/75">
                  {service.materials.map((m) => (
                    <li key={m} className="flex gap-2">
                      <span className="text-bronze">·</span>
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.1}>
            <aside className="h-full rounded-[2px] border border-ink/10 bg-ink p-7 text-parchment md:p-8">
              <h2 className="font-display text-2xl">Cost drivers</h2>
              <p className="mt-2 text-sm text-parchment/55">
                What typically moves the number — discussed early, not after demo.
              </p>
              <ul className="mt-6 space-y-0">
                {service.costDrivers.map((c) => (
                  <li
                    key={c}
                    className="border-b border-white/10 py-3.5 text-sm text-parchment/80 last:border-0"
                  >
                    {c}
                  </li>
                ))}
              </ul>
              <Button href="/contact" variant="primary" className="mt-8 w-full">
                Get an estimate
              </Button>
            </aside>
          </Reveal>
        </Container>
      </section>

      <section className="bg-parchment py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Avoid these"
              title="Common mistakes on this trade"
              body="The expensive lessons we see on other people's jobs — and refuse to repeat."
            />
          </Reveal>
          <Stagger className="mt-12 grid gap-5 md:grid-cols-3" stagger={0.08}>
            {service.mistakes.map((m, i) => (
              <StaggerItem key={m.title}>
                <article className="h-full rounded-[2px] border border-ink/10 bg-paper p-7">
                  <span className="font-display text-3xl text-bronze/80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-xl text-ink">{m.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{m.body}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="bg-paper py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="On site"
              title="How we typically execute"
            />
          </Reveal>
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <li className="relative h-full overflow-hidden rounded-[2px] bg-parchment p-6">
                  <span className="absolute -right-2 -top-4 font-display text-7xl text-ink/[0.04]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-bronze">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-xl text-ink">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{p.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-parchment-deep py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Gallery"
              title={`${service.shortName} project photography`}
              body="Real MasterFix job-site photos — tap to expand."
            />
          </Reveal>
          <div className="mt-10">
            <ProjectGallery
              initialTrade={service.slug}
              showFilters={false}
              images={service.images.map((src) => ({
                src,
                trade: service.slug,
                label: service.shortName,
              }))}
            />
          </div>
        </Container>
      </section>

      <section className="bg-ink py-16 text-parchment md:py-20">
        <Container className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl">
              Ready to discuss {service.shortName.toLowerCase()}?
            </h2>
            <p className="mt-3 text-parchment/60">
              Call {site.phone} or start a structured estimate request.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href={site.phoneHref} variant="ghost">
              Call now
            </Button>
            <Button href="/contact" variant="primary">
              Start your project
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
