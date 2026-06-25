import { sauces } from "@/lib/data/sauces";

function HeatBar({ level }: { level: number }) {
  return (
    <div className="flex gap-0.5 mt-2">
      {[1, 2, 3].map((i) => (
        <div key={i} className={`h-0.5 w-5 rounded-full ${i <= level ? "bg-brand-red" : "bg-charcoal/20"}`} />
      ))}
    </div>
  );
}

export function SauceGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
      {sauces.map((sauce) => (
        <div
          key={sauce.id}
          className="relative bg-charcoal-mid rounded-xl border border-white/5 p-4 hover:border-gold/30 transition-colors"
        >
          {sauce.isSignature && (
            <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full bg-gold text-charcoal text-[8px] font-bold flex items-center justify-center">
              ★
            </span>
          )}
          <p className="text-cream font-semibold text-sm">{sauce.name}</p>
          <p className="text-cream/40 text-xs mt-1 leading-snug">{sauce.flavor}</p>
          <HeatBar level={sauce.heatLevel} />
          {sauce.origin && (
            <p className="text-gold/50 text-[10px] font-mono mt-2">{sauce.origin}</p>
          )}
        </div>
      ))}
    </div>
  );
}
