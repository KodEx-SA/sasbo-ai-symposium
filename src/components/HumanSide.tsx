"use client";

import ScrollAnimation from "./ScrollAnimation";
import { motion } from "framer-motion";
import NetworkNodes from "./NetworkNodes";

export default function HumanSide() {
  const missionPoints = [
    {
      stat: "75,000+",
      label: "Workers Represented",
      description: "South Africa's largest financial sector union",
    },
    {
      stat: "100%",
      label: "Worker-Focused",
      description: "Every decision centered on worker welfare",
    },
    {
      stat: "2026",
      label: "Vision Forward",
      description: "Leading the ethical AI transformation",
    },
  ];

  const coreValues = [
    {
      title: "Representation",
      description: "Amplifying worker voices in the age of AI",
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
    },
    {
      title: "Protection",
      description: "Safeguarding livelihoods through change",
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
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "Empowerment",
      description: "Equipping workers for the AI-driven future",
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
    },
  ];

  return (
    <section id="about" className="section-container relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-cyan/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-light-blue/10 rounded-full blur-3xl" />

      {/* Section Header */}
      <ScrollAnimation>
        <div className="text-center mb-16 relative z-10">
          <span className="text-primary-cyan text-sm font-semibold uppercase tracking-wider">
            Our Mission
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            Leading the <span className="gradient-text">Human Side of AI</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ensuring technology serves workers, not replaces them
          </p>
        </div>
      </ScrollAnimation>

      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto relative z-10">
        {/* Left: Content */}
        <ScrollAnimation direction="left" delay={0.2}>
          <div className="space-y-8">
            {/* Header with Icon */}
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-cyan to-primary-light-blue rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary-cyan/30">
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
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  Sasbo's Mission
                </h3>
                <p className="text-primary-cyan font-semibold">
                  South Africa's Financial Sector Union
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Right: Visual & Stats */}
        <ScrollAnimation direction="right" delay={0.3}>
          <div className="space-y-6">
            {/* Main Visual Card */}
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-cyan/20 to-primary-light-blue/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative bg-gradient-to-br from-blue-900/50 to-blue-800/30 rounded-2xl p-8 border border-primary-light-blue/30 backdrop-blur-sm overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />

                <div className="relative aspect-video bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-500 rounded-xl flex items-center justify-center p-8">
                  <div className="text-center space-y-4">
                    {/* Icon */}
                    <div className="w-24 h-24 mx-auto bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30">
                      <svg
                        className="w-12 h-12 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-blue-100 uppercase tracking-wider">
                        Identify
                      </p>
                      <p className="text-3xl font-bold text-white my-2">
                        Stakeholders
                      </p>
                      <p className="text-sm text-blue-100">
                        Building partnerships for AI transformation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              {missionPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 bg-gradient-to-br from-blue-900/50 to-blue-800/30 rounded-xl border border-primary-light-blue/30 text-center backdrop-blur-sm"
                >
                  <div className="text-2xl font-bold gradient-text mb-1">
                    {point.stat}
                  </div>
                  <div className="text-xs font-semibold text-white mb-1">
                    {point.label}
                  </div>
                  <div className="text-xs text-gray-400">
                    {point.description}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quote Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-gradient-to-br from-primary-cyan/10 to-primary-light-blue/10 rounded-xl border border-primary-cyan/30 backdrop-blur-sm"
            >
              <svg
                className="w-8 h-8 text-primary-cyan mb-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-gray-300 italic leading-relaxed">
                "Workers won't be casualties of AI transformation, they'll be
                the architects of change."
              </p>
              <p className="text-primary-cyan font-semibold mt-3 text-sm">
                - Sasbo Leadership
              </p>
            </motion.div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
