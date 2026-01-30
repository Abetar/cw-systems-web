// components/home/Services.tsx
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/config/site";

const SERVICES = [
  {
    title: "Ingeniería y especificación",
    desc: "Apoyo en definición de sistema, criterios técnicos y compatibilidades para obra y fachada.",
  },
  {
    title: "Suministro y ejecución en obra",
    desc: "Planeación de suministro, coordinación en sitio e instalación con enfoque en cumplimiento y calidad.",
  },
  {
    title: "Sistemas de aluminio y vidrio",
    desc: "Soluciones para proyectos residenciales, comerciales e industriales según alcance, volúmenes y programa.",
  },
  {
    title: "Seguimiento y control",
    desc: "Comunicación clara, avances y entregables definidos para reducir fricción con contratistas y residentes.",
  },
];

export default function Services() {
  const reduceMotion = useReducedMotion();

  const baseInitial = { opacity: 0, y: reduceMotion ? 0 : 12 };
  const baseAnimate = { opacity: 1, y: 0 };
  const vp = { once: true, amount: 0.2 as const };

  const city = site.city;
  const state = site.state;

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
              Capacidades para proyectos de aluminio y vidrio
            </h2>
            <p className="max-w-3xl text-pretty text-slate-600">
              Enfoque institucional para obra y fachada en {city}, {state}: definición técnica,
              ejecución coordinada y seguimiento para constructoras y contratistas.
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

                {/* Microline institucional para “seriedad” */}
                <p className="mt-4 text-xs text-slate-500">
                  Alcances definidos · Coordinación en obra · Entregables claros
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={baseInitial}
            whileInView={baseAnimate}
            viewport={vp}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link
              href="/servicios"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              Ver capacidades y servicios
            </Link>

            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Enviar proyecto
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
