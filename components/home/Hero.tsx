// components/home/Hero.tsx
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/config/site";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 14 },
    show: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay },
    }),
  };

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  };

  return (
    <section className="relative overflow-hidden border-b border-slate-200">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/hero.png)" }}
        />
        {/* Overlay MÁS claro en el lado derecho para que el texto resalte */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/65 to-slate-950/35" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_100%)]" />
      </div>

      {/* Content (clave: min-h + align center + padding por header sticky) */}
      <div className="relative">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 md:py-24">
          <div className="min-h-[62vh] md:min-h-[70vh] flex items-center">
            <motion.div
              initial="hidden"
              animate="show"
              variants={stagger}
              className="max-w-3xl"
            >
              <motion.p
                variants={fadeUp}
                className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur"
              >
                {site.city}, {site.state} • Atención a constructoras y contratistas
              </motion.p>

              <motion.h1
                variants={fadeUp}
                className="mt-5 text-balance text-4xl font-semibold tracking-tight text-white md:text-6xl"
              >
                Aluminio y vidrio para constructoras en Monterrey y Nuevo León
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-white/85 md:text-lg"
              >
                Suministro confiable, comunicación clara y seguimiento para que tu obra avance sin
                complicaciones.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
                >
                  Solicitar cotización
                </Link>

                <Link
                  href="/servicios"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-transparent px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Ver servicios
                </Link>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-10 grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur md:grid-cols-4"
              >
                {[
                  ["Enfoque", "B2B / Obra"],
                  ["Clientes", "Constructoras"],
                  ["Cobertura", site.serviceArea.join(", ")],
                  ["Prioridad", "Seguimiento"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <p className="text-xs text-white/70">{k}</p>
                    <p className="mt-1 text-sm font-semibold text-white">{v}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
