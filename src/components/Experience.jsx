import { motion } from "framer-motion";
import SectionTitle from "./SectionTitile";


const items = [
  {
    title: "Frontend Developer — Genzam IT (Remote)",
    time: "2024",
    bullets: [
      "Developed 6+ responsive web modules using React.js and REST APIs; improved load speed by 30%.",
      "Built 12+ reusable components; reduced development time by 25%.",
      "Supported 1,000+ active users via API integration and UI stability improvements.",
      "Fixed 40+ frontend bugs; collaborated with a 10+ member cross-functional team.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative z-10">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <SectionTitle
          eyebrow="Experience"
          title="Real work, real impact"
          desc="Quantified results and team collaboration."
        />

        <div className="space-y-6">
          {items.map((it) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-center justify-between gap-4">
                <h4 className="text-lg font-semibold">{it.title}</h4>
                <span className="text-sm text-gray-300">{it.time}</span>
              </div>
              <ul className="mt-4 text-gray-300 space-y-2 list-disc list-inside">
                {it.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
