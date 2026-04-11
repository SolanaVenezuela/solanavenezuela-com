# Resend Member Requests

Esta integración usa Resend con Templates publicados en el dashboard.

## Crear y publicar templates por API

Puedes crearlos y publicarlos automáticamente con:

```bash
pnpm resend:sync-templates
```

Ese comando:

- crea los 4 templates si no existen
- actualiza el HTML, asunto, alias y variables si ya existen
- publica la última versión en Resend

## Variables de entorno

Configura estos valores en tu entorno real:

- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `RESEND_FROM_NAME`
- `RESEND_MEMBER_REQUEST_TO`
- `RESEND_SUPPORT_EMAIL`
- `MEMBER_REQUEST_STATUS_TOKEN`
- `NEXT_PUBLIC_SITE_URL`

## Templates que debes crear en Resend

Crea y publica estos templates con estos aliases exactos:

- `solana-venezuela-member-request-internal`
- `solana-venezuela-member-request-received`
- `solana-venezuela-member-request-accepted`
- `solana-venezuela-member-request-rejected`

Archivos listos para base:

- `emails/member-request-internal.tsx`
- `emails/member-request-received.tsx`
- `emails/member-request-accepted.tsx`
- `emails/member-request-rejected.tsx`

El script usa estos componentes React Email como fuente:

- `emails/member-request-internal.tsx`
- `emails/member-request-received.tsx`
- `emails/member-request-accepted.tsx`
- `emails/member-request-rejected.tsx`

## Rutas API

`POST /api/member-requests`

Payload JSON:

```json
{
  "fullName": "Juan Pérez",
  "email": "juan@example.com",
  "xHandle": "juanbuilder",
  "primarySkill": "Desarrollador (Rust/Anchor)",
  "reason": "Quiero aportar a la comunidad con educación y desarrollo."
}
```

Resultado:

- Envía un correo interno al equipo.
- Envía un acuse de recibo a la persona solicitante.

`POST /api/member-requests/status`

Header requerido:

```text
x-member-request-admin-token: <MEMBER_REQUEST_STATUS_TOKEN>
```

Payload para aceptación:

```json
{
  "fullName": "Juan Pérez",
  "email": "juan@example.com",
  "status": "accepted",
  "requestId": "abc-123",
  "note": "Nos gustaría sumarte al próximo onboarding.",
  "actionUrl": "https://solanavenezuela.com/#recursos",
  "actionLabel": "Explorar recursos"
}
```

Payload para rechazo:

```json
{
  "fullName": "Juan Pérez",
  "email": "juan@example.com",
  "status": "rejected",
  "requestId": "abc-123",
  "note": "Por ahora no podremos avanzar, pero puedes volver a postularte más adelante.",
  "actionUrl": "https://solanavenezuela.com/#membership-form"
}
```