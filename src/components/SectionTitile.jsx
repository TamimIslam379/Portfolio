export default function SectionTitle({ eyebrow, title, desc }) {
  return (
    <div className="mb-8">
      <div className="text-xs uppercase tracking-widest text-cyan-300/90">{eyebrow}</div>
      <h3 className="mt-2 text-2xl md:text-3xl font-semibold">{title}</h3>
      {desc ? <p className="mt-2 text-gray-300 max-w-2xl">{desc}</p> : null}
    </div>
  );
}
