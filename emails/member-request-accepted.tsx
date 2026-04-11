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

interface MemberRequestAcceptedEmailProps {
  COMMUNITY_NAME?: string
  MEMBER_NAME?: string
  REQUEST_ID?: string
  STATUS_NOTE?: string
  ACTION_URL?: string
  ACTION_LABEL?: string
  TEAM_EMAIL?: string
  SITE_URL?: string
}

export default function MemberRequestAcceptedEmail({
  COMMUNITY_NAME = "{{{COMMUNITY_NAME}}}",
  MEMBER_NAME = "{{{MEMBER_NAME}}}",
  REQUEST_ID = "{{{REQUEST_ID}}}",
  STATUS_NOTE = "{{{STATUS_NOTE}}}",
  ACTION_URL = "{{{ACTION_URL}}}",
  ACTION_LABEL = "{{{ACTION_LABEL}}}",
  TEAM_EMAIL = "{{{TEAM_EMAIL}}}",
  SITE_URL = "{{{SITE_URL}}}",
}: MemberRequestAcceptedEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Tu solicitud fue aprobada</Preview>
      <Body style={body}>
        <Container style={container}>
          <Section style={badgeRow}>
            <Text style={badge}>Solicitud aprobada</Text>
          </Section>
          <Heading style={heading}>Bienvenido a {COMMUNITY_NAME}</Heading>
          <Text style={paragraph}>
            Hola {MEMBER_NAME}, revisamos tu solicitud y nos alegra confirmarte que fue aprobada.
          </Text>

          <Section style={panel}>
            <Text style={detail}><strong>Solicitud:</strong> {REQUEST_ID}</Text>
            <Text style={detail}><strong>Siguiente paso:</strong> {STATUS_NOTE}</Text>
          </Section>

          <Button href={ACTION_URL} style={primaryButton}>
            {ACTION_LABEL}
          </Button>

          <Hr style={divider} />

          <Text style={footer}>
            Si tienes preguntas, puedes escribirnos a {TEAM_EMAIL}.
          </Text>
          <Text style={footerLink}>
            <Link href={SITE_URL} style={link}>Volver a {COMMUNITY_NAME}</Link>
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
  lineHeight: "26px",
  margin: "0 0 10px",
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