import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-charcoal flex items-center justify-center px-4 text-center">
      <div>
        <p className="text-gold text-xs font-mono tracking-widest uppercase mb-4">404</p>
        <h1 className="font-display text-6xl md:text-8xl font-bold text-cream mb-4">Lost Your Way?</h1>
        <p className="text-cream/50 text-lg mb-8 max-w-sm mx-auto">
          Every story has a few wrong turns. This page doesn&apos;t exist — but our fries do.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/" className="px-6 py-3 bg-gold hover:bg-gold-light text-charcoal font-bold text-sm tracking-widest uppercase rounded transition-colors">
            Go Home
          </Link>
          <Link href="/menu" className="px-6 py-3 border border-cream/20 hover:border-gold text-cream hover:text-gold font-semibold text-sm tracking-widest uppercase rounded transition-colors">
            View Menu
          </Link>
        </div>
      </div>
    </section>
  );
}
