import { TECH } from "@/data/portfolio";
import { Reveal } from "@/lib/reveal";

export function Tech() {
  return (
    <section id="tech" className="border-t border-border py-24 md:py-32">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">Stack</p>
          <h2 className="display mt-6 max-w-3xl text-[10vw] leading-[0.95] sm:text-[5rem]">
            Tools, chosen for <span className="em-serif">the job</span>.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px border-t border-border">
          {TECH.map((group, i) => (
            <Reveal key={group.group} delay={(i % 3) * 70}>
              <div className="grid gap-4 border-b border-border py-7 md:grid-cols-[220px_minmax(0,1fr)] md:gap-10">
                <h3 className="text-[12px] font-semibold tracking-[0.2em] uppercase text-muted-foreground">
                  {group.group}
                </h3>
                <ul className="flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border px-4 py-1.5 text-[13px] transition-colors duration-500 hover:bg-foreground hover:text-primary-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
