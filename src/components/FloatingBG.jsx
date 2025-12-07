import { motion } from "framer-motion";

const FloatingBG = () => {
     const stars = Array.from({ length: 40 });
  return (
    <div>
        {/* 🌌 Stars / particles */}
      {stars.map((_, i) => (
        <motion.div
          key={i}
          className="w-1 h-1 rounded-full bg-white/80 absolute"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            x: [0, Math.random() * 10 - 5, 0],
            y: [0, Math.random() * 10 - 5, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 3 + Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

export default FloatingBG