import { useRef, useEffect } from "react";
import { Calendar, MapPin, Users } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const events = [
  {
    title: "Youth Summit 2024",
    image: "/images/event-1.jpg",
    date: "March 2024",
    location: "Bangalore",
    attendees: "2000+",
  },
  {
    title: "Creator Meetup",
    image: "/images/event-2.jpg",
    date: "February 2024",
    location: "Mumbai",
    attendees: "500+",
  },
  {
    title: "Music Festival",
    image: "/images/event-3.jpg",
    date: "January 2024",
    location: "Delhi",
    attendees: "5000+",
  },
  {
    title: "Gaming Tournament",
    image: "/images/service-gaming.jpg",
    date: "December 2023",
    location: "Hyderabad",
    attendees: "1500+",
  },
  {
    title: "Brand Launch",
    image: "/images/service-brand.jpg",
    date: "November 2023",
    location: "Chennai",
    attendees: "800+",
  },
];

export default function PreviousEvents() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const totalWidth = trackRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;

      gsap.to(trackRef.current, {
        x: -(totalWidth - viewportWidth),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${totalWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
    id="events"
      ref={sectionRef}
      className="relative w-full bg-gradient-to-b from-white via-orange-50 to-white py-5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
{/* BACKGROUND GLOW */}
{/* <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-orange-400/30 rounded-full blur-[140px]" />

<div className="absolute top-20 right-[-120px] w-[420px] h-[420px] bg-orange-500/20 rounded-full blur-[150px]" />

<div className="absolute bottom-[-120px] left-1/3 w-[350px] h-[350px] bg-yellow-300/20 rounded-full blur-[130px]" /> */}

{/* RADIAL LIGHT */}
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,115,0,0.08),transparent_60%)]"></div>
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-black text-gray-900">
          Previous <span className="text-orange-500">Events</span>
        </h2>

        <p className="text-gray-500 mt-4">
          A glimpse into our successful youth activations across India.
        </p>
      </div>

      {/* Horizontal Track */}
      <div
        ref={trackRef}
        className="flex gap-10 px-10"
      >
        {events.map((event) => (
          <div
            key={event.title}
            className="min-w-[320px] md:min-w-[380px] bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-500 overflow-hidden group"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-56 object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

              <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">
                {event.title}
              </h3>
            </div>

            {/* Info */}
            <div className="p-5 flex flex-col gap-3 text-sm text-gray-600">

              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-orange-500" />
                {event.date}
              </span>

              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-orange-500" />
                {event.location}
              </span>

              <span className="flex items-center gap-2">
                <Users className="w-4 h-4 text-orange-500" />
                {event.attendees}
              </span>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}