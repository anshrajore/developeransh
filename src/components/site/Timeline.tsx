import { TIMELINE } from "@/data/portfolio";
import { Reveal } from "@/lib/reveal";

export function Timeline() {
  return (
    <section id="timeline" className="border-t border-border py-24 md:py-32">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">Trajectory</p>
          <h2 className="display mt-6 max-w-3xl text-[10vw] leading-[0.95] sm:text-[5rem]">
            One year at <span className="em-serif">a time</span>.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {TIMELINE.map((entry, i) => (
            <Reveal key={entry.year} delay={i * 90}>
              <article className="card-edit lift h-full p-7">
                <p className="display text-[2.4rem]">{entry.year}</p>
                <h3 className="mt-6 text-[17px] font-semibold">{entry.title}</h3>
                <ul className="mt-4 space-y-2">
                  {entry.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2 text-[13px] leading-relaxed text-muted-foreground"
                    >
                      <span aria-hidden className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-foreground/40" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
