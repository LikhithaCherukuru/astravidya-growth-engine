import { motion } from "framer-motion";
import { services } from "@/data/site";
import { SectionHeading } from "./Common";

export function ServicesGrid() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="What we do"
          title={<>Full-stack <span className="text-brand-gradient">growth services</span></>}
          subtitle="One partner for design, development, marketing and AI-powered optimization." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div key={s.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl p-6 bg-background border border-purple-100 hover:shadow-brand transition-all overflow-hidden">
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-brand-gradient opacity-0 group-hover:opacity-10 transition" />
              <div className="h-12 w-12 rounded-xl bg-brand-gradient flex items-center justify-center text-white shadow-brand">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-bold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <ul className="mt-4 space-y-1.5">
                {s.items.slice(0, 4).map((it) => (
                  <li key={it} className="text-xs text-foreground/70 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-gradient" /> {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
