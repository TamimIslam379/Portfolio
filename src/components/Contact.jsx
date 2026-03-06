
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "../data/profile";
import SectionTitle from "./SectionTitile";

export default function Contact() {
  return (
    <section id="contact" className="relative z-10">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <SectionTitle
          eyebrow="Contact"
          title="Let’s build something amazing"
          desc="Send a message and I’ll reply as soon as I can."
        />

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="text-gray-300">
              Email me directly:
              <div className="mt-2 text-cyan-200 font-semibold">{profile.email}</div>
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition flex items-center gap-2"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition flex items-center gap-2"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </div>

            <p className="mt-6 text-sm text-gray-400">
              Tip: Add your live project links in <code>src/data/profile.js</code> for maximum impact.
            </p>
          </div>

          <form
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Hook this form to EmailJS / Formspree when you’re ready ✅");
            }}
          >
            <label className="block text-sm text-gray-300">Name</label>
            <input
              className="mt-2 w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 outline-none focus:border-cyan-300/40"
              placeholder="Your name"
              required
            />

            <label className="block text-sm text-gray-300 mt-4">Email</label>
            <input
              type="email"
              className="mt-2 w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 outline-none focus:border-cyan-300/40"
              placeholder="you@email.com"
              required
            />

            <label className="block text-sm text-gray-300 mt-4">Message</label>
            <textarea
              className="mt-2 w-full min-h-[120px] rounded-xl bg-black/30 border border-white/10 px-4 py-3 outline-none focus:border-cyan-300/40"
              placeholder="Let’s work together..."
              required
            />

            <button
              type="submit"
              className="mt-5 w-full rounded-xl bg-cyan-400/20 border border-cyan-300/30 hover:bg-cyan-400/30 transition py-3 font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
