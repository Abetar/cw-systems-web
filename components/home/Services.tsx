"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  DraftingCompass,
  HardHat,
  Building2,
  ClipboardCheck,
} from "lucide-react";
import { site } from "@/config/site";

const SERVICES = [
  {
    title: "Ingeniería y especificación",
    subtitle: "Definición técnica y documentación base",
    bullets: ["Criterios técnicos", "Compatibilidad en obra", "Documentación base"],
    icon: DraftingCompass,
  },
  {
    title: "Suministro y ejecución",
    subtitle: "Planeación, coordinación e instalación",
    bullets: ["Planeación en sitio", "Coordinación en obra", "Instalación controlada"],
    icon: HardHat,
  },
  {
    title: "Sistemas aluminio y vidrio",
    subtitle: "Aplicaciones para obra y fachada",
    bullets: ["Fachadas", "Cancelería", "Aplicaciones especiales"],
    icon: Building2,
  },
  {
    title: "Seguimiento y control",
    subtitle: "Avances, entregables y comunicación",
    bullets: ["Avances definidos", "Entregables claros", "Comunicación continua"],
    icon: ClipboardCheck,
  },
];

export default function Services() {
  const reduceMotion = useReducedMotion();

  const baseInitial = { opacity: 0, y: reduceMotion ? 0 : 12 };
  const baseAnimate = { opacity: 1, y: 0 };
  const vp = { once: true, amount: 0.2 as const };

  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 md:py-20">
        {/* Título (CV style) */}
        <motion.div
          initial={baseInitial}
          whileInView={baseAnimate}
          viewport={vp}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-14"
        >
          <p className="text-xs font-semibold tracking-[0.28em] text-slate-500">
            PERFIL DE CAPACIDADES
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Capacidades
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-600">
            Perfil institucional enfocado en proyectos de obra y fachada en {site.city}, {site.state}.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {SERVICES.map((s, idx) => {
            const Icon = s.icon;

            return (
              <motion.div
                key={s.title}
                initial={baseInitial}
                whileInView={baseAnimate}
                viewport={vp}
                transition={{ duration: 0.6, delay: 0.08 * idx }}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:shadow-md"
              >
                {/* Icon badge */}
                <div className="mb-5 inline-flex rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <Icon size={44} strokeWidth={1.5} className="text-slate-900" />
                </div>

                <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.subtitle}</p>

                <ul className="mt-5 space-y-2 text-sm text-slate-700">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* línea de cierre sobria */}
                <p className="mt-6 text-xs text-slate-500">
                  Alcance sujeto a especificación y condiciones de obra.
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
