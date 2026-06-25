"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { reviews } from "@/lib/data/reviews";
import { Star } from "lucide-react";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i <= rating ? "text-gold fill-gold" : "text-cream/20"}`}
        />
      ))}
    </div>
  );
}

export function ReviewsSection() {
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
              className="text-gold text-xs font-mono tracking-[0.25em] uppercase mb-3"
            >
              What People Say
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold text-cream"
            >
              Their Stories.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-cream/40 text-sm max-w-xs"
          >
            Told by the people who drove across Bali to eat here twice in one day.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {reviews.map((review) => (
                <CarouselItem key={review.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-charcoal-mid rounded-2xl border border-white/5 p-6 h-full flex flex-col">
                    <StarRating rating={review.rating} />

                    <blockquote className="text-cream/80 text-sm leading-relaxed mt-4 flex-1 italic">
                      &ldquo;{review.text}&rdquo;
                    </blockquote>

                    <div className="flex items-center gap-3 mt-6 pt-5 border-t border-white/8">
                      <div className="w-9 h-9 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold text-sm">
                        {review.author[0]}
                      </div>
                      <div>
                        <p className="text-cream font-semibold text-sm">{review.author}</p>
                        <p className="text-cream/40 text-xs">{review.location}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex gap-2 mt-6 justify-end">
              <CarouselPrevious className="static translate-y-0 bg-charcoal-mid border-white/10 text-cream hover:bg-charcoal hover:text-gold" />
              <CarouselNext className="static translate-y-0 bg-charcoal-mid border-white/10 text-cream hover:bg-charcoal hover:text-gold" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
