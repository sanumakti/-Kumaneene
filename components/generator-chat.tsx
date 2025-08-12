"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function GeneratorChat() {
  const [selectedStyle, setSelectedStyle] = useState("cat")
  const [selectedColor, setSelectedColor] = useState("#FF6B9D")
  const [selectedPersonality, setSelectedPersonality] = useState("playful")

  const animalStyles = [
    { id: "cat", name: "Cat", emoji: "🐱" },
    { id: "dog", name: "Dog", emoji: "🐶" },
    { id: "rabbit", name: "Rabbit", emoji: "🐰" },
    { id: "fox", name: "Fox", emoji: "🦊" },
    { id: "panda", name: "Panda", emoji: "🐼" },
    { id: "koala", name: "Koala", emoji: "🐨" },
  ]

  const personalities = [
    { id: "playful", name: "Playful & Energetic" },
    { id: "calm", name: "Calm & Wise" },
    { id: "curious", name: "Curious & Smart" },
    { id: "friendly", name: "Friendly & Social" },
    { id: "mysterious", name: "Mysterious & Cool" },
  ]

  const colors = ["#FF6B9D", "#FFD93D", "#6BCF7F", "#4D96FF", "#9B59B6", "#FF8C42"]

  const handleGeneratePet = () => {
    // Coming soon functionality - no actual generation
  }

  const handleSendMessage = () => {
    // Coming soon functionality - no actual chat
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0052FF] to-pink-400 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <span className="animate-pulse">🚀</span>
            BETA - Early Access
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Generate & Chat with Your AI Pet</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Be part of our early community! Features are continuously being updated and improved.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-8 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-800">AI Pet Generator</h3>
              <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">
                Coming Soon
              </span>
            </div>

            {/* Animal Style Selector */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3">Choose Your Animal Style</label>
              <div className="grid grid-cols-3 gap-3">
                {animalStyles.map((style) => (
                  <button
                    key={style.id}
                    onClick={() => setSelectedStyle(style.id)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      selectedStyle === style.id
                        ? "border-[#0052FF] bg-blue-50 scale-105"
                        : "border-gray-200 hover:border-pink-300 hover:bg-pink-50"
                    }`}
                  >
                    <div className="text-2xl mb-2">{style.emoji}</div>
                    <div className="text-sm font-medium">{style.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Color Picker */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3">Pick Your Color</label>
              <div className="flex gap-3 flex-wrap">
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-12 h-12 rounded-full border-4 transition-all duration-300 ${
                      selectedColor === color ? "border-gray-800 scale-110" : "border-gray-300 hover:scale-105"
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {/* Personality Dropdown */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-3">Personality Type</label>
              <select
                value={selectedPersonality}
                onChange={(e) => setSelectedPersonality(e.target.value)}
                className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-[#0052FF] focus:outline-none bg-white"
              >
                {personalities.map((personality) => (
                  <option key={personality.id} value={personality.id}>
                    {personality.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-6 p-6 bg-gradient-to-br from-yellow-50 to-pink-50 rounded-xl border-2 border-yellow-200">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-dashed border-gray-300">
                  <span className="text-2xl animate-pulse">🎨</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">AI Pet Generation</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Advanced AI pet generation is coming soon! We're working hard to bring you the most adorable AI
                  companions.
                </p>
                <div className="inline-flex items-center gap-2 text-xs text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  <span className="animate-spin">⚡</span>
                  In Development
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Button
                onClick={handleGeneratePet}
                disabled={true}
                className="w-full bg-gradient-to-r from-gray-300 to-gray-400 text-gray-600 font-bold py-4 rounded-xl text-lg cursor-not-allowed"
              >
                Generate My AI Pet - Coming Soon! 🚀
              </Button>

              <Button
                disabled={true}
                className="w-full bg-gradient-to-r from-gray-300 to-gray-400 text-gray-600 font-bold py-4 rounded-xl text-lg cursor-not-allowed"
              >
                Mint NFT on Base - Coming Soon! 🎯
              </Button>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-blue-600">🎉</span>
                <span className="font-semibold text-blue-800">Early Access Benefits</span>
              </div>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• First to try new features</li>
                <li>• Exclusive pet styles & personalities</li>
                <li>• Priority support & feedback</li>
                <li>• Special early adopter rewards</li>
              </ul>
            </div>
          </Card>

          <Card className="p-8 shadow-xl border-0 bg-white/80 backdrop-blur-sm flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Chat with Your Pet</h3>
              <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">
                Coming Soon
              </span>
            </div>

            <div className="flex-1 bg-gradient-to-b from-blue-50 to-pink-50 rounded-xl p-6 mb-6 min-h-[400px] max-h-[400px] flex items-center justify-center">
              <div className="text-center max-w-md">
                <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center bg-gradient-to-br from-[#0052FF] to-pink-400 text-white text-3xl animate-bounce">
                  💬
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">AI Chat Coming Soon!</h4>
                <p className="text-gray-600 mb-4">
                  We're building an amazing chat experience where you can talk to your AI pets in real-time. Each pet
                  will have unique personalities and responses!
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    Real-time conversations
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                    Personality-based responses
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
                    Memory of past conversations
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Input
                placeholder="Chat feature coming soon..."
                className="flex-1 p-4 rounded-xl border-2 border-gray-200 bg-gray-50"
                disabled={true}
              />
              <Button
                disabled={true}
                className="bg-gray-300 text-gray-600 px-6 py-4 rounded-xl font-bold cursor-not-allowed"
              >
                Soon
              </Button>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-purple-600">🛠️</span>
                <span className="font-semibold text-purple-800">Development Progress</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-gray-700">UI Design - Complete</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-700">AI Integration - In Progress</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  <span className="text-sm text-gray-700">Beta Testing - Coming Next</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
