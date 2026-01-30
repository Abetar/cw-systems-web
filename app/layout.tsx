// app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/config/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TranslateToggle from "@/components/TranslateToggle";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0f14",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: site.keywords,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,

  // ✅ Importante: no fijamos canonical global aquí.
  // Cada page ya define su canonical absoluto (mejor para evitar señales mixtas).

  openGraph: {
    type: "website",
    url: site.url,
    title: site.title,
    description: site.description,
    siteName: site.name,
    locale: "es_MX",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: site.title,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/og.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "Business",

  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

function buildJsonLd() {
  const hasPhone = Boolean(site.contact.phone?.trim());
  const hasEmail = Boolean(site.contact.email?.trim());

  const jsonLd: Record<string, any> = {
    "@context": "https://schema.org",
    // ✅ Más específico para industria construcción sin prometer cosas raras
    "@type": "HomeAndConstructionBusiness",
    name: site.legalName || site.name,
    url: site.url,
    areaServed: site.serviceArea.map((a) => ({
      "@type": "AdministrativeArea",
      name: a,
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address?.city || site.city,
      addressRegion: site.address?.state || site.state,
      addressCountry: site.address?.country || site.country,
      ...(site.address?.street ? { streetAddress: site.address.street } : {}),
      ...(site.address?.zip ? { postalCode: site.address.zip } : {}),
    },
  };

  if (hasPhone) jsonLd.telephone = site.contact.phone;
  if (hasEmail) jsonLd.email = site.contact.email;

  const sameAs = Object.values(site.social || {}).filter((v) => (v || "").trim());
  if (sameAs.length) jsonLd.sameAs = sameAs;

  return jsonLd;
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = buildJsonLd();

  return (
    <html lang="es-MX" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-dvh bg-white text-slate-900 antialiased">
        <Header />
        <main className="min-h-[60vh]">{children}</main>
        <Footer />
        <TranslateToggle />
      </body>
    </html>
  );
}
