import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageView } from "@/components/ServicePage";
import { getService } from "@/lib/site";

const slug = "drywall" as const;

export const metadata: Metadata = {
  title: getService(slug)?.name ?? "Service",
  description: getService(slug)?.summary,
};

export default function Page() {
  const service = getService(slug);
  if (!service) notFound();
  return <ServicePageView service={service} />;
}
