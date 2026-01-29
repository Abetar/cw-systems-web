// app/respaldo/page.tsx
import type { Metadata } from "next";
import { site } from "@/config/site";
import RespaldoClient from "./RespaldoClient";

export const metadata: Metadata = {
  title: site.pages.respaldo.title,
  description: site.pages.respaldo.description,
  alternates: { canonical: "/respaldo" },
};

export default function RespaldoPage() {
  return <RespaldoClient />;
}
