// app/galeria/[slug]/GaleriaDetalleClient.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/config/site";

type Props = {
  title: string;
  location?: string;
  hero: string;
  secondary?: string[];
  bullets?: string[];
};

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4">{children}</div>;
}

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function GaleriaDetalleClient(props: Props) {
  const reduceMotion = useReducedMotion();

  const images = useMemo(() => {
    const list = [props.hero, ...(props.secondary ?? [])].filter(Boolean);
    return Array.from(new Set(list));
  }, [props.hero, props.secondary]);

  const [active, setActive] = useState(images[0] ?? "");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setActive(images[0] ?? "");
    setOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.title]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (images.length > 1 && e.key === "ArrowRight") {
        const i = images.indexOf(active);
        const next = images[(i + 1) % images.length];
        if (next) setActive(next);
      }
      if (images.length > 1 && e.key === "ArrowLeft") {
        const i = images.indexOf(active);
        const prev = images[(i - 1 + images.length) % images.length];
        if (prev) setActive(prev);
      }
    };

    document.addEventListener("keydown", onKeyDown);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, active, images]);

  const baseInitial = { opacity: 0, y: reduceMotion ? 0 : 10 };
  const baseAnimate = { opacity: 1, y: 0 };
  const vp = { once: true, amount: 0.2 as const };

  const hasBullets = (props.bullets?.length ?? 0) > 0;

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="border-b border-slate-200 bg-white">
        <Container>
          <div className="py-8">
            <Link
              href="/galeria"
              className="text-sm font-semibold text-slate-700 hover:text-slate-900"
            >
              ← Regresar a galería
            </Link>

            <h1 className="mt-4 text-balance text-2xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              {props.title}
            </h1>

            <p className="mt-2 text-sm text-slate-600">
              {props.location ? props.location : `${site.city}, ${site.state}`}
            </p>

            <p className="mt-3 max-w-3xl text-xs text-slate-500">
              * Información referencial. Alcances sujetos a especificación del proyecto.
            </p>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section>
        <Container>
          <div className="py-10 md:py-14">
            <div className="grid gap-6 lg:grid-cols-12">
              {/* Media */}
              <div className="lg:col-span-8">
                <motion.button
                  type="button"
                  initial={baseInitial}
                  whileInView={baseAnimate}
                  viewport={vp}
                  transition={{ duration: 0.55 }}
                  onClick={() => setOpen(true)}
                  className="group relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 text-left focus:outline-none focus:ring-2 focus:ring-slate-900/20"
                  aria-label="Abrir imagen en pantalla completa"
                >
                  <img src={active} alt={props.title} className="h-full w-full object-cover" />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-black/0 opacity-0 transition group-hover:opacity-100" />
                  <div className="pointer-events-none absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs font-semibold text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
                    Click para ampliar
                  </div>
                </motion.button>

                {images.length > 1 ? (
                  <motion.div
                    initial={baseInitial}
                    whileInView={baseAnimate}
                    viewport={vp}
                    transition={{ duration: 0.55, delay: 0.06 }}
                    className="mt-4 flex gap-3 overflow-x-auto pb-2"
                  >
                    {images.map((src) => {
                      const selected = src === active;
                      return (
                        <button
                          key={src}
                          type="button"
                          onClick={() => setActive(src)}
                          className={cx(
                            "h-16 w-28 shrink-0 overflow-hidden rounded-xl border bg-slate-100",
                            "focus:outline-none focus:ring-2 focus:ring-slate-900/20",
                            selected ? "border-slate-900" : "border-slate-200 hover:border-slate-300"
                          )}
                          aria-label="Cambiar imagen"
                          aria-pressed={selected}
                        >
                          <img
                            src={src}
                            alt={`${props.title} miniatura`}
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                        </button>
                      );
                    })}
                  </motion.div>
                ) : null}
              </div>

              {/* Aside institucional (sin CTA) */}
              <aside className="lg:col-span-4">
                <motion.div
                  initial={baseInitial}
                  whileInView={baseAnimate}
                  viewport={vp}
                  transition={{ duration: 0.55, delay: 0.04 }}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <p className="text-sm font-semibold text-slate-900">Ficha del proyecto</p>

                  {hasBullets ? (
                    <ul className="mt-4 grid gap-2 text-sm text-slate-700">
                      {props.bullets!.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-3 text-sm text-slate-600">
                      Material referencial. El detalle técnico se comparte por solicitud.
                    </p>
                  )}

                  

                  <p className="mt-4 text-xs text-slate-500">
                    Referencias · Coordinación · Entregables
                  </p>
                </motion.div>

                <motion.div
                  initial={baseInitial}
                  whileInView={baseAnimate}
                  viewport={vp}
                  transition={{ duration: 0.55, delay: 0.1 }}
                  className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-6"
                >
                  <p className="text-sm font-semibold text-slate-900">Cobertura</p>
                  <p className="mt-2 text-sm text-slate-600">
                    {site.city} y {site.state}. Proyectos de obra y fachada en aluminio y vidrio.
                  </p>

                  <div className="mt-4 flex flex-col gap-3">
                    <Link
                      href="/servicios"
                      className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                    >
                      Ver capacidades
                    </Link>
                    <Link
                      href="/respaldo"
                      className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                    >
                      Ver respaldo
                    </Link>
                  </div>
                </motion.div>
              </aside>
            </div>
          </div>
        </Container>
      </section>

      {/* Modal */}
      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Vista ampliada"
          className="fixed inset-0 z-[60]"
        >
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          {/* content */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="relative w-full max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl">
              <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-white">{props.title}</p>
                  <p className="truncate text-xs text-white/60">
                    ESC para cerrar{images.length > 1 ? " · ← → para navegar" : ""}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
                >
                  Cerrar
                </button>
              </div>

              <div className="relative">
                <img src={active} alt={props.title} className="max-h-[78vh] w-full object-contain" />

                {images.length > 1 ? (
                  <>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        const i = images.indexOf(active);
                        const prev = images[(i - 1 + images.length) % images.length];
                        if (prev) setActive(prev);
                      }}
                      className="absolute left-3 top-1/2 -translate-y-1/2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
                      aria-label="Anterior"
                    >
                      ←
                    </button>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        const i = images.indexOf(active);
                        const next = images[(i + 1) % images.length];
                        if (next) setActive(next);
                      }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
                      aria-label="Siguiente"
                    >
                      →
                    </button>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
