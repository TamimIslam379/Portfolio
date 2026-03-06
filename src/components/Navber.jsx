import { useEffect, useState } from "react";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="sticky top-0 z-50">
      <div
        className={`mx-auto max-w-6xl px-4 py-3 transition ${
          scrolled ? "backdrop-blur bg-black/30 border-b border-white/10" : ""
        }`}
      >
        <div className="flex items-center justify-between">
          <button onClick={() => go("top")} className="font-semibold tracking-wide">
            <span className="text-cyan-300">S</span>umaiya
          </button>
          <div className="hidden md:flex gap-6 text-sm text-gray-200">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className="hover:text-cyan-300 transition"
              >
                {l.label}
              </button>
            ))}
          </div>
          <button
            onClick={() => go("contact")}
            className="text-sm px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-300/30 hover:bg-cyan-400/20 transition"
          >
            Let’s Talk
          </button>
        </div>
      </div>
    </div>
  );
}
