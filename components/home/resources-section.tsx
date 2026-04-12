"use client"

import * as React from "react"
import Image from "next/image"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { FileText, Globe2, Mic2, PlayCircle, SparklesIcon } from "lucide-react"

import { Reveal } from "@/components/home/reveal"
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"
import type {
  AccentTone,
  ResourceCard,
  ResourceCategory,
  ResourceFilter,
} from "@/lib/home-content"
import { cn } from "@/lib/utils"

const accentStyles = {
  primary: {
    badge:
      "border-[#34fea036] bg-[#34fea01c] text-primary shadow-[0_0_0_1px_rgba(52,254,160,0.05)]",
    icon: "text-primary",
    card: "hover:border-[#34fea033]",
  },
  secondary: {
    badge:
      "border-[#b984ff36] bg-[#b984ff1b] text-secondary shadow-[0_0_0_1px_rgba(185,132,255,0.05)]",
    icon: "text-secondary",
    card: "hover:border-[#b984ff33]",
  },
  tertiary: {
    badge:
      "border-[#ffc96536] bg-[#ffc9651f] text-tertiary shadow-[0_0_0_1px_rgba(255,201,101,0.06)]",
    icon: "text-tertiary",
    card: "hover:border-[#ffc96533]",
  },
} satisfies Record<
  AccentTone,
  {
    badge: string
    icon: string
    card: string
  }
>

const motionEase = [0.22, 1, 0.36, 1] as const
const cardTransition = {
  duration: 0.24,
  ease: motionEase,
}
const layoutTransition = {
  type: "spring",
  stiffness: 260,
  damping: 28,
  mass: 0.8,
} as const

interface ResourcesSectionProps {
  categories: ResourceCategory[]
  resources: ResourceCard[]
  children?: React.ReactNode
}

export function ResourcesSection({ categories, resources, children }: ResourcesSectionProps) {
  const prefersReducedMotion = useReducedMotion()
  const defaultFilter = categories.find((category) => category.value === "all")?.value ?? "all"
  const [activeFilter, setActiveFilter] = React.useState<ResourceFilter>(defaultFilter)
  const [, startTransition] = React.useTransition()

  const filteredResources =
    activeFilter === "all"
      ? resources
      : resources.filter((resource) => resource.kind === activeFilter)

  const activeCategory = categories.find((category) => category.value === activeFilter)

  return (
    <>
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        {children}
        <Reveal delay={0.1}>
          <div className="flex flex-wrap gap-2 lg:justify-end" aria-label="Filtrar recursos">
            {categories.map((category) => {
              const isActive = category.value === activeFilter

              return (
                <button
                  key={category.value}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => {
                    if (isActive) {
                      return
                    }

                    startTransition(() => {
                      setActiveFilter(category.value)
                    })
                  }}
                  className={cn(
                    "rounded-full border px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.22em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
                    isActive
                      ? "border-[#34fea036] bg-[#34fea01d] text-primary"
                      : "border-white/10 bg-white/3 text-white/72 hover:border-white/18 hover:bg-white/6 hover:text-white"
                  )}
                >
                  {category.label}
                </button>
              )
            })}
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-10">
        <motion.div
          layout={!prefersReducedMotion}
          transition={prefersReducedMotion ? undefined : layoutTransition}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {filteredResources.length > 0 ? (
            <AnimatePresence mode="popLayout" initial={false}>
              {filteredResources.map((resource) => (
                <ResourcePanel
                  key={resource.title}
                  resource={resource}
                  prefersReducedMotion={Boolean(prefersReducedMotion)}
                />
              ))}
            </AnimatePresence>
          ) : (
            <motion.div
              key={`empty-${activeFilter}`}
              layout={!prefersReducedMotion}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, y: 6 }}
              transition={prefersReducedMotion ? undefined : cardTransition}
              className="md:col-span-2 xl:col-span-3"
            >
              <Card className="glass-panel rounded-[1.75rem] border border-dashed border-white/10 py-0 text-white">
                <CardContent className="flex min-h-56 flex-col items-center justify-center px-6 py-10 text-center sm:px-8">
                  <span className="inline-flex size-14 items-center justify-center rounded-full border border-[#34fea033] bg-[#34fea012] text-primary shadow-[0_0_0_1px_rgba(52,254,160,0.05)]">
                    <SparklesIcon className="size-5" />
                  </span>
                  <CardTitle className="mt-5 font-heading text-2xl font-semibold tracking-[-0.04em] text-white">
                    Próximamente en {activeCategory?.label ?? "esta categoría"}
                  </CardTitle>
                  <CardDescription className="mt-3 max-w-2xl leading-7 text-muted-foreground">
                    Todavía no hemos publicado recursos en esta categoría. Spaces de X y más contenidos muy pronto.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </motion.div>
      </Reveal>
    </>
  )
}

function ResourcePanel({
  resource,
  prefersReducedMotion,
}: {
  resource: ResourceCard
  prefersReducedMotion: boolean
}) {
  const accent = accentStyles[resource.tone]

  return (
    <motion.div
      layout={!prefersReducedMotion}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 12, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={prefersReducedMotion ? undefined : { opacity: 0, y: 8, scale: 0.985 }}
      transition={prefersReducedMotion ? undefined : cardTransition}
      className="h-full"
    >
      <a
        href={resource.href}
        target="_blank"
        rel="noreferrer"
        aria-label={`${resource.ctaLabel}: ${resource.title}`}
        className="group/card block h-full rounded-[1.75rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
      >
        <Card
          className={cn(
            "monolith-panel h-full rounded-[1.75rem] border border-white/8 py-0 text-white",
            accent.card
          )}
        >
          <div className="relative aspect-16/10 overflow-hidden rounded-[1.5rem] border-b border-white/8 bg-black/40">
            <Image
              src={resource.image}
              alt={resource.imageAlt}
              fill
              sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover/card:scale-[1.04]"
            />
            <div className="absolute inset-x-0 top-0 flex items-center justify-between gap-3 p-4">
              <span
                className={cn(
                  "rounded-full border px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.24em] backdrop-blur-md",
                  accent.badge
                )}
              >
                {resource.eyebrow}
              </span>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/70 to-transparent" />
          </div>
          <CardContent className="px-5 pb-5 pt-5 sm:px-6 sm:pb-6">
            {getResourceLinkIcon(resource.href, resource.kind, accent.icon)}
            <CardTitle className="font-heading text-[1.35rem] leading-tight font-semibold tracking-[-0.04em] text-white">
              {resource.title}
            </CardTitle>
            <CardDescription className="mt-3 leading-6 text-muted-foreground">
              {resource.description}
            </CardDescription>
            <span className={cn("mt-5 inline-flex text-sm font-semibold", accent.icon)}>
              {resource.ctaLabel}
            </span>
          </CardContent>
        </Card>
      </a>
    </motion.div>
  )
}

function getResourceLinkIcon(
  href: string,
  kind: ResourceCard["kind"],
  fallbackClassName: string
) {
  const baseClassName =
    "mb-4 inline-flex size-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5"

  if (isYouTubeLink(href)) {
    return (
      <span className={cn(baseClassName, "text-[#ff0033]")}>
        <YouTubeBrandIcon />
      </span>
    )
  }

  if (isXLink(href)) {
    return (
      <span className={cn(baseClassName, "text-white")}>
        <XBrandIcon />
      </span>
    )
  }

  const FallbackIcon = getFallbackResourceIcon(kind)

  return (
    <span className={cn(baseClassName, fallbackClassName)}>
      <FallbackIcon className="size-4" />
    </span>
  )
}

function getFallbackResourceIcon(kind: ResourceCard["kind"]) {
  switch (kind) {
    case "x-space":
      return Mic2
    case "article":
      return FileText
    case "more":
      return Globe2
    case "video":
    default:
      return PlayCircle
  }
}

function isYouTubeLink(href: string) {
  const hostname = getHostname(href)

  return hostname === "youtube.com" || hostname === "m.youtube.com" || hostname === "youtu.be"
}

function isXLink(href: string) {
  const hostname = getHostname(href)

  return hostname === "x.com" || hostname === "twitter.com"
}

function getHostname(href: string) {
  try {
    return new URL(href).hostname.replace(/^www\./, "")
  } catch {
    return ""
  }
}

function YouTubeBrandIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("size-4 fill-current", className)}
      focusable="false"
      aria-hidden="true"
    >
      <path d="M23.498 6.186a2.974 2.974 0 0 0-2.09-2.105C19.566 3.5 12 3.5 12 3.5s-7.565 0-9.408.581A2.974 2.974 0 0 0 .502 6.186 31.24 31.24 0 0 0 0 12a31.24 31.24 0 0 0 .502 5.814 2.974 2.974 0 0 0 2.09 2.105C4.435 20.5 12 20.5 12 20.5s7.566 0 9.408-.581a2.974 2.974 0 0 0 2.09-2.105A31.24 31.24 0 0 0 24 12a31.24 31.24 0 0 0-.502-5.814ZM9.6 15.568V8.432L15.818 12 9.6 15.568Z" />
    </svg>
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