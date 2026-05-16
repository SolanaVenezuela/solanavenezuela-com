"use client"

import * as React from "react"
import { useLocale } from "next-intl"

import { getPathname, usePathname } from "@/i18n/navigation"
import type { Locale } from "@/i18n/routing"
import { cn } from "@/lib/utils"

const localeOptions = [
  { value: "es", shortLabel: "ES", title: "Español" },
  { value: "en", shortLabel: "EN", title: "English" },
] as const satisfies ReadonlyArray<{
  value: Locale
  shortLabel: string
  title: string
}>

interface LocaleSwitcherProps {
  ariaLabel: string
  className?: string
  size?: "sm" | "md"
}

export function LocaleSwitcher({
  ariaLabel,
  className,
  size = "sm",
}: LocaleSwitcherProps) {
  const locale = useLocale() as Locale
  const pathname = usePathname()
  const [isPending, startTransition] = React.useTransition()

  function handleSwitch(nextLocale: Locale) {
    if (nextLocale === locale) {
      return
    }

    startTransition(() => {
      const nextPathname = getPathname({ locale: nextLocale, href: pathname })

      window.location.assign(
        `${nextPathname}${window.location.search}${window.location.hash}`
      )
    })
  }

  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className={cn(
        "inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] p-1 text-white/72 backdrop-blur-sm",
        isPending && "opacity-80",
        className
      )}
    >
      {localeOptions.map((option) => {
        const isActive = option.value === locale

        return (
          <button
            key={option.value}
            type="button"
            title={option.title}
            aria-pressed={isActive}
            disabled={isPending}
            onClick={() => handleSwitch(option.value)}
            className={cn(
              "rounded-full font-semibold uppercase tracking-[0.2em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]",
              size === "sm"
                ? "min-w-11 px-3 py-2 text-[0.62rem]"
                : "min-w-12 px-3.5 py-2.5 text-[0.68rem]",
              isActive
                ? "bg-white/10 text-white"
                : "text-white/56 hover:bg-white/6 hover:text-white"
            )}
          >
            {option.shortLabel}
          </button>
        )
      })}
    </div>
  )
}