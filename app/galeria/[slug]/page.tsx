// app/galeria/[slug]/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { galleryProjects } from "@/config/gallery";
import { site } from "@/config/site";

type Params = { slug: string };

// ✅ Esto está bien: SSG params
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

  return {
    title: `${project.title} | ${site.name}`,
    description: `Proyecto: ${project.title}. Soluciones en aluminio y vidrio en ${site.city}, ${site.state}.`,
    alternates: { canonical: `/galeria/${project.slug}` },
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
          ) : null}
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
                <p className="text-sm font-semibold text-slate-900">
                  Detalles del proyecto
                </p>

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
                    Solicita detalles técnicos y alcances por contacto.
                  </p>
                )}

                <Link
                  href="/contacto"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Solicitar cotización
                </Link>

                <p className="mt-3 text-xs text-slate-500">
                  * Información sujeta a especificación del proyecto.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
