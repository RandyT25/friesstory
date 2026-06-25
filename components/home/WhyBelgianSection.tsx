"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Wheat, ChefHat, Droplets } from "lucide-react";

const facts = [
  {
    icon: Zap,
    title: "Double-Fried. Always.",
    text: "First at a lower temperature to cook through. Then blasted at high heat for the crispiest exterior possible. It's chemistry. It's patience. It's what separates a great fry from a good one.",
  },
  {
    icon: Wheat,
    title: "The Right Potato",
    text: "Not all potatoes are equal. We source high-starch varieties with the ideal dry matter content for frying. The result: zero sogginess. Maximum crunch.",
  },
  {
    icon: ChefHat,
    title: "Belgian Heritage",
    text: "Belgium invented the modern fry. Not as a side dish — as the main event. We honor that tradition by making the fry the star, with toppings that elevate rather than hide it.",
  },
  {
    icon: Droplets,
    title: "Fresh-Cut Daily",
    text: "Never frozen. Never reconstituted. Real potatoes, cut by hand every morning. You can taste the difference — and our regulars won't settle for anything less.",
  },
];

export function WhyBelgianSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-cream text-charcoal px-4 py-20 md:py-28">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="text-warm-brown text-xs font-mono tracking-[0.25em] uppercase mb-4"
            >
              Why Belgian?
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold text-charcoal leading-tight mb-6"
            >
              Because Compromise Isn&apos;t on the Menu.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-charcoal/60 text-lg leading-relaxed mb-10"
            >
              In Belgium, a fry shop is sacred. The frites are the centerpiece, the sauces are
              the conversation, and the craft is everything. We carried that obsession to Bali —
              and added our own story.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {facts.map((fact, i) => (
                <motion.div
                  key={fact.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-charcoal/8 flex items-center justify-center">
                    <fact.icon className="w-4 h-4 text-warm-brown" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal text-sm mb-1">{fact.title}</h4>
                    <p className="text-charcoal/50 text-xs leading-relaxed">{fact.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[4/5] rounded-3xl overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=80')",
              }}
            />
            {/* Overlay with brand color */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-charcoal/40" />

            {/* Floating stat card */}
            <div className="absolute bottom-6 left-6 right-6 bg-cream/95 backdrop-blur-sm rounded-2xl p-5">
              <p className="text-warm-brown text-xs font-mono tracking-widest uppercase mb-1">
                Craft Promise
              </p>
              <p className="text-charcoal font-display text-xl font-bold">
                Every batch, fresh-cut. Every fry, double-fried.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
