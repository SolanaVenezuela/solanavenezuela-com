"use client"

import Image from "next/image"
import * as React from "react"
import { MenuIcon } from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import type { NavItem } from "@/lib/home-content"

interface MobileNavProps {
  items: readonly NavItem[]
}

export function MobileNav({ items }: MobileNavProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            type="button"
            variant="ghost"
            size="icon-lg"
            className="size-11 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10"
            aria-label="Abrir navegación principal"
          />
        }
      >
        <MenuIcon />
        <span className="sr-only">Abrir navegación principal</span>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[88vw] max-w-sm border-white/10 bg-[linear-gradient(180deg,rgba(20,22,27,0.96),rgba(8,9,12,0.96))] p-0 text-white"
      >
        <SheetHeader className="border-b border-white/10 pb-5 pr-14">
          <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-ghost)] bg-[var(--surface-high)] text-[var(--primary)]">
            <Image
              src="/images/solana-logo.svg"
              alt=""
              aria-hidden="true"
              width={26}
              height={22}
              className="h-5 w-auto object-contain"
            />
          </div>
          <SheetTitle className="text-left text-xl text-white">
            Solana Venezuela <span aria-hidden="true">🇻🇪</span>
          </SheetTitle>
          <SheetDescription className="text-left text-sm text-[var(--muted-foreground)]">
            Acceso rápido a los recursos y comunidad.
          </SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col gap-2 p-4" aria-label="Navegación móvil">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl border border-transparent px-4 py-3 text-base text-white/88 transition-colors hover:border-white/10 hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#membership-form"
            onClick={() => setOpen(false)}
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "mt-4 h-12 rounded-full border-0 bg-[linear-gradient(135deg,var(--primary),var(--primary-strong))] px-5 text-[0.95rem] font-semibold text-[var(--primary-foreground)] shadow-[0_16px_50px_rgba(52,254,160,0.18)]"
            )}
          >
            Únete a la comunidad
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  )
}