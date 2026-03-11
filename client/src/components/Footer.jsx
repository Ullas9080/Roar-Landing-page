import { Link } from "react-router-dom";
import { Instagram, Mail, Phone, ExternalLink, Heart, ArrowUpRight } from "lucide-react";

const links = [
  { name: "Home",     to: "/" },
  { name: "About",    to: "/about" },
  { name: "Services", to: "/services" },
  { name: "Events",   to: "/events" },
  { name: "Team",     to: "/team" },
  { name: "Contact",  to: "/contact" },
];

const services = [
  "Event Management", "Artist Management", "Digital Marketing",
  "Content Creation", "Brand Promotions", "Gaming & Esports",
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--bg-1)", borderTop: "1px solid var(--border)" }}>
      {/* CTA Banner */}
      <div style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: "var(--text)" }}>
              Ready to <span className="text-orange-400">Roar</span>?
            </h3>
            <p style={{ color: "var(--text-muted)" }}>Let's create something amazing together.</p>
          </div>
          <Link to="/contact"
            className="flex-shrink-0 bg-orange-500 hover:bg-orange-400 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/20 flex items-center gap-2 group"
          >
            Get In Touch
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2 mb-5">
              <span className="text-2xl font-bold" style={{ color: "var(--text)" }}>
                ROAR <span className="text-orange-400">ENT</span>
              </span>
            </Link>
            <p className="leading-relaxed mb-6 max-w-sm" style={{ color: "var(--text-muted)" }}>
              A youth community platform bridging the gap between India's most capable youth and the work they love through meaningful engagements.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram,    href: "https://instagram.com/roar_ent_official", label: "Instagram" },
                { icon: Mail,         href: "mailto:roar.ent23@gmail.com",             label: "Email" },
                { icon: Phone,        href: "tel:+919380673384",                       label: "Phone" },
                { icon: ExternalLink, href: "https://linktr.ee/roarent",               label: "Linktree" },
              ].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer" aria-label={label}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center transition-all duration-200 hover:text-orange-400 hover:scale-110"
                  style={{ color: "var(--text-dim)" }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm tracking-wider uppercase" style={{ color: "var(--text)" }}>Pages</h4>
            <ul className="space-y-3">
              {links.map(link => (
                <li key={link.name}>
                  <Link to={link.to}
                    className="hover:text-orange-400 transition-colors text-sm flex items-center gap-1 group"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm tracking-wider uppercase" style={{ color: "var(--text)" }}>Services</h4>
            <ul className="space-y-3">
              {services.map(s => (
                <li key={s}>
                  <Link to="/services"
                    className="hover:text-orange-400 transition-colors text-sm flex items-center gap-1 group"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid var(--border)" }}>
          <p className="text-sm" style={{ color: "var(--text-dim)" }}>
            © {new Date().getFullYear()} ROAR ENT. All rights reserved.
          </p>
          <p className="text-sm flex items-center gap-1.5" style={{ color: "var(--text-dim)" }}>
            Made with <Heart className="w-3.5 h-3.5 text-orange-400 fill-orange-400" /> for India's Youth
          </p>
        </div>
      </div>
    </footer>
  );
}