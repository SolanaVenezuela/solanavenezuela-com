import "server-only"

import { Resend } from "resend"

import { siteName } from "@/lib/home-content"
import {
  formatSubmittedAt,
  formatXHandle,
  type MemberRequestPayload,
  type MemberRequestStatusPayload,
} from "@/lib/member-request"
import { memberRequestTemplateIds } from "@/lib/resend-template-ids"

function getRequiredEnv(name: string) {
  const value = process.env[name]?.trim()

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }

  return value
}

function getSiteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL?.trim() || "http://localhost:3000").replace(/\/$/, "")
}

function getResendClient() {
  return new Resend(getRequiredEnv("RESEND_API_KEY"))
}

function getFromAddress() {
  const fromName = process.env.RESEND_FROM_NAME?.trim() || siteName
  const fromEmail = getRequiredEnv("RESEND_FROM_EMAIL")

  if (fromEmail.includes("<") && fromEmail.includes(">")) {
    return fromEmail
  }

  return `${fromName} <${fromEmail}>`
}

function getInternalRecipients() {
  const recipients = getRequiredEnv("RESEND_MEMBER_REQUEST_TO")
    .split(",")
    .map((recipient) => recipient.trim())
    .filter(Boolean)

  if (recipients.length === 0) {
    throw new Error("RESEND_MEMBER_REQUEST_TO must contain at least one recipient.")
  }

  return recipients
}

function getSupportEmail() {
  return process.env.RESEND_SUPPORT_EMAIL?.trim() || getInternalRecipients()[0]
}

async function sendTemplateEmail({
  to,
  templateId,
  variables,
  replyTo,
}: {
  to: string[]
  templateId: string
  variables: Record<string, string>
  replyTo?: string
}) {
  const { error } = await getResendClient().emails.send({
    from: getFromAddress(),
    to,
    replyTo,
    template: {
      id: templateId,
      variables,
    },
  })

  if (error) {
    throw new Error(error.message || `Failed to send email for template ${templateId}`)
  }
}

export async function sendMemberRequestEmails({
  request,
  requestId,
  submittedAt,
}: {
  request: MemberRequestPayload
  requestId: string
  submittedAt: Date
}) {
  const siteUrl = getSiteUrl()
  const supportEmail = getSupportEmail()
  const submittedAtLabel = formatSubmittedAt(submittedAt)
  const xHandle = formatXHandle(request.xHandle)
  const commonVariables = {
    COMMUNITY_NAME: siteName,
    MEMBER_NAME: request.fullName,
    MEMBER_EMAIL: request.email,
    MEMBER_X_HANDLE: xHandle,
    MEMBER_SKILL: request.primarySkill,
    MEMBER_REASON: request.reason,
    REQUEST_ID: requestId,
    SITE_URL: siteUrl,
    TEAM_EMAIL: supportEmail,
  }

  await Promise.all([
    sendTemplateEmail({
      to: getInternalRecipients(),
      replyTo: request.email,
      templateId: memberRequestTemplateIds.internal,
      variables: {
        ...commonVariables,
        REVIEW_URL: `${siteUrl}/#membership-form`,
        SUBMITTED_AT: submittedAtLabel,
      },
    }),
    sendTemplateEmail({
      to: [request.email],
      templateId: memberRequestTemplateIds.received,
      variables: {
        ...commonVariables,
        RESOURCES_URL: `${siteUrl}/#recursos`,
        RESPONSE_TIME: "1 a 3 días hábiles",
      },
    }),
  ])
}

export async function sendMemberRequestStatusEmail({
  decision,
}: {
  decision: MemberRequestStatusPayload
}) {
  const siteUrl = getSiteUrl()
  const supportEmail = getSupportEmail()
  const statusNote =
    decision.note?.trim() ||
    (decision.status === "accepted"
      ? "Te contactaremos pronto con los siguientes pasos para integrarte a la comunidad."
      : "Por ahora no podremos avanzar con la solicitud, pero podrás volver a postularte más adelante.")

  if (decision.status === "accepted") {
    await sendTemplateEmail({
      to: [decision.email],
      templateId: memberRequestTemplateIds.accepted,
      variables: {
        COMMUNITY_NAME: siteName,
        MEMBER_NAME: decision.fullName,
        REQUEST_ID: decision.requestId || "pendiente",
        TEAM_EMAIL: supportEmail,
        SITE_URL: siteUrl,
        STATUS_NOTE: statusNote,
        ACTION_URL: decision.actionUrl || `${siteUrl}/#recursos`,
        ACTION_LABEL: decision.actionLabel || "Explorar recursos",
      },
    })

    return
  }

  await sendTemplateEmail({
    to: [decision.email],
    templateId: memberRequestTemplateIds.rejected,
    variables: {
      COMMUNITY_NAME: siteName,
      MEMBER_NAME: decision.fullName,
      REQUEST_ID: decision.requestId || "pendiente",
      TEAM_EMAIL: supportEmail,
      SITE_URL: siteUrl,
      STATUS_NOTE: statusNote,
      REAPPLY_URL: decision.actionUrl || `${siteUrl}/#membership-form`,
    },
  })
}

export function getMemberRequestStatusToken() {
  return process.env.MEMBER_REQUEST_STATUS_TOKEN?.trim() || ""
}