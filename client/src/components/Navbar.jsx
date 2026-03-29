import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../App";
import logo from "../assets/Roar Logo.png";

const navLinks = [
  { name: "Home",     to: "/" },
  { name: "About",    to: "/about" },
  { name: "Services", to: "/services" },
  { name: "Events",   to: "/events" },
  { name: "Team",     to: "/team" },
  { name: "Contact",  to: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const { theme, toggle }           = useTheme();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 glass shadow-sm"
            : "py-4 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group transition-opacity hover:opacity-80">
            <div className="w-8 h-8 flex items-center justify-center">
              <img src={logo} alt="ROAR" className="w-full h-full object-contain" />
            </div>
            <span className="font-semibold text-lg tracking-tight" style={{ color: "var(--text)" }}>
              ROAR
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <NavLink key={link.name} to={link.to} end={link.to === "/"}
                className={({ isActive }) =>
                  `px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                    isActive ? "bg-[var(--glow-brand)] text-[var(--orange)]" : "text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--surface-hover)]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Right side: theme toggle + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button onClick={toggle}
              className="w-8 h-8 rounded-md flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--surface-hover)] transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <NavLink to="/contact" className="btn-primary">
              Let's Talk
            </NavLink>
          </div>

          {/* Mobile row */}
          <div className="flex md:hidden items-center gap-2">
            <button onClick={toggle}
              className="w-8 h-8 rounded-md flex items-center justify-center text-[var(--text-muted)]"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button onClick={() => setMobileOpen(true)}
              className="p-1.5 rounded-md text-[var(--text-muted)]"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex flex-col bg-[var(--bg)]"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border)]">
              <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
                <img src={logo} alt="ROAR" className="w-8 h-8 object-contain" />
                <span className="font-semibold text-lg text-[var(--text)]">ROAR</span>
              </Link>
              <button onClick={() => setMobileOpen(false)} className="p-1.5 text-[var(--text-muted)]">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 px-6 py-8 flex flex-col gap-2">
              {navLinks.map((link) => (
                <NavLink key={link.name} to={link.to} onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `block py-3 px-4 text-lg font-medium rounded-lg transition-colors ${
                      isActive ? "bg-[var(--glow-brand)] text-[var(--orange)]" : "text-[var(--text-muted)]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            <div className="px-6 pb-8">
              <NavLink to="/contact" onClick={() => setMobileOpen(false)}
                className="btn-primary w-full py-3 text-base"
              >
                Let's Talk
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}