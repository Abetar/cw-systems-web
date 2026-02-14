// app/respaldo/RespaldoClient.tsx
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Boxes, PackageCheck, ShieldCheck } from "lucide-react";
import { site } from "@/config/site";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4">{children}</div>;
}

const CRITERIA = [
  {
    title: "Compatibilidad",
    desc: "Sistemas y componentes alineados a especificación y criterios del proyecto.",
    icon: Boxes,
  },
  {
    title: "Disponibilidad",
    desc: "Planeación de suministro para sostener programa y frentes de trabajo.",
    icon: PackageCheck,
  },
  {
    title: "Consistencia",
    desc: "Calidades y alcances claros para reducir variabilidad y retrabajos en obra.",
    icon: ShieldCheck,
  },
];

export default function RespaldoClient() {
  const reduceMotion = useReducedMotion();

  const baseInitial = { opacity: 0, y: reduceMotion ? 0 : 10 };
  const baseAnimate = { opacity: 1, y: 0 };
  const vp = { once: true, amount: 0.2 as const };

  return (
    <div className="bg-white">
      {/* HERO (sin CTAs) */}
      <section className="border-b border-slate-200 bg-white">
        <Container>
          <div className="py-14 md:py-18">
            <motion.p
              initial={baseInitial}
              animate={baseAnimate}
              transition={{ duration: 0.55 }}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600"
            >
              Respaldo • {site.city}, {site.state}
            </motion.p>

            <motion.h1
              initial={baseInitial}
              animate={baseAnimate}
              transition={{ duration: 0.55, delay: 0.06 }}
              className="mt-5 text-balance text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl"
            >
              Proveedores y marcas de referencia
            </motion.h1>

            <motion.p
              initial={baseInitial}
              animate={baseAnimate}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-slate-600 md:text-lg"
            >
              Colaboración con proveedores del sector para sostener especificación, disponibilidad y
              consistencia en ejecución. La selección se define por alcance y criterios técnicos del
              proyecto.
            </motion.p>

            {/* Nota legal */}
            <motion.p
              initial={baseInitial}
              animate={baseAnimate}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-6 text-xs text-slate-500"
            >
              Nota: las marcas y logotipos son propiedad de sus respectivos dueños y se muestran como
              referencia.
            </motion.p>

            {/* Links discretos (no CTA) */}
            <motion.div
              initial={baseInitial}
              animate={baseAnimate}
              transition={{ duration: 0.55, delay: 0.22 }}
              className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6"
            >
              <Link
                href="/empresa"
                className="text-sm font-semibold text-slate-800 hover:text-slate-900"
              >
                Ver perfil de empresa →
              </Link>
              <Link
                href="/servicios"
                className="text-sm font-semibold text-slate-800 hover:text-slate-900"
              >
                Ver capacidades →
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* CONTENT */}
      <section className="bg-white">
        <Container>
          <div className="py-14 md:py-18">
            {/* Criterios (sobrio, con icono pequeño) */}
            <motion.div
              initial={baseInitial}
              whileInView={baseAnimate}
              viewport={vp}
              transition={{ duration: 0.55 }}
              className="mb-10"
            >
              <p className="text-xs font-semibold tracking-[0.25em] text-slate-500">
                CRITERIOS
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                Criterios de selección
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">
                El objetivo es evitar variabilidad en sitio: compatibilidad, suministro y control.
              </p>
            </motion.div>

            <div className="grid gap-4 md:grid-cols-3">
              {CRITERIA.map((x, idx) => {
                const Icon = x.icon;
                return (
                  <motion.div
                    key={x.title}
                    initial={baseInitial}
                    whileInView={baseAnimate}
                    viewport={vp}
                    transition={{ duration: 0.55, delay: 0.06 * idx }}
                    className="rounded-2xl border border-slate-200 bg-white p-6"
                  >
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50">
                      <Icon size={18} strokeWidth={1.8} className="text-slate-900" />
                    </div>

                    <p className="text-sm font-semibold text-slate-900">{x.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{x.desc}</p>

                    <p className="mt-4 text-xs text-slate-500">
                      Criterio técnico · Seguimiento · Control
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Lámina / evidencia */}
            <motion.div
              initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.06 }}
              className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white"
            >
              <div className="border-b border-slate-200 bg-slate-50 px-6 py-4">
                <p className="text-sm font-semibold text-slate-900">
                  Marcas de referencia
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Evidencia visual de relación / referencia comercial (según alcance y requerimientos).
                </p>
              </div>

              <div className="p-4 md:p-6">
                <img
                  src="/respaldo-proveedores.jpg"
                  alt="Proveedores y marcas de referencia en aluminio y vidrio"
                  className="w-full object-contain"
                />
              </div>
            </motion.div>

            <p className="mt-4 text-xs text-slate-500">
              * Los logotipos y marcas mostradas pertenecen a sus respectivos propietarios y se utilizan
              únicamente como referencia comercial.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
