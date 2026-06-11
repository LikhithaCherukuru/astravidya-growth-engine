import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/Common";
import { IndustriesGrid } from "@/components/sections/Industries";
import { CtaBand } from "@/components/sections/CtaBand";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — AstraVidya.AI" },
      { name: "description", content: "Marketing playbooks tailored for doctors, real estate, jewelers, education and ecommerce." },
      { property: "og:title", content: "Industries we serve — AstraVidya.AI" },
      { property: "og:description", content: "Vertical-specific marketing playbooks that deliver from day one." },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: () => (
    <>
      <IndustriesGrid />
      <CtaBand />
    </>
  ),
});
