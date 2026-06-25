"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  label?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function PageHero({ label, title, subtitle, className }: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative bg-charcoal px-4 pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden",
        className
      )}
    >
      {/* decorative grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(rgba(212,134,11,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,134,11,1) 1px, transparent 1px)",
        backgroundSize: "80px 80px"
      }} />

      <div className="relative max-w-5xl mx-auto text-center">
        {label && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-gold text-sm font-mono tracking-[0.2em] uppercase mb-4"
          >
            {label}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-cream leading-none mb-6"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-cream/60 text-lg md:text-xl max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
