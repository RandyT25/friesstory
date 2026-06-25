"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { sauces } from "@/lib/data/sauces";
import { Flame } from "lucide-react";

function HeatBar({ level }: { level: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className={`h-1 w-4 rounded-full transition-colors ${
            i <= level ? "bg-brand-red" : "bg-charcoal/20"
          }`}
        />
      ))}
    </div>
  );
}

export function SauceProgramSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section ref={ref} className="bg-charcoal-mid px-4 py-20 md:py-28">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-gold text-xs font-mono tracking-[0.25em] uppercase mb-4"
          >
            The Sauce Program
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold text-cream mb-4"
          >
            15 Sauces. Zero Compromise.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-cream/50 text-lg max-w-2xl mx-auto"
          >
            In Belgium, the sauce is not a condiment — it&apos;s the point. Our sauce program spans
            four continents and fifteen obsessions. Every one made in-house.
          </motion.p>
        </div>

        {/* Sauce grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {sauces.map((sauce, i) => (
            <motion.div
              key={sauce.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.05 + i * 0.04 }}
              onMouseEnter={() => setHovered(sauce.id)}
              onMouseLeave={() => setHovered(null)}
              className="relative group bg-charcoal rounded-2xl border border-white/5 hover:border-gold/40 p-4 cursor-default transition-all duration-200 hover:bg-charcoal/80"
            >
              {sauce.isSignature && (
                <div className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-gold" />
              )}

              <p className="text-cream font-semibold text-sm mb-1 leading-tight">{sauce.name}</p>
              <p className="text-cream/40 text-xs mb-3 leading-snug line-clamp-2">
                {hovered === sauce.id ? sauce.description : sauce.flavor}
              </p>
              <HeatBar level={sauce.heatLevel} />
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-8 text-cream/40 text-xs font-mono"
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gold" />
            <span>Fries Story Original</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              <div className="h-1 w-4 rounded-full bg-brand-red" />
              <div className="h-1 w-4 rounded-full bg-charcoal/20" />
              <div className="h-1 w-4 rounded-full bg-charcoal/20" />
            </div>
            <span>Mild heat</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[1,2,3].map(i => <div key={i} className="h-1 w-4 rounded-full bg-brand-red" />)}
            </div>
            <span>Volcano-level</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
