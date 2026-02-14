// components/Header.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/config/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <div className="relative h-5 w-5">
      <span
        className={[
          "absolute left-0 top-1 block h-0.5 w-5 bg-slate-900 transition",
          open ? "translate-y-2 rotate-45" : "",
        ].join(" ")}
      />
      <span
        className={[
          "absolute left-0 top-2.5 block h-0.5 w-5 bg-slate-900 transition",
          open ? "opacity-0" : "opacity-100",
        ].join(" ")}
      />
      <span
        className={[
          "absolute left-0 top-4 block h-0.5 w-5 bg-slate-900 transition",
          open ? "-translate-y-2 -rotate-45" : "",
        ].join(" ")}
      />
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2">
          <div className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white">
            <img src="/cws-logo.png" alt={site.name} className="h-7 w-7" />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-slate-900">{site.name}</p>
            <p className="text-xs text-slate-500">
              {site.city}, {site.state}
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {site.nav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "rounded-xl px-3 py-2 text-sm font-medium transition",
                  active
                    ? "bg-slate-900 text-white"
                    : "text-slate-800 hover:bg-slate-100",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Desktop CTA (institucional, no “venta”) */}
          <Link
            href="/contacto"
            className="hidden rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 md:inline-flex"
          >
            Enviar proyecto
          </Link>

          {/* Mobile CTA */}
          <Link
            href="/contacto"
            className="inline-flex rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 md:hidden"
          >
            Enviar proyecto
          </Link>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white transition hover:bg-slate-50 md:hidden"
          >
            <MenuIcon open={mobileOpen} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileOpen ? (
        <div className="md:hidden">
          <div className="mx-auto w-full max-w-6xl px-4 pb-4">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="p-2">
                {site.nav.map((item) => {
                  const active = isActive(pathname, item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={[
                        "flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium transition",
                        active
                          ? "bg-slate-900 text-white"
                          : "text-slate-900 hover:bg-slate-50",
                      ].join(" ")}
                    >
                      <span>{item.label}</span>
                      <span className={active ? "opacity-100" : "opacity-40"}>
                        →
                      </span>
                    </Link>
                  );
                })}
              </div>

              <div className="border-t border-slate-200 p-3">
                <p className="text-xs text-slate-500">
                  Atención a constructoras y contratistas en {site.city}, {site.state}.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
