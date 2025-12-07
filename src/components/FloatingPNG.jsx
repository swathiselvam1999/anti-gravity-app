import { motion } from "framer-motion";

export default function FloatingPNG({ src, size = 80, left, top, duration = 6, className=''}) {
  return (
    <motion.img
      src={src}
      alt=""
      style={{
        width: size,
        position: "absolute",
        left,
        top,
        pointerEvents: "none",
      }}
      initial={{ y: 0 }}
      animate={{ y: [0, -15, 5, -10, 0] }}
      transition={{
        repeat: Infinity,
        duration,
        ease: "easeInOut",
      }}
      className={`absolute w-[${size}px] ${className}`}
    />
  );
}
