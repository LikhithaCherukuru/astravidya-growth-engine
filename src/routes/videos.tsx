import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/Common";
import { VideosGrid } from "@/components/sections/VideosGrid";
import { CtaBand } from "@/components/sections/CtaBand";

export const Route = createFileRoute("/videos")({
  head: () => ({
    meta: [
      { title: "Video Showcase — AstraVidya.AI" },
      { name: "description", content: "Doctor, real estate, jewelry and product video advertisements produced by AstraVidya.AI." },
      { property: "og:title", content: "Video Showcase — AstraVidya.AI" },
      { property: "og:description", content: "Cinematic video ads at affordable prices." },
    ],
    links: [{ rel: "canonical", href: "/videos" }],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Videos"
        title={<>Cinematic <span className="text-brand-gradient">video advertisements</span></>}
        subtitle="Industry-specific videos that drive views, calls and sales." />
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <VideosGrid />
        </div>
      </section>
      <CtaBand />
    </>
  ),
});
