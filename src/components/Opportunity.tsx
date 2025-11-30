"use client";

import ScrollAnimation from "./ScrollAnimation";
import { motion } from "framer-motion";

export default function Opportunity() {
  const risks = [
    {
      title: "Labour Displacement",
      description:
        "Massive workforce vulnerability without proper transition strategies",
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
            d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
          />
        </svg>
      ),
    },
    {
      title: "Job Insecurity",
      description: "Rising uncertainty in the financial sector workforce",
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
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      ),
    },
    {
      title: "Unequal Transitions",
      description: "Disparate impact across different worker demographics",
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
    },
    {
      title: "Competitive Disadvantage",
      description: "Loss of edge for South African industry globally",
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
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  const opportunities = [
    {
      title: "Workforce Upskilling",
      description: "Proactive skills development and training programs",
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
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
    },
    {
      title: "Ethical AI Framework",
      description: "Building responsible AI adoption standards",
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
      title: "Worker Representation",
      description: "Ensuring voices are heard in technological change",
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
      title: "Stable Livelihoods",
      description: "Securing sustainable careers amidst change",
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
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="opportunity" className="section-container relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-red-500/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-primary-cyan/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      {/* Section Header */}
      <ScrollAnimation>
        <div className="text-center mb-6 relative z-10">
          <span className="text-primary-cyan text-sm font-semibold uppercase tracking-wider">
            The Critical Juncture
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            A Critical Window of{" "}
            <span className="gradient-text">Opportunity</span>
          </h2>
        </div>
      </ScrollAnimation>

      <ScrollAnimation delay={0.1}>
        <p className="text-center text-gray-400 mb-16 max-w-3xl mx-auto relative z-10">
          The next 2 years will define our trajectory. We must adapt to AI
          swiftly—or risk being left behind as change accelerates exponentially.
        </p>
      </ScrollAnimation>

      {/* Two Column Layout */}
      <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto relative z-10">
        {/* Left Column - Risks */}
        <ScrollAnimation direction="left" delay={0.2}>
          <div className="relative group h-full">
            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-red-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative bg-gradient-to-br from-red-950/40 to-red-900/20 rounded-2xl p-8 border border-red-500/30 backdrop-blur-sm h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center border border-red-500/30">
                  <svg
                    className="w-6 h-6 text-red-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-red-400">
                  Risks of Inaction
                </h3>
              </div>

              <div className="space-y-4">
                {risks.map((risk, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="group/item p-4 bg-red-950/30 rounded-lg border border-red-500/20 hover:border-red-500/40 transition-all cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1 text-red-400 flex-shrink-0">
                        {risk.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white mb-1">
                          {risk.title}
                        </h4>
                        <p className="text-sm text-gray-400">
                          {risk.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Right Column - Opportunities */}
        <ScrollAnimation direction="right" delay={0.3}>
          <div className="relative group h-full">
            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-primary-cyan/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative bg-gradient-to-br from-cyan-950/40 to-blue-900/20 rounded-2xl p-8 border border-primary-cyan/30 backdrop-blur-sm h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-primary-cyan/20 rounded-xl flex items-center justify-center border border-primary-cyan/30">
                  <svg
                    className="w-6 h-6 text-primary-cyan"
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
                </div>
                <h3 className="text-2xl font-bold text-primary-cyan">
                  Opportunities for Leadership
                </h3>
              </div>

              <div className="space-y-4">
                {opportunities.map((opportunity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: -5 }}
                    className="group/item p-4 bg-cyan-950/30 rounded-lg border border-primary-cyan/20 hover:border-primary-cyan/40 transition-all cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1 text-primary-cyan flex-shrink-0">
                        {opportunity.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white mb-1">
                          {opportunity.title}
                        </h4>
                        <p className="text-sm text-gray-400">
                          {opportunity.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>

      {/* Bottom CTA */}
      <ScrollAnimation delay={0.5}>
        <div className="text-center mt-16 relative z-10">
          <p className="text-gray-400 mb-6 text-lg">
            The choice is ours:{" "}
            <span className="text-white font-semibold">
              Lead the transformation
            </span>{" "}
            or be transformed by it.
          </p>
          <motion.a
            href="#register"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-primary-cyan to-primary-light-blue text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl hover:shadow-primary-cyan/40 transition-all"
          >
            Join the Movement
          </motion.a>
        </div>
      </ScrollAnimation>
    </section>
  );
}
