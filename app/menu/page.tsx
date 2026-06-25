import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { MenuItemCard } from "@/components/menu/MenuItemCard";
import { SauceGrid } from "@/components/menu/SauceGrid";
import { FranchiseCTABanner } from "@/components/shared/FranchiseCTABanner";
import { menuItems, menuCategories } from "@/lib/data/menu";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore the full Fries Story menu — classic Belgian fries, signature loaded fries, sharing boxes, sides, drinks, and 15 signature sauces.",
};

export default function MenuPage() {
  return (
    <>
      <PageHero
        label="What We Serve"
        title="The Menu"
        subtitle="Double-fried Belgian fries. Loaded signatures. 15 sauces. All stories worth telling."
      />

      <div className="bg-charcoal">
        {menuCategories
          .filter((cat) => cat.id !== "sauces")
          .map((category) => {
            const items = menuItems.filter((item) => item.category === category.id);
            if (items.length === 0) return null;
            return (
              <section
                key={category.id}
                id={category.id}
                className="px-4 py-14 border-b border-white/5"
              >
                <div className="max-w-7xl mx-auto">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-cream mb-8">
                    {category.label}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {items.map((item) => (
                      <MenuItemCard key={item.id} item={item} />
                    ))}
                  </div>
                </div>
              </section>
            );
          })}

        {/* Sauces section */}
        <section id="sauces" className="px-4 py-14">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-cream mb-2">
                The Sauce Program
              </h2>
              <p className="text-cream/50 text-sm max-w-xl">
                15 sauces. All house-made. Each one a reason to come back.
                ★ marks Fries Story Originals.
              </p>
            </div>
            <SauceGrid />
          </div>
        </section>
      </div>

      <FranchiseCTABanner />
    </>
  );
}
