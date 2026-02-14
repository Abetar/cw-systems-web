// app/respaldo/RespaldoClient.tsx
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/config/site";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4">{children}</div>;
}

export default function RespaldoClient() {
  const reduceMotion = useReducedMotion();

  const baseInitial = { opacity: 0, y: reduceMotion ? 0 : 10 };
  const baseAnimate = { opacity: 1, y: 0 };
  const vp = { once: true, amount: 0.2 as const };

  return (
    <div className="bg-white">
      {/* HERO */}
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
              Respaldo de proveedores
            </motion.h1>

            <motion.p
              initial={baseInitial}
              animate={baseAnimate}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-slate-600 md:text-lg"
            >
              Colaboramos con proveedores del sector para asegurar compatibilidad con especificaciones,
              disponibilidad y consistencia en ejecución. La selección se define por alcance y criterios
              técnicos del proyecto.
            </motion.p>

            <motion.div
              initial={baseInitial}
              animate={baseAnimate}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              {/* CTA sobrio (institucional): outline primero */}
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                Enviar proyecto para revisión
              </Link>

              <Link
                href="/servicios"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Ver capacidades
              </Link>
            </motion.div>

            <motion.p
              initial={baseInitial}
              animate={baseAnimate}
              transition={{ duration: 0.55, delay: 0.24 }}
              className="mt-6 text-xs text-slate-500"
            >
              Nota: las marcas y logotipos son propiedad de sus respectivos dueños y se muestran como referencia.
            </motion.p>
          </div>
        </Container>
      </section>

      {/* CONTENT */}
      <section className="bg-white">
        <Container>
          <div className="py-14 md:py-18">
            {/* Mini bloque institucional (criterios) */}
            <motion.div
              initial={baseInitial}
              whileInView={baseAnimate}
              viewport={vp}
              transition={{ duration: 0.55 }}
              className="grid gap-4 md:grid-cols-3"
            >
              {[
                {
                  title: "Compatibilidad",
                  desc: "Sistemas y componentes alineados a especificación y criterios de proyecto.",
                },
                {
                  title: "Disponibilidad",
                  desc: "Planeación de suministro para sostener programa y frentes de trabajo.",
                },
                {
                  title: "Consistencia",
                  desc: "Calidades y alcances claros para reducir variabilidad y retrabajos en obra.",
                },
              ].map((x) => (
                <div
                  key={x.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <p className="text-sm font-semibold text-slate-900">{x.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{x.desc}</p>
                  <p className="mt-4 text-xs text-slate-500">
                    Criterio técnico · Seguimiento · Control
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Image “enmarcada” */}
            <motion.div
              initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white"
            >
              <div className="border-b border-slate-200 bg-slate-50 px-6 py-4">
                <p className="text-sm font-semibold text-slate-900">
                  Proveedores y marcas de referencia
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Selección según alcance, normativas aplicables y requerimientos de ejecución.
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
              * Los logotipos y marcas mostradas pertenecen a sus respectivos propietarios y se utilizan únicamente como referencia comercial.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
