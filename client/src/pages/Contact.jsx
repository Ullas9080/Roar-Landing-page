import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import MeshBg from "../components/MeshBg";
import { Phone, Mail, Instagram, ExternalLink, Send, MessageCircle, MapPin, Clock } from "lucide-react";

const contactInfo = [
  { icon: Phone,         label: "Phone",     value: "+91 9380673384",       href: "tel:+919380673384",                         color: "#FF6B35" },
  { icon: Mail,          label: "Email",     value: "roar.ent23@gmail.com", href: "mailto:roar.ent23@gmail.com",               color: "#60a5fa" },
  { icon: MessageCircle, label: "WhatsApp",  value: "Chat with us",          href: "https://wa.me/919380673384",                color: "#34d399" },
  { icon: Instagram,     label: "Instagram", value: "@roar_ent_official",    href: "https://instagram.com/roar_ent_official",   color: "#e879f9" },
  { icon: ExternalLink,  label: "Linktree",  value: "linktr.ee/roarent",     href: "https://linktr.ee/roarent",                color: "#fbbf24" },
  { icon: MapPin,        label: "Location",  value: "Bangalore, India",      href: "#",                                         color: "#a78bfa" },
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

  const inputBase = "w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 border";

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}
      style={{ background: "var(--bg)" }}>
      <Navbar />
      <div className="h-20" />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden pb-10 pt-16" style={{ background: "var(--bg)" }}>
        <MeshBg />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="aurora-1 absolute -top-20 right-1/4 w-[500px] h-[500px] rounded-full opacity-12"
            style={{ background: "radial-gradient(circle, #FF6B35 0%, transparent 70%)" }} />
          <div className="absolute inset-0 grid-overlay opacity-[0.28]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 text-center">
          <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="inline-block text-orange-400 text-xs font-semibold tracking-[0.22em] uppercase glass-orange rounded-full px-4 py-2 mb-7">
            Get In Touch
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 28, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.18 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{ color: "var(--text)" }}>
            Let's <span className="gradient-text">Connect</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
            className="text-xl max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>
            Have a project in mind? Let's talk — we respond within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* ── MAIN ── */}
      <section className="py-20 pb-28" style={{ background: "var(--bg-1)" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12">

            {/* LEFT */}
            <div>
              <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>Contact Information</h2>
              <p className="mb-8" style={{ color: "var(--text-muted)" }}>Reach us through any of these channels.</p>

              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {contactInfo.map(info => {
                  const Icon = info.icon;
                  return (
                    <a key={info.label} href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 glass rounded-2xl p-4 border-glow transition-all duration-200 hover:-translate-y-1"
                    >
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: `${info.color}15`, border: `1px solid ${info.color}30` }}>
                        <Icon className="w-4.5 h-4.5" style={{ color: info.color }} />
                      </div>
                      <div>
                        <p className="text-xs mb-0.5" style={{ color: "var(--text-dim)" }}>{info.label}</p>
                        <p className="text-sm font-medium group-hover:text-orange-400 transition-colors" style={{ color: "var(--text)" }}>{info.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="glass rounded-2xl p-5 glass-orange">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-orange-400" />
                  <span className="font-semibold text-sm" style={{ color: "var(--text)" }}>Response Time</span>
                </div>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>Mon – Sat: 9 AM – 7 PM IST</p>
                <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
                  We typically respond within <span className="text-orange-400 font-semibold">24 hours</span>.
                </p>
              </div>
            </div>

            {/* RIGHT – Form */}
            <motion.form onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
              className="glass rounded-3xl p-8 border-glow"
            >
              <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text)" }}>Send a Message</h2>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                {[
                  { label: "Name *",  key: "name",  type: "text",  placeholder: "Your name",        required: true },
                  { label: "Email *", key: "email", type: "email", placeholder: "you@example.com",  required: true },
                ].map(f => (
                  <div key={f.key}>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>{f.label}</label>
                    <input type={f.type} required={f.required} value={form[f.key]}
                      onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                      placeholder={f.placeholder}
                      className={inputBase}
                      style={{ background: "var(--surface)", borderColor: "var(--border)", color: "var(--text)" }}
                      onFocus={e => e.target.style.borderColor = "rgba(255,107,53,0.5)"}
                      onBlur={e => e.target.style.borderColor = "var(--border)"}
                    />
                  </div>
                ))}
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                {[
                  { label: "Phone",   key: "phone",   type: "tel",  placeholder: "+91 XXXXX XXXXX", required: false },
                  { label: "Subject", key: "subject", type: "text", placeholder: "Project Inquiry",  required: false },
                ].map(f => (
                  <div key={f.key}>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>{f.label}</label>
                    <input type={f.type} value={form[f.key]}
                      onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                      placeholder={f.placeholder}
                      className={inputBase}
                      style={{ background: "var(--surface)", borderColor: "var(--border)", color: "var(--text)" }}
                      onFocus={e => e.target.style.borderColor = "rgba(255,107,53,0.5)"}
                      onBlur={e => e.target.style.borderColor = "var(--border)"}
                    />
                  </div>
                ))}
              </div>
              <div className="mb-6">
                <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>Message *</label>
                <textarea required rows={5} value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your project..."
                  className={inputBase + " resize-none"}
                  style={{ background: "var(--surface)", borderColor: "var(--border)", color: "var(--text)" }}
                  onFocus={e => e.target.style.borderColor = "rgba(255,107,53,0.5)"}
                  onBlur={e => e.target.style.borderColor = "var(--border)"}
                />
              </div>

              <motion.button type="submit" whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 text-white transition-all duration-200 ${
                  sent ? "bg-emerald-500" : "bg-orange-500 hover:bg-orange-400 hover:shadow-xl hover:shadow-orange-500/20"
                }`}>
                {sent ? <>✓ Message Sent! We'll be in touch.</> : <><Send className="w-4 h-4" /> Send Message</>}
              </motion.button>
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
