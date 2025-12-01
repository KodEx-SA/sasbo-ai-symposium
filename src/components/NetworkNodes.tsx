"use client";

import { motion } from "framer-motion";

export default function NetworkNodes() {
  const nodes = [
    { x: "10%", y: "20%", size: 8, delay: 0 },
    { x: "25%", y: "45%", size: 6, delay: 0.2 },
    { x: "45%", y: "30%", size: 10, delay: 0.4 },
    { x: "60%", y: "60%", size: 7, delay: 0.6 },
    { x: "75%", y: "25%", size: 9, delay: 0.8 },
    { x: "85%", y: "50%", size: 6, delay: 1 },
    { x: "30%", y: "70%", size: 8, delay: 0.3 },
    { x: "55%", y: "80%", size: 7, delay: 0.5 },
  ];

  const connections = [
    { from: 0, to: 1 },
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 3, to: 4 },
    { from: 4, to: 5 },
    { from: 1, to: 6 },
    { from: 3, to: 7 },
    { from: 2, to: 4 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="w-full h-full">
        {/* Connection Lines */}
        {connections.map((connection, index) => {
          const fromNode = nodes[connection.from];
          const toNode = nodes[connection.to];

          return (
            <motion.line
              key={index}
              x1={fromNode.x}
              y1={fromNode.y}
              x2={toNode.x}
              y2={toNode.y}
              stroke="url(#lineGradient)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 2, delay: 0.5 + index * 0.2 }}
            />
          );
        })}

        {/* Gradient Definition */}
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.5" />
          </linearGradient>
        </defs>
      </svg>

      {/* Nodes */}
      {nodes.map((node, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: node.delay, duration: 0.5 }}
          className="absolute"
          style={{
            left: node.x,
            top: node.y,
            width: node.size,
            height: node.size,
          }}
        >
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: node.delay,
            }}
            className="w-full h-full bg-primary-cyan rounded-full shadow-lg shadow-primary-cyan/50"
          />
          {/* Pulse ring */}
          <motion.div
            animate={{
              scale: [1, 2, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: node.delay,
            }}
            className="absolute inset-0 border-2 border-primary-cyan rounded-full"
          />
        </motion.div>
      ))}
    </div>
  );
}
