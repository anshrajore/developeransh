import { STATS } from "@/data/portfolio";
import { Reveal } from "@/lib/reveal";

export function Stats() {
  return (
    <section className="border-y border-border">
      <div className="shell grid grid-cols-2 gap-px lg:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 80}
            className="border-border py-8 not-last:border-r odd:pr-6 even:pl-6 lg:even:pl-0 lg:not-last:pr-6 lg:not-first:pl-6"
          >
            <p className="display text-[2.6rem] md:text-[3.2rem]">{s.value}</p>
            <p className="mt-1 text-[13px] text-muted-foreground">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
