"use client";

import ScrollAnimation from "./ScrollAnimation";
import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      title: "AI & Development",
      description:
        "Hands-on workshops exploring cutting-edge AI tools, practical implementation strategies, and skill development for the modern workforce.",
      color: "from-blue-500 to-cyan-400",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      benefits: ["Practical Skills", "Tool Mastery", "Future-Ready"],
    },
    {
      title: "Ethics & Regulation",
      description:
        "Shaping fair AI policies, establishing ethical frameworks, and ensuring responsible technology deployment across organizations.",
      color: "from-purple-500 to-pink-400",
      icon: (
        <svg
          className="w-8 h-8"
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
      benefits: ["Fair Policies", "Worker Rights", "Accountability"],
    },
    {
      title: "Data & Analytics",
      description:
        "Leveraging data-driven insights for strategic union decisions, workforce planning, and evidence-based advocacy.",
      color: "from-cyan-500 to-blue-400",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      benefits: [
        "Smart Decisions",
        "Predictive Planning",
        "Impact Measurement",
      ],
    },
    {
      title: "Financial Innovation",
      description:
        "Understanding AI-driven transformation in banking, fintech disruption, and the evolution of financial services.",
      color: "from-emerald-500 to-teal-400",
      icon: (
        <svg
          className="w-8 h-8"
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
      benefits: [
        "Industry Insights",
        "Trend Analysis",
        "Adaptation Strategies",
      ],
    },
    {
      title: "Worker Protection",
      description:
        "Legal frameworks for AI workplace rights, collective bargaining strategies, and safeguarding employment standards.",
      color: "from-amber-500 to-orange-400",
      icon: (
        <svg
          className="w-8 h-8"
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
      benefits: ["Legal Rights", "Job Security", "Fair Treatment"],
    },
    {
      title: "Career Development",
      description:
        "Future-ready career pathways, continuous learning opportunities, and navigating professional growth in AI-augmented roles.",
      color: "from-rose-500 to-pink-400",
      icon: (
        <svg
          className="w-8 h-8"
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
      benefits: ["Growth Paths", "Skill Building", "Career Resilience"],
    },
  ];

  return (
    <section
      id="features"
      className="section-container relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-cyan/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary-light-blue/10 rounded-full blur-3xl" />

      {/* Section Header */}
      <ScrollAnimation>
        <div className="text-center mb-16 relative z-10">
          <span className="text-primary-cyan text-sm font-semibold uppercase tracking-wider">
            What You'll Explore
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            Symposium <span className="gradient-text">Focus Areas</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Deep-dive sessions covering the most critical aspects of AI
            transformation in the workplace
          </p>
        </div>
      </ScrollAnimation>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16 relative z-10">
        {features.map((feature, index) => (
          <ScrollAnimation key={index} delay={0.05 * index}>
            <motion.div
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative h-full"
            >
              {/* Glow effect on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-2xl transition-opacity duration-500`}
              />

              <div className="relative bg-gradient-to-br from-blue-900/40 to-blue-800/20 rounded-2xl p-8 border border-primary-light-blue/20 hover:border-primary-cyan/50 transition-all backdrop-blur-sm h-full flex flex-col">
                {/* Icon with gradient background */}
                <div className="mb-6">
                  <motion.div
                    whileHover={{ rotate: 6 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg text-white relative`}
                  >
                    {feature.icon}
                    {/* Glow effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl blur-xl opacity-50 -z-10`}
                    />
                  </motion.div>
                </div>

                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary-cyan transition-colors">
                  {feature.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {feature.description}
                </p>

                {/* Benefits Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {feature.benefits.map((benefit, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:bg-white/10 hover:text-white transition-colors"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>

                {/* Hover indicator */}
                <div className="mt-4 flex items-center gap-2 text-primary-cyan opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    Explore
                  </span>
                  <motion.svg
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-4 h-4"
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
                  </motion.svg>
                </div>
              </div>
            </motion.div>
          </ScrollAnimation>
        ))}
      </div>

      {/* Bottom CTA Section */}
      <ScrollAnimation delay={0.5}>
        <div className="relative max-w-4xl mx-auto text-center">
          {/* Decorative elements */}
          <div className="absolute top-1/2 left-0 w-24 h-24 bg-primary-cyan/20 rounded-full blur-2xl -translate-y-1/2" />
          <div className="absolute top-1/2 right-0 w-24 h-24 bg-primary-light-blue/20 rounded-full blur-2xl -translate-y-1/2" />

          <div className="relative bg-gradient-to-br from-blue-900/50 to-cyan-900/30 rounded-2xl p-10 border border-primary-cyan/30 backdrop-blur-sm">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Ready to Shape Your Future?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Choose your areas of interest and join expert-led sessions
              designed to empower you with knowledge, skills, and strategic
              insights.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="#register"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-cyan to-primary-light-blue text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl shadow-primary-cyan/30 hover:shadow-2xl hover:shadow-primary-cyan/50 transition-all"
              >
                Register Now
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

              <motion.a
                href="#conversations"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 border-2 border-primary-cyan/50 text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-cyan/10 transition-all backdrop-blur-sm"
              >
                View Full Program
              </motion.a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold gradient-text mb-1">6</div>
                <div className="text-xs text-gray-400">Focus Areas</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-1">20+</div>
                <div className="text-xs text-gray-400">Expert Sessions</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-1">∞</div>
                <div className="text-xs text-gray-400">Possibilities</div>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
}
