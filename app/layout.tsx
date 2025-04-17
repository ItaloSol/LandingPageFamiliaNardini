import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://nardiniadvogados.web.app/'),
  title: {
    default: "Nardini Advogados | Especialista em Direito do Consumidor em São José do Rio Preto",
    template: "%s | Nardini Advogados"
  },
  description: "Há mais de 10 anos defendendo os direitos dos consumidores em São José do Rio Preto. Especialistas em problemas com produtos, serviços e cobranças indevidas. Agende uma consulta!",
  keywords: [
    "advogado direito do consumidor",
    "problemas com produtos",
    "cobranças indevidas", 
    "práticas abusivas",
    "defesa do consumidor",
    "Nardini Advogados",
    "advogado Rio Preto",
    "PROCON",
    "reclamação consumidor",
    "direitos do consumidor"
  ],
  authors: [{ name: "Nardini Advogados" }],
  creator: "Nardini Advogados",
  publisher: "Nardini Advogados",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://nardiniadvogados.web.app/",
    siteName: "Nardini Advogados",
    title: "Nardini Advogados | Especialista em Direito do Consumidor",
    description: "Especialistas em defender seus direitos nas relações de consumo. Problemas com produtos, serviços, cobranças indevidas e práticas abusivas.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nardini Advogados - Escritório Especializado em Direito do Consumidor em São José do Rio Preto"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Nardini Advogados | Advocacia Especializada em Direito do Consumidor",
    description: "Soluções jurídicas especializadas em São José do Rio Preto. Defesa dos direitos do consumidor.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://nardiniadvogados.web.app/",
  },
  icons: {
    icon: "/logo.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://nardiniadvogados.web.app/" />
        <meta name="geo.region" content="BR-SP" />
        <meta name="geo.placename" content="São José do Rio Preto" />
        <meta name="geo.position" content="-20.8167252;-49.4015975" />
        <meta name="ICBM" content="-20.8167252, -49.4015975" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}