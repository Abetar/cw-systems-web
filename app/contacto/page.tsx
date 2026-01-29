// app/contacto/page.tsx
import type { Metadata } from "next";
import { site } from "@/config/site";
import ContactoClient from "./ContactoClient";

export const metadata: Metadata = {
  title: site.pages.contacto.title,
  description: site.pages.contacto.description,
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return <ContactoClient />;
}
