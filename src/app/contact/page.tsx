import type { Metadata } from "next";
import { EstimateForm } from "@/components/EstimateForm";
import { Container, Eyebrow } from "@/components/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact / Estimate",
  description:
    "Request a Seattle MasterFix project estimate or book a consultation. Call (206) 550-4576.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-ink pb-16 pt-32 text-parchment md:pb-20 md:pt-40">
        <Container>
          <Reveal>
            <Eyebrow light>Contact</Eyebrow>
            <h1 className="mt-4 font-display text-4xl leading-[1.02] tracking-tight md:text-6xl">
              Start your project
            </h1>
            <p className="mt-5 max-w-2xl text-parchment/70">
              Multi-step estimate intake posts to Formspree. Or call / book a live consultation
              with the crew.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-parchment py-14 md:py-20">
        <Container className="grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <EstimateForm />
          </Reveal>
          <div className="space-y-5 lg:col-span-2">
            <Reveal delay={0.08}>
              <aside className="rounded-[2px] border border-ink/10 bg-paper p-7">
                <h2 className="font-display text-2xl text-ink">Talk to us directly</h2>
                <ul className="mt-5 space-y-3 text-sm text-charcoal/75">
                  <li>
                    <a className="font-semibold text-ink" href={site.phoneHref}>
                      {site.phone}
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${site.email}`}>{site.email}</a>
                  </li>
                  <li>
                    <a href={`mailto:${site.estimatesEmail}`}>{site.estimatesEmail}</a>
                  </li>
                  <li className="pt-1 text-charcoal/55">{site.address.full}</li>
                </ul>
                <Button
                  href={site.calendly}
                  variant="primary"
                  external
                  className="mt-7 w-full !bg-ink !text-parchment"
                >
                  Book on Calendly
                </Button>
              </aside>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="rounded-[2px] bg-ink p-7 text-parchment">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-bronze">
                  Credentials
                </p>
                <p className="mt-4 text-sm leading-relaxed text-parchment/75">
                  WA License # {site.license}
                  <br />
                  UBI {site.ubi}
                  <br />
                  {site.credentials}
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
