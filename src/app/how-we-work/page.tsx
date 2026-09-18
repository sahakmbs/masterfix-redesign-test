import type { Metadata } from "next";
import { Container, Eyebrow, SectionHeading } from "@/components/Section";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { processSteps, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "How we work",
  description:
    "Preconstruction, permitting, construction, and closeout — the MasterFix path from concept to completion.",
};

export default function HowWeWorkPage() {
  return (
    <>
      <section className="bg-ink pb-20 pt-32 text-parchment md:pb-28 md:pt-40">
        <Container>
          <Reveal>
            <Eyebrow light>Process</Eyebrow>
            <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
              From feasibility to closeout
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-parchment/70">
              A clear path so scopes stay honest, permits get handled, and punch lists actually
              close — built for King County schedules and PNW weather windows.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-paper py-16 md:py-24">
        <Container>
          <ProcessTimeline />
          <div className="mt-16 space-y-8 border-t border-ink/10 pt-12">
            {processSteps.slice(0, 2).map((step, i) => (
              <Reveal key={step.step}>
                <p className="max-w-3xl text-sm leading-relaxed text-charcoal/60">
                  <span className="font-semibold text-ink">{step.title}. </span>
                  {i === 0
                    ? "We talk through constraints early — budget bands, access, occupied spaces, and whether architecture or engineering is required — before anyone draws a line that locks cost."
                    : "When permits apply, we coordinate architectural and specialty approvals so construction is not waiting on paperwork midway."}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-parchment py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Cost clarity"
              title="Estimates that mean something"
              body="Website and phone estimates are informational. Formal work starts with a mutually executed contract after on-site feasibility. We document assumptions so surprises are rare — and when conditions change, we say so early."
            />
          </Reveal>
          <Reveal className="mt-10 flex flex-wrap gap-3" delay={0.1}>
            <Button href="/contact" variant="primary" className="!bg-ink !text-parchment">
              Request an estimate
            </Button>
            <Button href={site.calendly} variant="secondary" external>
              Book a consultation
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
