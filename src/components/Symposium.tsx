"use client";

import ScrollAnimation from "./ScrollAnimation";
import { motion } from "framer-motion";

export default function Symposium() {
  const conversations = [
    {
      number: "01",
      title: "AI & Job Displacement",
      description:
        "Analyzing which roles face disruption, developing transition strategies, and identifying skills that remain essential in an AI-augmented workplace.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: "02",
      title: "Reskilling & Upskilling",
      description:
        "Designing accessible training programs, forging educational partnerships, and determining funding models for continuous workforce development.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      color: "from-cyan-500 to-blue-500",
    },
    {
      number: "03",
      title: "Ethics & Regulation",
      description:
        "Establishing fairness frameworks, shaping AI policy, protecting workers from algorithmic bias, and defining practical ethical standards.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
          />
        </svg>
      ),
      color: "from-purple-500 to-pink-500",
    },
    {
      number: "04",
      title: "Collective Bargaining in the AI Era",
      description:
        "Negotiating protections for AI-augmented workplaces, securing fair compensation models, and reimagining the social contract for automation.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      color: "from-pink-500 to-red-500",
    },
    {
      number: "05",
      title: "Mental Health & Worker Well-being",
      description:
        "Addressing transformation anxiety, building support systems for displaced workers, and maintaining dignity and purpose in evolving roles.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      color: "from-red-500 to-orange-500",
    },
    {
      number: "06",
      title: "The Future of Work",
      description:
        "Envisioning 2030 workplaces, ensuring technology serves humanity, defining union roles in the AI age, and guaranteeing shared prosperity.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      color: "from-orange-500 to-yellow-500",
    },
  ];

  return (
    <section
      id="conversations"
      className="section-container relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-cyan/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary-light-blue/10 rounded-full blur-3xl" />

      {/* Section Header */}
      <ScrollAnimation>
        <div className="text-center mb-8 relative z-10">
          <span className="text-primary-cyan text-sm font-semibold uppercase tracking-wider">
            Event Program
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            Sasbo AI Symposium:{" "}
            <span className="gradient-text">The Future is Now</span>
          </h2>
        </div>
      </ScrollAnimation>

      <ScrollAnimation delay={0.1}>
        <p className="text-center text-gray-300 mb-4 max-w-4xl mx-auto relative z-10">
          The 2026 Sasbo AI Symposium brings together{" "}
          <span className="font-semibold text-white">
            labour leaders, financial experts, policymakers, technologists, and
            academics
          </span>{" "}
          to confront the AI transformation head-on—with both urgency and
          vision.
        </p>
      </ScrollAnimation>

      <ScrollAnimation delay={0.2}>
        <p className="text-center text-gray-400 mb-16 max-w-3xl mx-auto text-sm relative z-10">
          This isn't just about survival; it's about leadership, ensuring that
          as AI reshapes finance, workers aren't casualties—they're architects
          of change.
        </p>
      </ScrollAnimation>

      {/* Conversation Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16 relative z-10">
        {conversations.map((conv, index) => (
          <ScrollAnimation key={index} delay={0.05 * index}>
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative h-full"
            >
              {/* Hover glow effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${conv.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-500`}
              />

              <div className="relative bg-gradient-to-br from-blue-900/40 to-blue-800/20 rounded-2xl p-6 border border-primary-light-blue/20 hover:border-primary-cyan/50 transition-all backdrop-blur-sm h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${conv.color} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}
                  >
                    <div className="text-white">{conv.icon}</div>
                  </div>
                  <span className="text-primary-cyan font-bold text-sm bg-primary-cyan/10 px-3 py-1 rounded-full border border-primary-cyan/30">
                    {conv.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary-cyan transition-colors">
                  {conv.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                  {conv.description}
                </p>

                {/* Bottom Arrow Indicator */}
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-gray-500 uppercase tracking-wider">
                    Learn More
                  </span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-primary-cyan"
                  >
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
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </ScrollAnimation>
        ))}
      </div>

      {/* Bottom Call-to-Action Banner */}
      <ScrollAnimation delay={0.4}>
        <div className="relative max-w-6xl mx-auto">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-cyan/20 to-primary-light-blue/20 rounded-2xl blur-2xl" />

          <div className="relative bg-gradient-to-r from-blue-900/50 via-cyan-900/30 to-blue-900/50 rounded-2xl p-8 md:p-12 border border-primary-cyan/30 backdrop-blur-sm overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />

            <div className="relative">
              {/* Icons */}
              <div className="flex items-center justify-between mb-8">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-16 h-16 bg-gradient-to-br from-primary-cyan to-primary-light-blue rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </motion.div>

                <motion.div
                  animate={{ rotate: [0, -10, 10, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="w-16 h-16 bg-gradient-to-br from-primary-light-blue to-primary-cyan rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </motion.div>
              </div>

              {/* Text Content */}
              <div className="text-center max-w-4xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Let's Not Be Spectators
                </h3>
                <p className="text-gray-300 mb-6 text-lg">
                  We'll be{" "}
                  <span className="text-primary-cyan font-semibold">
                    leaders, advocates, visionaries, and pioneers
                  </span>
                  — shaping the future rather than being shaped by it.
                </p>
                <p className="text-sm text-gray-400 italic mb-8">
                  The 2026 AI Symposium is the pivotal moment we look back on
                  and say:
                  <span className="text-white font-semibold">
                    {" "}
                    "This is when we chose to lead."
                  </span>
                </p>

                {/* CTA Button */}
                <motion.a
                  href="#register"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-cyan to-primary-light-blue text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl shadow-primary-cyan/30 hover:shadow-2xl hover:shadow-primary-cyan/50 transition-all"
                >
                  Join the Symposium
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
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </motion.a>

                <p className="text-xs text-gray-500 mt-6">
                  Because the future won't wait—and neither will we.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
}
