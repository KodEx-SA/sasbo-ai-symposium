"use client";

import { motion } from "framer-motion";
import { fadeInUp, fadeIn, staggerContainer } from "@/utils/animations";

export default function Hero() {
  return (
    <section className="section-container text-center">
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        {/* Logo placeholder */}
        <motion.div variants={fadeIn} className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
            <span className="text-2xl">🏢</span>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          variants={fadeInUp}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          Sasbo AI Symposium
        </motion.h1>

        <motion.h2
          variants={fadeInUp}
          className="text-6xl md:text-7xl font-bold mb-6"
        >
          <span className="gradient-text">2026</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={fadeInUp}
          className="text-lg md:text-xl text-gray-300 mb-4 max-w-3xl mx-auto"
        >
          Shaping the Future of Work in South Africa's Financial Sector
        </motion.p>

        {/* Description */}
        <motion.p
          variants={fadeInUp}
          className="text-sm text-gray-400 mb-8 max-w-2xl mx-auto"
        >
          Read about the best voices and minds at work of south africa's
          financial workplace.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-primary-cyan to-primary-light-blue text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-primary-cyan/50 transition-all"
        >
          Sign Up Now
        </motion.button>

        {/* Date */}
        <motion.p variants={fadeInUp} className="text-sm text-gray-400 mt-4">
          Register before 1 April
        </motion.p>
      </motion.div>
    </section>
  );
}
