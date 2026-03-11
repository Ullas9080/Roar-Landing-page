import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import MeshBg from "../components/MeshBg";
import { ArrowRight, ChevronDown, Calendar, Camera, Volume2, Megaphone, Gamepad2, Code, Palette, Users } from "lucide-react";

function useTilt(intensity = 7) {
  const ref = useRef(null);
  const x = useMotionValue(0), y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [ intensity, -intensity]), { stiffness: 200, damping: 22 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-intensity,  intensity]), { stiffness: 200, damping: 22 });
  const onMouseMove  = useCallback(e => { const r = ref.current?.getBoundingClientRect(); if (!r) return; x.set((e.clientX - r.left) / r.width - 0.5); y.set((e.clientY - r.top) / r.height - 0.5); }, [x, y]);
  const onMouseLeave = useCallback(() => { x.set(0); y.set(0); }, [x, y]);
  return { ref, rotateX, rotateY, onMouseMove, onMouseLeave };
}

const services = [
  { icon: Calendar,  title: "Event Management",     img: "/images/service-event.jpg",      color: "#FF6B35", stat: "100+ Events",       desc: "End-to-end planning and flawless execution — college fests to brand activations.", tags: ["Planning","Logistics","Experience Design"] },
  { icon: Camera,    title: "Artist Management",    img: "/images/service-artist.jpg",     color: "#f59e0b", stat: "50+ Artists",       desc: "Talent discovery, booking, and career development for India's rising artists.",     tags: ["Talent Booking","Negotiations","Artist Relations"] },
  { icon: Volume2,   title: "Production",           img: "/images/service-production.jpg", color: "#a78bfa", stat: "Pro-Grade",         desc: "High-quality audio, video, and stage production that brings visions to life.",      tags: ["AV Production","Stage Design","Live Recording"] },
  { icon: Megaphone, title: "Digital Marketing",    img: "/images/service-marketing.jpg",  color: "#10b981", stat: "10M+ Reach",       desc: "Gen Z campaigns engineered to reach, resonate, and actually convert.",             tags: ["Social Media","Paid Ads","Analytics"] },
  { icon: Gamepad2,  title: "Gaming & Esports",     img: "/images/service-gaming.jpg",     color: "#3b82f6", stat: "Pan-India",        desc: "Esports tournaments, gaming activations, and brand integrations.",                  tags: ["Esports","Gaming Events","Brand Integration"] },
  { icon: Code,      title: "Web & App Dev",         img: "/images/service-web.jpg",        color: "#ec4899", stat: "Custom Builds",   desc: "Custom digital products built with performance and design in mind.",               tags: ["Web Dev","App Dev","UI/UX"] },
  { icon: Palette,   title: "Content Designing",    img: "/images/service-design.jpg",     color: "#f59e0b", stat: "Award-Grade",     desc: "Scroll-stopping visuals — motion graphics, brand kits, and social content.",       tags: ["Graphic Design","Motion Graphics","Branding"] },
  { icon: Volume2,   title: "Brand Promotions",     img: "/images/service-brand.jpg",      color: "#FF6B35", stat: "50+ Brands",      desc: "Strategy-led campaigns that build genuine youth affinity with your brand.",        tags: ["Brand Strategy","Campaigns","Activations"] },
  { icon: Users,     title: "Content Creators",     img: "/images/service-creator.jpg",    color: "#8b5cf6", stat: "Creator Network", desc: "Influencer partnerships and UGC campaigns that amplify your message authentically.", tags: ["Influencer","UGC","Creator Network"] },
];

function ServiceCard({ svc, i }) {
  const { ref, rotateX, rotateY, onMouseMove, onMouseLeave } = useTilt(6);
  const Icon = svc.icon;
  return (
    <motion.div
      ref={ref} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 1100 }}
      initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 160, damping: 22, delay: i * 0.06 }}
      className="card rounded-3xl overflow-hidden group border-glow cursor-default"
    >
      {/* Full-brightness image */}
      <div className="relative h-44 overflow-hidden" style={{ background: "var(--bg-2)" }}>
        <img src={svc.img} alt={svc.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        {/* Stat badge — top right, minimal */}
        <span className="absolute top-3 right-3 text-xs font-semibold rounded-full px-3 py-1.5 backdrop-blur-md"
          style={{ color: svc.color, background: "rgba(255,255,255,0.88)", border: `1px solid ${svc.color}35` }}>
          {svc.stat}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: `${svc.color}15`, border: `1px solid ${svc.color}30` }}>
            <Icon className="w-4 h-4" style={{ color: svc.color }} />
          </div>
          <h3 className="font-bold text-base" style={{ color: "var(--text)" }}>{svc.title}</h3>
        </div>
        <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>{svc.desc}</p>
        <div className="flex flex-wrap gap-1.5">
          {svc.tags.map(t => (
            <span key={t} className="text-xs px-2.5 py-1 rounded-lg font-medium"
              style={{ color: svc.color, background: `${svc.color}10`, border: `1px solid ${svc.color}22` }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

const Services = () => {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? services : services.slice(0, 6);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}
      style={{ background: "var(--bg)" }}>
      <Navbar />
      <div className="h-20" />

      {/* Hero */}
      <section className="relative overflow-hidden pb-10 pt-14" style={{ background: "var(--bg)" }}>
        <MeshBg prominent />
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="aurora-1 absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #FF6B35 0%, transparent 70%)" }} />
          <div className="absolute inset-0 grid-overlay opacity-40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 text-center">
          <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="inline-block text-orange-500 text-xs font-semibold tracking-[0.22em] uppercase glass-orange rounded-full px-4 py-2 mb-7">
            What We Offer
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 24, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.75, delay: 0.18 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{ color: "var(--text)" }}>
            Our <span className="gradient-text">Services</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.34 }}
            className="text-xl max-w-2xl mx-auto mb-10" style={{ color: "var(--text-muted)" }}>
            9 services, one vision — connecting brands with Gen Z through creativity, culture, and measurable impact.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.48 }}
            className="flex flex-wrap justify-center gap-3">
            {["9 Services","100+ Projects","50+ Brands","Pan-India"].map(chip => (
              <span key={chip} className="card text-xs rounded-xl px-4 py-2 flex items-center gap-2"
                style={{ color: "var(--text-muted)" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />{chip}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 pb-20" style={{ background: "var(--bg-1)" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <AnimatePresence>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {visible.map((svc, i) => <ServiceCard key={svc.title} svc={svc} i={i} />)}
            </div>
          </AnimatePresence>
          <div className="text-center mt-10">
            <button onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 glass-orange text-orange-500 hover:bg-orange-500 hover:text-white px-7 py-3 rounded-xl font-semibold text-sm transition-all duration-200">
              {showAll ? "Show Less" : `View All ${services.length} Services`}
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`} />
            </button>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24" style={{ background: "var(--bg)" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="block text-orange-500 text-xs font-semibold tracking-[0.22em] uppercase mb-4">Our Process</span>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: "var(--text)" }}>How We <span className="gradient-text">Work</span></h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[["01","Discovery Call","Deep-dive into your goals, audience, and timelines."],["02","Custom Proposal","Tailored strategy and budget delivered within 48 hrs."],["03","Execution","On-ground or digital — we handle every single detail."],["04","Results & Report","Full analytics and insights delivered post-campaign."]].map(([n,t,d],i) => (
              <motion.div key={n}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6, transition: { type: "spring", stiffness: 280, damping: 20 } }}
                className="card rounded-3xl p-6 border-glow">
                <span className="block text-3xl font-black gradient-text font-mono mb-4">{n}</span>
                <h4 className="font-semibold text-lg mb-2" style={{ color: "var(--text)" }}>{t}</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" style={{ background: "var(--bg-1)" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="relative rounded-[2rem] overflow-hidden p-12 md:p-20 text-center noise"
            style={{ background: "linear-gradient(135deg, #FF6B35 0%, #e05520 50%, #b33d10 100%)" }}>
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-20" style={{ background: "radial-gradient(circle,#fff,transparent)" }} />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Need a Custom Solution?</h2>
              <p className="text-orange-100/75 text-lg mb-8 max-w-lg mx-auto">We tailor every engagement to your specific vision, audience, and budget.</p>
              <Link to="/contact"
                className="inline-flex items-center gap-2 bg-white text-orange-500 hover:bg-orange-50 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:shadow-2xl group">
                Get a Free Consultation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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

export default Services;
