"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Generate", href: "#generate" },
    { name: "Community", href: "#community" },
    { name: "Tokenomics", href: "#tokenomics" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-[#0052FF] to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
              AI
            </div>
            <span className="text-xl font-bold text-gray-800">Pet Generator</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-[#0052FF] font-medium transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="outline"
              className="border-[#0052FF] text-[#0052FF] hover:bg-[#0052FF] hover:text-white bg-transparent"
            >
              Connect Wallet
            </Button>
            <Button className="bg-gradient-to-r from-[#0052FF] to-pink-400 hover:from-[#0041CC] hover:to-pink-500 text-white">
              Launch App
            </Button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-[#0052FF]"
          >
            <div className="w-6 h-6 flex flex-col justify-center gap-1">
              <div className={`h-0.5 bg-current transition-all ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}></div>
              <div className={`h-0.5 bg-current transition-all ${isMenuOpen ? "opacity-0" : ""}`}></div>
              <div
                className={`h-0.5 bg-current transition-all ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
              ></div>
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-[#0052FF] font-medium transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
                <Button
                  variant="outline"
                  className="border-[#0052FF] text-[#0052FF] hover:bg-[#0052FF] hover:text-white bg-transparent"
                >
                  Connect Wallet
                </Button>
                <Button className="bg-gradient-to-r from-[#0052FF] to-pink-400 hover:from-[#0041CC] hover:to-pink-500 text-white">
                  Launch App
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
