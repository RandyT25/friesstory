"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const words = [
  "Most", "shops", "sell", "fries.", "We", "craft", "experiences."
];

export function ManifestoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-charcoal-mid px-4 py-24 md:py-36 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Gold label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="w-8 h-px bg-gold" />
          <span className="text-gold text-xs font-mono tracking-[0.25em] uppercase">Our Belief</span>
        </motion.div>

        {/* Main statement */}
        <div className="mb-8">
          <p className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-cream leading-[1.1]">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.07, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
          </p>
        </div>

        {/* Supporting lines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-16 pt-12 border-t border-white/8">
          {[
            {
              number: "01",
              title: "The Fry",
              text: "Double-fried, never compromised. The foundation of everything we do is a Belgian fry that can stand alone — before a single topping touches it.",
            },
            {
              number: "02",
              title: "The Story",
              text: "Rendang from the grandmothers of West Sumatra. Sambal Matah from Bali's morning markets. Every loaded fry is a chapter. Every bite moves the story forward.",
            },
            {
              number: "03",
              title: "The Experience",
              text: "We're not building a fries shop. We're building a place where food starts conversations. Where a cone of fries becomes a memory you tell people about.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
            >
              <span className="text-gold/40 text-xs font-mono tracking-widest">{item.number}</span>
              <h3 className="text-cream font-display text-xl font-semibold mt-2 mb-3">{item.title}</h3>
              <p className="text-cream/50 text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
