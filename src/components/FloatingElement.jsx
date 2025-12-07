import { useEffect, useRef } from "react";

export default function FloatingElement({ children, index, screenWidth }) {
  const elRef = useRef(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    let angle = (index * 45) * (Math.PI / 180);
    const speed = 0.009;

    // Responsive orbit radius
    const radius =
      screenWidth < 480 ? 120 :
      screenWidth < 768 ? 200 :
      420;

    const depth =
      screenWidth < 480 ? 80 :
      screenWidth < 768 ? 120 :
      200;

    function animate() {
      angle += speed;

      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * depth;

      const scale = 0.55 + (y + depth) / (2 * depth);

      el.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
      el.style.zIndex = Math.round(scale * 100);

      requestAnimationFrame(animate);
    }

    animate();
  }, [index, screenWidth]);

  return (
    <div
      ref={elRef}
      className="absolute text-3xl sm:text-4xl md:text-5xl font-bold left-1/2 top-1/2"
    >
      {children}
    </div>
  );
}
