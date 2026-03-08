import { Link } from "react-router-dom";
import { Instagram, Mail, Phone, ExternalLink, Heart, ArrowUpRight } from "lucide-react";

const links = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Services", to: "/services" },
  { name: "Events", to: "/events" },
  { name: "Team", to: "/team" },
  { name: "Contact", to: "/contact" },
];

const services = [
  "Event Management",
  "Artist Management",
  "Digital Marketing",
  "Content Creation",
  "Brand Promotions",
  "Gaming & Esports",
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      {/* CTA Banner */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Ready to <span className="text-[#FF6B35]">Roar</span>?
            </h3>
            <p className="text-gray-400">Let's create something amazing together.</p>
          </div>
          <Link
            to="/contact"
            className="flex-shrink-0 bg-[#FF6B35] hover:bg-[#e55a25] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:shadow-xl hover:shadow-orange-900/30 flex items-center gap-2 group"
          >
            Get In Touch
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2 mb-6">
              <span className="text-2xl font-bold text-white">
                ROAR <span className="text-[#FF6B35]">ENT</span>
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
              A youth community platform bridging the gap between India's most capable
              youth and the work they love through meaningful engagements.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: "https://instagram.com/roar_ent_official", label: "Instagram" },
                { icon: Mail, href: "mailto:roar.ent23@gmail.com", label: "Email" },
                { icon: Phone, href: "tel:+919380673384", label: "Phone" },
                { icon: ExternalLink, href: "https://linktr.ee/roarent", label: "Linktree" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-[#FF6B35] hover:border-orange-500/50 hover:bg-orange-500/10 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 text-sm tracking-wider uppercase">Pages</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-[#FF6B35] transition-colors text-sm flex items-center gap-1 group"
                  >
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 text-sm tracking-wider uppercase">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-gray-400 hover:text-[#FF6B35] transition-colors text-sm flex items-center gap-1 group"
                  >
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} ROAR ENT. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1.5">
            Made with <Heart className="w-3.5 h-3.5 text-[#FF6B35] fill-[#FF6B35]" /> for India's Youth
          </p>
        </div>
      </div>
    </footer>
  );
}