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

interface MemberRequestRejectedEmailProps {
  locale?: Locale
  COMMUNITY_NAME?: string
  MEMBER_NAME?: string
  REQUEST_ID?: string
  STATUS_NOTE?: string
  REAPPLY_URL?: string
  TEAM_EMAIL?: string
  SITE_URL?: string
}

export default function MemberRequestRejectedEmail({
  locale = "es",
  COMMUNITY_NAME = "{{{COMMUNITY_NAME}}}",
  MEMBER_NAME = "{{{MEMBER_NAME}}}",
  REQUEST_ID = "{{{REQUEST_ID}}}",
  STATUS_NOTE = "{{{STATUS_NOTE}}}",
  REAPPLY_URL = "{{{REAPPLY_URL}}}",
  TEAM_EMAIL = "{{{TEAM_EMAIL}}}",
  SITE_URL = "{{{SITE_URL}}}",
}: MemberRequestRejectedEmailProps) {
  const isSpanish = locale === "es"

  return (
    <Html>
      <Head />
      <Preview>
        {isSpanish
          ? "Actualización sobre tu solicitud de membresía"
          : "Update on your membership request"}
      </Preview>
      <Body style={body}>
        <Container style={container}>
          <Section style={badgeRow}>
            <Text style={badge}>{isSpanish ? "Actualización" : "Update"}</Text>
          </Section>
          <Heading style={heading}>
            {isSpanish
              ? `Gracias por tu interés en ${COMMUNITY_NAME}`
              : `Thanks for your interest in ${COMMUNITY_NAME}`}
          </Heading>
          <Text style={paragraph}>
            {isSpanish
              ? `Hola ${MEMBER_NAME}, revisamos tu solicitud y por ahora no podremos avanzar con esta postulación.`
              : `Hi ${MEMBER_NAME}, we reviewed your request and cannot move forward with this application right now.`}
          </Text>

          <Section style={panel}>
            <Text style={detail}><strong>{isSpanish ? "Solicitud" : "Request"}:</strong> {REQUEST_ID}</Text>
            <Text style={detail}><strong>{isSpanish ? "Nota del equipo" : "Team note"}:</strong> {STATUS_NOTE}</Text>
          </Section>

          <Button href={REAPPLY_URL} style={secondaryButton}>
            {isSpanish ? "Volver a postularme más adelante" : "Apply again later"}
          </Button>

          <Hr style={divider} />

          <Text style={footer}>
            {isSpanish
              ? `Si necesitas más contexto, puedes escribirnos a ${TEAM_EMAIL}. Seguiremos compartiendo recursos y oportunidades en ${COMMUNITY_NAME}.`
              : `If you need more context, you can reach us at ${TEAM_EMAIL}. We will keep sharing resources and opportunities through ${COMMUNITY_NAME}.`}
          </Text>
          <Text style={footerLink}>
            <Link href={SITE_URL} style={link}>
              {isSpanish ? "Visitar el sitio" : "Visit the site"}
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
  border: "1px solid rgba(255,201,101,0.28)",
  borderRadius: "999px",
  color: "#ffc965",
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

const secondaryButton = {
  backgroundColor: "#1f2630",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "999px",
  color: "#f7fbff",
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