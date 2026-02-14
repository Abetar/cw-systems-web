// components/home/FinalCTA.tsx
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/config/site";

export default function FinalCta() {
  const reduceMotion = useReducedMotion();

  const baseInitial = { opacity: 0, y: reduceMotion ? 0 : 10 };
  const baseAnimate = { opacity: 1, y: 0 };
  const vp = { once: true, amount: 0.3 as const };

  return (
    <section className="bg-slate-900">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 md:py-18">
        <div className="space-y-5">
          <motion.h2
            initial={baseInitial}
            whileInView={baseAnimate}
            viewport={vp}
            transition={{ duration: 0.55 }}
            className="text-balance text-2xl font-semibold tracking-tight text-white md:text-3xl"
          >
            ¿Tienes un proyecto en obra o en planeación?
          </motion.h2>

          <motion.p
            initial={baseInitial}
            whileInView={baseAnimate}
            viewport={vp}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="max-w-3xl text-pretty text-slate-200"
          >
            Colaboramos con constructoras y contratistas en {site.city} y {site.state}. Comparte lo
            esencial para revisión técnica y definición de alcances.
          </motion.p>

          <motion.div
            initial={baseInitial}
            whileInView={baseAnimate}
            viewport={vp}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Enviar proyecto
            </Link>

            <Link
              href="/servicios"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-transparent px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Ver capacidades
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
