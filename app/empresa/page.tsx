// app/empresa/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: site.pages.empresa.title,
  description: site.pages.empresa.description,
  keywords: site.keywords,
  alternates: { canonical: `${site.url}/empresa` },
  openGraph: {
    type: "website",
    url: `${site.url}/empresa`,
    siteName: site.name,
    title: site.pages.empresa.title,
    description: site.pages.empresa.description,
    locale: "es_MX",
  },
  twitter: {
    card: "summary_large_image",
    title: site.pages.empresa.title,
    description: site.pages.empresa.description,
  },
};

export default function EmpresaPage() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-18">
          <p className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">
            Empresa • {site.city}, {site.state}
          </p>

          <h1 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            CW Systems
          </h1>

          <p className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-slate-600 md:text-lg">
            Proveedor de sistemas de aluminio y vidrio para proyectos de obra y fachada. Enfoque
            institucional para constructoras y contratistas: definición técnica, coordinación en obra y
            entregables claros.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/galeria"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              Ver proyectos
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Enviar proyecto
            </Link>
          </div>
        </div>
      </section>

      {/* QUIÉNES SOMOS */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-18">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Quiénes somos
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-600 md:text-base">
            CW Systems brinda soluciones en aluminio y vidrio para proyectos de construcción, trabajando
            con equipos que requieren claridad técnica, coordinación en sitio y un proceso de ejecución
            definido.
          </p>

          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-600 md:text-base">
            Nuestro enfoque prioriza la compatibilidad con especificaciones, la planeación de alcances y
            la comunicación continua para reducir fricción durante el desarrollo de la obra.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Enfoque en obra",
                desc: "Alineación a programa, accesos, condiciones y coordinación en sitio.",
              },
              {
                title: "Definición técnica",
                desc: "Criterios claros para selección de sistemas y compatibilidades.",
              },
              {
                title: "Ejecución con control",
                desc: "Entregables, seguimiento y comunicación para evitar retrabajos.",
              },
            ].map((x) => (
              <div
                key={x.title}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <p className="text-sm font-semibold text-slate-900">{x.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{x.desc}</p>
                <p className="mt-4 text-xs text-slate-500">
                  Proceso · Coordinación · Cumplimiento
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CÓMO TRABAJAMOS */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-18">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Cómo trabajamos
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-600 md:text-base">
            Un proceso simple y serio: recepción de alcance, revisión técnica, propuesta y coordinación
            para ejecución. Sin promesas genéricas; lo importante es alinear especificaciones y
            condiciones reales de obra.
          </p>

          <ul className="mt-6 grid gap-4 md:grid-cols-2 text-sm text-slate-700">
            <li>• Revisión del alcance, condiciones de acceso y etapa de proyecto</li>
            <li>• Alineación de especificaciones, criterios y compatibilidades</li>
            <li>• Definición de entregables y plan de trabajo con el equipo de obra</li>
            <li>• Coordinación y seguimiento durante la ejecución</li>
          </ul>

          <p className="mt-6 max-w-4xl text-sm leading-relaxed text-slate-600">
            El objetivo es reducir fricción, retrabajos y decisiones improvisadas durante el desarrollo
            del proyecto.
          </p>
        </div>
      </section>

      {/* RESPALDO (sin claims inflados) */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-18">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Respaldo y colaboración
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-600 md:text-base">
            Participamos en proyectos donde la coordinación, la claridad técnica y el control de
            ejecución son críticos. Trabajamos con materiales y soluciones compatibles con necesidades de
            obra y requerimientos del cliente.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/respaldo"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              Ver respaldo
            </Link>

            <Link
              href="/servicios"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              Ver capacidades
            </Link>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-18">
          <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">
            ¿Tienes un proyecto en puerta?
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-slate-600">
            Comparte el alcance y la ubicación. Revisamos especificaciones y condiciones para avanzar con
            una propuesta clara.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Enviar proyecto
            </Link>

            <Link
              href="/galeria"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              Ver proyectos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
