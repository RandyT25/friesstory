import { sauces } from "@/lib/data/sauces";
import Image from "next/image";

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
          className="relative bg-charcoal-mid rounded-xl border border-white/5 hover:border-gold/30 transition-colors overflow-hidden"
        >
          {sauce.isSignature && (
            <span className="absolute top-2.5 right-2.5 z-10 w-3.5 h-3.5 rounded-full bg-gold text-charcoal text-[8px] font-bold flex items-center justify-center">
              ★
            </span>
          )}
          {sauce.image && (
            <div className="relative h-24 overflow-hidden bg-charcoal">
              <Image
                src={sauce.image}
                alt={sauce.name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-mid/80 to-transparent" />
            </div>
          )}
          <div className="p-4">
            <p className="text-cream font-semibold text-sm">{sauce.name}</p>
            <p className="text-cream/40 text-xs mt-1 leading-snug">{sauce.flavor}</p>
            <HeatBar level={sauce.heatLevel} />
            {sauce.origin && (
              <p className="text-gold/50 text-[10px] font-mono mt-2">{sauce.origin}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
