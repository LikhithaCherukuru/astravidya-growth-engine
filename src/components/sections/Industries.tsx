import { motion } from "framer-motion";
import { industries } from "@/data/site";
import { SectionHeading } from "./Common";

export function IndustriesGrid() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-purple-50/40">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Industries we serve"
          title={<>Built for <span className="text-brand-gradient">your industry</span></>}
          subtitle="Vertical-specific playbooks that ship results from day one." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <motion.article key={ind.slug}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="rounded-3xl p-7 bg-background border border-purple-100 shadow-sm hover:shadow-brand transition-all">
              <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${ind.color} text-white flex items-center justify-center shadow-brand`}>
                <ind.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-bold text-xl">{ind.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{ind.desc}</p>
              <ul className="mt-4 space-y-1.5">
                {ind.services.map((s) => (
                  <li key={s} className="text-xs text-foreground/70 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-gradient" /> {s}
                  </li>
                ))}
              </ul>
              
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
