// app/contacto/ContactoClient.tsx
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/config/site";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4">{children}</div>;
}

function buildWhatsAppLink(phone: string, text: string) {
  const digits = phone.replace(/[^\d]/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
}

function toTel(phone: string) {
  // "T. 52 (81) 1234-2318" -> "+528112342318"
  const digits = phone.replace(/[^\d]/g, "");
  return digits.startsWith("52") ? `+${digits}` : `+52${digits}`;
}

export default function ContactoClient() {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 12 },
    show: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: "easeOut", delay },
    }),
  };

  // 🔽 Datos "tal cual" del sitio actual
  // (puedes moverlos luego a site.ts si quieres)
  const CONTACT = {
    email: "info@cwsystems.com.mx",
    phoneDisplay: "T. 52 (81) 1234-2318",
    phoneTel: toTel("52 (81) 1234-2318"),
    addressLines: [
      "Calle Federico Gómez No. 1712, Col. Buenos Aires C.P. 64800",
      "Monterrey, N.L. México",
    ],
  };

  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    telefono: "",
    email: "",
    ciudad: site.city,
    mensaje: "",
  });

  const whatsappTo = site.contact.whatsapp?.trim(); // opcional si lo configuras
  const emailTo = CONTACT.email;

  const whatsappPrefill = useMemo(() => {
    return `Hola, soy ${form.nombre || "[Nombre]"}${form.empresa ? ` de ${form.empresa}` : ""}.
Busco cotizar aluminio/vidrio para un proyecto en ${form.ciudad || site.city}.
Detalles: ${form.mensaje || "[Describe tu proyecto]"}`;
  }, [form]);

  function onChange<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function submitMailto(e: React.FormEvent) {
    e.preventDefault();

    if (!form.nombre.trim() || !form.telefono.trim() || !form.mensaje.trim()) {
      alert("Completa al menos: Nombre, Teléfono y Mensaje.");
      return;
    }

    const subject = `Cotización - ${site.name} (${form.ciudad || site.city})`;
    const body = [
      `Nombre: ${form.nombre}`,
      `Empresa: ${form.empresa || "-"}`,
      `Teléfono: ${form.telefono}`,
      `Email: ${form.email || "-"}`,
      `Ciudad: ${form.ciudad || "-"}`,
      "",
      "Mensaje:",
      form.mensaje,
    ].join("\n");

    window.location.href = `mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="border-b border-slate-200 bg-white">
        <Container>
          <motion.div initial="hidden" animate="show" className="py-14 md:py-18">
            <motion.p
              variants={fadeUp}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600"
            >
              Contacto • {site.city}, {site.state}
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="mt-5 text-balance text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl"
            >
              Contacto y cotización
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-4 max-w-3xl text-pretty text-slate-600 md:text-lg">
              Envíanos los detalles del proyecto y te respondemos con claridad.
              Atención a constructoras y contratistas en {site.city}, {site.state}.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* CONTENT */}
      <section className="bg-white">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-6 py-14 md:grid-cols-2 md:py-18"
          >
            {/* Form */}
            <motion.div variants={fadeUp} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-base font-semibold text-slate-900">Solicita una cotización</h2>
              <p className="mt-1 text-sm text-slate-600">Campos mínimos: Nombre, Teléfono y Mensaje.</p>

              <form onSubmit={submitMailto} className="mt-6 grid gap-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-xs font-semibold text-slate-700">Nombre *</label>
                    <input
                      value={form.nombre}
                      onChange={(e) => onChange("nombre", e.target.value)}
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-slate-200 focus:ring-2"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-700">Empresa</label>
                    <input
                      value={form.empresa}
                      onChange={(e) => onChange("empresa", e.target.value)}
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-slate-200 focus:ring-2"
                      placeholder="Constructora / Contratista"
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-xs font-semibold text-slate-700">Teléfono *</label>
                    <input
                      value={form.telefono}
                      onChange={(e) => onChange("telefono", e.target.value)}
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-slate-200 focus:ring-2"
                      placeholder="Ej. 81 1234 5678"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-700">Correo</label>
                    <input
                      value={form.email}
                      onChange={(e) => onChange("email", e.target.value)}
                      type="email"
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-slate-200 focus:ring-2"
                      placeholder="tu@empresa.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700">Ciudad</label>
                  <input
                    value={form.ciudad}
                    onChange={(e) => onChange("ciudad", e.target.value)}
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-slate-200 focus:ring-2"
                    placeholder="Monterrey"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700">Mensaje *</label>
                  <textarea
                    value={form.mensaje}
                    onChange={(e) => onChange("mensaje", e.target.value)}
                    className="mt-2 min-h-[120px] w-full resize-y rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-slate-200 focus:ring-2"
                    placeholder="Tipo de obra, qué necesitas (aluminio/vidrio), ubicación, fechas, etc."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Enviar por correo
                </button>

                {whatsappTo ? (
                  <a
                    href={buildWhatsAppLink(whatsappTo, whatsappPrefill)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                  >
                    Enviar por WhatsApp
                  </a>
                ) : null}
              </form>
            </motion.div>

            {/* Contacto directo (lo que ellos ya tenían) */}
            <motion.aside variants={fadeUp} className="space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-sm font-semibold text-slate-900">Contacto directo</h3>

                <div className="mt-4 space-y-3 text-sm text-slate-700">
                  <div>
                    <p className="text-xs font-semibold text-slate-600">Correo</p>
                    <a
                      className="notranslate font-medium text-slate-900 hover:underline"
                      href={`mailto:${CONTACT.email}`}
                    >
                      {CONTACT.email}
                    </a>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-slate-600">Teléfono</p>
                    <a
                      className="notranslate font-medium text-slate-900 hover:underline"
                      href={`tel:${CONTACT.phoneTel}`}
                    >
                      {CONTACT.phoneDisplay}
                    </a>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-slate-600">Dirección</p>
                    <p className="notranslate font-medium text-slate-900">
                      {CONTACT.addressLines[0]}
                      <br />
                      {CONTACT.addressLines[1]}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3">
                  <Link
                    href="/respaldo"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                  >
                    Ver respaldo
                  </Link>

                  <Link
                    href="/servicios"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                  >
                    Ver servicios
                  </Link>
                </div>

                <p className="mt-4 text-xs text-slate-500">
                  * Si prefieres, también puedes escribirnos por correo con los detalles del proyecto.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-sm font-semibold text-slate-900">Qué incluir para cotizar rápido</h3>
                <ul className="mt-3 grid gap-2 text-sm text-slate-700">
                  {[
                    "Tipo de obra (residencial / comercial / industrial)",
                    "Ubicación (Monterrey / Área Metropolitana / N.L.)",
                    "Qué necesitas (aluminio / vidrio)",
                    "Fechas o urgencia",
                  ].map((x) => (
                    <li key={x} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.aside>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
