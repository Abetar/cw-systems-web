// app/galeria/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { galleryProjects } from "@/config/gallery";
import { site } from "@/config/site";
import GaleriaDetalleClient from "./GaleriaDetalleClient";

type Params = { slug: string };

export function generateStaticParams() {
  return galleryProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params> | Params;
}): Promise<Metadata> {
  const resolved = (await params) as Params;
  const project = galleryProjects.find((p) => p.slug === resolved.slug);
  if (!project) return {};

  const title = `${project.title} | ${site.name}`;
  const description = project.location
    ? `Proyecto: ${project.title} (${project.location}). Soluciones en aluminio y vidrio para obra y fachada.`
    : `Proyecto: ${project.title}. Soluciones en aluminio y vidrio para obra y fachada en ${site.city}, ${site.state}.`;

  const url = `${site.url}/galeria/${project.slug}`;

  return {
    title,
    description,
    keywords: site.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      siteName: site.name,
      title,
      description,
      locale: "es_MX",
      images: project.hero
        ? [{ url: project.hero, alt: project.title }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: project.hero ? [project.hero] : undefined,
    },
  };
}

export default async function GaleriaDetallePage({
  params,
}: {
  params: Promise<Params> | Params;
}) {
  const resolved = (await params) as Params;

  const project = galleryProjects.find((p) => p.slug === resolved.slug);
  if (!project) notFound();

  return (
    <GaleriaDetalleClient
      title={project.title}
      location={project.location}
      hero={project.hero}
      secondary={project.secondary}
      bullets={project.bullets}
    />
  );
}
