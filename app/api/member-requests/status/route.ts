import { memberRequestStatusSchema } from "@/lib/member-request"
import {
  getMemberRequestStatusToken,
  sendMemberRequestStatusEmail,
} from "@/lib/resend"

const adminTokenHeader = "x-member-request-admin-token"

export async function POST(request: Request) {
  const expectedToken = getMemberRequestStatusToken()

  if (!expectedToken) {
    return Response.json(
      {
        message: "Configura MEMBER_REQUEST_STATUS_TOKEN antes de usar esta ruta.",
      },
      { status: 500 }
    )
  }

  if (request.headers.get(adminTokenHeader) !== expectedToken) {
    return Response.json(
      {
        message: "No autorizado.",
      },
      { status: 401 }
    )
  }

  let payload: unknown

  try {
    payload = await request.json()
  } catch {
    return Response.json(
      {
        message: "No pudimos leer la solicitud enviada.",
      },
      { status: 400 }
    )
  }

  const parsed = memberRequestStatusSchema.safeParse(payload)

  if (!parsed.success) {
    return Response.json(
      {
        message: "Revisa el payload e inténtalo de nuevo.",
        fieldErrors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 }
    )
  }

  try {
    await sendMemberRequestStatusEmail({ decision: parsed.data })
  } catch (error) {
    console.error("Failed to send member request status email", error)

    return Response.json(
      {
        message: "No pudimos enviar el correo de estado en este momento.",
      },
      { status: 500 }
    )
  }

  return Response.json({
    message:
      parsed.data.status === "accepted"
        ? "Correo de aceptación enviado."
        : "Correo de rechazo enviado.",
  })
}