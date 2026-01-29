// app/respaldo/RespaldoClient.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/config/site";

export default function RespaldoClient() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-18">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600"
          >
            Respaldo de proveedores • {site.city}, {site.state}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-5 text-balance text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl"
          >
            Respaldo de proveedores
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg"
          >
            Colaboramos con proveedores reconocidos del sector para asegurar calidad,
            disponibilidad y compatibilidad con las especificaciones de cada proyecto.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-7"
          >
            <Link
              href="/contacto"
              className="inline-flex rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Solicitar cotización
            </Link>
          </motion.div>
        </div>
      </section>

      {/* IMAGE */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-18">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
          >
            {/* Usa la imagen TAL CUAL la tienen */}
            <img
              src="/respaldo-proveedores.jpg"
              alt="Proveedores de aluminio y vidrio"
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
