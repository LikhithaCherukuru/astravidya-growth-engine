import { motion } from "framer-motion";
import { whyChooseUs } from "@/data/site";

import {
  BrainCircuit,
  Rocket,
  Gem,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";

import { SectionHeading } from "./Common";

const fancyIcons = [
  Gem,
  BrainCircuit,
  Rocket,
  ShieldCheck,
  TrendingUp,
  Sparkles,
];

export function WhyChooseUs() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Why us"
          title={
            <>
              Why brands{" "}
              <span className="text-brand-gradient">
                choose AstraVidya
              </span>
            </>
          }
          subtitle="The unfair advantages we bring to every engagement."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyChooseUs.map((w, i) => {
            const Icon = fancyIcons[i % fancyIcons.length];

            return (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  p-6
                  glass-purple
                  border
                  border-purple-200/60
                  hover:border-purple-400
                  hover:shadow-[0_20px_50px_rgba(124,58,237,0.25)]
                  transition-all
                  duration-500
                "
              >
                {/* Glow Effect */}
                <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-purple-500/10 blur-3xl group-hover:bg-fuchsia-500/20 transition-all duration-700" />

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                  <div className="absolute -left-40 top-0 h-full w-20 rotate-12 bg-transparent/20 blur-xl group-hover:left-[120%] transition-all duration-1000" />
                </div>

                {/* Icon */}
                <motion.div
                  animate={{
                    y: [0, -4, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="
                    h-14
                    w-14
                    rounded-2xl
                    bg-gradient-to-br
                    from-violet-600
                    via-purple-500
                    to-fuchsia-500
                    text-white
                    flex
                    items-center
                    justify-center
                    shadow-[0_10px_30px_rgba(124,58,237,0.35)]
                    group-hover:rotate-6
                    transition-all
                    duration-500
                  "
                >
                  <Icon className="h-7 w-7" />
                </motion.div>

                {/* Title */}
                <h3 className="mt-5 font-bold text-xl text-slate-900">
                  {w.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {w.desc}
                </p>

                {/* Bottom Accent Line */}
                <div className="mt-5 h-1 w-14 rounded-full bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-500 group-hover:w-24 transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}