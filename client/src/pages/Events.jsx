import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import { ChevronDown, ArrowRight } from "lucide-react";

const faqs = [
  { q: "What types of events does ROAR ENT manage?", a: "We manage everything from college fests, brand activations, music concerts, esports tournaments, and cultural events to corporate youth engagement programs across India." },
  { q: "How do we get started with ROAR ENT?", a: "Simply reach out through our Contact page or WhatsApp. We'll schedule a discovery call to understand your goals and build a custom proposal within 48 hours." },
  { q: "Do you work with startups and small brands?", a: "Absolutely! We work with brands of all sizes — from early-stage startups to established companies. Our packages are flexible and scalable." },
  { q: "Which cities do you operate in?", a: "We're based in Bangalore but operate pan-India across Bangalore, Mumbai, Delhi, Hyderabad, Pune, Chennai, and more." },
];

const partnerLogos = [
  { name: "Bahumukhi", src: "/Partnership/Bahumukhi.jpg" },
  { name: "Grace Tech", src: "/Partnership/Grace Tech.jpg" },
  { name: "Noizz", src: "/Partnership/Noizz.jpg" },
  { name: "Naaraa", src: "/Partnership/Naaraa.jpg" },
  { name: "Raze", src: "/Partnership/raze.jpg" },
  { name: "Panda", src: "/Partnership/Panda.jpg" },
  { name: "Kgen", src: "/Partnership/Kgen.png" },
  { name: "Koncept", src: "/Partnership/Koncept.png" },
  { name: "Acts", src: "/Partnership/acts.png" },
  { name: "RAR", src: "/Partnership/rar.png" },
];

const events = [
  { title: "Cultural Fest 2024", img: "/images/event-1.jpg", tag: "College Event", city: "Bangalore" },
  { title: "Brand Activation", img: "/images/event-2.jpg", tag: "Brand Event", city: "Mumbai" },
  { title: "Youth Summit", img: "/images/event-3.jpg", tag: "Community Event", city: "Delhi" },
];

const Events = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.45 }}
      className="bg-white"
    >
      <Navbar />

      {/* ─── HERO ─────────────────────────────── */}
      <section className="relative min-h-[65vh] flex items-center overflow-hidden bg-white pt-10">
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-[150px]" />
        <div className="absolute inset-0 opacity-[0.4]"
          style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)", backgroundSize: "80px 80px" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-orange-600 bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5 mb-6"
          >Past & Future</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-7xl font-black text-gray-900 mb-6"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-orange-400">Events</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.6 }}
            className="text-gray-500 text-xl max-w-2xl mx-auto"
          >
            From intimate college fests to large-scale brand activations — every event we touch becomes an unforgettable experience.
          </motion.p>
        </div>
      </section>

      {/* ─── EVENTS GALLERY ───────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-orange-600 bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5 mb-4">Recent Work</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Previous <span className="text-[#FF6B35]">Events</span></h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((ev, i) => (
              <motion.div key={ev.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group rounded-2xl overflow-hidden bg-white border border-gray-100 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-56 overflow-hidden">
                  <img src={ev.img} alt={ev.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-semibold text-white bg-[#FF6B35] rounded-full px-3 py-1">{ev.tag}</span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white/80 text-xs mb-1">📍 {ev.city}</p>
                    <h3 className="text-white font-bold text-xl">{ev.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PARTNERS ─────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-orange-600 bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5 mb-4">Trusted By</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Our <span className="text-[#FF6B35]">Partners</span></h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">Brands and organizations that trust ROAR ENT to deliver exceptional youth experiences.</p>
          </motion.div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
            {partnerLogos.map((partner, i) => (
              <motion.div key={partner.name} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.4 }}
                className="aspect-square rounded-2xl bg-gray-50 border border-gray-100 hover:border-orange-200 hover:bg-orange-50 flex items-center justify-center p-4 transition-all duration-300"
              >
                <img src={partner.src} alt={partner.name} className="w-full h-full object-contain opacity-60 hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ (compact) ────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-orange-600 bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5 mb-4">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Quick <span className="text-[#FF6B35]">Answers</span></h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className={`rounded-2xl border transition-all duration-300 ${openFaq === i ? "bg-orange-50 border-orange-200" : "bg-white border-gray-100 hover:border-gray-200"}`}
              >
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                  <span className={`font-medium pr-4 transition-colors ${openFaq === i ? "text-gray-900" : "text-gray-700"}`}>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-orange-500 flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                      <div className="px-5 pb-5 text-gray-500 text-sm leading-relaxed border-t border-orange-100 pt-4">{faq.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/contact"
              className="inline-flex items-center gap-2 bg-[#FF6B35] hover:bg-[#e55a25] text-white px-7 py-3 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-orange-200 group"
            >
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
