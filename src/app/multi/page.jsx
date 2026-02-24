"use client";
import { useState } from "react";

export default function MultiCoinWallet() {
  const [collapsed, setCollapsed] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [secretPhrase, setSecretPhrase] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  // NEW: wallet toggle
  const [walletType, setWalletType] = useState("main"); // main | private

  const [walletPhrase, setWalletPhrase] = useState([]);
  

  if (walletType === "main" && walletPhrase.length === 0) {

  }

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-300
        ${darkMode ? "bg-black text-white" : "bg-gray-100 text-black"}
      `}
    >
      <div className="w-full h-full p-4 max-w-md mx-auto">

        {/* 🔁 Wallet Type Toggle (TOP CENTER) */}
        <div className="flex justify-center mb-6">
          <div className="flex bg-[#1c1c1c] rounded-full p-1">
            <button
              onClick={() => setWalletType("main")}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition
                ${walletType === "main"
                  ? "bg-green-500 text-black"
                  : "text-gray-400"}
              `}
            >
              Main Wallet
            </button>

            <button
              onClick={() => setWalletType("private")}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition
                ${walletType === "private"
                  ? "bg-green-500 text-black"
                  : "text-gray-400"}
              `}
            >
              Private Wallet
            </button>
          </div>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">
            {walletType === "main" ? "Multi-Coin Wallet" : "Private Wallet"}
          </h2>

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-green-500 text-2xl font-bold"
          >
            {collapsed ? "+" : "-"}
          </button>
        </div>

        {/* Wallet Body */}
        {!collapsed && (
          <>
            {/* Wallet Name */}
            <div className="mb-5">
              <label className="text-sm text-gray-500">Wallet name</label>
              <input
                type="text"
                value={
                  walletType === "main"
                    ? "Main Wallet 4"
                    : "Private Wallet"
                }
                readOnly
                className={`mt-1 w-full rounded-lg px-3 py-3 text-sm
                  ${darkMode
                    ? "bg-[#1c1c1c] border border-gray-700"
                    : "bg-white border border-gray-300"}
                `}
              />
            </div>

            {/* Secret Phrase */}
            <div className="mb-4">
              <label className="text-sm text-gray-500">
                {walletType === "private"
                  ? "Private secret phrase"
                  : "Secret phrase"}
              </label>

              <div className="relative mt-1">
                <textarea
                  rows={4}
                  value={secretPhrase}
                  onChange={(e) => setSecretPhrase(e.target.value)}
                  placeholder="Paste your secret phrase"
                  className={`w-full rounded-lg px-3 py-3 text-sm resize-none outline-none
                    ${darkMode
                      ? "bg-[#1c1c1c] border border-green-500"
                      : "bg-white border border-green-600"}
                  `}
                />

                <button
                  onClick={async () => {
                    const text = await navigator.clipboard.readText();
                    setSecretPhrase(text);
                  }}
                  className="absolute right-3 bottom-3 text-green-500 text-sm"
                >
                  Paste
                </button>
              </div>

              <p className="text-xs text-gray-500 mt-1">
                {walletType === "private"
                  ? "Private wallets are hidden and more secure"
                  : "Typically 12, 18, or 24 words separated by spaces"}
              </p>
            </div>

            {/* Restore Button */}
            <button className="w-full bg-green-500 text-black font-semibold py-3 rounded-full mt-6">
              {walletType === "private"
                ? "Restore Private Wallet"
                : "Restore Wallet"}
            </button>

            {/* Info */}
            <button
              onClick={() => setShowInfo(true)}
              className="mt-4 text-green-500 text-sm underline"
            >
              What is a secret phrase?
            </button>
          </>
        )}
      </div>

      {/* 🌙☀️ Theme Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed bottom-4 right-4 bg-green-500 text-black p-3 rounded-full shadow-lg"
      >
        {darkMode ? "☀️" : "🌙"}
      </button>

      {/* Info Modal */}
      {showInfo && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
          <div className="bg-[#121212] text-white rounded-xl p-4 max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-2">
              What is a Secret Phrase?
            </h3>

            <p className="text-sm text-gray-300 mb-2">
              A secret phrase is a list of <b>12, 18, or 24 words</b> that gives
              full access to your wallet.
            </p>

            <p className="text-sm text-red-400 font-semibold">
              Never share it with anyone.
            </p>

            <button
              onClick={() => setShowInfo(false)}
              className="mt-4 w-full bg-black text-white py-3 rounded-full"
            >
              I Understand
            </button>
          </div>
        </div>
      )}
    </div>
  );
}