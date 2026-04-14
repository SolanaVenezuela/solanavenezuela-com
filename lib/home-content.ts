import type { LucideIcon } from "lucide-react"
import {
  Blocks,
  Globe2,
  GraduationCap,
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
export type ResourceKind = "video" | "x-space" | "article" | "more"
export type ResourceFilter = "all" | ResourceKind

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
  value: ResourceFilter
}

export interface ResourceCard {
  title: string
  description: string
  eyebrow: string
  image: string
  imageAlt: string
  href: string
  ctaLabel: string
  kind: ResourceKind
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
  { label: "Todo", value: "all" },
  { label: "Spaces de X", value: "x-space" },
  { label: "Videos", value: "video" },
  { label: "Artículos", value: "article" },
] satisfies ResourceCategory[]

export const resources = [
  {
    title: "Frontier Hackathon - Colosseum",
    description:
      "Guía publicada en X por Solana Venezuela sobre el Frontier Hackathon de Colosseum, con contexto del programa y recomendaciones para builders que quieran competir mejor.",
    eyebrow: "X Article",
    image: "/images/content/frontier-hackathon.png",
    imageAlt: "Visual editorial de Solana Venezuela para acompañar el artículo sobre el Frontier Hackathon.",
    href: "https://x.com/SolanaVenezuela/status/2043711969287401553?s=20",
    ctaLabel: "Leer artículo",
    kind: "article",
    tone: "primary",
  },
  {
    title: "Colosseum Live Session EP1",
    description:
      "Sesión en video para seguir de cerca ideas, demos y conversaciones alrededor del ecosistema builder en Solana.",
    eyebrow: "YouTube",
    image: "https://i.ytimg.com/vi/xnGBXJIQgjA/hqdefault.jpg",
    imageAlt: "Miniatura del video Colosseum Live Session EP1 en YouTube.",
    href: "https://www.youtube.com/watch?v=xnGBXJIQgjA&t=936s",
    ctaLabel: "Ver en YouTube",
    kind: "video",
    tone: "tertiary",
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
      "/images/team/aricr.jpg",
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