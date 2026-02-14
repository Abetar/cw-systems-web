"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Factory,
  Store,
  Building,
  Wrench,
  Home,
} from "lucide-react";
import { site } from "@/config/site";

const SECTORS = [
  {
    title: "Industrial",
    subtitle: "Entornos operativos y especificación técnica",
    bullets: ["Requisitos técnicos", "Condiciones operativas", "Entregables definidos"],
    icon: Factory,
  },
  {
    title: "Comercial",
    subtitle: "Durabilidad y operación en uso continuo",
    bullets: ["Operación y mantenimiento", "Durabilidad", "Compatibilidad de sistemas"],
    icon: Store,
  },
  {
    title: "Constructoras",
    subtitle: "Alineación con programa y proceso de obra",
    bullets: ["Especificación y alcances", "Coordinación en sitio", "Ejecución controlada"],
    icon: Building,
  },
  {
    title: "Contratistas",
    subtitle: "Ejecución, supervisión y seguimiento en obra",
    bullets: ["Alineación a programa", "Requerimientos técnicos", "Seguimiento en sitio"],
    icon: Wrench,
  },
  {
    title: "Residencial (obra)",
    subtitle: "Aplicación habitacional por alcance y programa",
    bullets: ["Alcance definido", "Programa de obra", "Condiciones de sitio"],
    icon: Home,
  },
];

export default function Sectors() {
  const reduceMotion = useReducedMotion();

  const baseInitial = { opacity: 0, y: reduceMotion ? 0 : 12 };
  const baseAnimate = { opacity: 1, y: 0 };
  const vp = { once: true, amount: 0.2 as const };

  return (
    <section className="border-y border-slate-200 bg-slate-50">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 md:py-20">
        {/* Header CV */}
        <motion.div
          initial={baseInitial}
          whileInView={baseAnimate}
          viewport={vp}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-14"
        >
          <p className="text-xs font-semibold tracking-[0.28em] text-slate-500">
            ÁREAS DE EXPERIENCIA
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Sectores y tipo de proyectos
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-slate-600">
            En {site.city} y {site.state}, participamos en proyectos con enfoque en coordinación de obra,
            criterios técnicos y ejecución controlada.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SECTORS.map((x, idx) => {
            const Icon = x.icon;

            return (
              <motion.div
                key={x.title}
                initial={baseInitial}
                whileInView={baseAnimate}
                viewport={vp}
                transition={{ duration: 0.6, delay: 0.08 * idx }}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:shadow-md"
              >
                <div className="mb-5 inline-flex rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <Icon size={44} strokeWidth={1.5} className="text-slate-900" />
                </div>

                <h3 className="text-lg font-semibold text-slate-900">{x.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{x.subtitle}</p>

                <ul className="mt-5 space-y-2 text-sm text-slate-700">
                  {x.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-xs text-slate-500">
                  Participación según alcance y especificación del proyecto.
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
