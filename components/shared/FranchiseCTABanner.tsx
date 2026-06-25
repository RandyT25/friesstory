import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FranchiseCTABanner() {
  return (
    <div className="bg-charcoal-mid border-t border-gold/20 px-4 py-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-gold text-sm font-mono tracking-widest uppercase mb-1">Partnership Opportunity</p>
          <p className="text-cream text-xl font-display font-semibold">
            Interested in bringing Fries Story to your city?
          </p>
        </div>
        <Link
          href="/franchise"
          className="shrink-0 inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-charcoal font-semibold px-6 py-3 rounded transition-colors duration-200"
        >
          Explore Franchise <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
