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
  <motion.div
    initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}
    transition={{ duration: 0.3 }}
    className="bg-[var(--bg)] min-h-screen"
  >
    <Navbar />
    <div className="h-16" />

    {/* Hero */}
    <section className="relative overflow-hidden border-b border-[var(--border)] py-20 lg:py-32" style={{ background: "var(--bg)" }}>
      <MeshBg />
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 mb-6 bg-[var(--bg-1)] border border-[var(--border)]">
          <span className="text-xs font-semibold tracking-wide text-[var(--text)] uppercase">The People</span>
        </motion.div>
        
        <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight tracking-tight text-gradient pb-1">
          Meet The Creators
        </motion.h1>
        
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="text-xl max-w-2xl mx-auto text-[var(--text-muted)]">
          A diverse, passionate team bringing expertise in events, marketing, design, and technology.
        </motion.p>
      </div>
    </section>

    {/* Team Grid */}
    <section className="py-24 bg-[var(--bg-1)] border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((m, i) => (
            <motion.div key={m.name}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="card rounded-2xl overflow-hidden group flex flex-col"
            >
              <div className="relative h-64 overflow-hidden bg-[var(--bg-2)] border-b border-[var(--border)]">
                <img src={m.img} alt={m.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-4 left-4 text-xs font-medium uppercase tracking-wide rounded-md px-2.5 py-1 bg-[var(--bg-1)] text-[var(--text)] border border-[var(--border)] shadow-sm">
                  Since {m.since}
                </span>
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  {[{ I: Linkedin, h: m.socials.linkedin }, { I: Twitter, h: m.socials.twitter }, { I: Instagram, h: m.socials.instagram }].map(({ I, h }) => (
                    <a key={h + I.name} href={h}
                      className="w-8 h-8 rounded-md flex items-center justify-center transition-colors hover:text-[var(--text)] text-[var(--text-muted)] bg-[var(--card-bg)] border border-[var(--border)] shadow-sm hover:border-[var(--text-dim)]">
                      <I className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="block text-xs font-semibold tracking-widest text-[var(--text-muted)] uppercase mb-2">{m.role}</span>
                <h3 className="font-bold text-xl mb-3 text-[var(--text)] tracking-tight">{m.name}</h3>
                <p className="text-sm leading-relaxed text-[var(--text-muted)] flex-1">{m.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Us CTA inside container */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="card rounded-2xl p-10 text-center max-w-3xl mx-auto flex flex-col items-center border-[var(--border)]">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-[var(--bg-1)] border border-[var(--border)] text-[var(--accent)]">
            <ArrowRight className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-2xl tracking-tight mb-4 text-[var(--text)]">Want to Join the Team?</h3>
          <p className="mb-8 max-w-md mx-auto text-[var(--text-muted)]">We're always looking for passionate, creative people who share our vision for youth empowerment.</p>
          <Link to="/contact" className="btn-secondary">
            Get In Touch
          </Link>
        </motion.div>
      </div>
    </section>

    {/* Culture */}
    <section className="py-24 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="block text-sm font-semibold tracking-tight uppercase text-[var(--text-muted)] mb-3">Our Culture</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-[var(--text)]">
              We Don't Just Work — We Create Together
            </h2>
            <p className="text-lg leading-relaxed text-[var(--text-muted)]">
              At ROAR ENT, the best work comes from trust, creativity, and relentless ambition. We're not building a company — we're building a movement.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((s, i) => (
              <motion.div key={s.l}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="card rounded-2xl p-8 text-center flex flex-col justify-center border border-[var(--border)]">
                <p className="text-4xl lg:text-5xl font-bold tracking-tight text-[var(--accent)] mb-2">{s.v}</p>
                <p className="text-sm font-medium text-[var(--text-muted)]">{s.l}</p>
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
