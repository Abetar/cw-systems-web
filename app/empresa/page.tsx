// app/empresa/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: site.pages.empresa.title,
  description: site.pages.empresa.description,
  alternates: { canonical: "/empresa" },
};

export default function EmpresaPage() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-18">
          <p className="inline-flex rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600">
            Empresa • {site.city}, {site.state}
          </p>

          <h1 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            CW Systems
          </h1>

          <p className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-slate-600 md:text-lg">
            Soluciones en aluminio y vidrio para proyectos de obra, con enfoque técnico,
            claridad y seguimiento.
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
            CW Systems es una empresa con más de 25 años de experiencia en el sector del
            aluminio y vidrio, participando en proyectos residenciales, comerciales,
            corporativos y hoteleros a lo largo de la República Mexicana.
          </p>

          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-600 md:text-base">
            Nuestro trabajo se centra en entender cada proyecto desde su etapa técnica,
            proponiendo soluciones viables, compatibles con especificaciones y alineadas a
            los objetivos de cada obra.
          </p>
        </div>
      </section>

      {/* CÓMO TRABAJAMOS */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-18">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Cómo trabajamos
          </h2>

          <ul className="mt-6 grid gap-4 md:grid-cols-2 text-sm text-slate-700">
            <li>• Análisis técnico del proyecto y sus requerimientos</li>
            <li>• Definición de sistemas adecuados en aluminio y vidrio</li>
            <li>• Integración con proveedores y especificaciones</li>
            <li>• Coordinación y seguimiento durante la ejecución</li>
          </ul>

          <p className="mt-6 max-w-4xl text-sm leading-relaxed text-slate-600">
            Buscamos reducir fricción, retrabajos y decisiones improvisadas durante el
            desarrollo de la obra.
          </p>
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-18">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Experiencia y respaldo
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-600 md:text-base">
            A lo largo de los años hemos colaborado en proyectos de gran escala,
            integrando sistemas de fachada, cancelería, panel de aluminio y soluciones
            especiales, trabajando con proveedores reconocidos a nivel nacional e
            internacional.
          </p>

          <div className="mt-8">
            <Link
              href="/respaldo"
              className="inline-flex rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              Ver respaldo de proveedores
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-18">
          <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">
            ¿Tienes un proyecto en puerta?
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-slate-600">
            Podemos ayudarte a evaluar opciones y avanzar con claridad desde la etapa
            técnica.
          </p>

          <div className="mt-6">
            <Link
              href="/contacto"
              className="inline-flex rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Solicitar cotización
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
