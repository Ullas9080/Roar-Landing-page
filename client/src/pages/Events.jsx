import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import MeshBg from "../components/MeshBg";
import { ChevronDown, ArrowRight, MapPin, Tag } from "lucide-react";

const faqs = [
  { q: "What types of events does ROAR ENT manage?", a: "We manage everything from college fests, brand activations, music concerts, esports tournaments, and cultural events to corporate youth engagement programs across India." },
  { q: "How do we get started with ROAR ENT?",       a: "Reach out through our Contact page or WhatsApp. We'll schedule a discovery call and build a custom proposal within 48 hours." },
  { q: "Do you work with startups and small brands?", a: "Absolutely. Our packages are flexible and scalable to fit any budget." },
  { q: "Which cities do you operate in?",             a: "Based in Bangalore, we operate pan-India — Mumbai, Delhi, Hyderabad, Pune, Chennai, and more." },
];

const partnerLogos = [
  { name: "Bahumukhi", src: "/Partnership/Bahumukhi.jpg" },
  { name: "Grace Tech", src: "/Partnership/Grace Tech.jpg" },
  { name: "Noizz",      src: "/Partnership/Noizz.jpg" },
  { name: "Naaraa",     src: "/Partnership/Naaraa.jpg" },
  { name: "Raze",       src: "/Partnership/raze.jpg" },
  { name: "Panda",      src: "/Partnership/Panda.jpg" },
  { name: "Kgen",       src: "/Partnership/Kgen.png" },
  { name: "Koncept",    src: "/Partnership/Koncept.png" },
  { name: "Acts",       src: "/Partnership/acts.png" },
  { name: "RAR",        src: "/Partnership/rar.png" },
];

const events = [
  { title: "Cultural Fest 2024", img: "/images/event-1.jpg", tag: "College Event",   city: "Bangalore", year: "2024", desc: "A vibrant 2-day cultural fest with 500+ performers, 5 stages, and 10,000+ attendees." },
  { title: "Brand Activation",   img: "/images/event-2.jpg", tag: "Brand Event",     city: "Mumbai",    year: "2024", desc: "Street-level brand activation reaching 2K+ Gen Z consumers for a leading FMCG brand." },
  { title: "Youth Summit 2023",  img: "/images/event-3.jpg", tag: "Community Event", city: "Delhi",     year: "2023", desc: "India's premier youth leadership summit with 30+ speakers and 1,500 delegates." },
];

const Events = () => {
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}
      style={{ background: "var(--bg)" }}>
      <Navbar />
      <div className="h-20" />

      {/* Hero */}
      <section className="relative overflow-hidden pb-10 pt-14" style={{ background: "var(--bg)" }}>
        <MeshBg prominent />
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="aurora-1 absolute -top-24 left-1/4 w-[500px] h-[500px] rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #FF6B35 0%, transparent 70%)" }} />
          <div className="absolute inset-0 grid-overlay opacity-40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 text-center">
          <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="inline-block text-orange-500 text-xs font-semibold tracking-[0.22em] uppercase glass-orange rounded-full px-4 py-2 mb-7">
            Past & Future
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 24, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.75, delay: 0.18 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{ color: "var(--text)" }}>
            Our <span className="gradient-text">Events</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.34 }}
            className="text-xl max-w-2xl mx-auto mb-12" style={{ color: "var(--text-muted)" }}>
            From intimate college fests to large-scale brand activations — every event we touch becomes unforgettable.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.48 }}
            className="flex flex-wrap justify-center gap-4">
            {[["100+","Events Delivered"],["10K+","Attendees"],["15+","Cities"]].map(([v,l]) => (
              <div key={l} className="card rounded-2xl px-6 py-4 text-center border-glow">
                <p className="text-xl font-black gradient-text">{v}</p>
                <p className="text-xs mt-1" style={{ color: "var(--text-dim)" }}>{l}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Event Cards */}
      <section className="py-20" style={{ background: "var(--bg-1)" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="block text-orange-500 text-xs font-semibold tracking-[0.22em] uppercase mb-4">Recent Work</span>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: "var(--text)" }}>Previous <span className="gradient-text">Events</span></h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {events.map((ev, i) => (
              <motion.div key={ev.title}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6, transition: { type: "spring", stiffness: 280, damping: 20 } }}
                className="card rounded-3xl overflow-hidden group border-glow"
              >
                {/* Full-brightness event image */}
                <div className="relative overflow-hidden" style={{ height: "200px" }}>
                  <img src={ev.img} alt={ev.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  {/* Tag badges overlay — white pills for readability */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="text-xs font-semibold rounded-full px-3 py-1 backdrop-blur-md flex items-center gap-1"
                      style={{ background: "#FF6B35", color: "#fff" }}>
                      <Tag className="w-2.5 h-2.5" />{ev.tag}
                    </span>
                    <span className="text-xs rounded-full px-3 py-1 backdrop-blur-md"
                      style={{ background: "rgba(255,255,255,0.85)", color: "var(--text-muted)" }}>{ev.year}</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-1 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" />
                    <span className="text-xs" style={{ color: "var(--text-dim)" }}>{ev.city}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{ color: "var(--text)" }}>{ev.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{ev.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-24" style={{ background: "var(--bg)" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="block text-orange-500 text-xs font-semibold tracking-[0.22em] uppercase mb-4">Trusted By</span>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: "var(--text)" }}>Our <span className="gradient-text">Partners</span></h2>
            <p className="mt-4 max-w-lg mx-auto" style={{ color: "var(--text-muted)" }}>Brands and organizations that trust ROAR ENT to deliver exceptional youth experiences.</p>
          </motion.div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
            {partnerLogos.map((p, i) => (
              <motion.div key={p.name}
                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                whileHover={{ scale: 1.06, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                className="aspect-square card rounded-2xl flex items-center justify-center p-4 border-glow"
              >
                {/* Partner logos at full opacity */}
                <img src={p.src} alt={p.name} className="w-full h-full object-contain" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 pb-28" style={{ background: "var(--bg-1)" }}>
        <div className="max-w-2xl mx-auto px-6 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="block text-orange-500 text-xs font-semibold tracking-[0.22em] uppercase mb-4">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: "var(--text)" }}>Quick <span className="gradient-text">Answers</span></h2>
          </motion.div>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className={`card rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === i ? "ring-1 ring-orange-400/40" : ""}`}
              >
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left">
                  <span className="font-medium text-sm pr-4" style={{ color: openFaq === i ? "var(--text)" : "var(--text-muted)" }}>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-orange-500 flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                      <p className="px-5 pb-4 text-sm leading-relaxed" style={{ color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: "0.875rem" }}>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/contact"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/20 group">
              Ask Us Directly <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </motion.div>
  );
};

export default Events;
