import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import MeshBg from "../components/MeshBg";
import { CheckCircle, Target, Globe, BarChart3, Handshake, Lightbulb } from "lucide-react";

const values = [
  { icon: Lightbulb, title: "Innovation First",   desc: "Pioneering solutions that push boundaries and challenge conventions for India's youth." },
  { icon: Globe,     title: "Global Vision",       desc: "Connecting India's Gen Z with opportunities that transcend borders and demographics." },
  { icon: BarChart3, title: "Measurable Impact",  desc: "Data-driven strategies that deliver real, trackable results for every partner." },
  { icon: Handshake, title: "True Partnership",   desc: "Building lasting relationships — not just transactions — with every brand we touch." },
];

const milestones = [
  { year: "2023", num: "01", title: "10K+ Youth Reached",     desc: "Events and campaigns touched over ten thousand young lives across India." },
  { year: "2024", num: "02", title: "50+ Brand Partners",     desc: "Expanded operations across Mumbai, Delhi, Hyderabad, Pune, Chennai and beyond." },
  { year: "2025", num: "03", title: "100+ Projects Delivered",desc: "Crossed the milestone of 100 successfully completed projects across all verticals." },
];

const About = () => (
  <motion.div
    initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
    transition={{ duration: 0.3 }}
    className="bg-[var(--bg)] min-h-screen"
  >
    <Navbar />
    <div className="h-16" />

    {/* ── HERO ── */}
    <section className="relative overflow-hidden w-full border-b border-[var(--border)] py-20 lg:py-32" style={{ minHeight: "calc(70vh - 64px)" }}>
      <MeshBg />
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 flex flex-col items-center text-center">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 mb-6 bg-[var(--bg-1)] border border-[var(--border)]">
          <span className="text-xs font-semibold tracking-wide text-[var(--text)] uppercase">Our Story</span>
        </motion.div>
        
        <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight tracking-tight mb-6 text-gradient pb-1">
          Who We Are
        </motion.h1>
        
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="text-xl leading-relaxed max-w-2xl mb-12 text-[var(--text-muted)]">
          A youth community platform bridging the gap between India's most capable young talent and the brands, events, and opportunities they deserve.
        </motion.p>
        
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4">
          {[["100+","Projects"],["50+","Partners"],["10K+","Youth Reached"],["2023","Founded"]].map(([v,l]) => (
            <div key={l} className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl px-6 py-4 text-center min-w-[120px] shadow-sm">
              <p className="text-xl font-bold text-[var(--accent)] tracking-tight mb-1">{v}</p>
              <p className="text-xs font-medium text-[var(--text-muted)]">{l}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* ── MISSION + VISION ── */}
    <section className="py-24 bg-[var(--bg-1)] border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="block text-sm font-semibold tracking-tight uppercase text-[var(--text-muted)] mb-3">Purpose</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--text)]">Mission & Vision</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            { icon: Target, label: "Our Mission", title: "Empower Youth with Real Work", desc: "We connect talented young individuals with brands who need their energy, creativity, and skills for real outcomes.", items: ["Talent discovery & management","Brand-youth collaborations","Real-world skill development"] },
            { icon: Globe,  label: "Our Vision",  title: "Building Tomorrow's Leaders",  desc: "A future where every young person in India has access to platforms that amplify their voice and accelerate growth.", items: ["Pan-India youth empowerment","Gen Z brand ecosystem","Sustainable community growth"] },
          ].map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div key={card.label}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="card rounded-2xl p-8 flex flex-col"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[var(--bg-1)] border border-[var(--border)] text-[var(--accent)]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold tracking-widest text-[var(--text-muted)] uppercase">{card.label}</span>
                    <h3 className="text-xl font-bold text-[var(--text)] tracking-tight mt-1">{card.title}</h3>
                  </div>
                </div>
                
                <p className="text-sm leading-relaxed mb-8 text-[var(--text-muted)] flex-1">{card.desc}</p>
                
                <ul className="space-y-3 pt-6 border-t border-[var(--border)]">
                  {card.items.map(it => (
                    <li key={it} className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
                      <CheckCircle className="w-4 h-4 text-[var(--accent)] flex-shrink-0" />
                      <span className="font-medium">{it}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    {/* ── VALUES ── */}
    <section className="py-24 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <span className="block text-sm font-semibold tracking-tight uppercase text-[var(--text-muted)] mb-3">What We Stand For</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--text)]">Core Values</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div key={v.title}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="card rounded-xl p-6"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--bg-1)] border border-[var(--border)] text-[var(--accent)] mb-5">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-[var(--text)] tracking-tight">{v.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">{v.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    {/* ── TIMELINE ── */}
    <section className="py-24 bg-[var(--bg-1)] border-t border-[var(--border)]">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="block text-sm font-semibold tracking-tight uppercase text-[var(--text-muted)] mb-3">Our Journey</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--text)]">Building Milestones</h2>
        </motion.div>

        <div className="relative">
          {/* Strict vertical line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-[var(--border)]" />
          
          <div className="space-y-10 pl-12 relative">
            {milestones.map((m, i) => (
              <motion.div key={m.year}
                initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="relative"
              >
                {/* Structural dot indicator */}
                <div className="absolute -left-[48.5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[var(--accent)] border-2 border-[var(--bg-1)]" />

                <div className="card rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-sm font-bold text-[var(--text-muted)]">{m.year}</span>
                    <span className="w-1 h-1 rounded-full bg-[var(--border)]" />
                    <h4 className="font-semibold text-base text-[var(--text)]">{m.title}</h4>
                  </div>
                  <p className="text-sm leading-relaxed text-[var(--text-muted)]">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* ── CTA ── */}
    <section className="py-24 bg-[var(--bg)] border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden p-12 md:p-20 text-center bg-[var(--accent)] border border-[var(--border)]">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-[var(--bg)]">Join the ROAR Movement</h2>
            <p className="text-lg mb-8 max-w-xl mx-auto opacity-80 text-[var(--bg)] font-medium">Whether you're a brand or a creator, let's build something remarkable together.</p>
            <Link to="/contact" className="inline-flex items-center justify-center bg-[var(--bg)] text-[var(--text)] px-8 py-3.5 rounded-lg font-medium hover:bg-white transition-colors">
              Let's Work Together
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
