import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { FranchiseCTABanner } from "@/components/shared/FranchiseCTABanner";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/ScrollReveal";
import { locations, comingSoonLocations } from "@/lib/data/locations";
import { MapPin, Clock, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Locations",
  description:
    "Find Fries Story near you. Currently open in Seminyak, Bali. Expanding soon to Jakarta, Singapore, Bangkok, Sydney, and Melbourne.",
};

export default function LocationsPage() {
  return (
    <>
      <PageHero
        label="Find Us"
        title="Locations"
        subtitle="One location. Many stories. More coming soon."
      />

      {/* Open locations */}
      <section className="bg-charcoal px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="mb-10">
            <p className="text-gold text-xs font-mono tracking-widest uppercase mb-3">Now Open</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-cream">Our Flagship</h2>
          </ScrollReveal>

          {locations.map((location) => (
            <ScrollReveal key={location.id}>
              <div className="bg-charcoal-mid rounded-2xl border border-gold/20 overflow-hidden">
                {location.image && (
                  <div
                    className="h-64 bg-cover bg-center"
                    style={{ backgroundImage: `url('${location.image}')` }}
                  />
                )}
                <div className="p-8">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <p className="text-gold text-xs font-mono tracking-widest uppercase mb-1">
                        {location.country}
                      </p>
                      <h3 className="font-display text-2xl font-bold text-cream">{location.name}</h3>
                    </div>
                    <span className="shrink-0 text-xs font-mono px-3 py-1.5 rounded-full bg-green-900/30 text-green-400 border border-green-800/30">
                      Open
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-cream/60">
                    <div className="flex gap-2 items-start">
                      <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                      <span>{location.address}, {location.city}</span>
                    </div>
                    {location.hours && (
                      <div className="flex gap-2 items-start">
                        <Clock className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                        <span>{location.hours}</span>
                      </div>
                    )}
                    {location.phone && (
                      <div className="flex gap-2 items-start">
                        <Phone className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                        <span>{location.phone}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Coming soon */}
      <section className="bg-charcoal-mid px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="mb-10">
            <p className="text-gold text-xs font-mono tracking-widest uppercase mb-3">Coming Soon</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-cream">
              The Expansion Map.
            </h2>
            <p className="text-cream/50 mt-3 max-w-xl">
              We&apos;re actively looking for partners and locations in these cities.
              If you&apos;re in one of them — let&apos;s talk.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {comingSoonLocations.map((loc) => (
              <StaggerItem key={`${loc.city}-${loc.country}`}>
                <div className="bg-charcoal rounded-xl border border-white/8 p-4 hover:border-gold/30 transition-colors">
                  <p className="text-2xl mb-2">{loc.flag}</p>
                  <p className="text-cream font-semibold">{loc.city}</p>
                  <p className="text-cream/40 text-sm">{loc.country}</p>
                  <p className="text-gold/60 text-xs font-mono mt-2">Coming Soon</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <FranchiseCTABanner />
    </>
  );
}
