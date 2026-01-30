// app/respaldo/RespaldoClient.tsx
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/config/site";

export default function RespaldoClient() {
  const reduceMotion = useReducedMotion();

  const baseInitial = { opacity: 0, y: reduceMotion ? 0 : 10 };
  const baseAnimate = { opacity: 1, y: 0 };

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-18">
          <motion.p
            initial={baseInitial}
            animate={baseAnimate}
            transition={{ duration: 0.55 }}
            className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600"
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
            criterios de calidad y necesidades de ejecución en obra.
          </motion.p>

          <motion.div
            initial={baseInitial}
            animate={baseAnimate}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Enviar proyecto
            </Link>

            <Link
              href="/servicios"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
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
      </section>

      {/* IMAGE */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-18">
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
          >
            {/* Usa la imagen tal cual */}
            <img
              src="/respaldo-proveedores.jpg"
              alt="Proveedores y marcas de referencia en aluminio y vidrio"
              className="w-full object-contain"
            />
          </motion.div>

          <p className="mt-4 text-xs text-slate-500">
            * Los logotipos y marcas mostradas pertenecen a sus respectivos propietarios y se utilizan
            únicamente como referencia comercial.
          </p>
        </div>
      </section>
    </div>
  );
}
