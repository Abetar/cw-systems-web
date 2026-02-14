// components/home/Process.tsx
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const PROCESS = [
  { step: "01", title: "Levantamiento del alcance", desc: "Ubicación, tipo de obra, requerimientos y tiempos objetivo." },
  { step: "02", title: "Revisión técnica", desc: "Especificación, selección de sistemas y definición de entregables." },
  { step: "03", title: "Propuesta y seguimiento", desc: "Alcances claros, coordinación y trazabilidad durante ejecución." },
];

export default function Process() {
  const reduceMotion = useReducedMotion();

  const baseInitial = { opacity: 0, y: reduceMotion ? 0 : 12 };
  const baseAnimate = { opacity: 1, y: 0 };
  const vp = { once: true, amount: 0.2 as const };

  return (
    <section className="bg-white">
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
              Metodología de trabajo
            </h2>
            <p className="max-w-3xl text-pretty text-slate-600">
              Estructura de coordinación para obra y fachada: revisión técnica, alcances definidos y seguimiento.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid gap-4 md:grid-cols-3">
            {PROCESS.map((p, idx) => (
              <motion.div
                key={p.step}
                initial={baseInitial}
                whileInView={baseAnimate}
                viewport={vp}
                transition={{ duration: 0.55, delay: 0.06 * idx }}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-xs font-semibold text-slate-500">{p.step}</p>
                <p className="mt-2 text-sm font-semibold text-slate-900">{p.title}</p>
                <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
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
              href="/contacto"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              Enviar proyecto
            </Link>

            <Link
              href="/respaldo"
              className="inline-flex items-center justify-center text-sm font-semibold text-slate-700 transition hover:text-slate-900"
            >
              Ver respaldo →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
