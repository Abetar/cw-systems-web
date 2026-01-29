// components/TranslateToggle.tsx
"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    google?: any;
    googleTranslateElementInit?: () => void;
  }
}

type Lang = "es" | "en";

function setCookie(name: string, value: string, days = 365) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/`;
}

function getCookie(name: string) {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? match[2] : "";
}

// Google Translate usa este cookie para forzar idioma visual
// formato típico: /<origen>/<destino>
function applyLang(lang: Lang) {
  // Asumimos tu sitio base en español
  const value = lang === "en" ? "/es/en" : "/es/es";
  setCookie("googtrans", value);
  setCookie("googtrans", value, 365); // doble set por compat
  window.location.reload();
}

export default function TranslateToggle() {
  const [ready, setReady] = useState(false);
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => {
    // Detecta estado actual aproximado
    const gt = decodeURIComponent(getCookie("googtrans") || "");
    if (gt.includes("/es/en")) setLang("en");
    else setLang("es");

    // Evita re-inyectar script
    if (document.getElementById("google-translate-script")) {
      setReady(true);
      return;
    }

    window.googleTranslateElementInit = () => {
      try {
        // eslint-disable-next-line no-new
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "es",
            includedLanguages: "es,en",
            autoDisplay: false,
          },
          "google_translate_element"
        );
        setReady(true);
      } catch {
        // si falla, igual marcamos ready para no bloquear UI
        setReady(true);
      }
    };

    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      {/* Contenedor oculto requerido por Google Translate */}
      <div id="google_translate_element" className="hidden" />

      {/* Toggle flotante */}
      <div className="fixed bottom-5 right-5 z-50">
        <div className="flex overflow-hidden rounded-full border border-slate-200 bg-white shadow-sm">
          <button
            type="button"
            disabled={!ready}
            onClick={() => applyLang("es")}
            className={[
              "px-4 py-2 text-sm font-semibold transition",
              lang === "es" ? "bg-slate-900 text-white" : "text-slate-900 hover:bg-slate-50",
              !ready ? "opacity-60 cursor-not-allowed" : "",
            ].join(" ")}
          >
            ES
          </button>
          <button
            type="button"
            disabled={!ready}
            onClick={() => applyLang("en")}
            className={[
              "px-4 py-2 text-sm font-semibold transition",
              lang === "en" ? "bg-slate-900 text-white" : "text-slate-900 hover:bg-slate-50",
              !ready ? "opacity-60 cursor-not-allowed" : "",
            ].join(" ")}
          >
            EN
          </button>
        </div>
      </div>
    </>
  );
}
