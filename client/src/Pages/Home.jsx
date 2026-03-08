import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import CountUp from "react-countup";
import {
  Trophy, Users, Zap, ArrowRight, Star, Play,
  Calendar, Palette, Megaphone, Gamepad2, Code, Camera,
  ChevronDown, MessageCircle
} from "lucide-react";
import bgCharacter from "../assets/BG MAIN Chracter.png";

const stats = [
  { icon: Trophy, value: 100, suffix: "+", label: "Projects Delivered" },
  { icon: Users, value: 50, suffix: "+", label: "Brand Partners" },
  { icon: Zap, value: 10, suffix: "K+", label: "Youth Reached" },
  { icon: Star, value: 4, suffix: "+", label: "Years Growing" },
];

const services = [
  { icon: Calendar, title: "Event Management", desc: "End-to-end event planning & execution" },
  { icon: Camera, title: "Artist Management", desc: "Talent booking and artist relations" },
  { icon: Megaphone, title: "Digital Marketing", desc: "Strategic campaigns that convert" },
  { icon: Palette, title: "Content Creation", desc: "Visual content that stands out" },
  { icon: Gamepad2, title: "Gaming & Esports", desc: "Esports events & gaming activations" },
  { icon: Code, title: "Web & App Dev", desc: "Custom digital solutions & platforms" },
];

const faqs = [
  { q: "What types of events does ROAR ENT manage?", a: "We manage everything from college fests, brand activations, music concerts, esports tournaments, and cultural events to corporate youth engagement programs across India." },
  { q: "How do we get started with ROAR ENT?", a: "Simply reach out through our Contact page or WhatsApp. We'll schedule a discovery call to understand your goals and build a custom proposal within 48 hours." },
  { q: "Do you work with startups and small brands?", a: "Absolutely! We work with brands of all sizes — from early-stage startups to established companies. Our packages are flexible and scalable to fit any budget." },
  { q: "Which cities do you operate in?", a: "We're based in Bangalore but operate pan-India — Mumbai, Delhi, Hyderabad, Pune, Chennai, and more." },
  { q: "How long does it take to plan an event?", a: "Timelines vary by scale. Small activations can be planned in 2–3 weeks. Large-scale events typically need 4–8 weeks of lead time for the best results." },
  { q: "Can ROAR ENT help with social media and content?", a: "Yes! Our digital marketing and content creation services cover everything from social strategy to video production, reels, and influencer campaigns." },
];

// Blur-slide reveal — used for hero text lines
const blurSlide = {
  hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
  visible: (i = 0) => ({
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

// Spring card stagger
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { type: "spring", stiffness: 180, damping: 22, delay: i * 0.08 },
  }),
};

const Home = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.35 }}
    className="bg-[#fffdf9]"
  >
    <Navbar />

    {/* ─── HERO ─────────────────────────────── */}
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">

      {/* RIGHT PANEL — dark cinematic background */}
      <div className="absolute right-0 top-0 bottom-0 w-[52%] hidden lg:block pointer-events-none" style={{ zIndex: 1 }}>
        {/* Deep dark base */}
        <div className="absolute inset-0 bg-[#0d0805]" />
        {/* Orange spotlight glow from bottom-center */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px]"
          style={{ background: "radial-gradient(ellipse at bottom, rgba(255,107,53,0.85) 0%, rgba(255,107,53,0.3) 35%, transparent 70%)" }}
        />
        {/* Secondary amber glow centre */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,140,80,0.15) 0%, transparent 70%)" }}
        />
        {/* Subtle dot texture */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
        {/* Left-edge fade: blends dark panel into white left side */}
        <div className="absolute inset-y-0 left-0 w-36"
          style={{ background: "linear-gradient(to right, #fff 0%, transparent 100%)" }}
        />
      </div>

      {/* CHARACTER IMAGE — fills right panel dramatically */}
      <motion.div
        initial={{ opacity: 0, x: 60, scale: 0.96 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-0 bottom-0 top-0 w-[52%] hidden lg:block"
        style={{ zIndex: 6 }}
      >
        {/* The character fills the panel like a magazine cover */}
        <motion.img
          src={bgCharacter}
          alt="ROAR Character"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{
            filter: "drop-shadow(-20px 0 40px rgba(255,107,53,0.4))",
          }}
          animate={{ scale: [1, 1.025, 1] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
        {/* Bottom gradient fade into dark */}
        <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
          style={{ background: "linear-gradient(to top, #0d0805 0%, transparent 100%)" }}
        />
        {/* Left fade to blend with white page */}
        <div className="absolute inset-y-0 left-0 w-40 pointer-events-none"
          style={{ background: "linear-gradient(to right, #fff 0%, transparent 100%)" }}
        />
      </motion.div>


      {/* Floating badge — top right of image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 1.1, type: "spring", stiffness: 200, damping: 18 }}
        className="absolute top-32 right-16 hidden xl:flex flex-col items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-3"
        style={{ zIndex: 10 }}
      >
        <span className="text-white font-black text-2xl">🔥 ROAR</span>
        <span className="text-orange-300 text-xs font-medium tracking-widest uppercase mt-0.5">ENT • Since 2021</span>
      </motion.div>

      {/* CONTENT — left side */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-28 pb-20">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, type: "spring", stiffness: 200, damping: 18 }}
            className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5 mb-7"
          >
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-orange-600 text-xs font-semibold tracking-widest uppercase">India's Premier Youth Platform</span>
          </motion.div>

          <motion.h1 variants={blurSlide} custom={0} initial="hidden" animate="visible"
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-tight mb-6"
          >
            Empowering
            <span className="block shimmer-text">
              India's Youth
            </span>
            Talent
          </motion.h1>

          <motion.p variants={blurSlide} custom={1} initial="hidden" animate="visible"
            className="text-gray-500 text-lg leading-relaxed mb-10"
          >
            Bridging the gap between capable youth and meaningful work through
            real-world collaborations and impactful experiences across India.
          </motion.p>

          <motion.div variants={blurSlide} custom={2} initial="hidden" animate="visible" className="flex flex-wrap gap-4">
            <Link to="/services"
              className="pulse-ring flex items-center gap-2 bg-[#FF6B35] hover:bg-[#e55a25] text-white px-7 py-3.5 rounded-xl font-semibold transition-all duration-200 hover:shadow-xl hover:shadow-orange-200 group"
            >
              Explore Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/about"
              className="flex items-center gap-2 border border-gray-200 text-gray-700 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600 px-7 py-3.5 rounded-xl font-semibold transition-all duration-200"
            >
              <Play className="w-4 h-4" />
              Our Story
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div variants={blurSlide} custom={3} initial="hidden" animate="visible" className="flex flex-wrap gap-6 mt-14">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 220, damping: 18, delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-2.5"
                >
                  <div className="w-8 h-8 bg-orange-50 border border-orange-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-4 h-4 text-[#FF6B35]" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-bold text-xl leading-none">
                      <CountUp end={s.value} duration={2.5} />{s.suffix}
                    </p>
                    <p className="text-gray-400 text-xs mt-0.5">{s.label}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-gray-300 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-gradient-to-b from-transparent via-orange-400 to-transparent"
        />
      </div>
    </section>


    {/* ─── SERVICES PREVIEW ─────────────────── */}
    <section className="py-28 bg-[#fdf6f0]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-orange-600 bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5 mb-4">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Our <span className="text-[#FF6B35]">Services</span></h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div key={svc.title}
                variants={cardVariants} custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(255,107,53,0.12)", transition: { type: "spring", stiffness: 300, damping: 20 } }}
                className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-orange-200 transition-colors duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 bg-orange-50 border border-orange-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-orange-100 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-[#FF6B35]" />
                </div>
                <h3 className="text-gray-900 font-semibold text-lg mb-2">{svc.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{svc.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link to="/services"
            className="inline-flex items-center gap-2 border border-orange-200 text-orange-600 hover:bg-[#FF6B35] hover:text-white hover:border-[#FF6B35] px-8 py-3 rounded-xl font-semibold transition-all duration-200 group"
          >
            View All Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>

    {/* ─── WHY ROAR ─────────────────────────── */}
    <section className="py-28 bg-[#fffdf9]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-orange-600 bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5 mb-6">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Built for India's <span className="block text-[#FF6B35]">Next Generation</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              ROAR ENT is not just an agency — it's a movement. We connect brands with the most energetic demographic on the planet: India's Gen Z.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:gap-3 transition-all duration-200">
              Learn more about us <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { num: "01", title: "Youth-First Approach", desc: "Every decision is made with Gen Z at the center." },
              { num: "02", title: "Real Impact", desc: "Data-driven strategies with measurable outcomes." },
              { num: "03", title: "Pan-India Reach", desc: "From metros to tier-2 cities, we're everywhere." },
              { num: "04", title: "Creative Excellence", desc: "Creative that breaks through noise." },
            ].map((item, i) => (
              <motion.div key={item.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 160, damping: 20, delay: i * 0.1 }}
                whileHover={{ scale: 1.03, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                className="p-5 rounded-2xl bg-[#fdf6f0] border border-orange-100 hover:border-orange-200 transition-colors duration-300"
              >
                <span className="text-[#FF6B35] text-sm font-bold font-mono">{item.num}</span>
                <h4 className="text-gray-900 font-semibold mt-2 mb-1">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* ─── FAQ ──────────────────────────────── */}
    <FaqSection />

    {/* ─── CTA BANNER ───────────────────────── */}
    <section className="py-20 bg-[#fdf6f0]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#FF6B35] via-[#e55a25] to-orange-600 p-12 text-center"
        >
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "40px 40px" }}
          />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Let's Build Something Iconic</h2>
            <p className="text-orange-100 text-lg mb-8 max-w-xl mx-auto">Whether you're a brand, creator, or organizer — we're your partner.</p>
            <Link to="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#FF6B35] hover:bg-orange-50 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:shadow-2xl group"
            >
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

function FaqSection() {
  const [open, setOpen] = useState(null);
  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:sticky lg:top-32">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-orange-600 bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5 mb-6">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Got a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-orange-400">Question?</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Everything you need to know about working with ROAR ENT. Can't find the answer? We're happy to help.
            </p>
            <Link to="/contact"
              className="inline-flex items-center gap-2 bg-[#FF6B35] hover:bg-[#e55a25] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-orange-200 group"
            >
              <MessageCircle className="w-4 h-4" />
              Ask Us Directly
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <div className="mt-14 flex gap-8">
              <div>
                <p className="text-3xl font-black text-gray-900">{faqs.length}</p>
                <p className="text-gray-400 text-sm">Common questions</p>
              </div>
              <div className="w-px bg-gray-200" />
              <div>
                <p className="text-3xl font-black text-[#FF6B35]">24h</p>
                <p className="text-gray-400 text-sm">Response time</p>
              </div>
            </div>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.4 }}
                className={`rounded-2xl border transition-all duration-300 ${open === i ? "bg-orange-50 border-orange-200" : "bg-white border-gray-100 hover:border-gray-200"}`}
              >
                <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between px-6 py-5 text-left gap-4">
                  <div className="flex items-center gap-4">
                    <span className={`text-sm font-bold font-mono flex-shrink-0 transition-colors ${open === i ? "text-[#FF6B35]" : "text-gray-300"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={`font-medium transition-colors ${open === i ? "text-gray-900" : "text-gray-700"}`}>{faq.q}</span>
                  </div>
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${open === i ? "bg-[#FF6B35] text-white" : "bg-gray-100 text-gray-500"}`}>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`} />
                  </div>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="overflow-hidden">
                      <div className="px-6 pb-5 ml-10 text-gray-500 text-sm leading-relaxed border-t border-orange-100 pt-4">{faq.a}</div>
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

export default Home;
