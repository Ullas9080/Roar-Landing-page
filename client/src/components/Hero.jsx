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
  { icon: Trophy, value: 100, suffix: "+", label: "Successful Projects" },
  { icon: Users, value: 50, suffix: "+", label: "Brand Partners" },
  { icon: Zap, value: 10, suffix: "K+", label: "Youth Engaged" },
];

export default function Hero() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const glowRef = useRef(null);
  const socialRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // CONTENT PARALLAX
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

      // GLOW PARALLAX
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

      // SOCIAL ICON FLOAT
      gsap.to(socialRef.current, {
        y: -80,
        opacity: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // ENTRY ANIMATION
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
      className="relative w-full pl-6 sm:pl-8 md:pl-12 lg:pl-20 bg-white overflow-hidden "
    >

      {/* GLOW BACKGROUND */}
      <div
        ref={glowRef}
        className="absolute right-[-150px] top-20 w-[500px] h-[500px] bg-gradient-to-br from-[#F97316] to-[#ea580c]  blur-[160px] opacity-40 z-0"
      />

      {/* SOCIAL ICONS */}
      <div
        ref={socialRef}
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 flex-col gap-4 z-20"
      >
        {[MessageCircle, Instagram, Link, Mail, Phone].map((Icon, i) => (
          <a
            key={i}
            href="#"
            className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center text-black bg-black/5 backdrop-blur-md hover:bg-black hover:text-white transition-all duration-300"
          >
            <Icon size={16} />
          </a>
        ))}
      </div>

      {/* MAIN GRID */}
      <div
        ref={contentRef}
        className="relative z-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 w-full min-h-[85vh]"
      >

        {/* LEFT SIDE - CONTENT */}
        <div className="flex flex-col justify-center h-full">

          <h1 className="hero-fade text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-tight mb-6">
            Empowering India’s <br />
            <span className="text-[#F97316]">Youth Talent</span>
          </h1>

          <p className="hero-fade text-gray-600 text-base sm:text-lg max-w-lg mb-8 leading-relaxed">
            Bridging the gap between capable youth and meaningful work through
            real-world engagements, collaborations, and impactful experiences.
          </p>

          <div className="hero-fade flex gap-8 items-center flex-wrap">
            <Button />

            <div className="flex items-center gap-10">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="hover:scale-105 transition-transform"
                >
                  <h3 className="text-2xl font-bold text-black leading-none">
                    <CountUp end={stat.value} duration={2.5} />
                    {stat.suffix}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT SIDE - IMAGE */}
  <div
  className="hidden lg:flex justify-end items-end h-full"
>
  <img
    src={bgCharacter}
    alt="Character"
    className="w-[420px] xl:w-125  max-w-full object-contain drop-shadow-2xl"
  />
</div>

      </div>
    </section>
  );
}