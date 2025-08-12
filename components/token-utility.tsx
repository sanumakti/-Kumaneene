import { Card } from "@/components/ui/card"

export function TokenUtility() {
  const utilities = [
    {
      title: "Stake & Unlock",
      description: "Stake your tokens to unlock rare and legendary pet breeds with unique abilities and appearances",
      icon: "🔒",
      features: ["Legendary Pet Breeds", "Exclusive Animations", "Rare Color Variants", "Special Abilities"],
      gradient: "from-purple-400 to-pink-400",
      bgGradient: "from-purple-50 to-pink-50",
    },
    {
      title: "Premium Personalities",
      description: "Access exclusive chat personalities and advanced AI behaviors for deeper pet interactions",
      icon: "🧠",
      features: ["Genius Mode", "Emotional Intelligence", "Memory System", "Custom Responses"],
      gradient: "from-blue-400 to-cyan-400",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      title: "NFT Marketplace",
      description: "Trade, buy, and sell your AI pets as NFTs on the Base Network with full ownership rights",
      icon: "💎",
      features: ["Peer-to-Peer Trading", "Auction System", "Rarity Rankings", "Price History"],
      gradient: "from-yellow-400 to-orange-400",
      bgGradient: "from-yellow-50 to-orange-50",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Token Utility</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the powerful benefits of holding AI Pet Generator tokens
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {utilities.map((utility, index) => (
            <Card
              key={index}
              className="relative p-8 border-0 shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${utility.bgGradient} opacity-50`}></div>

              <div className="relative z-10">
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${utility.gradient} flex items-center justify-center text-2xl mb-6 shadow-lg`}
                >
                  {utility.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-4">{utility.title}</h3>

                <p className="text-gray-600 mb-6 leading-relaxed">{utility.description}</p>

                <div className="space-y-3">
                  {utility.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${utility.gradient}`}></div>
                      <span className="text-sm font-medium text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <button
                    className={`w-full bg-gradient-to-r ${utility.gradient} text-white font-bold py-3 px-6 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg`}
                  >
                    Learn More
                  </button>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/20 rounded-full blur-xl"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-white/30 rounded-full blur-lg"></div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex flex-col items-center gap-4 bg-gradient-to-r from-[#0052FF] to-purple-600 text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold">Ready to Get Started?</h3>
            <p className="text-blue-100 max-w-md">
              Join thousands of users already earning rewards and building relationships with their AI pets
            </p>
            <div className="flex gap-4 mt-4">
              <button className="bg-white text-[#0052FF] font-bold px-8 py-3 rounded-xl hover:scale-105 transition-all duration-300">
                Buy Tokens
              </button>
              <button className="border-2 border-white text-white font-bold px-8 py-3 rounded-xl hover:bg-white hover:text-[#0052FF] transition-all duration-300">
                View Roadmap
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
