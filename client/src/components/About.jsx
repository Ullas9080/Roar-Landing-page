import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Lightbulb, Globe, Target, Handshake } from "lucide-react";
import MissionVisionCard from "../StyleComponents/MissionVisionCard";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const ref = useRef(null);

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description:
        "Pioneering creative solutions that push boundaries and challenge conventions.",
      color: "orange",
    },
    {
      icon: Globe,
      title: "Global Vision",
      description:
        "Connecting India's Gen Z with opportunities that transcend borders.",
      color: "white",
    },
    {
      icon: Target,
      title: "Measurable Impact",
      description:
        "Delivering results that matter through data-driven strategies and execution.",
      color: "orange",
    },
    {
      icon: Handshake,
      title: "True Partnership",
      description:
        "Building lasting relationships with brands, creators, and communities.",
      color: "white",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.set(
        [
          ".about-header",
          ".mission-card",
          ".vision-card",
          ".value-card",
          ".bg-glow"
        ],
        { willChange: "transform" }
      );

      gsap.to(
        [
          ".about-header",
          ".mission-card",
          ".vision-card",
          ".value-card"
        ],
        {
          y: -150,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.8,
          },
        }
      );

      gsap.to(".bg-glow", {
        y: -250,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: "bottom top",
          scrub: 2.2,
        },
      });

      gsap.from(".value-card", {
        opacity: 0,
        y: 60,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".value-card",
          start: "top 85%",
        },
      });

    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-br from-[#fff7ed] via-white to-[#ffedd5] pb-20"
    >

      {/* TOP CURVE */}
      <div className="absolute top-0 left-0 w-full leading-none">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-24"
        >
          <path
            d="M0,80 C360,0 1080,0 1440,80 L1440,0 L0,0 Z"
            fill="#fff7ed"
          />
        </svg>
      </div>

      {/* Glow Effects */}
      <div className="bg-glow absolute -top-40 -right-40 w-[550px] h-[550px] bg-orange-400/25 rounded-full blur-[140px] pointer-events-none" />

      <div className="bg-glow absolute bottom-[-120px] left-[-120px] w-[420px] h-[420px] bg-orange-500/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,115,0,0.08),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="about-header text-center mb-16 pt-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-black mb-6">
            <span className="who-underline">Who We</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Are
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            ROAR ENT is a youth community platform that bridges the gap between
            India's most capable youth and the work they love to do through
            meaningful engagements and real-world experiences.
          </p>
        </div>

        {/* Values */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <div key={value.title} className="value-card group relative">

              <div
                className={`relative p-6 rounded-3xl h-full transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  value.color === "orange"
                    ? "bg-gradient-to-br from-orange-500 to-orange-600 hover:shadow-orange-500/30"
                    : "bg-white border border-gray-200 hover:shadow-lg"
                }`}
              >

                <div
                  className={`absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-8 rounded-full ${
                    value.color === "orange"
                      ? "bg-orange-400"
                      : "bg-gray-100"
                  }`}
                />

                <div className="relative pt-4">

                  <div
                    className={`inline-flex p-3 rounded-2xl mb-4 ${
                      value.color === "orange"
                        ? "bg-white/20"
                        : "bg-orange-500/10"
                    }`}
                  >
                    <value.icon
                      className={`w-6 h-6 ${
                        value.color === "orange"
                          ? "text-white"
                          : "text-orange-500"
                      }`}
                    />
                  </div>

                  <h3
                    className={`text-xl font-bold mb-2 ${
                      value.color === "orange"
                        ? "text-white"
                        : "text-gray-900"
                    }`}
                  >
                    {value.title}
                  </h3>

                  <p
                    className={`text-sm ${
                      value.color === "orange"
                        ? "text-white/80"
                        : "text-gray-600"
                    }`}
                  >
                    {value.description}
                  </p>

                </div>

                <div
                  className={`absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-8 rounded-full ${
                    value.color === "orange"
                      ? "bg-orange-700"
                      : "bg-gray-200"
                  }`}
                />

              </div>
            </div>
          ))}
        </div>

{/* Mission Vision */}
<div className="grid md:grid-cols-2 gap-10 mt-20 justify-items-center">

  <MissionVisionCard
    title="Our Mission"
    backText="Empowering youth with real opportunities that turn talent into measurable impact."
    frontBg="#F97316"
    backBg="#ea580c"
  />

  <MissionVisionCard
    title="Our Vision"
    backText="To build a future where every young voice creates meaningful success."
    frontBg="#111827"
    backBg="#1f2937"
  />

</div>

      </div>

    </section>
  );
};

export default About;