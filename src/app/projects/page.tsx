import type { Metadata } from "next";
import { ProjectGallery } from "@/components/ProjectGallery";
import { Container, Eyebrow } from "@/components/Section";
import type { ServiceSlug } from "@/lib/site";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Filter Seattle MasterFix project photography by trade — siding, fencing, tile, laminate, drywall, and paint.",
};

type Props = { searchParams: Promise<{ trade?: string }> };

export default async function ProjectsPage({ searchParams }: Props) {
  const params = await searchParams;
  const tradeParam = params.trade;
  const initial =
    tradeParam && services.some((s) => s.slug === tradeParam)
      ? (tradeParam as ServiceSlug)
      : "all";

  return (
    <>
      <section className="bg-brand-navy py-20 text-white md:py-24">
        <Container>
          <Eyebrow>Projects</Eyebrow>
          <h1 className="mt-3 max-w-3xl font-heading text-4xl font-black uppercase tracking-tight md:text-5xl">
            Work from our job sites
          </h1>
          <p className="mt-4 max-w-2xl text-white/75">
            Photography from completed MasterFix projects. Filter by trade to focus on the
            craft you care about.
          </p>
        </Container>
      </section>
      <section className="bg-brand-light py-14 md:py-20">
        <Container>
          <ProjectGallery initialTrade={initial} />
        </Container>
      </section>
    </>
  );
}
