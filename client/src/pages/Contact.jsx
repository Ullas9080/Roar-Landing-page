import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import MeshBg from "../components/MeshBg";
import { Phone, Mail, Instagram, ExternalLink, Send, MessageCircle, MapPin, Clock } from "lucide-react";

const contactInfo = [
  { icon: Phone,         label: "Phone",     value: "+91 9380673384",       href: "tel:+919380673384" },
  { icon: Mail,          label: "Email",     value: "roar.ent23@gmail.com", href: "mailto:roar.ent23@gmail.com" },
  { icon: MessageCircle, label: "WhatsApp",  value: "Chat with us",          href: "https://wa.me/919380673384" },
  { icon: Instagram,     label: "Instagram", value: "@roar_ent_official",    href: "https://instagram.com/roar_ent_official" },
  { icon: ExternalLink,  label: "Linktree",  value: "linktr.ee/roarent",     href: "https://linktr.ee/roarent" },
  { icon: MapPin,        label: "Location",  value: "Bangalore, India",      href: "#" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}
      transition={{ duration: 0.3 }}
      className="bg-[var(--bg)] min-h-screen"
    >
      <Navbar />
      <div className="h-16" />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden border-b border-[var(--border)] py-20 lg:py-32" style={{ background: "var(--bg)" }}>
        <MeshBg />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 mb-6 bg-[var(--bg-1)] border border-[var(--border)]">
            <span className="text-xs font-semibold tracking-wide text-[var(--orange)] uppercase">Get In Touch</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-gradient pb-1">
            Let's Build Something
            <br className="hidden sm:block" /> Extraordinary Together
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-xl max-w-xl mx-auto text-[var(--text-muted)]">
            Have a project in mind? Let's talk — we respond within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* ── MAIN ── */}
      <section className="py-24 bg-[var(--bg-1)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16">

            {/* LEFT */}
            <div>
              <h2 className="text-2xl font-bold mb-2 text-[var(--text)] tracking-tight">Contact Information</h2>
              <p className="mb-8 text-[var(--text-muted)]">Reach us through any of these channels.</p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {contactInfo.map(info => {
                  const Icon = info.icon;
                  return (
                    <a key={info.label} href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="card rounded-xl p-5 flex flex-col gap-3 group"
                    >
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--bg-1)] border border-[var(--border)] text-[var(--text-muted)] group-hover:text-[var(--text)] transition-colors">
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <p className="text-xs mb-1 font-medium tracking-wide uppercase text-[var(--text-dim)]">{info.label}</p>
                        <p className="text-sm font-semibold text-[var(--text)]">{info.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="card rounded-xl p-6 border-[var(--border)] bg-[var(--bg)]">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-[var(--accent)]" />
                  <span className="font-semibold text-sm text-[var(--text)]">Response Time</span>
                </div>
                <p className="text-sm text-[var(--text-muted)]">Mon – Sat: 9 AM – 7 PM IST</p>
                <p className="text-sm mt-1 text-[var(--text-muted)]">
                  We typically respond within <span className="font-semibold text-[var(--text)]">24 hours</span>.
                </p>
              </div>
            </div>

            {/* RIGHT – Standard Form */}
            <motion.form onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="card rounded-2xl p-8 md:p-10 border border-[var(--border)]"
            >
              <h2 className="text-2xl font-bold mb-8 text-[var(--text)] tracking-tight">Send a Message</h2>

              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-xs font-semibold mb-2 text-[var(--text-muted)] uppercase tracking-wide">Name *</label>
                  <input type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                    className="input-base" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-2 text-[var(--text-muted)] uppercase tracking-wide">Email *</label>
                  <input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                    className="input-base" placeholder="john@example.com" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-xs font-semibold mb-2 text-[var(--text-muted)] uppercase tracking-wide">Phone</label>
                  <input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                    className="input-base" placeholder="+91 90000 00000" />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-2 text-[var(--text-muted)] uppercase tracking-wide">Subject</label>
                  <input type="text" value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}
                    className="input-base" placeholder="How can we help?" />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-xs font-semibold mb-2 text-[var(--text-muted)] uppercase tracking-wide">Message *</label>
                <textarea required rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                  className="input-base resize-none" placeholder="Tell us about your project..." />
              </div>

              <button type="submit"
                className={`w-full py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors ${
                  sent ? "bg-emerald-500 text-white" : "btn-primary box-border"
                }`}>
                {sent ? <>✓ Message Sent! We'll be in touch.</> : <><Send className="w-4 h-4" /> Send Message</>}
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </motion.div>
  );
};

export default Contact;
