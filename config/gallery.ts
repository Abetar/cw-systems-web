// config/gallery.ts
export type GalleryProject = {
  slug: string;
  title: string;
  location?: string; // optional
  cover: string; // card cover
  hero: string; // main image
  secondary?: string[]; // optional additional images
  bullets?: string[]; // text you want outside the image
};

export const galleryProjects: GalleryProject[] = [
  {
    slug: "icon-vallarta",
    title: "ICON VALLARTA",
    location: "Monterrey, N.L.",
    cover: "/galeria/icon/cover.png",
    hero: "/galeria/icon/hero.png",
    secondary: ["/galeria/icon/cover.png"],
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
    secondary: ["/galeria/torre-motomex/cover.png"],
    bullets: [
      "Fachadas integrales sistema STICK",
      "Cristales con LOW-E",
      "Panel de alumnio",
      "Fachadas suspendidas de cristal",
      "Herrajes a costillas de cristal",
    ],
  },
  {
    slug: "sta-maria-torre-sur",
    title: "Sta. Maria Torre Sur",
    location: "Monterrey, N.L.",
    cover: "/galeria/sta-maria-torre-sur/cover.png",
    hero: "/galeria/sta-maria-torre-sur/cover.png",
    secondary: ["/galeria/sta-maria-torre-sur/cover.png"],
    bullets: [
      "Fachadas integrales sistema STICK",
      "Cristales con LOW-E",
      "Panel de alumnio",
      "Fachadas suspendidas de cristal",
      "Herrajes a costillas de cristal",
    ],
  },
  {
    slug: "torre-rectoria-uanl",
    title: "Torre Rectoria UANL",
    location: "Monterrey, N.L.",
    cover: "/galeria/torre-rectoria-uanl/cover.png",
    hero: "/galeria/torre-rectoria-uanl/cover.png",
    secondary: ["/galeria/torre-rectoria-uanl/hero.png"],
    bullets: [
      "Fachadas integrales sistema STICK",
      "Cancerlería",
      "Panel de aluminio",
    ],
  },
  {
    slug: "holiday-inn-parque-fundidora",
    title: "Holiday Inn Parque Fundidora",
    location: "Monterrey, N.L.",
    cover: "/galeria/holiday-inn-parque-fundidora/hero.png",
    hero: "/galeria/holiday-inn-parque-fundidora/hero.png",
    secondary: ["/galeria/holiday-inn-parque-fundidora/cover.png"],
    bullets: [
      "Fachadas integrales sistema STICK",
      "Cancerlería",
      "Panel de aluminio",
    ],
  },
  {
    slug: "club-industrial-ac",
    title: "Club Industrial AC",
    location: "Monterrey, N.L.",
    cover: "/galeria/club-industrial-ac/cover.png",
    hero: "/galeria/club-industrial-ac/hero.png",
    secondary: ["/galeria/club-industrial-ac/cover.png"],
    bullets: [
      "Fachadas integrales sistema STICK",
      "Cancerlería",
      "Panel de aluminio",
    ],
  },
  {
    slug: "hospital-christus-muguerza-sur",
    title: "Hospital Christus Muguerza Sur",
    location: "Monterrey, N.L.",
    cover: "/galeria/hospital-christus-muguerza-su/cover.png",
    hero: "/galeria/hospital-christus-muguerza-su/hero.png",
    secondary: ["/galeria/hospital-christus-muguerza-su/cover.png"],
    bullets: [
      "Fachadas integrales sistema STICK",
      "Cancerlería",
      "Panel de aluminio",
      "Cristales especiales con ventanas interiores",
    ],
  },
  {
    slug: "plaza-o2-vasconcelos",
    title: "Plaza O2 Vasconcelos",
    location: "Monterrey, N.L.",
    cover: "/galeria/plaza-o2-vasconcelos/cover.png",
    hero: "/galeria/plaza-o2-vasconcelos/hero.png",
    secondary: ["/galeria/plaza-o2-vasconcelos/cover.png"],
    bullets: [
      "Fachadas integrales sistema STICK",
      "Cancerlería",
      "Panel de aluminio",
      "Cristales especiales con ventanas interiores",
    ],
  },
  // 👇 agrega más proyectos aquí cuando te pasen imágenes
];
