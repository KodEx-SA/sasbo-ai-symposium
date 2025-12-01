"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import sasboImg from "@/assets/images/sasbo-logo.jpeg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  const navLinks = [
    {
      name: "Home",
      href: "#home",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
    {
      name: "Time Capsule",
      href: "#time-capsule",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      name: "Opportunity",
      href: "#opportunity",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
    },
    {
      name: "About",
      href: "#about",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      name: "Conversations",
      href: "#conversations",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
          />
        </svg>
      ),
    },
    {
      name: "Features",
      href: "#features",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
    },
    // {
    //   name: "Register",
    //   href: "#register",
    //   icon: (
    //     <svg
    //       className="w-4 h-4"
    //       fill="none"
    //       stroke="currentColor"
    //       viewBox="0 0 24 24"
    //     >
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         strokeWidth={2}
    //         d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
    //       />
    //     </svg>
    //   ),
    // },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 20);

      // Calculate scroll progress
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (scrollPosition / windowHeight) * 100;
      setScrollProgress(scrolled);

      // Detect active section
      const sections = [
        "home",
        "time-capsule",
        "opportunity",
        "about",
        "conversations",
        "features",
        // "register",
      ];
      const currentSection = sections.find((section) => {
        // Check if section is in viewport
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect(); // Get section position
          return rect.top <= 100 && rect.bottom >= 100; // Check if in view
        }
        return false;
      });

      if (currentSection) {
        // Update active section
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    // Smooth scroll handler
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      // Smooth scroll to section
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-cyan to-primary-light-blue z-[60] origin-left"
        style={{ scaleX: scrollProgress / 100 }}
        initial={{ scaleX: 0 }}
      />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-primary-dark/95 backdrop-blur-xl shadow-lg shadow-primary-light-blue/10 border-b border-primary-light-blue/20"
            : "bg-primary-dark/80 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="flex items-center gap-3 group relative z-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative w-12 h-12">
                <Image
                  src={sasboImg}
                  alt="Sasbo Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="font-bold text-m leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Sasbo
                </span>
                <span className="text-xs text-primary-cyan font-semibold">
                  Finance Union
                </span>
              </div>

              {/* Pulse effect */}
              {/* <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-br from-primary-cyan to-primary-light-blue rounded-xl"
              /> */}
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="relative px-4 py-2 rounded-lg transition-colors group"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div
                      className={`flex items-center gap-2 relative z-10 ${
                        isActive
                          ? "text-white"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {link.icon}
                      <span className="text-sm font-medium">{link.name}</span>
                    </div>

                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-gradient-to-r from-primary-cyan/20 to-primary-light-blue/20 rounded-lg border border-primary-cyan/30"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}

                    {/* Hover effect */}
                    <div
                      className={`absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity ${
                        isActive ? "hidden" : ""
                      }`}
                    />
                  </motion.a>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <motion.a
                href="#register"
                onClick={(e) => handleNavClick(e, "#register")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group bg-gradient-to-r from-primary-cyan to-primary-light-blue text-white px-6 py-2.5 rounded-full font-semibold text-sm shadow-lg shadow-primary-cyan/30 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Register Now
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                />
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-white/5 transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                animate={{
                  rotate: mobileMenuOpen ? 45 : 0,
                  y: mobileMenuOpen ? 8 : 0,
                }}
                className="w-6 h-0.5 bg-white transition-all"
              />
              <motion.span
                animate={{
                  opacity: mobileMenuOpen ? 0 : 1,
                }}
                className="w-6 h-0.5 bg-white transition-all"
              />
              <motion.span
                animate={{
                  rotate: mobileMenuOpen ? -45 : 0,
                  y: mobileMenuOpen ? -8 : 0,
                }}
                className="w-6 h-0.5 bg-white transition-all"
              />
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-primary-light-blue/20 bg-primary-dark/95 backdrop-blur-xl overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
                {navLinks.map((link, index) => {
                  const isActive = activeSection === link.href.replace("#", "");
                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.05 }}
                      className={`flex items-center gap-3 p-4 rounded-xl transition-all ${
                        isActive
                          ? "bg-gradient-to-r from-primary-cyan/20 to-primary-light-blue/20 text-white border border-primary-cyan/30"
                          : "text-gray-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          isActive
                            ? "bg-gradient-to-br from-primary-cyan to-primary-light-blue text-white"
                            : "bg-white/5"
                        }`}
                      >
                        {link.icon}
                      </div>
                      <span className="font-medium">{link.name}</span>
                      {isActive && (
                        <motion.div
                          layoutId="activeMobileNav"
                          className="ml-auto w-2 h-2 bg-primary-cyan rounded-full"
                        />
                      )}
                    </motion.a>
                  );
                })}

                {/* Mobile CTA */}
                <motion.a
                  href="#register"
                  onClick={(e) => handleNavClick(e, "#register")}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="block mt-4 bg-gradient-to-r from-primary-cyan to-primary-light-blue text-white px-6 py-4 rounded-xl font-semibold text-center shadow-lg shadow-primary-cyan/30"
                >
                  Register for Symposium
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
