import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServiceCard from "../StyleComponents/ServiceCard";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Event Management",
    image: "/images/service-event.jpg",
    description: "End-to-end event planning and execution",
  },
  {
    title: "Artist Management",
    image: "/images/service-artist.jpg",
    description: "Talent booking and artist relations",
  },
  {
    title: "Production",
    image: "/images/service-production.jpg",
    description: "High-quality audio and video production",
  },
  {
    title: "Digital Marketing",
    image: "/images/service-marketing.jpg",
    description: "Strategic digital campaigns that convert",
  },
  {
    title: "Gaming",
    image: "/images/service-gaming.jpg",
    description: "Esports events and gaming activations",
  },
  {
    title: "Web & App Development",
    image: "/images/service-web.jpg",
    description: "Custom digital solutions and platforms",
  },
  {
    title: "Content Designing",
    image: "/images/service-design.jpg",
    description: "Creative visual content that stands out",
  },
  {
    title: "Brand Promotions",
    image: "/images/service-brand.jpg",
    description: "Strategic brand awareness campaigns",
  },
  {
    title: "Content Creators",
    image: "/images/service-creator.jpg",
    description: "Influencer partnerships and UGC",
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const [showAll, setShowAll] = useState(false);

  const visibleServices = showAll ? services : services.slice(0, 6);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.to(".services-content", {
        y: -120,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.from(".service-card", {
        opacity: 0,
        y: 80,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        id="services"
        ref={sectionRef}
        className="pt-10 pb-10 bg-gradient-to-br from-[#fff7ed] via-[#ffedd5] to-[#fed7aa] rounded-t-[100px]"
      >

        <div className="services-content max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900">
              Our{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Services
              </span>
            </h2>

            <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
              Comprehensive solutions tailored for brands looking to connect
              with Gen Z audiences.
            </p>
          </div>

          {/* Grid */}
          <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {visibleServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                image={service.image}
                description={service.description}
              />
            ))}
          </div>

          {/* Explore Button */}
          <div className="flex justify-center mt-16">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg"
            >
              {showAll ? "Show Less" : "Explore More"}
            </button>
          </div>

        </div>

      </section>

      {/* Bottom Curve */}
      <div className="relative -top-15">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
          height={60}
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 50C480 60 600 60 720 55C840 50 960 40 1080 35C1200 30 1320 30 1380 30L1440 30V120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </>
  );
}