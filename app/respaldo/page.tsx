// app/respaldo/page.tsx
import type { Metadata } from "next";
import { site } from "@/config/site";
import RespaldoClient from "./RespaldoClient";

export const metadata: Metadata = {
  title: site.pages.respaldo.title,
  description: site.pages.respaldo.description,
  keywords: site.keywords,
  alternates: { canonical: `${site.url}/respaldo` },
  openGraph: {
    type: "website",
    url: `${site.url}/respaldo`,
    siteName: site.name,
    title: site.pages.respaldo.title,
    description: site.pages.respaldo.description,
    locale: "es_MX",
  },
  twitter: {
    card: "summary_large_image",
    title: site.pages.respaldo.title,
    description: site.pages.respaldo.description,
  },
};

export default function RespaldoPage() {
  return <RespaldoClient />;
}
