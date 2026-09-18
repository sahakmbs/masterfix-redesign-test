import type { Metadata } from "next";
import { ProjectGallery } from "@/components/ProjectGallery";
import { Container, Eyebrow } from "@/components/Section";
import { Reveal } from "@/components/motion/Reveal";
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
      <section className="bg-ink pb-16 pt-32 text-parchment md:pb-20 md:pt-40">
        <Container>
          <Reveal>
            <Eyebrow light>Projects</Eyebrow>
            <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.02] tracking-tight md:text-6xl">
              Work from our job sites
            </h1>
            <p className="mt-5 max-w-2xl text-parchment/70">
              Photography from completed MasterFix projects. Filter by trade, tap any frame to
              expand — craft you can inspect up close.
            </p>
          </Reveal>
        </Container>
      </section>
      <section className="bg-parchment py-14 md:py-20">
        <Container>
          <ProjectGallery initialTrade={initial} />
        </Container>
      </section>
    </>
  );
}
