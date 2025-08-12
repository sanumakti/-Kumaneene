import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-20 left-10 w-8 h-8 bg-[#0052FF] rounded-full animate-float opacity-60"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-40 right-20 w-6 h-6 bg-white rounded-full animate-float opacity-50"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-40 left-20 w-10 h-10 bg-[#FFFFE0] rounded-full animate-float opacity-40"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="absolute top-60 left-1/3 w-4 h-4 bg-[#FFB6C1] rounded-full animate-float opacity-70"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-20 right-1/3 w-12 h-12 bg-white/30 rounded-full animate-float opacity-30"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-32 right-10 text-white/20 text-2xl animate-paw-float"
          style={{ animationDelay: "0s" }}
        >
          🐾
        </div>
        <div
          className="absolute bottom-32 left-16 text-white/15 text-3xl animate-paw-float"
          style={{ animationDelay: "2s" }}
        >
          🐾
        </div>
        <div
          className="absolute top-1/2 right-1/4 text-white/10 text-xl animate-paw-float"
          style={{ animationDelay: "4s" }}
        >
          🐾
        </div>
        <div
          className="absolute bottom-1/4 left-1/4 text-white/20 text-2xl animate-paw-float"
          style={{ animationDelay: "1s" }}
        >
          🐾
        </div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8">
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Generate, Chat, and <span className="text-[#FFFFE0] drop-shadow-lg">Mint</span> Your AI Pet
            </h1>

            <p className="text-xl lg:text-2xl text-white/90 font-medium max-w-lg">
              Create unique AI companions, chat with them in real-time, and mint them as NFTs on Base Network
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="btn-bouncy bg-white text-[#0052FF] hover:bg-white/90 text-xl font-bold py-6 px-8 rounded-2xl shadow-2xl"
              >
                Start Generating ✨
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="btn-bouncy border-2 border-white text-white hover:bg-white hover:text-[#0052FF] text-xl font-bold py-6 px-8 rounded-2xl backdrop-blur-sm bg-transparent"
              >
                View Gallery
              </Button>
            </div>

            <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FFFFE0]">10K+</div>
                <div className="text-white/80">Pets Generated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FFFFE0]">5K+</div>
                <div className="text-white/80">Active Chats</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FFFFE0]">2K+</div>
                <div className="text-white/80">NFTs Minted</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-white/10 backdrop-blur-sm border-4 border-white/20 shadow-2xl flex items-center justify-center animate-bounce-gentle">
                <div className="w-72 h-72 lg:w-88 lg:h-88 rounded-full overflow-hidden shadow-inner">
                  <img
                    src="/cute-cat-robot.png"
                    alt="AI Pet Mascot - Cute Cat Robot"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#FFFFE0] rounded-full flex items-center justify-center shadow-lg animate-float text-2xl">
                🤖
              </div>
              <div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#FFB6C1] rounded-full flex items-center justify-center shadow-lg animate-float text-xl"
                style={{ animationDelay: "1s" }}
              >
                💝
              </div>
              <div
                className="absolute top-1/4 -left-8 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg animate-float text-lg"
                style={{ animationDelay: "2s" }}
              >
                ⭐
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
