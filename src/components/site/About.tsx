import { PILLARS } from "@/data/portfolio";
import { Reveal } from "@/lib/reveal";

const TONE: Record<string, string> = {
  butter: "var(--butter)",
  cobalt: "var(--cobalt)",
  coral: "var(--coral)",
  violet: "var(--violet-a)",
};

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">About</p>
        </Reveal>

        <div className="mt-8 grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <h2 className="display text-[9vw] leading-[0.95] sm:text-[5rem]">
              A builder before
              <br />a <span className="em-serif">title</span>.
            </h2>
          </Reveal>

          <Reveal delay={120} className="space-y-5 text-[16px] leading-relaxed text-muted-foreground lg:col-span-5">
            <p>
              I&apos;m Ansh Rajore — a Computer Science student at Sandip University, Nashik, and a
              builder who is far more interested in what gets shipped than in what gets described.
            </p>
            <p>
              My work sits where artificial intelligence meets real products: conversational
              interfaces, agentic systems, matching engines, automation and the full-stack
              scaffolding that makes them usable by ordinary people.
            </p>
            <p>
              Alongside that, I build ecosystems — teams, hackathons and communities — because
              technology only compounds when the people around it do too.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <article className="card-edit lift h-full p-7">
                <div className="flex items-start justify-between">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ background: TONE[p.tone] }}
                  />
                  <span className="text-[11px] tracking-[0.16em] text-muted-foreground">{p.n}</span>
                </div>
                <h3 className="mt-14 text-[13px] font-semibold tracking-[0.2em] uppercase">
                  {p.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">{p.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
