// config/site.ts
export type SiteConfig = {
  name: string;
  legalName?: string;
  domain: string;
  url: string;

  // SEO base
  title: string;
  description: string;
  keywords: string[];

  // Local SEO
  city: string;
  state: string;
  country: string;
  serviceArea: string[];

  // Contacto
  contact: {
    phone?: string; // "+52..." recomendado
    whatsapp?: string; // "+52..." recomendado
    email?: string;
  };

  // Dirección (opcional)
  address?: {
    street?: string;
    neighborhood?: string;
    city: string;
    state: string;
    zip?: string;
    country: string;
  };

  // Social (opcional)
  social?: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };

  // Navegación
  nav: Array<{
    label: string;
    href: string;
  }>;

  // SEO por página
  pages: Record<
    "home" | "empresa" | "servicios" | "galeria" | "respaldo" | "contacto",
    {
      title: string;
      description: string;
    }
  >;
};

export const site: SiteConfig = {
  name: "CW Systems",
  legalName: "CW Systems",
  domain: "cwsystems.com.mx",
  url: "https://cwsystems.com.mx",

  // SEO base (institucional)
  title: "CW Systems | Aluminio y vidrio para obra y fachada en Monterrey y Nuevo León",
  description:
    "Soluciones en aluminio y vidrio para constructoras y contratistas en Monterrey y Nuevo León. Revisión técnica, especificación y ejecución con seguimiento para proyectos de obra y fachada.",
  keywords: [
    "aluminio Monterrey",
    "vidrio Monterrey",
    "sistemas de aluminio Monterrey",
    "vidrio para obra Nuevo León",
    "aluminio para constructoras Monterrey",
    "vidrio para constructoras Monterrey",
    "contratistas Monterrey",
    "cancelería de aluminio Monterrey",
    "fachadas de vidrio Monterrey",
    "fachadas integrales Monterrey",
    "proyectos de construcción Monterrey",
    "Nuevo León",
  ],

  city: "Monterrey",
  state: "Nuevo León",
  country: "MX",
  serviceArea: ["Monterrey", "Área Metropolitana", "Nuevo León"],

  contact: {
    phone: "", // Ej: "+528112345678"
    whatsapp: "", // Ej: "+528112345678"
    email: "", // Ej: "contacto@cwsystems.com.mx"
  },

  address: {
    // street: "",
    // neighborhood: "",
    city: "Monterrey",
    state: "Nuevo León",
    // zip: "",
    country: "MX",
  },

  social: {
    // facebook: "",
    // instagram: "",
    // linkedin: "",
  },

  nav: [
    { label: "Empresa", href: "/empresa" },
    { label: "Servicios", href: "/servicios" },
    { label: "Galería", href: "/galeria" },
    { label: "Respaldo", href: "/respaldo" },
    { label: "Contacto", href: "/contacto" },
  ],

  pages: {
    home: {
      title: "Aluminio y vidrio para obra y fachada en Monterrey y Nuevo León | CW Systems",
      description:
        "Atención a constructoras y contratistas en Monterrey y Nuevo León. Soluciones en aluminio y vidrio con revisión técnica, alcances definidos y seguimiento para proyectos de obra.",
    },
    empresa: {
      title: "Empresa | CW Systems en Monterrey, Nuevo León",
      description:
        "Conoce CW Systems: enfoque B2B para obra y fachada, experiencia en coordinación y documentación técnica para sistemas de aluminio y vidrio en Monterrey y Nuevo León.",
    },
    servicios: {
      title: "Capacidades en aluminio y vidrio | CW Systems Monterrey",
      description:
        "Capacidades para proyectos de fachada, ejecución e ingenierías: revisión técnica, especificación y coordinación en obra para aluminio y vidrio en Monterrey y Nuevo León.",
    },
    galeria: {
      title: "Galería de proyectos | Aluminio y vidrio en Monterrey | CW Systems",
      description:
        "Referencias de proyectos en aluminio y vidrio para obra y fachada. Proyectos atendidos en Monterrey y Nuevo León para constructoras y contratistas.",
    },
    respaldo: {
      title: "Respaldo de proveedores | CW Systems",
      description:
        "Respaldo y compatibilidad para especificaciones de obra: proveedores del sector en aluminio y vidrio para proyectos de fachada y construcción en Monterrey y Nuevo León.",
    },
    contacto: {
      title: "Contacto | Enviar proyecto | CW Systems Monterrey",
      description:
        "Contacto directo para constructoras y contratistas en Monterrey y Nuevo León. Envía tu proyecto para revisión técnica y propuesta de alcances.",
    },
  },
};
