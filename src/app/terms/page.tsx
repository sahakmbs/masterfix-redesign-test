import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/Section";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${site.name}.`,
};

export default function TermsPage() {
  return (
    <section className="bg-parchment pb-20 pt-32 md:pb-28 md:pt-40">
      <Container className="max-w-4xl">
        <Reveal>
          <div className="rounded-[2px] border border-ink/10 bg-paper p-8 md:p-14">
            <Eyebrow>Legal</Eyebrow>
            <h1 className="mt-4 font-display text-4xl tracking-tight text-ink md:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-3 text-sm text-charcoal/50">Last updated: August 2026</p>

            <div className="mt-10 space-y-8 text-charcoal/75 leading-relaxed">
              <section>
                <h2 className="font-display text-2xl text-ink">1. Introduction</h2>
                <p className="mt-3">
                  Welcome to the official website of {site.name}. By accessing and using this
                  website, you agree to comply with and be bound by these Terms of Service. If you
                  do not agree, please refrain from using our website.
                </p>
              </section>
              <section>
                <h2 className="font-display text-2xl text-ink">2. Use of Website and Content</h2>
                <p className="mt-3">
                  All materials — including text, photographs, project galleries, branding, and
                  layouts — are the intellectual property of {site.name}. Users may not copy,
                  reproduce, distribute, or misrepresent our project photography or brand assets
                  without prior written consent.
                </p>
              </section>
              <section>
                <h2 className="font-display text-2xl text-ink">
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
                <h2 className="font-display text-2xl text-ink">
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
                <h2 className="font-display text-2xl text-ink">
                  5. Governing Law and Jurisdiction
                </h2>
                <p className="mt-3">
                  These terms are governed by the laws of the State of Washington, without regard
                  to conflict-of-law principles.
                </p>
              </section>
              <section>
                <h2 className="font-display text-2xl text-ink">6. Company Information</h2>
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
        </Reveal>
      </Container>
    </section>
  );
}
