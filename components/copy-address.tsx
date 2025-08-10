"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { Copy } from "lucide-react"
import { useState } from "react"

export default function CopyAddress({
  address = "0x0000000000000000000000000000000000000000",
  comingSoon = false,
}: {
  address?: string
  comingSoon?: boolean
}) {
  const { toast } = useToast()
  const [copied, setCopied] = useState(false)

  async function onCopy() {
    if (comingSoon) return
    try {
      await navigator.clipboard.writeText(address)
      setCopied(true)
      toast({ title: "Copied!", description: "Contract address copied to clipboard." })
      setTimeout(() => setCopied(false), 1500)
    } catch {
      toast({
        title: "Copy failed",
        description: "Please copy the address manually.",
        variant: "destructive",
      })
    }
  }

  const display = comingSoon ? "Coming Soon" : address

  return (
    <div className="flex items-center gap-2">
      <Input
        value={display}
        readOnly
        disabled={comingSoon}
        className="bg-black/40 text-blue-200 placeholder:text-blue-200/40 disabled:opacity-70"
      />
      <Button
        onClick={onCopy}
        disabled={comingSoon}
        className="border border-blue-400/30 bg-blue-500/10 text-blue-200 hover:bg-blue-500/20 disabled:cursor-not-allowed disabled:opacity-60"
        type="button"
      >
        <Copy className="mr-2 h-4 w-4" />
        {comingSoon ? "Coming Soon" : copied ? "Copied" : "Copy"}
      </Button>
    </div>
  )
}
