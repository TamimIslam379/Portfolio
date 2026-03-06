import { motion } from "framer-motion";
import { profile } from "../data/profile";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: 0.12 * i, duration: 0.6 } }),
};

function GradientCard() {
  return (
    <div className="relative">
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-400/40 to-violet-400/40 blur-lg opacity-70" />
      <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glow">
        <div className="text-sm text-gray-300">Featured Stack</div>
        <div className="mt-3 text-2xl font-semibold">
          React <span className="text-gray-400">+</span> MERN
        </div>
        <div className="mt-2 text-gray-300 text-sm">
          Clean UI • Performance • Real-world apps
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3 text-xs">
          {["React", "Tailwind", "Node"].map((t) => (
            <div
              key={t}
              className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-center"
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative z-10">
        <h2 className="mt-3 text-4xl md:text-5xl font-bold leading-tight text-white"> Hello </h2>
      <div className="mx-auto max-w-6xl px-4 pt-16 pb-10 md:pt-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={fadeUp.show(0)}
              className="text-cyan-300/90 text-sm tracking-widest uppercase"
            >
              {profile.location}
            </motion.p>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              animate={fadeUp.show(1)}
              className="mt-3 text-4xl md:text-5xl font-bold leading-tight"
            >
              Hi, I’m <span className="text-cyan-300">{profile.name}</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={fadeUp.show(2)}
              className="mt-4 text-gray-200/90"
            >
              {profile.role}
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={fadeUp.show(3)}
              className="mt-4 text-gray-300 leading-relaxed"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={fadeUp.show(4)}
              className="mt-6 flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-full bg-cyan-400/20 border border-cyan-300/30 hover:bg-cyan-400/30 transition"
              >
                View Projects
              </a>
              <a
                href={profile.resumeLink}
                className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition"
              >
                Resume
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition flex items-center gap-2"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition flex items-center gap-2"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={fadeUp.show(5)}
              className="mt-8 grid grid-cols-3 gap-3"
            >
              {profile.stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="text-xl font-semibold text-cyan-200">{s.value}</div>
                  <div className="text-xs text-gray-300 mt-1">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:justify-self-end"
          >
            <GradientCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
