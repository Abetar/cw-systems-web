// components/home/FinalCTA.tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/config/site";
import { Building2, MapPin, Layers, ShieldCheck } from "lucide-react";

const HIGHLIGHTS = [
  {
    title: "Alcance",
    icon: Layers,
    bullets: ["Aluminio y vidrio", "Obra y fachada", "Ejecución y soporte técnico"],
  },
  {
    title: "Cobertura",
    icon: MapPin,
    bullets: [site.city, "Área Metropolitana", site.state],
  },
  {
    title: "Tipo de proyecto",
    icon: Building2,
    bullets: ["Industrial", "Comercial", "Residencial (obra)"],
  },
  {
    title: "Criterios",
    icon: ShieldCheck,
    bullets: ["Compatibilidad técnica", "Coordinación en obra", "Entregables definidos"],
  },
];

export default function FinalCta() {
  const reduceMotion = useReducedMotion();

  const baseInitial = { opacity: 0, y: reduceMotion ? 0 : 12 };
  const baseAnimate = { opacity: 1, y: 0 };
  const vp = { once: true, amount: 0.25 as const };

  return (
    <section className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto w-full max-w-6xl px-4 py-20">
        <motion.div
          initial={baseInitial}
          whileInView={baseAnimate}
          viewport={vp}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs font-semibold tracking-[0.28em] text-slate-500">
            PERFIL INSTITUCIONAL
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            {site.name}
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-600">
            Proveedor y ejecutor de soluciones en aluminio y vidrio para proyectos de obra y fachada.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {HIGHLIGHTS.map((x, idx) => {
            const Icon = x.icon;
            return (
              <motion.div
                key={x.title}
                initial={baseInitial}
                whileInView={baseAnimate}
                viewport={vp}
                transition={{ duration: 0.6, delay: 0.08 * idx }}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl border border-slate-200 bg-slate-50">
                    <Icon size={34} strokeWidth={1.5} className="text-slate-900" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{x.title}</h3>
                </div>

                <ul className="space-y-2 text-sm text-slate-600">
                  {x.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
