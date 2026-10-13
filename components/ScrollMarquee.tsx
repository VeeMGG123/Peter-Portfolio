"use client";

import { motion } from "framer-motion";

const items = ["DESIGN", "CODE", "MOTION", "SYSTEMS", "EXPERIENCE"]; 

export default function ScrollMarquee() {
  return (
    <div className="marquee-wrap">
      <motion.div
        className="marquee-track"
        animate={{ x: [0, -1200] }}
        transition={{ duration: 18, ease: "linear", repeat: Infinity }}
      >
        {[...items, ...items, ...items].map((item, idx) => (
          <span key={`${item}-${idx}`}>{item}</span>
        ))}
      </motion.div>
    </div>
  );
}
