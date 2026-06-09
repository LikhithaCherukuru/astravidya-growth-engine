import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { PHONE, PHONE_RAW } from "@/data/site";

export function CtaBand() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto bg-cta-gradient rounded-3xl p-6 md:p-10 text-center text-white shadow-brand relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_50%)]" />

        <div className="relative">
          <h2 className="text-2xl md:text-4xl font-bold">
            Ready to grow your business?
          </h2>

          <p className="mt-3 text-purple-100 max-w-xl mx-auto text-sm md:text-base">
            Let's build your growth engine. Talk to a strategist today — no
            contracts, no spam.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={`tel:${PHONE_RAW}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#4560E8] text-white font-semibold shadow-lg hover:scale-105 transition"
            >
              <Phone className="h-4 w-4" />
              Call {PHONE}
            </a>

            <a
              href={`https://wa.me/${PHONE_RAW}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white font-semibold shadow-lg hover:scale-105 transition"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}