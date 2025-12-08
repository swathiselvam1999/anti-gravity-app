import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import FloatingBG from "../components/FloatingBG";
import FlyingAstro from "../assets/flying-astronut.png";
import astronut from "../assets/astronaut.png";
import FloatingPNG from "../components/FloatingPNG";
import FloatingCard from "../components/FloatingCard";

const Home = () => {
  const [w, setW] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  useEffect(() => {
    function onResize() {
      setW(window.innerWidth);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const astroSize = w < 480 ? 160 : w < 768 ? 260 : 380;
  // pass astronaut image to the hero
  return (
    <div className="min-h-screen  text-sky-100">
      {/* background that spans entire page */}
      <FloatingBG />

      {/* HERO (full-screen, isolated) */}
      <Hero astronautSrc={astronut} />

      {/* content below (scrolls normally) */}
      <main className="relative z-10">
        <FloatingBG />
        {/* classy content block you wanted (copy as-is or keep simplified) */}
        <section className="w-full px-6 py-16 md:px-20 lg:px-32 text-white">
          {/* SECTION HEADER */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Experience Weightless Innovation
            </h2>
            <p className="mt-4 text-gray-300 text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
              Explore the magic of anti-gravity interactions crafted with
              futuristic physics and ultra-smooth floating simulations.
            </p>
          </div>

          {/* FLOATING CARDS */}
          <FloatingCard duration={10}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="p-5 md:p-6 lg:p-8 backdrop-blur-xl bg-white/10 border border-white/10 rounded-2xl shadow-xl">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 md:mb-3">
                  AI-Powered Floating
                </h3>
                <p className="text-gray-300 text-sm md:text-base lg:text-lg">
                  Auto-stabilizing physics ensures objects float with precision.
                </p>
              </div>

              <div className="p-5 md:p-6 lg:p-8 backdrop-blur-xl bg-white/10 border border-white/10 rounded-2xl shadow-xl">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 md:mb-3">
                  Frictionless Movement
                </h3>
                <p className="text-gray-300 text-sm md:text-base lg:text-lg">
                  Glide effortlessly through space with near-zero resistance
                  motion.
                </p>
              </div>

              <div className="p-5 md:p-6 lg:p-8 backdrop-blur-xl bg-white/10 border border-white/10 rounded-2xl shadow-xl">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 md:mb-3">
                  Cosmic Stability
                </h3>
                <p className="text-gray-300 text-sm md:text-base lg:text-lg">
                  Multi-layer balance systems provide ultra-stable floating
                  visuals.
                </p>
              </div>
            </div>
          </FloatingCard>

          {/* BOTTOM CONTENT BLOCK */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
                Built for Creators & Innovators
              </h3>
              <p className="text-gray-300 text-base md:text-lg lg:text-xl mb-6 leading-relaxed">
                Enhance your imagination with interactive visual elements that
                bring creativity to life using anti-gravity physics.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base lg:text-lg">
                <li>✓ Lightweight & responsive</li>
                <li>✓ Smooth anti-gravity animations</li>
                <li>✓ Glassmorphism UI for a premium feel</li>
              </ul>
            </div>

            <div className="relative flex justify-end">
              <FloatingPNG
                src={FlyingAstro}
                size={astroSize}
                duration={10}
                className="-mt-10 md:-mt-16 lg:-mt-20 drop-shadow-[0_0_10px_rgba(255,255,255,0.15)]"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
