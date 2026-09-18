import type { Metadata } from "next";
import { EstimateForm } from "@/components/EstimateForm";
import { Container, Eyebrow } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact / Estimate",
  description:
    "Request a Seattle MasterFix project estimate or book a consultation. Call (206) 550-4576.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-brand-navy py-16 text-white md:py-20">
        <Container>
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-3 font-heading text-4xl font-black uppercase tracking-tight md:text-5xl">
            Start your project
          </h1>
          <p className="mt-4 max-w-2xl text-white/75">
            Multi-step estimate intake posts to Formspree. Or call / book a live consultation.
          </p>
        </Container>
      </section>

      <section className="bg-brand-light py-14 md:py-20">
        <Container className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <EstimateForm />
          </div>
          <aside className="space-y-6 lg:col-span-2">
            <div className="rounded-sm border border-brand-navy/10 bg-white p-6">
              <h2 className="font-heading text-lg font-extrabold text-brand-navy">
                Talk to us directly
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-brand-slate/80">
                <li>
                  <a className="font-semibold text-brand-navy" href={site.phoneHref}>
                    {site.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </li>
                <li>
                  <a href={`mailto:${site.estimatesEmail}`}>{site.estimatesEmail}</a>
                </li>
                <li>{site.address.full}</li>
              </ul>
              <a
                href={site.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-sm bg-brand-navy text-sm font-heading font-bold uppercase tracking-wide text-white"
              >
                Book on Calendly
              </a>
            </div>
            <div className="rounded-sm bg-brand-navy p-6 text-white">
              <p className="text-xs font-heading font-bold uppercase tracking-[0.18em] text-brand-amber">
                Credentials
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                WA License # {site.license}
                <br />
                UBI {site.ubi}
                <br />
                {site.credentials}
              </p>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
