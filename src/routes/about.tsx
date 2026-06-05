import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/Common";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBand } from "@/components/sections/CtaBand";
import { motion } from "framer-motion";

import {
  LOGO_URL,
  BRAND_NAME,
  BRAND_TAGLINE,
} from "@/lib/logo";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About — ${BRAND_NAME}` },
      {
        name: "description",
        content:
          "AstraVidya.AI is an AI-powered digital marketing and technology agency helping businesses grow through branding, websites, AI automation, advertising, and content creation.",
      },
      {
        property: "og:title",
        content: `About ${BRAND_NAME}`,
      },
      {
        property: "og:description",
        content: BRAND_TAGLINE,
      },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About AstraVidya.AI"
        title={
          <>
            AI-Powered Growth For{" "}
            <span className="text-brand-gradient">
              Modern Businesses
            </span>
          </>
        }
        subtitle="We help healthcare brands, real estate companies, jewellery businesses, educational institutions, ecommerce stores, and political campaigns grow faster through AI-powered marketing, websites, advertising, and creative solutions."
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs uppercase tracking-wider font-semibold text-primary">
              Our Story
            </span>

            <h2 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
              From Practice To Power,
              <br />
              Powered By AI
            </h2>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {BRAND_NAME} was founded with a simple vision:
              every business deserves access to premium digital
              marketing and technology solutions without paying
              enterprise-level agency fees.
            </p>

            <p className="mt-5 text-muted-foreground leading-relaxed">
              We combine artificial intelligence, creative
              strategy, web development, performance marketing,
              video production, branding, and automation to help
              businesses generate more leads, increase visibility,
              and achieve measurable growth.
            </p>

            <p className="mt-5 text-muted-foreground leading-relaxed">
              Today we proudly serve healthcare providers,
              hospitals, real estate companies, jewellery brands,
              educational institutions, ecommerce businesses, and
              political organizations across India.
            </p>

            <div className="mt-8 p-6 rounded-3xl glass-purple border border-purple-100">
              <div className="text-xs uppercase tracking-wider text-primary font-semibold">
                Mission
              </div>

              <div className="mt-2 text-xl font-bold">
                {BRAND_TAGLINE}
              </div>
            </div>
          </motion.div>

          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="absolute -inset-4 bg-brand-gradient opacity-10 blur-2xl rounded-full" />

            <img
              src={LOGO_URL}
              alt={BRAND_NAME}
              className="relative w-[180px] md:w-[250px] lg:w-[320px] object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      <Stats />

      {/* Only one heading section remains */}
      <WhyChooseUs />

      <Testimonials />

      <CtaBand />
    </>
  );
}