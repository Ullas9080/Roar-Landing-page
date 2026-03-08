import { motion } from "framer-motion";
import { Instagram, Mail, Phone, ExternalLink, ArrowUpRight, Heart } from "lucide-react";

const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#about" },
      { name: "Services", href: "#services" },
      { name: "Team", href: "#team" },
      { name: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Event Management", href: "#services" },
      { name: "Digital Marketing", href: "#services" },
      { name: "Content Creation", href: "#services" },
      { name: "Brand Promotion", href: "#services" },
    ],
  },
];

export default function Footer() {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-white pt-20 pb-8 overflow-hidden">

      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF6B35] to-transparent" />

      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[#FF6B35] rounded-full blur-[150px] opacity-10" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-6xl mx-auto">

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

            {/* Brand */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  ROAR <span className="text-[#FF6B35]">ENT</span>
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6 max-w-md">
                  A youth community platform bridging the gap between India's most capable youth
                  and the work they love through meaningful engagements and real-world experiences.
                </p>

                {/* Social Links */}
                <div className="flex items-center gap-4">
                  <a
                    href="https://instagram.com/roar_ent_official"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 border border-gray-200 rounded-full flex items-center justify-center text-gray-700 hover:bg-[#FF6B35] hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>

                  <a
                    href="mailto:roar.ent23@gmail.com"
                    className="w-12 h-12 bg-gray-100 border border-gray-200 rounded-full flex items-center justify-center text-gray-700 hover:bg-[#FF6B35] hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <Mail className="w-5 h-5" />
                  </a>

                  <a
                    href="tel:+919380673384"
                    className="w-12 h-12 bg-gray-100 border border-gray-200 rounded-full flex items-center justify-center text-gray-700 hover:bg-[#FF6B35] hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <Phone className="w-5 h-5" />
                  </a>

                  <a
                    href="https://linktr.ee/roarent"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 border border-gray-200 rounded-full flex items-center justify-center text-gray-700 hover:bg-[#FF6B35] hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Links */}
            {footerLinks.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <h4 className="text-gray-900 font-semibold mb-6">{section.title}</h4>

                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-600 hover:text-[#FF6B35] transition-colors flex items-center gap-2 group"
                      >
                        {link.name}
                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">

              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} ROAR ENT. All rights reserved.
              </p>

              <p className="text-gray-500 text-sm flex items-center gap-1">
                Made with
                <Heart className="w-4 h-4 text-[#FF6B35] fill-[#FF6B35]" />
                for India's Youth
              </p>

            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}