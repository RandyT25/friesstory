"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { ArrowRight, Share2, MapPin } from "lucide-react";
import { toast } from "sonner";

const footerLinks = {
  Brand: [
    { href: "/our-story", label: "Our Story" },
    { href: "/menu", label: "Menu" },
    { href: "/locations", label: "Locations" },
    { href: "/blog", label: "Blog" },
  ],
  "Join the Story": [
    { href: "/franchise", label: "Franchise Opportunity" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact Us" },
  ],
};

export function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleNewsletter(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 500));
    console.log("Newsletter signup:", email);
    toast.success("You're in. We'll be in touch.");
    setEmail("");
    setLoading(false);
  }

  return (
    <footer className="bg-charcoal border-t border-white/8">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-2">
          <Link href="/" className="flex items-center mb-4">
            <Image
              src="/logo/landscape-gold.png"
              alt="Fries Story"
              width={1045}
              height={616}
              className="h-16 w-auto object-contain"
            />
          </Link>
          <p className="text-cream/60 text-sm leading-relaxed max-w-sm mb-6">
            Born in Bali. Inspired by Belgium. Built for the world.
            Every fry has a story — we&apos;re here to tell yours.
          </p>

          {/* Newsletter */}
          <div>
            <p className="text-cream/80 text-sm font-semibold mb-3">
              Get the first taste of what&apos;s next.
            </p>
            <form onSubmit={handleNewsletter} className="flex gap-2">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-charcoal-mid border-white/15 text-cream placeholder:text-cream/30 focus:border-gold flex-1"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-4 py-2 bg-gold hover:bg-gold-light text-charcoal font-semibold rounded transition-colors disabled:opacity-50"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Social */}
          <div className="flex gap-4 mt-6">
            <a href="https://instagram.com/friesstory" target="_blank" rel="noopener noreferrer" className="text-cream/40 hover:text-gold transition-colors text-xs font-mono tracking-widest uppercase" aria-label="Instagram">
              Instagram
            </a>
            <a href="#" className="text-cream/40 hover:text-gold transition-colors" aria-label="Share">
              <Share2 className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Links */}
        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <h4 className="text-gold text-xs font-mono tracking-widest uppercase mb-4">{heading}</h4>
            <ul className="space-y-3">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-cream/60 hover:text-cream text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Location strip */}
      <div className="border-t border-white/8 px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-cream/40 text-xs">
          <MapPin className="w-3 h-3 text-gold" />
          <span>Seminyak, Bali · Opening Soon: Jakarta · Singapore · Bangkok · Sydney · Melbourne</span>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/5 px-4 py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-cream/30 text-xs">
          <p>© {new Date().getFullYear()} Fries Story. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-cream/50 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-cream/50 transition-colors">Terms of Use</Link>
            <Link href="/contact" className="hover:text-cream/50 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
