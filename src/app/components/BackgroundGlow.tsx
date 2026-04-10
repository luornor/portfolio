"use client";

import { motion } from "framer-motion";

export default function BackgroundGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        className="absolute left-[-12%] top-[6%] h-[28rem] w-[28rem] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(79,123,255,0.26) 0%, rgba(79,123,255,0.08) 42%, transparent 72%)",
        }}
        animate={{
          x: [0, 56, 0],
          y: [0, 26, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute right-[-10%] top-[8%] h-[30rem] w-[30rem] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(103,239,255,0.2) 0%, rgba(103,239,255,0.06) 42%, transparent 74%)",
        }}
        animate={{
          x: [0, -36, 0],
          y: [0, 48, 0],
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-[-18%] left-[28%] h-[24rem] w-[24rem] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(142,247,217,0.12) 0%, rgba(142,247,217,0.04) 38%, transparent 75%)",
        }}
        animate={{
          x: [0, 34, 0],
          y: [0, -42, 0],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
