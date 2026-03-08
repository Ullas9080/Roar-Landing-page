import { motion } from "framer-motion";
import { Linkedin, Twitter, Instagram } from "lucide-react";

const teamMembers = [
  {
    name: "Alex Kumar",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    socials: { linkedin: "#", twitter: "#", instagram: "#" },
  },
  {
    name: "Priya Sharma",
    role: "Creative Director",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    socials: { linkedin: "#", twitter: "#", instagram: "#" },
  },
  {
    name: "Rahul Verma",
    role: "Tech Lead",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    socials: { linkedin: "#", twitter: "#", instagram: "#" },
  },
  {
    name: "Ananya Patel",
    role: "Marketing Head",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    socials: { linkedin: "#", twitter: "#", instagram: "#" },
  },
];

export default function Team() {
  return (
    <section id="team" className="relative py-10 lg:py-10 overflow-hidden bg-white">
      
      {/* Decorative Blur */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#FF6B35] rounded-full blur-[200px] opacity-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FF8C42] rounded-full blur-[150px] opacity-10" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-[#FF6B35] text-sm font-semibold tracking-wider uppercase mb-4">
              Our Team
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Meet The <span className="text-[#FF6B35]">Creators</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Our diverse team of passionate individuals brings together
              expertise from technology, marketing, design, and event
              management to create exceptional experiences.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Together, we're building a platform that empowers India's youth
              while delivering innovative solutions for brands.
            </p>
          </motion.div>

          {/* Team Cards */}
          <div className="space-y-4">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                whileHover={{ x: -10 }}
                className="group"
              >
                <div className="rounded-3xl p-4 flex items-center gap-6 bg-gray-100 hover:bg-gray-200 transition-all duration-500 cursor-pointer">

                  {/* Image */}
                  <div className="relative">
                    <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    <div className="absolute inset-0 w-20 h-20 lg:w-24 lg:h-24 rounded-2xl border-2 border-[#FF6B35] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-[#FF6B35] transition-colors">
                      {member.name}
                    </h3>

                    <p className="text-gray-600 text-sm">{member.role}</p>
                  </div>

                  {/* Social Icons */}
                  <div className="hidden sm:flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                    
                    <a
                      href={member.socials.linkedin}
                      className="p-2 rounded-full bg-gray-200 hover:bg-[#FF6B35] transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-gray-700" />
                    </a>

                    <a
                      href={member.socials.twitter}
                      className="p-2 rounded-full bg-gray-200 hover:bg-[#FF6B35] transition-colors"
                    >
                      <Twitter className="w-4 h-4 text-gray-700" />
                    </a>

                    <a
                      href={member.socials.instagram}
                      className="p-2 rounded-full bg-gray-200 hover:bg-[#FF6B35] transition-colors"
                    >
                      <Instagram className="w-4 h-4 text-gray-700" />
                    </a>

                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}