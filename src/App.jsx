import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import Home from "./pages/Home";
import Search from "./pages/Search";
import About from "./pages/About";

// Lazy load Navbar
const Navbar = React.lazy(() => import("./components/Navbar"));

const App = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-900 to-slate-800 text-sky-100">
      <Suspense fallback={<div className="p-4 text-white">Loading Navbar...</div>}>
        <Navbar />
      </Suspense>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
