// app/servicios/ServiciosClient.tsx
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  DraftingCompass,
  FileText,
  Layers,
  HardHat,
  ClipboardCheck,
  Boxes,
} from "lucide-react";
import { site } from "@/config/site";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4">{children}</div>;
}

const ENGINEERING_PROJECTS = [
  "SANTA MARÍA TORRE SUR (TORRE IBM)",
  "TORRE DE LA LOMA",
  "MICHELENA",
  "NATUZZI",
  "OFICINAS EN EL PARQUE FASE II",
  "PASEO SAN PEDRO",
  "URBANIA",
  "TORRE CÍVICA",
  "ACURA",
  "AQUA DEPARTAMENTOS",
  "AXTEL (CAMPUS)",
  "CONNEXITY",
  "CROWN PLAZA TORREON",
  "FORO PROCULTURA (CONVEX)",
  "PUENTES Y DOMO GALERÍAS MONTERREY",
  "HOSPITAL SAN JOSÉ",
  "HOTEL RIO DOUBLE TREE (HOLIDAY INN)",
  "MOTOMEX",
  "TORRE 208",
  "TORRE VERTICE",
  "GUADALQUIVIR 21",
  "ZAMBRANO",
  "HIDALGO 2405",
  "PLAZA GÓMEZ MORÍN III",
  "CAPILLAS MARIANAS (GAYOSO)",
  "COLEGIO INGLES",
  "ICON VALLARTA",
  "VALLARTA BAY",
  "PLAZA 401",
  "TORRE SPECTRUM",
  "MERKAFON",
];

const CAPABILITIES = [
  {
    title: "Ingeniería y especificación",
    desc: "Definición técnica basada en alcance, criterios del proyecto y condiciones reales de obra.",
    icon: DraftingCompass,
    bullets: ["Criterios técnicos", "Compatibilidades", "Soporte a especificación"],
  },
  {
    title: "Documentación / entregables",
    desc: "Documentación base para sostener ejecución con claridad y trazabilidad.",
    icon: FileText,
    bullets: ["Alcances definidos", "Notas y criterios", "Soporte a coordinación"],
  },
  {
    title: "Sistemas aluminio y vidrio",
    desc: "Aplicaciones para obra y fachada, según requerimiento, programa y volúmenes.",
    icon: Layers,
    bullets: ["Fachadas", "Cancelería", "Aplicaciones especiales"],
  },
  {
    title: "Ejecución y coordinación en obra",
    desc: "Planificación y coordinación en sitio para sostener programa y frentes de trabajo.",
    icon: HardHat,
    bullets: ["Coordinación en sitio", "Secuencias de instalación", "Control de frentes"],
  },
  {
    title: "Seguimiento y control",
    desc: "Comunicación continua y control de avances para reducir fricción y retrabajos.",
    icon: ClipboardCheck,
    bullets: ["Avances definidos", "Entregables claros", "Comunicación continua"],
  },
  {
    title: "Suministro / soporte a logística",
    desc: "Alineación de suministro conforme a programa, accesos y restricciones del proyecto.",
    icon: Boxes,
    bullets: ["Planeación de suministro", "Orden de frentes", "Criterios de recepción"],
  },
];

export default function ServiciosClient() {
  const reduceMotion = useReducedMotion();

  const baseInitial = { opacity: 0, y: reduceMotion ? 0 : 12 };
  const baseAnimate = { opacity: 1, y: 0 };
  const heroT = (delay = 0) => ({ duration: 0.55, delay });

  const vp = { once: true, amount: 0.2 as const };
  const inViewT = (delay = 0) => ({ duration: 0.55, delay });

  return (
    <div className="bg-white">
      {/* HERO (sin CTAs) */}
      <section className="border-b border-slate-200 bg-white">
        <Container>
          <div className="py-14 md:py-18">
            <motion.p
              initial={baseInitial}
              animate={baseAnimate}
              transition={heroT(0)}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600"
            >
              Capacidades • {site.city}, {site.state}
            </motion.p>

            <motion.h1
              initial={baseInitial}
              animate={baseAnimate}
              transition={heroT(0.06)}
              className="mt-5 text-balance text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl"
            >
              Capacidades técnicas
            </motion.h1>

            <motion.p
              initial={baseInitial}
              animate={baseAnimate}
              transition={heroT(0.12)}
              className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-slate-600 md:text-lg"
            >
              Perfil de ejecución y coordinación para proyectos de aluminio y vidrio en obra y fachada.
              El alcance y los entregables se definen por especificación, condiciones de sitio y programa.
            </motion.p>

            {/* Links discretos (opcionales, no CTA) */}
            <motion.div
              initial={baseInitial}
              animate={baseAnimate}
              transition={heroT(0.18)}
              className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6"
            >
              <Link
                href="/empresa"
                className="text-sm font-semibold text-slate-800 hover:text-slate-900"
              >
                Ver perfil de empresa →
              </Link>
              <Link
                href="/galeria"
                className="text-sm font-semibold text-slate-800 hover:text-slate-900"
              >
                Ver proyectos →
              </Link>
            </motion.div>

            <motion.p
              initial={baseInitial}
              animate={baseAnimate}
              transition={heroT(0.24)}
              className="mt-6 max-w-3xl text-xs text-slate-500"
            >
              Alcances definidos · Entregables · Coordinación en obra · Seguimiento y control
            </motion.p>
          </div>
        </Container>
      </section>

      {/* CAPABILITIES GRID (tipo CV, escaneable) */}
      <section className="bg-white">
        <Container>
          <div className="py-14 md:py-18">
            <motion.div
              initial={baseInitial}
              whileInView={baseAnimate}
              viewport={vp}
              transition={inViewT(0)}
              className="mb-10"
            >
              <p className="text-xs font-semibold tracking-[0.25em] text-slate-500">
                CAPABILITIES
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                Áreas de capacidad
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">
                Presentación institucional. El detalle técnico se comparte por solicitud con base en el
                proyecto específico.
              </p>
            </motion.div>

            <div className="grid gap-4 md:grid-cols-2">
              {CAPABILITIES.map((c, idx) => {
                const Icon = c.icon;
                return (
                  <motion.div
                    key={c.title}
                    initial={baseInitial}
                    whileInView={baseAnimate}
                    viewport={vp}
                    transition={inViewT(0.06 * idx)}
                    className="rounded-2xl border border-slate-200 bg-white p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50">
                        <Icon size={18} strokeWidth={1.8} className="text-slate-900" />
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-slate-900">{c.title}</p>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.desc}</p>

                        <ul className="mt-4 grid gap-2 text-sm text-slate-700">
                          {c.bullets.map((b) => (
                            <li key={b} className="flex gap-2">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>

                        <p className="mt-4 text-xs text-slate-500">
                          Proceso · Coordinación · Control
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* MÓDULO “PROYECTO EJECUTIVO” (más CV, menos venta) */}
      <section className="border-y border-slate-200 bg-slate-50">
        <Container>
          <div className="py-14 md:py-18">
            <motion.div
              initial={baseInitial}
              whileInView={baseAnimate}
              viewport={vp}
              transition={inViewT(0)}
              className="mb-8"
            >
              <p className="text-xs font-semibold tracking-[0.25em] text-slate-500">
                PROYECTO EJECUTIVO
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                Definición técnica y documentación base
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">
                Preparación y definición técnica para sostener ejecución: criterios, alcances y
                documentación de referencia.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-12 md:items-start">
              {/* Image */}
              <motion.div
                initial={baseInitial}
                whileInView={baseAnimate}
                viewport={vp}
                transition={inViewT(0.06)}
                className="md:col-span-5"
              >
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                  <img
                    src="/services/fachada.jpg"
                    alt="Proyecto ejecutivo de fachada"
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="mt-2 text-xs text-slate-500">
                  * Imagen de referencia. Ideal: foto real de fachada/instalación.
                </p>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={baseInitial}
                whileInView={baseAnimate}
                viewport={vp}
                transition={inViewT(0.12)}
                className="space-y-4 md:col-span-7"
              >
                <div className="rounded-2xl border border-slate-200 bg-white p-6">
                  <p className="text-sm font-semibold text-slate-900">Revisión y definición</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Revisión del alcance y definición de criterios conforme a proyecto. Se establecen
                    sistemas, espesores, herrajes y anclajes cuando aplica, para reflejarse en
                    documentación y planos de referencia.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-6">
                  <p className="text-sm font-semibold text-slate-900">Catálogo de conceptos</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Integración de catálogo descriptivo para documentar especificaciones y alcances.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <p className="text-sm font-semibold text-slate-900">Nota</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Los entregables finales dependen del alcance, especificación y condiciones del
                    sitio.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* EJECUCIÓN (sin CTA) */}
      <section className="bg-white">
        <Container>
          <div className="py-14 md:py-18">
            <div className="grid gap-6 md:grid-cols-12 md:items-center">
              {/* Content (left) */}
              <motion.div
                initial={baseInitial}
                whileInView={baseAnimate}
                viewport={vp}
                transition={inViewT(0)}
                className="md:col-span-7"
              >
                <p className="text-xs font-semibold tracking-[0.25em] text-slate-500">
                  EJECUCIÓN
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                  Fabricación e instalación (coordinación en obra)
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">
                  Coordinación con el equipo de obra para sostener programa, frentes de trabajo y
                  entregables. El objetivo es mantener control operativo y reducir retrabajos.
                </p>

                <ul className="mt-6 grid gap-2 text-sm text-slate-700">
                  {[
                    "Planeación de accesos y frentes",
                    "Coordinación en sitio (secuencias de instalación)",
                    "Seguimiento de avances y comunicación",
                  ].map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Image (right) */}
              <motion.div
                initial={baseInitial}
                whileInView={baseAnimate}
                viewport={vp}
                transition={inViewT(0.06)}
                className="md:col-span-5"
              >
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                  <img
                    src="/services/ejecucion.jpg"
                    alt="Ejecución y fabricación"
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="mt-2 text-xs text-slate-500">
                  * Ideal: foto real de instalación/obra con aluminio/vidrio.
                </p>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* EXPERIENCIA SELECCIONADA (lista de proyectos) */}
      <section className="border-t border-slate-200 bg-slate-50">
        <Container>
          <div className="py-14 md:py-18">
            <motion.div
              initial={baseInitial}
              whileInView={baseAnimate}
              viewport={vp}
              transition={inViewT(0)}
              className="mb-8"
            >
              <p className="text-xs font-semibold tracking-[0.25em] text-slate-500">
                EXPERIENCIA
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                Experiencia seleccionada (proyectos)
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">
                Lista referencial. La información detallada se comparte por solicitud conforme a
                confidencialidad y alcance.
              </p>
            </motion.div>

            <motion.div
              initial={baseInitial}
              whileInView={baseAnimate}
              viewport={vp}
              transition={inViewT(0.06)}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <ul className="grid gap-x-8 gap-y-2 text-sm text-slate-700 md:grid-cols-3">
                {ENGINEERING_PROJECTS.map((name) => (
                  <li key={name} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" />
                    <span>{name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Link discreto a contacto (si el cliente sí quiere que exista navegación) */}
            <div className="mt-6">
              <Link
                href="/contacto"
                className="text-sm font-semibold text-slate-800 hover:text-slate-900"
              >
                Solicitar información / contacto →
              </Link>
              <p className="mt-2 text-xs text-slate-500">
                * La propuesta se arma con base en alcance, planos y condiciones reales del sitio.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
