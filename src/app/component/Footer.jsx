import React from 'react'

export default function Footer() {
  return (
    <header className="w-full bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-7 h-70 flex items-center justify-center md:justify-between">

        {/* LEFT: Video Logo */}
        <div className="flex items-center gap-3">
          <div className=" w-10 h-10 lg:w-30 lg:h-30 rounded-full border border-white/20 overflow-hidden">
            <video
              src="/e3b2gqh1_IMG_3109.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-center md:text-left">
            <h1 className="text-white font-semibold tracking-wide">
              $ELON
            </h1>
            <p className="text-[10px] text-white/50">
              ELON COIN
            </p>

            <p className='font-mono text-[15px] text-white/50 py-1.5'>Just let me claim $Elon</p>
          </div>
        </div>

        {/* CENTER: Nav */}
        <nav className="hidden md:flex items-center gap-10 text-sm text-white/60">
          <a href="#" className="hover:text-white transition">Chart</a>
          <a href="#" className="hover:text-white transition">Buy</a>
          <a href="#" className="hover:text-white transition">Community</a>
        </nav>


      </div>

      {/* Bottom line */}
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between text-xs text-white/40 border-t border-white/10">
        <span>2026 Elon Coin. The Currency of the World.</span>
        <span>
          Built on <span className="text-green-400 font-medium">SOLANA</span>
        </span>
      </div>
    </header>
  )
}
