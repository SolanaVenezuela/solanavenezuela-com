import * as React from "react"
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components"

import type { Locale } from "@/i18n/routing"

interface MemberRequestInternalEmailProps {
  locale?: Locale
  COMMUNITY_NAME?: string
  MEMBER_NAME?: string
  MEMBER_EMAIL?: string
  MEMBER_X_HANDLE?: string
  MEMBER_SKILL?: string
  MEMBER_REASON?: string
  REQUEST_ID?: string
  SUBMITTED_AT?: string
  REVIEW_URL?: string
  TEAM_EMAIL?: string
}

export default function MemberRequestInternalEmail({
  locale = "es",
  COMMUNITY_NAME = "{{{COMMUNITY_NAME}}}",
  MEMBER_NAME = "{{{MEMBER_NAME}}}",
  MEMBER_EMAIL = "{{{MEMBER_EMAIL}}}",
  MEMBER_X_HANDLE = "{{{MEMBER_X_HANDLE}}}",
  MEMBER_SKILL = "{{{MEMBER_SKILL}}}",
  MEMBER_REASON = "{{{MEMBER_REASON}}}",
  REQUEST_ID = "{{{REQUEST_ID}}}",
  SUBMITTED_AT = "{{{SUBMITTED_AT}}}",
  REVIEW_URL = "{{{REVIEW_URL}}}",
  TEAM_EMAIL = "{{{TEAM_EMAIL}}}",
}: MemberRequestInternalEmailProps) {
  const isSpanish = locale === "es"

  return (
    <Html>
      <Head />
      <Preview>
        {isSpanish
          ? `Nueva solicitud de membresía de ${MEMBER_NAME}`
          : `New membership request from ${MEMBER_NAME}`}
      </Preview>
      <Body style={body}>
        <Container style={container}>
          <Section style={badgeRow}>
            <Text style={badge}>{isSpanish ? "Solicitud interna" : "Internal request"}</Text>
          </Section>
          <Heading style={heading}>
            {isSpanish ? "Nueva solicitud de membresía" : "New membership request"}
          </Heading>
          <Text style={paragraph}>
            {isSpanish
              ? `Se recibió una nueva solicitud para ${COMMUNITY_NAME}. Estos son los datos enviados por la persona interesada.`
              : `A new request for ${COMMUNITY_NAME} has been received. These are the details submitted by the interested person.`}
          </Text>

          <Section style={panel}>
            <Text style={detail}><strong>{isSpanish ? "Nombre" : "Name"}:</strong> {MEMBER_NAME}</Text>
            <Text style={detail}><strong>{isSpanish ? "Correo" : "Email"}:</strong> {MEMBER_EMAIL}</Text>
            <Text style={detail}><strong>X:</strong> {MEMBER_X_HANDLE}</Text>
            <Text style={detail}><strong>{isSpanish ? "Habilidad principal" : "Primary skill"}:</strong> {MEMBER_SKILL}</Text>
            <Text style={detail}><strong>{isSpanish ? "Solicitud" : "Request"}:</strong> {REQUEST_ID}</Text>
            <Text style={detail}><strong>{isSpanish ? "Enviada el" : "Submitted on"}:</strong> {SUBMITTED_AT}</Text>
          </Section>

          <Section style={panel}>
            <Text style={sectionLabel}>{isSpanish ? "Motivación" : "Motivation"}</Text>
            <Text style={reason}>{MEMBER_REASON}</Text>
          </Section>

          <Button href={REVIEW_URL} style={primaryButton}>
            {isSpanish ? "Revisar solicitud" : "Review request"}
          </Button>

          <Hr style={divider} />

          <Text style={footer}>
            {isSpanish
              ? `Este correo se envió a ${TEAM_EMAIL}. Puedes responder directamente para continuar la revisión.`
              : `This email was sent to ${TEAM_EMAIL}. You can reply directly to continue the review.`}
          </Text>
          <Text style={footerLink}>
            <Link href={REVIEW_URL} style={link}>
              {isSpanish ? "Abrir formulario" : "Open form"}
            </Link>
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

const body = {
  backgroundColor: "#0c0f13",
  color: "#f7fbff",
  fontFamily: "Inter, Helvetica, Arial, sans-serif",
  margin: 0,
  padding: "32px 16px",
}

const container = {
  backgroundColor: "#14181d",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "28px",
  margin: "0 auto",
  maxWidth: "640px",
  padding: "32px",
}

const badgeRow = {
  marginBottom: "18px",
}

const badge = {
  border: "1px solid rgba(52,254,160,0.24)",
  borderRadius: "999px",
  color: "#34fea0",
  display: "inline-block",
  fontSize: "11px",
  fontWeight: 700,
  letterSpacing: "0.28em",
  margin: 0,
  padding: "8px 14px",
  textTransform: "uppercase" as const,
}

const heading = {
  color: "#f7fbff",
  fontFamily: "'Space Grotesk', Inter, Helvetica, Arial, sans-serif",
  fontSize: "34px",
  fontWeight: 700,
  letterSpacing: "-0.04em",
  lineHeight: 1.05,
  margin: "0 0 18px",
}

const paragraph = {
  color: "#a4afbd",
  fontSize: "16px",
  lineHeight: "28px",
  margin: "0 0 24px",
}

const panel = {
  backgroundColor: "#171b20",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "20px",
  marginBottom: "18px",
  padding: "20px 22px",
}

const detail = {
  color: "#f7fbff",
  fontSize: "15px",
  lineHeight: "24px",
  margin: "0 0 10px",
}

const sectionLabel = {
  color: "#34fea0",
  fontSize: "12px",
  fontWeight: 700,
  letterSpacing: "0.2em",
  margin: "0 0 12px",
  textTransform: "uppercase" as const,
}

const reason = {
  color: "#dce7f1",
  fontSize: "15px",
  lineHeight: "28px",
  margin: 0,
  whiteSpace: "pre-line" as const,
}

const primaryButton = {
  background: "linear-gradient(135deg, #19fb9b 0%, #43b4ca 48%, #9945ff 100%)",
  borderRadius: "999px",
  color: "#050816",
  display: "inline-block",
  fontSize: "15px",
  fontWeight: 700,
  padding: "14px 22px",
  textDecoration: "none",
}

const divider = {
  borderColor: "rgba(255,255,255,0.08)",
  margin: "28px 0 18px",
}

const footer = {
  color: "#8d9aaa",
  fontSize: "13px",
  lineHeight: "22px",
  margin: "0 0 10px",
}

const footerLink = {
  margin: 0,
}

const link = {
  color: "#66d5ff",
  textDecoration: "underline",
}