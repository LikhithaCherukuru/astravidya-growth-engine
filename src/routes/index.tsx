import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { ServicesGrid } from "@/components/sections/Services";
import { IndustriesGrid } from "@/components/sections/Industries";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Process } from "@/components/sections/Process";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { VideosGrid } from "@/components/sections/VideosGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionHeading } from "@/components/sections/Common";

import clientsImage from "@/assets/clients.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "AstraVidya.AI — AI-Powered Digital Marketing Agency",
      },
      {
        name: "description",
        content:
          "Grow your business with AI-powered websites, apps, SEO, branding and ad campaigns by AstraVidya.AI.",
      },
      {
        property: "og:title",
        content:
          "AstraVidya.AI — AI-Powered Digital Marketing Agency",
      },
      {
        property: "og:description",
        content:
          "From Practice to Power through AI. Websites, apps, AI SEO, branding, ads and video production.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Stats */}
      <Stats />

      {/* Portfolio */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Selected Work"
            title={
              <>
                Recent{" "}
                <span className="text-brand-gradient">
                  Portfolio
                </span>
              </>
            }
            subtitle="A glimpse of what we've delivered for businesses across industries."
          />

          <PortfolioGrid limit={6} />
        </div>
      </section>

      {/* Videos */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Video Showcase"
            title={
              <>
                Cinematic{" "}
                <span className="text-brand-gradient">
                  Video Ads
                </span>
              </>
            }
            subtitle="Professional advertisements, reels and promotional videos created for clients."
          />

          <VideosGrid limit={4} />
        </div>
      </section>

      {/* Industries */}
      <IndustriesGrid />

      {/* Services */}
      <ServicesGrid />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Process */}
      <Process />

      {/* Testimonials */}
      <Testimonials />

      {/* Trusted Clients */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow=""
            title={
              <>
                Our Trusted{" "}
                <span className="text-brand-gradient">
                  Clients
                </span>
              </>
            }
            subtitle="We partner with businesses to build smarter digital solutions and drive real growth."
          />

          <div className="mt-10 flex justify-center">
            <img
              src={clientsImage}
              alt="Trusted Clients"
              className="
                w-full
                max-w-4xl
                h-auto
                rounded-2xl
                shadow-xl
                border
                border-border
              "
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Faq limit={8} />

      {/* Contact CTA */}
      <CtaBand />
    </>
  );
}