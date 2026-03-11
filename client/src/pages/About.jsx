import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import MeshBg from "../components/MeshBg";
import { ArrowRight, CheckCircle, Target, Globe, BarChart3, Handshake, Lightbulb } from "lucide-react";


const values = [
  { icon: Lightbulb, title: "Innovation First",   desc: "Pioneering solutions that push boundaries and challenge conventions for India's youth." },
  { icon: Globe,     title: "Global Vision",       desc: "Connecting India's Gen Z with opportunities that transcend borders and demographics." },
  { icon: BarChart3, title: "Measurable Impact",  desc: "Data-driven strategies that deliver real, trackable results for every partner." },
  { icon: Handshake, title: "True Partnership",   desc: "Building lasting relationships — not just transactions — with every brand we touch." },
];

// milestones now begin from our first major growth year
const milestones = [
  { year: "2023", title: "10K+ Youth Reached",     desc: "Events and campaigns touched over ten thousand young lives across India." },
  { year: "2024", title: "50+ Brand Partners",     desc: "Expanded operations across Mumbai, Delhi, Hyderabad, Pune, Chennai and beyond." },
  { year: "2025", title: "100+ Projects Delivered",desc: "Crossed the milestone of 100 successfully completed projects across all verticals." },
];

const About = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}
    style={{ background: "var(--bg)" }}>
    <Navbar />
    {/* Spacer */}
    <div className="h-20" />

    {/* ── HERO ── */}
    <section className="relative overflow-hidden pb-12 pt-16" style={{ background: "var(--bg)", minHeight: "calc(70vh - 80px)" }}>
      <MeshBg prominent />
      {/* NOTE: `Aurora` component was removed; background handled by MeshBg */}      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 flex flex-col items-center text-center">
        <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="inline-block text-orange-400 text-xs font-semibold tracking-[0.22em] uppercase glass-orange rounded-full px-4 py-2 mb-7">
          Our Story
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 28, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.18 }}
          className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
          style={{ color: "var(--text)" }}>
          Who We <span className="gradient-text">Are</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.38 }}
          className="text-xl leading-relaxed max-w-2xl mb-12" style={{ color: "var(--text-muted)" }}>
          A youth community platform bridging the gap between India's most capable young talent and the brands, events, and opportunities they deserve.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.52 }}
          className="flex flex-wrap justify-center gap-4">
          {[["100+","Projects"],["50+","Partners"],["10K+","Youth Reached"],["2023","Founded"]].map(([v,l]) => (
            <div key={l} className="glass rounded-2xl px-6 py-4 text-center min-w-[110px]">
              <p className="text-xl font-black gradient-text">{v}</p>
              <p className="text-xs mt-1" style={{ color: "var(--text-dim)" }}>{l}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* ── MISSION + VISION ── */}
    <section className="py-24" style={{ background: "var(--bg-1)" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="block text-orange-400 text-xs font-semibold tracking-[0.22em] uppercase mb-4">Purpose</span>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: "var(--text)" }}>Mission & <span className="gradient-text">Vision</span></h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: Target, label: "Our Mission", title: "Empower Youth with Real Work", img: "/images/service-event.jpg", desc: "We connect talented young individuals with brands who need their energy, creativity, and skills for real outcomes.", items: ["Talent discovery & management","Brand-youth collaborations","Real-world skill development"] },
            { icon: Globe,  label: "Our Vision",  title: "Building Tomorrow's Leaders",  img: "/images/service-marketing.jpg", desc: "A future where every young person in India has access to platforms that amplify their voice and accelerate growth.", items: ["Pan-India youth empowerment","Gen Z brand ecosystem","Sustainable community growth"] },
          ].map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div key={card.label}
                initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6, transition: { type: "spring", stiffness: 280, damping: 20 } }}
                className="glass rounded-3xl overflow-hidden border-glow"
              >
                <div className="relative h-40 overflow-hidden">
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover opacity-50 hover:opacity-65 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-5">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{ background: "rgba(255,107,53,0.2)", border: "1px solid rgba(255,107,53,0.35)" }}>
                      <Icon className="w-4.5 h-4.5 text-orange-400" />
                    </div>
                  </div>
                </div>
                <div className="p-7">
                  <span className="block text-orange-400 text-xs font-semibold tracking-widest uppercase mb-2">{card.label}</span>
                  <h3 className="text-xl font-bold mb-3" style={{ color: "var(--text)" }}>{card.title}</h3>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-muted)" }}>{card.desc}</p>
                  <ul className="space-y-2">
                    {card.items.map(it => (
                      <li key={it} className="flex items-center gap-2 text-sm" style={{ color: "var(--text-muted)" }}>
                        <CheckCircle className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" />{it}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    {/* ── VALUES ── */}
    <section className="py-24" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="block text-orange-400 text-xs font-semibold tracking-[0.22em] uppercase mb-4">What We Stand For</span>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: "var(--text)" }}>Core <span className="gradient-text">Values</span></h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div key={v.title}
                initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                whileHover={{ y: -7, transition: { type: "spring", stiffness: 280, damping: 20 } }}
                className="glass rounded-3xl p-7 border-glow"
              >
                <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: "rgba(255,107,53,0.1)", border: "1px solid rgba(255,107,53,0.2)" }}>
                  <Icon className="w-5 h-5 text-orange-400" />
                </div>
                <h3 className="font-semibold text-lg mb-2" style={{ color: "var(--text)" }}>{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{v.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    {/* ── TIMELINE ── */}
    <section className="py-24" style={{ background: "var(--bg-1)" }}>
      <div className="max-w-2xl mx-auto px-6 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <span className="block text-orange-400 text-xs font-semibold tracking-[0.22em] uppercase mb-4">Our Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: "var(--text)" }}>Building <span className="gradient-text">Milestones</span></h2>
        </motion.div>
        <div className="relative pl-2">
          <div className="absolute left-[76px] top-2 bottom-2 w-px"
            style={{ background: "linear-gradient(to bottom, #FF6B35, rgba(255,107,53,0.2), transparent)" }} />
          <div className="space-y-6">
            {milestones.map((m, i) => (
              <motion.div key={m.year}
                initial={{ opacity: 0, x: -22 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex gap-8 items-start">
                <div className="flex flex-col items-center flex-shrink-0 w-[88px]">
                  <div className="w-3 h-3 bg-orange-500 rounded-full" style={{ boxShadow: "0 0 0 4px rgba(255,107,53,0.2)" }} />
                  <span className="text-orange-400 font-bold text-sm mt-2">{m.year}</span>
                </div>
                <motion.div whileHover={{ x: 5 }} className="glass rounded-2xl px-5 py-4 flex-1 mb-2">
                  <h4 className="font-semibold text-base mb-1" style={{ color: "var(--text)" }}>{m.title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{m.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* ── CTA ── */}
    <section className="py-24" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          className="relative rounded-[2rem] overflow-hidden p-12 md:p-20 text-center noise"
          style={{ background: "linear-gradient(135deg, #FF6B35 0%, #e05520 50%, #b33d10 100%)" }}>
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-20"
            style={{ background: "radial-gradient(circle, #fff, transparent)" }} />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Join the ROAR Movement</h2>
            <p className="text-orange-100/70 text-lg mb-8 max-w-lg mx-auto">Whether you're a brand or a creator, let's build something remarkable together.</p>
            <Link to="/contact"
              className="inline-flex items-center gap-2 bg-white text-orange-500 hover:bg-orange-50 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:shadow-2xl group">
              Let's Work Together <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    <Footer />
    <BackToTop />
  </motion.div>
);

export default About;
