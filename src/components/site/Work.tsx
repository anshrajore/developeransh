import logo from "@/assets/nayamarg-logo.jpeg.asset.json";
import sanjeevanix from "@/assets/sanjeevanix-logo.png.asset.json";
import { SplitReveal } from "@/lib/motion";
import { Reveal } from "@/lib/reveal";

const VERDICTS = [
  { id: "UI-014", sev: "fail", line: "Button.tsx:42", note: "Hardcoded hex bypasses token system" },
  { id: "UI-027", sev: "warn", line: "Card.tsx:11", note: "Focus ring removed, no replacement" },
  { id: "BE-006", sev: "fail", line: "api/user.ts:18", note: "Unvalidated body reaches DB write" },
  { id: "BE-021", sev: "pass", line: "db/pool.ts:9", note: "Connection pooling configured" },
];

export function Work() {
  return (
    <section id="work" data-tint="oklch(0.955 0.010 265)" className="border-t border-border py-24 md:py-32">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">Selected work</p>
        </Reveal>
        <h2 className="display mt-6 max-w-3xl text-[10vw] leading-[0.95] sm:text-[5rem]">
          <SplitReveal as="span" text="Things I've built" />{" "}
          <span className="em-serif">end to end</span>.
        </h2>

        {/* Atelier — flagship */}
        <Reveal delay={80}>
          <article className="mt-16 grid overflow-hidden rounded-[32px] border border-border lg:grid-cols-2">
            <div className="bg-card p-8 md:p-12">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground">
                  Solo build · Flagship
                </span>
                <span className="rounded-full border border-border px-3 py-1 text-[11px] text-muted-foreground">
                  Open source
                </span>
              </div>

              <p className="display mt-8 text-[3.4rem] leading-[0.95] md:text-[4.5rem]">Atelier</p>
              <p className="mt-4 text-[13px] tracking-[0.16em] uppercase text-muted-foreground">
                MCP quality gate for AI-generated code
              </p>

              <p className="mt-6 text-[17px] leading-relaxed">
                AI coding agents optimise for less code, not correct code. Atelier adds the
                verification layer: two specialist critics — a UI/UX Quality Gate and a Backend
                Architecture Guard — run post-generation over an MCP server and return structured
                pass/fail verdicts with rule ID, severity, line and fix. <span className="em-serif">
                atelier fix</span> applies the remediation directly.
              </p>

              <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border">
                {[
                  ["36", "Mechanically gradeable rules"],
                  ["~12ms", "Deterministic pass, zero API cost"],
                  ["5", "Editors from one ruleset"],
                  ["Local", "Qwen LoRA critic via Apple MLX"],
                ].map(([k, v]) => (
                  <div key={v} className="bg-card p-4">
                    <dt className="display text-[1.5rem] leading-none">{k}</dt>
                    <dd className="mt-2 text-[12px] leading-snug text-muted-foreground">{v}</dd>
                  </div>
                ))}
              </dl>

              <ul className="mt-8 space-y-3 text-[14px] text-muted-foreground">
                {[
                  "Rules checked by AST parsing, regex and JSON-schema validation — not vibes",
                  "Fine-tuned Qwen2.5-Coder QLoRA critic distilled from a frontier teacher model",
                  "Model fallback only for judgment calls the deterministic pass can't settle",
                  "Native MCP server plus adapters: Cursor, Windsurf, Claude Code, Antigravity, Copilot",
                ].map((f) => (
                  <li key={f} className="flex gap-3">
                    <span className="mt-2 h-1 w-4 shrink-0 bg-foreground/40" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-2">
                {["MCP", "TypeScript", "Node.js", "Python", "QLoRA", "Qwen2.5-Coder", "Apple MLX", "Next.js", "Tailwind"].map(
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

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  ["Live site", "https://atelier-quality-gate.vercel.app"],
                  ["GitHub", "https://github.com/anshrajore/atelier-mcp"],
                  ["npm", "https://www.npmjs.com/package/atelier-quality-gate"],
                ].map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-foreground px-4 py-2 text-[12.5px] transition-colors duration-500 hover:bg-foreground hover:text-primary-foreground"
                  >
                    {label} ↗
                  </a>
                ))}
              </div>
            </div>

            <div
              className="relative flex flex-col justify-between gap-8 p-8 md:p-12"
              style={{ background: "var(--ink)" }}
            >
              <div className="flex items-center justify-between text-[11px] tracking-[0.2em] uppercase text-primary-foreground/60">
                <span>atelier critique</span>
                <span>post-generation</span>
              </div>

              <div className="rounded-2xl border border-white/12 bg-white/[0.04] p-5">
                <p className="text-[11px] tracking-[0.18em] uppercase text-primary-foreground/50">
                  Verdicts
                </p>
                <ul className="mt-4 space-y-3">
                  {VERDICTS.map((v) => (
                    <li key={v.id} className="flex items-start gap-3">
                      <span
                        className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                        style={{
                          background:
                            v.sev === "fail"
                              ? "var(--coral)"
                              : v.sev === "warn"
                                ? "var(--butter)"
                                : "var(--lime)",
                        }}
                      />
                      <div>
                        <p className="text-[12.5px] text-primary-foreground">
                          <span className="tracking-[0.12em]">{v.id}</span>
                          <span className="text-primary-foreground/40"> · {v.line}</span>
                        </p>
                        <p className="text-[12.5px] leading-snug text-primary-foreground/60">
                          {v.note}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="display text-[2.4rem] leading-[0.95] text-primary-foreground md:text-[3.2rem]">
                Quality for <span className="em-serif">all AI code</span>.
              </p>
            </div>
          </article>
        </Reveal>


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
