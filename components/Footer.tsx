// components/Footer.tsx
import Link from "next/link";
import { site } from "@/config/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-12">
        {/* Top */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl border border-slate-200 bg-white">
                <img src="/cws-logo.png" alt={site.name} className="h-8 w-8" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">{site.name}</p>
                <p className="text-xs text-slate-500">
                  {site.city}, {site.state}
                </p>
              </div>
            </div>

            <p className="max-w-sm text-sm leading-relaxed text-slate-600">
              Soluciones en aluminio y vidrio para obra y fachada. Perfil institucional para
              proyectos con alcances y entregables definidos.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <p className="text-sm font-semibold text-slate-900">Navegación</p>
            <ul className="space-y-2 text-sm">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-600 transition hover:text-slate-900"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <p className="text-sm font-semibold text-slate-900">Contacto</p>

            <div className="space-y-2 text-sm text-slate-600">
              <p>
                <span className="font-medium text-slate-900">Ubicación:</span>{" "}
                {site.city}, {site.state}
              </p>

              {site.contact.phone ? (
                <p>
                  <span className="font-medium text-slate-900">Teléfono:</span>{" "}
                  <a href={`tel:${site.contact.phone}`} className="hover:text-slate-900">
                    {site.contact.phone}
                  </a>
                </p>
              ) : null}

              {site.contact.email ? (
                <p>
                  <span className="font-medium text-slate-900">Correo:</span>{" "}
                  <a href={`mailto:${site.contact.email}`} className="hover:text-slate-900">
                    {site.contact.email}
                  </a>
                </p>
              ) : null}
            </div>

            {/* Canal único (sin CTA) */}
            <p className="text-xs text-slate-500">
              Envío de información y alcances únicamente desde el formulario en{" "}
              <Link href="/contacto" className="font-medium text-slate-700 hover:text-slate-900">
                Contacto
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
          </p>

          <p className="text-xs text-slate-500">
            Sitio web desarrollado por{" "}
            <a
              href="https://agsolutions.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-slate-700 transition hover:text-slate-900"
            >
              AG Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
