import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/Common";
import { ServicesGrid } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { CtaBand } from "@/components/sections/CtaBand";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — AstraVidya.AI" },
      { name: "description", content: "Websites, mobile apps, AI SEO, social media, paid ads, branding, design and video creation services." },
      { property: "og:title", content: "Services — AstraVidya.AI" },
      { property: "og:description", content: "Full-stack growth services powered by AI." },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Services" title={<>Everything you need to <span className="text-brand-gradient">grow online</span></>}
        subtitle="From your first landing page to scaled ad campaigns — we are your single growth partner." />
      <ServicesGrid />
      <Process />
      <CtaBand />
    </>
  ),
});
