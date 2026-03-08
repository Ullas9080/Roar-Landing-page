import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/Roar Logo.png";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Services", to: "/services" },
  { name: "Events", to: "/events" },
  { name: "Team", to: "/team" },
  { name: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
          ${scrolled
            ? "py-3 bg-white/95 backdrop-blur-2xl border-b border-gray-200 shadow-sm shadow-gray-100"
            : "py-5 bg-white/80 backdrop-blur-xl"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg overflow-hidden flex items-center justify-center border-orange-200 group-hover:border-orange-400 transition-colors duration-300">
              <img src={logo} alt="ROAR" className="w-6 h-6 object-contain" />
            </div>
            <span className="text-gray-900 font-bold text-lg tracking-wide">
              ROAR <span className="text-[#FF6B35]">ENT</span>
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200
                  ${isActive
                    ? "text-[#FF6B35] bg-orange-50"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-lg bg-orange-50 border border-orange-200"
                        style={{ zIndex: -1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <NavLink
              to="/contact"
              className="bg-[#FF6B35] hover:bg-[#e55a25] text-white
                px-5 py-2 rounded-lg text-sm font-semibold
                transition-all duration-200 hover:shadow-lg hover:shadow-orange-200"
            >
              Let's Talk
            </NavLink>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Menu size={22} />
          </button>
        </div>
      </motion.nav>

      {/* MOBILE FULLSCREEN MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2.5">
                <img src={logo} alt="ROAR" className="w-7 h-7 object-contain" />
                <span className="text-gray-900 font-bold text-lg">ROAR <span className="text-[#FF6B35]">ENT</span></span>
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <X size={22} />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center px-6 gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                >
                  <NavLink
                    to={link.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `block py-4 px-4 text-2xl font-semibold rounded-xl transition-all duration-200
                      ${isActive ? "text-[#FF6B35] bg-orange-50" : "text-gray-800 hover:text-[#FF6B35] hover:bg-orange-50"}`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
            </div>

            <div className="px-6 pb-10">
              <NavLink
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center bg-[#FF6B35] text-white py-4 rounded-xl font-semibold text-lg"
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