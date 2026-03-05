"use client";

export default function DexScreenerWidget() {
  // ELONSOL / SOL pair address on Solana
  const pairAddress = "afpugruqysxvwemhsv1x4ezeq8pnpu3gqartpxh1sue"; // Replace with actual pool address if different

  return (
    <div className="card-body">
      <div className="section-title text-lg font-semibold mb-3">
        ELONSOL Market Analysis
      </div>

      <div className="dexscreener-widget-container" style={{ position: "relative", width: "100%", paddingBottom: "125%" }}>
        {/* DEX Screener Embed */}
        <iframe
          src={`https://dexscreener.com/solana/${pairAddress}?embed=1&theme=dark&trades=0&info=0`}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            border: 0,
          }}
          title="DEX Screener Chart"
        />
      </div>

      <style jsx>{`
        .dexscreener-widget-container {
          height:260px; /* Fallback height */
        }
        @media (min-width: 768px) {
          .dexscreener-widget-container {
            padding-bottom: 65%; /* Adjusted for desktop screens */
          }
        }
      `}</style>
    </div>
  );
}