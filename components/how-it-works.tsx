import { Card } from "@/components/ui/card"

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Choose Your Style",
      description: "Pick from adorable animal types and customize colors to match your vibe",
      icon: "🎨",
      color: "bg-gradient-to-br from-pink-100 to-pink-200",
    },
    {
      number: "02",
      title: "Generate AI Pet",
      description: "Our AI creates your unique digital companion with personality traits",
      icon: "✨",
      color: "bg-gradient-to-br from-yellow-100 to-yellow-200",
    },
    {
      number: "03",
      title: "Chat & Bond",
      description: "Talk with your AI pet in real-time and build a special relationship",
      icon: "💬",
      color: "bg-gradient-to-br from-blue-100 to-blue-200",
    },
    {
      number: "04",
      title: "Mint & Share",
      description: "Turn your pet into an NFT on Base Network and show off to friends",
      icon: "🚀",
      color: "bg-gradient-to-br from-purple-100 to-purple-200",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Create your perfect AI companion in just four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="relative p-8 text-center hover:scale-105 transition-transform duration-300 border-0 shadow-lg"
            >
              <div
                className={`w-20 h-20 rounded-full ${step.color} flex items-center justify-center text-3xl mb-6 mx-auto shadow-md`}
              >
                {step.icon}
              </div>

              <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#0052FF] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                {step.number}
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-4">{step.title}</h3>

              <p className="text-gray-600 leading-relaxed">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-[#0052FF] to-pink-300"></div>
                  <div className="absolute -right-1 -top-1 w-3 h-3 bg-[#0052FF] rounded-full"></div>
                </div>
              )}
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0052FF] to-pink-400 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-lg cursor-pointer">
            <span>Ready to Start?</span>
            <span className="animate-bounce">🐾</span>
          </div>
        </div>
      </div>
    </section>
  )
}
