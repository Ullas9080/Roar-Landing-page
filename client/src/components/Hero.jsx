import { motion } from "framer-motion";
import { Mail, Instagram, Link, Phone, MessageCircle } from "lucide-react";
import { ArrowRight, Users, Trophy, Zap } from "lucide-react";
import bgCharacter from "../assets/BG CHARCTER.png";
import BGImage from "../assets/ROAR BG IMAGE.png";
import CountUp from "react-countup";

const stats = [
  { icon: Trophy, value: 100, suffix: "+", label: "Successful Projects" },
  { icon: Users, value: 50, suffix: "+", label: "Brand Partners" },
  { icon: Zap, value: 10, suffix: "K+", label: "Youth Engaged" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center px-6 sm:px-8 md:px-12 lg:px-20 bg-black overflow-hidden">

      {/* 🔥 Background Image */}
      <img
        src={BGImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />

      {/* 🔥 Center Character */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src={bgCharacter}
          alt="Character"
          className="w-[850px] min-w-[850px] max-w-none object-contain"
        />
      </div>

      {/* 🔥 Social Icons Left */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">

        {[MessageCircle, Instagram, Link, Mail, Phone].map((Icon, i) => (
          <a
            key={i}
            href="#"
            className="
              w-10 h-10
              rounded-full
              border border-white/40
              flex items-center justify-center
              text-white
              bg-white/5
              backdrop-blur-md
              hover:bg-white
              hover:text-black
              transition-all duration-300
            "
          >
            <Icon size={16} />
          </a>
        ))}

      </div>

      {/* CONTENT */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-7xl">

        {/* LEFT */}
        <div className="flex flex-col justify-center mt-4 sm:mt-6 lg:mt-8">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            Empowering India’s <br />
            <span className="text-orange-500">Youth Talent</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-300 text-base sm:text-lg max-w-lg mb-8 leading-relaxed"
          >
            Bridging the gap between capable youth and meaningful work through
            real-world engagements, collaborations, and impactful experiences.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-7 py-3 rounded-lg font-semibold shadow-md hover:scale-105 transition-all duration-300 w-fit"
          >
            Get Started <ArrowRight size={18} />
          </motion.button>
        </div>

        {/* RIGHT - Responsive Stats */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="
            flex flex-row flex-wrap justify-center gap-8
            lg:flex-col lg:items-end lg:justify-center
          "
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + idx * 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="w-1 h-10 bg-orange-500 rounded-full hidden lg:block" />

              <div>
                <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold text-white leading-none">
                  <CountUp end={stat.value} duration={2} delay={0.2} />
                  {stat.suffix}
                </h3>

                <p className="text-gray-400 text-xs sm:text-sm tracking-wide mt-1">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}