import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/Common";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { CtaBand } from "@/components/sections/CtaBand";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — AstraVidya.AI" },
      { name: "description", content: "Selected websites, mobile apps, branding, social media and ad campaigns delivered by AstraVidya.AI." },
      { property: "og:title", content: "Portfolio — AstraVidya.AI" },
      { property: "og:description", content: "A showcase of our recent design, development and marketing work." },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Portfolio"
        title={<>Work we are <span className="text-brand-gradient">proud of</span></>}
        subtitle="10+ projects shipped. Here are some of our favorites." />
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <PortfolioGrid />
        </div>
      </section>
      <CtaBand />
    </>
  ),
});
