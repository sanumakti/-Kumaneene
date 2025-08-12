import { HeroSection } from "@/components/hero-section"
import { HowItWorks } from "@/components/how-it-works"
import { GeneratorChat } from "@/components/generator-chat"
import { TokenUtility } from "@/components/token-utility"
import { CommunityShowcase } from "@/components/community-showcase"
// Added Navigation and Footer component imports
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <>
      {/* Added Navigation */}
      <Navigation />
      <main className="min-h-screen pt-16">
        <HeroSection />
        <HowItWorks />
        <GeneratorChat />
        <TokenUtility />
        <CommunityShowcase />
      </main>
      {/* Added Footer */}
      <Footer />
    </>
  )
}
