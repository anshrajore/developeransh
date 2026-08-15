import { LINKS } from "@/data/portfolio";
import { Reveal } from "@/lib/reveal";

const CHANNELS = [
  { label: "Email", value: "anshrajore@gmail.com", href: LINKS.email },
  { label: "GitHub", value: "@anshrajore", href: LINKS.github },
  { label: "LinkedIn", value: "in/anshrajore", href: LINKS.linkedin },
];

export function Contact() {
  return (
    <footer id="contact" className="border-t border-border pt-24 pb-10 md:pt-32">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="display mt-6 text-[13vw] leading-[0.9] sm:text-[7rem]">
            Let&apos;s build
            <br />
            something <span className="em-serif">real</span>.
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-8 max-w-xl text-[16px] leading-relaxed text-muted-foreground">
            Open to product and AI engineering work, founding-team collaborations, and ecosystem
            initiatives — especially problems that need someone to own them end to end.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px border-t border-border">
          {CHANNELS.map((c, i) => (
            <Reveal key={c.label} delay={i * 80}>
              <a
                href={c.href}
                target={c.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                className="group flex items-center justify-between gap-6 border-b border-border py-6 transition-colors duration-500 hover:text-muted-foreground"
              >
                <span className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
                  {c.label}
                </span>
                <span className="flex items-center gap-3 text-[18px] font-medium sm:text-[22px]">
                  {c.value}
                  <span
                    aria-hidden
                    className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                  >
                    ↗
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-2 text-[12px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Ansh Rajore — Nashik, India.</p>
          <p>Founder · AI Builder · Full-Stack Engineer</p>
        </div>
      </div>
    </footer>
  );
}
