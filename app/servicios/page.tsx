// app/servicios/page.tsx
import type { Metadata } from "next";
import { site } from "@/config/site";
import ServiciosClient from "./ServiciosClient";

export const metadata: Metadata = {
  title: site.pages.servicios.title,
  description: site.pages.servicios.description,
  keywords: site.keywords,
  alternates: { canonical: `${site.url}/servicios` },
  openGraph: {
    type: "website",
    url: `${site.url}/servicios`,
    siteName: site.name,
    title: site.pages.servicios.title,
    description: site.pages.servicios.description,
    locale: "es_MX",
  },
  twitter: {
    card: "summary_large_image",
    title: site.pages.servicios.title,
    description: site.pages.servicios.description,
  },
};

export default function ServiciosPage() {
  return <ServiciosClient />;
}
