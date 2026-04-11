import type { Metadata } from "next"

import { LandingPage } from "@/components/home/landing-page"
import { siteDescription, siteName } from "@/lib/home-content"

const homeTitle = "El Futuro de Web3 se construye en Venezuela"

export const metadata: Metadata = {
  title: homeTitle,
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${homeTitle} | ${siteName}`,
    description: siteDescription,
    url: "/",
    images: [
      {
        url: "/images/solanavenezuela-hero.jpg",
        width: 2048,
        height: 949,
        alt: "Ilustracion editorial de Solana Venezuela con el ecosistema Solana sobre paisaje venezolano.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${homeTitle} | ${siteName}`,
    description: siteDescription,
    images: ["/images/solanavenezuela-hero.jpg"],
  },
}

export default function Home() {
  return <LandingPage />
}