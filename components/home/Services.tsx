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
              Servicios en aluminio y vidrio para obra
            </h2>
            <p className="max-w-3xl text-pretty text-slate-600">
              Para constructoras y contratistas que necesitan claridad, tiempos y seguimiento.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid gap-4 md:grid-cols-2">
            {SERVICES.map((s, idx) => (
              <motion.div
                key={s.title}
                initial={baseInitial}
                whileInView={baseAnimate}
                viewport={vp}
                transition={{ duration: 0.55, delay: 0.06 * idx }}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <p className="text-sm font-semibold text-slate-900">{s.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={baseInitial}
            whileInView={baseAnimate}
            viewport={vp}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <Link
              href="/servicios"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              Ver todos los servicios
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
