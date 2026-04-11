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

interface MemberRequestReceivedEmailProps {
  COMMUNITY_NAME?: string
  MEMBER_NAME?: string
  MEMBER_EMAIL?: string
  MEMBER_X_HANDLE?: string
  MEMBER_SKILL?: string
  REQUEST_ID?: string
  RESPONSE_TIME?: string
  RESOURCES_URL?: string
  TEAM_EMAIL?: string
}

export default function MemberRequestReceivedEmail({
  COMMUNITY_NAME = "{{{COMMUNITY_NAME}}}",
  MEMBER_NAME = "{{{MEMBER_NAME}}}",
  MEMBER_EMAIL = "{{{MEMBER_EMAIL}}}",
  MEMBER_X_HANDLE = "{{{MEMBER_X_HANDLE}}}",
  MEMBER_SKILL = "{{{MEMBER_SKILL}}}",
  REQUEST_ID = "{{{REQUEST_ID}}}",
  RESPONSE_TIME = "{{{RESPONSE_TIME}}}",
  RESOURCES_URL = "{{{RESOURCES_URL}}}",
  TEAM_EMAIL = "{{{TEAM_EMAIL}}}",
}: MemberRequestReceivedEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Recibimos tu solicitud de membresía</Preview>
      <Body style={body}>
        <Container style={container}>
          <Section style={badgeRow}>
            <Text style={badge}>Solicitud recibida</Text>
          </Section>
          <Heading style={heading}>Tu solicitud ya está en revisión.</Heading>
          <Text style={paragraph}>
            Hola {MEMBER_NAME}, gracias por postularte a {COMMUNITY_NAME}. Ya recibimos tu solicitud y el equipo revisará la información enviada.
          </Text>

          <Section style={panel}>
            <Text style={detail}><strong>Correo:</strong> {MEMBER_EMAIL}</Text>
            <Text style={detail}><strong>X:</strong> {MEMBER_X_HANDLE}</Text>
            <Text style={detail}><strong>Habilidad principal:</strong> {MEMBER_SKILL}</Text>
            <Text style={detail}><strong>Solicitud:</strong> {REQUEST_ID}</Text>
          </Section>

          <Section style={panel}>
            <Text style={sectionLabel}>Qué sigue</Text>
            <Text style={paragraphCompact}>
              Te responderemos en aproximadamente {RESPONSE_TIME}. Si necesitamos más contexto,
              te escribiremos desde {TEAM_EMAIL}.
            </Text>
          </Section>

          <Button href={RESOURCES_URL} style={primaryButton}>
            Explorar recursos mientras tanto
          </Button>

          <Hr style={divider} />

          <Text style={footer}>
            Si necesitas actualizar tu solicitud, responde a este correo o contáctanos en {TEAM_EMAIL}.
          </Text>
          <Text style={footerLink}>
            <Link href={RESOURCES_URL} style={link}>Ir al sitio</Link>
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
  border: "1px solid rgba(102,213,255,0.22)",
  borderRadius: "999px",
  color: "#66d5ff",
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

const paragraphCompact = {
  color: "#dce7f1",
  fontSize: "15px",
  lineHeight: "26px",
  margin: 0,
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