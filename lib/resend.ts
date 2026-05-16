import "server-only"

import { Resend } from "resend"

import type { Locale } from "@/i18n/routing"
import { siteName } from "@/lib/home-content"
import {
  getMemberRequestCopy,
  getSkillLabel,
  formatSubmittedAt,
  formatXHandle,
  type MemberRequestPayload,
  type MemberRequestStatusPayload,
} from "@/lib/member-request"
import { getMemberRequestTemplateId } from "@/lib/resend-template-ids"

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
  locale,
  request,
  requestId,
  submittedAt,
}: {
  locale: Locale
  request: MemberRequestPayload
  requestId: string
  submittedAt: Date
}) {
  const siteUrl = getSiteUrl()
  const supportEmail = getSupportEmail()
  const copy = getMemberRequestCopy(locale)
  const submittedAtLabel = formatSubmittedAt(submittedAt, locale)
  const xHandle = formatXHandle(request.xHandle)
  const commonVariables = {
    COMMUNITY_NAME: siteName,
    MEMBER_NAME: request.fullName,
    MEMBER_EMAIL: request.email,
    MEMBER_X_HANDLE: xHandle,
    MEMBER_SKILL: getSkillLabel(request.primarySkill, locale),
    MEMBER_REASON: request.reason,
    REQUEST_ID: requestId,
    SITE_URL: siteUrl,
    TEAM_EMAIL: supportEmail,
  }

  await Promise.all([
    sendTemplateEmail({
      to: getInternalRecipients(),
      replyTo: request.email,
      templateId: getMemberRequestTemplateId("internal", locale),
      variables: {
        ...commonVariables,
        REVIEW_URL: getLocalizedSiteSectionUrl(siteUrl, locale, "membership-form"),
        SUBMITTED_AT: submittedAtLabel,
      },
    }),
    sendTemplateEmail({
      to: [request.email],
      templateId: getMemberRequestTemplateId("received", locale),
      variables: {
        ...commonVariables,
        RESOURCES_URL: getLocalizedSiteSectionUrl(siteUrl, locale, "recursos"),
        RESPONSE_TIME: copy.emails.receivedResponseTime,
      },
    }),
  ])
}

export async function sendMemberRequestStatusEmail({
  locale,
  decision,
}: {
  locale: Locale
  decision: MemberRequestStatusPayload
}) {
  const siteUrl = getSiteUrl()
  const supportEmail = getSupportEmail()
  const copy = getMemberRequestCopy(locale)
  const statusNote =
    decision.note?.trim() ||
    (decision.status === "accepted"
      ? copy.emails.acceptedDefaultNote
      : copy.emails.rejectedDefaultNote)

  if (decision.status === "accepted") {
    await sendTemplateEmail({
      to: [decision.email],
      templateId: getMemberRequestTemplateId("accepted", locale),
      variables: {
        COMMUNITY_NAME: siteName,
        MEMBER_NAME: decision.fullName,
        REQUEST_ID: decision.requestId || (locale === "en" ? "pending" : "pendiente"),
        TEAM_EMAIL: supportEmail,
        SITE_URL: siteUrl,
        STATUS_NOTE: statusNote,
        ACTION_URL:
          decision.actionUrl || getLocalizedSiteSectionUrl(siteUrl, locale, "recursos"),
        ACTION_LABEL: decision.actionLabel || copy.emails.acceptedDefaultActionLabel,
      },
    })

    return
  }

  await sendTemplateEmail({
    to: [decision.email],
    templateId: getMemberRequestTemplateId("rejected", locale),
    variables: {
      COMMUNITY_NAME: siteName,
      MEMBER_NAME: decision.fullName,
      REQUEST_ID: decision.requestId || (locale === "en" ? "pending" : "pendiente"),
      TEAM_EMAIL: supportEmail,
      SITE_URL: siteUrl,
      STATUS_NOTE: statusNote,
      REAPPLY_URL:
        decision.actionUrl || getLocalizedSiteSectionUrl(siteUrl, locale, "membership-form"),
    },
  })
}

export function getMemberRequestStatusToken() {
  return process.env.MEMBER_REQUEST_STATUS_TOKEN?.trim() || ""
}

function getLocalizedSiteSectionUrl(siteUrl: string, locale: Locale, hash: string) {
  return `${siteUrl}/${locale}#${hash}`
}