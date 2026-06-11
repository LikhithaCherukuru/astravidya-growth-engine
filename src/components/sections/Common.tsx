import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionHeading({ eyebrow, title, subtitle, center = true }: {
  eyebrow?: string; title: ReactNode; subtitle?: string; center?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.5 }}
      className={center ? "text-center max-w-3xl mx-auto mb-12" : "mb-12"}>
      {eyebrow && (
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-purple-100 text-primary mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-bold text-foreground">{title}</h2>
      {subtitle && <p className="mt-4 text-base md:text-lg text-muted-foreground">{subtitle}</p>}
    </motion.div>
  );
}
export function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: ReactNode; subtitle?: string }) {
  return (
    <section className="relative bg-hero-gradient overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.15),transparent_60%)]" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
        {eyebrow && (
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-transparent/60 backdrop-blur text-primary border border-purple-200 mb-5">
            {eyebrow}
          </motion.span>
        )}
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold tracking-tight">
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</motion.p>
        )}
      </div>
    </section>
  );
}
