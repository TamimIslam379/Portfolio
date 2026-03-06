import { motion } from "framer-motion";
import { skills } from "../data/profile";
import SectionTitle from "./SectionTitile";


function Chip({ text }) {
  return (
    <div className="px-3 py-2 rounded-xl border border-white/10 bg-black/20 text-sm text-gray-200 hover:border-cyan-300/30 transition">
      {text}
    </div>
  );
}

export default function Skills() {
  const groups = [
    { title: "Frontend", items: skills.frontend },
    { title: "Backend", items: skills.backend },
    { title: "Database", items: skills.database },
    { title: "Tools", items: skills.tools },
  ];

  return (
    <section id="skills" className="relative z-10">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <SectionTitle eyebrow="Skills" title="My toolbox" desc="A modern stack focused on speed, UI, and shipping." />

        <div className="grid md:grid-cols-2 gap-6">
          {groups.map((g, idx) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06, duration: 0.5 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="font-semibold text-cyan-200">{g.title}</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <Chip key={it} text={it} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
