import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import { videos, videoCategories } from "@/data/site";

export function VideosGrid({ limit }: { limit?: number }) {
  const [cat, setCat] = useState<string>("All");
  const [open, setOpen] = useState<number | null>(null);

  const filtered = videos
    .filter((v) => cat === "All" || v.category === cat)
    .slice(0, limit);

  const getVideoId = (url: string) => {
    const regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?v=))([^#&?]*).*/;

    const match = url.match(regExp);

    return match && match[7].length === 11 ? match[7] : "";
  };

  return (
    <div>
      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {videoCategories.map((c) => (
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

      {/* Videos Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((v, i) => (
          <motion.button
            key={v.title + i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -4 }}
            onClick={() => setOpen(i)}
            className="text-left group rounded-2xl overflow-hidden bg-transparent border border-purple-100 shadow-sm hover:shadow-brand transition-all"
          >
            <div className="aspect-video relative overflow-hidden">
              <img
                src={
                  v.thumbnail
                    ? v.thumbnail
                    : `https://i.ytimg.com/vi/${getVideoId(
                        v.youtubeUrl
                      )}/hqdefault.jpg`
                }
                alt={v.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-14 w-14 rounded-full bg-transparent/95 flex items-center justify-center shadow-brand group-hover:scale-110 transition">
                  <Play className="h-6 w-6 text-primary fill-primary ml-1" />
                </div>
              </div>

              <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-black/60 text-white text-[10px] font-mono">
                {v.duration}
              </div>
            </div>

            <div className="p-4">
              <div className="text-[10px] uppercase tracking-wider text-primary font-semibold">
                {v.category}
              </div>

              <div className="font-semibold mt-1">{v.title}</div>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {open !== null && filtered[open] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur flex items-center justify-center p-4"
            onClick={() => setOpen(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl bg-black"
            >
              <button
                onClick={() => setOpen(null)}
                className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-transparent/20 backdrop-blur text-white flex items-center justify-center hover:bg-transparent/30"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="aspect-video">
                {filtered[open].driveId ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://drive.google.com/file/d/${filtered[open].driveId}/preview`}
                    title={filtered[open].title}
                    allow="autoplay"
                    allowFullScreen
                    className="w-full h-full"
                  />
                ) : (
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${getVideoId(
                      filtered[open].youtubeUrl
                    )}?autoplay=1`}
                    title={filtered[open].title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}