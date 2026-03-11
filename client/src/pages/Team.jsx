import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import MeshBg from "../components/MeshBg";
import { Linkedin, Twitter, Instagram, ArrowRight } from "lucide-react";

const teamMembers = [
  { name: "Founder & CEO",      role: "Visionary Leader",  img: "/images/team-1.jpg", bio: "Passionate about connecting India's youth with meaningful opportunities. Building ROAR ENT from the ground up since 2021.", since: "2021", socials: { linkedin: "#", twitter: "#", instagram: "#" } },
  { name: "Creative Director",  role: "Design & Creative", img: "/images/team-2.jpg", bio: "Award-winning creative behind ROAR's campaigns and brand identity — from bold concepts to polished execution.", since: "2021", socials: { linkedin: "#", twitter: "#", instagram: "#" } },
  { name: "Marketing Head",     role: "Growth & Strategy", img: "/images/team-3.jpg", bio: "Data-driven marketer with a deep love for youth culture. Converting audience insights into campaigns that resonate.", since: "2022", socials: { linkedin: "#", twitter: "#", instagram: "#" } },
];

const stats = [
  { v: "100%", l: "Passion Driven" },
  { v: "∞",    l: "Creative Possibilities" },
  { v: "24/7", l: "Committed to You" },
  { v: "0",    l: "Limits Set" },
];

const Team = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}
    style={{ background: "var(--bg)" }}>
    <Navbar />
    <div className="h-20" />

    {/* Hero */}
    <section className="relative overflow-hidden pb-10 pt-14" style={{ background: "var(--bg)" }}>
      <MeshBg prominent />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="aurora-1 absolute -top-16 -right-16 w-[450px] h-[450px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #FF6B35 0%, transparent 70%)" }} />
        <div className="absolute inset-0 grid-overlay opacity-40" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 text-center">
        <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="inline-block text-orange-500 text-xs font-semibold tracking-[0.22em] uppercase glass-orange rounded-full px-4 py-2 mb-7">
          The People
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 24, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.75, delay: 0.18 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{ color: "var(--text)" }}>
          Meet The <span className="gradient-text">Creators</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.34 }}
          className="text-xl max-w-2xl mx-auto" style={{ color: "var(--text-muted)" }}>
          A diverse, passionate team bringing expertise in events, marketing, design, and technology.
        </motion.p>
      </div>
    </section>

    {/* Team Grid */}
    <section className="py-20" style={{ background: "var(--bg-1)" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {teamMembers.map((m, i) => (
            <motion.div key={m.name}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { type: "spring", stiffness: 280, damping: 20 } }}
              className="card rounded-3xl overflow-hidden group border-glow"
            >
              {/* Full-brightness team photo */}
              <div className="relative overflow-hidden" style={{ height: "260px" }}>
                <img src={m.img} alt={m.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                {/* Since badge — white pill */}
                <span className="absolute top-3 left-3 text-xs rounded-full px-3 py-1.5 backdrop-blur-md"
                  style={{ background: "rgba(255,255,255,0.88)", color: "var(--text-muted)", border: "1px solid var(--card-border)" }}>
                  Since {m.since}
                </span>
                {/* Social icons — appear on hover, white pills */}
                <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  {[{ I: Linkedin, h: m.socials.linkedin }, { I: Twitter, h: m.socials.twitter }, { I: Instagram, h: m.socials.instagram }].map(({ I, h }) => (
                    <a key={h + I.name} href={h}
                      className="w-8 h-8 rounded-xl flex items-center justify-center transition-colors hover:text-orange-500 backdrop-blur-md"
                      style={{ background: "rgba(255,255,255,0.88)", color: "var(--text-muted)", border: "1px solid var(--card-border)" }}>
                      <I className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <span className="block text-orange-500 text-xs font-semibold tracking-widest uppercase mb-1">{m.role}</span>
                <h3 className="font-bold text-xl mb-3" style={{ color: "var(--text)" }}>{m.name}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{m.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Us */}
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="card rounded-3xl p-10 text-center border-glow">
          <div className="w-14 h-14 mx-auto rounded-2xl flex items-center justify-center mb-5"
            style={{ background: "#FF6B3512", border: "1px solid #FF6B3525" }}>
            <ArrowRight className="w-6 h-6 text-orange-500" />
          </div>
          <h3 className="font-bold text-2xl mb-3" style={{ color: "var(--text)" }}>Want to Join the Team?</h3>
          <p className="mb-6 max-w-md mx-auto" style={{ color: "var(--text-muted)" }}>We're always looking for passionate, creative people who share our vision for youth empowerment.</p>
          <Link to="/contact"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/20 group">
            Get In Touch <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>

    {/* Culture */}
    <section className="py-24 pb-28" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="block text-orange-500 text-xs font-semibold tracking-[0.22em] uppercase mb-6">Our Culture</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--text)" }}>
              We Don't Just Work —<br /><span className="gradient-text">We Create Together</span>
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
              At ROAR ENT, the best work comes from trust, creativity, and relentless ambition. We're not building a company — we're building a movement.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div key={s.l}
                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.04, y: -4, transition: { type: "spring", stiffness: 280, damping: 20 } }}
                className="card rounded-3xl p-7 text-center border-glow">
                <p className="text-4xl font-black gradient-text mb-1">{s.v}</p>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>{s.l}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <Footer />
    <BackToTop />
  </motion.div>
);

export default Team;
