// app/servicios/ServiciosClient.tsx
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
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

export default function ServiciosClient() {
  const reduceMotion = useReducedMotion();

  const baseInitial = { opacity: 0, y: reduceMotion ? 0 : 12 };
  const baseAnimate = { opacity: 1, y: 0 };
  const heroT = (delay = 0) => ({ duration: 0.55, delay });

  const vp = { once: true, amount: 0.2 as const };
  const inViewT = (delay = 0) => ({ duration: 0.55, delay });

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="border-b border-slate-200 bg-white">
        <Container>
          <div className="py-14 md:py-18">
            <motion.p
              initial={baseInitial}
              animate={baseAnimate}
              transition={heroT(0)}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600"
            >
              {site.city}, {site.state} • Capacidades
            </motion.p>

            <motion.h1
              initial={baseInitial}
              animate={baseAnimate}
              transition={heroT(0.06)}
              className="mt-5 text-balance text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl"
            >
              Capacidades para proyectos de aluminio y vidrio en obra
            </motion.h1>

            <motion.p
              initial={baseInitial}
              animate={baseAnimate}
              transition={heroT(0.12)}
              className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-slate-600 md:text-lg"
            >
              Enfoque técnico e institucional para constructoras y contratistas: revisión de alcance,
              definición de criterios, coordinación en sitio y seguimiento para ejecutar con claridad.
            </motion.p>

            {/* CTA sobrio: outline primero, negro solo como secundario */}
            <motion.div
              initial={baseInitial}
              animate={baseAnimate}
              transition={heroT(0.18)}
              className="mt-7 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                Enviar proyecto para revisión
              </Link>

              <Link
                href="/galeria"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Ver proyectos
              </Link>
            </motion.div>

            {/* Microline institucional */}
            <motion.p
              initial={baseInitial}
              animate={baseAnimate}
              transition={heroT(0.24)}
              className="mt-6 max-w-3xl text-xs text-slate-500"
            >
              Alcances definidos · Entregables claros · Coordinación en obra · Seguimiento y control
            </motion.p>
          </div>
        </Container>
      </section>

      {/* BLOQUE “CÓMO ENTREGAMOS” (institucional, tipo capacidades) */}
      <section className="bg-white">
        <Container>
          <div className="py-12 md:py-14">
            <motion.div
              initial={baseInitial}
              whileInView={baseAnimate}
              viewport={vp}
              transition={inViewT(0)}
              className="grid gap-4 md:grid-cols-3"
            >
              {[
                {
                  title: "Alcance y criterios",
                  desc: "Alineación de especificación, condiciones de obra, accesos y restricciones relevantes.",
                },
                {
                  title: "Entregables",
                  desc: "Documentación, criterios y definición técnica para sostener ejecución sin improvisación.",
                },
                {
                  title: "Seguimiento",
                  desc: "Coordinación con el equipo de obra para mantener control de avances y comunicación.",
                },
              ].map((x) => (
                <div
                  key={x.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <p className="text-sm font-semibold text-slate-900">{x.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{x.desc}</p>
                  <p className="mt-4 text-xs text-slate-500">Proceso · Coordinación · Cumplimiento</p>
                </div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* PROYECTO EJECUTIVO DE FACHADA */}
      <section className="bg-white">
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
                PROYECTO EJECUTIVO DE FACHADA
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                Planeación, definición técnica y catálogo de conceptos
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">
                Definición del proyecto con base en especificación y criterios técnicos para sistemas
                de aluminio y vidrio, orientado a coordinación y ejecución en obra.
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
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                  <img
                    src="/services/fachada.jpg"
                    alt="Proyecto ejecutivo de fachada"
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="mt-2 text-xs text-slate-500">
                  *Imagen de referencia. Ideal: foto real de fachada/instalación.
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
                  <h3 className="text-sm font-semibold text-slate-900">Revisión y definición</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Revisión del alcance y planteamiento de soluciones conforme a criterios del proyecto.
                    Se definen sistemas, espesores, herrajes, anclajes y detalles de sujeción cuando aplica,
                    para reflejarse en documentación técnica y planos de referencia.
                  </p>
                  <p className="mt-4 text-xs text-slate-500">
                    Entregables: criterios, documentación técnica y soporte de coordinación.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <h3 className="text-sm font-semibold text-slate-900">Catálogo de conceptos</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Integración de catálogo descriptivo para documentar especificaciones y alcances,
                    agregando claridad técnica al proyecto.
                  </p>
                </div>

                {/* CTA: una sola vez y sobrio */}
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contacto"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                  >
                    Enviar proyecto para revisión
                  </Link>
                  <Link
                    href="/respaldo"
                    className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    Ver respaldo
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* EJECUCIÓN */}
      <section className="border-y border-slate-200 bg-slate-50">
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
                <p className="text-xs font-semibold tracking-[0.25em] text-slate-500">EJECUCIÓN</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                  Fabricación e instalación con coordinación en obra
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">
                  Coordinación con el equipo de obra y seguimiento para mantener claridad en alcances,
                  avances y entregables. El objetivo es reducir retrabajos y fricción durante la instalación.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/galeria"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                  >
                    Ver proyectos
                  </Link>
                  <Link
                    href="/contacto"
                    className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    Enviar proyecto
                  </Link>
                </div>
              </motion.div>

              {/* Image (right) */}
              <motion.div
                initial={baseInitial}
                whileInView={baseAnimate}
                viewport={vp}
                transition={inViewT(0.06)}
                className="md:col-span-5"
              >
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                  <img
                    src="/services/ejecucion.jpg"
                    alt="Ejecución y fabricación"
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="mt-2 text-xs text-slate-500">
                  *Ideal: foto real de instalación/obra con aluminio/vidrio.
                </p>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* REFERENCIAS */}
      <section className="bg-white">
        <Container>
          <div className="py-14 md:py-18">
            <motion.div
              initial={baseInitial}
              whileInView={baseAnimate}
              viewport={vp}
              transition={inViewT(0)}
              className="mb-8"
            >
              <p className="text-xs font-semibold tracking-[0.25em] text-slate-500">REFERENCIAS</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                Selección de proyectos
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">
                Referencias de participación en proyectos con necesidades de fachada, cancelería y sistemas
                relacionados. La información detallada se comparte por solicitud.
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

            {/* CTA final: sobrio, con jerarquía correcta */}
            <motion.div
              initial={baseInitial}
              whileInView={baseAnimate}
              viewport={vp}
              transition={inViewT(0.12)}
              className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    ¿Necesitas revisar alcance y condiciones de obra?
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Comparte ubicación, etapa y requerimientos para revisión técnica y propuesta de alcances.
                  </p>
                </div>
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                >
                  Enviar proyecto
                </Link>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
}
