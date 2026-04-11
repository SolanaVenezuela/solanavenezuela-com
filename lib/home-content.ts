import type { LucideIcon } from "lucide-react"
import {
  Blocks,
  BookOpenText,
  Code2,
  FileText,
  Globe2,
  GraduationCap,
  Mic2,
  Palette,
  PlayCircle,
  Rocket,
  ShieldCheck,
  TerminalSquare,
  UsersRound,
  Star
} from "lucide-react"

export const siteName = "Solana Venezuela"
export const siteTagline = "Conectando el Talento Venezolano con Solana."
export const siteDescription =
  "Comunidad de constructores, desarrolladores y creadores que impulsa el ecosistema Solana desde Venezuela con formación, recursos y colaboración." 

export type AccentTone = "primary" | "secondary" | "tertiary"

export interface NavItem {
  label: string
  href: `#${string}`
}

export interface HeroStat {
  value: string
  label: string
  icon: LucideIcon
  tone: AccentTone
}

export interface ValueCard {
  title: string
  description: string
  icon: LucideIcon
  tone: AccentTone
}

export interface ResourceCategory {
  label: string
  active?: boolean
}

export interface ResourceCard {
  title: string
  description: string
  eyebrow: string
  image: string
  imageAlt: string
  icon: LucideIcon
  tone: AccentTone
}

export interface FounderMember {
  name: string
  role: string
  image: string
  imageAlt: string
  x: string
}

export interface CommunityMember {
  name: string
  role: string
  summary: string
  image: string
  imageAlt: string
  x?: string
  icon: LucideIcon
  tone: AccentTone
}

export const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Recursos", href: "#recursos" },
  { label: "Core team", href: "#core-team" },
  { label: "Miembros", href: "#miembros" },
] satisfies NavItem[]

export const heroStats = [
  { value: "+120", label: "constructores activos", icon: UsersRound, tone: "primary" },
  { value: "04", label: "frentes de impulso", icon: Blocks, tone: "secondary" },
  { value: "LATAM", label: "mirada regional", icon: Globe2, tone: "tertiary" },
] satisfies HeroStat[]

export const valueCards = [
  {
    title: "Mision",
    description:
      "Empoderar el talento local a traves de la educacion y contenido de desarrollo en Solana, rompiendo barreras de entrada al ecosistema global.",
    icon: GraduationCap,
    tone: "primary",
  },
  {
    title: "Vision",
    description:
      "Posicionar a Venezuela como un centro lider para la innovacion en Solana desde LATAM, exportando soluciones disruptivas al mundo.",
    icon: Rocket,
    tone: "tertiary",
  },
] satisfies ValueCard[]

export const resourceCategories = [
  { label: "Todo", active: true },
  { label: "Spaces de X" },
  { label: "Videos" },
  { label: "Articulos" },
] satisfies ResourceCategory[]

export const resources = [
  {
    title: "Construyendo en el Bear Market",
    description:
      "Conversacion estrategica sobre desarrollo resiliente, producto y coordinacion comunitaria desde Venezuela.",
    eyebrow: "Grabacion del Space",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCVBDoffrSeGbHTIQX5vD9XUNDm9ncRK5qcTVzZ1luSRq1AjGSXkLwq2raGXUIIfCgTf3FCPckT_m0fhBMRIWRr5RsB3NlP5cLLyVFHZVB3KH1I-jupT7ieS4MUWR_rmg3SJJ0c8r2MdXBSX4mrV6WlgvlyITFdtkVmkTAg0Lxp0D-Oj4CC3v2z3pwbosZo--hm6MDjsWi6JOKwAEpC5gphwpeQj4JaOf7eeLL4-AZaoE2ET5I77s9QbYeRb7wYEUIemvUH8LfPGcP0",
    imageAlt: "Ilustracion espacial para una conversacion comunitaria de Solana Venezuela.",
    icon: Mic2,
    tone: "tertiary",
  },
  {
    title: "Introduccion a Rust en Solana",
    description:
      "Tutorial intensivo para desarrolladores hispanohablantes que quieren entrar a programas, tooling y despliegue.",
    eyebrow: "Ver video",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD93AKR6oumo7HEQKkZo0e17p78N41vOER2Wv6kvzVis4MFnUNbdZv6EdalawcskQ29mXzuW_-gVwQGzY8SPSTgY0ufGArJfrIycbiscbpnmdoCBAiRpMuXkY8TUAoNQWg9R4Dq_7MOMN0YgL3s1Kmqi8zJNT4s_jAXmVfjjhEF7pmy1eF25ohcTBvBnk8S2X5G06kWaExg0htwVidkb6OvhQaG3g2qgJb4udzr_LzrptC8fExUx2BDFKj3x1wWhjdfM48A3fs7a2YN",
    imageAlt: "Retrato digital para un video educativo sobre Rust en Solana.",
    icon: PlayCircle,
    tone: "secondary",
  },
  {
    title: "Ecosistema DeFi en Latam",
    description:
      "Analisis editorial sobre la oportunidad de producto y la adopcion de infraestructura abierta en la region.",
    eyebrow: "Articulo",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA6VcvBypz6ZR4NDZYKnieu-TLGJl67B7gYWp-QqJ4ELxH2AHHmZ4ASv0nLWKDDVpvdvUXcRMhfW4Eq7-hUwLfZTLnlfIGJzPu7W7Lwvf04OdMbqQkB0U3mOQjTT7AI8quhXsGxcbC16EyMIWeKc08vRTwo34yyfUiJjTOa7sWi80etfhgf97oQ5d7HhXMUGU8HlTLHeixHD1mZqSA1_5__OLgHvZorlQ8lmvdvPzZrq5GNpnTczT3sbMslA-VYizsxYQmPDNuEDzwc",
    imageAlt: "Composicion editorial para un articulo sobre DeFi en Latinoamerica.",
    icon: FileText,
    tone: "primary",
  },
] satisfies ResourceCard[]

export const founderMembers = [
  {
    name: "Maikol Castellano",
    role: "Team",
    image:
      "/images/team/soymaikoldev.jpg",
    imageAlt: "Retrato de Maikol Castellano.",
    x: "https://x.com/soymaikoldev"
  },
  {
    name: "Arianna Cabrera",
    role: "Team",
    image:
      "/images/team/aricr.png",
    imageAlt: "Retrato de Arianna Cabrera.",
    x: "https://x.com/AriCR18"
  },
  {
    name: "Leandro Gavidia",
    role: "Team",
    image:
      "/images/team/leandrogavidia.png",
    imageAlt: "Retrato de Leandro Gavidia.",
    x: "https://x.com/androgavidia"
  },
] satisfies FounderMember[]

export const supporters = ["SOLANA FOUNDATION"] as const

export const communityMembers = [
  {
    name: "Ana Morales",
    role: "Developer",
    summary:
      "Entusiasta de DeFi y desarrolladora Rust en formacion con obsesion por la escalabilidad.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDbz_-Zvjatzsp2ljL5ssfeQYdczGpCa3IrV2XEYMiIavRfi3eHz6kmjwi6TqALQaGTcTBk3wAQwYgYsjan5lTnBX007n5sa4ItvuGkjNDzqULnuUqnaboJN6AtKeXY6pMiLLzlw8GMC9-nEG7Te_sQyZpFrXortCPMFiLAtBOzsypyHvF68YWFNARklvaJX9HWjmFg0NV8py2tx_6GsAYv6EZIc0j0APEj71rkwESSJmpdcRY7KZb1pPg4H6Ebhef9QiTZS_pl2QOj",
    imageAlt: "Retrato de Ana Morales.",
    icon: Code2,
    tone: "primary",
  },
  {
    name: "Luis Castillo",
    role: "Creador",
    summary:
      "Diseñador visual explorando las fronteras del arte generativo, NFTs y narrativas Web3.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCN6dWiwNVanFmctzqVNX20mKLkaAPiAn3PQaT1R4-8W6M9sBiDshQF6KxSiFYk-eFZM9DDGxstHnumN5L8Vkp5i74C8ImWVSm5_mnpa98ay6ynsCqJqcMU8qBTJEGZt3Tyt--0TXeYfPKJOYTCIdDKRSh8bl82J-ySL-G9z_hqBgjqFkWAbMnuP2ZAt6_wZSYvjYkTA_wgvtoLUOVeK363L2rxdp49Wsf39J1kS1o_EAK-XLlhdUEDKdVnQG1R7JfIXcphrXK4Pcee",
    imageAlt: "Retrato de Luis Castillo.",
    icon: Palette,
    tone: "secondary",
  },
  {
    name: "Sofia Pena",
    role: "Contribuidora",
    summary:
      "Lider comunitaria enfocada en adopcion masiva, onboarding y educacion Web3 en Caracas.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA07F48zMYVOS7DkRRJw8ABp6eSjNwxV5AUYqIwOs3Nm6SlLauLvp507Om2-_4O9gsxN4oVLL8rP5lL397w_HYJEtRjEgtUs3NwuQJdJPitjKLowJ6-4m216EzhH_1g_2DJUfb2XCkHw1ySL7q9zzJonY-Sxs3FXLPS4kiwuEUQ91S8nvXn90LevcRzkpYPcKMWL9WwKMreVgUjPuT8ROzN3ratTV1i-PTywcKmJKxsHCjpictg84DWAGxxPSLwbVudIJDzMFmLoKEk",
    imageAlt: "Retrato de Sofia Pena.",
    icon: UsersRound,
    tone: "tertiary",
  },
  {
    name: "Ricardo Gil",
    role: "Developer",
    summary:
      "Arquitecto backend migrando infraestructuras criticas hacia soluciones descentralizadas.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAXkPsSU2WajuhnsHUb6tXd9WVBqRLjOu0bs4fIRSnYs9OEEUV5ucdyMaPB9PvkH2hzInNoB9xwyS4aFQ0_QG7mlQDmi-Ju_9y_HMTYELKGXS8r-rAKn3QP-HJOi9-8JC09pb8PYCHPlG6RfliY821EVu7o2IhvXkKiO_rqu4t4t9Mvc7iWk5Ep9aS8rqfMIN6uhKKbZH4YytUgF42mH7O2oxcRSrlFO_2dvvXSqYO7AMfxam_41Vi3r2HAJbKxH1Dwuhj1FSu8rfVA",
    imageAlt: "Retrato de Ricardo Gil.",
    icon: TerminalSquare,
    tone: "primary",
  },
] satisfies CommunityMember[]

export const skillOptions = [
  "Desarrollador (Rust/Anchor)",
  "Diseñador UI/UX",
  "Creador de Contenido",
  "Community Manager",
  "Inversionista / Trader",
] as const

export const footerPillars = [
  { label: "Innovacion", icon: Star },
  { label: "Colaboracion", icon: UsersRound },
  { label: "Confianza", icon: ShieldCheck },
] satisfies { label: string; icon: LucideIcon }[]