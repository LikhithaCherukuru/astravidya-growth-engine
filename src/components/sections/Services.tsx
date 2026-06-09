import { motion } from "framer-motion";
import { services } from "@/data/site";
import { SectionHeading } from "./Common";

export function ServicesGrid() {
  return (
    <section
      id="services"
      className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              Full-stack{" "}
              <span className="text-brand-gradient">
                growth services
              </span>
            </>
          }
          subtitle="One partner for design, development, marketing and AI-powered optimization."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="
                group
                relative
                rounded-2xl
                p-6
                bg-transparent
                border
                border-purple-100
                overflow-hidden
                transition-all
                duration-500
                hover:shadow-[0_0_40px_rgba(168,85,247,0.35)]
              "
            >
              {/* Animated Background Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute -top-10 -left-10 h-32 w-32 rounded-full bg-cyan-400/20 blur-3xl" />
                <div className="absolute top-10 right-0 h-32 w-32 rounded-full bg-fuchsia-500/20 blur-3xl" />
                <div className="absolute bottom-0 left-1/2 h-32 w-32 rounded-full bg-violet-500/20 blur-3xl" />
              </div>

              {/* Animated Border Glow */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-fuchsia-400/30 transition-all duration-500" />

              {/* Icon */}
              <motion.div
                whileHover={{
                  scale: 1.15,
                  rotate: 8,
                }}
                className="
                  relative z-10
                  h-12
                  w-12
                  rounded-xl
                  bg-brand-gradient
                  flex
                  items-center
                  justify-center
                  text-white
                  shadow-[0_0_20px_rgba(168,85,247,0.5)]
                "
              >
                <s.icon className="h-6 w-6" />
              </motion.div>

              {/* Title */}
              <h3 className="relative z-10 mt-4 font-bold text-lg">
                {s.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 mt-2 text-sm text-muted-foreground">
                {s.desc}
              </p>

              {/* Service Items */}
              <ul className="relative z-10 mt-4 space-y-1.5">
                {s.items.slice(0, 4).map((it) => (
                  <li
                    key={it}
                    className="text-xs text-foreground/70 flex items-center gap-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-gradient" />
                    {it}
                  </li>
                ))}
              </ul>

              {/* Bottom Glow Bar */}
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-0 left-0 h-1 bg-brand-gradient"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}