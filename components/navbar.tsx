import Image from "next/image"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-blue-400/10 bg-black/60 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-center px-4">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Image
              src="/images/mascot.png"
              alt="Kumaneene coin logo"
              width={28}
              height={28}
              priority
              className="rounded-full drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
            />
          </div>
          <span className="font-semibold text-blue-300">Kumaneene</span>
        </div>
      </div>
    </header>
  )
}
