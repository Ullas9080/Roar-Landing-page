import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import { ArrowRight, ChevronDown } from "lucide-react";

const services = [
  { title: "Event Management", image: "/images/service-event.jpg", desc: "End-to-end planning and flawless execution of events that leave lasting impressions.", tags: ["Planning", "Logistics", "Experience Design"] },
  { title: "Artist Management", image: "/images/service-artist.jpg", desc: "Talent discovery, booking, and career management for India's emerging artists.", tags: ["Talent Booking", "Artist Relations", "Negotiations"] },
  { title: "Production", image: "/images/service-production.jpg", desc: "High-quality audio, video, and stage production that brings creative visions to life.", tags: ["AV Production", "Stage Design", "Live Recording"] },
  { title: "Digital Marketing", image: "/images/service-marketing.jpg", desc: "Strategic digital campaigns engineered to reach Gen Z audiences.", tags: ["Social Media", "Paid Ads", "Analytics"] },
  { title: "Gaming & Esports", image: "/images/service-gaming.jpg", desc: "Esports tournaments, gaming activations, and brand integrations.", tags: ["Esports", "Gaming Events", "Brand Integration"] },
  { title: "Web & App Development", image: "/images/service-web.jpg", desc: "Custom digital products — from landing pages to full-stack applications.", tags: ["Web Dev", "App Dev", "UI/UX"] },
  { title: "Content Designing", image: "/images/service-design.jpg", desc: "Scroll-stopping visual content that communicates your brand's story with style.", tags: ["Graphic Design", "Motion Graphics", "Brand Identity"] },
  { title: "Brand Promotions", image: "/images/service-brand.jpg", desc: "Strategic brand awareness campaigns that build genuine affinity with youth.", tags: ["Brand Strategy", "Campaigns", "Activations"] },
  { title: "Content Creators", image: "/images/service-creator.jpg", desc: "Influencer partnerships and UGC campaigns that amplify your brand message.", tags: ["Influencer Marketing", "UGC", "Creator Network"] },
];

const Services = () => {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? services : services.slice(0, 6);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.45 }}
      className="bg-[#fffdf9]"
    >
      <Navbar />

      {/* ─── HERO ─────────────────────────────── */}
      <section className="relative min-h-[65vh] flex items-center overflow-hidden bg-[#fffdf9] pt-20">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-[150px]" />
        <div className="absolute inset-0 opacity-[0.4]"
          style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)", backgroundSize: "80px 80px" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-10 text-center">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-orange-600 bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5 mb-6"
          >What We Offer</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-7xl font-black text-gray-900 mb-6"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-orange-400">Services</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.6 }}
            className="text-gray-500 text-xl max-w-2xl mx-auto mb-10"
          >
            9 services, one vision — connecting brands with Gen Z through creativity and impact.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-wrap justify-center gap-3">
            {["9 Services", "100+ Projects", "50+ Brands"].map((chip) => (
              <span key={chip} className="text-sm text-gray-600 bg-gray-100 border border-gray-200 rounded-full px-5 py-2">{chip}</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── SERVICES GRID ────────────────────── */}
      <section className="py-24 bg-[#fdf6f0]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatePresence>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visible.map((svc, i) => (
                <motion.div
                  key={svc.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.07, duration: 0.5 }}
                  whileHover={{ y: -6, boxShadow: "0 16px 36px rgba(255,107,53,0.12)", transition: { type: "spring", stiffness: 300, damping: 20 } }}
                  className="group rounded-2xl overflow-hidden bg-white border border-gray-100 hover:border-orange-200 transition-colors duration-300 cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img src={svc.image} alt={svc.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-gray-900 font-bold text-xl mb-2">{svc.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{svc.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {svc.tags.map((tag) => (
                        <span key={tag} className="text-xs text-orange-600 bg-orange-50 border border-orange-100 rounded-full px-3 py-1">{tag}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>

          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 border border-orange-200 text-orange-600 hover:bg-[#FF6B35] hover:text-white hover:border-[#FF6B35] px-8 py-3 rounded-xl font-semibold transition-all duration-200"
            >
              {showAll ? "Show Less" : "View All 9 Services"}
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`} />
            </button>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────── */}
      <section className="py-20 bg-[#fffdf9]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#FF6B35] via-[#e55a25] to-orange-600 p-12 text-center"
          >
            <div className="absolute inset-0 opacity-10"
              style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "40px 40px" }}
            />
            <div className="relative z-10">
              <h2 className="text-4xl font-black text-white mb-4">Need a Custom Solution?</h2>
              <p className="text-orange-100 text-lg mb-8 max-w-xl mx-auto">We tailor every engagement to your specific vision and audience.</p>
              <Link to="/contact"
                className="inline-flex items-center gap-2 bg-white text-[#FF6B35] hover:bg-orange-50 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 group"
              >
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
