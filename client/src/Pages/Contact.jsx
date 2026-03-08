import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import { Phone, Mail, Instagram, ExternalLink, Send, MessageCircle, MapPin, Clock } from "lucide-react";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+91 9380673384", href: "tel:+919380673384", bg: "bg-orange-500", text: "text-white" },
  { icon: Mail, label: "Email", value: "roar.ent23@gmail.com", href: "mailto:roar.ent23@gmail.com", bg: "bg-gray-900", text: "text-white" },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: "https://wa.me/919380673384", bg: "bg-green-500", text: "text-white" },
  { icon: Instagram, label: "Instagram", value: "@roar_ent_official", href: "https://instagram.com/roar_ent_official", bg: "bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400", text: "text-white" },
  { icon: ExternalLink, label: "Linktree", value: "linktr.ee/roarent", href: "https://linktr.ee/roarent", bg: "bg-[#FF6B35]", text: "text-white" },
  { icon: MapPin, label: "Location", value: "Bangalore, India", href: "#", bg: "bg-blue-500", text: "text-white" },
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.45 }}
      className="bg-white"
    >
      <Navbar />

      {/* ─── HERO ─────────────────────────────── */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden bg-white pt-10">
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-[150px]" />
        <div className="absolute inset-0 opacity-[0.4]"
          style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)", backgroundSize: "80px 80px" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-orange-600 bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5 mb-6"
          >Get In Touch</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-7xl font-black text-gray-900 mb-6"
          >
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-orange-400">Connect</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.6 }}
            className="text-gray-500 text-xl max-w-2xl mx-auto"
          >Have a project in mind? Let's talk. We respond within 24 hours.</motion.p>
        </div>
      </section>

      {/* ─── MAIN CONTENT ─────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* LEFT */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Contact Information</h2>
              <p className="text-gray-400 mb-8">Reach us through any of these channels.</p>

              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <a key={info.label} href={info.href} target={info.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                      className="group flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-50 transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <div className={`w-11 h-11 ${info.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-5 h-5 ${info.text}`} />
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs mb-0.5">{info.label}</p>
                        <p className="text-gray-800 text-sm font-medium group-hover:text-[#FF6B35] transition-colors">{info.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="p-5 rounded-2xl bg-orange-50 border border-orange-100">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-[#FF6B35]" />
                  <span className="text-gray-900 font-semibold text-sm">Response Time</span>
                </div>
                <p className="text-gray-600 text-sm">Mon – Sat: 9 AM – 7 PM IST</p>
                <p className="text-gray-500 text-sm">We typically respond within <span className="text-orange-500 font-semibold">24 hours</span>.</p>
              </div>
            </div>

            {/* RIGHT — Form */}
            <div>
              <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm text-gray-500 mb-2">Your Name *</label>
                    <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="John Doe"
                      className="w-full bg-gray-50 border border-gray-200 focus:border-orange-400 focus:bg-white text-gray-900 placeholder-gray-400 rounded-xl px-4 py-3 text-sm outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-500 mb-2">Email *</label>
                    <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="john@example.com"
                      className="w-full bg-gray-50 border border-gray-200 focus:border-orange-400 focus:bg-white text-gray-900 placeholder-gray-400 rounded-xl px-4 py-3 text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm text-gray-500 mb-2">Phone</label>
                    <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 XXXXX XXXXX"
                      className="w-full bg-gray-50 border border-gray-200 focus:border-orange-400 focus:bg-white text-gray-900 placeholder-gray-400 rounded-xl px-4 py-3 text-sm outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-500 mb-2">Subject</label>
                    <input type="text" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="Project Inquiry"
                      className="w-full bg-gray-50 border border-gray-200 focus:border-orange-400 focus:bg-white text-gray-900 placeholder-gray-400 rounded-xl px-4 py-3 text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm text-gray-500 mb-2">Message *</label>
                  <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your project..."
                    className="w-full bg-gray-50 border border-gray-200 focus:border-orange-400 focus:bg-white text-gray-900 placeholder-gray-400 rounded-xl px-4 py-3 text-sm outline-none transition-all resize-none"
                  />
                </div>

                <motion.button type="submit" whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
                  className={`w-full py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-200
                    ${sent ? "bg-green-500 text-white" : "bg-[#FF6B35] hover:bg-[#e55a25] text-white hover:shadow-lg hover:shadow-orange-200"}`}
                >
                  {sent ? <>✓ Message Sent!</> : <><Send className="w-4 h-4" /> Send Message</>}
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </motion.div>
  );
};

export default Contact;
