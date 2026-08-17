import { STATS } from "@/data/portfolio";
import { Counter } from "@/lib/motion";
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
            <Counter value={s.value} className="display block text-[2.6rem] md:text-[3.2rem]" />
            <p className="mt-1 text-[13px] text-muted-foreground">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
