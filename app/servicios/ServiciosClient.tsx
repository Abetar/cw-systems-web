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
              {site.city}, {site.state} • Servicios
            </motion.p>

            <motion.h1
              initial={baseInitial}
              animate={baseAnimate}
              transition={heroT(0.06)}
              className="mt-5 text-balance text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl"
            >
              Servicios para proyectos de fachada, ejecución e ingenierías
            </motion.h1>

            <motion.p
              initial={baseInitial}
              animate={baseAnimate}
              transition={heroT(0.12)}
              className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-slate-600 md:text-lg"
            >
              Estructuramos soluciones con enfoque técnico y seguimiento para que constructoras y
              contratistas avancen con claridad.
            </motion.p>

            <motion.div
              initial={baseInitial}
              animate={baseAnimate}
              transition={heroT(0.18)}
              className="mt-7 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Solicitar cotización
              </Link>
              <Link
                href="/galeria"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                Ver galería
              </Link>
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
                Planeación, cálculo y catálogo de conceptos
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">
                Análisis y definición del proyecto con base en normativas, criterios de calidad y
                especificaciones técnicas para sistemas de aluminio y vidrio.
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
                  <h3 className="text-sm font-semibold text-slate-900">Planeación y cálculo</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Revisión del proyecto y planteamiento de soluciones conforme a normas. Se
                    determinan calidades, espesores, sistemas, herrajes, anclajes y, cuando aplica,
                    soportes de sujeción. Todo queda reflejado en memoria de cálculo y planos,
                    conservando la conceptualización del proyectista y especificando los sistemas
                    propuestos dentro de parámetros de economía y estética.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <h3 className="text-sm font-semibold text-slate-900">Catálogo de conceptos</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Se integra un catálogo descriptivo donde se documentan especificaciones y
                    alcances de los sistemas propuestos, agregando claridad técnica y valor al
                    proyecto.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contacto"
                    className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    Cotizar proyecto ejecutivo
                  </Link>
                  <Link
                    href="/respaldo"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
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
                  Calidad en fabricación e instalación
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">
                  La experiencia acumulada nos ha llevado a alcanzar altos estándares de calidad
                  gracias a un equipo especializado en fabricación e instalación, la integración de
                  proveedores y la implementación de materiales óptimos de última generación.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contacto"
                    className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    Cotizar ejecución
                  </Link>
                  <Link
                    href="/galeria"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                  >
                    Ver proyectos
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

      {/* INGENIERÍAS */}
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
              <p className="text-xs font-semibold tracking-[0.25em] text-slate-500">INGENIERÍAS</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                Proyectos y referencias
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">
                Una muestra de proyectos donde se han desarrollado ingenierías y soluciones para
                fachada y sistemas relacionados.
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
                    ¿Quieres una cotización con base en tu proyecto?
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Compártenos ubicación, tipo de obra y lo que necesitas (aluminio/vidrio).
                  </p>
                </div>
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Ir a contacto
                </Link>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
}
