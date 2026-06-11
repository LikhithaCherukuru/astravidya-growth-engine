import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  FolderOpen,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { BRAND_NAME, PHONE_RAW } from "@/data/site";
import logo from "@/assets/logo/astravidya-logo.jpeg";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-gray-100">
      {/* Reduced Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(168,85,247,0.03),transparent_60%),radial-gradient(circle_at_85%_70%,rgba(124,58,237,0.02),transparent_60%)]" />

      {/* Floating Shape Left */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-32 left-10 h-24 w-24 rounded-3xl bg-brand-gradient opacity-5 blur-3xl"
      />

      {/* Floating Shape Right */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-32 right-10 h-32 w-32 rounded-full bg-fuchsia-300 opacity-5 blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-transparent/70 backdrop-blur border border-purple-200 text-xs font-semibold text-primary mb-5"
          >
            <Sparkles className="h-3.5 w-3.5" />
            AI-Powered Digital Marketing Agency
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
          >
            Grow Your Business With{" "}
            <span className="text-brand-gradient">
              AI-Powered Digital Marketing
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-muted-foreground max-w-xl"
          >
            We build websites, mobile apps, AI SEO systems, branding
            solutions, social media campaigns, and lead generation
            strategies that drive measurable business growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href={`tel:${PHONE_RAW}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-brand-gradient text-white font-semibold shadow-brand hover:shadow-glow hover:scale-105 transition-all"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>

            <a
              href={`https://wa.me/${PHONE_RAW}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] text-white font-semibold shadow-lg hover:scale-105 transition-all"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>

            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-transparent border-2 border-purple-200 text-primary font-semibold hover:border-primary hover:scale-105 transition-all"
            >
              <FolderOpen className="h-4 w-4" />
              View Portfolio
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-6 text-sm text-muted-foreground"
          >
            {[
              { icon: TrendingUp, t: "+ Projects Delivered" },
              { icon: Zap, t: "AI-First Approach" },
              { icon: Sparkles, t: "95% Client Retention" },
            ].map((b) => (
              <span
                key={b.t}
                className="inline-flex items-center gap-2 font-medium"
              >
                <b.icon className="h-4 w-4 text-primary" />
                {b.t}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right Logo Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="relative"
        >
          <div className="relative aspect-square max-w-md mx-auto">
            {/* Outer Ring */}
            {/* Outer Ring */}
<motion.div
  animate={{ rotate: 360 }}
  transition={{
    duration: 40,
    repeat: Infinity,
    ease: "linear",
  }}
  className="absolute inset-0 rounded-full border-2 border-dashed border-purple-400/70"
/>

{/* Inner Ring */}
<motion.div
  animate={{ rotate: -360 }}
  transition={{
    duration: 50,
    repeat: Infinity,
    ease: "linear",
  }}
  className="absolute inset-8 rounded-full border-2 border-dashed border-violet-400/70"
/>

            {/* Softer Center Glow */}
            <div className="absolute inset-16 rounded-full bg-brand-gradient opacity-10 blur-3xl" />

            {/* Logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="relative flex items-center justify-center"
              >
                <div className="absolute h-72 w-72 rounded-full bg-purple-400/5 blur-3xl" />

                <img
                  src={logo}
                  alt={BRAND_NAME}
                  className="relative z-10 h-64 w-64 object-contain drop-shadow-[0_0_15px_rgba(168,85,247,0.15)]"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}