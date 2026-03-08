"use client"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { motion, AnimatePresence } from "motion/react"
import { useState } from "react"
import { Send, CheckCircle, AlertCircle } from "lucide-react"

const schema = z.object({
  name:    z.string().min(2, "Name must be at least 2 characters"),
  email:   z.string().email("Please enter a valid email"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type FormData = z.infer<typeof schema>

interface ContactFormProps {
  onSubmit?: (data: FormData) => Promise<void>
  accentColor?: string
  className?: string
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid var(--color-border, rgba(255,255,255,0.08))",
  borderRadius: "var(--radius-md, 12px)",
  padding: "14px 16px",
  color: "var(--color-text, #fff)",
  fontSize: "15px",
  outline: "none",
  transition: "border-color 200ms",
}

export function ContactForm({ onSubmit, className }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const submit = async (data: FormData) => {
    setStatus("loading")
    try {
      if (onSubmit) await onSubmit(data)
      else await new Promise((r) => setTimeout(r, 1000)) // demo delay
      setStatus("success")
      reset()
    } catch {
      setStatus("error")
    }
  }

  return (
    <form onSubmit={handleSubmit(submit)} className={className} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {/* Name + Email row */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div>
          <input {...register("name")} placeholder="Name" style={inputStyle} />
          {errors.name && <p style={{ color: "#f43f5e", fontSize: 12, marginTop: 4 }}>{errors.name.message}</p>}
        </div>
        <div>
          <input {...register("email")} placeholder="Email" type="email" style={inputStyle} />
          {errors.email && <p style={{ color: "#f43f5e", fontSize: 12, marginTop: 4 }}>{errors.email.message}</p>}
        </div>
      </div>

      {/* Company */}
      <input {...register("company")} placeholder="Company (optional)" style={inputStyle} />

      {/* Message */}
      <div>
        <textarea
          {...register("message")}
          placeholder="Tell us about your project..."
          rows={5}
          style={{ ...inputStyle, resize: "vertical", lineHeight: 1.6 }}
        />
        {errors.message && <p style={{ color: "#f43f5e", fontSize: 12, marginTop: 4 }}>{errors.message.message}</p>}
      </div>

      {/* Submit */}
      <motion.button
        type="submit"
        disabled={status === "loading" || status === "success"}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        style={{
          display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
          padding: "14px 32px", borderRadius: "var(--radius-pill, 999px)",
          background: "var(--color-accent, #6366f1)",
          color: "#fff", fontWeight: 600, fontSize: 15,
          border: "none", cursor: status === "loading" ? "wait" : "pointer",
          opacity: status === "success" ? 0.7 : 1,
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {status === "loading" && (
            <motion.span key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              Sending...
            </motion.span>
          )}
          {status === "success" && (
            <motion.span key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <CheckCircle size={16} /> Sent!
            </motion.span>
          )}
          {(status === "idle" || status === "error") && (
            <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <Send size={15} /> Send Message
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {status === "error" && (
        <motion.p initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
          style={{ display: "flex", alignItems: "center", gap: 6, color: "#f43f5e", fontSize: 13 }}>
          <AlertCircle size={14} /> Something went wrong. Please try again.
        </motion.p>
      )}
    </form>
  )
}
