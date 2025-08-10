import { cn } from "@/lib/utils"
import type React from "react"

export default function GlowPanel({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={cn(
        "relative rounded-3xl border border-blue-400/20 bg-gradient-to-b from-blue-500/10 to-blue-500/0 p-4 shadow-[0_0_60px_rgba(59,130,246,0.25)] backdrop-blur",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-blue-300/10"
      />
      {children}
    </div>
  )
}
