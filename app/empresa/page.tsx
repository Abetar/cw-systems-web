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
      {/* HERO / IDENTIDAD */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-18">
          <p className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">
            Empresa • {site.city}, {site.state}
          </p>

          <h1 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            {site.name}
          </h1>

          <p className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-slate-600 md:text-lg">
            Sistemas de aluminio y vidrio para obra y fachada. Perfil técnico orientado a ejecución,
            coordinación en sitio y cumplimiento de especificación.
          </p>

          {/* Datos rápidos tipo CV */}
          <div className="mt-8 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold text-slate-500">Ubicación</p>
              <p className="mt-1 text-sm font-semibold text-slate-900">
                {site.city}, {site.state}
              </p>
              <p className="mt-1 text-sm text-slate-600">Área metropolitana</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold text-slate-500">Enfoque</p>
              <p className="mt-1 text-sm font-semibold text-slate-900">Obra y fachada</p>
              <p className="mt-1 text-sm text-slate-600">
                Coordinación, alcances y ejecución
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold text-slate-500">Perfil</p>
              <p className="mt-1 text-sm font-semibold text-slate-900">B2B</p>
              <p className="mt-1 text-sm text-slate-600">
                Constructoras · Contratistas · Supervisión
              </p>
            </div>
          </div>

          <p className="mt-6 max-w-4xl text-xs text-slate-500">
            * La información y alcances se definen con base en planos, especificación y condiciones
            reales de obra.
          </p>
        </div>
      </section>

      {/* RESUMEN / PERFIL */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-18">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Perfil
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-600 md:text-base">
            CW Systems participa en proyectos donde la claridad técnica y el control de ejecución son
            críticos. El objetivo es sostener un proceso entendible: definir alcances, alinear
            especificación y coordinar la instalación con el programa de obra.
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

      {/* METODOLOGÍA */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-18">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Metodología de trabajo
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-600 md:text-base">
            Flujo práctico para avanzar con decisiones claras y trazabilidad durante la ejecución.
          </p>

          <ol className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              {
                step: "01",
                title: "Recepción de alcance",
                desc: "Planos, cantidades, ubicación, accesos, etapa y requerimientos.",
              },
              {
                step: "02",
                title: "Revisión técnica",
                desc: "Alineación a especificación, compatibilidades y condiciones de obra.",
              },
              {
                step: "03",
                title: "Propuesta de alcances",
                desc: "Supuestos, entregables y tiempos para evitar ambigüedad.",
              },
              {
                step: "04",
                title: "Coordinación y seguimiento",
                desc: "Comunicación continua durante ejecución para sostener el programa.",
              },
            ].map((x) => (
              <li key={x.step} className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-xs font-semibold text-slate-500">{x.step}</p>
                <p className="mt-2 text-sm font-semibold text-slate-900">{x.title}</p>
                <p className="mt-2 text-sm text-slate-600">{x.desc}</p>
              </li>
            ))}
          </ol>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-sm font-semibold text-slate-900">Criterio de proyecto</p>
            <p className="mt-2 text-sm text-slate-600">
              Priorizamos proyectos que requieren coordinación y control de ejecución. Para alcances
              menores tipo retail, se puede orientar el proceso, pero el enfoque principal del sitio
              es obra.
            </p>
          </div>
        </div>
      </section>

      {/* COBERTURA / TIPOS */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-18">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Cobertura y tipos de proyecto
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-600 md:text-base">
            Operación principal en {site.city} y {site.state}. Participación en proyectos residenciales,
            comerciales e industriales cuando el alcance requiere planeación y seguimiento.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { title: "Residencial (obra)", desc: "Proyectos habitacionales con alcances definidos." },
              { title: "Comercial", desc: "Aplicaciones con necesidades de operación y durabilidad." },
              { title: "Industrial", desc: "Requisitos técnicos y condiciones operativas específicas." },
            ].map((x) => (
              <div key={x.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-sm font-semibold text-slate-900">{x.title}</p>
                <p className="mt-2 text-sm text-slate-600">{x.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESPALDO (link institucional, no CTA) */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-18">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Respaldo
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-600 md:text-base">
            Colaboración con proveedores y soluciones compatibles con requerimientos de obra, cuidando
            disponibilidad y especificación según el proyecto.
          </p>

          <div className="mt-6 flex flex-col gap-2">
            <Link href="/respaldo" className="text-sm font-semibold text-slate-800 hover:text-slate-900">
              Ver respaldo de proveedores →
            </Link>
            <Link href="/servicios" className="text-sm font-semibold text-slate-800 hover:text-slate-900">
              Ver capacidades →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
