"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle } from "lucide-react";
import { toast } from "sonner";

export function NewsletterSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || submitted) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    console.log("Newsletter signup:", email);
    setSubmitted(true);
    setLoading(false);
    toast.success("You're in. Watch your inbox.");
  }

  return (
    <section ref={ref} className="bg-cream text-charcoal px-4 py-20 md:py-28">
      <div className="max-w-2xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="text-warm-brown text-xs font-mono tracking-[0.25em] uppercase mb-4"
        >
          Stay in the Loop
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-4"
        >
          Be First to Know.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-charcoal/60 text-lg mb-10"
        >
          New locations. New sauces. Franchise opportunities.
          We only send things worth reading.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          {submitted ? (
            <div className="flex items-center justify-center gap-3 text-charcoal">
              <CheckCircle className="w-6 h-6 text-warm-brown" />
              <p className="font-semibold text-lg">You&apos;re on the list. See you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-cream-dark border-charcoal/20 text-charcoal placeholder:text-charcoal/40 focus:border-warm-brown flex-1"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-5 py-2 bg-charcoal hover:bg-charcoal-mid text-cream font-semibold rounded inline-flex items-center gap-2 transition-colors disabled:opacity-50 text-sm"
              >
                {loading ? "..." : (
                  <>Sign up <ArrowRight className="w-4 h-4" /></>
                )}
              </button>
            </form>
          )}
          <p className="text-charcoal/30 text-xs mt-4">
            No spam. No nonsense. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
