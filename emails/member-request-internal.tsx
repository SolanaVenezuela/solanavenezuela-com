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

interface MemberRequestInternalEmailProps {
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
  return (
    <Html>
      <Head />
      <Preview>Nueva solicitud de membresía de {MEMBER_NAME}</Preview>
      <Body style={body}>
        <Container style={container}>
          <Section style={badgeRow}>
            <Text style={badge}>Solicitud interna</Text>
          </Section>
          <Heading style={heading}>Nueva solicitud de membresía</Heading>
          <Text style={paragraph}>
            Se recibió una nueva solicitud para {COMMUNITY_NAME}. Estos son los datos enviados por la persona interesada.
          </Text>

          <Section style={panel}>
            <Text style={detail}><strong>Nombre:</strong> {MEMBER_NAME}</Text>
            <Text style={detail}><strong>Correo:</strong> {MEMBER_EMAIL}</Text>
            <Text style={detail}><strong>X:</strong> {MEMBER_X_HANDLE}</Text>
            <Text style={detail}><strong>Habilidad principal:</strong> {MEMBER_SKILL}</Text>
            <Text style={detail}><strong>Solicitud:</strong> {REQUEST_ID}</Text>
            <Text style={detail}><strong>Enviada el:</strong> {SUBMITTED_AT}</Text>
          </Section>

          <Section style={panel}>
            <Text style={sectionLabel}>Motivación</Text>
            <Text style={reason}>{MEMBER_REASON}</Text>
          </Section>

          <Button href={REVIEW_URL} style={primaryButton}>
            Revisar solicitud
          </Button>

          <Hr style={divider} />

          <Text style={footer}>
            Este correo se envió a {TEAM_EMAIL}. Puedes responder directamente para continuar la revisión.
          </Text>
          <Text style={footerLink}>
            <Link href={REVIEW_URL} style={link}>Abrir formulario</Link>
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