import logo from "@/assets/nayamarg-logo.jpeg.asset.json";
import { Reveal } from "@/lib/reveal";

export function Work() {
  return (
    <section id="work" className="border-t border-border py-24 md:py-32">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">Selected work</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="display mt-6 max-w-3xl text-[10vw] leading-[0.95] sm:text-[5rem]">
            Things I&apos;ve built <span className="em-serif">end to end</span>.
          </h2>
        </Reveal>

        {/* NayaMarg */}
        <Reveal delay={120}>
          <article className="mt-16 grid overflow-hidden rounded-[32px] border border-border lg:grid-cols-2">
            <div
              className="relative flex flex-col justify-between gap-10 p-8 md:p-12"
              style={{ background: "linear-gradient(150deg, var(--butter), var(--ember))" }}
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold tracking-[0.2em] text-ink/70 uppercase">
                  Founder · Flagship
                </span>
                <span className="rounded-full bg-ink/10 px-3 py-1 text-[11px] text-ink/80">
                  In development
                </span>
              </div>
              <img
                src={logo.url}
                alt="NayaMarg logo — connecting people to opportunities"
                loading="lazy"
                className="h-40 w-40 rounded-full object-cover shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)]"
              />
              <p className="display text-[3.4rem] text-ink md:text-[4.5rem]">NayaMarg</p>
            </div>

            <div className="bg-card p-8 md:p-12">
              <p className="text-[13px] tracking-[0.16em] text-muted-foreground uppercase">
                AI-powered workforce platform
              </p>
              <p className="mt-6 text-[17px] leading-relaxed">
                India&apos;s workforce discovery problem isn&apos;t a shortage of people or of jobs —
                it&apos;s a shortage of connection. NayaMarg connects skilled, semi-skilled and
                blue-collar workers to relevant opportunities using conversational AI, so a worker
                can be understood by a system without needing a résumé or digital fluency.
              </p>

              <ul className="mt-8 space-y-3 text-[14px] text-muted-foreground">
                {[
                  "Conversational AI onboarding — voice-first, low-literacy friendly",
                  "Worker profiling from unstructured, spoken input",
                  "Semantic job matching with Sentence-BERT embeddings",
                  "Employer-side discovery and shortlisting",
                ].map((f) => (
                  <li key={f} className="flex gap-3">
                    <span className="mt-2 h-1 w-4 shrink-0 bg-foreground/40" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-2">
                {["Generative AI", "Sentence-BERT", "Node.js", "React", "Supabase", "Vapi"].map(
                  (t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border px-3 py-1 text-[12px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ),
                )}
              </div>
            </div>
          </article>
        </Reveal>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Reveal delay={100}>
            <article className="card-edit lift h-full overflow-hidden">
              <div
                className="flex h-48 items-end p-8"
                style={{ background: "linear-gradient(140deg, var(--cobalt), var(--violet-a))" }}
              >
                <p className="display text-[2.8rem] text-white">SanjeevaniX</p>
              </div>
              <div className="p-8">
                <p className="eyebrow">Healthcare AI</p>
                <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                  An AI-assisted healthcare product exploring how intelligent triage and structured
                  medical context can make care decisions faster and better informed — with
                  accessibility treated as a requirement, not a feature.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["LLMs", "RAG", "React", "Node.js"].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border px-3 py-1 text-[12px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>

          <Reveal delay={180}>
            <article className="card-edit lift h-full overflow-hidden">
              <div
                className="flex h-48 items-end p-8"
                style={{ background: "var(--ink)" }}
              >
                <p className="display text-[2.8rem] text-primary-foreground">Dark Arcane</p>
              </div>
              <div className="p-8">
                <p className="eyebrow">Agentic AI · Team lead</p>
                <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                  The team I build and compete with. Dark Arcane focuses on agentic AI systems —
                  retrieval-augmented generation, persistent memory and multi-step autonomous
                  workflows — and has placed at national hackathons across the country.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Agentic AI", "RAG", "Memory", "Automation"].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border px-3 py-1 text-[12px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
