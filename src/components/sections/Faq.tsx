import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/data/site";
import { SectionHeading } from "./Common";

export function Faq({ limit }: { limit?: number }) {
  const items = limit ? faqs.slice(0, limit) : faqs;
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-purple-50/40">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          eyebrow="FAQ"
          title={<>Frequently asked <span className="text-brand-gradient">questions</span></>}
          subtitle="Quick answers about working with us." />
        <Accordion type="single" collapsible className="space-y-3">
          {items.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="bg-background border border-purple-100 rounded-2xl px-5 shadow-sm">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
