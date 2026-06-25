"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1573080496219-3b2b14d8d3a3?w=600&auto=format&fit=crop&q=80",
    alt: "Crispy Belgian fries",
    className: "col-span-2 row-span-2",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=80",
    alt: "Loaded fries close-up",
    className: "",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1640719028782-8230f1bdc44b?w=600&auto=format&fit=crop&q=80",
    alt: "Signature fries with toppings",
    className: "",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop&q=80",
    alt: "Food photography",
    className: "col-span-2",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop&q=80",
    alt: "Restaurant interior",
    className: "",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop&q=80",
    alt: "Food experience",
    className: "",
  },
];

export function GallerySection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-charcoal-mid px-4 py-20 md:py-28">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              className="text-gold text-xs font-mono tracking-[0.25em] uppercase mb-3"
            >
              The Visual Story
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold text-cream"
            >
              Worth the Photo.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="hidden md:block text-cream/40 text-sm max-w-xs text-right"
          >
            Great food deserves great photography. These are real dishes.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 md:grid-cols-4 gap-3 auto-rows-[180px] md:auto-rows-[220px]"
        >
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
              className={`relative overflow-hidden rounded-2xl group ${img.className}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 33vw, 25vw"
                unoptimized
              />
              <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/0 transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center text-cream/30 text-xs font-mono mt-6 tracking-widest"
        >
          #FRIESSTORY · SHARE YOUR STORY
        </motion.p>
      </div>
    </section>
  );
}
