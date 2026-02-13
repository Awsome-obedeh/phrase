import React from "react";

export default function Loader({ fadeOut }) {
  return (
    <section
      className={`flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 md:px-8 lg:px-12 transition-opacity duration-700 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Coin Video */}
      <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full bg-gray-100 flex items-center justify-center shadow-lg mb-6">
        <video
          src="/e3b2gqh1_IMG_3109.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      {/* Text */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-black font-extrabold tracking-wider mb-2">
        ELON COIN
      </h1>

      <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-500 mb-6">
        THE CURRENCY OF THE WORLD
      </p>

      {/* Loading bar */}
      <div className="w-40 sm:w-48 md:w-56 lg:w-64 h-1 bg-gray-700 rounded overflow-hidden">
        <div className="h-full w-full bg-green-400 animate-loading" />
      </div>
    </section>
  );
}
