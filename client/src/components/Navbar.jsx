import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/Roar Logo.png"
const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Events", href: "#events" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
];
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

const scrollToSection = (href) => {
  const element = document.querySelector(href);

  if (element) {
    const navbarHeight = 100; 
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: elementPosition - navbarHeight,
      behavior: "smooth",
    });
  }

  setIsMobileMenuOpen(false);
};


  return (
    <>
      {/* NAVBAR */}
      <nav
        className="
          fixed top-4 left-4 right-4 z-50
          flex justify-between items-center
          px-4 sm:px-6 md:px-12 lg:px-20
        "
      >
        {/* LOGO */}
<div
  onClick={() => scrollToSection("#home")}
  className="text-white font-bold text-lg tracking-wider cursor-pointer
  rounded-full px-3 py-2 flex items-center gap-2
  bg-black/60 backdrop-blur-md border border-white/10"
>

  <img
    src={logo}
    alt="ROAR ENT Logo"
    className="w-7 h-7 object-contain"
  />

  ROAR <span className="text-[#FF6B35]">ENT</span>

</div>

        {/* NAV CONTAINER */}
        <div className="rounded-full px-3 py-2 flex items-center gap-1 bg-black/60 backdrop-blur-md border border-white/10">

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="
                  px-4 py-2 text-sm font-medium text-white
                  hover:text-gray-300 transition-colors
                  relative group
                "
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#FF6B35] group-hover:w-4/5 transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={() => scrollToSection("#contact")}
            className="
              hidden md:block ml-2
              bg-[#FF6B35] text-white
              px-6 py-2 rounded-full
              text-sm font-semibold
              hover:bg-[#FF8C42] transition-colors
            "
          >
            Let's Talk
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU – improved spacing */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black md:hidden flex flex-col">

          {/* TOP BAR – more compact */}
          <div className="flex justify-between items-center px-5 py-4">
            <div className="text-white font-bold text-xl tracking-wide">
              ROAR <span className="text-[#FF6B35]">ENT</span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white p-1"
            >
              <X size={28} />
            </button>
          </div>

          {/* MAIN LINKS – centered better, less top waste */}
          <div className="flex-1 flex flex-col items-center justify-center gap-10 sm:gap-12 px-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="
                  text-3xl sm:text-4xl font-semibold text-white
                  hover:text-[#FF6B35] transition-colors
                  active:scale-95
                "
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* BOTTOM CTA – optional but keeps balance */}
          <div className="pb-10 mt-10 sm:pb-12 flex justify-center">
            <button
              onClick={() => scrollToSection("#contact")}
              className="
                bg-[#FF6B35] text-white 
                px-5 rounded-lg  py-5
                text-xl sm:text-2xl font-semibold
                hover:bg-[#FF8C42] transition-colors
                active:scale-95
              "
            >
              Let's Talk
            </button>
          </div>
        </div>
      )}
    </>
  );
}