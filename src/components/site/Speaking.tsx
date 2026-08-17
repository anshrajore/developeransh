import portrait from "@/assets/ansh-portrait.png.asset.json";
import nestFounder from "@/assets/nest-founder.png.asset.json";
import { useTilt } from "@/lib/cursor";
import { Counter, ImageReveal } from "@/lib/motion";
import { Reveal } from "@/lib/reveal";

const TALKS = [
  {
    n: "01",
    title: "Talent doesn't move — opportunity does",
    where: "National Startup Day 2025",
    body: "Why tier-2 India loses its best builders, and what changes when the ecosystem is built where they already are.",
  },
  {
    n: "02",
    title: "Building in public, at 19",
    where: "BRICS National Pitch Platform",
    body: "A founder's case for shipping unfinished things — and letting the market, not the plan, do the editing.",
  },
  {
    n: "03",
    title: "Agentic AI, without the theatre",
    where: "SUNHACKS · GenAI Hackathon",
    body: "What actually survives contact with real users once the demo ends and the workflow begins.",
  },
];

export function Speaking() {
  const frame = useTilt<HTMLDivElement>(7);

  return (
    <section id="speaking" data-tint="oklch(0.955 0.010 300)" className="relative overflow-hidden border-t border-border py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-24 h-[460px] w-[460px] rounded-full opacity-[0.13] blur-3xl"
        style={{ background: "radial-gradient(circle, var(--violet-a), transparent 65%)" }}
      />

      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <div
              ref={frame}
              className="tilt spotlight relative overflow-hidden rounded-[30px] border border-border bg-card"
            >
              <ImageReveal className="overflow-hidden rounded-[30px]">
              <img
                src={portrait.url}
                              
                alt="Ansh Rajore, founder and AI engineer, in his studio"
                loading="lazy"
                className="h-[420px] w-full object-cover object-center sm:h-[520px]"
              />
              </ImageReveal>
              <div className="absolute inset-x-4 bottom-4 rounded-[20px] border border-white/15 bg-black/45 px-5 py-4 text-white backdrop-blur-md">
                <p className="text-[10px] tracking-[0.2em] uppercase opacity-70">On stage</p>
                <p className="mt-1 text-[15px] font-semibold">
                  Speaker · Founder · Community builder
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-5 grid grid-cols-3 gap-3">
              {[
                ["12+", "Stages"],
                ["5k+", "Builders reached"],
                ["3", "National platforms"],
              ].map(([k = "", v = ""]) => (
                <div key={v} className="card-edit lift p-4">
                  <Counter value={k} className="display block text-[1.6rem]" />
                  <p className="mt-1 text-[11px] tracking-[0.14em] uppercase text-muted-foreground">
                    {v}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow">Speaking</p>
            <h2 className="display mt-6 text-[10vw] leading-[0.95] sm:text-[4.6rem]">
              Ideas worth <span className="em-serif">building</span>,
              <br />
              said out loud.
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-7 max-w-xl text-[16px] leading-relaxed text-muted-foreground">
              I speak the way I build — plainly, from lived work. Founding NayaMarg and NEST put me
              in front of students, founders, policymakers and national juries, and the talk is
              always the same underneath: the distance between an idea and a shipped thing is
              shorter than anyone tells you, and someone in the room has to go first.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-px border-t border-border">
            {TALKS.map((t, i) => (
              <Reveal key={t.n} delay={i * 90}>
                <article className="group grid gap-3 border-b border-border py-7 md:grid-cols-[64px_minmax(0,1fr)_auto] md:items-baseline md:gap-8">
                  <span className="text-[12px] tracking-[0.2em] text-muted-foreground">{t.n}</span>
                  <div>
                    <h3 className="text-[20px] font-semibold tracking-tight transition-transform duration-700 group-hover:translate-x-1 sm:text-[24px]">
                      {t.title}
                    </h3>
                    <p className="mt-2 max-w-lg text-[14px] leading-relaxed text-muted-foreground">
                      {t.body}
                    </p>
                  </div>
                  <span className="text-[12px] tracking-[0.14em] uppercase text-muted-foreground">
                    {t.where}
                  </span>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={160}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <img
                src={nestFounder.url}
                alt="Ansh Rajore speaking for NEST"
                loading="lazy"
                className="h-20 w-32 rounded-[16px] border border-border object-cover"
              />
              <a
                href="#contact"
                className="rounded-full bg-foreground px-6 py-3 text-sm text-primary-foreground transition-transform duration-500 hover:-translate-y-0.5"
              >
                Invite me to speak ↗
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
