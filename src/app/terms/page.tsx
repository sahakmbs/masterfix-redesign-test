import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${site.name}.`,
};

export default function TermsPage() {
  return (
    <section className="bg-brand-light py-16 md:py-24">
      <Container className="max-w-4xl">
        <div className="rounded-sm border border-brand-navy/10 bg-white p-8 shadow-sm md:p-14">
          <Eyebrow>Legal</Eyebrow>
          <h1 className="mt-3 font-heading text-3xl font-black uppercase text-brand-navy md:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm text-brand-slate/60">Last updated: August 2026</p>

          <div className="mt-10 space-y-8 text-brand-slate/80 leading-relaxed">
            <section>
              <h2 className="font-heading text-xl font-bold uppercase text-brand-navy">
                1. Introduction
              </h2>
              <p className="mt-3">
                Welcome to the official website of {site.name}. By accessing and using this
                website, you agree to comply with and be bound by these Terms of Service. If you
                do not agree, please refrain from using our website.
              </p>
            </section>
            <section>
              <h2 className="font-heading text-xl font-bold uppercase text-brand-navy">
                2. Use of Website and Content
              </h2>
              <p className="mt-3">
                All materials — including text, photographs, project galleries, branding, and
                layouts — are the intellectual property of {site.name}. Users may not copy,
                reproduce, distribute, or misrepresent our project photography or brand assets
                without prior written consent.
              </p>
            </section>
            <section>
              <h2 className="font-heading text-xl font-bold uppercase text-brand-navy">
                3. Estimates, Timelines, and Scopes
              </h2>
              <p className="mt-3">
                Any estimates, project timelines, or service scopes discussed via website forms,
                emails, or preliminary calls are informational and non-binding. Formal project
                commencement requires a mutually executed contract and approval of necessary
                municipal, architectural, and health-department permits. We reserve the right to
                alter preliminary estimates following on-site feasibility studies.
              </p>
            </section>
            <section>
              <h2 className="font-heading text-xl font-bold uppercase text-brand-navy">
                4. Warranties and Limitation of Liability
              </h2>
              <p className="mt-3">
                Digital content on this website is provided &quot;as is&quot; and &quot;as
                available&quot; without digital warranties of any kind. Specific construction
                warranties, bonding protections, and liability terms are governed by your project
                contract — not this website. {site.name} shall not be liable for damages arising
                from use of, or inability to use, this website.
              </p>
            </section>
            <section>
              <h2 className="font-heading text-xl font-bold uppercase text-brand-navy">
                5. Governing Law and Jurisdiction
              </h2>
              <p className="mt-3">
                These terms are governed by the laws of the State of Washington, without regard
                to conflict-of-law principles.
              </p>
            </section>
            <section>
              <h2 className="font-heading text-xl font-bold uppercase text-brand-navy">
                6. Company Information
              </h2>
              <p className="mt-3">
                <strong>{site.name}</strong>
                <br />
                State of Washington UBI: {site.ubi}
                <br />
                WA License #: {site.license}
                <br />
                {site.address.full}
              </p>
            </section>
          </div>
        </div>
      </Container>
    </section>
  );
}
