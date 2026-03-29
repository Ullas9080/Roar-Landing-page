import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import MeshBg from "../components/MeshBg";
import { ArrowRight, ChevronDown, Calendar, Camera, Volume2, Megaphone, Gamepad2, Code, Palette, Users } from "lucide-react";

const services = [
  { icon: Calendar,  title: "Event Management",     img: "/images/service-event.jpg",      stat: "100+ Events",       desc: "End-to-end planning and flawless execution — college fests to brand activations.", tags: ["Planning","Logistics","Experience Design"] },
  { icon: Camera,    title: "Artist Management",    img: "/images/service-artist.jpg",     stat: "50+ Artists",       desc: "Talent discovery, booking, and career development for India's rising artists.",     tags: ["Talent Booking","Negotiations","Artist Relations"] },
  { icon: Volume2,   title: "Production",           img: "/images/service-production.jpg", stat: "Pro-Grade",         desc: "High-quality audio, video, and stage production that brings visions to life.",      tags: ["AV Production","Stage Design","Live Recording"] },
  { icon: Megaphone, title: "Digital Marketing",    img: "/images/service-marketing.jpg",  stat: "10M+ Reach",       desc: "Gen Z campaigns engineered to reach, resonate, and actually convert.",             tags: ["Social Media","Paid Ads","Analytics"] },
  { icon: Gamepad2,  title: "Gaming & Esports",     img: "/images/service-gaming.jpg",     stat: "Pan-India",        desc: "Esports tournaments, gaming activations, and brand integrations.",                  tags: ["Esports","Gaming Events","Brand Integration"] },
  { icon: Code,      title: "Web & App Dev",         img: "/images/service-web.jpg",        stat: "Custom Builds",   desc: "Custom digital products built with performance and design in mind.",               tags: ["Web Dev","App Dev","UI/UX"] },
  { icon: Palette,   title: "Content Designing",    img: "/images/service-design.jpg",     stat: "Award-Grade",     desc: "Scroll-stopping visuals — motion graphics, brand kits, and social content.",       tags: ["Graphic Design","Motion Graphics","Branding"] },
  { icon: Volume2,   title: "Brand Promotions",     img: "/images/service-brand.jpg",      stat: "50+ Brands",      desc: "Strategy-led campaigns that build genuine youth affinity with your brand.",        tags: ["Brand Strategy","Campaigns","Activations"] },
  { icon: Users,     title: "Content Creators",     img: "/images/service-creator.jpg",    stat: "Creator Network", desc: "Influencer partnerships and UGC campaigns that amplify your message authentically.", tags: ["Influencer","UGC","Creator Network"] },
];

function ServiceCard({ svc, i }) {
  const Icon = svc.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      transition={{ duration: 0.4, delay: i * 0.05 }}
      className="card rounded-xl overflow-hidden group flex flex-col h-full cursor-default"
    >
      {/* Full-brightness image */}
      <div className="relative h-48 overflow-hidden bg-[var(--bg-2)] border-b border-[var(--border)]">
        <img src={svc.img} alt={svc.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        {/* Stat badge */}
        <span className="absolute top-3 right-3 text-[10px] font-semibold tracking-wide uppercase rounded-md px-2.5 py-1"
          style={{ background: "rgba(255,255,255,0.9)", border: "1px solid rgba(0,0,0,0.1)", color: "#000" }}>
          {svc.stat}
        </span>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[var(--bg-1)] border border-[var(--border)] text-[var(--accent)]">
            <Icon className="w-4 h-4" />
          </div>
          <h3 className="font-semibold text-lg text-[var(--text)] tracking-tight">{svc.title}</h3>
        </div>
        <p className="text-sm leading-relaxed mb-6 text-[var(--text-muted)] flex-1">{svc.desc}</p>
        <div className="flex flex-wrap gap-2 mt-auto pt-5 border-t border-[var(--border)]">
          {svc.tags.map(t => (
            <span key={t} className="text-xs px-2.5 py-1 rounded-md font-medium bg-[var(--bg-1)] border border-[var(--border)] text-[var(--text-muted)]">
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
    <motion.div
      initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}
      transition={{ duration: 0.3 }}
      className="bg-[var(--bg)] min-h-screen"
    >
      <Navbar />
      <div className="h-16" />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden border-b border-[var(--border)] py-20 lg:py-32" style={{ background: "var(--bg)" }}>
        <MeshBg />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 mb-6 bg-[var(--bg-1)] border border-[var(--border)]">
            <span className="text-xs font-semibold tracking-wide text-[var(--text)] uppercase">What We Offer</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight tracking-tight mb-6 text-gradient pb-1">
            Our Services
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto mb-10 text-[var(--text-muted)]">
            9 core services, one vision — connecting brands with Gen Z through creativity, culture, and measurable impact.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3">
            {["9 Services","100+ Projects","50+ Brands","Pan-India"].map(chip => (
              <span key={chip} className="bg-[var(--card-bg)] border border-[var(--border)] rounded-lg px-4 py-2 flex items-center gap-2 text-sm font-medium text-[var(--text-muted)] shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] flex-shrink-0" />{chip}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 bg-[var(--bg-1)] border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <AnimatePresence>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visible.map((svc, i) => <ServiceCard key={svc.title} svc={svc} i={i} />)}
            </div>
          </AnimatePresence>
          <div className="text-center mt-12">
            <button onClick={() => setShowAll(!showAll)}
              className="btn-secondary group">
              {showAll ? "Show Less" : `View All ${services.length} Services`}
              <ChevronDown className={`w-4 h-4 ml-2 inline-block transition-transform duration-300 ${showAll ? "rotate-180" : ""}`} />
            </button>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 bg-[var(--bg)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="block text-sm font-semibold tracking-tight uppercase text-[var(--orange)] mb-3">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--text)]">How We Work</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[["01","Discovery Call","Deep-dive into your goals, audience, and timelines."],["02","Custom Proposal","Tailored strategy and budget delivered within 48 hrs."],["03","Execution","On-ground or digital — we handle every single detail."],["04","Results & Report","Full analytics and insights delivered post-campaign."]].map(([n,t,d],i) => (
              <motion.div key={n}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="card rounded-xl p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <span className="block text-3xl font-bold font-mono text-[var(--border-focus)] mb-6 opacity-80">{n}</span>
                  <h4 className="font-semibold text-lg mb-3 tracking-tight text-[var(--text)]">{t}</h4>
                  <p className="text-sm leading-relaxed text-[var(--text-muted)]">{d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[var(--bg-1)] border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden p-12 md:p-20 text-center bg-[var(--accent)] border border-[var(--border)]">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-[var(--bg)]">Need a Custom Solution?</h2>
              <p className="text-lg mb-8 max-w-xl mx-auto opacity-80 text-[var(--bg)] font-medium">We tailor every engagement to your specific vision, audience, and budget.</p>
              <Link to="/contact"
                className="inline-flex items-center justify-center bg-[var(--bg)] text-[var(--text)] px-8 py-3.5 rounded-lg font-medium hover:bg-white transition-colors group">
                Get a Free Consultation <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
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
