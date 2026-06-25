import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { FranchiseCTABanner } from "@/components/shared/FranchiseCTABanner";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/ScrollReveal";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "From Belgium to Bali — the story behind Fries Story, a loaded Belgian fries brand with a global vision and a local soul.",
};

const milestones = [
  {
    year: "The Obsession",
    title: "It Starts in Belgium",
    text: "A trip to Bruges. A paper cone of frites with Andalouse sauce. One bite and everything changed. Not because it was exotic — because it was perfect. Simple ingredients, a two-step technique, and total dedication to one thing. We wanted to bring that obsession to Southeast Asia.",
  },
  {
    year: "The Kitchen",
    title: "Two Years of Testing",
    text: "We tested potato varieties. We calibrated frying temperatures. We failed at sauces and started over. We added ingredients from Indonesian markets that had no business being on a Belgian fry — and discovered that they had everything to do with it. Rendang on fries. Sambal matah as a base. Kecap manis butter. The fusion wasn't forced. It felt inevitable.",
  },
  {
    year: "Bali, Indonesia",
    title: "The First Location",
    text: "We opened in Seminyak, Bali. A kiosk. Under 20 square meters. A line on the first day that we weren't expecting. Tourists who came back three times in a week. Locals who had never tried Belgian fries before and became obsessed. We knew we had something real.",
  },
  {
    year: "Now",
    title: "A Brand in Development",
    text: "We are not a chain yet. We're a concept being proven — location by location, sauce by sauce, story by story. We are actively seeking partners, franchise operators, and early supporters who want to build something meaningful in the fast-casual space across Southeast Asia and beyond.",
  },
];

export default function OurStoryPage() {
  return (
    <>
      <PageHero
        label="How it Started"
        title="Our Story"
        subtitle="Belgian technique. Indonesian soul. A global appetite."
      />

      {/* Manifesto */}
      <section className="bg-charcoal-mid px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <blockquote className="font-display text-3xl md:text-5xl font-bold text-cream leading-[1.15] italic text-center">
              &ldquo;Food is the medium. Stories are the product.&rdquo;
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-charcoal px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-16">
          {milestones.map((milestone, i) => (
            <ScrollReveal key={milestone.title} delay={i * 0.05}>
              <div className="flex gap-8">
                <div className="shrink-0">
                  <div className="w-1 bg-gold/20 h-full rounded-full relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gold" />
                  </div>
                </div>
                <div className="pb-8">
                  <p className="text-gold text-xs font-mono tracking-widest uppercase mb-2">
                    {milestone.year}
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-cream mb-4">
                    {milestone.title}
                  </h3>
                  <p className="text-cream/60 text-lg leading-relaxed">{milestone.text}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Brand values */}
      <section className="bg-cream text-charcoal px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="mb-12 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal">
              What We Stand For.
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "No Shortcuts", text: "The double-fry takes longer. The house-made sauces require more. We choose the right way, every time. This isn't stubbornness — it's respect for the product and the people eating it." },
              { title: "Local First", text: "Belgium gave us the technique. Bali gave us the flavors. Every market we enter will contribute something to our menu. We are not an imported concept — we evolve wherever we go." },
              { title: "Small and Mighty", text: "Our kiosk model is a feature, not a limitation. Small footprint means fast decisions, low overhead, and the ability to put ourselves exactly where the customer is. We move fast. We adapt." },
            ].map((value) => (
              <StaggerItem key={value.title}>
                <div>
                  <h3 className="font-display text-xl font-bold text-charcoal mb-3">{value.title}</h3>
                  <p className="text-charcoal/60 leading-relaxed">{value.text}</p>
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
