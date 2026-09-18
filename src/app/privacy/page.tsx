import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${site.name}.`,
};

export default function PrivacyPage() {
  return (
    <section className="bg-brand-light py-16 md:py-24">
      <Container className="max-w-4xl">
        <div className="rounded-sm border border-brand-navy/10 bg-white p-8 shadow-sm md:p-14">
          <Eyebrow>Legal</Eyebrow>
          <h1 className="mt-3 font-heading text-3xl font-black uppercase text-brand-navy md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-brand-slate/60">Last updated: September 2026</p>

          <div className="mt-10 space-y-8 text-brand-slate/80 leading-relaxed">
            <section>
              <h2 className="font-heading text-xl font-bold uppercase text-brand-navy">
                1. Introduction
              </h2>
              <p className="mt-3">
                At {site.name}, we respect your privacy and are committed to protecting the
                personal information you share with us. This Privacy Policy explains how we
                collect, use, and safeguard your data when you visit our website or contact us
                for contracting services.
              </p>
            </section>
            <section>
              <h2 className="font-heading text-xl font-bold uppercase text-brand-navy">
                2. Information We Collect
              </h2>
              <p className="mt-3">
                We only collect information necessary to provide our services. When you use our
                website, we may collect:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>
                  <strong>Voluntary information:</strong> name, company, email, phone, project
                  location, property and service type, estimated budget, desired timeline,
                  communication preferences, and project details submitted through our forms or
                  scheduling tools.
                </li>
                <li>
                  <strong>Automated information:</strong> basic technical data such as browser
                  type or IP address collected by hosting platforms to keep the site functioning.
                </li>
              </ul>
            </section>
            <section>
              <h2 className="font-heading text-xl font-bold uppercase text-brand-navy">
                3. How We Use Your Information
              </h2>
              <ul className="mt-3 list-disc space-y-1 pl-5">
                <li>Respond to inquiries and provide project estimates.</li>
                <li>Communicate regarding scheduling, feasibility, and execution.</li>
                <li>Maintain internal administrative and financial records.</li>
              </ul>
            </section>
            <section>
              <h2 className="font-heading text-xl font-bold uppercase text-brand-navy">
                4. Form and Scheduling Providers
              </h2>
              <p className="mt-3">
                We use Formspree to process website form submissions and Calendly for online
                appointment scheduling. Information submitted through those features is processed
                under each provider&apos;s own privacy and security practices. Please provide only
                information relevant to your project or meeting request.
              </p>
            </section>
            <section>
              <h2 className="font-heading text-xl font-bold uppercase text-brand-navy">
                5. Information Sharing and Disclosure
              </h2>
              <p className="mt-3">
                <strong>We do not sell, rent, or trade your personal data to third parties.</strong>
              </p>
              <p className="mt-2">We may share information only when needed for:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>
                  Project execution with verified subcontractors, municipal permit offices, or
                  engineers solely to execute your requested work.
                </li>
                <li>
                  Legal requirements under Washington State law, court order, or to protect the
                  rights and safety of {site.name}.
                </li>
              </ul>
            </section>
            <section>
              <h2 className="font-heading text-xl font-bold uppercase text-brand-navy">
                6. Data Security
              </h2>
              <p className="mt-3">
                We implement industry-standard measures to protect personal information. No method
                of digital transmission over the Internet is 100% secure.
              </p>
            </section>
            <section>
              <h2 className="font-heading text-xl font-bold uppercase text-brand-navy">
                7. Contact Us
              </h2>
              <p className="mt-3">
                <strong>{site.name}</strong>
                <br />
                Email: {site.email}
                <br />
                Phone: {site.phone}
                <br />
                {site.address.street}
                <br />
                {site.address.city}, {site.address.state} {site.address.zip}
              </p>
            </section>
          </div>
        </div>
      </Container>
    </section>
  );
}
