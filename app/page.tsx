import type { Metadata } from "next"

import { LandingPage } from "@/components/home/landing-page"
import { siteDescription, siteName } from "@/lib/home-content"

const homeTitle = "Conectando el Talento Venezolano con Solana"

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
        url: "/images/opengraph.png",
        width: 2048,
        height: 949,
        alt: "Conectando el Talento Venezolano con Solana",
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