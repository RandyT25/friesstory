import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { FranchiseCTABanner } from "@/components/shared/FranchiseCTABanner";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the Fries Story team. We're building something worth being part of.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        label="Work With Us"
        title="Careers"
        subtitle="We're building something worth being part of."
      />

      <section className="bg-charcoal px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="bg-charcoal-mid rounded-2xl border border-white/8 p-10 text-center mb-12">
            <p className="text-gold text-xs font-mono tracking-widest uppercase mb-4">Current Openings</p>
            <h2 className="font-display text-3xl font-bold text-cream mb-4">
              We&apos;re Growing.
            </h2>
            <p className="text-cream/60 mb-8 max-w-md mx-auto">
              As we expand, we&apos;ll be posting roles here — everything from kitchen crew to
              marketing to franchise operations. Check back soon, or reach out directly.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-charcoal font-bold px-6 py-3 rounded text-sm tracking-widest uppercase transition-colors"
            >
              Send Your CV <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { title: "Values-Driven", text: "We hire people who care about craft, honesty, and making things that matter." },
              { title: "Growth Culture", text: "We're building a brand from the ground up. Your career grows with ours." },
              { title: "Real Work", text: "No bureaucracy. Every person on our team does meaningful work from day one." },
            ].map((value) => (
              <div key={value.title} className="p-6 rounded-2xl bg-charcoal-mid border border-white/5">
                <h3 className="font-display text-lg font-bold text-gold mb-2">{value.title}</h3>
                <p className="text-cream/50 text-sm leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FranchiseCTABanner />
    </>
  );
}
