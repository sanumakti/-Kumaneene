export function Footer() {
  const socialLinks = [
    {
      name: "Twitter/X",
      href: "#",
      icon: "𝕏",
      color: "hover:text-black",
    },
    {
      name: "Telegram",
      href: "#",
      icon: "📱",
      color: "hover:text-blue-500",
    },
    {
      name: "Discord",
      href: "#",
      icon: "💬",
      color: "hover:text-indigo-500",
    },
  ]

  const footerLinks = [
    {
      title: "Product",
      links: ["Generator", "Chat", "NFT Marketplace", "Staking"],
    },
    {
      title: "Community",
      links: ["Discord", "Telegram", "Twitter", "Blog"],
    },
    {
      title: "Resources",
      links: ["Documentation", "Whitepaper", "Roadmap", "FAQ"],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
    },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-[#0052FF] to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                AI
              </div>
              <span className="text-2xl font-bold">Pet Generator</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Create, chat, and mint your perfect AI companion on the Base Network. Join thousands of users building
              meaningful relationships with their digital pets.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 ${social.color}`}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-bold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <p className="text-gray-400 text-sm">© 2024 AI Pet Generator. All rights reserved.</p>
              <div className="flex items-center gap-2">
                <span className="text-gray-400 text-sm">Powered by</span>
                <div className="flex items-center gap-2 bg-[#0052FF] px-3 py-1 rounded-full">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                  <span className="text-white font-bold text-sm">Base</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Network Status: Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#0052FF] to-pink-400 h-1"></div>
    </footer>
  )
}
