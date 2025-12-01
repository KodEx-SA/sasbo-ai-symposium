"use client";

import { motion } from "framer-motion";
import { fadeInUp, fadeIn, staggerContainer } from "@/utils/animations";
import ParallaxContainer from "./ParallaxContainer";
import ParticlesBackground from "./ParticlesBackground";
import CountdownTimer from "./CountdownTimer";
import Image from "next/image";
import CapsuleImg from "@/assets/images/capsule.jpeg";

export default function Hero() {
  const eventDate = "2026-06-15T09:00:00"; // Countdown timer for event date

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Particles Background */}
      <ParticlesBackground />

      {/* Animated Background Gradient Orbs with Parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <ParallaxContainer speed={-0.3}>
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
        </ParallaxContainer>

        <ParallaxContainer speed={0.5}>
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
        </ParallaxContainer>
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Floating Capsule - Left Side */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block"
      >
        <div className="relative w-32 h-32">
          <Image
            src= {CapsuleImg}
            alt="Time Capsule"
            fill
            className="object-contain drop-shadow-2xl"
            priority
          />
          {/* Glow effect */}
          <div className="absolute inset-0 bg-primary-cyan/30 rounded-full blur-2xl -z-10" />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative section-container text-center px-4">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          {/* Main Title */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
          >
            Sasbo AI Symposium
          </motion.h1>

          {/* Year - Large and Eye-catching */}
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
            className="text-sm sm:text-base text-gray-400 mb-12 max-w-2xl mx-auto italic"
          >
            "Step inside the time capsule where the world of work meets the
            world of intelligence."
          </motion.p>

          {/* Countdown Timer */}
          <motion.div variants={fadeInUp} className="mb-12">
            <p className="text-sm text-gray-400 mb-4 uppercase tracking-wider">
              Event Begins In
            </p>
            <CountdownTimer targetDate={eventDate} />
          </motion.div>

          {/* Single CTA Button */}
          <motion.div variants={fadeInUp} className="mb-16">
            <motion.a
              href="#register"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-cyan to-primary-light-blue text-white px-10 py-4 rounded-full font-semibold text-lg shadow-xl shadow-primary-cyan/30 hover:shadow-2xl hover:shadow-primary-cyan/40 transition-all"
            >
              Enter the Symposium
              <svg
                className="w-5 h-5"
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
            </motion.a>
          </motion.div>

          {/* Event Details */}
          <motion.p variants={fadeInUp} className="text-sm text-gray-500 mb-8">
            Johannesburg, South Africa • 2026
          </motion.p>

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
