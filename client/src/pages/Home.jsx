import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import MeshBg from "../components/MeshBg";
import CountUp from "react-countup";
import {
  Trophy, Users, Zap, Star, ArrowRight,
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
  { icon: Calendar,  title: "Event Management",  desc: "End-to-end festival & brand event production.",    img: "/images/service-event.jpg" },
  { icon: Camera,    title: "Artist Management", desc: "Talent booking & career development.",              img: "/images/service-artist.jpg" },
  { icon: Megaphone, title: "Digital Marketing", desc: "Gen Z campaigns that actually convert.",            img: "/images/service-marketing.jpg" },
  { icon: Palette,   title: "Content Designing", desc: "Visual stories that stop the scroll.",             img: "/images/service-design.jpg" },
  { icon: Gamepad2,  title: "Gaming & Esports",  desc: "Tournaments, activations & brand integrations.",   img: "/images/service-gaming.jpg" },
  { icon: Code,      title: "Web & App Dev",      desc: "Custom platforms & digital products.",             img: "/images/service-web.jpg" },
];

const faqs = [
  { q: "What types of events does ROAR ENT manage?",   a: "We manage college fests, brand activations, music concerts, esports tournaments, and cultural events across India." },
  { q: "How do we get started?",                       a: "Reach out through our Contact page or WhatsApp. We'll schedule a discovery call and deliver a custom proposal within 48 hours." },
  { q: "Do you work with startups and small brands?",  a: "Absolutely. Our packages are flexible and scalable to fit any budget." },
  { q: "Which cities do you operate in?",             a: "Based in Bangalore, we operate pan-India — Mumbai, Delhi, Hyderabad, Pune, Chennai, and more." },
  { q: "How long does it take to plan an event?",     a: "Small activations: 2–3 weeks. Large-scale events: 4–8 weeks for the best results." },
];

/* ─── Service Card ───────────────────── */
function ServiceCard({ svc, i }) {
  const Icon = svc.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      transition={{ duration: 0.4, delay: i * 0.05 }}
      className="card rounded-xl overflow-hidden group flex flex-col h-full cursor-default"
    >
      <div className="relative h-48 overflow-hidden bg-[var(--bg-2)] border-b border-[var(--border)]">
        <img src={svc.img} alt={svc.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[var(--bg-1)] border border-[var(--border)] text-[var(--accent)]">
            <Icon className="w-4 h-4" />
          </div>
          <h3 className="font-semibold text-base text-[var(--text)]">{svc.title}</h3>
        </div>
        <p className="text-sm leading-relaxed text-[var(--text-muted)] flex-1">{svc.desc}</p>
      </div>
    </motion.div>
  );
}

/* ─── FAQ ────────────────────────────── */
function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section className="py-24 border-t border-[var(--border)]" style={{ background: "var(--bg-1)" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="block text-sm font-semibold tracking-tight uppercase text-[var(--orange)] mb-3">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-gradient pb-1">
              Questions? We have answers.
            </h2>
            <p className="text-[var(--text-muted)] mb-8">
              Everything you need to know about working with ROAR ENT.
            </p>
            <Link to="/contact" className="btn-secondary group">
              <MessageCircle className="w-4 h-4 mr-2" /> Ask Us Directly
            </Link>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="card rounded-lg overflow-hidden"
              >
                <button onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 hover:bg-[var(--surface-hover)] transition-colors">
                  <span className="font-medium text-sm text-[var(--text)]">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 flex-shrink-0 text-[var(--text-muted)] transition-transform duration-200 ${open === i ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                      <div className="px-6 pb-5 text-sm text-[var(--text-muted)] leading-relaxed border-t border-[var(--border)] pt-4">
                        {faq.a}
                      </div>
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
  const items = [...strips, ...strips, ...strips];
  return (
    <div className="relative overflow-hidden py-3 marquee-wrap bg-[var(--bg)] border-y border-[var(--border)]">
      <div className="flex gap-12 marquee w-max">
        {items.map((name, i) => (
          <span key={i} className="text-xs font-semibold tracking-wider uppercase whitespace-nowrap text-[var(--text-dim)]">
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── CTA Section ────────────────────── */
function CTASection({ title, subtitle, btnText, btnTo }) {
  return (
    <section className="py-24 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden p-12 md:p-20 text-center bg-[var(--accent)] border border-[var(--border)]">
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-[var(--bg)]">{title}</h2>
            <p className="text-lg mb-8 max-w-xl mx-auto opacity-80 text-[var(--bg)] font-medium">{subtitle}</p>
            <Link to={btnTo} className="inline-flex items-center justify-center bg-[var(--bg)] text-[var(--text)] px-8 py-3.5 rounded-lg font-medium hover:bg-white transition-colors">
              {btnText}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Home ───────────────────────────── */
const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}
      transition={{ duration: 0.3 }}
      className="bg-[var(--bg)] min-h-screen"
    >
      <Navbar />
      <div className="h-16" />

      {/* ══ HERO ══════════════════════════════ */}
      <section className="relative overflow-hidden w-full border-b border-[var(--border)]" style={{ minHeight: "calc(100vh - 64px)" }}>
        <MeshBg />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 py-16 lg:py-0" style={{ minHeight: "inherit" }}>
          
          {/* Left Text */}
          <div className="max-w-[600px] flex-1">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 mb-8 bg-[var(--bg-1)] border border-[var(--border)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--text)]"></span>
              <span className="text-xs font-semibold tracking-wide text-[var(--orange)]">India's Premier Youth Platform</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}
              className="text-5xl sm:text-6xl lg:text-[4rem] font-bold leading-[1.1] tracking-tight mb-6 text-gradient drop-shadow-sm pb-1">
              Empowering India's Youth Talent.
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}
              className="text-lg leading-relaxed mb-10 text-[var(--text-muted)] max-w-md">
              Bridging the gap between capable youth and meaningful work through real-world collaborations and impactful technical experiences.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
              className="flex flex-wrap gap-4 mb-16">
              <Link to="/services" className="btn-primary group">
                Explore Services <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/about" className="btn-secondary">
                Our Story
              </Link>
            </motion.div>

            {/* Stats Minimal Grid */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-[var(--border)]">
              {stats.map((s, i) => (
                <div key={s.label}>
                  <p className="font-bold text-2xl tracking-tight text-gradient leading-tight mb-1 pb-0.5">
                    <CountUp end={s.value} duration={2} />{s.suffix}
                  </p>
                  <p className="text-xs font-medium text-[var(--text-muted)]">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Graphic/Character */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
            transition={{ 
              opacity: { duration: 0.6, delay: 0.3 },
              scale: { duration: 0.6, delay: 0.3 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
            }}
            className="flex-1 w-full lg:w-auto relative"
          >
              <div className="relative aspect-[4/5] lg:aspect-auto lg:h-[700px] w-full max-w-md mx-auto lg:max-w-none rounded-2xl overflow-hidden glass p-4">
                <div className="w-full h-full bg-[var(--bg-1)] rounded-xl overflow-hidden relative">
                  <img src={bgCharacter} alt="Hero representation" className="w-full h-full object-cover object-top opacity-90" />
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      <BrandStrip />

      {/* ══ SERVICES ══════════════════════════ */}
      <section className="py-24 bg-[var(--bg-1)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
            <div>
              <span className="block text-sm font-semibold tracking-tight uppercase text-[var(--orange)] mb-3">What We Do</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--text)]">
                Our Services
              </h2>
            </div>
            <Link to="/services" className="btn-secondary">
              View All
            </Link>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => <ServiceCard key={svc.title} svc={svc} i={i} />)}
          </div>
        </div>
      </section>

      {/* ══ WHY ROAR ══════════════════════════ */}
      <section className="py-24 border-y border-[var(--border)] bg-[var(--bg)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
            <span className="block text-sm font-semibold tracking-tight uppercase text-[var(--orange)] mb-3">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gradient pb-1">
              Built for India's Next Generation
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="lg:col-span-2 card rounded-xl p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <span className="block text-sm font-mono text-[var(--text-muted)] mb-4">01 // YOUTH-FIRST</span>
                <h3 className="text-2xl font-bold mb-4 text-[var(--text)]">Youth-First Approach</h3>
                <p className="leading-relaxed text-[var(--text-muted)] max-w-md">Every decision is made with Gen Z at the center. We don't guess what works — we live it, measuring success by the cultural impact we leave behind.</p>
              </div>
              <div className="mt-8 pt-6 border-t border-[var(--border)] flex flex-wrap gap-2">
                {["Events","Esports","Digital","Content"].map(t => (
                  <span key={t} className="text-xs rounded-md px-3 py-1.5 font-medium bg-[var(--bg-2)] text-[var(--text)]">{t}</span>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="card rounded-xl p-8 lg:p-10 flex flex-col justify-between">
              <span className="block text-sm font-mono text-[var(--text-muted)]">02 // IMPACT</span>
              <div className="mt-8 pt-8">
                <p className="text-5xl lg:text-6xl font-black text-[var(--accent)] tracking-tight mb-3"><CountUp end={10} duration={2} enableScrollSpy scrollSpyOnce />K+</p>
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">Young lives touched through events, campaigns, and immersive community programs.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="lg:col-span-3 card rounded-xl p-8 lg:p-10 flex flex-col sm:flex-row items-center justify-between gap-8">
              <div className="max-w-md">
                <span className="block text-sm font-mono text-[var(--text-muted)] mb-4">03 // SCALE</span>
                <h3 className="font-bold text-2xl mb-3 text-[var(--text)]">Pan-India Reach</h3>
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">Headquartered in Bangalore with strategic operations across Mumbai, Delhi, Hyderabad, Pune, Chennai and beyond.</p>
              </div>
              <div className="grid grid-cols-3 gap-8 w-full sm:w-auto">
                {[["100+","Events"],["50+","Partners"],["4+","Years"]].map(([v,l]) => (
                  <div key={l} className="text-center sm:text-left">
                    <p className="text-2xl lg:text-3xl font-bold text-[var(--accent)] tracking-tight mb-1">{v}</p>
                    <p className="text-xs font-medium text-[var(--text-muted)]">{l}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FAQ />

      <CTASection
        title={"Let's Build Something Iconic."}
        subtitle="Whether you're a brand, creator, or organizer — we're your partner from foundational concept to final execution."
        btnText="Start a Conversation"
        btnTo="/contact"
      />

      <Footer />
      <BackToTop />
    </motion.div>
  );
};

export default Home;
