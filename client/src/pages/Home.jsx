import { useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence, useScroll } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import MeshBg from "../components/MeshBg";
import CountUp from "react-countup";
import {
  Trophy, Users, Zap, Star, ArrowRight, ArrowUpRight,
  Calendar, Camera, Megaphone, Palette, Gamepad2, Code,
  ChevronDown, MessageCircle
} from "lucide-react";
import bgCharacter from "../assets/BG MAIN Chracter.png";

const stats = [
  { icon: Trophy,  value: 100, suffix: "+",  label: "Projects" },
  { icon: Users,   value: 50,  suffix: "+",  label: "Brand Partners" },
  { icon: Zap,     value: 10,  suffix: "K+", label: "Youth Reached" },
  { icon: Star,    value: 4,   suffix: "+",  label: "Years Active" },
];

const services = [
  { icon: Calendar,  title: "Event Management",  desc: "End-to-end festival & brand event production.",    img: "/images/service-event.jpg",     color: "#FF6B35" },
  { icon: Camera,    title: "Artist Management", desc: "Talent booking & career development.",              img: "/images/service-artist.jpg",    color: "#f59e0b" },
  { icon: Megaphone, title: "Digital Marketing", desc: "Gen Z campaigns that actually convert.",            img: "/images/service-marketing.jpg", color: "#8b5cf6" },
  { icon: Palette,   title: "Content Designing", desc: "Visual stories that stop the scroll.",             img: "/images/service-design.jpg",    color: "#10b981" },
  { icon: Gamepad2,  title: "Gaming & Esports",  desc: "Tournaments, activations & brand integrations.",   img: "/images/service-gaming.jpg",    color: "#3b82f6" },
  { icon: Code,      title: "Web & App Dev",      desc: "Custom platforms & digital products.",             img: "/images/service-web.jpg",       color: "#ec4899" },
];

const faqs = [
  { q: "What types of events does ROAR ENT manage?",   a: "We manage college fests, brand activations, music concerts, esports tournaments, and cultural events across India." },
  { q: "How do we get started?",                       a: "Reach out through our Contact page or WhatsApp. We'll schedule a discovery call and deliver a custom proposal within 48 hours." },
  { q: "Do you work with startups and small brands?",  a: "Absolutely. Our packages are flexible and scalable to fit any budget." },
  { q: "Which cities do you operate in?",             a: "Based in Bangalore, we operate pan-India — Mumbai, Delhi, Hyderabad, Pune, Chennai, and more." },
  { q: "How long does it take to plan an event?",     a: "Small activations: 2–3 weeks. Large-scale events: 4–8 weeks for the best results." },
];

/* ─── 3D Tilt ───────────────────────── */
function useTilt(intensity = 8) {
  const ref = useRef(null);
  const x = useMotionValue(0), y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [ intensity, -intensity]), { stiffness: 200, damping: 22 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-intensity,  intensity]), { stiffness: 200, damping: 22 });
  const onMouseMove  = useCallback(e => { const r = ref.current?.getBoundingClientRect(); if (!r) return; x.set((e.clientX - r.left) / r.width - 0.5); y.set((e.clientY - r.top) / r.height - 0.5); }, [x, y]);
  const onMouseLeave = useCallback(() => { x.set(0); y.set(0); }, [x, y]);
  return { ref, rotateX, rotateY, onMouseMove, onMouseLeave };
}

/* MeshBg extracted to component for reuse */

/* ─── Service Card ───────────────────── */
function ServiceCard({ svc, i }) {
  const { ref, rotateX, rotateY, onMouseMove, onMouseLeave } = useTilt(6);
  const Icon = svc.icon;
  return (
    <motion.div
      ref={ref} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 160, damping: 22, delay: i * 0.07 }}
      className="card rounded-3xl overflow-hidden group border-glow cursor-default"
    >
      <div className="relative h-44 overflow-hidden" style={{ background: "var(--bg-2)" }}>
        <img src={svc.img} alt={svc.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: `${svc.color}15`, border: `1px solid ${svc.color}30` }}>
            <Icon className="w-4 h-4" style={{ color: svc.color }} />
          </div>
          <h3 className="font-bold text-base" style={{ color: "var(--text)" }}>{svc.title}</h3>
        </div>
        <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{svc.desc}</p>
      </div>
    </motion.div>
  );
}

/* ─── FAQ ────────────────────────────── */
function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section className="py-28 relative overflow-hidden" style={{ background: "var(--bg-1)" }}>
      <MeshBg />
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:sticky lg:top-28">
            <span className="block text-indigo-500 text-xs font-semibold tracking-[0.22em] uppercase mb-5">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-5 leading-tight" style={{ color: "var(--text)" }}>
              Questions?<br /><span className="gradient-text">We've got answers.</span>
            </h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
              Everything you need to know about working with ROAR ENT.
            </p>
            <Link to="/contact"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/20 group pulse-ring">
              <MessageCircle className="w-4 h-4" /> Ask Us Directly
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className={`card rounded-2xl overflow-hidden transition-all duration-300 ${open === i ? "ring-1 ring-orange-400/40" : ""}`}
              >
                <button onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left gap-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-bold font-mono flex-shrink-0"
                      style={{ color: open === i ? "#FF6B35" : "var(--text-dim)" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-medium text-sm" style={{ color: open === i ? "var(--text)" : "var(--text-muted)" }}>{faq.q}</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 flex-shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                    style={{ color: open === i ? "#FF6B35" : "var(--text-dim)" }} />
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                      <p className="px-6 pb-4 ml-10 text-sm leading-relaxed" style={{ color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: "0.875rem" }}>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Marquee ────────────────────────── */
const strips = ["Event Management","Artist Booking","Digital Marketing","Content Creation","Gaming & Esports","Web Development","Brand Promotions","Production"];
function BrandStrip() {
  const items = [...strips, ...strips];
  return (
    <div className="overflow-hidden py-4" style={{ background: "var(--bg-1)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div className="flex gap-12 marquee w-max">
        {items.map((name, i) => (
          <span key={i} className="text-xs font-semibold tracking-[0.2em] uppercase whitespace-nowrap flex items-center gap-3"
            style={{ color: "var(--text-dim)" }}>
            <span className="w-1.5 h-1.5 rounded-full inline-block flex-shrink-0"
              style={{ background: i % 2 === 0 ? "#6366f1" : "#22d3ee" }} />
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── Home ───────────────────────────── */
const Home = () => {
  // scroll progress used for gentle parallax on hero assets
  const { scrollY } = useScroll();
  const parallax = useTransform(scrollY, [0, 500], [0, -80]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}
      style={{ background: "var(--bg)" }}>
    <Navbar />
    <div className="h-20" />

    {/* ══ HERO ══════════════════════════════ */}
    <section className="relative overflow-hidden" style={{ background: "var(--bg)", minHeight: "calc(100vh - 80px)" }}>
      {/* Stunning mesh gradient — no orange aurora */}
      <MeshBg prominent />

      {/* Character — uses CSS mask for clean, theme-agnostic blending with scroll parallax */}
      <motion.div
        initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-0 bottom-0 top-0 w-[52%] hidden lg:block pointer-events-none"
        style={{ zIndex: 4, y: parallax }}
      >
        <img src={bgCharacter} alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, black 22%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 22%)",
          }}
        />
      </motion.div>

      <motion.div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 flex flex-col justify-center py-16"
        style={{ minHeight: "calc(100vh - 80px)", y: parallax }}>
        <div className="max-w-[580px]">

          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8 border"
            style={{ background: "rgba(99,102,241,0.08)", borderColor: "rgba(99,102,241,0.22)" }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#6366f1" }} />
            <span className="text-xs font-semibold tracking-[0.18em] uppercase" style={{ color: "#6366f1" }}>India's Premier Youth Platform</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 32, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl lg:text-[4.5rem] font-bold leading-[1.06] tracking-tight mb-6"
            style={{ color: "var(--text)" }}>
            Empowering<br /><span className="gradient-text">India's Youth</span><br />Talent.
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.34, duration: 0.7 }}
            className="text-lg leading-relaxed mb-10 max-w-md" style={{ color: "var(--text-muted)" }}>
            Bridging the gap between capable youth and meaningful work through real-world collaborations and impactful experiences.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.50 }}
            className="flex flex-wrap gap-4 mb-14">
            <Link to="/services"
              className="pulse-ring inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/25 group">
              Explore Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/about"
              className="inline-flex items-center gap-2 card rounded-xl px-7 py-3.5 font-semibold text-sm transition-all duration-200 group border-glow"
              style={{ color: "var(--text-muted)" }}>
              Our Story <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}
            className="flex flex-wrap gap-x-8 gap-y-4 pt-8" style={{ borderTop: "1px solid var(--border)" }}>
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.label}
                  initial={{ opacity: 0, scale: 0.75 }} animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 220, damping: 16, delay: 0.70 + i * 0.08 }}
                  className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: "#6366f111", border: "1px solid #6366f125" }}>
                    <Icon className="w-4 h-4" style={{ color: "#6366f1" }} />
                  </div>
                  <div>
                    <p className="font-bold text-lg leading-none" style={{ color: "var(--text)" }}>
                      <CountUp end={s.value} duration={2.5} />{s.suffix}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--text-dim)" }}>{s.label}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-[10px] tracking-[0.25em] uppercase" style={{ color: "var(--text-dim)" }}>Scroll</span>
        <div className="w-px h-7" style={{ background: "linear-gradient(to bottom, transparent, #6366f1, transparent)" }} />
      </motion.div>
    </section>

    <BrandStrip />

    {/* ══ SERVICES ══════════════════════════ */}
    <section className="py-24" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div>
            <span className="block text-indigo-500 text-xs font-semibold tracking-[0.22em] uppercase mb-4">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight" style={{ color: "var(--text)" }}>
              Our <span className="gradient-text">Services</span>
            </h2>
          </div>
          <Link to="/services"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 flex-shrink-0 group border"
            style={{ color: "#6366f1", background: "rgba(99,102,241,0.07)", borderColor: "rgba(99,102,241,0.20)" }}>
            View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => <ServiceCard key={svc.title} svc={svc} i={i} />)}
        </div>
      </div>
    </section>

    {/* ══ WHY ROAR ══════════════════════════ */}
    <section className="py-24 relative overflow-hidden" style={{ background: "var(--bg-1)" }}>
      <MeshBg />
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <span className="block text-indigo-500 text-xs font-semibold tracking-[0.22em] uppercase mb-4">Why Choose Us</span>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: "var(--text)" }}>
            Built for India's <span className="gradient-text">Next Generation</span>
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="lg:col-span-2 card rounded-3xl p-8 border-glow">
            <span className="block text-indigo-500 text-3xl font-black font-mono mb-5">01</span>
            <h3 className="text-2xl font-bold mb-3" style={{ color: "var(--text)" }}>Youth-First Approach</h3>
            <p className="leading-relaxed max-w-md" style={{ color: "var(--text-muted)" }}>Every decision is made with Gen Z at the center. We don't guess what works — we live it.</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {["Events","Esports","Digital","Content"].map(t => (
                <span key={t} className="text-xs rounded-lg px-3 py-1.5 font-medium"
                  style={{ color: "#6366f1", background: "rgba(99,102,241,0.08)", border: "1px solid rgba(99,102,241,0.18)" }}>{t}</span>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="card rounded-3xl p-8 flex flex-col justify-between border-glow">
            <span className="block text-indigo-500 text-3xl font-black font-mono">02</span>
            <div className="mt-auto pt-8">
              <p className="text-6xl font-black gradient-text mb-2"><CountUp end={10} duration={2} enableScrollSpy scrollSpyOnce />K+</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>Young lives touched through events, campaigns, and community programs.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
            className="card rounded-3xl p-8 border-glow">
            <span className="block text-indigo-500 text-3xl font-black font-mono mb-5">03</span>
            <h3 className="font-bold text-xl mb-2" style={{ color: "var(--text)" }}>Pan-India Reach</h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>Headquartered in Bangalore with operations across Mumbai, Delhi, Hyderabad, Pune, Chennai and growing.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="lg:col-span-2 card rounded-3xl p-8 border-glow">
            <span className="block text-indigo-500 text-3xl font-black font-mono mb-5">04</span>
            <h3 className="font-bold text-2xl mb-6" style={{ color: "var(--text)" }}>Real Impact. Real Numbers.</h3>
            <div className="grid grid-cols-3 gap-6">
              {[["100+","Projects"],["50+","Partners"],["4+","Years"]].map(([v,l]) => (
                <div key={l} className="text-center">
                  <p className="text-3xl font-black gradient-text">{v}</p>
                  <p className="text-xs mt-1" style={{ color: "var(--text-dim)" }}>{l}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    <FAQ />

    {/* ══ CTA ═══════════════════════════════ */}
    <section className="py-24" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 20, scale: 0.98 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }}
          className="relative rounded-[2rem] overflow-hidden p-12 md:p-20 text-center noise"
          style={{ background: "linear-gradient(135deg, #FF6B35 0%, #e05520 50%, #b33d10 100%)" }}>
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-20"
            style={{ background: "radial-gradient(circle, #fff, transparent)" }} />
          <div className="relative z-10">
            <span className="block text-orange-100/60 text-xs font-semibold tracking-[0.22em] uppercase mb-4">Ready to make waves?</span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-5 leading-tight">Let's Build<br />Something Iconic.</h2>
            <p className="text-orange-100/75 text-lg mb-10 max-w-lg mx-auto">Whether you're a brand, creator, or organizer — we're your partner from idea to execution.</p>
            <Link to="/contact"
              className="inline-flex items-center gap-3 bg-white text-orange-500 hover:bg-orange-50 px-9 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:shadow-2xl group">
              Start a Conversation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    <Footer />
    <BackToTop />
  </motion.div>
  );
};

export default Home;
