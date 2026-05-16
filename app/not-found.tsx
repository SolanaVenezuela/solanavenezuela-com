import Link from "next/link"
import { getLocale } from "next-intl/server"

export default function NotFound() {
  return <NotFoundContent />
}

async function NotFoundContent() {
  const locale = ((await getLocale().catch(() => "es")) === "en" ? "en" : "es") as
    | "es"
    | "en"
  const content =
    locale === "en"
      ? {
          title: "Page not found",
          description:
            "This route is outside the localized app shell. Head back to the English or Spanish homepage to keep exploring.",
          ctaLabel: "Go to homepage",
        }
      : {
          title: "Página no encontrada",
          description:
            "Esta ruta quedó fuera del contenedor localizado. Vuelve a la portada en español o inglés para seguir navegando.",
          ctaLabel: "Ir al inicio",
        }

  return (
    <main className="flex min-h-svh items-center justify-center bg-background px-4 py-16 text-center text-foreground">
      <div className="max-w-xl space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
          404
        </p>
        <h1 className="font-heading text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
          {content.title}
        </h1>
        <p className="text-base leading-7 text-muted-foreground sm:text-lg">
          {content.description}
        </p>
        <Link
          href={`/${locale}`}
          className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
        >
          {content.ctaLabel}
        </Link>
      </div>
    </main>
  )
}