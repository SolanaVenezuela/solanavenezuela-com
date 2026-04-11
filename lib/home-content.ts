import type { LucideIcon } from "lucide-react"
import {
  Blocks,
  FileText,
  Globe2,
  GraduationCap,
  Mic2,
  PlayCircle,
  Rocket,
  ShieldCheck,
  UsersRound,
  Star
} from "lucide-react"

export const siteName = "Solana Venezuela"
export const siteTagline = "Conectando el Talento Venezolano con Solana."
export const siteDescription =
  "Una comunidad de builders que escala el ecosistema de Solana desde Venezuela, con educación, colaboración y producto." 

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
    title: "Misión",
    description:
      "Empoderar el talento local a través de la educación y contenido de desarrollo en Solana, rompiendo barreras de entrada al ecosistema global.",
    icon: GraduationCap,
    tone: "primary",
  },
  {
    title: "Visión",
    description:
      "Posicionar a Venezuela como un centro líder para la innovación en Solana desde LATAM, exportando soluciones disruptivas al mundo.",
    icon: Rocket,
    tone: "tertiary",
  },
] satisfies ValueCard[]

export const resourceCategories = [
  { label: "Todo", active: true },
  { label: "Spaces de X" },
  { label: "Videos" },
  { label: "Artículos" },
] satisfies ResourceCategory[]

export const resources = [
  {
    title: "Construyendo en el Bear Market",
    description:
      "Conversación estratégica sobre desarrollo resiliente, producto y coordinación comunitaria desde Venezuela.",
    eyebrow: "Grabación del Space",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCVBDoffrSeGbHTIQX5vD9XUNDm9ncRK5qcTVzZ1luSRq1AjGSXkLwq2raGXUIIfCgTf3FCPckT_m0fhBMRIWRr5RsB3NlP5cLLyVFHZVB3KH1I-jupT7ieS4MUWR_rmg3SJJ0c8r2MdXBSX4mrV6WlgvlyITFdtkVmkTAg0Lxp0D-Oj4CC3v2z3pwbosZo--hm6MDjsWi6JOKwAEpC5gphwpeQj4JaOf7eeLL4-AZaoE2ET5I77s9QbYeRb7wYEUIemvUH8LfPGcP0",
    imageAlt: "Ilustración espacial para una conversación comunitaria de Solana Venezuela.",
    icon: Mic2,
    tone: "tertiary",
  },
  {
    title: "Introducción a Rust en Solana",
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
      "Análisis editorial sobre la oportunidad de producto y la adopción de infraestructura abierta en la región.",
    eyebrow: "Artículo",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA6VcvBypz6ZR4NDZYKnieu-TLGJl67B7gYWp-QqJ4ELxH2AHHmZ4ASv0nLWKDDVpvdvUXcRMhfW4Eq7-hUwLfZTLnlfIGJzPu7W7Lwvf04OdMbqQkB0U3mOQjTT7AI8quhXsGxcbC16EyMIWeKc08vRTwo34yyfUiJjTOa7sWi80etfhgf97oQ5d7HhXMUGU8HlTLHeixHD1mZqSA1_5__OLgHvZorlQ8lmvdvPzZrq5GNpnTczT3sbMslA-VYizsxYQmPDNuEDzwc",
    imageAlt: "Composición editorial para un artículo sobre DeFi en Latinoamérica.",
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

export const communityMembers: CommunityMember[] = []

export const skillOptions = [
  "Desarrollador (Rust/Anchor)",
  "Diseñador UI/UX",
  "Creador de Contenido",
  "Community Manager",
  "Inversionista / Trader",
] as const

export const footerPillars = [
  { label: "Innovación", icon: Star },
  { label: "Colaboración", icon: UsersRound },
  { label: "Confianza", icon: ShieldCheck },
] satisfies { label: string; icon: LucideIcon }[]