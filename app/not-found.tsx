import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeftIcon,
  ArrowUpRightIcon,
  CompassIcon,
  HomeIcon,
  SearchXIcon,
  UsersRoundIcon,
  type LucideIcon,
} from "lucide-react"

import { Float, Reveal } from "@/components/home/reveal"
import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { siteName, siteTagline } from "@/lib/home-content"
import { cn } from "@/lib/utils"

const quickLinks = [
  {
    title: "Inicio",
    description: "Vuelve a la portada principal de Solana Venezuela.",
    href: "/",
    icon: HomeIcon,
    accentClass: "text-primary",
  },
  {
    title: "Recursos",
    description: "Explora material, videos y espacios para builders.",
    href: "/#recursos",
    icon: CompassIcon,
    accentClass: "text-secondary",
  },
  {
    title: "Comunidad",
    description: "Abre el formulario para unirte al capítulo venezolano.",
    href: "/#membership-form",
    icon: UsersRoundIcon,
    accentClass: "text-tertiary",
  },
] satisfies Array<{
  title: string
  description: string
  href: string
  icon: LucideIcon
  accentClass: string
}>

export default function NotFound() {
  return (
    <main
      className="hero-mesh relative isolate flex min-h-svh items-center overflow-hidden py-14 sm:py-18"
      aria-labelledby="not-found-title"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="section-grid absolute inset-0 opacity-25" />
        <div className="absolute -left-16 top-18 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(52,254,160,0.22),transparent_70%)] blur-3xl" />
        <div className="absolute right-[-10%] top-[12%] h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(185,132,255,0.2),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-72 w-xl -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,201,101,0.14),transparent_72%)] blur-3xl" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
        <div className="flex flex-col justify-center">
          <Reveal>
            <Link href="/" className="inline-flex w-fit items-center gap-3 text-white">
              <Image
                src="/images/solana-logo.svg"
                alt=""
                aria-hidden="true"
                width={48}
                height={40}
                className="h-8 w-auto object-contain"
              />
              <span className="font-heading text-sm font-semibold uppercase tracking-[0.22em] text-white sm:text-base">
                Solana Venezuela <span aria-hidden="true">🇻🇪</span>
              </span>
            </Link>
          </Reveal>

          <Reveal delay={0.05}>
            <Badge
              variant="outline"
              className="mt-8 w-fit rounded-full border-white/10 bg-white/5 px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-primary"
            >
              <SearchXIcon className="size-3.5" />
              Error 404
            </Badge>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 bg-[linear-gradient(135deg,#19fb9b_0%,#43b4ca_34%,#9945ff_72%,#ffc965_100%)] bg-clip-text font-heading text-[clamp(4.8rem,18vw,10rem)] leading-none font-semibold tracking-[-0.09em] text-transparent">
              404
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <h1
              id="not-found-title"
              className="max-w-3xl font-heading text-4xl leading-[0.98] font-semibold tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl"
            >
              Esta página salió del mapa.
            </h1>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              La ruta que intentaste abrir no existe, cambió o todavía no forma parte
              de la red de {siteName}. Puedes volver al inicio, explorar recursos o
              retomar el camino desde la comunidad.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/"
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "h-12 rounded-full border-0 bg-[linear-gradient(135deg,var(--primary),var(--primary-strong))] px-5 text-[0.95rem] font-semibold text-primary-foreground shadow-[0_16px_48px_rgba(52,254,160,0.18)]"
                )}
              >
                <ArrowLeftIcon className="size-4" />
                Volver al inicio
              </Link>
              <Link
                href="/#recursos"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-12 rounded-full border-white/12 bg-white/3 px-5 text-[0.95rem] font-semibold text-white hover:bg-white/6"
                )}
              >
                Explorar recursos
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mt-7 max-w-xl text-sm leading-7 text-white/58">
              Si llegaste aquí desde un enlace antiguo o compartido, vuelve a la portada
              y navega desde el menú principal para encontrar la ruta correcta.
            </p>
          </Reveal>
        </div>

        <div className="relative flex items-center justify-center lg:justify-end">
          <Float
            className="absolute left-6 top-6 hidden h-24 w-56 rounded-[2rem] bg-[linear-gradient(135deg,rgba(52,254,160,0.82),rgba(102,213,255,0.82))] opacity-80 shadow-[0_12px_48px_rgba(52,254,160,0.2)] sm:block"
            delay={0.2}
            distance={16}
            duration={8.2}
          />
          <Float
            className="absolute right-2 bottom-10 hidden h-20 w-44 rounded-[2rem] bg-[linear-gradient(135deg,rgba(127,148,255,0.88),rgba(185,132,255,0.88))] opacity-80 shadow-[0_12px_48px_rgba(185,132,255,0.18)] sm:block"
            delay={0.55}
            distance={12}
            duration={7.1}
          />

          <Reveal delay={0.12} className="relative w-full max-w-136">
            <Card className="glass-panel overflow-hidden rounded-[2.25rem] border border-white/10 py-0 text-white shadow-[0_32px_110px_rgba(0,0,0,0.28)]">
              <CardHeader className="px-6 pt-7 sm:px-8 sm:pt-8">
                <div className="inline-flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  <Image
                    src="/images/solana-logo.svg"
                    alt=""
                    aria-hidden="true"
                    width={28}
                    height={24}
                    className="h-5 w-auto object-contain"
                  />
                </div>
                <CardTitle className="mt-5 font-heading text-3xl font-semibold tracking-[-0.05em] text-white sm:text-[2rem]">
                  Rutas disponibles para volver a la red.
                </CardTitle>
                <CardDescription className="mt-4 max-w-lg text-base leading-7 text-muted-foreground">
                  Atajos rápidos para seguir dentro del ecosistema sin perder contexto.
                </CardDescription>
              </CardHeader>

              <CardContent className="px-6 pb-6 sm:px-8 sm:pb-8">
                <div className="grid gap-4">
                  {quickLinks.map((item, index) => {
                    const Icon = item.icon

                    return (
                      <Reveal key={item.href} delay={0.18 + index * 0.07}>
                        <Link
                          href={item.href}
                          className="monolith-panel group flex items-start gap-4 rounded-[1.5rem] border border-white/8 px-5 py-5 text-left text-white transition-colors hover:border-white/12"
                        >
                          <span
                            className={cn(
                              "inline-flex size-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5",
                              item.accentClass
                            )}
                          >
                            <Icon className="size-4" />
                          </span>
                          <div className="min-w-0 flex-1">
                            <p className="font-heading text-xl font-semibold tracking-[-0.04em] text-white">
                              {item.title}
                            </p>
                            <p className="mt-2 text-sm leading-6 text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                          <ArrowUpRightIcon className="mt-1 size-4 shrink-0 text-white/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/70" />
                        </Link>
                      </Reveal>
                    )
                  })}
                </div>

                <div className="mt-6 rounded-[1.5rem] border border-white/8 bg-white/3 px-5 py-4">
                  <p className="text-[0.72rem] uppercase tracking-[0.28em] text-primary">
                    {siteName}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-white/72">{siteTagline}</p>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </main>
  )
}