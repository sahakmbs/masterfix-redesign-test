import type { Metadata } from "next";
import Link from "next/link";
import { Container, Eyebrow, SectionHeading } from "@/components/Section";
import { processSteps, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "How we work",
  description:
    "Preconstruction, permitting, construction, and closeout — the MasterFix path from concept to completion.",
};

export default function HowWeWorkPage() {
  return (
    <>
      <section className="bg-brand-navy py-20 text-white md:py-28">
        <Container>
          <Eyebrow>Process</Eyebrow>
          <h1 className="mt-3 max-w-3xl font-heading text-4xl font-black uppercase tracking-tight md:text-6xl">
            From feasibility to closeout
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/75">
            A clear path so scopes stay honest, permits get handled, and punch lists actually
            close.
          </p>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container>
          <ol className="space-y-10">
            {processSteps.map((step, i) => (
              <li
                key={step.step}
                className="grid gap-6 border-b border-brand-navy/10 pb-10 last:border-0 md:grid-cols-12"
              >
                <div className="md:col-span-2">
                  <span className="font-heading text-4xl font-black text-brand-amber">
                    {step.step}
                  </span>
                </div>
                <div className="md:col-span-10">
                  <h2 className="font-heading text-2xl font-extrabold text-brand-navy md:text-3xl">
                    {step.title}
                  </h2>
                  <p className="mt-4 max-w-3xl text-base leading-relaxed text-brand-slate/80 md:text-lg">
                    {step.body}
                  </p>
                  {i === 0 ? (
                    <p className="mt-4 max-w-3xl text-sm text-brand-slate/65">
                      We talk through constraints early — budget bands, access, occupied spaces,
                      and whether architecture or engineering is required — before anyone draws
                      a line that locks cost.
                    </p>
                  ) : null}
                  {i === 1 ? (
                    <p className="mt-4 max-w-3xl text-sm text-brand-slate/65">
                      When permits apply, we coordinate architectural and specialty approvals so
                      construction is not waiting on paperwork midway.
                    </p>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-brand-light py-16 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="Cost clarity"
            title="Estimates that mean something"
            body="Website and phone estimates are informational. Formal work starts with a mutually executed contract after on-site feasibility. We document assumptions so surprises are rare — and when conditions change, we say so early."
          />
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center rounded-sm bg-brand-navy px-6 text-sm font-heading font-bold uppercase tracking-wide text-white"
            >
              Request an estimate
            </Link>
            <a
              href={site.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center rounded-sm border border-brand-navy/20 px-6 text-sm font-heading font-bold uppercase tracking-wide text-brand-navy"
            >
              Book a consultation
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
