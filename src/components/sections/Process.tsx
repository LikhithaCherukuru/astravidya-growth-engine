import { motion } from "framer-motion";
import { processSteps } from "@/data/site";
import { SectionHeading } from "./Common";

export function Process() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50/40 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="How we work"
          title={
            <>
              Our proven{" "}
              <span className="text-brand-gradient">
                7-step process
              </span>
            </>
          }
          subtitle="From the first call to optimized growth — here's how we deliver."
        />

        <div className="mt-20">
          {/* Mobile Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:hidden">
            {processSteps.map((p, i) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center"
              >
                <div className="mx-auto h-16 w-16 rounded-full bg-brand-gradient text-white font-bold flex items-center justify-center shadow-brand">
                  {p.n}
                </div>

                <h4 className="mt-3 text-xl font-bold">
                  {p.title}
                </h4>

                <p className="mt-2 text-sm text-muted-foreground">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid grid-cols-7 gap-2">
            {processSteps.map((p, i) => {
              const isTop = i % 2 === 0;

              return (
                <motion.div
                  key={p.n}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.08,
                    duration: 0.5,
                  }}
                  className={`relative text-center ${
                    isTop ? "pt-0" : "pt-32"
                  }`}
                >
                  {/* Circle */}
                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                    className="
                      mx-auto
                      h-20
                      w-20
                      rounded-full
                      bg-brand-gradient
                      text-white
                      text-2xl
                      font-bold
                      flex
                      items-center
                      justify-center
                      shadow-brand
                    "
                  >
                    {p.n}
                  </motion.div>

                  {/* Text */}
                  <div className="mt-3">
                    <h4 className="font-bold text-xl">
                      {p.title}
                    </h4>

                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed max-w-[160px] mx-auto">
                      {p.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}