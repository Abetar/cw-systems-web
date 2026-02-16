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
  const vp = { once: true, amount: 0.35 as const };

  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Imagen de fondo (edificio) */}
      <div className="absolute inset-0">
        <Image
          src="/hero.png"
          alt={`Edificios y proyectos en ${site.city}, ${site.state}`}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/75 to-slate-950/90" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
        {/* Bloque marca fuerte */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={baseInitial}
              whileInView={baseAnimate}
              viewport={vp}
              transition={{ duration: 0.55 }}
              className="flex items-center gap-4"
            >
              {/* ✅ Logo grande (CORREGIDO: llena el contenedor + recorte redondeado real) */}
              <div className="h-20 w-20 overflow-hidden rounded-2xl bg-white md:h-24 md:w-24">
                <img
                  src="/cws-logo.png"
                  alt={site.name}
                  className="h-full w-full object-contain p-3"
                />
              </div>

              <div>
                <p className="text-xs font-semibold tracking-[0.28em] text-white/60">
                  ALUMINIO · VIDRIO · OBRA
                </p>
                <h1 className="mt-2 text-balance text-4xl font-semibold tracking-tight text-white md:text-6xl">
                  {site.name}
                </h1>
                <p className="mt-2 text-sm text-white/70">
                  {site.city}, {site.state}
                </p>
              </div>
            </motion.div>

            {/* Copy neutral, no “venta” */}
            <motion.p
              initial={baseInitial}
              whileInView={baseAnimate}
              viewport={vp}
              transition={{ duration: 0.55, delay: 0.06 }}
              className="mt-8 max-w-2xl text-pretty text-base leading-relaxed text-white/75"
            >
              Soluciones en aluminio y vidrio para proyectos de obra y fachada.
              Enfoque técnico, coordinación en sitio y ejecución con criterios
              de calidad.
            </motion.p>

            {/* Navegación (no CTA a contacto) */}
            <motion.div
              initial={baseInitial}
              whileInView={baseAnimate}
              viewport={vp}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Link
                href="/empresa"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/10 hover:text-white"
              >
                Empresa
              </Link>
              <Link
                href="/servicios"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/10 hover:text-white"
              >
                Servicios
              </Link>
              <Link
                href="/galeria"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/10 hover:text-white"
              >
                Galería
              </Link>
              <Link
                href="/respaldo"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/10 hover:text-white"
              >
                Respaldo
              </Link>
            </motion.div>
          </div>

          {/* Panel tipo “CV” (datos rápidos) */}
          <div className="lg:col-span-5">
            <motion.div
              initial={baseInitial}
              whileInView={baseAnimate}
              viewport={vp}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white/80"
            >
              <p className="text-sm font-semibold text-white">Resumen</p>

              <div className="mt-4 grid gap-3 text-sm">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs font-semibold text-white/70">
                    Cobertura
                  </p>
                  <p className="mt-1 font-medium text-white">
                    {site.city} · Área Metropolitana · {site.state}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs font-semibold text-white/70">Enfoque</p>
                  <p className="mt-1 text-white/85">
                    Obra y fachada · Coordinación en sitio · Especificación
                    técnica
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs font-semibold text-white/70">
                    Contenido
                  </p>
                  <p className="mt-1 text-white/85">
                    Capacidades · Proyectos · Proveedores
                  </p>
                </div>
              </div>

              <p className="mt-5 text-xs text-white/50">
                Contacto disponible únicamente en el formulario de la sección
                Contacto.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
