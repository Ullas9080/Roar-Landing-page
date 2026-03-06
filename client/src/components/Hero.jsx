import { useRef, useEffect } from "react";
import { Mail, Instagram, Link, Phone, MessageCircle } from "lucide-react";
import { Users, Trophy, Zap } from "lucide-react";
import bgCharacter from "../assets/BG MAIN Chracter.png";
import CountUp from "react-countup";
import Button from "../StyleComponents/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: Trophy, value: 100, suffix: "+", label: "Projects" },
  { icon: Users, value: 50, suffix: "+", label: "Brands" },
  { icon: Zap, value: 10, suffix: "K+", label: "Youth" },
];

export default function Hero() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.to(contentRef.current, {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(glowRef.current, {
        scale: 1.3,
        y: -150,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
      });

      gsap.from(".hero-fade", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative w-full overflow-hidden bg-gradient-to-br from-[#fff7ed] via-white to-[#ffedd5] sm:px-10 lg:pl-20 pt-6"
    >

      {/* SOCIAL ICONS */}
      <div className="fixed md:absolute right-4 md:right-auto md:left-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-40">

        <a
          href="https://wa.me/919380673384"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-black/20 flex items-center justify-center bg-white/70 backdrop-blur-md hover:bg-[#F97316] hover:text-white hover:border-[#F97316] transition-all duration-300"
        >
          <MessageCircle size={16} />
        </a>

        <a
          href="https://instagram.com/roar_ent_official"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-black/20 flex items-center justify-center bg-white/70 backdrop-blur-md hover:bg-[#F97316] hover:text-white hover:border-[#F97316] transition-all duration-300"
        >
          <Instagram size={16} />
        </a>

        <a
          href="https://linktr.ee/roarent"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-black/20 flex items-center justify-center bg-white/70 backdrop-blur-md hover:bg-[#F97316] hover:text-white hover:border-[#F97316] transition-all duration-300"
        >
          <Link size={16} />
        </a>

        <a
          href="mailto:roar.ent23@gmail.com"
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-black/20 flex items-center justify-center bg-white/70 backdrop-blur-md hover:bg-[#F97316] hover:text-white hover:border-[#F97316] transition-all duration-300"
        >
          <Mail size={16} />
        </a>

        <a
          href="tel:+919380673384"
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-black/20 flex items-center justify-center bg-white/70 backdrop-blur-md hover:bg-[#F97316] hover:text-white hover:border-[#F97316] transition-all duration-300"
        >
          <Phone size={16} />
        </a>

      </div>

      {/* Glow */}
      <div
        ref={glowRef}
        className="absolute right-[-150px] top-20 w-[500px] h-[500px] bg-gradient-to-br from-[#F97316] to-[#ea580c] blur-[160px] opacity-40"
      />

      <div className="absolute left-[-200px] bottom-[-200px] w-[450px] h-[450px] bg-orange-300 blur-[180px] opacity-20" />

      {/* CONTENT */}
      <div
        ref={contentRef}
        className="relative z-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-16 min-h-[90vh]"
      >

        {/* LEFT */}
        <div className="flex flex-col justify-center pt-10">

          <h1 className="hero-fade text-4xl sm:text-5xl md:text-6xl font-extrabold text-black leading-tight mb-6">
            Empowering India's <br />
            <span className="text-[#F97316]">Youth Talent</span>
          </h1>

          <p className="hero-fade text-gray-600 text-base sm:text-lg max-w-lg mb-10 leading-relaxed">
            Bridging the gap between capable youth and meaningful work through
            real-world collaborations and impactful experiences across India.
          </p>

          {/* Stats */}
          <div className="hero-fade flex gap-4 sm:gap-6 flex-wrap mb-8">

            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="flex items-center gap-3 bg-white/80 backdrop-blur-md shadow-sm rounded-lg px-3 sm:px-4 py-2 sm:py-3"
                >
                  <Icon className="text-orange-500" size={18} />

                  <div>
                    <h3 className="text-base sm:text-xl font-bold text-black">
                      <CountUp end={stat.value} duration={2} />
                      {stat.suffix}
                    </h3>

                    <p className="text-[10px] sm:text-xs text-gray-500">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}

          </div>

          <Button value={"Explore"} scroll={"#services"}/>

        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden lg:flex justify-end items-end h-full relative pr-10">

          <img
            src={bgCharacter}
            alt="Character"
            className="relative z-30 w-[600px] xl:w-[680px] object-contain -mb-20 drop-shadow-[0_40px_80px_rgba(0,0,0,0.25)]"
          />

        </div>

      </div>

      {/* HERO → ABOUT CURVE */}
      <div className="absolute bottom-[-1px] left-0 w-full leading-none">
        <svg
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          className="w-full h-40"
        >
          <path
            d="M0,80 C360,200 1080,200 1440,80 L1440,200 L0,200 Z"
            fill="#fff7ed"
          />
        </svg>
      </div>

    </section>
  );
}