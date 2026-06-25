import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Fries Story team.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Get in Touch"
        title="Contact Us"
        subtitle="Questions, feedback, press inquiries, or just want to say hello — we read every message."
      />
      <section className="bg-charcoal px-4 py-20">
        <div className="max-w-2xl mx-auto">
          <div className="bg-charcoal-mid rounded-2xl border border-white/8 p-6 md:p-8">
            <ContactForm />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 text-center">
            <div>
              <p className="text-gold text-xs font-mono tracking-widest uppercase mb-1">Email</p>
              <p className="text-cream/80 text-sm">hello@friesstory.com</p>
            </div>
            <div>
              <p className="text-gold text-xs font-mono tracking-widest uppercase mb-1">Location</p>
              <p className="text-cream/80 text-sm">Seminyak, Bali, Indonesia</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
