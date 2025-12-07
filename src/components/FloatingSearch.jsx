import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingSearch() {
  const suggestions = [
    "React",
    "Tailwind",
    "Anti Gravity",
    "Framer Motion",
    "Interview",
    "JavaScript",
    "Frontend",
    "UI Design",
    "Animations",
  ];

  const [query, setQuery] = useState("");

  const filtered = suggestions.filter((s) =>
    s.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative w-full max-w-xl space-y-6">

      {/* 🔍 Input */}
      <motion.input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type to search..."
        className="w-full p-4 rounded-2xl bg-white/20 border border-white/30 
          backdrop-blur-xl text-white placeholder-white/60 
          shadow-lg focus:outline-none"
        whileFocus={{ scale: 1.03 }}
      />

      {/* ✨ Floating suggestions */}
      <div className="flex flex-wrap gap-3 relative min-h-10">
        <AnimatePresence>
          {filtered.length > 0 ? (
            filtered.map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  y: [0, -6, 2, -4, 0],
                  rotate: [-2, 2, -1, 1, 0],
                  scale: 1,
                }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{
                  duration: 1,
                  y: { repeat: Infinity, duration: 3, ease: "easeInOut" },
                  rotate: { repeat: Infinity, duration: 3, ease: "easeInOut" },
                }}
                className="px-4 py-2 text-sm text-white rounded-full bg-red-400/30 
                  border border-pink-300/30 backdrop-blur-lg 
                  shadow shadow-pink-300/40 cursor-pointer 
                  hover:bg-red-400/50 hover:scale-105 transition"
              >
                {highlight(item, query)}
              </motion.div>
            ))
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                y: [0, -6, 2, -4, 0],
                rotate: [-2, 2, -1, 1, 0],
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 1.5,
                y: { repeat: Infinity, duration: 3, ease: "easeInOut" },
                rotate: { repeat: Infinity, duration: 3, ease: "easeInOut" },
              }}
              className="text-white/70 w-full text-center italic"
            >
              Nothing found… floating away 🎈✨
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function highlight(text, query) {
  if (!query) return text;

  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text;

  return (
    <>
      {text.slice(0, idx)}
      <span className="text-pink-200 font-bold">
        {text.slice(idx, idx + query.length)}
      </span>
      {text.slice(idx + query.length)}
    </>
  );
}

function CuteParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
      {Array(18)
        .fill(0)
        .map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full bg-pink-200/60 shadow shadow-pink-400/60"
            initial={{
              x: Math.random() * 300,
              y: Math.random() * 140,
              opacity: 0.4,
            }}
            animate={{
              y: ["0%", "-12%", "8%", "-6%", "0%"],
              x: ["0%", "4%", "-3%", "2%", "0%"],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
    </div>
  );
}
