import {
  createMemberRequestSchema,
  getMemberRequestCopy,
  normalizeRequestLocale,
} from "@/lib/member-request"
import { sendMemberRequestEmails } from "@/lib/resend"

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url)
  const locale = normalizeRequestLocale(searchParams.get("locale"))
  const copy = getMemberRequestCopy(locale)
  let payload: unknown

  try {
    payload = await request.json()
  } catch {
    return Response.json(
      {
        message: copy.api.unreadableRequest,
      },
      { status: 400 }
    )
  }

  const parsed = createMemberRequestSchema(locale).safeParse(payload)

  if (!parsed.success) {
    return Response.json(
      {
        message: copy.api.invalidForm,
        fieldErrors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 }
    )
  }

  const requestId = crypto.randomUUID()
  const submittedAt = new Date()

  try {
    await sendMemberRequestEmails({
      locale,
      request: parsed.data,
      requestId,
      submittedAt,
    })
  } catch (error) {
    console.error("Failed to send member request emails", error)

    return Response.json(
      {
        message: copy.api.sendFailure,
      },
      { status: 500 }
    )
  }

  return Response.json(
    {
      message: copy.api.success,
      requestId,
    },
    { status: 201 }
  )
}