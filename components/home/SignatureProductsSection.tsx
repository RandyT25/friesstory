"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { featuredItems } from "@/lib/data/menu";
import { Flame, ArrowRight } from "lucide-react";

function HeatDots({ level }: { level: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3].map((i) => (
        <Flame
          key={i}
          className={`w-3 h-3 ${i <= level ? "text-brand-red fill-brand-red" : "text-cream/20"}`}
        />
      ))}
    </div>
  );
}

export function SignatureProductsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-charcoal px-4 py-20 md:py-28">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="text-gold text-xs font-mono tracking-[0.25em] uppercase mb-3"
            >
              The Hero Products
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold text-cream"
            >
              Signature Loaded Fries
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-light text-sm font-semibold transition-colors"
            >
              Full Menu <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {featuredItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="group relative bg-charcoal-mid rounded-2xl overflow-hidden border border-white/5 hover:border-gold/30 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden bg-charcoal">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    unoptimized
                  />
                ) : (
                  <div className="absolute inset-0 gradient-gold opacity-20" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-mid via-transparent to-transparent" />

                {/* Tags */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                  {item.tags.includes("bestseller") && (
                    <Badge className="bg-gold text-charcoal text-[10px] font-bold px-1.5 py-0.5">
                      Bestseller
                    </Badge>
                  )}
                  {item.tags.includes("new") && (
                    <Badge className="bg-brand-red text-cream text-[10px] font-bold px-1.5 py-0.5">
                      New
                    </Badge>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-cream font-display font-semibold text-base leading-tight">
                    {item.name}
                  </h3>
                  {(item.heatLevel ?? 0) > 0 && <HeatDots level={item.heatLevel ?? 0} />}
                </div>
                {item.details && (
                  <p className="text-cream/40 text-xs font-mono leading-relaxed line-clamp-2">
                    {item.details}
                  </p>
                )}
                <div className="flex items-center justify-between mt-4">
                  <span className="text-gold font-mono font-semibold text-sm">
                    IDR {item.price.idr.toLocaleString()}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
