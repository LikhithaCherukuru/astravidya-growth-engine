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
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {portfolioCategories.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              cat === c
                ? "bg-brand-gradient text-white shadow-brand"
                : "bg-background border border-purple-200 text-foreground/70 hover:border-primary"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p, i) => (
          <motion.div
            key={p.title + i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="h-[300px]"
          >
            <div
              className="relative w-full h-full"
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
                className="relative w-full h-full"
              >
                {/* FRONT SIDE */}
                <div
                  style={{
                    backfaceVisibility: "hidden",
                  }}
                  className="absolute inset-0 rounded-2xl overflow-hidden bg-background border border-purple-100 shadow-sm hover:shadow-brand transition-all"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-black/20" />

                    <div className="absolute bottom-6 left-6 text-white font-black text-5xl lg:text-6xl leading-none drop-shadow-[0_6px_24px_rgba(0,0,0,0.9)]">
                      {p.title}
                    </div>
                  </div>

                  <div className="p-3 flex items-center justify-between">
                    <div className="text-lg font-bold text-gray-700">
                      {p.category}
                    </div>

                    <button
                      onClick={() => setFlippedCard(i)}
                      className="px-4 py-2 rounded-xl bg-primary text-white text-sm font-semibold hover:scale-105 transition"
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
                  <div className="h-full flex flex-col justify-between p-6">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-4">
                        {p.title}
                      </h3>

                      <p className="text-white/90 leading-relaxed text-sm">
                        {p.caseStudy}
                      </p>
                    </div>

                    <button
                      onClick={() => setFlippedCard(null)}
                      className="w-full px-4 py-3 rounded-xl bg-background text-primary font-semibold hover:scale-105 transition"
                    >
                      ← Back To Portfolio
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}