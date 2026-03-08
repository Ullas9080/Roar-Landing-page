import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import { Linkedin, Twitter, Instagram, ArrowRight, Users } from "lucide-react";

const teamMembers = [
  { name: "Founder & CEO", role: "Visionary Leader", image: "/images/team-1.jpg", bio: "Passionate about connecting India's youth with meaningful opportunities. Building ROAR ENT from the ground up.", socials: { linkedin: "#", twitter: "#", instagram: "#" } },
  { name: "Creative Director", role: "Design & Creative", image: "/images/team-2.jpg", bio: "Award-winning creative mind behind ROAR's campaigns and brand identity. Loving design at every scale.", socials: { linkedin: "#", twitter: "#", instagram: "#" } },
  { name: "Marketing Head", role: "Growth & Strategy", image: "/images/team-3.jpg", bio: "Data-driven marketer with a love for youth culture. Turning insights into impactful campaigns.", socials: { linkedin: "#", twitter: "#", instagram: "#" } },
];

const Team = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.45 }}
    className="bg-white"
  >
    <Navbar />

    {/* ─── HERO ─────────────────────────────── */}
    <section className="relative min-h-[65vh] flex items-center overflow-hidden bg-white pt-20">
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-[150px]" />
      <div className="absolute inset-0 opacity-[0.4]"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)", backgroundSize: "80px 80px" }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-10 text-center">
        <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-orange-600 bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5 mb-6"
        >The People</motion.span>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
          className="text-5xl md:text-7xl font-black text-gray-900 mb-6"
        >
          Meet The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-orange-400">Creators</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.6 }}
          className="text-gray-500 text-xl max-w-2xl mx-auto"
        >
          A diverse team bringing together expertise in technology, marketing, design, and event management.
        </motion.p>
      </div>
    </section>

    {/* ─── TEAM GRID ────────────────────────── */}
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {teamMembers.map((member, i) => (
            <motion.div key={member.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group rounded-2xl overflow-hidden bg-white border border-gray-100 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                {/* Social hover */}
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  {[
                    { icon: Linkedin, href: member.socials.linkedin },
                    { icon: Twitter, href: member.socials.twitter },
                    { icon: Instagram, href: member.socials.instagram },
                  ].map(({ icon: Icon, href }) => (
                    <a key={href + Icon.name} href={href}
                      className="w-8 h-8 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-gray-600 hover:text-[#FF6B35] hover:border-orange-200 transition-colors shadow-sm"
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs text-orange-500 font-semibold tracking-widest uppercase">{member.role}</span>
                <h3 className="text-gray-900 font-bold text-xl mt-1 mb-3">{member.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join us */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center p-12 rounded-3xl bg-white border border-gray-100"
        >
          <div className="w-16 h-16 mx-auto bg-orange-50 border border-orange-100 rounded-2xl flex items-center justify-center mb-5">
            <Users className="w-7 h-7 text-[#FF6B35]" />
          </div>
          <h3 className="text-gray-900 font-bold text-2xl mb-3">Want to Join the Team?</h3>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">We're always looking for passionate, creative individuals who share our vision for youth empowerment.</p>
          <Link to="/contact"
            className="inline-flex items-center gap-2 bg-[#FF6B35] hover:bg-[#e55a25] text-white px-7 py-3 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-orange-200 group"
          >
            Get In Touch <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>

    {/* ─── CULTURE ──────────────────────────── */}
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-orange-600 bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5 mb-6">Our Culture</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              We Don't Just Work —<br /><span className="text-[#FF6B35]">We Create Together</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              At ROAR ENT, we believe the best work comes from a culture of trust, creativity, and relentless ambition.
              Together, we're not just building a company — we're building a movement.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "100%", label: "Passion Driven" },
              { value: "∞", label: "Creative Possibilities" },
              { value: "24/7", label: "Committed to You" },
              { value: "0", label: "Limits Set" },
            ].map((item, i) => (
              <motion.div key={item.label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.4 }}
                className="p-6 rounded-2xl bg-gray-50 border border-gray-100 text-center"
              >
                <p className="text-4xl font-black text-[#FF6B35] mb-1">{item.value}</p>
                <p className="text-gray-400 text-sm">{item.label}</p>
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
