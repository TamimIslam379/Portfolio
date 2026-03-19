import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "../data/profile";
import SectionTitle from "./SectionTitile";

export default function Contact() {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
       await emailjs.sendForm(
         import.meta.env.VITE_EMAILJS_SERVICE_ID,
         import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
         formRef.current,
         {
           publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
         },
       );

      alert("Message sent successfully ✅");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message ❌");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative z-10">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <SectionTitle
          eyebrow="Contact"
          title="Let’s build something amazing"
          desc="Send a message and I’ll reply as soon as I can."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="text-gray-300">
              Email me directly:
              <div className="mt-2 font-semibold text-cyan-200">
                {profile.email}
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:bg-white/10"
              >
                <FaGithub /> GitHub
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:bg-white/10"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </div>

          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <label className="block text-sm text-gray-300">Name</label>
            <input
              type="text"
              name="user_name"
              className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-cyan-300/40"
              placeholder="Your name"
              required
            />

            <label className="mt-4 block text-sm text-gray-300">Email</label>
            <input
              type="email"
              name="user_email"
              className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-cyan-300/40"
              placeholder="you@email.com"
              required
            />

            <label className="mt-4 block text-sm text-gray-300">Message</label>
            <textarea
              name="message"
              className="mt-2 min-h-[120px] w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-cyan-300/40"
              placeholder="Let’s work together..."
              required
            />

            <button
              type="submit"
              disabled={sending}
              className="mt-5 w-full rounded-xl border border-cyan-300/30 bg-cyan-400/20 py-3 font-semibold transition hover:bg-cyan-400/30 disabled:opacity-60"
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
