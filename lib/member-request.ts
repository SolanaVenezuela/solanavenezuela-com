import { z } from "zod"

import type { Locale } from "@/i18n/routing"

const xHandlePattern = /^@?[A-Za-z0-9_]{1,15}$/
const memberRequestStatusValues = ["accepted", "rejected"] as const

export const skillOptionValues = [
  "developer-anchor",
  "designer-ui-ux",
  "content-creator",
  "community-manager",
  "investor-trader",
] as const

export type SkillOptionValue = (typeof skillOptionValues)[number]
export type MemberRequestStatus = (typeof memberRequestStatusValues)[number]

export interface MemberRequestInput {
  fullName: string
  email: string
  xHandle: string
  primarySkill: SkillOptionValue
  reason: string
}

export interface MemberRequestPayload extends MemberRequestInput {}

export type MemberRequestFieldErrors = Partial<Record<keyof MemberRequestInput, string[]>>

export interface MemberRequestStatusInput {
  fullName: string
  email: string
  status: MemberRequestStatus
  requestId?: string
  note?: string
  actionUrl?: string
  actionLabel?: string
}

export interface MemberRequestStatusPayload extends MemberRequestStatusInput {}

interface MemberRequestCopy {
  skillLabels: Record<SkillOptionValue, string>
  validation: {
    invalidName: string
    invalidEmail: string
    xHandleRequired: string
    xHandleTooLong: string
    xHandleInvalid: string
    reasonTooShort: string
    invalidUrl: string
  }
  form: {
    fullNameLabel: string
    fullNamePlaceholder: string
    emailLabel: string
    emailPlaceholder: string
    xHandleLabel: string
    xHandlePlaceholder: string
    primarySkillLabel: string
    primarySkillPlaceholder: string
    reasonLabel: string
    reasonPlaceholder: string
    reasonHint: string
    membershipNote: string
    submitLabel: string
    submitPendingLabel: string
    fallbackError: string
    fallbackSuccess: string
    connectionError: string
  }
  api: {
    unreadableRequest: string
    invalidForm: string
    sendFailure: string
    success: string
  }
  statusApi: {
    missingToken: string
    unauthorized: string
    unreadableRequest: string
    invalidPayload: string
    emailFailed: string
    acceptedSent: string
    rejectedSent: string
  }
  emails: {
    internalSubject: string
    receivedSubject: string
    acceptedSubject: string
    rejectedSubject: string
    receivedResponseTime: string
    acceptedDefaultNote: string
    acceptedDefaultActionLabel: string
    rejectedDefaultNote: string
  }
}

const memberRequestCopyByLocale: Record<Locale, MemberRequestCopy> = {
  es: {
    skillLabels: {
      "developer-anchor": "Desarrollador (Rust/Anchor)",
      "designer-ui-ux": "Diseñador UI/UX",
      "content-creator": "Creador de Contenido",
      "community-manager": "Community Manager",
      "investor-trader": "Inversionista / Trader",
    },
    validation: {
      invalidName: "Ingresa un nombre válido.",
      invalidEmail: "Ingresa un correo válido.",
      xHandleRequired: "Ingresa tu usuario de X.",
      xHandleTooLong: "El usuario de X es demasiado largo.",
      xHandleInvalid: "Ingresa un usuario de X válido.",
      reasonTooShort: "Escribe al menos 20 caracteres para contarnos tu motivación.",
      invalidUrl: "Ingresa una URL válida.",
    },
    form: {
      fullNameLabel: "Nombre completo",
      fullNamePlaceholder: "Juan Pérez",
      emailLabel: "Correo electrónico",
      emailPlaceholder: "tu@correo.com",
      xHandleLabel: "Usuario de X",
      xHandlePlaceholder: "@tuusuario",
      primarySkillLabel: "Habilidad principal",
      primarySkillPlaceholder: "Selecciona una habilidad",
      reasonLabel: "Cuéntanos por qué quieres unirte",
      reasonPlaceholder:
        "Describe tu motivación y qué puedes aportar a la comunidad...",
      reasonHint:
        "Escribe al menos 20 caracteres para contarnos tu motivación antes de enviar la solicitud.",
      membershipNote:
        "Tras recibir tu solicitud, te enviaremos un correo de confirmación y te daremos respuesta lo antes posible.",
      submitLabel: "Enviar solicitud",
      submitPendingLabel: "Enviando solicitud...",
      fallbackError: "No pudimos enviar tu solicitud. Inténtalo nuevamente.",
      fallbackSuccess:
        "Recibimos tu solicitud. Revisa tu correo para confirmar el acuse de recibo.",
      connectionError:
        "No pudimos conectar con el servicio de envío. Inténtalo nuevamente.",
    },
    api: {
      unreadableRequest: "No pudimos leer la solicitud enviada.",
      invalidForm: "Revisa los campos del formulario e inténtalo de nuevo.",
      sendFailure:
        "No pudimos enviar tu solicitud en este momento. Inténtalo nuevamente en unos minutos.",
      success: "Recibimos tu solicitud y ya enviamos el acuse de recibo a tu correo.",
    },
    statusApi: {
      missingToken: "Configura MEMBER_REQUEST_STATUS_TOKEN antes de usar esta ruta.",
      unauthorized: "No autorizado.",
      unreadableRequest: "No pudimos leer la solicitud enviada.",
      invalidPayload: "Revisa el payload e inténtalo de nuevo.",
      emailFailed: "No pudimos enviar el correo de estado en este momento.",
      acceptedSent: "Correo de aceptación enviado.",
      rejectedSent: "Correo de rechazo enviado.",
    },
    emails: {
      internalSubject: "Nueva solicitud de membresía - {{{MEMBER_NAME}}}",
      receivedSubject: "Recibimos tu solicitud en {{{COMMUNITY_NAME}}}",
      acceptedSubject: "Tu solicitud fue aprobada - {{{COMMUNITY_NAME}}}",
      rejectedSubject: "Actualización sobre tu solicitud - {{{COMMUNITY_NAME}}}",
      receivedResponseTime: "1 a 3 días hábiles",
      acceptedDefaultNote:
        "Te contactaremos pronto con los siguientes pasos para integrarte a la comunidad.",
      acceptedDefaultActionLabel: "Explorar recursos",
      rejectedDefaultNote:
        "Por ahora no podremos avanzar con la solicitud, pero podrás volver a postularte más adelante.",
    },
  },
  en: {
    skillLabels: {
      "developer-anchor": "Developer (Rust/Anchor)",
      "designer-ui-ux": "UI/UX Designer",
      "content-creator": "Content Creator",
      "community-manager": "Community Manager",
      "investor-trader": "Investor / Trader",
    },
    validation: {
      invalidName: "Enter a valid name.",
      invalidEmail: "Enter a valid email address.",
      xHandleRequired: "Enter your X handle.",
      xHandleTooLong: "The X handle is too long.",
      xHandleInvalid: "Enter a valid X handle.",
      reasonTooShort:
        "Write at least 20 characters so we can understand your motivation.",
      invalidUrl: "Enter a valid URL.",
    },
    form: {
      fullNameLabel: "Full name",
      fullNamePlaceholder: "Jane Doe",
      emailLabel: "Email",
      emailPlaceholder: "you@email.com",
      xHandleLabel: "X handle",
      xHandlePlaceholder: "@yourhandle",
      primarySkillLabel: "Primary skill",
      primarySkillPlaceholder: "Select a skill",
      reasonLabel: "Tell us why you want to join",
      reasonPlaceholder:
        "Describe your motivation and what you can contribute to the community...",
      reasonHint:
        "Write at least 20 characters so we can understand your motivation before you submit the request.",
      membershipNote:
        "After we receive your request, we will send a confirmation email and get back to you as soon as possible.",
      submitLabel: "Send request",
      submitPendingLabel: "Sending request...",
      fallbackError: "We could not send your request. Please try again.",
      fallbackSuccess:
        "We received your request. Check your inbox for the confirmation email.",
      connectionError:
        "We could not reach the delivery service. Please try again.",
    },
    api: {
      unreadableRequest: "We could not read the submitted request.",
      invalidForm: "Check the form fields and try again.",
      sendFailure:
        "We could not send your request right now. Please try again in a few minutes.",
      success: "We received your request and sent a confirmation email to your inbox.",
    },
    statusApi: {
      missingToken: "Set MEMBER_REQUEST_STATUS_TOKEN before using this route.",
      unauthorized: "Unauthorized.",
      unreadableRequest: "We could not read the submitted request.",
      invalidPayload: "Check the payload and try again.",
      emailFailed: "We could not send the status email right now.",
      acceptedSent: "Acceptance email sent.",
      rejectedSent: "Rejection email sent.",
    },
    emails: {
      internalSubject: "New membership request - {{{MEMBER_NAME}}}",
      receivedSubject: "We received your request at {{{COMMUNITY_NAME}}}",
      acceptedSubject: "Your request was approved - {{{COMMUNITY_NAME}}}",
      rejectedSubject: "Update on your request - {{{COMMUNITY_NAME}}}",
      receivedResponseTime: "1 to 3 business days",
      acceptedDefaultNote:
        "We will contact you soon with the next steps to get you into the community.",
      acceptedDefaultActionLabel: "Explore resources",
      rejectedDefaultNote:
        "We cannot move forward with the request right now, but you can apply again later.",
    },
  },
}

export function normalizeRequestLocale(locale?: string | null): Locale {
  return locale === "en" ? "en" : "es"
}

export function getMemberRequestCopy(locale: Locale) {
  return memberRequestCopyByLocale[locale]
}

export function getSkillOptions(locale: Locale) {
  const { skillLabels } = getMemberRequestCopy(locale)

  return skillOptionValues.map((value) => ({
    value,
    label: skillLabels[value],
  }))
}

export function getSkillLabel(value: SkillOptionValue, locale: Locale) {
  return getMemberRequestCopy(locale).skillLabels[value]
}

export function isSkillOptionValue(value: string): value is SkillOptionValue {
  return skillOptionValues.includes(value as SkillOptionValue)
}

export function createMemberRequestSchema(locale: Locale) {
  const copy = getMemberRequestCopy(locale)

  return z.object({
    fullName: z.string().trim().min(2, copy.validation.invalidName).max(120),
    email: z
      .string()
      .trim()
      .email(copy.validation.invalidEmail)
      .max(254)
      .transform((value) => value.toLowerCase()),
    xHandle: z
      .string()
      .trim()
      .min(1, copy.validation.xHandleRequired)
      .max(16, copy.validation.xHandleTooLong)
      .regex(xHandlePattern, copy.validation.xHandleInvalid)
      .transform((value) => value.replace(/^@/, "")),
    primarySkill: z.enum(skillOptionValues),
    reason: z
      .string()
      .trim()
      .min(20, copy.validation.reasonTooShort)
      .max(2000),
  })
}

export function createMemberRequestStatusSchema(locale: Locale) {
  const copy = getMemberRequestCopy(locale)

  return z.object({
    fullName: z.string().trim().min(2, copy.validation.invalidName).max(120),
    email: z
      .string()
      .trim()
      .email(copy.validation.invalidEmail)
      .max(254)
      .transform((value) => value.toLowerCase()),
    status: z.enum(memberRequestStatusValues),
    requestId: z.string().trim().min(1).max(120).optional(),
    note: z.string().trim().max(1000).optional(),
    actionUrl: z.string().trim().url(copy.validation.invalidUrl).optional(),
    actionLabel: z.string().trim().min(1).max(80).optional(),
  })
}

export function formatXHandle(handle: string) {
  return handle.startsWith("@") ? handle : `@${handle}`
}

export function formatSubmittedAt(date: Date, locale: Locale) {
  return new Intl.DateTimeFormat(locale === "en" ? "en-US" : "es-VE", {
    dateStyle: "long",
    timeStyle: "short",
  }).format(date)
}