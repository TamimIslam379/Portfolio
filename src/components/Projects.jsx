import { motion } from "framer-motion";
import { projects } from "../data/profile";
import SectionTitle from "./SectionTitile";



function TechPill({ t }) {
  return (
    <span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10">
      {t}
    </span>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative z-10">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <SectionTitle
          eyebrow="Projects"
          title="Things I’ve built"
          desc="A few projects that show my UI skills, integration work, and problem solving."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.55 }}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs text-cyan-300/90 uppercase tracking-widest">
                    {p.highlight}
                  </div>
                  <h4 className="mt-2 text-xl font-semibold">{p.title}</h4>
                </div>
                <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-cyan-400/25 to-violet-400/25 border border-white/10" />
              </div>

              <p className="mt-3 text-gray-300">{p.desc}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <TechPill key={t} t={t} />
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href={p.live}
                  className="px-4 py-2 rounded-full bg-cyan-400/15 border border-cyan-300/25 hover:bg-cyan-400/25 transition text-sm"
                >
                  Live
                </a>
                <a
                  href={p.code}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition text-sm"
                >
                  Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
