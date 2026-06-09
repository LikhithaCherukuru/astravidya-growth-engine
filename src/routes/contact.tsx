import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/Common";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { PHONE, PHONE_RAW, EMAIL, ADDRESS } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — AstraVidya.AI" },
      { name: "description", content: "Call, WhatsApp or email AstraVidya.AI. We respond within hours." },
      { property: "og:title", content: "Contact AstraVidya.AI" },
      { property: "og:description", content: "Talk to a growth strategist today." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const cards = [
    { icon: Phone, label: "Call us", value: PHONE, href: `tel:${PHONE_RAW}`, cta: "Call now", color: "from-purple-500 to-fuchsia-500" },
    { icon: MessageCircle, label: "WhatsApp", value: PHONE, href: `https://wa.me/${PHONE_RAW}`, cta: "Chat on WhatsApp", color: "from-green-500 to-emerald-500" },
    { icon: Mail, label: "Email us", value: EMAIL, href: `mailto:${EMAIL}`, cta: "Send email", color: "from-violet-500 to-purple-600" },
  ];
  return (
    <>
      <PageHero eyebrow="Get in touch"
        title={<>Let's build your <span className="text-brand-gradient">growth engine</span></>}
        subtitle="Skip the forms. Call, WhatsApp or email us directly — a senior strategist will respond quickly." />

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="rounded-3xl p-7 bg-transparent border border-purple-100 shadow-sm hover:shadow-brand transition-all block">
              <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${c.color} text-white flex items-center justify-center shadow-brand`}>
                <c.icon className="h-7 w-7" />
              </div>
              <div className="mt-5 text-xs uppercase tracking-wider text-muted-foreground font-semibold">{c.label}</div>
              <div className="mt-1 font-bold text-lg">{c.value}</div>
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                {c.cta} →
              </div>
            </motion.a>
          ))}
        </div>

        <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-3xl p-7 glass-purple">
            <div className="h-12 w-12 rounded-xl bg-brand-gradient text-white flex items-center justify-center">
              <MapPin className="h-6 w-6" />
            </div>
            <div className="mt-4 text-xs uppercase tracking-wider text-muted-foreground font-semibold">Office</div>
            <div className="mt-1 font-bold text-lg">{ADDRESS}</div>
            <p className="mt-2 text-sm text-muted-foreground">Visit us by appointment. We serve clients across India & internationally.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-3xl p-7 glass-purple">
            <div className="h-12 w-12 rounded-xl bg-brand-gradient text-white flex items-center justify-center">
              <Clock className="h-6 w-6" />
            </div>
            <div className="mt-4 text-xs uppercase tracking-wider text-muted-foreground font-semibold">Working hours</div>
            <div className="mt-1 font-bold text-lg">Mon — Fri · 10:00 to 18:00 IST</div>
            <p className="mt-2 text-sm text-muted-foreground">WhatsApp replies typically within 1 hour during business hours.</p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
