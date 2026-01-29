// components/home/Process.tsx
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const PROCESS = [
  {
    step: "01",
    title: "Comparte tu proyecto",
    desc: "Ubicación, tipo de obra y necesidades.",
  },
  {
    step: "02",
    title: "Revisión y cotización",
    desc: "Alineamos especificación y tiempos.",
  },
  {
    step: "03",
    title: "Suministro y seguimiento",
    desc: "Entrega y comunicación continua.",
  },
];

export default function Process() {
  const reduceMotion = useReducedMotion();
  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
  };
  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  };

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
              Un proceso simple para cotizar rápido
            </h2>
            <p className="max-w-3xl text-pretty text-slate-600">
              Menos vueltas. Más claridad. Flujo pensado para avanzar sin perder
              tiempo.
            </p>
          </motion.div>

          <motion.div variants={stagger} className="grid gap-4 md:grid-cols-3">
            {PROCESS.map((p) => (
              <motion.div
                key={p.step}
                variants={fadeUp}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-xs font-semibold text-slate-500">{p.step}</p>
                <p className="mt-2 text-sm font-semibold text-slate-900">
                  {p.title}
                </p>
                <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp}>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Iniciar cotización
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
