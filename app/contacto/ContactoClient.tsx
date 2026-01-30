// app/contacto/ContactoClient.tsx
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/config/site";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4">{children}</div>;
}

function clean(v?: string) {
  return typeof v === "string" ? v.trim() : "";
}

function buildWhatsAppLink(phone: string, text: string) {
  const digits = phone.replace(/[^\d]/g, "");
  if (!digits) return "#";
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
}

function toTelHref(phone?: string) {
  const p = clean(phone);
  if (!p) return null;
  const digits = p.replace(/[^\d]/g, "");
  if (!digits) return null;
  return `tel:+${digits.startsWith("52") ? digits : `52${digits}`}`;
}

function toMailtoHref(email?: string) {
  const e = clean(email);
  if (!e) return null;
  return `mailto:${e}`;
}

export default function ContactoClient() {
  const reduceMotion = useReducedMotion();

  const anim = (delay = 0) => ({
    initial: { opacity: 0, y: reduceMotion ? 0 : 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay },
  });

  // Fuente de verdad: site.ts
  // Si el cliente aún no te pasa datos reales, usamos fallbacks seguros.
  const contactEmail = clean(site.contact?.email) || "info@cwsystems.com.mx";
  const contactPhone = clean(site.contact?.phone); // opcional
  const contactWhatsApp = clean(site.contact?.whatsapp); // opcional

  const telHref = toTelHref(contactPhone);
  const mailHref = toMailtoHref(contactEmail);

  const addressLines = [
    site.address?.street,
    site.address?.neighborhood,
    `${site.address?.city || site.city}, ${site.address?.state || site.state}`,
    site.address?.zip ? `C.P. ${site.address.zip}` : "",
    site.address?.country ? `${site.address.country}` : "",
  ]
    .map((x) => clean(x))
    .filter(Boolean);

  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    telefono: "",
    email: "",
    ubicacionProyecto: `${site.city}, ${site.state}`,
    tipoProyecto: "Obra / Fachada",
    etapaProyecto: "En planeación",
    linkPlanos: "",
    mensaje: "",
  });

  const whatsappPrefill = useMemo(() => {
    const name = form.nombre || "[Nombre]";
    const company = form.empresa ? ` de ${form.empresa}` : "";
    const location = form.ubicacionProyecto || `${site.city}, ${site.state}`;

    return `Hola, soy ${name}${company}.
Quiero enviar un proyecto para revisión.

Ubicación del proyecto: ${location}
Tipo: ${form.tipoProyecto}
Etapa: ${form.etapaProyecto}
Teléfono: ${form.telefono || "-"}
Correo: ${form.email || "-"}

Alcance / mensaje:
${form.mensaje || "[Describe el alcance]"}

Planos / información (link):
${form.linkPlanos || "-"}`;
  }, [form]);

  function onChange<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function submitMailto(e: React.FormEvent) {
    e.preventDefault();

    // Requisitos mínimos: institucional pero práctico
    if (!form.nombre.trim() || !form.telefono.trim() || !form.mensaje.trim()) {
      alert("Completa al menos: Nombre, Teléfono y Alcance / Mensaje.");
      return;
    }

    const subject = `Revisión de proyecto - ${site.name} (${site.city}, ${site.state})`;

    const body = [
      "Datos de contacto",
      `Nombre: ${form.nombre}`,
      `Empresa: ${form.empresa || "-"}`,
      `Teléfono: ${form.telefono}`,
      `Correo: ${form.email || "-"}`,
      "",
      "Datos del proyecto",
      `Ubicación: ${form.ubicacionProyecto || "-"}`,
      `Tipo: ${form.tipoProyecto || "-"}`,
      `Etapa: ${form.etapaProyecto || "-"}`,
      `Link de planos / alcance: ${form.linkPlanos || "-"}`,
      "",
      "Alcance / Mensaje",
      form.mensaje,
    ].join("\n");

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="border-b border-slate-200 bg-white">
        <Container>
          <div className="py-14 md:py-18">
            <motion.p
              {...anim(0)}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600"
            >
              Enviar proyecto • {site.city}, {site.state}
            </motion.p>

            <motion.h1
              {...anim(0.05)}
              className="mt-5 text-balance text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl"
            >
              Enviar proyecto para revisión
            </motion.h1>

            <motion.p
              {...anim(0.1)}
              className="mt-4 max-w-3xl text-pretty text-slate-600 md:text-lg"
            >
              Comparte el alcance y la información clave. Revisamos especificaciones y condiciones
              para avanzar con una propuesta clara y coordinada con tu equipo.
            </motion.p>
          </div>
        </Container>
      </section>

      {/* CONTENT */}
      <section className="bg-white">
        <Container>
          <div className="grid gap-6 py-14 md:grid-cols-2 md:py-18">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-base font-semibold text-slate-900">Formulario de proyecto</h2>
              <p className="mt-1 text-sm text-slate-600">
                Campos mínimos: Nombre, Teléfono y Alcance / Mensaje.
              </p>

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
                  <label className="text-xs font-semibold text-slate-700">
                    Ubicación del proyecto
                  </label>
                  <input
                    value={form.ubicacionProyecto}
                    onChange={(e) => onChange("ubicacionProyecto", e.target.value)}
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-slate-200 focus:ring-2"
                    placeholder={`${site.city}, ${site.state}`}
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-xs font-semibold text-slate-700">Tipo</label>
                    <select
                      value={form.tipoProyecto}
                      onChange={(e) => onChange("tipoProyecto", e.target.value)}
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-slate-200 focus:ring-2"
                    >
                      <option>Obra / Fachada</option>
                      <option>Residencial</option>
                      <option>Comercial</option>
                      <option>Industrial</option>
                      <option>Otro</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700">Etapa</label>
                    <select
                      value={form.etapaProyecto}
                      onChange={(e) => onChange("etapaProyecto", e.target.value)}
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-slate-200 focus:ring-2"
                    >
                      <option>En planeación</option>
                      <option>En ejecución</option>
                      <option>Por iniciar</option>
                      <option>Licitación</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700">
                    Planos / alcance (link)
                  </label>
                  <input
                    value={form.linkPlanos}
                    onChange={(e) => onChange("linkPlanos", e.target.value)}
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-slate-200 focus:ring-2"
                    placeholder="Drive / WeTransfer / Dropbox (opcional)"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700">Alcance / Mensaje *</label>
                  <textarea
                    value={form.mensaje}
                    onChange={(e) => onChange("mensaje", e.target.value)}
                    className="mt-2 min-h-[140px] w-full resize-y rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-slate-200 focus:ring-2"
                    placeholder="Describe el alcance: sistemas requeridos, cantidades aproximadas, ubicación, condiciones de acceso, fechas objetivo y cualquier restricción relevante."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Enviar por correo
                </button>

                {contactWhatsApp ? (
                  <a
                    href={buildWhatsAppLink(contactWhatsApp, whatsappPrefill)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                  >
                    Enviar por WhatsApp
                  </a>
                ) : null}

                <p className="text-xs text-slate-500">
                  * Este formulario abre tu app de correo (mailto). Si prefieres, envía la misma
                  información directamente al correo de contacto.
                </p>
              </form>
            </motion.div>

            {/* Contacto directo */}
            <motion.aside
              initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="space-y-4"
            >
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-sm font-semibold text-slate-900">Contacto directo</h3>

                <div className="mt-4 space-y-3 text-sm text-slate-700">
                  <div>
                    <p className="text-xs font-semibold text-slate-600">Correo</p>
                    <a
                      className="notranslate font-medium text-slate-900 hover:underline"
                      href={mailHref || `mailto:${contactEmail}`}
                    >
                      {contactEmail}
                    </a>
                  </div>

                  {contactPhone ? (
                    <div>
                      <p className="text-xs font-semibold text-slate-600">Teléfono</p>
                      {telHref ? (
                        <a
                          className="notranslate font-medium text-slate-900 hover:underline"
                          href={telHref}
                        >
                          {contactPhone}
                        </a>
                      ) : (
                        <p className="notranslate font-medium text-slate-900">{contactPhone}</p>
                      )}
                    </div>
                  ) : null}

                  {addressLines.length ? (
                    <div>
                      <p className="text-xs font-semibold text-slate-600">Ubicación</p>
                      <p className="notranslate font-medium text-slate-900">
                        {addressLines.map((line) => (
                          <span key={line}>
                            {line}
                            <br />
                          </span>
                        ))}
                      </p>
                    </div>
                  ) : null}
                </div>

                <div className="mt-6 flex flex-col gap-3">
                  <Link
                    href="/galeria"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                  >
                    Ver proyectos
                  </Link>

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

                <p className="mt-4 text-xs text-slate-500">
                  Consejo: mientras más claro el alcance (planos, cantidades, accesos, fechas), más
                  útil será la propuesta.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-sm font-semibold text-slate-900">
                  Información recomendada
                </h3>
                <ul className="mt-3 grid gap-2 text-sm text-slate-700">
                  {[
                    "Tipo de sistema y aplicación (fachada, cancelería, barandales, etc.)",
                    "Ubicación del proyecto (zona / municipio) y etapa",
                    "Fechas objetivo y condiciones de acceso a obra",
                    "Planos o alcance (link a Drive/WeTransfer)",
                  ].map((x) => (
                    <li key={x} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.aside>
          </div>
        </Container>
      </section>
    </div>
  );
}
