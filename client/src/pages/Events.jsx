import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import MeshBg from "../components/MeshBg";
import { ChevronDown, ArrowRight, MapPin, Tag, Building2 } from "lucide-react";

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
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 flex flex-col items-center text-center">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 mb-6 bg-[var(--bg-1)] border border-[var(--border)]">
            <span className="text-xs font-semibold tracking-wide text-[var(--text)] uppercase">Our Portfolio</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight tracking-tight mb-6 text-gradient pb-1">
            Our Events
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto mb-12 text-[var(--text-muted)]">
            From intimate college fests to large-scale brand activations — every event we touch becomes unforgettable.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4">
            {[["100+","Events Delivered"],["10K+","Attendees"],["15+","Cities"]].map(([v,l]) => (
              <div key={l} className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl px-6 py-4 text-center min-w-[140px] shadow-sm">
                <p className="text-2xl font-bold text-[var(--accent)] tracking-tight mb-1">{v}</p>
                <p className="text-xs font-medium text-[var(--text-muted)]">{l}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Event Cards */}
      <section className="py-24 bg-[var(--bg-1)] border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="block text-sm font-semibold tracking-tight uppercase text-[var(--text-muted)] mb-3">Recent Work</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--text)]">Previous Events</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((ev, i) => (
              <motion.div key={ev.title}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="card rounded-2xl overflow-hidden group flex flex-col"
              >
                <div className="relative h-56 overflow-hidden bg-[var(--bg-2)] border-b border-[var(--border)]">
                  <img src={ev.img} alt={ev.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider rounded-md px-2.5 py-1 bg-[var(--accent)] text-[var(--bg)] shadow-sm">
                      <Tag className="w-3 h-3" />{ev.tag}
                    </span>
                    <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wider rounded-md px-2.5 py-1 bg-[var(--bg-1)] text-[var(--text)] border border-[var(--border)] shadow-sm">
                      {ev.year}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-1.5 mb-3 text-[var(--text-muted)] border border-[var(--border)] w-fit px-2 py-1 rounded bg-[var(--bg-1)]">
                    <MapPin className="w-3 h-3" />
                    <span className="text-xs font-medium uppercase tracking-wide">{ev.city}</span>
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-[var(--text)] tracking-tight">{ev.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--text-muted)] flex-1">{ev.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-24 bg-[var(--bg)] border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="block text-sm font-semibold tracking-tight uppercase text-[var(--text-muted)] mb-3">Trusted By</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--text)]">Our Partners</h2>
            <p className="mt-4 max-w-xl mx-auto text-[var(--text-muted)] text-lg">Brands and organizations that trust ROAR ENT to deliver exceptional experiences.</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {partnerLogos.map((p, i) => (
              <motion.div key={p.name}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="aspect-video card rounded-xl flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-300 bg-[var(--card-bg)]"
              >
                <img src={p.src} alt={p.name} className="w-full h-full object-contain" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[var(--bg-1)]">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="block text-sm font-semibold tracking-tight uppercase text-[var(--text-muted)] mb-3">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--text)]">Quick Answers</h2>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="card rounded-lg overflow-hidden"
              >
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 hover:bg-[var(--surface-hover)] transition-colors">
                  <span className="font-medium text-sm text-[var(--text)]">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 flex-shrink-0 text-[var(--text-muted)] transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
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
          <div className="text-center mt-12">
            <Link to="/contact" className="btn-secondary group">
              Ask Us Directly <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
