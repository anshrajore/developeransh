import r1 from "@/assets/recap-1.png.asset.json";
import r2 from "@/assets/recap-2.png.asset.json";
import r3 from "@/assets/recap-3.png.asset.json";
import r4 from "@/assets/recap-4.png.asset.json";
import r5 from "@/assets/recap-5.png.asset.json";
import r6 from "@/assets/recap-6.webp.asset.json";
import { ACHIEVEMENTS } from "@/data/portfolio";
import { SplitReveal } from "@/lib/motion";
import { Reveal } from "@/lib/reveal";

const TONE: Record<string, string> = {
  butter: "var(--butter)",
  cobalt: "var(--cobalt)",
  coral: "var(--coral)",
  violet: "var(--violet-a)",
  ember: "var(--ember)",
  lime: "var(--lime-a)",
};

const GALLERY = [
  { src: r1.url, caption: "SUNHACKS — lead organizer, GenAI hackathon at record scale" },
  { src: r2.url, caption: "National Startup Day 2025 — Prarambh" },
  { src: r3.url, caption: "Pitching at the BRICS Youth Council pre-consultation" },
  { src: r4.url, caption: "TechUdaan — leading the team through an on-site disruption" },
  { src: r5.url, caption: "Smart Axis My India Hackathon — 1st Runner-Up" },
  { src: r6.url, caption: "HackPrix National Level Hackathon — 1st Runner-Up" },
];

export function Achievements() {
  return (
    <section id="achievements" data-tint="oklch(0.958 0.014 60)" className="border-t border-border py-24 md:py-32">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">Achievements</p>
          <h2 className="display mt-6 max-w-3xl text-[10vw] leading-[0.95] sm:text-[5rem]">
            <SplitReveal as="span" text="Built, competed," />{" "}
            <span className="em-serif">organised</span>.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {ACHIEVEMENTS.map((a, i) => (
            <Reveal key={a.event} delay={(i % 3) * 90}>
              <article className="card-edit lift h-full p-7">
                <div className="flex items-start justify-between gap-4">
                  <span
                    className="rounded-full px-3 py-1 text-[10px] font-semibold tracking-[0.14em] text-ink"
                    style={{ background: TONE[a.tone] }}
                  >
                    {a.badge}
                  </span>
                  <span className="text-[11px] text-muted-foreground">{a.n}</span>
                </div>
                <h3 className="mt-10 text-[19px] leading-tight font-semibold">{a.event}</h3>
                <p className="mt-1 text-[14px]">{a.result}</p>
                {a.role ? (
                  <p className="mt-1 text-[12px] tracking-[0.12em] text-muted-foreground uppercase">
                    {a.role}
                  </p>
                ) : null}
                <p className="mt-4 text-[13px] leading-relaxed text-muted-foreground">{a.context}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-20 overflow-hidden border-y border-border py-8">
        <div className="marquee-track gap-5">
          {[...GALLERY, ...GALLERY].map((item, i) => (
            <figure key={i} className="w-[300px] shrink-0 sm:w-[380px]">
              <img
                src={item.src}
                alt={item.caption}
                loading="lazy"
                className="h-[240px] w-full rounded-[20px] border border-border object-cover sm:h-[280px]"
              />
              <figcaption className="mt-3 text-[12px] text-muted-foreground">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
