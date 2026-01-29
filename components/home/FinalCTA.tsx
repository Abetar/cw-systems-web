// components/home/FinalCta.tsx
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/config/site";

export default function FinalCta() {
  const reduceMotion = useReducedMotion();
  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="bg-slate-900">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 md:py-18">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-5"
        >
          <motion.h2
            variants={fadeUp}
            className="text-balance text-2xl font-semibold tracking-tight text-white md:text-3xl"
          >
            ¿Necesitas cotizar aluminio o vidrio para tu proyecto?
          </motion.h2>
          <motion.p variants={fadeUp} className="max-w-3xl text-pretty text-slate-200">
            Atención a constructoras y contratistas en {site.city} y {site.state}. Cuéntanos lo
            esencial y te respondemos con claridad.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Ir a contacto
            </Link>
            <Link
              href="/servicios"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-transparent px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Ver servicios
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
