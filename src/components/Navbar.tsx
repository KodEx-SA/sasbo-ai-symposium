"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Conversations", href: "#conversations" },
    { name: "Features", href: "#features" },
    { name: "Register", href: "#register" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section
      const sections = [
        "home",
        "about",
        "conversations",
        "features",
        "register",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary-dark/90 backdrop-blur-xl shadow-lg shadow-primary-light-blue/10"
          : "bg-primary-dark/60 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary-cyan to-primary-light-blue rounded-lg flex items-center justify-center">
              <span className="text-xl">🏢</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight">Sasbo</span>
              <span className="text-xs text-gray-400">AI Symposium 2026</span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`transition-colors relative group ${
                    isActive
                      ? "text-primary-cyan"
                      : "text-gray-300 hover:text-white"
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary-cyan to-primary-light-blue transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </motion.a>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.a
              href="#register"
              onClick={(e) => handleNavClick(e, "#register")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-cyan to-primary-light-blue text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:shadow-primary-cyan/50 transition-all"
            >
              Register Now
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          >
            <span
              className={`w-6 h-0.5 bg-white transition-all ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-all ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-all ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-primary-light-blue/20 py-4"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block py-3 px-4 rounded transition-colors ${
                    isActive
                      ? "text-primary-cyan bg-white/10"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <a
              href="#register"
              onClick={(e) => handleNavClick(e, "#register")}
              className="block mt-4 bg-gradient-to-r from-primary-cyan to-primary-light-blue text-white px-6 py-3 rounded-full font-semibold text-center"
            >
              Register Now
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
