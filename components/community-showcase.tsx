"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function CommunityShowcase() {
  const [likedPets, setLikedPets] = useState<Set<number>>(new Set())

  const communityPets = [
    {
      id: 1,
      name: "Sparkle",
      type: "🐱",
      color: "#FF6B9D",
      owner: "@sarah_k",
      likes: 234,
      quote: "Sparkle always knows how to cheer me up after a long day!",
      personality: "Playful",
    },
    {
      id: 2,
      name: "Cosmic",
      type: "🐶",
      color: "#4D96FF",
      owner: "@mike_dev",
      likes: 189,
      quote: "My coding buddy who helps me debug with wisdom!",
      personality: "Wise",
    },
    {
      id: 3,
      name: "Luna",
      type: "🦊",
      color: "#9B59B6",
      owner: "@artist_jen",
      likes: 312,
      quote: "Luna inspires my creativity every single day.",
      personality: "Mysterious",
    },
    {
      id: 4,
      name: "Buddy",
      type: "🐰",
      color: "#6BCF7F",
      owner: "@gamer_alex",
      likes: 156,
      quote: "Best gaming companion ever! We conquered 10 levels today!",
      personality: "Energetic",
    },
    {
      id: 5,
      name: "Zen",
      type: "🐼",
      color: "#FFD93D",
      owner: "@yoga_maya",
      likes: 278,
      quote: "Zen teaches me mindfulness and inner peace.",
      personality: "Calm",
    },
    {
      id: 6,
      name: "Nova",
      type: "🐨",
      color: "#FF8C42",
      owner: "@space_lover",
      likes: 201,
      quote: "Nova and I explore the universe together in our chats!",
      personality: "Curious",
    },
  ]

  const handleLike = (petId: number) => {
    setLikedPets((prev) => {
      const newLiked = new Set(prev)
      if (newLiked.has(petId)) {
        newLiked.delete(petId)
      } else {
        newLiked.add(petId)
      }
      return newLiked
    })
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-pink-50 via-blue-50 to-yellow-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Community Showcase</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the amazing AI pets created by our community and the bonds they've formed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communityPets.map((pet) => (
            <Card
              key={pet.id}
              className="p-6 border-0 shadow-xl hover:scale-105 transition-all duration-300 bg-white/80 backdrop-blur-sm overflow-hidden relative"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#0052FF] to-pink-400"></div>

              <div className="text-center mb-6">
                <div
                  className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl shadow-lg border-4 border-white animate-pulse"
                  style={{ backgroundColor: pet.color }}
                >
                  {pet.type}
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-1">{pet.name}</h3>
                <p className="text-sm text-gray-500 mb-2">by {pet.owner}</p>
                <span className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">
                  {pet.personality}
                </span>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-pink-50 p-4 rounded-xl mb-6">
                <p className="text-gray-700 text-sm italic leading-relaxed">"{pet.quote}"</p>
              </div>

              <div className="flex items-center justify-between">
                <Button
                  onClick={() => handleLike(pet.id)}
                  variant="ghost"
                  className={`flex items-center gap-2 transition-all duration-300 ${
                    likedPets.has(pet.id)
                      ? "text-red-500 hover:text-red-600 scale-110"
                      : "text-gray-500 hover:text-red-500"
                  }`}
                >
                  <span className={`text-lg ${likedPets.has(pet.id) ? "animate-bounce" : ""}`}>
                    {likedPets.has(pet.id) ? "❤️" : "🤍"}
                  </span>
                  <span className="font-semibold">{pet.likes + (likedPets.has(pet.id) ? 1 : 0)}</span>
                </Button>

                <Button
                  variant="outline"
                  className="text-[#0052FF] border-[#0052FF] hover:bg-[#0052FF] hover:text-white transition-all duration-300 bg-transparent"
                >
                  View Pet
                </Button>
              </div>

              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br from-pink-200 to-yellow-200 rounded-full opacity-20 blur-lg"></div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex flex-col items-center gap-6 bg-white p-8 rounded-2xl shadow-xl border-t-4 border-[#0052FF]">
            <h3 className="text-2xl font-bold text-gray-800">Join Our Amazing Community!</h3>
            <p className="text-gray-600 max-w-md">
              Create your own AI pet and become part of our growing family of pet lovers and creators
            </p>
            <div className="flex gap-4">
              <Button className="bg-gradient-to-r from-[#0052FF] to-pink-400 hover:from-[#0041CC] hover:to-pink-500 text-white font-bold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105">
                Create Your Pet
              </Button>
              <Button
                variant="outline"
                className="border-2 border-[#0052FF] text-[#0052FF] hover:bg-[#0052FF] hover:text-white font-bold px-8 py-3 rounded-xl transition-all duration-300 bg-transparent"
              >
                Browse Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
