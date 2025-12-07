import FloatingSearch from "../components/FloatingSearch";
import FloatingPNG from "../components/FloatingPNG";
import FloatingBG from "../components/FloatingBG";
import astronaut from "../assets/astronaut-search.png";

const Search = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden pt-24 flex flex-col items-center">

      {/* 🌌 Background stars & glow */}
      <FloatingBG />

      {/* 🧑‍🚀 Astronaut (responsive position + size) */}
      <FloatingPNG
        src={astronaut}
        size={window.innerWidth < 480 ? 220 : window.innerWidth < 768 ? 300 : 420}
        left={window.innerWidth < 480 ? "50%" : "1%"}
        top={window.innerWidth < 480 ? "12%" : "20%"}
        duration={8}
        className="drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
      />

      {/* Heading + search container */}
      <div className="z-10 w-full flex flex-col items-center mt-16 px-4">
        <h2 className="mb-6 text-center text-transparent bg-clip-text bg-linear-to-r 
          from-red-400 via-pink-400 to-purple-400 
          font-extrabold 
          text-3xl sm:text-4xl md:text-5xl">
          Floating Search
        </h2>

        <div className="w-full max-w-xl">
          <FloatingSearch />
        </div>
      </div>
    </div>
  );
};

export default Search;
