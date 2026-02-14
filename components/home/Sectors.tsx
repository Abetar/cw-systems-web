// components/home/Sectors.tsx
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/config/site";

const SECTORS = [
  {
    title: "Industrial",
    desc: "Proyectos con requisitos técnicos, condiciones operativas y entregables definidos.",
  },
  {
    title: "Comercial",
    desc: "Soluciones para espacios con necesidades de operación, durabilidad y mantenimiento.",
  },
  {
    title: "Constructoras",
    desc: "Soporte en especificación, alcances y coordinación para ejecución en obra.",
  },
  {
    title: "Contratistas",
    desc: "Alineación a programa de obra, requerimientos técnicos y seguimiento en sitio.",
  },
  {
    title: "Residencial (obra)",
    desc: "Aplicación en proyectos habitacionales cuando el alcance y el programa lo requieren.",
  },
];

export default function Sectors() {
  const reduceMotion = useReducedMotion();

  const baseInitial = { opacity: 0, y: reduceMotion ? 0 : 12 };
  const baseAnimate = { opacity: 1, y: 0 };
  const vp = { once: true, amount: 0.2 as const };

  return (
    <section className="border-y border-slate-200 bg-slate-50">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 md:py-18">
        <div className="space-y-10">
          {/* Intro */}
          <motion.div
            initial={baseInitial}
            whileInView={baseAnimate}
            viewport={vp}
            transition={{ duration: 0.55 }}
            className="space-y-3"
          >
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Sectores y tipo de proyectos
            </h2>
            <p className="max-w-3xl text-pretty text-slate-600">
              En {site.city} y {site.state}, colaboramos con equipos que requieren coordinación en obra,
              alcances definidos y cumplimiento técnico.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {SECTORS.map((x, idx) => (
              <motion.div
                key={x.title}
                initial={baseInitial}
                whileInView={baseAnimate}
                viewport={vp}
                transition={{ duration: 0.55, delay: 0.06 * idx }}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <p className="text-sm font-semibold text-slate-900">{x.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{x.desc}</p>

                {idx < 2 ? (
                  <p className="mt-4 text-xs text-slate-500">
                    Coordinación · Cumplimiento · Entregables
                  </p>
                ) : null}
              </motion.div>
            ))}
          </div>

          {/* CTA (discreto, institucional) */}
          <motion.div
            initial={baseInitial}
            whileInView={baseAnimate}
            viewport={vp}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link
              href="/galeria"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Ver proyectos
            </Link>

            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              Enviar proyecto
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
