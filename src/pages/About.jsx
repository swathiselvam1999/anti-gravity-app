import { motion } from "framer-motion";
import planet1 from "../assets/globe-galaxy.png";
import planet2 from "../assets/pluto.png";
import FloatingBG from "../components/FloatingBG";

const About = () => {
  return (
    <div className="relative w-full min-h-screen bg-linear-to-b overflow-hidden pt-20">

      <FloatingBG/>

      {/* 🌍 Rotating Planets */}
      <motion.img
        src={planet1}
        alt="planet1"
        className="
          absolute 
          w-40 sm:w-52 md:w-60       /* responsive sizes */
          top-10 sm:top-15 
          left-4 sm:left-10
          drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]
        "
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
      />

      <motion.img
        src={planet2}
        alt="planet2"
        className="
          absolute 
          w-52 sm:w-72 md:w-90    
          bottom-4 md:bottom-1       
          right-4 md:right-1
          drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]
        "
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 60, ease: 'linear' }}
      />

      {/* ✨ About content */}
      <motion.div
        className="
          relative z-10 
          max-w-3xl 
          mx-auto 
          text-center 
          px-4 sm:px-6 
          py-16 sm:py-20 
          space-y-6
        "
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      >
        <h1 className="
          text-3xl sm:text-4xl md:text-5xl 
          font-extrabold 
          bg-linear-to-r 
          from-pink-400 via-purple-400 to-blue-400 
          bg-clip-text text-transparent 
        ">
          About Anti-Gravity UI
        </h1>

        <p className="text-white/80 text-base sm:text-lg">
          This demo shows a zero-gravity interface where elements float, wobble, and drift in space.
        </p>

        <p className="text-white/70 text-sm sm:text-base">
          Built using React, Tailwind CSS, and Framer Motion, it combines floating planets, stars, and animations
          to create an immersive, playful space experience.
        </p>

        <p className="text-white/70 text-sm sm:text-base">
          The goal is to make UI feel alive and weightless — perfect for futuristic dashboards, playful apps, or
          interactive demos.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
