import { useEffect, useState } from "react";

export default function GlowCursor() {
  const [pos, setPos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden="true">
      <div
        className="absolute w-56 h-56 rounded-full blur-3xl opacity-40"
        style={{
          transform: `translate(${pos.x - 112}px, ${pos.y - 112}px)`,
          background:
            "radial-gradient(circle, rgba(34,211,238,.55), rgba(139,92,246,.25), transparent 70%)",
        }}
      />
    </div>
  );
}
