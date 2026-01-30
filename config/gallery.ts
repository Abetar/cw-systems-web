// config/gallery.ts
export type GalleryProject = {
  slug: string;
  title: string;
  location?: string;
  cover: string;
  hero: string;
  secondary?: string[];
  bullets?: string[];
};

export const galleryProjects: GalleryProject[] = [
  {
    slug: "icon-vallarta",
    title: "ICON VALLARTA",
    location: "Monterrey, N.L.",
    cover: "/galeria/icon/cover.png",
    hero: "/galeria/icon/hero.png",
    // Si no tienes más fotos, mejor no repetir la misma en secondary
    secondary: [],
    bullets: [
      "Fachadas integrales sistema STICK",
      "Cancelería",
      "Cristales especiales laminados de color",
      "Barandales",
      "Mamparas de cristal",
      "Diseño de herrajes especiales",
    ],
  },
  {
    slug: "torre-motomex",
    title: "TORRE MOTOMEX",
    location: "Monterrey, N.L.",
    cover: "/galeria/torre-motomex/cover.png",
    hero: "/galeria/torre-motomex/cover.png",
    secondary: [],
    bullets: [
      "Fachadas integrales sistema STICK",
      "Cristales con LOW-E",
      "Panel de aluminio",
      "Fachadas suspendidas de cristal",
      "Herrajes a costillas de cristal",
    ],
  },
  {
    slug: "sta-maria-torre-sur",
    title: "STA. MARÍA TORRE SUR",
    location: "Monterrey, N.L.",
    cover: "/galeria/sta-maria-torre-sur/cover.png",
    hero: "/galeria/sta-maria-torre-sur/cover.png",
    secondary: [],
    bullets: [
      "Fachadas integrales sistema STICK",
      "Cristales con LOW-E",
      "Panel de aluminio",
      "Fachadas suspendidas de cristal",
      "Herrajes a costillas de cristal",
    ],
  },
  {
    slug: "torre-rectoria-uanl",
    title: "TORRE RECTORÍA UANL",
    location: "Monterrey, N.L.",
    cover: "/galeria/torre-rectoria-uanl/cover.png",
    hero: "/galeria/torre-rectoria-uanl/cover.png",
    secondary: ["/galeria/torre-rectoria-uanl/hero.png"],
    bullets: ["Fachadas integrales sistema STICK", "Cancelería", "Panel de aluminio"],
  },
  {
    slug: "holiday-inn-parque-fundidora",
    title: "HOLIDAY INN PARQUE FUNDIDORA",
    location: "Monterrey, N.L.",
    cover: "/galeria/holiday-inn-parque-fundidora/cover.png",
    hero: "/galeria/holiday-inn-parque-fundidora/hero.png",
    secondary: [],
    bullets: ["Fachadas integrales sistema STICK", "Cancelería", "Panel de aluminio"],
  },
  {
    slug: "club-industrial-ac",
    title: "CLUB INDUSTRIAL AC",
    location: "Monterrey, N.L.",
    cover: "/galeria/club-industrial-ac/cover.png",
    hero: "/galeria/club-industrial-ac/hero.png",
    secondary: [],
    bullets: ["Fachadas integrales sistema STICK", "Cancelería", "Panel de aluminio"],
  },
  {
    slug: "hospital-christus-muguerza-sur",
    title: "HOSPITAL CHRISTUS MUGUERZA SUR",
    location: "Monterrey, N.L.",
    // ⚠️ OJO: aquí estaba el typo "-su". Asumo que debe ser "-sur".
    cover: "/galeria/hospital-christus-muguerza-su/cover.png",
    hero: "/galeria/hospital-christus-muguerza-su/hero.png",
    secondary: [],
    bullets: [
      "Fachadas integrales sistema STICK",
      "Cancelería",
      "Panel de aluminio",
      "Cristales especiales con ventanas interiores",
    ],
  },
  {
    slug: "plaza-o2-vasconcelos",
    title: "PLAZA O2 VASCONCELOS",
    location: "Monterrey, N.L.",
    cover: "/galeria/plaza-o2-vasconcelos/cover.png",
    hero: "/galeria/plaza-o2-vasconcelos/hero.png",
    secondary: [],
    bullets: [
      "Fachadas integrales sistema STICK",
      "Cancelería",
      "Panel de aluminio",
      "Cristales especiales con ventanas interiores",
    ],
  },
  // agrega más proyectos aquí cuando te pasen imágenes
];
