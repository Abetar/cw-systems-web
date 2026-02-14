// components/home/Process.tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ClipboardList,
  DraftingCompass,
  Layers,
  ShieldCheck,
} from "lucide-react";

const PROCESS = [
  {
    title: "Levantamiento del alcance",
    icon: ClipboardList,
    bullets: [
      "Ubicación y etapa de obra",
      "Requerimientos y restricciones",
      "Tiempos objetivo",
    ],
  },
  {
    title: "Revisión técnica",
    icon: DraftingCompass,
    bullets: [
      "Especificación y compatibilidad",
      "Selección de sistemas",
      "Definición de entregables",
    ],
  },
  {
    title: "Planeación y coordinación",
    icon: Layers,
    bullets: [
      "Secuencia de trabajo",
      "Coordinación con obra",
      "Control de interfaces",
    ],
  },
  {
    title: "Seguimiento y trazabilidad",
    icon: ShieldCheck,
    bullets: [
      "Avances y acuerdos",
      "Registro de cambios",
      "Cierre por entregables",
    ],
  },
];

export default function Process() {
  const reduceMotion = useReducedMotion();

  const baseInitial = { opacity: 0, y: reduceMotion ? 0 : 12 };
  const baseAnimate = { opacity: 1, y: 0 };
  const vp = { once: true, amount: 0.2 as const };

  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-20">
        {/* Intro (CV-style) */}
        <motion.div
          initial={baseInitial}
          whileInView={baseAnimate}
          viewport={vp}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Metodología de trabajo
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-600">
            Proceso estructurado para ejecución en obra y fachada: claridad técnica,
            coordinación y seguimiento.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {PROCESS.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={baseInitial}
                whileInView={baseAnimate}
                viewport={vp}
                transition={{ duration: 0.6, delay: 0.08 * idx }}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-xl"
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl border border-slate-200 bg-slate-50">
                    <Icon size={34} strokeWidth={1.5} className="text-slate-900" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                </div>

                <ul className="space-y-2 text-sm text-slate-600">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
