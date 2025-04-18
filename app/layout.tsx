import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://sucessoesnardini.web.app/'),
  title: {
    default: "Nardini Advogados | Assessoria Jurídica Humanizada em Questões Familiares e Sucessórias",
    template: "%s | Nardini Advogados"
  },
  description: "Assessoria jurídica humanizada para questões familiares e sucessórias, garantindo seus direitos com sensibilidade e eficiência.",
  keywords: [
    "assessoria jurídica familiar",
    "questões sucessórias",
    "direitos familiares",
    "sensibilidade jurídica",
    "eficiência jurídica",
    "Nardini Advogados",
    "advogado familiar",
    "direito sucessório",
    "consultoria jurídica",
    "direitos humanos"
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
    url: "https://sucessoesnardini.web.app/",
    siteName: "Nardini Advogados",
    title: "Nardini Advogados | Assessoria Jurídica Humanizada",
    description: "Assessoria jurídica humanizada para questões familiares e sucessórias, garantindo seus direitos com sensibilidade e eficiência.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nardini Advogados - Assessoria Jurídica Humanizada em Questões Familiares e Sucessórias"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Nardini Advogados | Assessoria Jurídica Humanizada",
    description: "Assessoria jurídica humanizada para questões familiares e sucessórias, garantindo seus direitos com sensibilidade e eficiência.",
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
    canonical: "https://sucessoesnardini.web.app/",
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
        <link rel="canonical" href="https://sucessoesnardini.web.app/" />
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