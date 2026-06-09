import { useState } from "react";
import { motion } from "framer-motion";
import { portfolioItems, portfolioCategories } from "@/data/site";

export function PortfolioGrid({ limit }: { limit?: number }) {
  const [cat, setCat] = useState<string>("All");
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const filtered = portfolioItems
    .filter((p) => cat === "All" || p.category === cat)
    .slice(0, limit);

  return (
    <div>
      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {portfolioCategories.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              cat === c
                ? "bg-brand-gradient text-white shadow-brand"
                : "bg-transparent border border-purple-200 text-foreground/70 hover:border-primary"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((p, i) => (
          <motion.div
            key={p.title + i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            style={{ perspective: "1000px" }}
          >
            <motion.div
              animate={{
                rotateY: flippedCard === i ? 180 : 0,
              }}
              transition={{
                duration: 0.8,
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
              className="relative h-[260px] sm:h-[300px] lg:h-[220px]">
              {/* FRONT SIDE */}
              <div
                style={{
                  backfaceVisibility: "hidden",
                }}
                className="absolute inset-0 rounded-2xl overflow-hidden bg-transparent border border-purple-100 shadow-sm hover:shadow-brand transition-all"
              >
                {/* Image */}
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Bottom Content */}
                <div className="px-4 py-3 flex items-center justify-between">
                  <div className="text-[11px] uppercase tracking-wider text-primary font-semibold">
                    {p.category}
                  </div>

                  <button
                    onClick={() => setFlippedCard(i)}
                    className="px-3 py-1 rounded-full bg-primary text-white text-[11px] font-medium hover:scale-105 transition"
                  >
                    Case Study →
                  </button>
                </div>
              </div>

              {/* BACK SIDE */}
              <div
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
                className="absolute inset-0 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-600 via-violet-600 to-fuchsia-600 text-white shadow-brand"
              >
                <div className="h-full flex flex-col justify-between p-4">
                  <div>
                    <h3 className="text-lg font-bold mb-3 text-center">
                      {p.title}
                    </h3>

                    <p className="text-white/90 text-xs leading-relaxed line-clamp-5">
                      {p.caseStudy}
                    </p>
                  </div>

                  <button
  onClick={() => setFlippedCard(null)}
  className="
    w-full
    rounded-xl
    bg-white
    text-purple-700
    py-2
    text-sm
    font-bold
    shadow-lg
    hover:bg-purple-50
    hover:scale-[1.02]
    transition-all
  "
>
  ← Back
</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}