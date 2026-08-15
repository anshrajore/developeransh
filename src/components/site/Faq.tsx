import { FAQ } from "@/data/portfolio";
import { Reveal } from "@/lib/reveal";

export function Faq() {
  return (
    <section id="faq" className="border-t border-border py-24 md:py-32">
      <div className="shell grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p className="eyebrow">FAQ</p>
          <h2 className="display mt-6 text-[10vw] leading-[0.95] sm:text-[3.6rem]">
            The short <span className="em-serif">answers</span>.
          </h2>
        </Reveal>

        <div className="lg:col-span-8">
          {FAQ.map((item, i) => (
            <Reveal key={item.q} delay={(i % 4) * 60}>
              <details className="group border-b border-border py-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-[17px] font-semibold">
                  {item.q}
                  <span
                    aria-hidden
                    className="mt-1 text-[18px] leading-none text-muted-foreground transition-transform duration-500 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-muted-foreground">
                  {item.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
