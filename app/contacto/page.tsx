// app/contacto/page.tsx
import type { Metadata } from "next";
import { site } from "@/config/site";
import ContactoClient from "./ContactoClient";

export const metadata: Metadata = {
  title: site.pages.contacto.title,
  description: site.pages.contacto.description,
  keywords: site.keywords,
  alternates: {
    canonical: `${site.url}/contacto`,
  },
  openGraph: {
    type: "website",
    url: `${site.url}/contacto`,
    siteName: site.name,
    title: site.pages.contacto.title,
    description: site.pages.contacto.description,
    locale: "es_MX",
  },
  twitter: {
    card: "summary_large_image",
    title: site.pages.contacto.title,
    description: site.pages.contacto.description,
  },
};

export default function ContactoPage() {
  return <ContactoClient />;
}
