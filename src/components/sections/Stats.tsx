import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/data/site";

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const dur = 1500; const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      setN(Math.floor(p * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

export function Stats() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-purple-50 via-white to-fuchsia-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <motion.div key={s.label}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl p-6 lg:p-8 bg-background border border-purple-100 shadow-sm text-center hover:shadow-brand hover:-translate-y-1 transition">
            <div className="text-4xl lg:text-5xl font-bold text-brand-gradient">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-2 text-sm text-muted-foreground font-medium">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
