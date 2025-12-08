import { useEffect, useState } from "react";
import FloatingElement from "./FloatingElement";
import FloatingPNG from "./FloatingPNG";
import FloatingBG from "./FloatingBG";

export default function Hero({
  items = ["🌍", "🚀", "🪐", "💫", "🛰️", "🌞", "⚡"],
  astronautSrc,
}) {
  const [w, setW] = useState(typeof window !== "undefined" ? window.innerWidth : 1024);

  useEffect(() => {
    function onResize() {
      setW(window.innerWidth);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const astroSize = w < 480 ? 160 : w < 768 ? 260 : 380;

  return (
    <header className="w-full h-screen relative flex flex-col items-center justify-start pt-20 overflow-visible">
      {/* decorative blobs (kept inside hero) */}
      <div className="absolute -top-12 -left-12 w-44 h-44 md:w-64 md:h-64 rounded-full bg-purple-600/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-8 w-32 h-32 md:w-48 md:h-48 rounded-full bg-pink-500/20 blur-3xl pointer-events-none" />

      {/* Main heading (kept inside hero) */}
      <h1 className="z-20 mt-8 text-center font-extrabold text-transparent bg-clip-text
         bg-linear-to-r from-pink-400 via-purple-400 to-blue-400
         text-3xl sm:text-4xl md:text-5xl lg:text-6xl px-4">
        Google Anti-Gravity — Demo
      </h1>

      {/* Centerpiece area (astronaut + orbit) */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full flex-1">
        {/* astronaut container (centered; mobile offset inside) */}
        <div className={`flex justify-center items-center
          ${w < 480 ? "mt-8" : "mt-4"}`}>
          <FloatingPNG
            src={astronautSrc}
            size={astroSize}
            duration={10}
            className="drop-shadow-[0_0_10px_rgba(255,255,255,0.15)]"
          />
        </div>

        {/* orbit container (absolute relative to this hero only) */}
        <div
          id="hero-stage"
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          aria-hidden
        >
          {/* render orbiting elements */}
          {items.map((it, i) => (
            <FloatingElement
              key={i}
              index={i}
              // pass screenWidth so FloatingElement can adapt radius
              screenWidth={w}
            >
              {it}
            </FloatingElement>
          ))}
        </div>
      </div>

    </header>
  );
}
