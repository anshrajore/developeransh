import logo from "@/assets/nayamarg-logo.jpeg.asset.json";
import { Magnetic, Parallax, SplitReveal } from "@/lib/motion";
import { Reveal } from "@/lib/reveal";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 md:pt-44 md:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-32 h-[520px] w-[520px] rounded-full opacity-[0.16] blur-3xl"
        style={{ background: "radial-gradient(circle, var(--cobalt), transparent 65%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-64 -left-40 h-[420px] w-[420px] rounded-full opacity-[0.14] blur-3xl"
        style={{ background: "radial-gradient(circle, var(--ember), transparent 65%)" }}
      />

      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow">Founder · AI Builder · Software Engineer</p>
          </Reveal>

          <h1 className="display mt-6 text-[13vw] leading-[0.92] sm:text-[9vw] lg:text-[5.4rem] xl:text-[6.2rem]">
            <SplitReveal as="span" className="block" text="I build technology" />
            <SplitReveal as="span" className="block" delay={0.08} text="that turns" />
            <span className="em-serif">ambitious</span> ideas
            <SplitReveal as="span" className="block" delay={0.16} text="into something real." />
          </h1>

          <Reveal delay={180}>
            <p className="mt-8 max-w-xl text-[17px] leading-relaxed text-muted-foreground">
              Founder, engineer and builder working across AI, full-stack systems, products and
              technology communities.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Magnetic>
              <a
                href="#work"
                className="rounded-full bg-foreground px-6 py-3 text-sm text-primary-foreground transition-transform duration-500 hover:-translate-y-0.5"
              >
                Explore my work ↗
              </a>
              </Magnetic>
              <Magnetic>
              <a
                href="#about"
                className="rounded-full border border-foreground/25 px-6 py-3 text-sm transition-colors duration-500 hover:bg-foreground/5"
              >
                About me ↗
              </a>
              </Magnetic>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-[13px] text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                Currently building → NayaMarg + NEST
              </span>
              <span>Nashik, India</span>
            </div>
          </Reveal>
        </div>

        {/* Editorial collage */}
        <Reveal delay={200} className="lg:col-span-5">
          <div className="relative mx-auto h-[440px] w-full max-w-[440px] sm:h-[500px]">
            <div
              className="absolute top-2 left-0 h-[300px] w-[62%] rotate-[-3deg] overflow-hidden rounded-[26px] border border-border p-6"
              style={{ background: "linear-gradient(160deg, var(--butter), var(--ember))" }}
            >
              <p className="text-[10px] font-semibold tracking-[0.2em] text-ink/70 uppercase">
                Founder
              </p>
              <p className="display mt-16 text-[2.4rem] text-ink">NayaMarg</p>
              <p className="mt-2 text-[13px] text-ink/70">
                AI-powered workforce infrastructure for India.
              </p>
            </div>

            <div className="absolute top-24 right-0 w-[48%] rotate-[3deg] rounded-[24px] border border-border bg-card p-5 shadow-[0_30px_70px_-45px_rgba(0,0,0,0.5)]">
              <img
                src={logo.url}
                alt="NayaMarg brand mark"
                loading="lazy"
                className="h-24 w-full rounded-[14px] object-contain"
              />
              <p className="mt-4 text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
                AI / Full Stack / Product
              </p>
            </div>

            <div
              className="absolute bottom-16 left-6 w-[52%] -rotate-[2deg] rounded-[24px] p-5 text-primary-foreground"
              style={{ background: "var(--ink)" }}
            >
              <p className="text-[10px] tracking-[0.2em] opacity-60 uppercase">Founder</p>
              <p className="display mt-6 text-[2rem]">NEST</p>
              <p className="mt-1 text-[12px] opacity-70">
                Nashik Ecosystem for Startups &amp; Technology
              </p>
            </div>

            <div
              className="absolute right-4 bottom-4 rounded-[18px] px-4 py-3"
              style={{ background: "var(--cobalt)" }}
            >
              <p className="text-[10px] tracking-[0.18em] text-white/70 uppercase">AI for Good</p>
              <p className="text-[15px] font-semibold text-white">1st Runner-Up</p>
            </div>

            <span className="absolute top-0 right-10 rounded-full border border-border bg-card px-3 py-1 text-[11px]">
              Agentic AI
            </span>
            <span className="absolute bottom-40 -left-2 rounded-full border border-border bg-card px-3 py-1 text-[11px]">
              RAG
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
