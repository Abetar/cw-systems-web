// app/galeria/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { galleryProjects } from "@/config/gallery";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: site.pages.galeria.title,
  description: site.pages.galeria.description,
  alternates: { canonical: "/galeria" },
};

export default function GaleriaPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-18">
          <p className="inline-flex rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600">
            Proyectos • {site.city}, {site.state}
          </p>
          <h1 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            Galería de proyectos
          </h1>
          <p className="mt-4 max-w-3xl text-pretty text-slate-600 md:text-lg">
            Referencias de proyectos y soluciones en aluminio y vidrio para
            obra.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-18">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryProjects.map((p) => (
              <Link
                key={p.slug}
                href={`/galeria/${p.slug}`}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={p.cover}
                    alt={p.title}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>

                <div className="p-5">
                  <p className="text-sm font-semibold text-slate-900">
                    {p.title}
                  </p>
                  {p.location ? (
                    <p className="mt-1 text-sm text-slate-600">{p.location}</p>
                  ) : (
                    <p className="mt-1 text-sm text-slate-600">
                      {site.city}, {site.state}
                    </p>
                  )}

                  <p className="mt-3 text-sm font-medium text-slate-700 transition group-hover:text-slate-900">
                    Ver proyecto →
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {galleryProjects.length === 0 ? (
            <p className="mt-6 text-sm text-slate-600">
              Aún no hay proyectos cargados.
            </p>
          ) : null}
        </div>
      </section>
    </div>
  );
}
