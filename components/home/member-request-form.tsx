"use client"

import * as React from "react"

import { skillOptions } from "@/lib/home-content"
import type { MemberRequestFieldErrors, MemberRequestInput } from "@/lib/member-request"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

type SkillOption = (typeof skillOptions)[number]
type SubmissionState = "idle" | "submitting" | "success" | "error"

interface MemberRequestApiResponse {
  message?: string
  fieldErrors?: MemberRequestFieldErrors
}

function FieldError({ errors }: { errors?: string[] }) {
  if (!errors?.[0]) {
    return null
  }

  return <p className="text-sm text-[#ff8c88]">{errors[0]}</p>
}

export function MemberRequestForm() {
  const defaultSkill = skillOptions[0]
  const formRef = React.useRef<HTMLFormElement>(null)
  const [selectedSkill, setSelectedSkill] = React.useState<SkillOption>(defaultSkill)
  const [submissionState, setSubmissionState] = React.useState<SubmissionState>("idle")
  const [feedbackMessage, setFeedbackMessage] = React.useState("")
  const [fieldErrors, setFieldErrors] = React.useState<MemberRequestFieldErrors>({})

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const payload: MemberRequestInput = {
      fullName: String(formData.get("fullName") || ""),
      email: String(formData.get("email") || ""),
      xHandle: String(formData.get("xHandle") || ""),
      primarySkill: String(formData.get("primarySkill") || selectedSkill) as SkillOption,
      reason: String(formData.get("reason") || ""),
    }

    setSubmissionState("submitting")
    setFeedbackMessage("")
    setFieldErrors({})

    try {
      const response = await fetch("/api/member-requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      const result = (await response.json().catch(() => null)) as MemberRequestApiResponse | null

      if (!response.ok) {
        setSubmissionState("error")
        setFeedbackMessage(
          result?.message || "No pudimos enviar tu solicitud. Inténtalo nuevamente."
        )
        setFieldErrors(result?.fieldErrors || {})
        return
      }

      formRef.current?.reset()
      setSelectedSkill(defaultSkill)
      setSubmissionState("success")
      setFeedbackMessage(
        result?.message ||
          "Recibimos tu solicitud. Revisa tu correo para confirmar el acuse de recibo."
      )
    } catch {
      setSubmissionState("error")
      setFeedbackMessage("No pudimos conectar con el servicio de envío. Inténtalo nuevamente.")
    }
  }

  function handleSkillChange(value: string | null) {
    if (typeof value === "string" && skillOptions.includes(value as SkillOption)) {
      setSelectedSkill(value as SkillOption)
    }
  }

  const fieldClassName =
    "form-line h-12 border-b-white/12 px-4! text-white placeholder:text-muted-foreground"
  const selectClassName =
    "form-line h-12 w-full rounded-none border-b-white/12 bg-transparent px-4! text-white"
  const textAreaClassName =
    "form-line min-h-36 border-b-white/12 px-4! text-white placeholder:text-muted-foreground"

  return (
    <form ref={formRef} className="grid gap-6" aria-describedby="membership-note" onSubmit={handleSubmit}>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="full-name" className="text-sm font-medium text-white/80">
            Nombre completo
          </label>
          <Input
            id="full-name"
            name="fullName"
            autoComplete="name"
            placeholder="Juan Pérez"
            required
            className={fieldClassName}
            aria-invalid={fieldErrors.fullName?.length ? true : undefined}
          />
          <FieldError errors={fieldErrors.fullName} />
        </div>
        <div className="grid gap-2">
          <label htmlFor="member-email" className="text-sm font-medium text-white/80">
            Correo electrónico
          </label>
          <Input
            id="member-email"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="tu@correo.com"
            required
            className={fieldClassName}
            aria-invalid={fieldErrors.email?.length ? true : undefined}
          />
          <FieldError errors={fieldErrors.email} />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="twitter-handle" className="text-sm font-medium text-white/80">
            Usuario de X
          </label>
          <Input
            id="twitter-handle"
            name="xHandle"
            autoComplete="username"
            placeholder="@tuusuario"
            required
            className={fieldClassName}
            aria-invalid={fieldErrors.xHandle?.length ? true : undefined}
          />
          <FieldError errors={fieldErrors.xHandle} />
        </div>
        <div className="grid gap-2">
          <label id="skill-label" className="text-sm font-medium text-white/80">
            Habilidad principal
          </label>
          <Select
            name="primarySkill"
            value={selectedSkill}
            onValueChange={handleSkillChange}
          >
            <SelectTrigger
              aria-labelledby="skill-label"
              className={selectClassName}
              aria-invalid={fieldErrors.primarySkill?.length ? true : undefined}
            >
              <SelectValue placeholder="Selecciona una habilidad" />
            </SelectTrigger>
            <SelectContent align="start" className="border border-white/10 bg-surface-high text-white">
              {skillOptions.map((option) => (
                <SelectItem key={option} value={option} className="focus:bg-white/5 focus:text-white">
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FieldError errors={fieldErrors.primarySkill} />
        </div>
      </div>

      <div className="grid gap-2">
        <label htmlFor="member-reason" className="text-sm font-medium text-white/80">
          Cuéntanos por qué quieres unirte
        </label>
        <Textarea
          id="member-reason"
          name="reason"
          rows={5}
          placeholder="Describe tu motivación y qué puedes aportar a la comunidad..."
          required
          className={textAreaClassName}
          aria-describedby="member-reason-hint"
          aria-invalid={fieldErrors.reason?.length ? true : undefined}
        />
        <p id="member-reason-hint" className="text-sm leading-6 text-muted-foreground">
          Escribe al menos 20 caracteres para contarnos tu motivación antes de enviar la
          solicitud.
        </p>
        <FieldError errors={fieldErrors.reason} />
      </div>

      <p id="membership-note" className="text-sm leading-6 text-muted-foreground">
        Tras recibir tu solicitud, te enviaremos un correo de confirmación y te daremos
        respuesta lo antes posible.
      </p>

      {feedbackMessage ? (
        <p
          aria-live="polite"
          className={submissionState === "success" ? "text-sm text-primary" : "text-sm text-[#ff8c88]"}
        >
          {feedbackMessage}
        </p>
      ) : null}

      <Button
        type="submit"
        size="lg"
        disabled={submissionState === "submitting"}
        className="h-12 rounded-full border-0 bg-[linear-gradient(135deg,#19fb9b_0%,#43b4ca_48%,#9945ff_100%)] text-[#050816] shadow-[0_18px_50px_rgba(67,180,202,0.22)] hover:brightness-105"
      >
        {submissionState === "submitting" ? "Enviando solicitud..." : "Enviar solicitud"}
      </Button>
    </form>
  )
}