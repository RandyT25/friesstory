"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: 15, suffix: "+", label: "Signature Sauces" },
  { value: 8, suffix: " sqm", label: "Minimum Footprint" },
  { value: 5, suffix: "", label: "Flagship Countries" },
  { value: 1, suffix: "", label: "Uncompromising Standard" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1200, bounce: 0 });
  const rounded = useTransform(spring, (v) => Math.round(v));

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, value, motionValue]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export function FranchiseCTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative bg-charcoal px-4 py-24 md:py-36 overflow-hidden"
    >
      {/* Background decorative element */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-5"
        style={{
          background: "radial-gradient(ellipse at right center, #D4860B 0%, transparent 70%)"
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        {/* Pre-label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-3 mb-10"
        >
          <div className="w-8 h-px bg-gold" />
          <span className="text-gold text-xs font-mono tracking-[0.25em] uppercase">
            Join the Expansion
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-cream leading-[1.05] mb-6"
        >
          The Business You&apos;ve Been Waiting For.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-cream/60 text-lg md:text-xl max-w-2xl mb-12"
        >
          Small footprint. High margins. A product people obsess over.
          We&apos;re building the next international fast-casual franchise — and we&apos;re looking
          for the right partners to build it with.
        </motion.p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14 pb-14 border-b border-white/8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25 + i * 0.1 }}
            >
              <p className="font-display text-4xl md:text-5xl font-bold text-gradient-gold mb-1">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-cream/50 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/franchise"
            className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-charcoal font-bold px-8 py-4 rounded text-sm tracking-widest uppercase transition-all duration-200 hover:shadow-xl hover:shadow-gold/20"
          >
            Explore Franchise <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 border border-cream/20 hover:border-gold text-cream hover:text-gold font-semibold px-8 py-4 rounded text-sm tracking-widest uppercase transition-all duration-200"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
