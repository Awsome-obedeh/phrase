"use client";

import Link from "next/link";
import { WalletCards } from "lucide-react";

const solscanLink =
  "https://solscan.io/account/48radEfwKGNbg327ZUH5FRk9DTYGMZc43gnDoNwL5M1B";

export default function Page() {
  return (
    <>
      {/* ================= NAV + HERO ================= */}
      <main className="min-h-screen bg-gray-50">
        {/* TOP BAR */}
        <div className="fixed top-0 left-0 w-full z-40">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
            {/* Brand */}
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden">
                <video
                  src="/e3b2gqh1_IMG_3109.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>

              <span className="font-semibold text-gray-900 text-sm sm:text-base">
                ELON COIN
              </span>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                href="/trade"
                className="bg-black text-white text-[10px] sm:text-xs px-2 sm:px-3 py-1 sm:py-1.5 rounded-md"
              >
                BUY $ELON
              </Link>

              <button className="w-6 h-6 rounded-full bg-black text-white text-xs flex items-center justify-center">
                X
              </button>
            </div>
          </div>
        </div>

        {/* HERO SECTION */}
        <section className="flex flex-col items-center justify-center min-h-screen text-center px-4 max-w-7xl mx-auto">
          {/* Coin Video */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-gray-100 flex items-center justify-center shadow-md mb-6">
            <video
              src="/e3b2gqh1_IMG_3109.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain rounded-full"
            />
          </div>

          {/* Text */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-black font-bold tracking-widest">
            ELON COIN
          </h1>

          <p className="text-gray-500 mt-2 mb-6">$ELON</p>

          {/* Main Button */}
          <button className="bg-black text-white w-full sm:w-auto px-8 sm:px-20 py-3 rounded-lg mb-4 shadow flex flex-col items-center">
            <p className="text-xs text-gray-500">THE LORE</p>
            <h1 className="font-bold text-lg sm:text-xl">
              Just let me buy $ELON
            </h1>
            <p className="text-xs text-gray-500">THE CURRENCY OF THE WORLD</p>
          </button>

          {/* Secondary Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6 w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-black text-white px-4 py-2 text-sm rounded">
              BUY $ELON
            </button>

            <button className="w-full sm:w-auto border border-gray-600 px-4 py-2 text-sm text-black rounded">
              X FOLLOW
            </button>
          </div>

          {/* Contract Box */}
          <div className="border rounded-lg px-4 py-3 flex flex-col  items-center gap-3 shadow-sm w-full max-w-md">
            <span className="text-sm text-gray-500">
              CONTRACT ADDRESS
            </span>
            <span className="text-xs font-mono break-all text-center sm:text-left">
              2aKpxyFXAN5Y...
            </span>
            <button className="bg-black text-white text-xs px-3 py-1 rounded">
              COPY
            </button>
          </div>
        </section>
      </main>

      {/* ================= BLACK HERO ================= */}
      <section className="flex flex-col items-center justify-center py-16 sm:py-20 px-4 sm:px-6 bg-black">
        <div className="border border-zinc-800 p-6 sm:p-8 md:p-12 max-w-2xl text-center space-y-6">
          <p className="text-xs text-black uppercase bg-gray-200 inline-block px-2 py-1">
            1 ELON COIN
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
            THE CURRENCY OF THE WORLD
          </h1>

          <div className="space-y-2">
            <p className="text-zinc-400 text-lg italic">
              Just let me buy $ELON.
            </p>
            <p className="text-sm text-white max-w-md mx-auto">
              The future of currency is here. Polished. Chrome. Perfect.
            </p>
          </div>

          <p className="font-bold pt-4">Join the revolution.</p>

          <div className="pt-6 text-[10px] text-zinc-600 tracking-[0.3em]">
            ------ SOLANA BLOCKCHAIN --------
          </div>
        </div>
      </section>

      {/* ================= LIVE FEED ================= */}
     <section className="bg-white py-16 px-4 sm:px-20 text-center flex flex-col items-center">
  <div className="flex items-center gap-2 mb-4">
    <img src="/download (7).png" alt="" className="w-5 h-5" />
    <h2 className="text-3xl text-black tracking-tighter">
      LIVE FEED
    </h2>
  </div>
  <p className="text-zinc-500 font-mono text-sm mb-6">@eloncoinapp</p>
  <button className="bg-black text-white px-8 py-3 font-bold text-sm  tracking-widest">
    X Follow @eloncoinapp
  </button>
</section>


      {/* ================= CTO WALLET ================= */}
      <main className="min-h-screen bg-black text-white">
        <section className="pt-16 pb-10 text-center">
          <h1 className="text-1xl sm:text-2xl font-extrabold tracking-widest">
            CTO WALLET
          </h1>
          <p className="mt-2 text-xs tracking-[0.3em] text-gray-400">
           takeover treasury community
          </p>
        </section>

        <section className="px-4 sm:px-6 pb-24 flex justify-center">
          <a
            href={solscanLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full max-w-xl rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-6 shadow-xl transition hover:scale-[1.02]"
          >
            <div className="mb-5">
              <p className="text-xs text-gray-400 mb-1">WALLET ADDRESS</p>
              <div className="rounded-lg border border-white/10 bg-black/50 px-4 py-2 text-sm break-all">
                48radEfwKGNbg327ZUH5FRk9DTYGMZc43gnDoNwL5M1B
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              <div className="rounded-lg border border-white/10 bg-black/40 p-3 text-center">
                <p className="text-xs text-gray-400">NETWORK</p>
                <p className="font-semibold">SOLANA</p>
              </div>

              <div className="rounded-lg border border-white/10 bg-black/40 p-3 text-center">
                <p className="text-xs text-gray-400">TYPE</p>
                <p className="font-semibold">CTO</p>
              </div>

              <div className="rounded-lg border border-white/10 bg-black/40 p-3 text-center">
                <p className="text-xs text-gray-400">STATUS</p>
                <p className="font-semibold text-green-400">LIVE</p>
              </div>
            </div>

            <div className="rounded-xl bg-gradient-to-r from-emerald-400 to-purple-500 py-3 text-center text-sm font-semibold text-black">
              VIEW LIVE WALLET ON SOLSCAN
            </div>
          </a>
        </section>
      </main>

      {/* ================= LIVE CHART ================= */}
      <section className="bg-white text-black py-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold tracking-widest">
            LIVE CHART
          </h2>
          <div className="mt-2 mx-auto h-[2px] w-24 bg-black/20" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="relative rounded-xl border border-black/20 shadow-2xl overflow-hidden bg-black">
            <iframe
              src="https://dexscreener.com/solana/ELON?embed=1&theme=dark&trades=0"
              className="w-full h-[300px] sm:h-[380px] md:h-[420px]"
              allowFullScreen
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-12 text-sm mt-8">
            <div className="text-center">
              <p className="text-gray-500 uppercase">Series</p>
              <p className="font-semibold">2067</p>
            </div>

            <div className="text-center">
              <p className="text-gray-500 uppercase">Network</p>
              <p className="font-semibold">Solana</p>
            </div>

            <div className="text-center">
              <p className="text-gray-500 uppercase">Status</p>
              <p className="font-semibold text-green-600">Live</p>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <a
              href="https://dexscreener.com/solana/afpugRuqYSxVwEMHSV1x4EZeq8pNPU3GqaRtpxh1sue"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-black text-white w-full sm:w-auto justify-center px-8 py-3 rounded-lg font-semibold"
            >
              ↗ VIEW FULL CHART
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
