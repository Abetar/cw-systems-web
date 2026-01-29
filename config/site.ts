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

  // Contacto (puedes dejar vacío y completar después)
  contact: {
    phone?: string;     // "+52..." recomendado
    whatsapp?: string;  // "+52..." recomendado
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

  // Navegación (rutas confirmadas)
  nav: Array<{
    label: string;
    href: string;
  }>;

  // SEO por página (titles/descriptions)
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

  // Title base (se usa para <title> y social previews)
  title: "CW Systems | Aluminio y vidrio para constructoras en Monterrey y Nuevo León",
  description:
    "Proveedor de aluminio y vidrio para constructoras y contratistas en Monterrey y Nuevo León. Soluciones para proyectos residenciales, comerciales e industriales. Cotiza con nosotros.",
  keywords: [
    "aluminio Monterrey",
    "vidrio Monterrey",
    "proveedor de aluminio y vidrio",
    "aluminio para constructoras",
    "vidrio para constructoras",
    "contratistas Monterrey",
    "Nuevo León",
    "vidrio templado Monterrey",
    "cancelería de aluminio",
    "fachadas de vidrio",
    "proyectos de construcción",
  ],

  city: "Monterrey",
  state: "Nuevo León",
  country: "MX",
  serviceArea: ["Monterrey", "Área Metropolitana", "Nuevo León"],

  contact: {
    phone: "",     // Ej: "+528112345678"
    whatsapp: "",  // Ej: "+528112345678"
    email: "",     // Ej: "ventas@cwsystems.com.mx"
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
      title: "Aluminio y vidrio para constructoras en Monterrey y Nuevo León | CW Systems",
      description:
        "Rediseño y modernización de presencia digital. Proveedor de aluminio y vidrio para constructoras y contratistas en Monterrey y Nuevo León. Solicita una cotización.",
    },
    empresa: {
      title: "Empresa | CW Systems en Monterrey, Nuevo León",
      description:
        "Conoce CW Systems: experiencia, enfoque y cobertura en Monterrey y Nuevo León como proveedor de aluminio y vidrio para proyectos de construcción.",
    },
    servicios: {
      title: "Servicios de aluminio y vidrio | CW Systems Monterrey",
      description:
        "Servicios y soluciones en aluminio y vidrio para constructoras y contratistas: proyectos residenciales, comerciales e industriales en Monterrey y Nuevo León.",
    },
    galeria: {
      title: "Galería de proyectos | Aluminio y vidrio en Monterrey | CW Systems",
      description:
        "Explora proyectos y trabajos realizados en aluminio y vidrio para obra residencial, comercial e industrial en Monterrey y Nuevo León.",
    },
    respaldo: {
      title: "Respaldo, calidad y garantía | CW Systems",
      description:
        "Respaldo y calidad en soluciones de aluminio y vidrio: proceso, atención y preguntas frecuentes para proyectos de construcción en Monterrey y Nuevo León.",
    },
    contacto: {
      title: "Contacto y cotización | CW Systems Monterrey",
      description:
        "Solicita una cotización. Contacto directo para constructoras y contratistas en Monterrey y Nuevo León. Respuesta rápida para tu proyecto.",
    },
  },
};
