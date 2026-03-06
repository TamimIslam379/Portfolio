export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/20">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-400 flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
        <div>© {new Date().getFullYear()} Sumaiya Akter</div>
        <div>Built with React + Tailwind + Framer Motion</div>
      </div>
    </footer>
  );
}
