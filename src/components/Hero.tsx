"use client";

import { motion } from "framer-motion";
import { fadeInUp, fadeIn, staggerContainer } from "@/utils/animations";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Subtle Animated Background Gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 -left-1/4 w-96 h-96 bg-primary-cyan/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-0 -right-1/4 w-[500px] h-[500px] bg-primary-light-blue/30 rounded-full blur-3xl"
        />
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Content */}
      <div className="relative section-container text-center px-4">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          {/* Logo */}
          {/* <motion.div variants={fadeIn} className="flex justify-center mb-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-16 h-16 bg-gradient-to-br from-primary-cyan to-primary-light-blue rounded-xl flex items-center justify-center shadow-lg shadow-primary-cyan/30"
            >
              <span className="text-2xl">🏢</span>
            </motion.div>
          </motion.div> */}

          {/* Main Title */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
          >
            Sasbo AI Symposium
          </motion.h1>

          {/* Year */}
          <motion.h2
            variants={fadeInUp}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-8"
          >
            <span className="gradient-text">2026</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed"
          >
            Shaping the Future of Work in{" "}
            <span className="text-white font-medium">
              South Africa's Financial Sector
            </span>
          </motion.p>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="text-sm sm:text-base text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            Join labour leaders, financial experts, and policymakers in
            confronting AI transformation with urgency and vision.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={fadeInUp} className="mb-16">
            <motion.a
              href="#register"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-cyan to-primary-light-blue text-white px-10 py-4 rounded-full font-semibold text-lg shadow-xl shadow-primary-cyan/30 hover:shadow-2xl hover:shadow-primary-cyan/40 transition-all"
            >
              Register for the Symposium
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              ></motion.span>
            </motion.a>
          </motion.div>

          {/* Registration Deadline */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-12"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-primary-cyan rounded-full"
            />
            <span>Registration closes</span>
            <span className="text-primary-cyan font-semibold">
              April 1, 2026
            </span>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-white/10"
          >
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                75K+
              </div>
              <div className="text-xs sm:text-sm text-gray-400">Workers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                6
              </div>
              <div className="text-xs sm:text-sm text-gray-400">Topics</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                1
              </div>
              <div className="text-xs sm:text-sm text-gray-400">Vision</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
