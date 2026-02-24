"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 80) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full bg-white px-6 py-3 transition-transform duration-300
      ${show ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Left */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <video
              src="/e3b2gqh1_IMG_3109.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-semibold text-gray-900">
            ELON COIN
          </span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
            <Link
              href="/multi"
              className="bg-black text-white text-lg px-3 md:py-3 rounded-md"
            >
              BUY $ELON
            </Link>

          <button
            aria-label="Close"
            className="w-8 h-8 rounded-full p-3 bg-black text-white flex items-center justify-center"
          >
          <a href=""><img src="/download (6).png" className="w-15 h-8 rounded-full object-cover" alt="" /></a>
          </button>
        </div>

      </div>
    </nav>
  );
}
