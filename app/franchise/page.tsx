import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { FranchiseForm } from "@/components/franchise/FranchiseForm";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/ScrollReveal";
import { CheckCircle, TrendingUp, Users, MapPin, Award, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Franchise Opportunity",
  description:
    "Partner with Fries Story. High-margin loaded Belgian fries in an 8–20sqm kiosk format. Proven concept, full support, expanding across Southeast Asia and Australia.",
};

const advantages = [
  { icon: TrendingUp, title: "High-Margin Product", text: "Loaded fries carry premium pricing on a low-cost base. Ingredient margins built for sustainable unit economics." },
  { icon: MapPin, title: "Small Footprint", text: "8–20 sqm kiosk model. Mall kiosks, food courts, street food markets — wherever your audience is." },
  { icon: Clock, title: "Fast Service", text: "Simple SOP, fast prep times, high throughput. Designed for speed without sacrificing quality." },
  { icon: Users, title: "Full Training", text: "Comprehensive onboarding program. Recipe training, operations, customer experience, and marketing support." },
  { icon: Award, title: "Proven System", text: "A concept built from the ground up to be duplicated. Every process documented, every standard defined." },
  { icon: CheckCircle, title: "Delivery Ready", text: "Packaging engineered for delivery. Designed to keep fries crispy and sauces separate — quality guaranteed at the door." },
];

const process = [
  { step: "01", title: "Apply", text: "Complete the inquiry form below. Tell us about yourself, your city, and your investment capacity." },
  { step: "02", title: "Discovery Call", text: "A 30-minute conversation with our partnerships team. We'll walk through the model, the numbers, and answer every question." },
  { step: "03", title: "Agreement & Training", text: "Sign the partnership agreement. Begin your hands-on training program at our Bali flagship location." },
  { step: "04", title: "Launch", text: "We support your build-out, opening, and first 90 days of operation. Your story starts here." },
];

export default function FranchisePage() {
  return (
    <>
      <PageHero
        label="Partnership Opportunity"
        title="Build the Future of Fast Casual."
        subtitle="A brand in development seeking partners, franchise operators, location owners, and early supporters. Join us before the expansion begins."
      />

      {/* Overview */}
      <section className="bg-charcoal-mid px-4 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <p className="text-gold text-xs font-mono tracking-[0.25em] uppercase mb-4">The Opportunity</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream leading-tight mb-6">
              Small Footprint. Big Margins. Massive Appetite.
            </h2>
            <p className="text-cream/60 text-lg leading-relaxed mb-6">
              Fries Story is built from day one to franchise. The kiosk model keeps startup costs low, the menu keeps operations simple, and the product — loaded Belgian fries with 15 signature sauces — keeps customers coming back.
            </p>
            <p className="text-cream/60 leading-relaxed">
              We&apos;re not offering a franchise yet. We&apos;re building toward one. That means right now, early partners get the best terms, the most support, and the opportunity to shape what this brand becomes in your market.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-2 gap-4">
            {[
              { label: "Starting Investment", value: "USD 15K", sub: "Kiosk format, Indonesia" },
              { label: "Target Footprint", value: "8–20 sqm", sub: "Kiosk or inline" },
              { label: "Flagship Market", value: "Bali", sub: "Now open" },
              { label: "Sauces", value: "15", sub: "All house-made" },
            ].map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="bg-charcoal rounded-2xl p-5 border border-white/5">
                  <p className="text-gold font-display text-3xl font-bold mb-1">{stat.value}</p>
                  <p className="text-cream/80 text-sm font-semibold">{stat.label}</p>
                  <p className="text-cream/40 text-xs">{stat.sub}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Advantages */}
      <section className="bg-charcoal px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="mb-12 text-center">
            <p className="text-gold text-xs font-mono tracking-[0.25em] uppercase mb-3">Why Fries Story</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">
              Built to Duplicate.
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {advantages.map((adv) => (
              <StaggerItem key={adv.title}>
                <div className="bg-charcoal-mid rounded-2xl p-6 border border-white/5 h-full">
                  <adv.icon className="w-7 h-7 text-gold mb-4" />
                  <h3 className="text-cream font-display text-lg font-semibold mb-2">{adv.title}</h3>
                  <p className="text-cream/50 text-sm leading-relaxed">{adv.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process */}
      <section className="bg-cream text-charcoal px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="mb-12 text-center">
            <p className="text-warm-brown text-xs font-mono tracking-[0.25em] uppercase mb-3">How It Works</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal">
              From Application to Opening Day.
            </h2>
          </ScrollReveal>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-charcoal/10 hidden md:block" />
            <StaggerContainer className="space-y-8">
              {process.map((step) => (
                <StaggerItem key={step.step}>
                  <div className="flex gap-8 items-start">
                    <div className="shrink-0 w-16 h-16 rounded-full border-2 border-charcoal/15 bg-cream flex items-center justify-center z-10">
                      <span className="font-mono font-bold text-charcoal text-sm">{step.step}</span>
                    </div>
                    <div className="pt-3">
                      <h3 className="font-display text-xl font-bold text-charcoal mb-2">{step.title}</h3>
                      <p className="text-charcoal/60 leading-relaxed">{step.text}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-charcoal-mid px-4 py-20">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal className="text-center mb-10">
            <p className="text-gold text-xs font-mono tracking-[0.25em] uppercase mb-3">Apply Now</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-3">
              Start the Conversation.
            </h2>
            <p className="text-cream/50">
              Fill in your details and we&apos;ll be in touch within 48 hours.
              No automated responses — every application is read by a human.
            </p>
          </ScrollReveal>
          <div className="bg-charcoal rounded-2xl border border-white/8 p-6 md:p-8">
            <FranchiseForm />
          </div>
        </div>
      </section>
    </>
  );
}
