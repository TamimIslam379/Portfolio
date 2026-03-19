import { motion } from "framer-motion";
import SectionTitle from "./SectionTitile";


const items = [
  {
    title: "QA Harbour",
    time: "2024",
    bullets: [
      "Worked as a Frontend Developer at QA Harbour, a Quality Assurance company.",
      "Built modern, responsive web interfaces using React, JavaScript, and Tailwind CSS.",
      "Collaborated with QA teams to detect, troubleshoot, and fix UI-related issues.",
      "Integrated backend services through REST APIs for seamless application functionality.",
      "Focused on writing clean, reusable, and maintainable code to improve overall product quality.",
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
