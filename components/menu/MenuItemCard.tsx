import { MenuItem } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Flame } from "lucide-react";
import Image from "next/image";

function HeatDots({ level }: { level: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3].map((i) => (
        <Flame key={i} className={`w-3 h-3 ${i <= level ? "text-brand-red fill-brand-red" : "text-cream/15"}`} />
      ))}
    </div>
  );
}

const tagColors: Record<string, string> = {
  bestseller: "bg-gold text-charcoal",
  new: "bg-brand-red text-cream",
  signature: "bg-warm-brown text-cream",
  spicy: "bg-brand-red/20 text-brand-red border border-brand-red/30",
  vegetarian: "bg-green-900/30 text-green-400 border border-green-800/30",
};

export function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <div className="group bg-charcoal-mid rounded-2xl border border-white/5 hover:border-gold/30 transition-all duration-200 overflow-hidden">
      {item.image && (
        <div className="relative h-44 overflow-hidden bg-charcoal">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-mid/80 to-transparent" />
        </div>
      )}
      <div className="p-4">
        {/* Tags */}
        {item.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-2">
            {item.tags.filter(t => t !== "spicy" && t !== "vegetarian").slice(0, 2).map((tag) => (
              <span key={tag} className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${tagColors[tag]}`}>
                {tag.charAt(0).toUpperCase() + tag.slice(1)}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-start justify-between gap-2 mb-1.5">
          <h3 className="text-cream font-semibold text-sm leading-tight">{item.name}</h3>
          {(item.heatLevel ?? 0) > 0 && <HeatDots level={item.heatLevel ?? 0} />}
        </div>

        <p className="text-cream/50 text-xs leading-relaxed mb-3">{item.description}</p>

        <div className="flex items-center justify-between">
          <span className="text-gold font-mono font-semibold text-sm">
            IDR {item.price.idr.toLocaleString()}
          </span>
          {item.tags.includes("vegetarian") && (
            <span className="text-green-400 text-xs font-mono">Vegetarian</span>
          )}
        </div>
      </div>
    </div>
  );
}
