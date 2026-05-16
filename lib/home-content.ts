import type { LucideIcon } from "lucide-react"
import {
  Blocks,
  Globe2,
  GraduationCap,
  Rocket,
  ShieldCheck,
  Star,
  UsersRound,
} from "lucide-react"

import type { Locale } from "@/i18n/routing"

export const siteName = "Solana Venezuela"
export const communityJoinUrl = "https://linktr.ee/solanavenezuela"
export const telegramGroupUrl = "https://t.me/SolanaVenezuela"

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

export interface FooterPillar {
  label: string
  icon: LucideIcon
}

interface HeaderCopy {
  brandSubtitle: string
  navAriaLabel: string
  skipToContentLabel: string
  joinButtonLabel: string
  mobileJoinLabel: string
  mobileDescription: string
  mobileNavAriaLabel: string
  openNavLabel: string
  localeSwitcherLabel: string
}

interface HeroCopy {
  badgeLabel: string
  titleLead: string
  titleAccentPrimary: string
  titleAccentSecondary: string
  titleTrail: string
  description: string
  primaryCtaLabel: string
  secondaryCtaLabel: string
  imageAlt: string
  spotlightEyebrow: string
  spotlightTitle: string
  pulseEyebrow: string
  pulseDescription: string
  stats: HeroStat[]
}

interface MissionCopy {
  eyebrow: string
  title: string
  description: string
  cards: ValueCard[]
}

interface ResourcesCopy {
  eyebrow: string
  title: string
  description: string
  filterAriaLabel: string
  emptyTitlePrefix: string
  emptyFallbackCategoryLabel: string
  emptyDescription: string
  categories: ResourceCategory[]
  items: ResourceCard[]
}

interface CoreTeamCopy {
  eyebrow: string
  title: string
  description: string
  xProfileLabelPrefix: string
  founders: FounderMember[]
}

interface FooterCopy {
  description: string
  pillars: FooterPillar[]
  socialLinks: {
    x: string
    telegram: string
  }
}

interface StructuredDataCopy {
  inLanguage: string
  knowsAbout: string[]
}

export interface HomeContent {
  siteName: string
  siteTagline: string
  siteDescription: string
  header: HeaderCopy
  navItems: NavItem[]
  hero: HeroCopy
  mission: MissionCopy
  resources: ResourcesCopy
  coreTeam: CoreTeamCopy
  footer: FooterCopy
  structuredData: StructuredDataCopy
}

const sharedFounderMembers = [
  {
    name: "Maikol Castellano",
    image: "/images/team/soymaikoldev.jpg",
    x: "https://x.com/soymaikoldev",
  },
  {
    name: "Arianna Cabrera",
    image: "/images/team/aricr.jpg",
    x: "https://x.com/AriCR18",
  },
  {
    name: "Leandro Gavidia",
    image: "/images/team/leandrogavidia.png",
    x: "https://x.com/androgavidia",
  },
] as const

export const skillOptions = [
  "Desarrollador (Rust/Anchor)",
  "Diseñador UI/UX",
  "Creador de Contenido",
  "Community Manager",
  "Inversionista / Trader",
] as const

export const communityMembers: CommunityMember[] = []

const homeContentByLocale: Record<Locale, HomeContent> = {
  es: {
    siteName,
    siteTagline: "Conectando el Talento Venezolano con Solana.",
    siteDescription:
      "Una comunidad de builders que escala el ecosistema de Solana desde Venezuela, con educación, colaboración y producto.",
    header: {
      brandSubtitle: "Comunidad de Solana en Venezuela",
      navAriaLabel: "Navegación principal",
      skipToContentLabel: "Saltar al contenido",
      joinButtonLabel: "Únete",
      mobileJoinLabel: "Únete a la comunidad",
      mobileDescription: "Acceso rápido a los recursos y comunidad.",
      mobileNavAriaLabel: "Navegación móvil",
      openNavLabel: "Abrir navegación principal",
      localeSwitcherLabel: "Cambiar idioma",
    },
    navItems: [
      { label: "Inicio", href: "#inicio" },
      { label: "Recursos", href: "#recursos" },
      { label: "Core team", href: "#core-team" },
      { label: "Miembros", href: "#miembros" },
    ],
    hero: {
      badgeLabel: "ADN Solana Venezuela",
      titleLead: "Conectando el",
      titleAccentPrimary: "Talento",
      titleAccentSecondary: "Venezolano",
      titleTrail: "con Solana.",
      description:
        "Una comunidad de builders que escala el ecosistema de Solana desde Venezuela, con educación, colaboración y producto.",
      primaryCtaLabel: "Únete a la comunidad",
      secondaryCtaLabel: "Explorar recursos",
      imageAlt:
        "Retrato digital futurista en tonos cian dentro de una tarjeta editorial de Solana Venezuela.",
      spotlightEyebrow: "En foco",
      spotlightTitle: "Educación, comunidad y energía que construye.",
      pulseEyebrow: "Latido",
      pulseDescription:
        "Contenido y recursos en español, red de conexiones tácticas y rampa de entrada para crear y construir sobre Solana.",
      stats: [
        {
          value: "+120",
          label: "constructores activos",
          icon: UsersRound,
          tone: "primary",
        },
        {
          value: "04",
          label: "frentes de impulso",
          icon: Blocks,
          tone: "secondary",
        },
        {
          value: "LATAM",
          label: "mirada regional",
          icon: Globe2,
          tone: "tertiary",
        },
      ],
    },
    mission: {
      eyebrow: "Norte creativo",
      title: "Infraestructura con identidad local.",
      description:
        "Sincronizando el pulso de la innovación nacional con la red más rápida del mundo: una estructura de alta fidelidad donde el talento venezolano brilla sobre la solidez de Solana.",
      cards: [
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
      ],
    },
    resources: {
      eyebrow: "Recursos",
      title: "Documentación, aprendizaje y comunidad en un solo lugar.",
      description:
        "El archivo central del talento venezolano. Una colección de recursos diseñada para que la comunidad venezolana aprenda a navegar, construir y prosperar en Solana. De la teoría a la oportunidad, todo el ecosistema en una sola pieza",
      filterAriaLabel: "Filtrar recursos",
      emptyTitlePrefix: "Próximamente en",
      emptyFallbackCategoryLabel: "esta categoría",
      emptyDescription:
        "Todavía no hemos publicado recursos en esta categoría. Más contenidos muy pronto.",
      categories: [
        { label: "Todo", value: "all" },
        { label: "Spaces de X", value: "x-space" },
        { label: "Videos", value: "video" },
        { label: "Artículos", value: "article" },
      ],
      items: [
        {
          title: "Frontier Hackathon: Potencia tu asistente de IA",
          description:
            'Hoy en día, trabajar con modelos y herramientas de IA, tal como sucedió con el inglés, dejó de ser un "plus" para convertirse en un requisito.',
          eyebrow: "X Article",
          image: "/images/content/frontier-hackaton-impulsa-tu-asistente-de-ia.png",
          imageAlt:
            "Visual editorial de Solana Venezuela para acompañar el artículo sobre cómo potenciar tu asistente de IA para el Frontier Hackathon.",
          href: "https://x.com/SolanaVenezuela/status/2045242116733813086",
          ctaLabel: "Leer artículo",
          kind: "article",
          tone: "secondary",
        },
        {
          title: "Colosseum Live Session EP6",
          description:
            "Sesión en video para seguir de cerca ideas, demos y conversaciones alrededor del ecosistema builder en Solana.",
          eyebrow: "YouTube",
          image: "https://i.ytimg.com/vi/4VdYzibvA3I/hqdefault.jpg",
          imageAlt: "Miniatura del video Colosseum Live Session EP6 en YouTube.",
          href: "https://www.youtube.com/watch?v=4VdYzibvA3I",
          ctaLabel: "Ver en YouTube",
          kind: "video",
          tone: "primary",
        },
        {
          title: "Colosseum Live Session EP5",
          description:
            "Sesión en video para seguir de cerca ideas, demos y conversaciones alrededor del ecosistema builder en Solana.",
          eyebrow: "YouTube",
          image: "https://i.ytimg.com/vi/NQDIhf88Ook/hqdefault.jpg",
          imageAlt: "Miniatura del video Colosseum Live Session EP5 en YouTube.",
          href: "https://www.youtube.com/watch?v=NQDIhf88Ook",
          ctaLabel: "Ver en YouTube",
          kind: "video",
          tone: "secondary",
        },
        {
          title: "Colosseum Live Session EP4",
          description:
            "Sesión en video para seguir de cerca ideas, demos y conversaciones alrededor del ecosistema builder en Solana.",
          eyebrow: "YouTube",
          image: "https://i.ytimg.com/vi/CBKCMpCHH2g/hqdefault.jpg",
          imageAlt: "Miniatura del video Colosseum Live Session EP4 en YouTube.",
          href: "https://www.youtube.com/watch?v=CBKCMpCHH2g",
          ctaLabel: "Ver en YouTube",
          kind: "video",
          tone: "tertiary",
        },
        {
          title: "Colosseum Live Session EP3",
          description:
            "Sesión en video para seguir de cerca ideas, demos y conversaciones alrededor del ecosistema builder en Solana.",
          eyebrow: "YouTube",
          image: "https://i.ytimg.com/vi/_0iHcRIj7As/hqdefault.jpg",
          imageAlt: "Miniatura del video Colosseum Live Session EP3 en YouTube.",
          href: "https://www.youtube.com/live/_0iHcRIj7As?si=R8S67QmTW3OY0kYv",
          ctaLabel: "Ver en YouTube",
          kind: "video",
          tone: "primary",
        },
        {
          title: "Colosseum Live Session EP2",
          description:
            "Sesión en video para seguir de cerca ideas, demos y conversaciones alrededor del ecosistema builder en Solana.",
          eyebrow: "YouTube",
          image: "https://i.ytimg.com/vi/W_QoAfVykgg/hqdefault.jpg",
          imageAlt: "Miniatura de la transmision en vivo de Solana Venezuela en YouTube.",
          href: "https://www.youtube.com/live/W_QoAfVykgg?si=TIFNphTH9BT-NcOg",
          ctaLabel: "Ver en YouTube",
          kind: "video",
          tone: "secondary",
        },
        {
          title: "Frontier Hackathon - Colosseum",
          description:
            "Guía publicada en X por Solana Venezuela sobre el Frontier Hackathon de Colosseum, con contexto del programa y recomendaciones para builders que quieran competir mejor.",
          eyebrow: "X Article",
          image: "/images/content/frontier-hackathon.png",
          imageAlt:
            "Visual editorial de Solana Venezuela para acompañar el artículo sobre el Frontier Hackathon.",
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
      ],
    },
    coreTeam: {
      eyebrow: "Core Team",
      title: "SOLANA x VENEZUELA",
      description:
        "Perfiles con historia, visión compartida y el respaldo de una red que proyecta la fuerza de Venezuela y Solana.",
      xProfileLabelPrefix: "Perfil de X de",
      founders: sharedFounderMembers.map((founder) => ({
        ...founder,
        role: "Team",
        imageAlt: `Retrato de ${founder.name}.`,
      })),
    },
    footer: {
      description:
        "Construido sobre Solana. Impulsado por el talento venezolano. Un espacio que trasciende para convertirse en el hogar digital del aprendizaje, la conexión y el crecimiento de Solana en Venezuela.",
      pillars: [
        { label: "Innovación", icon: Star },
        { label: "Colaboración", icon: UsersRound },
        { label: "Confianza", icon: ShieldCheck },
      ],
      socialLinks: {
        x: "X",
        telegram: "Telegram",
      },
    },
    structuredData: {
      inLanguage: "es-VE",
      knowsAbout: [
        "Solana",
        "Web3",
        "Rust",
        "Blockchain",
        "Desarrollo comunitario",
      ],
    },
  },
  en: {
    siteName,
    siteTagline: "Connecting Venezuelan Talent with Solana.",
    siteDescription:
      "A community of builders scaling the Solana ecosystem from Venezuela through education, collaboration, and product.",
    header: {
      brandSubtitle: "The Solana community in Venezuela",
      navAriaLabel: "Primary navigation",
      skipToContentLabel: "Skip to content",
      joinButtonLabel: "Join",
      mobileJoinLabel: "Join the community",
      mobileDescription: "Quick access to the community and learning resources.",
      mobileNavAriaLabel: "Mobile navigation",
      openNavLabel: "Open primary navigation",
      localeSwitcherLabel: "Switch language",
    },
    navItems: [
      { label: "Home", href: "#inicio" },
      { label: "Resources", href: "#recursos" },
      { label: "Core team", href: "#core-team" },
      { label: "Members", href: "#miembros" },
    ],
    hero: {
      badgeLabel: "Solana Venezuela DNA",
      titleLead: "Connecting",
      titleAccentPrimary: "Venezuelan",
      titleAccentSecondary: "Talent",
      titleTrail: "with Solana.",
      description:
        "A community of builders scaling the Solana ecosystem from Venezuela through education, collaboration, and product.",
      primaryCtaLabel: "Join the community",
      secondaryCtaLabel: "Explore resources",
      imageAlt:
        "Futuristic cyan-toned portrait inside a Solana Venezuela editorial card.",
      spotlightEyebrow: "Spotlight",
      spotlightTitle: "Education, community, and momentum that keeps building.",
      pulseEyebrow: "Pulse",
      pulseDescription:
        "Spanish-first content and resources, tactical connections, and an on-ramp for people building on Solana.",
      stats: [
        {
          value: "+120",
          label: "active builders",
          icon: UsersRound,
          tone: "primary",
        },
        {
          value: "04",
          label: "active fronts",
          icon: Blocks,
          tone: "secondary",
        },
        {
          value: "LATAM",
          label: "regional lens",
          icon: Globe2,
          tone: "tertiary",
        },
      ],
    },
    mission: {
      eyebrow: "Creative north",
      title: "Infrastructure with local identity.",
      description:
        "Syncing the pulse of local innovation with the fastest network in the world: a high-fidelity structure where Venezuelan talent can shine on top of Solana.",
      cards: [
        {
          title: "Mission",
          description:
            "Empower local talent through education and hands-on Solana development content, lowering the barriers to the global ecosystem.",
          icon: GraduationCap,
          tone: "primary",
        },
        {
          title: "Vision",
          description:
            "Position Venezuela as a leading Solana innovation hub in LATAM, exporting high-impact solutions to the world.",
          icon: Rocket,
          tone: "tertiary",
        },
      ],
    },
    resources: {
      eyebrow: "Resources",
      title: "Documentation, learning, and community in one place.",
      description:
        "The central archive of Venezuelan builder talent. A curated collection designed to help the local community learn, navigate, build, and grow within Solana from theory to opportunity.",
      filterAriaLabel: "Filter resources",
      emptyTitlePrefix: "Coming soon in",
      emptyFallbackCategoryLabel: "this category",
      emptyDescription:
        "We have not published resources in this category yet. More content is on the way.",
      categories: [
        { label: "All", value: "all" },
        { label: "X Spaces", value: "x-space" },
        { label: "Videos", value: "video" },
        { label: "Articles", value: "article" },
      ],
      items: [
        {
          title: "Frontier Hackathon: Boost Your AI Assistant",
          description:
            'Working with AI models and tools, much like English before it, is no longer a bonus. It is quickly becoming a requirement.',
          eyebrow: "X Article",
          image: "/images/content/frontier-hackaton-impulsa-tu-asistente-de-ia.png",
          imageAlt:
            "Solana Venezuela editorial artwork for the article about boosting your AI assistant for the Frontier Hackathon.",
          href: "https://x.com/SolanaVenezuela/status/2045242116733813086",
          ctaLabel: "Read article",
          kind: "article",
          tone: "secondary",
        },
        {
          title: "Colosseum Live Session EP6",
          description:
            "A video session following ideas, demos, and conversations from across the Solana builder ecosystem.",
          eyebrow: "YouTube",
          image: "https://i.ytimg.com/vi/4VdYzibvA3I/hqdefault.jpg",
          imageAlt: "Thumbnail for Colosseum Live Session EP6 on YouTube.",
          href: "https://www.youtube.com/watch?v=4VdYzibvA3I",
          ctaLabel: "Watch on YouTube",
          kind: "video",
          tone: "primary",
        },
        {
          title: "Colosseum Live Session EP5",
          description:
            "A video session following ideas, demos, and conversations from across the Solana builder ecosystem.",
          eyebrow: "YouTube",
          image: "https://i.ytimg.com/vi/NQDIhf88Ook/hqdefault.jpg",
          imageAlt: "Thumbnail for Colosseum Live Session EP5 on YouTube.",
          href: "https://www.youtube.com/watch?v=NQDIhf88Ook",
          ctaLabel: "Watch on YouTube",
          kind: "video",
          tone: "secondary",
        },
        {
          title: "Colosseum Live Session EP4",
          description:
            "A video session following ideas, demos, and conversations from across the Solana builder ecosystem.",
          eyebrow: "YouTube",
          image: "https://i.ytimg.com/vi/CBKCMpCHH2g/hqdefault.jpg",
          imageAlt: "Thumbnail for Colosseum Live Session EP4 on YouTube.",
          href: "https://www.youtube.com/watch?v=CBKCMpCHH2g",
          ctaLabel: "Watch on YouTube",
          kind: "video",
          tone: "tertiary",
        },
        {
          title: "Colosseum Live Session EP3",
          description:
            "A video session following ideas, demos, and conversations from across the Solana builder ecosystem.",
          eyebrow: "YouTube",
          image: "https://i.ytimg.com/vi/_0iHcRIj7As/hqdefault.jpg",
          imageAlt: "Thumbnail for Colosseum Live Session EP3 on YouTube.",
          href: "https://www.youtube.com/live/_0iHcRIj7As?si=R8S67QmTW3OY0kYv",
          ctaLabel: "Watch on YouTube",
          kind: "video",
          tone: "primary",
        },
        {
          title: "Colosseum Live Session EP2",
          description:
            "A video session following ideas, demos, and conversations from across the Solana builder ecosystem.",
          eyebrow: "YouTube",
          image: "https://i.ytimg.com/vi/W_QoAfVykgg/hqdefault.jpg",
          imageAlt: "Thumbnail for the Solana Venezuela livestream on YouTube.",
          href: "https://www.youtube.com/live/W_QoAfVykgg?si=TIFNphTH9BT-NcOg",
          ctaLabel: "Watch on YouTube",
          kind: "video",
          tone: "secondary",
        },
        {
          title: "Frontier Hackathon - Colosseum",
          description:
            "A guide published on X by Solana Venezuela covering the Frontier Hackathon, the program context, and practical recommendations for builders.",
          eyebrow: "X Article",
          image: "/images/content/frontier-hackathon.png",
          imageAlt:
            "Solana Venezuela editorial artwork for the Frontier Hackathon article.",
          href: "https://x.com/SolanaVenezuela/status/2043711969287401553?s=20",
          ctaLabel: "Read article",
          kind: "article",
          tone: "primary",
        },
        {
          title: "Colosseum Live Session EP1",
          description:
            "A video session following ideas, demos, and conversations from across the Solana builder ecosystem.",
          eyebrow: "YouTube",
          image: "https://i.ytimg.com/vi/xnGBXJIQgjA/hqdefault.jpg",
          imageAlt: "Thumbnail for Colosseum Live Session EP1 on YouTube.",
          href: "https://www.youtube.com/watch?v=xnGBXJIQgjA&t=936s",
          ctaLabel: "Watch on YouTube",
          kind: "video",
          tone: "tertiary",
        },
      ],
    },
    coreTeam: {
      eyebrow: "Core Team",
      title: "SOLANA x VENEZUELA",
      description:
        "Profiles with history, shared vision, and the backing of a network projecting the strength of Venezuela and Solana.",
      xProfileLabelPrefix: "X profile for",
      founders: sharedFounderMembers.map((founder) => ({
        ...founder,
        role: "Team",
        imageAlt: `Portrait of ${founder.name}.`,
      })),
    },
    footer: {
      description:
        "Built on Solana. Powered by Venezuelan talent. A space growing into a digital home for learning, connection, and the growth of Solana in Venezuela.",
      pillars: [
        { label: "Innovation", icon: Star },
        { label: "Collaboration", icon: UsersRound },
        { label: "Trust", icon: ShieldCheck },
      ],
      socialLinks: {
        x: "X",
        telegram: "Telegram",
      },
    },
    structuredData: {
      inLanguage: "en-US",
      knowsAbout: [
        "Solana",
        "Web3",
        "Rust",
        "Blockchain",
        "Community building",
      ],
    },
  },
}

export function getHomeContent(locale: Locale) {
  return homeContentByLocale[locale]
}