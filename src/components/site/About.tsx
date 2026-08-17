import nestFounder from "@/assets/nest-founder.png.asset.json";
import { PILLARS } from "@/data/portfolio";
import { ImageReveal, Parallax, SplitReveal } from "@/lib/motion";
import { Reveal } from "@/lib/reveal";
import { useTilt } from "@/lib/cursor";

const TONE: Record<string, string> = {
  butter: "var(--butter)",
  cobalt: "var(--cobalt)",
  coral: "var(--coral)",
  violet: "var(--violet-a)",
};

export function About() {
  const tilt = useTilt();

  return (
    <section id="about" className="py-24 md:py-32" data-tint="oklch(0.958 0.008 90)">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">About</p>
        </Reveal>

        <div className="mt-8 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SplitReveal
              as="h2"
              className="display block text-[9vw] leading-[0.95] sm:text-[5rem]"
              text="A builder before a"
            />
            <h2 className="display text-[9vw] leading-[0.95] sm:text-[5rem]">
              <span className="em-serif">title</span>.
            </h2>
          </div>

          <Reveal
            delay={120}
            className="space-y-5 text-[16px] leading-relaxed text-muted-foreground lg:col-span-5"
          >
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

        {/* Editorial portrait block */}
        <div className="mt-20 grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <ImageReveal className="tilt-card overflow-hidden rounded-[28px] border border-border" {...tilt}>
              <img
                src={nestFounder.url}
                alt="Ansh Rajore — founder portrait"
                loading="lazy"
                className="h-[420px] w-full object-cover md:h-[520px]"
              />
              <span className="spotlight" aria-hidden />
            </ImageReveal>
          </div>

          <Parallax distance={60} className="lg:col-span-6">
            <div className="space-y-6">
              <p className="eyebrow">Working principle</p>
              <p className="display text-[2rem] leading-[1.05] sm:text-[2.8rem]">
                Build in public, <span className="em-serif">ship</span> in weeks, refine forever.
              </p>
              <p className="max-w-md text-[16px] leading-relaxed text-muted-foreground">
                Every project on this page started as a rough idea in a notebook and ended as
                something people could actually open, use and break. That loop — idea, prototype,
                feedback, rebuild — is the whole method.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Prototype fast", "Design with intent", "Measure honestly", "Ship anyway"].map(
                  (t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-card px-4 py-2 text-[12px] tracking-[0.06em]"
                    >
                      {t}
                    </span>
                  ),
                )}
              </div>
            </div>
          </Parallax>
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
