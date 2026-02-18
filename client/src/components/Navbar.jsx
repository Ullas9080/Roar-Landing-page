import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-4 left-4 right-4 z-50 flex justify-between items-center px-6 sm:px-8 md:px-12 lg:px-20"
      >
        {/* ROAR ENT Branding */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-white font-bold text-lg tracking-wider cursor-pointer"
          onClick={() => scrollToSection("#home")}
        >
          ROAR <span className="text-[#FF6B35]">ENT</span>
        </motion.div>

        {/* Navigation Container */}
        <div className="rounded-full px-3 py-2 flex items-center gap-1 bg-black/60 backdrop-blur-md border border-white/10">

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            {navLinks.map((link) => (
              <motion.button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="px-4 py-2 text-sm font-medium text-white hover:text-gray-300 transition-colors relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#FF6B35] group-hover:w-4/5 transition-all duration-300" />
              </motion.button>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            onClick={() => scrollToSection("#contact")}
            className="hidden md:block ml-2 bg-[#FF6B35] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#FF8C42] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Talk
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-6 md:hidden"
          >
            {navLinks.map((link, idx) => (
              <motion.button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-2xl font-semibold text-white hover:text-[#FF6B35] transition-colors"
              >
                {link.name}
              </motion.button>
            ))}

            <motion.button
              onClick={() => scrollToSection("#contact")}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.1 }}
              className="mt-4 bg-[#FF6B35] text-white px-8 py-3 rounded-full text-lg font-semibold"
            >
              Let's Talk
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
