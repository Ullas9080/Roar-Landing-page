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
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-400 ${
          scrolled ? "py-3 glass border-b shadow-xl shadow-black/20" : "py-4 bg-transparent"
        }`}
        style={scrolled ? { borderBottomColor: "var(--border)" } : {}}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl overflow-hidden flex items-center justify-center border group-hover:border-orange-500/50 transition-colors duration-300"
              style={{ background: "rgba(255,107,53,0.08)", borderColor: "rgba(255,107,53,0.22)" }}>
              <img src={logo} alt="ROAR" className="w-6 h-6 object-contain" />
            </div>
            <span className="font-bold text-lg tracking-wide" style={{ color: "var(--text)" }}>
              ROAR <span className="text-orange-400">ENT</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map(link => (
              <NavLink key={link.name} to={link.to} end={link.to === "/"}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
                    isActive ? "text-orange-400" : "hover:bg-black/5"
                  }`
                }
                style={({ isActive }) => ({ color: isActive ? undefined : "var(--text-muted)" })}
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <motion.span layoutId="nav-indicator"
                        className="absolute inset-0 rounded-xl"
                        style={{ background: "rgba(255,107,53,0.09)", border: "1px solid rgba(255,107,53,0.22)", zIndex: -1 }}
                        transition={{ type: "spring", stiffness: 380, damping: 34 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Right side: theme toggle + CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme toggle */}
            <button onClick={toggle}
              className="w-9 h-9 rounded-xl flex items-center justify-center glass transition-all duration-200 hover:scale-110"
              aria-label="Toggle theme"
            >
              {theme === "dark"
                ? <Sun  className="w-4 h-4 text-orange-400" />
                : <Moon className="w-4 h-4 text-orange-500" />
              }
            </button>
            <NavLink to="/contact"
              className="inline-flex items-center gap-1.5 bg-orange-500 hover:bg-orange-400 text-white px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/25"
            >
              Let's Talk
            </NavLink>
          </div>

          {/* Mobile row */}
          <div className="flex md:hidden items-center gap-2">
            <button onClick={toggle}
              className="w-9 h-9 rounded-xl flex items-center justify-center glass"
              aria-label="Toggle theme"
            >
              {theme === "dark"
                ? <Sun  className="w-4 h-4 text-orange-400" />
                : <Moon className="w-4 h-4 text-orange-500" />
              }
            </button>
            <button onClick={() => setMobileOpen(true)}
              className="p-2 rounded-xl glass"
              style={{ color: "var(--text-muted)" }}
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
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 32 }}
            className="fixed inset-0 z-[100] flex flex-col"
            style={{ background: "var(--bg-1)" }}
          >
            <div className="flex items-center justify-between px-6 py-4" style={{ borderBottom: "1px solid var(--border)" }}>
              <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5">
                <img src={logo} alt="ROAR" className="w-7 h-7 object-contain" />
                <span className="font-bold text-lg" style={{ color: "var(--text)" }}>ROAR <span className="text-orange-400">ENT</span></span>
              </Link>
              <button onClick={() => setMobileOpen(false)} className="p-2 rounded-xl glass">
                <X size={20} style={{ color: "var(--text-muted)" }} />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center px-6 gap-1">
              {navLinks.map((link, i) => (
                <motion.div key={link.name}
                  initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <NavLink to={link.to} onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `block py-4 px-4 text-2xl font-semibold rounded-2xl transition-all duration-200 ${
                        isActive ? "text-orange-400" : ""
                      }`
                    }
                    style={({ isActive }) => ({
                      color:      isActive ? undefined : "var(--text-muted)",
                      background: isActive ? "rgba(255,107,53,0.08)" : undefined,
                    })}
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
            </div>

            <div className="px-6 pb-12">
              <NavLink to="/contact" onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center w-full bg-orange-500 text-white py-4 rounded-2xl font-bold text-lg hover:bg-orange-400 transition-colors"
              >
                Let's Talk →
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}