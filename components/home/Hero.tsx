// components/home/Hero.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/config/site";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const baseInitial = { opacity: 0, y: reduceMotion ? 0 : 12 };
  const baseAnimate = { opacity: 1, y: 0 };
  const vp = { once: true, amount: 0.3 as const };

  return (
    <section className="relative overflow-hidden bg-slate-900">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/hero.png"
          alt={`Sistemas de aluminio y vidrio para obra en ${site.city}, ${site.state}`}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
        {/* Overlay más institucional */}
        <div className="absolute inset-0 bg-slate-900/80" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
        {/* Ubicación */}
        <motion.div
          initial={baseInitial}
          whileInView={baseAnimate}
          viewport={vp}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80"
        >
          <span className="h-2 w-2 rounded-full bg-white/70" />
          {site.city}, Área Metropolitana, {site.state}
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-12">
          {/* Texto principal */}
          <div className="lg:col-span-7">
            <motion.h1
              initial={baseInitial}
              whileInView={baseAnimate}
              viewport={vp}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl"
            >
              Sistemas de aluminio y vidrio para obra en {site.city}, {site.state}
            </motion.h1>

            <motion.p
              initial={baseInitial}
              whileInView={baseAnimate}
              viewport={vp}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/75"
            >
              Enfoque B2B para constructoras y contratistas: coordinación en obra, alcances definidos y
              ejecución con criterios de calidad, seguridad y cumplimiento.
            </motion.p>

            {/* CTA institucional (único primario) */}
            <motion.div
              initial={baseInitial}
              whileInView={baseAnimate}
              viewport={vp}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Enviar proyecto
              </Link>

              {/* Secundario como link (menos “ventas”) */}
              <Link
                href="/galeria"
                className="inline-flex items-center justify-center text-sm font-semibold text-white/80 transition hover:text-white"
              >
                Ver proyectos →
              </Link>
            </motion.div>
          </div>

          {/* Tarjeta lateral (sin CTA duplicado) */}
          <div className="lg:col-span-5">
            <motion.div
              initial={baseInitial}
              whileInView={baseAnimate}
              viewport={vp}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80"
            >
              <p className="text-sm font-semibold text-white">Revisión de proyecto</p>

              <p className="mt-3 text-sm leading-relaxed">
                Para una evaluación técnica adecuada, comparte el alcance y la información clave del
                proyecto.
              </p>

              <ul className="mt-4 space-y-2 text-sm">
                <li>• Tipo de sistema y aplicación</li>
                <li>• Ubicación y etapa de obra</li>
                <li>• Fechas objetivo y condiciones de acceso</li>
                <li>• Planos o alcance (link externo)</li>
              </ul>

              <div className="mt-5">
                <Link
                  href="/contacto"
                  className="text-sm font-semibold text-white/80 transition hover:text-white"
                >
                  Ir a contacto →
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Línea institucional inferior */}
        <motion.p
          initial={baseInitial}
          whileInView={baseAnimate}
          viewport={vp}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-12 max-w-4xl text-xs text-white/50"
        >
          {site.name} opera en {site.city}, {site.state}, con cobertura en el área metropolitana y
          proyectos de obra y fachada en aluminio y vidrio.
        </motion.p>
      </div>
    </section>
  );
}
