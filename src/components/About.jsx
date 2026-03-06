import { motion } from "framer-motion";
import SectionTitle from "./SectionTitile";


export default function About() {
  return (
    <section id="about" className="relative z-10">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <SectionTitle
          eyebrow="About"
          title="Building clean UI that feels fast."
          desc="React-focused Frontend Developer with MERN experience. I love reusable components, smooth UX, and shipping real-world features."
        />

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            whileHover={{ y: -4 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <div className="text-cyan-200 font-semibold">What I do</div>
            <ul className="mt-3 text-gray-300 space-y-2 list-disc list-inside">
              <li>Pixel-perfect responsive UI with React + Tailwind</li>
              <li>REST API integration and state management</li>
              <li>Performance optimization and clean code</li>
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <div className="text-violet-200 font-semibold">How I work</div>
            <ul className="mt-3 text-gray-300 space-y-2 list-disc list-inside">
              <li>Component-driven development</li>
              <li>Collaboration in 10+ member teams</li>
              <li>Consistent shipping + bug fixing</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
