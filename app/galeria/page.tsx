// app/galeria/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { galleryProjects } from "@/config/gallery";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: site.pages.galeria.title,
  description: site.pages.galeria.description,
  keywords: site.keywords,
  alternates: { canonical: `${site.url}/galeria` },
  openGraph: {
    type: "website",
    url: `${site.url}/galeria`,
    siteName: site.name,
    title: site.pages.galeria.title,
    description: site.pages.galeria.description,
    locale: "es_MX",
  },
  twitter: {
    card: "summary_large_image",
    title: site.pages.galeria.title,
    description: site.pages.galeria.description,
  },
};

export default function GaleriaPage() {
  const hasProjects = galleryProjects.length > 0;

  return (
    <div className="bg-white">
      {/* HERO (portafolio / CV) */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-18">
          <p className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">
            Portafolio • {site.city}, {site.state}
          </p>

          <h1 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            Proyectos (selección)
          </h1>

          <p className="mt-4 max-w-3xl text-pretty text-slate-600 md:text-lg">
            Referencias de participación en proyectos con soluciones de aluminio y vidrio para obra y fachada.
          </p>

          <p className="mt-4 max-w-3xl text-xs text-slate-500">
            * La información y alcances específicos se confirman por proyecto. Las imágenes son referencias de
            trabajos y/o soluciones ejecutadas.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-18">
          {hasProjects ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {galleryProjects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/galeria/${p.slug}`}
                  className={[
                    "group overflow-hidden rounded-2xl border border-slate-200 bg-white transition",
                    "hover:border-slate-300 hover:shadow-sm",
                  ].join(" ")}
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
                    <p className="text-sm font-semibold text-slate-900">{p.title}</p>

                    <p className="mt-1 text-sm text-slate-600">
                      {p.location ? p.location : `${site.city}, ${site.state}`}
                    </p>

                    <p className="mt-3 text-xs text-slate-500">
                      Ficha de proyecto · Información referencial
                    </p>

                    {/* Navegación interna, sin vibe “venta” */}
                    <p className="mt-4 inline-flex text-sm font-semibold text-slate-900">
                      Ver ficha
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-sm text-slate-600">Aún no hay proyectos cargados.</p>
          )}

          {/* BLOQUE FINAL (sin CTA) */}
          {hasProjects ? (
            <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-semibold text-slate-900">Nota</p>
              <p className="mt-2 max-w-3xl text-sm text-slate-600">
                Las fichas presentan material referencial. Para información técnica o detalle de alcances,
                consulta el apartado de contacto.
              </p>

              <div className="mt-4">
                <Link
                  href="/contacto"
                  className="text-sm font-semibold text-slate-800 hover:text-slate-900"
                >
                  Ir a contacto →
                </Link>
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
}
