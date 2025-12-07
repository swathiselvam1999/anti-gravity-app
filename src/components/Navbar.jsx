import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/search", label: "Search" },
  { to: "/about", label: "About" },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  // For floating icons
  const iconRefs = useRef([]);
  const icons = ["🌌", "🚀", "🪐"];

  useEffect(() => {
    iconRefs.current.forEach((el, i) => {
      if (!el) return;
      let angle = Math.random() * 2 * Math.PI;
      const speed = 0.02 + Math.random() * 0.01;
      const radius = 15 + i * 5; // spacing icons

      function animate() {
        angle += speed;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        el.style.transform = `translate(${x}px, ${y}px)`;
        requestAnimationFrame(animate);
      }
      animate();
    });
  }, []);

  const isActive = (path) =>
    pathname === path
      ? "text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]"
      : "text-white/70";

  return (
    <nav className="flex items-center justify-between p-4 w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-white/5 border-b border-white/10">
      
      {/* Logo with floating icons */}
      <div className="relative font-extrabold text-2xl tracking-wide 
                      bg-linear-to-r from-pink-400 via-purple-400 to-blue-400
                      bg-clip-text text-transparent cursor-pointer">
        AntiGravity
        {icons.map((icon, i) => (
          <span
            key={i}
            ref={(el) => (iconRefs.current[i] = el)}
            className="absolute left-1/2 top-1/2 text-sm"
          >
            {icon}
          </span>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-6 items-center ml-auto">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`relative px-4 py-2 rounded-md transition-all duration-300
                        hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]
                        ${isActive(item.to)}`}
          >
            {item.label}
            {pathname === item.to && (
              <span className="absolute left-1/2 -bottom-1 w-1 h-1 bg-white rounded-full -translate-x-1/2 animate-ping" />
            )}
          </Link>
        ))}
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="absolute top-full left-0 w-full flex flex-col gap-2 bg-black/40 backdrop-blur-xl border-b border-white/10 p-4 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={`relative px-4 py-3 rounded-lg text-center transition-all duration-300
                          hover:bg-white/10 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]
                          ${isActive(item.to)}`}
            >
              {item.label}
              {pathname === item.to && (
                <span className="absolute left-1/2 -bottom-1 w-1 h-1 bg-white rounded-full -translate-x-1/2 animate-ping" />
              )}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
