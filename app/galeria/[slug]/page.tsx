// app/galeria/[slug]/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { galleryProjects } from "@/config/gallery";
import { site } from "@/config/site";

type Params = { slug: string };

// ✅ SSG params
export function generateStaticParams() {
  return galleryProjects.map((p) => ({ slug: p.slug }));
}

// ✅ En algunas versiones, params puede venir como Promise
export async function generateMetadata({
  params,
}: {
  params: Promise<Params> | Params;
}): Promise<Metadata> {
  const resolved = (await params) as Params;
  const project = galleryProjects.find((p) => p.slug === resolved.slug);
  if (!project) return {};

  const title = `${project.title} | ${site.name}`;
  const description =
    project.location
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
        ? [
            {
              url: project.hero,
              alt: project.title,
            },
          ]
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

// ✅ Page async + await params
export default async function GaleriaDetallePage({
  params,
}: {
  params: Promise<Params> | Params;
}) {
  const resolved = (await params) as Params;

  const project = galleryProjects.find((p) => p.slug === resolved.slug);
  if (!project) notFound();

  const thumbs = [project.hero, ...(project.secondary ?? [])];

  return (
    <div className="bg-white">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <Link
            href="/galeria"
            className="text-sm font-semibold text-slate-700 hover:text-slate-900"
          >
            ← Regresar a galería
          </Link>

          <h1 className="mt-4 text-balance text-2xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            {project.title}
          </h1>

          {project.location ? (
            <p className="mt-2 text-sm text-slate-600">{project.location}</p>
          ) : (
            <p className="mt-2 text-sm text-slate-600">
              {site.city}, {site.state}
            </p>
          )}
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                <img
                  src={project.hero}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {thumbs.length > 1 ? (
                <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
                  {thumbs.map((src) => (
                    <div
                      key={src}
                      className="h-16 w-28 shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-slate-100"
                    >
                      <img
                        src={src}
                        alt={`${project.title} miniatura`}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              ) : null}
            </div>

            <aside className="lg:col-span-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-sm font-semibold text-slate-900">Detalles del proyecto</p>

                {project.bullets?.length ? (
                  <ul className="mt-4 grid gap-2 text-sm text-slate-700">
                    {project.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-3 text-sm text-slate-600">
                    Solicita información técnica y alcances por contacto.
                  </p>
                )}

                <Link
                  href="/contacto"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Enviar proyecto
                </Link>

                <p className="mt-3 text-xs text-slate-500">
                  * Información referencial. Alcances sujetos a especificación del proyecto.
                </p>
              </div>

              <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-semibold text-slate-900">Cobertura</p>
                <p className="mt-2 text-sm text-slate-600">
                  {site.city} y {site.state}. Proyectos de obra y fachada en aluminio y vidrio.
                </p>

                <div className="mt-4 flex flex-col gap-3">
                  <Link
                    href="/servicios"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                  >
                    Ver capacidades
                  </Link>
                  <Link
                    href="/respaldo"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                  >
                    Ver respaldo
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
