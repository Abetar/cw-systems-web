// app/empresa/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: site.pages.empresa.title,
  description: site.pages.empresa.description,
  alternates: { canonical: `${site.url}/empresa` },
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
            Especialistas en sistemas de aluminio y vidrio para obra y fachada. Enfoque institucional
            para proyectos: revisión técnica, coordinación en sitio y ejecución alineada a programa y
            especificaciones.
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

          <p className="mt-6 max-w-4xl text-xs text-slate-500">
            * Trabajamos con equipos de obra, supervisión y compras. La propuesta se construye con base
            en alcance, planos y condiciones reales del sitio.
          </p>
        </div>
      </section>

      {/* QUIÉNES SOMOS */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-18">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Quiénes somos
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-600 md:text-base">
            CW Systems participa en proyectos de construcción donde la precisión técnica, la
            coordinación en obra y la claridad de alcances hacen la diferencia. Nuestro rol es ser un
            aliado ejecutor: entender el proyecto, alinear especificaciones y sostener el proceso hasta
            el cierre.
          </p>

          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-600 md:text-base">
            Operamos principalmente en {site.city} y {site.state}, con soporte para obra residencial,
            comercial e industrial cuando el alcance requiere planeación y seguimiento.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Interlocución técnica",
                desc: "Alineación de criterios, compatibilidades y requerimientos desde la etapa de revisión.",
              },
              {
                title: "Coordinación en obra",
                desc: "Planeación de accesos, frentes de trabajo y programa para ejecutar sin fricción.",
              },
              {
                title: "Ejecución con control",
                desc: "Alcances definidos, seguimiento y comunicación para reducir retrabajos.",
              },
            ].map((x) => (
              <div key={x.title} className="rounded-2xl border border-slate-200 bg-white p-6">
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
            Un flujo serio y práctico: recepción de alcance, revisión técnica, propuesta y coordinación
            para ejecución. El objetivo es avanzar con decisiones claras y con información verificable.
          </p>

          <ol className="mt-6 grid gap-4 md:grid-cols-2 text-sm text-slate-700">
            <li className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-semibold text-slate-500">01</p>
              <p className="mt-1 font-semibold text-slate-900">Recepción de alcance</p>
              <p className="mt-1 text-slate-600">
                Planos, cantidades, ubicación, accesos y etapa del proyecto.
              </p>
            </li>
            <li className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-semibold text-slate-500">02</p>
              <p className="mt-1 font-semibold text-slate-900">Revisión técnica</p>
              <p className="mt-1 text-slate-600">
                Alineación a especificaciones, compatibilidades y condiciones de obra.
              </p>
            </li>
            <li className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-semibold text-slate-500">03</p>
              <p className="mt-1 font-semibold text-slate-900">Propuesta de alcances</p>
              <p className="mt-1 text-slate-600">
                Definición de entregables, tiempos y supuestos para evitar ambigüedad.
              </p>
            </li>
            <li className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-semibold text-slate-500">04</p>
              <p className="mt-1 font-semibold text-slate-900">Coordinación y seguimiento</p>
              <p className="mt-1 text-slate-600">
                Comunicación continua durante ejecución para sostener el programa.
              </p>
            </li>
          </ol>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-sm font-semibold text-slate-900">Enfoque de proyecto</p>
            <p className="mt-2 text-sm text-slate-600">
              Priorizamos proyectos que requieren coordinación, planeación y control de ejecución. Si
              buscas una instalación menor o atención inmediata tipo retail, podemos orientarte, pero
              este sitio está enfocado a obra.
            </p>
          </div>
        </div>
      </section>

      {/* RESPALDO */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-18">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Respaldo y colaboración
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-600 md:text-base">
            Colaboramos con proveedores y soluciones compatibles con requerimientos de obra, cuidando
            disponibilidad, especificación y calidad según el proyecto.
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
            Comparte el alcance, la ubicación y la etapa. Revisamos especificaciones y condiciones para
            avanzar con una propuesta clara.
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
