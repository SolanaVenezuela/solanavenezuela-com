import {
  createMemberRequestStatusSchema,
  getMemberRequestCopy,
  normalizeRequestLocale,
} from "@/lib/member-request"
import {
  getMemberRequestStatusToken,
  sendMemberRequestStatusEmail,
} from "@/lib/resend"

const adminTokenHeader = "x-member-request-admin-token"

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url)
  const locale = normalizeRequestLocale(searchParams.get("locale"))
  const copy = getMemberRequestCopy(locale)
  const expectedToken = getMemberRequestStatusToken()

  if (!expectedToken) {
    return Response.json(
      {
        message: copy.statusApi.missingToken,
      },
      { status: 500 }
    )
  }

  if (request.headers.get(adminTokenHeader) !== expectedToken) {
    return Response.json(
      {
        message: copy.statusApi.unauthorized,
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
        message: copy.statusApi.unreadableRequest,
      },
      { status: 400 }
    )
  }

  const parsed = createMemberRequestStatusSchema(locale).safeParse(payload)

  if (!parsed.success) {
    return Response.json(
      {
        message: copy.statusApi.invalidPayload,
        fieldErrors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 }
    )
  }

  try {
    await sendMemberRequestStatusEmail({ decision: parsed.data, locale })
  } catch (error) {
    console.error("Failed to send member request status email", error)

    return Response.json(
      {
        message: copy.statusApi.emailFailed,
      },
      { status: 500 }
    )
  }

  return Response.json({
    message:
      parsed.data.status === "accepted"
        ? copy.statusApi.acceptedSent
        : copy.statusApi.rejectedSent,
  })
}