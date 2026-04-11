import { memberRequestSchema } from "@/lib/member-request"
import { sendMemberRequestEmails } from "@/lib/resend"

export async function POST(request: Request) {
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

  const parsed = memberRequestSchema.safeParse(payload)

  if (!parsed.success) {
    return Response.json(
      {
        message: "Revisa los campos del formulario e inténtalo de nuevo.",
        fieldErrors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 }
    )
  }

  const requestId = crypto.randomUUID()
  const submittedAt = new Date()

  try {
    await sendMemberRequestEmails({
      request: parsed.data,
      requestId,
      submittedAt,
    })
  } catch (error) {
    console.error("Failed to send member request emails", error)

    return Response.json(
      {
        message: "No pudimos enviar tu solicitud en este momento. Inténtalo nuevamente en unos minutos.",
      },
      { status: 500 }
    )
  }

  return Response.json(
    {
      message: "Recibimos tu solicitud y ya enviamos el acuse de recibo a tu correo.",
      requestId,
    },
    { status: 201 }
  )
}