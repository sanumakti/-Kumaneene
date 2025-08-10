import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Plus, Send, Twitter } from "lucide-react"
import { Toaster } from "@/components/ui/toaster"
import { cn } from "@/lib/utils"
import GlowPanel from "@/components/glow-panel"
import CopyAddress from "@/components/copy-address"
import Navbar from "@/components/navbar"

export default function Page() {
  const SiteBackground = (
    <div className="fixed inset-0 -z-20">
      <Image
        src="/images/background.jpg"
        alt="Kumaneene is friends with the Doge family background"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/70" />
    </div>
  )

  return (
    <main className="min-h-screen bg-[#0b0b0f] text-white">
      {SiteBackground}
      {/* Subtle radial glows in the background */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-16 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-blue-500/10 blur-2xl" />
      </div>

      <Navbar />

      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent" />

        <div className="relative mx-auto max-w-5xl px-4 pb-16 pt-12 md:pt-16 lg:pt-20">
          <h1 className="mx-auto text-center text-3xl font-extrabold tracking-tight md:text-5xl">
            Connect with Kumaneene
          </h1>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="group border border-blue-400/30 bg-blue-500/10 text-blue-200 hover:bg-blue-500/20"
              asChild
            >
              <a href="https://x.com" target="_blank" rel="noreferrer">
                <Twitter className="mr-2 h-5 w-5" />
                <span>Follow on X</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group border-blue-400/30 text-blue-200 hover:bg-blue-500/10 bg-transparent"
              asChild
            >
              <a href="https://t.me" target="_blank" rel="noreferrer">
                <Send className="mr-2 h-5 w-5" />
                <span>Join Telegram</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ABOUT + CONTRACT */}
      <section className="relative mx-auto max-w-6xl px-4 py-8 md:py-12">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-4xl font-extrabold text-blue-300 drop-shadow-[0_2px_0_rgba(0,0,0,0.5)]">Kumaneene</h2>
            <p className="mt-3 max-w-prose text-white/90">
              Kumaneene friends with the doge family. A new doggo who&apos;s been spotted interacting with Kabosumama on
              X! Kumaneene is friends with Neiro, Cocoro, and the rest of the Doge family. Let&apos;s spread positivity
              and support the community — Do Only Good Everyday.
            </p>

            <GlowPanel className="mt-6">
              <div className="space-y-3">
                <div className="font-semibold text-blue-200">Contract Address</div>
                <CopyAddress comingSoon />
              </div>
            </GlowPanel>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-6 -z-10 rounded-full bg-blue-500/20 blur-3xl" />
            <Card className="relative overflow-hidden border-blue-400/20 bg-blue-500/10 p-6 backdrop-blur">
              <div className="mx-auto flex h-72 w-72 items-center justify-center rounded-full bg-gradient-to-b from-blue-500/30 to-blue-500/10 shadow-[0_0_80px_rgba(59,130,246,0.35)]">
                <Image
                  src="/images/mascot.png"
                  alt="Kumaneene blue dog mascot"
                  width={220}
                  height={220}
                  priority
                  className="rounded-full drop-shadow-[0_0_20px_rgba(59,130,246,0.45)]"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* DO ONLY GOOD EVERYDAY */}
      <section className="mx-auto max-w-6xl px-4 pb-8 md:pb-12">
        <GlowPanel className="px-6 py-8 md:px-10 md:py-12">
          <div className="text-center">
            <h3 className="text-3xl font-extrabold text-blue-300 md:text-4xl">Do Only Good Everyday</h3>
            <p className="mx-auto mt-2 max-w-3xl text-white/80">
              Kumaneene believes in spreading positivity and supporting the community
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <GlowCard
              title="1.5% Supply to Vitalik"
              description="Supporting the Ethereum ecosystem and its creator"
              href="#"
            />
            <GlowCard
              title="1.5% Supply to Chibawan"
              description="Supporting Neiro and Cocoro adopters – friends of Kumaneene"
              href="#"
            />
          </div>

          <div className="mt-8 flex justify-center">
            <Button
              className="group border border-blue-400/30 bg-blue-500/10 text-blue-200 hover:bg-blue-500/20"
              asChild
            >
              <a href="https://x.com" target="_blank" rel="noreferrer">
                <span>View Original Post on X</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
          </div>
        </GlowPanel>
      </section>

      {/* SOURCES & STORY */}
      <section className="mx-auto max-w-6xl px-4 pb-16 md:pb-24">
        <GlowPanel className="px-6 py-8 md:px-10 md:py-12">
          <h4 className="text-center text-3xl font-extrabold text-blue-300">Sources & Story</h4>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <SourceCard
              dotClass="bg-blue-500"
              name="かぼすママ (@kabosumama)"
              quote={'"Sorry about that. My kids are all well-behaved (good boys/girls) 🐶✨"'}
              link="#"
            />
            <SourceCard
              dotClass="bg-blue-400"
              name="かち (@kumaneene)"
              quote={'"Are all dogs able to ride kayaks so well? Are the dogs of the Kabosu family all well‑behaved?"'}
              link="#"
            />
          </div>
        </GlowPanel>

        <footer className="mt-10 flex flex-col items-center gap-3 text-center text-white/80">
          <Image src="/images/mascot.png" alt="Kumaneene mascot" width={40} height={40} className="rounded-full" />
          <p className="text-sm">🐕 Kumaneene — Making history with the Doge family! 🚀</p>
        </footer>
      </section>

      <Toaster />
    </main>
  )
}

function GlowCard({
  title = "Card title",
  description = "Card description",
  href = "#",
}: {
  title?: string
  description?: string
  href?: string
}) {
  return (
    <Card className="relative overflow-hidden border-blue-400/20 bg-blue-500/10 p-6 backdrop-blur">
      <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-blue-400/10 blur-2xl" aria-hidden />
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/20">
          <Plus className="h-6 w-6 text-blue-200" />
        </div>
        <div>
          <div className="text-lg font-semibold text-blue-200">{title}</div>
          <p className="mt-1 text-sm text-white/80">{description}</p>
          <Button
            size="sm"
            className="mt-4 border border-blue-400/30 bg-blue-500/10 text-blue-200 hover:bg-blue-500/20"
            asChild
          >
            <a href={href} target="_blank" rel="noreferrer">
              View Transaction
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </Card>
  )
}

function SourceCard({
  dotClass = "bg-blue-400",
  name = "Source name",
  quote = "Quote",
  link = "#",
}: {
  dotClass?: string
  name?: string
  quote?: string
  link?: string
}) {
  return (
    <Card className="border-blue-400/20 bg-blue-500/10 p-6 backdrop-blur">
      <div className="flex items-start gap-4">
        <div className={cn("h-10 w-10 shrink-0 rounded-full", dotClass)} aria-hidden />
        <div className="space-y-2">
          <div className="font-semibold text-blue-200">{name}</div>
          <p className="text-white/80">{quote}</p>
          <Button
            size="sm"
            variant="ghost"
            className="px-0 text-blue-200 hover:bg-blue-500/10 hover:text-white"
            asChild
          >
            <a href={link} target="_blank" rel="noreferrer">
              View Original Post <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </Card>
  )
}
