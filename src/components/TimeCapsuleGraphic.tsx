"use client";

import { motion } from "framer-motion";

export default function TimeCapsuleGraphic() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Outer rotating ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-64 h-64 border-2 border-primary-cyan/30 rounded-full"
      />

      {/* Middle rotating ring - opposite direction */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute w-48 h-48 border-2 border-primary-light-blue/40 rounded-full"
      />

      {/* Inner pulsing circle */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute w-32 h-32 bg-gradient-to-br from-primary-cyan/20 to-primary-light-blue/20 rounded-full backdrop-blur-sm border border-primary-cyan/30"
      />

      {/* Center icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
        className="relative z-10 w-20 h-20 bg-gradient-to-br from-primary-cyan to-primary-light-blue rounded-full flex items-center justify-center shadow-2xl shadow-primary-cyan/50"
      >
        <svg
          className="w-10 h-10 text-white"
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
      </motion.div>

      {/* Orbiting particles */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-64 h-64"
          style={{ rotate: i * 90 }}
        >
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            className="absolute top-0 left-1/2 w-2 h-2 bg-primary-cyan rounded-full shadow-lg shadow-primary-cyan/50"
          />
        </motion.div>
      ))}

      {/* Light trails */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <motion.circle
          cx="50%"
          cy="50%"
          r="120"
          fill="none"
          stroke="url(#trailGradient)"
          strokeWidth="2"
          strokeDasharray="10 20"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "center" }}
        />
        <defs>
          <linearGradient id="trailGradient">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
