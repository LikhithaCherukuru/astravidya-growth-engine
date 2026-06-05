import { motion } from "framer-motion";
import { processSteps } from "@/data/site";
import { SectionHeading } from "./Common";

export function Process() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50/40 to-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="How we work"
          title={<>Our proven <span className="text-brand-gradient">7-step process</span></>}
          subtitle="From the first call to optimized growth — here's how we deliver." />
        <div className="relative">
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-200 via-fuchsia-300 to-purple-200" />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {processSteps.map((p, i) => (
              <motion.div key={p.n}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="relative text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-brand-gradient text-white font-bold flex items-center justify-center shadow-brand relative z-10">
                  {p.n}
                </div>
                <h4 className="mt-4 font-semibold">{p.title}</h4>
                <p className="mt-1 text-xs text-muted-foreground">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
