import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Users } from "lucide-react";

const PreviousEvents = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
    {
      title: "Content Workshop",
      image: "/images/service-creator.jpg",
      date: "October 2023",
      location: "Pune",
      attendees: "300+",
    },
  ];

  return (
    <section
      id="events"
      className="relative pb-12 sm:pb-8 md:pd-10 bg-white overflow-hidden"
    >
      
      <div className="container mx-auto px-6" ref={ref}>
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-black mb-6">
            Previous{" "}
            <span className="text-orange-500">
              Activities
            </span>
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A glimpse into our successful events and activations across India.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group"
            >
              <div
                className="relative overflow-hidden rounded-2xl
                bg-white border border-gray-200
                shadow-lg hover:shadow-2xl
                transition duration-500
                hover:-translate-y-2"
              >
                
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover
                    group-hover:scale-110 transition duration-700"
                  />

                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Title */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {event.title}
                    </h3>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 flex flex-wrap gap-4 text-sm text-gray-600">

                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-orange-500" />
                    {event.date}
                  </span>

                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    {event.location}
                  </span>

                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-orange-500" />
                    {event.attendees}
                  </span>

                </div>

                {/* Hover border glow */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-400 rounded-2xl transition"></div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreviousEvents;