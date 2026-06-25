import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: "dark" | "cream" | "charcoal-mid";
}

export function SectionWrapper({ children, className, id, variant = "dark" }: SectionWrapperProps) {
  const bg = {
    dark: "bg-charcoal",
    cream: "bg-cream text-charcoal",
    "charcoal-mid": "bg-charcoal-mid",
  }[variant];

  return (
    <section id={id} className={cn("px-4 py-20 md:py-28", bg, className)}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}
