import { motion } from "framer-motion";

export default function FloatingCard({ children, duration = 8 }) {
  return (
    <motion.div
      className="relative"
      animate={{
        y: [0, -10, 5, -5, 0],
        x: [0, 5, -5, 3, 0],
        rotate: [0, 1, -1, 1, 0],
      }}
      transition={{
        repeat: Infinity,
        duration,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
