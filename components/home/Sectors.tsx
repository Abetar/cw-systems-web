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
  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
  };
  const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

  return (
    <section className="border-y border-slate-200 bg-slate-50">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 md:py-18">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="space-y-10"
        >
          <motion.div variants={fadeUp} className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Para quién trabajamos
            </h2>
            <p className="max-w-3xl text-pretty text-slate-600">
              En {site.city} y {site.state}, atendemos proyectos con necesidades reales de obra.
            </p>
          </motion.div>

          <motion.div variants={stagger} className="grid gap-4 md:grid-cols-3">
            {SECTORS.map((x) => (
              <motion.div
                key={x.title}
                variants={fadeUp}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <p className="text-sm font-semibold text-slate-900">{x.title}</p>
                <p className="mt-2 text-sm text-slate-600">{x.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
