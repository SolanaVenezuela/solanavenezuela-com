import type { Locale } from "@/i18n/routing"

export type MemberRequestTemplateKey = keyof typeof memberRequestTemplateIds

export const memberRequestTemplateIds = {
  internal: {
    es: "solana-venezuela-member-request-internal-es",
    en: "solana-venezuela-member-request-internal-en",
  },
  received: {
    es: "solana-venezuela-member-request-received-es",
    en: "solana-venezuela-member-request-received-en",
  },
  accepted: {
    es: "solana-venezuela-member-request-accepted-es",
    en: "solana-venezuela-member-request-accepted-en",
  },
  rejected: {
    es: "solana-venezuela-member-request-rejected-es",
    en: "solana-venezuela-member-request-rejected-en",
  },
} as const satisfies Record<
  "internal" | "received" | "accepted" | "rejected",
  Record<Locale, string>
>

export function getMemberRequestTemplateId(
  kind: MemberRequestTemplateKey,
  locale: Locale
) {
  return memberRequestTemplateIds[kind][locale]
}