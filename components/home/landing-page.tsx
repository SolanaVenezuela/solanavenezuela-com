import Image from "next/image"
import { SparklesIcon } from "lucide-react"

import heroBackdrop from "@/public/images/solanavenezuela-hero.jpg"

import { MobileNav } from "@/components/home/mobile-nav"
import { Float, Reveal } from "@/components/home/reveal"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
  communityMembers,
  footerPillars,
  founderMembers,
  heroStats,
  navItems,
  resourceCategories,
  resources,
  siteDescription,
  siteName,
  siteTagline,
  skillOptions,
  valueCards,
  type AccentTone,
  type CommunityMember,
  type FounderMember,
  type HeroStat,
  type ResourceCard,
  type ValueCard,
} from "@/lib/home-content"
import { cn } from "@/lib/utils"

const founderSolanaGradient = "from-[#19fb9b] via-[#43b4ca] to-[#9945ff]"

const accentStyles = {
  primary: {
    badge:
      "border-[#34fea036] bg-[#34fea01c] text-[var(--primary)] shadow-[0_0_0_1px_rgba(52,254,160,0.05)]",
    icon: "text-[var(--primary)]",
    avatar: "from-[#34fea0] via-[#66d5ff] to-[#b984ff]",
    card: "hover:border-[#34fea033]",
  },
  secondary: {
    badge:
      "border-[#b984ff36] bg-[#b984ff1b] text-[var(--secondary)] shadow-[0_0_0_1px_rgba(185,132,255,0.05)]",
    icon: "text-[var(--secondary)]",
    avatar: "from-[#b984ff] via-[#7f94ff] to-[#34fea0]",
    card: "hover:border-[#b984ff33]",
  },
  tertiary: {
    badge:
      "border-[#ffc96536] bg-[#ffc9651f] text-[var(--tertiary)] shadow-[0_0_0_1px_rgba(255,201,101,0.06)]",
    icon: "text-[var(--tertiary)]",
    avatar: "from-[#ffc965] via-[#ff9d72] to-[#b984ff]",
    card: "hover:border-[#ffc96533]",
  },
} satisfies Record<
  AccentTone,
  {
    badge: string
    icon: string
    avatar: string
    card: string
  }
>

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: siteName,
      url: "https://solanavenezuela.com",
      logo: "https://solanavenezuela.com/images/solanavenezuela-hero.jpg",
      description: siteDescription,
      areaServed: "Venezuela",
      knowsAbout: [
        "Solana",
        "Web3",
        "Rust",
        "Blockchain",
        "Desarrollo comunitario",
      ],
    },
    {
      "@type": "WebSite",
      name: siteName,
      url: "https://solanavenezuela.com",
      description: siteDescription,
      inLanguage: "es-VE",
    },
  ],
} as const

interface SectionHeadingProps {
  headingId: string
  eyebrow: string
  title: string
  description: string
  centered?: boolean
  containerClassName?: string
  titleClassName?: string
  descriptionClassName?: string
}

function SectionHeading({
  headingId,
  eyebrow,
  title,
  description,
  centered = false,
  containerClassName,
  titleClassName,
  descriptionClassName,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", centered && "mx-auto text-center", containerClassName)}>
      <Badge
        variant="outline"
        className="mb-4 rounded-full border-white/10 bg-white/5 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[var(--primary)]"
      >
        {eyebrow}
      </Badge>
      <h2
        id={headingId}
        className={cn(
          "font-heading text-3xl leading-none font-semibold tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl",
          titleClassName
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          "mt-4 text-base leading-7 text-[var(--muted-foreground)] sm:text-lg",
          descriptionClassName
        )}
      >
        {description}
      </p>
    </div>
  )
}

function HeroStatCard({ stat, delay }: { stat: HeroStat; delay: number }) {
  const accent = accentStyles[stat.tone]
  const Icon = stat.icon

  return (
    <Reveal delay={delay}>
      <div className="glass-panel rounded-[1.5rem] border border-white/10 p-4 h-full">
        <div className="flex items-start justify-between gap-3">
          <span
            className={cn(
              "inline-flex size-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5",
              accent.icon
            )}
          >
            <Icon className="size-4" />
          </span>
        </div>
        <p className="mt-5 text-sm uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
          {stat.label}
        </p>
      </div>
    </Reveal>
  )
}

function ValuePanel({ value, delay }: { value: ValueCard; delay: number }) {
  const accent = accentStyles[value.tone]
  const Icon = value.icon

  return (
    <Reveal delay={delay}>
      <Card
        className={cn(
          "monolith-panel gap-0 rounded-[2rem] border border-white/8 px-0 py-0 text-white",
          accent.card
        )}
      >
        <CardHeader className="px-6 pt-6 sm:px-8 sm:pt-8">
          <span
            className={cn(
              "mb-6 inline-flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5",
              accent.icon
            )}
          >
            <Icon className="size-5" />
          </span>
          <CardTitle className="font-heading text-3xl font-semibold tracking-[-0.05em] text-white">
            {value.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="px-6 pb-6 sm:px-8 sm:pb-8">
          <CardDescription className="text-base leading-7 text-[var(--muted-foreground)] sm:text-lg">
            {value.description}
          </CardDescription>
        </CardContent>
      </Card>
    </Reveal>
  )
}

function ResourcePanel({ resource, delay }: { resource: ResourceCard; delay: number }) {
  const accent = accentStyles[resource.tone]
  const Icon = resource.icon

  return (
    <Reveal delay={delay} className="group/card">
      <Card
        className={cn(
          "monolith-panel h-full rounded-[1.75rem] border border-white/8 py-0 text-white",
          accent.card
        )}
      >
        <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] border-b border-white/8 bg-black/40">
          <Image
            src={resource.image}
            alt={resource.imageAlt}
            fill
            sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover/card:scale-[1.04]"
          />
          <div className="absolute inset-x-0 top-0 flex items-center justify-between gap-3 p-4">
            <Badge
              variant="outline"
              className={cn(
                "rounded-full px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.24em] backdrop-blur-md",
                accent.badge
              )}
            >
              {resource.eyebrow}
            </Badge>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />
        </div>
        <CardContent className="px-5 pb-5 pt-5 sm:px-6 sm:pb-6">
          <span
            className={cn(
              "mb-4 inline-flex size-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5",
              accent.icon
            )}
          >
            <Icon className="size-4" />
          </span>
          <CardTitle className="font-heading text-[1.35rem] leading-tight font-semibold tracking-[-0.04em] text-white">
            {resource.title}
          </CardTitle>
          <CardDescription className="mt-3 text-sm leading-6 text-[var(--muted-foreground)]">
            {resource.description}
          </CardDescription>
        </CardContent>
      </Card>
    </Reveal>
  )
}

function XBrandIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("size-4 fill-current", className)}
      focusable="false"
      aria-hidden="true"
    >
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.847h-7.406l-5.8-7.584-6.63 7.584H.48l8.6-9.83L0 1.153h7.594l5.243 6.932zm-1.29 19.494h2.04L6.486 3.24H4.298z" />
    </svg>
  )
}

function XIconButton({ href, label }: { href?: string; label: string }) {
  const baseClass =
    "inline-flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={label}
        className={cn(baseClass, "hover:bg-white/10 hover:text-white")}
      >
        <XBrandIcon />
        <span className="sr-only">X</span>
      </a>
    )
  }

  return (
    <button
      type="button"
      disabled
      aria-label={`${label} próximamente`}
      className={cn(baseClass, "cursor-not-allowed opacity-65")}
    >
      <XBrandIcon />
      <span className="sr-only">X</span>
    </button>
  )
}

function FounderPanel({
  founder,
  delay,
}: {
  founder: FounderMember
  delay: number
}) {
  return (
    <Reveal delay={delay} className="flex h-full flex-col items-center text-center">
      <div className={cn("rounded-[2rem] bg-linear-to-br p-px", founderSolanaGradient)}>
        <Avatar className="size-32 overflow-hidden bg-[var(--surface-high)] after:hidden">
          <AvatarImage src={founder.image} alt={founder.imageAlt} />
          <AvatarFallback className="bg-[var(--surface-high)] text-xl text-white">
            {founder.name
              .split(" ")
              .map((part) => part[0])
              .join("")
              .slice(0, 2)}
          </AvatarFallback>
        </Avatar>
      </div>
      <h3 className="mt-6 font-heading text-2xl font-semibold tracking-[-0.04em] text-white">
        {founder.name}
      </h3>
      <p className="mt-2 text-sm uppercase tracking-[0.24em]">
        <span
          className={cn(
            "inline-block bg-linear-to-r bg-clip-text font-semibold text-transparent",
            founderSolanaGradient
          )}
        >
          {founder.role}
        </span>
      </p>
      <div className="mt-5 flex items-center gap-3 text-white/45">
        <XIconButton href={founder.x} label={`Perfil de X de ${founder.name}`} />
      </div>
    </Reveal>
  )
}

function CommunityPanel({
  member,
  delay,
}: {
  member: CommunityMember
  delay: number
}) {
  const accent = accentStyles[member.tone]

  return (
    <Reveal delay={delay} className="h-full">
      <Card
        className={cn(
          "glass-panel h-full rounded-[1.75rem] border border-white/8 py-0 text-white",
          accent.card
        )}
      >
        <CardContent className="px-5 py-6 sm:px-6">
          <div className="relative mx-auto flex w-fit justify-center">
            <div className={cn("absolute -inset-1 rounded-full bg-gradient-to-br opacity-55 blur-md", accent.avatar)} />
            <Avatar className="relative size-24 overflow-hidden border border-white/10 bg-[var(--surface-high)] after:hidden">
              <AvatarImage src={member.image} alt={member.imageAlt} />
              <AvatarFallback className="bg-[var(--surface-high)] text-lg text-white">
                {member.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")
                  .slice(0, 2)}
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="mt-5 text-center">
            <h3 className="font-heading text-2xl font-semibold tracking-[-0.04em] text-white">
              {member.name}
            </h3>
            <p className={cn("mt-2 text-xs uppercase tracking-[0.32em]", accent.icon)}>
              {member.role}
            </p>
            <p className="mt-4 text-sm leading-6 text-[var(--muted-foreground)]">
              {member.summary}
            </p>
          </div>
          <div className="mt-6 flex items-center justify-center">
            <XIconButton href={member.x} label={`Perfil de X de ${member.name}`} />
          </div>
        </CardContent>
      </Card>
    </Reveal>
  )
}

export function LandingPage() {
  const jsonLd = JSON.stringify(structuredData).replace(/</g, "\\u003c")

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      <a
        href="#contenido"
        className="sr-only fixed left-4 top-4 z-[100] rounded-full bg-white px-4 py-2 text-sm font-medium text-black focus:not-sr-only focus:outline-none focus:ring-4 focus:ring-[var(--primary)]"
      >
        Saltar al contenido
      </a>

      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="glass-panel mt-4 flex items-center justify-between rounded-full border border-white/10 px-4 py-3 sm:px-5">
            <a href="#inicio" className="flex items-center gap-3 text-white">
              <Image
                src="/images/solana-logo.svg"
                alt=""
                aria-hidden="true"
                width={48}
                height={40}
                className="h-8 w-auto shrink-0 object-contain"
              />
              <div className="flex flex-col">
                <span className="font-heading text-sm font-semibold uppercase tracking-[0.22em] text-white sm:text-base">
                  Solana Venezuela
                  <span aria-hidden="true" className="ml-1 text-base sm:text-lg">
                    🇻🇪
                  </span>
                </span>
                <span className="hidden text-[0.65rem] uppercase tracking-[0.24em] text-white/42 sm:block">
                  Comunidad de Solana en Venezuela
                </span>
              </div>
            </a>

            <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegación principal">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-white/64 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href="#membership-form"
                className={cn(
                  buttonVariants({ variant: "default", size: "default" }),
                  "hidden h-10 rounded-full border-0 bg-[linear-gradient(135deg,var(--primary),var(--primary-strong))] px-4 text-sm font-semibold text-[var(--primary-foreground)] shadow-[0_16px_40px_rgba(52,254,160,0.16)] lg:inline-flex"
                )}
              >
                Únete
              </a>
              <div className="lg:hidden">
                <MobileNav items={navItems} />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main id="contenido" className="flex flex-1 flex-col">
        <section
          id="inicio"
          className="hero-mesh relative isolate flex min-h-[100svh] scroll-mt-32 items-center overflow-hidden pt-28 sm:pt-32"
          aria-labelledby="hero-title"
        >
          <div className="absolute inset-0" aria-hidden="true">
            <Image
              src={heroBackdrop}
              alt=""
              fill
              priority
              placeholder="blur"
              sizes="100vw"
              className="object-cover object-center opacity-25 saturate-[0.85] sm:opacity-35"
            />
            <div className="noise-overlay absolute inset-0 opacity-40" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,9,12,0.94)_0%,rgba(7,9,12,0.84)_38%,rgba(7,9,12,0.42)_68%,rgba(7,9,12,0.82)_100%)]" />
            <div className="digital-wave mask-fade absolute inset-x-0 bottom-16 h-28 opacity-60" />
            <div className="absolute -left-12 top-24 h-60 w-60 rounded-full bg-[radial-gradient(circle,rgba(52,254,160,0.24),transparent_70%)] blur-3xl" />
            <div className="absolute right-[-8%] top-[14%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(185,132,255,0.24),transparent_68%)] blur-3xl" />
          </div>

          <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-4 pb-20 sm:px-6 lg:grid-cols-[1.12fr_0.88fr] lg:gap-10 xl:gap-16">
            <div className="relative z-10 flex flex-col justify-center">
              <Reveal>
                <Badge
                  variant="outline"
                  className="mb-6 w-fit rounded-full border-white/10 bg-white/5 px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[var(--primary)]"
                >
                  <SparklesIcon className="size-3.5" />
                  ADN Solana Venezuela
                </Badge>
              </Reveal>

              <Reveal delay={0.05}>
                <h1
                  id="hero-title"
                  className="max-w-3xl font-heading text-5xl leading-[1.02] font-semibold tracking-[-0.08em] text-white sm:text-6xl lg:text-7xl xl:text-[5.3rem]"
                >
                  Conectando el{" "}
                  <span className="text-gradient inline-block pr-[0.06em]">Talento</span>{" "}
                  <span className="text-gradient inline-block pr-[0.06em]">Venezolano</span>{" "}
                  con Solana.
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted-foreground)] sm:text-xl">
                  Una comunidad de builders que escala el ecosistema de Solana desde Venezuela, con educación, colaboración y producto.
                </p>
              </Reveal>

              <Reveal delay={0.16}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://linktr.ee/solanavenezuela"
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      buttonVariants({ variant: "default", size: "lg" }),
                      "h-12 rounded-full border-0 bg-[linear-gradient(135deg,var(--primary),var(--primary-strong))] px-5 text-[0.95rem] font-semibold text-[var(--primary-foreground)] shadow-[0_16px_48px_rgba(52,254,160,0.18)]"
                    )}
                  >
                    Únete a la comunidad
                  </a>
                  <a
                    href="#recursos"
                    className={cn(
                      buttonVariants({ variant: "outline", size: "lg" }),
                      "h-12 rounded-full border-white/12 bg-white/[0.03] px-5 text-[0.95rem] font-semibold text-white hover:bg-white/[0.06]"
                    )}
                  >
                    Explorar recursos
                  </a>
                </div>
              </Reveal>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {heroStats.map((stat, index) => (
                  <HeroStatCard key={stat.label} stat={stat} delay={0.2 + index * 0.06} />
                ))}
              </div>
            </div>

            <div className="relative flex items-center justify-center lg:justify-end">
              <Float
                className="absolute left-6 top-10 hidden h-24 w-56 rounded-[2rem] bg-[linear-gradient(135deg,rgba(52,254,160,0.82),rgba(102,213,255,0.82))] opacity-85 shadow-[0_12px_48px_rgba(52,254,160,0.2)] sm:block"
                delay={0.2}
                distance={16}
                duration={8.5}
              />
              <Float
                className="absolute right-0 top-40 hidden h-20 w-44 rounded-[2rem] bg-[linear-gradient(135deg,rgba(127,148,255,0.88),rgba(185,132,255,0.88))] opacity-80 shadow-[0_12px_48px_rgba(185,132,255,0.18)] sm:block"
                delay={0.6}
                distance={12}
                duration={7.2}
              />

              <Reveal delay={0.14} className="relative w-full max-w-[30rem] lg:max-w-[28rem] xl:max-w-[31rem]">
                <div className="absolute -inset-6 rounded-[2.25rem] bg-[radial-gradient(circle_at_center,rgba(52,254,160,0.16),rgba(185,132,255,0.12),transparent_72%)] blur-3xl" />
                <div className="glass-panel relative overflow-hidden rounded-[2.25rem] border border-white/10 p-4 sm:p-5">
                  <div className="relative aspect-[0.94] overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/40">
                    <Image
                      src="/images/solanavenezuela-main.png"
                      alt="Retrato digital futurista en tonos cian dentro de una tarjeta editorial de Solana Venezuela."
                      fill
                      sizes="(min-width: 1024px) 34vw, 84vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/75 to-transparent" />
                  </div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4">
                      <p className="text-[0.72rem] uppercase tracking-[0.28em] text-[var(--muted-foreground)]">
                        En foco
                      </p>
                      <p className="mt-3 font-heading text-xl font-semibold tracking-[-0.04em] text-white">
                        Educación, comunidad y builder energy.
                      </p>
                    </div>
                    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4">
                      <p className="text-[0.72rem] uppercase tracking-[0.28em] text-[var(--muted-foreground)]">
                        Latido
                      </p>
                      <p className="mt-3 text-sm leading-6 text-white/80">
                        Contenido en español, networking táctico y rampa de entrada para crear sobre Solana.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section-grid relative bg-[var(--surface-low)] py-20 sm:py-24" aria-labelledby="mision-vision-title">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Reveal className="mb-12">
              <SectionHeading
                headingId="mision-vision-title"
                eyebrow="Norte creativo"
                title="Infraestructura con identidad local."
                description="Sincronizando el pulso de la innovación nacional con la red más rápida del mundo: una estructura de alta fidelidad donde el talento venezolano brilla sobre la solidez de Solana."
              />
            </Reveal>
            <div className="grid gap-6 lg:grid-cols-2">
              {valueCards.map((value, index) => (
                <ValuePanel key={value.title} value={value} delay={index * 0.08} />
              ))}
            </div>
          </div>
        </section>

        <section
          id="recursos"
          className="relative scroll-mt-32 py-20 sm:py-24"
          aria-labelledby="vault-title"
        >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_0%,rgba(185,132,255,0.12),transparent_24%),radial-gradient(circle_at_10%_0%,rgba(52,254,160,0.08),transparent_26%)]" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <Reveal className="flex-1">
                <SectionHeading
                  headingId="vault-title"
                  eyebrow="Recursos"
                  title="Documentación, aprendizaje y comunidad en un solo lugar."
                  description="El archivo central del talento venezolano. Una colección de recursos diseñada para que la comunidad venezolana aprenda a navegar, construir y prosperar en Solana. De la teoría a la oportunidad, todo el ecosistema en una sola pieza"
                />
              </Reveal>
              <Reveal delay={0.1}>
                <div className="flex flex-wrap gap-2 lg:justify-end" aria-label="Categorías visuales de la bóveda">
                  {resourceCategories.map((category) => (
                    <Badge
                      key={category.label}
                      variant="outline"
                      className={cn(
                        "rounded-full px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.22em]",
                        category.active
                          ? "border-[#34fea036] bg-[#34fea01d] text-[var(--primary)]"
                          : "border-white/10 bg-white/[0.03] text-white/72"
                      )}
                    >
                      {category.label}
                    </Badge>
                  ))}
                </div>
              </Reveal>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {resources.map((resource, index) => (
                <ResourcePanel key={resource.title} resource={resource} delay={index * 0.08} />
              ))}
            </div>
          </div>
        </section>

        <section
          id="core-team"
          className="relative scroll-mt-32 bg-[var(--surface-dim)] py-20 sm:py-24"
          aria-labelledby="founders-title"
        >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_-10%,rgba(52,254,160,0.08),transparent_22%),radial-gradient(circle_at_80%_0%,rgba(255,201,101,0.08),transparent_20%)]" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Reveal>
              <SectionHeading
                headingId="founders-title"
                eyebrow="Core Team"
                title="SOLANA x VENEZUELA"
                description="Perfiles con historia, visión compartida y el respaldo de una red que proyecta la fuerza de Venezuela y Solana."
                centered
                containerClassName="max-w-6xl"
                titleClassName="mx-auto whitespace-nowrap text-[clamp(1.5rem,7vw,4.5rem)] leading-none tracking-[0.1em] sm:tracking-[0.16em] lg:tracking-[0.22em]"
                descriptionClassName="mx-auto max-w-3xl"
              />
            </Reveal>
            <div className="mt-14 grid gap-12 md:grid-cols-3">
              {founderMembers.map((founder, index) => (
                <FounderPanel
                  key={founder.name}
                  founder={founder}
                  delay={index * 0.08}
                />
              ))}
            </div>
            {/* <Reveal delay={0.2}>
              <div className="mt-16 rounded-[2rem] border border-white/8 bg-white/[0.03] px-6 py-10 text-center">
                <p className="text-[0.72rem] uppercase tracking-[0.3em] text-white/44">
                  Con el apoyo y seguimiento de
                </p>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-lg font-semibold tracking-[0.18em] text-white/66 sm:text-xl">
                  {supporters.map((supporter) => (
                    <span key={supporter}>{supporter}</span>
                  ))}
                </div>
              </div>
            </Reveal> */}
          </div>
        </section>

        <section
          id="miembros"
          className="relative scroll-mt-32 overflow-hidden bg-[var(--surface-low)] py-20 sm:py-24"
          aria-labelledby="community-title"
        >
          <div className="absolute left-[-12%] top-[10%] -z-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(185,132,255,0.18),transparent_72%)] blur-3xl" />
          <div className="absolute right-[-8%] bottom-[8%] -z-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(52,254,160,0.15),transparent_72%)] blur-3xl" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Reveal>
              <SectionHeading
                headingId="community-title"
                eyebrow="Miembros"
                title="Impulsado por la gente."
                description="La fuerza creativa y técnica detrás del crecimiento de Solana en tierras venezolanas: desde primeras contribuciones hasta prácticas avanzadas."
                centered
              />
            </Reveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
              {communityMembers.map((member, index) => (
                <CommunityPanel key={member.name} member={member} delay={index * 0.08} />
              ))}
              <Reveal delay={0.34} className="h-full">
                <Card className="glass-panel h-full rounded-[1.75rem] border border-dashed border-[#34fea036] py-0 text-white">
                  <CardContent className="flex h-full flex-col items-center justify-center px-5 py-8 text-center sm:px-6">
                    <span className="inline-flex size-20 items-center justify-center rounded-full border border-[#34fea033] bg-[#34fea012] text-[var(--primary)] shadow-[0_0_0_1px_rgba(52,254,160,0.05)]">
                      <SparklesIcon className="size-7" />
                    </span>
                    <h3 className="mt-6 font-heading text-2xl font-semibold tracking-[-0.04em] text-white">
                      ¿Quieres aparecer aquí?
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-[var(--muted-foreground)]">
                      Súmate a la legión de builders de Solana Venezuela y escala con nosotros.
                    </p>
                    <a
                      href="#membership-form"
                      className={cn(
                        buttonVariants({ variant: "default", size: "lg" }),
                        "mt-6 h-11 rounded-full border-0 bg-[linear-gradient(135deg,var(--primary),var(--primary-strong))] px-5 text-sm font-semibold text-[var(--primary-foreground)]"
                      )}
                    >
                      Únete
                    </a>
                  </CardContent>
                </Card>
              </Reveal>
            </div>
          </div>
        </section>

        <section
          id="membership-form"
          className="relative scroll-mt-32 overflow-hidden py-20 sm:py-28"
          aria-labelledby="membership-title"
        >
          <div className="absolute left-1/2 top-1/2 -z-10 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(185,132,255,0.16),transparent_60%)] blur-3xl" />
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <Reveal>
              <Card className="glass-panel overflow-hidden rounded-[2.25rem] border border-white/10 py-0 text-white shadow-[0_32px_110px_rgba(0,0,0,0.28)]">
                <CardHeader className="px-6 pt-8 text-center sm:px-8 sm:pt-10">
                  <div className="mx-auto mb-4 inline-flex size-12 items-center justify-center rounded-full border border-white/10 bg-white/5">
                    <Image
                      src="/images/solana-logo.svg"
                      alt=""
                      aria-hidden="true"
                      width={28}
                      height={24}
                      className="h-5 w-auto object-contain"
                    />
                  </div>
                  <CardTitle
                    id="membership-title"
                    className="font-heading text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl"
                  >
                    Sé miembro de Solana Venezuela
                  </CardTitle>
                  <CardDescription className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[var(--muted-foreground)]">
                    Únete al capítulo venezolano de Solana. Aquí no solo participas: tienes voz para proponer iniciativas que impulsen el talento local. Deja tus datos y prepárate para ser parte de la comunidad que mueve Solana en Venezuela.
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-6 pb-8 sm:px-8 sm:pb-10">
                  <form className="grid gap-6" aria-describedby="membership-note">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="grid gap-2">
                        <label htmlFor="full-name" className="text-sm font-medium text-white/80">
                          Nombre completo
                        </label>
                        <Input
                          id="full-name"
                          name="full-name"
                          placeholder="Juan Pérez"
                          className="form-line h-12 border-b-white/12 !px-4 text-white placeholder:text-[var(--muted-foreground)]"
                        />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="twitter-handle" className="text-sm font-medium text-white/80">
                          Usuario de X
                        </label>
                        <Input
                          id="twitter-handle"
                          name="twitter-handle"
                          placeholder="@tuusuario"
                          className="form-line h-12 border-b-white/12 !px-4 text-white placeholder:text-[var(--muted-foreground)]"
                        />
                      </div>
                    </div>

                    <div className="grid gap-2">
                      <label id="skill-label" className="text-sm font-medium text-white/80">
                        Habilidad principal
                      </label>
                      <Select defaultValue={skillOptions[0]}>
                        <SelectTrigger
                          aria-labelledby="skill-label"
                          className="form-line h-12 w-full rounded-none border-b-white/12 bg-transparent !px-4 text-white"
                        >
                          <SelectValue placeholder="Selecciona una habilidad" />
                        </SelectTrigger>
                        <SelectContent
                          align="start"
                          className="border border-white/10 bg-[var(--surface-high)] text-white"
                        >
                          {skillOptions.map((option) => (
                            <SelectItem key={option} value={option} className="focus:bg-white/5 focus:text-white">
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid gap-2">
                      <label htmlFor="member-reason" className="text-sm font-medium text-white/80">
                        Cuéntanos por qué quieres unirte
                      </label>
                      <Textarea
                        id="member-reason"
                        name="member-reason"
                        rows={5}
                        placeholder="Describe tu motivación y qué puedes aportar a la comunidad..."
                        className="form-line min-h-36 border-b-white/12 !px-4 text-white placeholder:text-[var(--muted-foreground)]"
                      />
                    </div>

                    <p id="membership-note" className="text-sm leading-6 text-[var(--muted-foreground)]">
                      Tras recibir tu solicitud, te daremos respuesta lo antes posible.
                    </p>

                    <Button
                      type="button"
                      size="lg"
                      className="h-12 rounded-full border-0 bg-[linear-gradient(135deg,#19fb9b_0%,#43b4ca_48%,#9945ff_100%)] text-[#050816] shadow-[0_18px_50px_rgba(67,180,202,0.22)] hover:brightness-105"
                    >
                      Enviar solicitud
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/6 bg-[var(--surface-dim)] py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center sm:px-6">
          <div>
            <p className="font-heading text-xl font-semibold uppercase tracking-[0.24em] text-white">
              {siteName} <span aria-hidden="true">🇻🇪</span>
            </p>
            <p className="mt-3 text-sm text-[var(--muted-foreground)]">{siteTagline}</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {footerPillars.map((pillar) => {
              const Icon = pillar.icon

              return (
                <Badge
                  key={pillar.label}
                  variant="outline"
                  className="rounded-full border-white/10 bg-white/[0.03] px-3 py-1.5 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-white/72"
                >
                  <Icon className="size-3.5" />
                  {pillar.label}
                </Badge>
              )
            })}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-[0.28em] text-white/38">
            <a
              href="https://x.com/SolanaVenezuela"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-dim)]"
            >
              Twitter
            </a>
            <a
              href="https://t.me/SolanaVenezuela"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-dim)]"
            >
              Telegram
            </a>
          </div>

          <p className="max-w-xl text-sm leading-6 text-[var(--muted-foreground)]">
            Construido sobre Solana. Impulsado por el talento venezolano. Un espacio que trasciende para convertirse en el hogar digital del aprendizaje, la conexión y el crecimiento de Solana en Venezuela.
          </p>
        </div>
      </footer>
    </>
  )
}