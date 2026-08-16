import { TECH } from "@/data/portfolio";
import { useTilt } from "@/lib/cursor";
import { Reveal } from "@/lib/reveal";

const TONES = ["var(--cobalt)", "var(--ember)", "var(--violet-a)", "var(--coral)", "var(--butter)"];

function StackCard({ group, items, i }: { group: string; items: string[]; i: number }) {
  const ref = useTilt<HTMLDivElement>(6);
  const tone = TONES[i % TONES.length];

  return (
    <div
      ref={ref}
      className="tilt spotlight card-edit group relative h-full overflow-hidden p-7"
      style={{ background: "var(--card)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-40"
        style={{ background: tone }}
      />
      <div className="flex items-center justify-between">
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: tone }} />
        <span className="text-[11px] tracking-[0.18em] text-muted-foreground">
          {String(i + 1).padStart(2, "0")}
        </span>
      </div>

      <h3 className="mt-10 text-[13px] font-semibold tracking-[0.2em] uppercase">{group}</h3>

      <ul className="mt-5 flex flex-wrap gap-2">
        {items.map((item, k) => (
          <li
            key={item}
            className="rounded-full border border-border px-3.5 py-1.5 text-[12.5px] transition-all duration-500 hover:-translate-y-0.5 hover:bg-foreground hover:text-primary-foreground"
            style={{ transitionDelay: `${k * 15}ms` }}
          >
            {item}
          </li>
        ))}
      </ul>

      <p className="mt-6 text-[11px] tracking-[0.16em] uppercase text-muted-foreground">
        {items.length} tools
      </p>
    </div>
  );
}

export function Tech() {
  const ticker = [...TECH.flatMap((g) => g.items), ...TECH.flatMap((g) => g.items)];

  return (
    <section id="tech" className="relative overflow-hidden border-t border-border py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-40 h-[420px] w-[420px] rounded-full opacity-[0.12] blur-3xl"
        style={{ background: "radial-gradient(circle, var(--cobalt), transparent 65%)" }}
      />

      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-8">
            <p className="eyebrow">Stack</p>
            <h2 className="display mt-6 text-[10vw] leading-[0.95] sm:text-[5rem]">
              Tools, chosen for <span className="em-serif">the job</span>.
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-4">
            <p className="text-[15px] leading-relaxed text-muted-foreground">
              No stack loyalty, no résumé padding. Each of these earned its place by shipping
              something that had to work in front of real users.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {TECH.map((group, i) => (
            <Reveal key={group.group} delay={(i % 3) * 80}>
              <StackCard group={group.group} items={group.items} i={i} />
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-16 overflow-hidden border-y border-border py-5">
        <div className="marquee-track gap-8">
          {ticker.map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="display flex shrink-0 items-center gap-8 text-[1.5rem] text-muted-foreground/70 sm:text-[2rem]"
            >
              {t}
              <span className="text-[0.8rem] text-muted-foreground/40">✳</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
