import React, { useEffect, useState } from "react";
import FloatingElement from "../components/FloatingElement";
import FloatingPNG from "../components/FloatingPNG";
import { motion } from "framer-motion";
import astronaut from "../assets/astronaut.png";
import FloatingBG from "../components/FloatingBG";

const Home = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Update on resize
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Floating items change based on width
  const floatingItems = ["🌍", "🚀", "🪐", "❄️",  "💫", "🛰️", "🌞", "⚡"];

  return (
    <div className="relative w-full min-h-screen overflow-hidden flex flex-col items-center pt-24">

      <FloatingBG/>

      {/* 🔮 Background Blobs */}
      <motion.div
        className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full bg-purple-600/20 blur-3xl -top-10 -left-10"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
      />
      <motion.div
        className="absolute w-32 h-32 md:w-48 md:h-48 rounded-full bg-pink-500/20 blur-3xl bottom-10 right-10"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
      />

      {/* 👩‍🚀 Astronaut — responsive size */}
      <FloatingPNG
        src={astronaut}
        size={screenWidth < 480 ? 220 : screenWidth < 768 ? 320 : 420}
        left={screenWidth < 480 ? "50%" : "40%"}
        top="35%"
        duration={14}
        className="drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
      />

      {/* 🏷️ Heading */}
      <h1 className="text-center font-extrabold text-transparent bg-clip-text bg-linear-to-r from-pink-400 via-purple-400 to-blue-400 z-20 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] 
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-12 px-4">
        Google Anti-Gravity — Demo
      </h1>

      {/* 🌐 Floating Orbit Elements */}
      <div id="stage" className="w-full max-w-screen relative min-h-[65vh] pointer-events-none">
        {floatingItems.map((item, i) => (
          <FloatingElement key={i} index={i} screenWidth={screenWidth}>
            {item}
          </FloatingElement>
        ))}
      </div>
    </div>
  );
};

export default Home;
