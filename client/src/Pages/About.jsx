import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import { Lightbulb, Globe, Target, Handshake, ArrowRight, CheckCircle } from "lucide-react";

const values = [
  { icon: Lightbulb, title: "Innovation First", desc: "Pioneering creative solutions that push boundaries and challenge conventions." },
  { icon: Globe, title: "Global Vision", desc: "Connecting India's Gen Z with opportunities that transcend borders." },
  { icon: Target, title: "Measurable Impact", desc: "Delivering results that matter through data-driven strategies and execution." },
  { icon: Handshake, title: "True Partnership", desc: "Building lasting relationships with brands, creators, and communities." },
];

const milestones = [
  { year: "2021", title: "Founded in Bangalore", desc: "ROAR ENT was born with a vision to empower youth." },
  { year: "2022", title: "First 10 Brand Deals", desc: "Signed our first major brand partnerships within the year." },
  { year: "2023", title: "10K+ Youth Reached", desc: "Our events and campaigns touched over ten thousand young lives." },
  { year: "2024", title: "50+ Partners", desc: "Expanded to 50+ brand partnerships across India." },
];

const About = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.45 }}
    className="bg-[#fffdf9]"
  >
    <Navbar />

    {/* ─── HERO ─────────────────────────────── */}
    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-[#fffdf9] pt-20">
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-[150px]" />
      <div className="absolute inset-0 opacity-[0.4]"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)", backgroundSize: "80px 80px" }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
        <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-orange-600 bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5 mb-6"
        >Our Story</motion.span>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-black text-gray-900 mb-6"
        >
          Who We <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-orange-400">Are</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
          className="text-gray-500 text-xl max-w-2xl mx-auto leading-relaxed"
        >
          A youth community platform bridging the gap between India's most capable youth
          and the work they love — through real-world experiences and meaningful connections.
        </motion.p>
      </div>
    </section>

    {/* ─── MISSION + VISION ─────────────────── */}
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              label: "Our Mission", title: "Empower Youth with Real Work",
              desc: "We connect talented young individuals with brands who need their energy, creativity, and skills.",
              items: ["Talent discovery & management", "Brand-youth collaborations", "Real-world skill development"],
            },
            {
              label: "Our Vision", title: "Building Tomorrow's Leaders",
              desc: "We envision a future where India's youth lead the global stage — every voice finds its platform.",
              items: ["Pan-India youth empowerment", "Gen Z brand ecosystem", "Sustainable community growth"],
            },
          ].map((card, i) => (
          <motion.div key={card.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 160, damping: 22, delay: i * 0.15 }}
              whileHover={{ y: -5, boxShadow: "0 14px 36px rgba(255,107,53,0.1)", transition: { type: "spring", stiffness: 300, damping: 20 } }}
              className="p-8 rounded-3xl bg-white border border-gray-100 hover:border-orange-200 transition-colors duration-300"
            >
              <span className="text-xs font-semibold tracking-widest uppercase text-orange-500 mb-3 block">{card.label}</span>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{card.title}</h3>
              <p className="text-gray-500 leading-relaxed mb-6">{card.desc}</p>
              <ul className="space-y-2">
                {card.items.map((it) => (
                  <li key={it} className="flex items-center gap-2 text-gray-700 text-sm">
                    <CheckCircle className="w-4 h-4 text-[#FF6B35] flex-shrink-0" />{it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ─── VALUES ───────────────────────────── */}
    <section className="py-24 bg-[#fffdf9]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-orange-600 bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5 mb-4">What We Stand For</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Our <span className="text-[#FF6B35]">Core Values</span></h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div key={v.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group p-6 rounded-2xl bg-[#fdf6f0] border border-orange-50 hover:border-orange-200 hover:bg-orange-50 hover:shadow-lg hover:shadow-orange-50 transition-all duration-300 text-center"
              whileHover={{ y: -5, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              >
                <div className="w-14 h-14 mx-auto bg-orange-50 border border-orange-100 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-orange-100 transition-colors">
                  <Icon className="w-6 h-6 text-[#FF6B35]" />
                </div>
                <h3 className="text-gray-900 font-semibold text-lg mb-2">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    {/* ─── TIMELINE ─────────────────────────── */}
    <section className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-orange-600 bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5 mb-4">Our Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Building <span className="text-[#FF6B35]">Milestones</span></h2>
        </motion.div>
        <div className="relative">
          <div className="absolute left-[60px] top-0 bottom-0 w-px bg-gradient-to-b from-[#FF6B35] via-orange-200 to-transparent" />
          <div className="space-y-10">
            {milestones.map((m, i) => (
              <motion.div key={m.year} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex gap-8 items-start pl-4"
              >
                <div className="flex flex-col items-center flex-shrink-0 w-[80px]">
                  <div className="w-4 h-4 bg-[#FF6B35] rounded-full border-2 border-white ring-2 ring-orange-200" />
                  <span className="text-[#FF6B35] font-bold text-sm mt-2">{m.year}</span>
                </div>
                <div className="pb-8">
                  <h4 className="text-gray-900 font-semibold text-lg mb-1">{m.title}</h4>
                  <p className="text-gray-400 text-sm">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* ─── CTA ──────────────────────────────── */}
    <section className="py-20 bg-[#fffdf9]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Join the <span className="text-[#FF6B35]">ROAR</span> Movement
          </h2>
          <p className="text-gray-500 text-lg mb-8 max-w-lg mx-auto">Whether you're a brand or a creator, we'd love to work with you.</p>
          <Link to="/contact"
            className="inline-flex items-center gap-2 bg-[#FF6B35] hover:bg-[#e55a25] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:shadow-xl hover:shadow-orange-200 group"
          >
            Let's Work Together <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>

    <Footer />
    <BackToTop />
  </motion.div>
);

export default About;
