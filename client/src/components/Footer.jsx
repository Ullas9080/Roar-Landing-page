import { Link } from "react-router-dom";
import { Instagram, Mail, Phone, ExternalLink, ArrowRight } from "lucide-react";

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

const socials = [
  { icon: Instagram,    href: "https://instagram.com/roar_ent_official", label: "Instagram" },
  { icon: Mail,         href: "mailto:roar.ent23@gmail.com",             label: "Email" },
  { icon: Phone,        href: "tel:+919380673384",                       label: "Phone" },
  { icon: ExternalLink, href: "https://linktr.ee/roarent",               label: "Linktree" },
];

export default function Footer() {
  return (
    <footer className="glass border-t border-[var(--border)] relative z-10 border-x-0 border-b-0">
      {/* CTA Banner */}
      <div className="border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold mb-1 text-[var(--text)] tracking-tight">
              Ready to create something amazing?
            </h3>
            <p className="text-[var(--text-muted)] text-sm">Let's build meaningful engagements together.</p>
          </div>
          <Link to="/contact" className="btn-primary group">
            Get In Touch
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2 mb-4">
              <span className="text-xl font-semibold tracking-tight text-[var(--text)]">
                ROAR
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-sm text-[var(--text-muted)]">
              A platform bridging the gap between highly capable youth and meaningful opportunities through structured engagements and professional event management.
            </p>
            <div className="flex gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer" aria-label={label}
                  className="w-9 h-9 rounded-md flex items-center justify-center border border-[var(--border)] bg-[var(--card-bg)] text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-sm text-[var(--text)]">Company</h4>
            <ul className="space-y-2.5">
              {links.map(link => (
                <li key={link.name}>
                  <Link to={link.to} className="text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-sm text-[var(--text)]">Services</h4>
            <ul className="space-y-2.5">
              {services.map(s => (
                <li key={s}>
                  <Link to="/services" className="text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[var(--text-dim)]">
            © {new Date().getFullYear()} ROAR ENT. All rights reserved.
          </p>
          <p className="text-xs text-[var(--text-dim)]">
            Based in Bangalore, India.
          </p>
        </div>
      </div>
    </footer>
  );
}