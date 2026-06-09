import { motion } from "framer-motion";
import { industries } from "@/data/site";
import { SectionHeading } from "./Common";

export function IndustriesGrid() {
  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-purple-50/40">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Industries we serve"
          title={
            <>
              Built for{" "}
              <span className="text-brand-gradient">
                your industry
              </span>
            </>
          }
          subtitle="Vertical-specific playbooks that ship results from day one."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((ind, i) => (
            <motion.article
              key={ind.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="group relative overflow-hidden rounded-xl p-4 bg-transparent border border-purple-100 shadow-sm hover:shadow-[0_20px_40px_rgba(139,92,246,0.18)] transition-all duration-500 min-h-[220px]"
            >
              {/* Hover Background */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-violet-50 via-fuchsia-50 to-cyan-50" />

              {/* Glow */}
              <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-purple-400/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  whileHover={{
                    rotate: 10,
                    scale: 1.1,
                  }}
                  className={`h-10 w-10 rounded-lg bg-gradient-to-br ${ind.color} text-white flex items-center justify-center shadow-md`}
                >
                  <ind.icon className="h-5 w-5" />
                </motion.div>

                {/* Title */}
                <h3 className="mt-3 font-bold text-base text-slate-900">
                  {ind.title}
                </h3>

                {/* Description */}
                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                  {ind.desc}
                </p>

                {/* Services */}
                <ul className="mt-3 space-y-1">
                  {ind.services.map((s) => (
                    <li
                      key={s}
                      className="text-xs text-slate-700 flex items-center gap-2"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}