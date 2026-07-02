"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/our-story", label: "Our Story" },
  { href: "/locations", label: "Locations" },
  { href: "/franchise", label: "Franchise" },
  { href: "/careers", label: "Careers" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="md:hidden p-2 text-cream" aria-label="Open menu">
        <Menu className="w-6 h-6" />
      </SheetTrigger>
      <SheetContent side="right" className="bg-charcoal border-gold/20 w-80">
        <div className="flex flex-col gap-8 pt-8">
          <div className="flex items-center justify-between">
            <Image
              src="/logo/landscape-gold.png"
              alt="Fries Story"
              width={1045}
              height={616}
              className="h-9 w-auto object-contain"
            />
            <button onClick={() => setOpen(false)} className="text-cream/60 hover:text-cream">
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-1">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`text-lg py-3 px-2 border-b border-white/5 transition-colors ${
                  pathname === href ? "text-gold" : "text-cream/80 hover:text-gold"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <Link
            href="/franchise"
            onClick={() => setOpen(false)}
            className="w-full text-center bg-gold hover:bg-gold-light text-charcoal font-semibold py-3 rounded transition-colors"
          >
            Partner With Us
          </Link>

          <p className="text-cream/30 text-sm text-center font-mono">
            Loaded Belgian Fries · Born in Bali
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
