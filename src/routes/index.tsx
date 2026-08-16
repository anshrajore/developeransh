import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/site/About";
import { Achievements } from "@/components/site/Achievements";
import { Contact } from "@/components/site/Contact";
import { Faq } from "@/components/site/Faq";
import { Github } from "@/components/site/Github";
import { Hero } from "@/components/site/Hero";
import { Nav } from "@/components/site/Nav";
import { Nest } from "@/components/site/Nest";
import { Speaking } from "@/components/site/Speaking";
import { Stats } from "@/components/site/Stats";
import { Tech } from "@/components/site/Tech";
import { Timeline } from "@/components/site/Timeline";
import { Work } from "@/components/site/Work";
import { FAQ } from "@/data/portfolio";

const TITLE = "Ansh Rajore — Founder, AI Builder & Full-Stack Engineer";
const DESCRIPTION =
  "Portfolio of Ansh Rajore — AI-native products, agentic systems and full-stack engineering from Nashik. Building NayaMarg and NEST.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Ansh Rajore",
          jobTitle: "Founder, AI Builder & Full-Stack Engineer",
          address: { "@type": "PostalAddress", addressLocality: "Nashik", addressCountry: "IN" },
          sameAs: ["https://github.com/anshrajore", "https://www.linkedin.com/in/anshrajore"],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Work />
        <About />
        <Speaking />
        <Github />
        <Nest />
        <Achievements />
        <Timeline />
        <Tech />
        <Faq />
      </main>
      <Contact />
    </>
  );
}
