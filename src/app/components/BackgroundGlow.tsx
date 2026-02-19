"use client";

import { motion } from "framer-motion";

export default function BackgroundGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Orb 1 */}
      <motion.div
        className="absolute -top-24 -left-24 h-105 w-105 rounded-full blur-3xl opacity-30"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(37,99,235,0.55), transparent 60%)",
        }}
        animate={{
          x: [0, 40, 0],
          y: [0, 25, 0],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      {/* Orb 2 */}
      <motion.div
        className="absolute -bottom-40 -right-40 h-130 w-130 rounded-full blur-3xl opacity-25"
        style={{
          background:
            "radial-gradient(circle at 60% 40%, rgba(11,18,32,0.45), transparent 62%)",
        }}
        animate={{
          x: [0, -35, 0],
          y: [0, -20, 0],
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
