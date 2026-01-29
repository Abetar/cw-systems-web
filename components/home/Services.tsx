// components/home/Services.tsx
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const SERVICES = [
  {
    title: "Sistemas de aluminio",
    desc: "Soluciones para obra y proyecto: suministro para requerimientos de construcción.",
  },
  {
    title: "Vidrio para construcción",
    desc: "Opciones para proyectos residenciales, comerciales e industriales con enfoque en calidad.",
  },
  {
    title: "Proyectos a la medida",
    desc: "Soporte para especificación, volúmenes y necesidades de constructoras y contratistas.",
  },
  {
    title: "Atención y seguimiento",
    desc: "Comunicación clara y acompañamiento para evitar fricción durante la obra.",
  },
];

export default function Services() {
  const reduceMotion = useReducedMotion();
  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
  };
  const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

  return (
    <section className="bg-white">
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
              Servicios en aluminio y vidrio para obra
            </h2>
            <p className="max-w-3xl text-pretty text-slate-600">
              Para constructoras y contratistas que necesitan claridad, tiempos y seguimiento.
            </p>
          </motion.div>

          <motion.div variants={stagger} className="grid gap-4 md:grid-cols-2">
            {SERVICES.map((s) => (
              <motion.div
                key={s.title}
                variants={fadeUp}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <p className="text-sm font-semibold text-slate-900">{s.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp}>
            <Link
              href="/servicios"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              Ver todos los servicios
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
