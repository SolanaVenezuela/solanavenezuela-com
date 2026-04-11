import { z } from "zod"

import { skillOptions } from "@/lib/home-content"

const xHandlePattern = /^@?[A-Za-z0-9_]{1,15}$/
const memberRequestStatusValues = ["accepted", "rejected"] as const

export const memberRequestSchema = z.object({
  fullName: z.string().trim().min(2, "Ingresa un nombre válido.").max(120),
  email: z.string().trim().email("Ingresa un correo válido.").max(254).transform((value) => value.toLowerCase()),
  xHandle: z
    .string()
    .trim()
    .min(1, "Ingresa tu usuario de X.")
    .max(16, "El usuario de X es demasiado largo.")
    .regex(xHandlePattern, "Ingresa un usuario de X válido.")
    .transform((value) => value.replace(/^@/, "")),
  primarySkill: z.enum(skillOptions),
  reason: z
    .string()
    .trim()
    .min(20, "Escribe al menos 20 caracteres para contarnos tu motivación.")
    .max(2000),
})

export const memberRequestStatusSchema = z.object({
  fullName: z.string().trim().min(2, "Ingresa un nombre válido.").max(120),
  email: z.string().trim().email("Ingresa un correo válido.").max(254).transform((value) => value.toLowerCase()),
  status: z.enum(memberRequestStatusValues),
  requestId: z.string().trim().min(1).max(120).optional(),
  note: z.string().trim().max(1000).optional(),
  actionUrl: z.string().trim().url("Ingresa una URL válida.").optional(),
  actionLabel: z.string().trim().min(1).max(80).optional(),
})

export type MemberRequestInput = z.input<typeof memberRequestSchema>
export type MemberRequestPayload = z.output<typeof memberRequestSchema>
export type MemberRequestFieldErrors = Partial<Record<keyof MemberRequestInput, string[]>>

export type MemberRequestStatusInput = z.input<typeof memberRequestStatusSchema>
export type MemberRequestStatusPayload = z.output<typeof memberRequestStatusSchema>
export type MemberRequestStatus = (typeof memberRequestStatusValues)[number]

export function formatXHandle(handle: string) {
  return handle.startsWith("@") ? handle : `@${handle}`
}

export function formatSubmittedAt(date: Date) {
  return new Intl.DateTimeFormat("es-VE", {
    dateStyle: "long",
    timeStyle: "short",
  }).format(date)
}