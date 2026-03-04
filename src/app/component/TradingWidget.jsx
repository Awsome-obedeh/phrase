"use client";
import { useEffect, useRef } from "react";

export default function TradingViewWidget() {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;

    script.onload = () => {
      if (window.TradingView) {
        new window.TradingView.widget({
          autosize: true,
          symbol: "GEMINI:ELONUSD",
          interval: "D",
          timezone: "Etc/UTC",
          theme: "dark",
          style: "1",
          locale: "en",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          hide_side_toolbar: false,
          allow_symbol_change: true,
          container_id: "tradingview_main",
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="card-body">
      <div className="section-title text-lg font-semibold mb-3">
        Market Analysis
      </div>

      <div className="tradingview-widget-container">
        <div
          id="tradingview_main"
          ref={containerRef}
          style={{ height: "500px", width: "100%" }}
        />
      </div>
    </div>
  );
}