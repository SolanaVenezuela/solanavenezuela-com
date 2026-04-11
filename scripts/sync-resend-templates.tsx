import fs from "node:fs"
import path from "node:path"

import * as React from "react"
import { render } from "@react-email/components"
import { Resend } from "resend"

import MemberRequestAcceptedEmail from "@/emails/member-request-accepted"
import MemberRequestInternalEmail from "@/emails/member-request-internal"
import MemberRequestReceivedEmail from "@/emails/member-request-received"
import MemberRequestRejectedEmail from "@/emails/member-request-rejected"
import { memberRequestTemplateIds } from "@/lib/resend-template-ids"

type TemplateVariable = {
  key: string
} & (
  | {
      type: "string"
      fallbackValue?: string | null
    }
  | {
      type: "number"
      fallbackValue?: number | null
    }
)

type TemplateConfig = {
  alias: string
  name: string
  subject: string
  variables: TemplateVariable[]
  render: () => React.ReactNode
}

const rootDir = process.cwd()

loadEnvFile(path.join(rootDir, ".env"))
loadEnvFile(path.join(rootDir, ".env.local"))

const resendApiKey = requireEnv("RESEND_API_KEY")
const resendFromEmail = requireEnv("RESEND_FROM_EMAIL")
const resendFromName = process.env.RESEND_FROM_NAME?.trim() || "Solana Venezuela"
const resendFromAddress = formatFromAddress(resendFromEmail, resendFromName)

const resend = new Resend(resendApiKey)
const templateConfigs: TemplateConfig[] = [
  {
    alias: memberRequestTemplateIds.internal,
    name: "Solana Venezuela - Member Request Internal",
    subject: "Nueva solicitud de membresía - {{{MEMBER_NAME}}}",
    variables: [
      stringVariable("COMMUNITY_NAME", "Solana Venezuela"),
      stringVariable("MEMBER_NAME", "Juan Pérez"),
      stringVariable("MEMBER_EMAIL", "juan@example.com"),
      stringVariable("MEMBER_X_HANDLE", "@juanbuilder"),
      stringVariable("MEMBER_SKILL", "Desarrollador (Rust/Anchor)"),
      stringVariable("MEMBER_REASON", "Quiero aportar contenido y desarrollo a la comunidad."),
      stringVariable("REQUEST_ID", "req_123456"),
      stringVariable("SUBMITTED_AT", "11 de abril de 2026, 10:00 a. m."),
      stringVariable("REVIEW_URL", "https://solanavenezuela.com/#membership-form"),
      stringVariable("TEAM_EMAIL", "team@solanavenezuela.com"),
    ],
    render: () => <MemberRequestInternalEmail />,
  },
  {
    alias: memberRequestTemplateIds.received,
    name: "Solana Venezuela - Member Request Received",
    subject: "Recibimos tu solicitud en {{{COMMUNITY_NAME}}}",
    variables: [
      stringVariable("COMMUNITY_NAME", "Solana Venezuela"),
      stringVariable("MEMBER_NAME", "Juan Pérez"),
      stringVariable("MEMBER_EMAIL", "juan@example.com"),
      stringVariable("MEMBER_X_HANDLE", "@juanbuilder"),
      stringVariable("MEMBER_SKILL", "Desarrollador (Rust/Anchor)"),
      stringVariable("REQUEST_ID", "req_123456"),
      stringVariable("RESPONSE_TIME", "1 a 3 días hábiles"),
      stringVariable("RESOURCES_URL", "https://solanavenezuela.com/#recursos"),
      stringVariable("TEAM_EMAIL", "team@solanavenezuela.com"),
    ],
    render: () => <MemberRequestReceivedEmail />,
  },
  {
    alias: memberRequestTemplateIds.accepted,
    name: "Solana Venezuela - Member Request Accepted",
    subject: "Tu solicitud fue aprobada - {{{COMMUNITY_NAME}}}",
    variables: [
      stringVariable("COMMUNITY_NAME", "Solana Venezuela"),
      stringVariable("MEMBER_NAME", "Juan Pérez"),
      stringVariable("REQUEST_ID", "req_123456"),
      stringVariable("STATUS_NOTE", "Te contactaremos con los siguientes pasos del onboarding."),
      stringVariable("ACTION_URL", "https://solanavenezuela.com/#recursos"),
      stringVariable("ACTION_LABEL", "Explorar recursos"),
      stringVariable("TEAM_EMAIL", "team@solanavenezuela.com"),
      stringVariable("SITE_URL", "https://solanavenezuela.com"),
    ],
    render: () => <MemberRequestAcceptedEmail />,
  },
  {
    alias: memberRequestTemplateIds.rejected,
    name: "Solana Venezuela - Member Request Rejected",
    subject: "Actualización sobre tu solicitud - {{{COMMUNITY_NAME}}}",
    variables: [
      stringVariable("COMMUNITY_NAME", "Solana Venezuela"),
      stringVariable("MEMBER_NAME", "Juan Pérez"),
      stringVariable("REQUEST_ID", "req_123456"),
      stringVariable("STATUS_NOTE", "Por ahora no podremos avanzar, pero puedes volver a postularte más adelante."),
      stringVariable("REAPPLY_URL", "https://solanavenezuela.com/#membership-form"),
      stringVariable("TEAM_EMAIL", "team@solanavenezuela.com"),
      stringVariable("SITE_URL", "https://solanavenezuela.com"),
    ],
    render: () => <MemberRequestRejectedEmail />,
  },
]

async function main() {
  const templates = await resend.templates.list()

  if (templates.error) {
    throw new Error(templates.error.message || "Failed to list templates from Resend.")
  }

  for (const config of templateConfigs) {
    const existingTemplate = templates.data?.data.find(
      (template) => template.alias === config.alias || template.name === config.name
    )
    const html = await render(config.render())
    const payload = {
      alias: config.alias,
      from: resendFromAddress,
      html,
      name: config.name,
      subject: config.subject,
      variables: config.variables,
    }

    if (!existingTemplate) {
      const result = await resend.templates.create(payload).publish()

      if (result.error) {
        throw new Error(result.error.message || `Failed to create template ${config.alias}.`)
      }

      console.log(`created:${config.alias}:${result.data?.id || "unknown"}`)
      continue
    }

    const updateResult = await resend.templates.update(existingTemplate.id, payload)

    if (updateResult.error) {
      throw new Error(updateResult.error.message || `Failed to update template ${config.alias}.`)
    }

    const publishResult = await resend.templates.publish(existingTemplate.id)

    if (publishResult.error) {
      throw new Error(publishResult.error.message || `Failed to publish template ${config.alias}.`)
    }

    console.log(`updated:${config.alias}:${existingTemplate.id}`)
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error)
  process.exitCode = 1
})

function stringVariable(key: string, fallbackValue: string): TemplateVariable {
  return {
    key,
    type: "string",
    fallbackValue,
  }
}

function requireEnv(name: string) {
  const value = process.env[name]?.trim()

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }

  return value
}

function formatFromAddress(fromEmail: string, fromName: string) {
  if (fromEmail.includes("<") && fromEmail.includes(">")) {
    return fromEmail
  }

  return `${fromName} <${fromEmail}>`
}

function loadEnvFile(filePath: string) {
  if (!fs.existsSync(filePath)) {
    return
  }

  const fileContent = fs.readFileSync(filePath, "utf8")

  for (const line of fileContent.split(/\r?\n/)) {
    const trimmed = line.trim()

    if (!trimmed || trimmed.startsWith("#")) {
      continue
    }

    const separatorIndex = line.indexOf("=")

    if (separatorIndex < 0) {
      continue
    }

    const key = line.slice(0, separatorIndex).trim()

    if (!key || process.env[key]) {
      continue
    }

    let value = line.slice(separatorIndex + 1).trim()

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1)
    }

    process.env[key] = value
  }
}