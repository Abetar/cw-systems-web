// app/servicios/page.tsx
import type { Metadata } from "next";
import { site } from "@/config/site";
import ServiciosClient from "./ServiciosClient";

export const metadata: Metadata = {
  title: site.pages.servicios.title,
  description: site.pages.servicios.description,
  alternates: { canonical: "/servicios" },
};

export default function ServiciosPage() {
  return <ServiciosClient />;
}
