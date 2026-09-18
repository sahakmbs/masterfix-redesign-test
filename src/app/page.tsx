import Image from "next/image";
import Link from "next/link";
import { Container, Eyebrow, SectionHeading } from "@/components/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { TradeMarquee } from "@/components/ui/Marquee";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { services, site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* Cinematic hero */}
      <section className="relative min-h-[100svh] overflow-hidden bg-ink text-parchment">
        <div className="absolute inset-0 overflow-hidden">
          <div className="ken-burns absolute inset-[-4%] h-[108%] w-[108%]">
            <Image
              src="/images/front.webp"
              alt="Seattle MasterFix project exterior"
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-55"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
        </div>

        <Container className="relative flex min-h-[100svh] flex-col justify-end pb-20 pt-32 md:justify-center md:pb-28">
          <Reveal className="max-w-4xl">
            <Eyebrow light>King County · PNW craft</Eyebrow>
            <h1 className="mt-6 font-display text-[2.75rem] leading-[0.98] tracking-tight text-parchment sm:text-6xl md:text-7xl lg:text-[5.25rem]">
              Built on trust.
              <br />
              <span className="text-bronze-light">Executed with precision.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-parchment/75 md:text-lg">
              High-performance contracting across King County — from weather-tight exteriors to
              meticulous interior finishes. A crew that shows up for the rain, the schedule, and
              the details you notice every day.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button href="/contact" variant="primary">
                Request an estimate
              </Button>
              <Button href="/projects" variant="ghost">
                View projects
              </Button>
            </div>
            <p className="mt-10 text-[11px] uppercase tracking-[0.2em] text-parchment/45">
              WA #{site.license} · UBI {site.ubi} · {site.credentials}
            </p>
          </Reveal>
        </Container>

        <div className="absolute bottom-8 right-5 hidden text-right md:block lg:right-10">
          <p className="text-[10px] uppercase tracking-[0.24em] text-parchment/40">Scroll</p>
          <div className="ml-auto mt-2 h-12 w-px bg-gradient-to-b from-bronze to-transparent" />
        </div>
      </section>

      <TradeMarquee
        items={[
          "Siding",
          "Fencing",
          "Tile",
          "Laminate",
          "Drywall",
          "Paint",
          "Rain-screen detailing",
          "King County crews",
        ]}
      />

      {/* Story strip */}
      <section className="bg-paper py-20 md:py-28">
        <Container>
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <Eyebrow>The crew</Eyebrow>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] text-ink md:text-5xl lg:text-6xl">
                Remodeling that respects Pacific Northwest weather — and the people living through
                the build.
              </h2>
            </Reveal>
            <Reveal className="lg:col-span-5" delay={0.1}>
              <p className="text-base leading-relaxed text-charcoal/70 md:text-lg">
                We are a Seattle general contractor built around trade craft: plumb posts, flat
                floors, watertight flashings, and clean handoff. No theater — just disciplined
                sequences, clear communication, and finishes that hold up through wet winters.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-[2px] bg-ink/10 sm:grid-cols-3">
            {[
              {
                k: "01",
                t: "Crew",
                d: "Trade specialists who own their scopes — not a revolving cast of strangers.",
              },
              {
                k: "02",
                t: "Craft",
                d: "Material boards, layout discipline, and the invisible work that keeps water out.",
              },
              {
                k: "03",
                t: "County",
                d: "Serving property owners and GCs across King County with licensed, bonded crews.",
              },
            ].map((item) => (
              <Reveal key={item.k} className="bg-paper p-7 md:p-9">
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-bronze">
                  {item.k}
                </span>
                <h3 className="mt-3 font-display text-2xl text-ink">{item.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/65">{item.d}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-parchment py-20 md:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="How we work"
              title="A clear path from feasibility to closeout"
              body="Honest scopes, permit coordination when needed, and schedule control — so punch lists actually close."
            />
          </Reveal>
          <div className="mt-16 md:mt-20">
            <ProcessTimeline />
          </div>
          <Reveal className="mt-14">
            <Button href="/how-we-work" variant="secondary">
              See the full process
            </Button>
          </Reveal>
        </Container>
      </section>

      {/* Service material boards */}
      <section className="bg-ink py-20 text-parchment md:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              light
              eyebrow="Trades"
              title="Material boards from the job site"
              body="Tap any trade for scope notes, timelines, cost drivers, and our own photography — not stock."
            />
          </Reveal>
          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
            {services.map((s) => (
              <StaggerItem key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group relative block overflow-hidden rounded-[2px] bg-ink-soft ring-1 ring-white/10"
                >
                  <div className="relative aspect-[5/4] overflow-hidden">
                    <Image
                      src={s.heroImage}
                      alt={s.name}
                      fill
                      sizes="(max-width:768px) 100vw, 33vw"
                      className="object-cover transition duration-700 ease-out group-hover:scale-[1.07]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent opacity-90" />
                  </div>
                  <div className="relative -mt-16 px-5 pb-6 pt-2">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-bronze-light">
                      {s.shortName}
                    </p>
                    <h3 className="mt-2 font-display text-2xl text-parchment">{s.name}</h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-parchment/60">
                      {s.summary}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-bronze-light transition group-hover:gap-3">
                      Open board
                      <span aria-hidden>→</span>
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Featured photography strip */}
      <section className="bg-parchment-deep py-16 md:py-20">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <SectionHeading
                eyebrow="Projects"
                title="Work you can walk up to"
                body="Filter by trade on the projects page — real MasterFix photography."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <Button href="/projects" variant="secondary">
                Browse gallery
              </Button>
            </Reveal>
          </div>
          <Stagger className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4" stagger={0.06}>
            {services.slice(0, 4).map((s) => (
              <StaggerItem key={s.slug}>
                <Link
                  href={`/projects?trade=${s.slug}`}
                  className="group relative block aspect-[3/4] overflow-hidden rounded-[2px]"
                >
                  <Image
                    src={s.heroImage}
                    alt={s.shortName}
                    fill
                    sizes="25vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-ink/25 transition group-hover:bg-ink/40" />
                  <span className="absolute bottom-4 left-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-parchment">
                    {s.shortName}
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* CTA band */}
      <section className="relative overflow-hidden bg-ink py-20 text-parchment md:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(ellipse_at_center,rgba(196,137,58,0.18),transparent_65%)]"
        />
        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <SectionHeading
                light
                eyebrow="Ready when you are"
                title="Start with a conversation — not a hard sell"
                body="Tell us about the property, the weather constraints, and the finish you want. We will answer with an honest scope."
              />
              <ul className="mt-8 space-y-3 text-sm text-parchment/70">
                <li className="flex gap-3">
                  <span className="text-bronze">—</span>
                  Licensed, bonded, and fully insured in Washington
                </li>
                <li className="flex gap-3">
                  <span className="text-bronze">—</span>
                  Property owners and general contractors welcome
                </li>
                <li className="flex gap-3">
                  <span className="text-bronze">—</span>
                  Clear communication from feasibility through closeout
                </li>
              </ul>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="rounded-[2px] border border-white/12 bg-white/[0.04] p-8 backdrop-blur-sm md:p-10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-bronze">
                  Next step
                </p>
                <p className="mt-4 font-display text-3xl leading-snug text-parchment md:text-4xl">
                  Request a project estimate or book a live consult.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href="/contact" variant="primary">
                    Start your project
                  </Button>
                  <Button href={site.calendly} variant="ghost" external>
                    Book consult
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
