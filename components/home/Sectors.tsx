// components/home/Sectors.tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/config/site";

const SECTORS = [
  { title: "Constructoras", desc: "Suministro y soporte para obra y proyectos en desarrollo." },
  { title: "Contratistas", desc: "Material y soluciones según especificación y tiempos." },
  { title: "Residencial", desc: "Proyectos habitacionales con claridad y funcionalidad." },
  { title: "Comercial", desc: "Soluciones para espacios con requerimientos de durabilidad." },
  { title: "Industrial", desc: "Proyectos con estándares y necesidades operativas específicas." },
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
              Para quién trabajamos
            </h2>
            <p className="max-w-3xl text-pretty text-slate-600">
              En {site.city} y {site.state}, atendemos proyectos con necesidades reales de obra.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid gap-4 md:grid-cols-3">
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
                <p className="mt-2 text-sm text-slate-600">{x.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
