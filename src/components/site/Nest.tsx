import buildWithNashik from "@/assets/build-with-nashik.png.asset.json";
import nestEvents from "@/assets/nest-events.png.asset.json";
import { Reveal } from "@/lib/reveal";

const INITIATIVES = [
  {
    name: "Build With Nashik",
    body: "A building initiative that gets students and developers shipping real products for the city they live in.",
  },
  {
    name: "Push & Pool Villathon",
    body: "Taking technology problem-solving out of campuses and into villages around Nashik.",
  },
  {
    name: "SUNHACKS",
    body: "A GenAI hackathon organised at record-breaking scale, recognised by the Asia Book of Records.",
  },
];

export function Nest() {
  return (
    <section id="nest" className="border-t border-border py-24 md:py-32">
      <div className="shell">
        <div className="overflow-hidden rounded-[32px] bg-foreground text-primary-foreground">
          <div className="grid gap-12 p-8 md:p-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-6">
              <p className="text-[11px] tracking-[0.2em] uppercase opacity-60">
                Ecosystem building
              </p>
              <h2 className="display mt-6 text-[11vw] leading-[0.92] sm:text-[4.6rem]">
                NEST
              </h2>
              <p className="mt-4 text-[15px] opacity-70">
                Nashik Ecosystem for Startups &amp; Technology
              </p>
              <p className="mt-8 max-w-lg text-[16px] leading-relaxed opacity-80">
                Talent in tier-2 cities rarely lacks ability — it lacks proximity to opportunity.
                NEST is a student-driven ecosystem connecting students, developers, founders,
                startups, mentors and companies, so that Nashik builds its own gravity instead of
                exporting its best people.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                {["Students", "Developers", "Founders", "Startups", "Mentors", "Companies"].map(
                  (t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/20 px-4 py-1.5 text-[12px] opacity-80"
                    >
                      {t}
                    </span>
                  ),
                )}
              </div>
            </Reveal>

            <div className="grid gap-4 lg:col-span-6">
              <Reveal>
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src={nestEvents.url}
                    alt="NEST initiatives poster featuring Ansh Rajore"
                    loading="lazy"
                    className="h-56 w-full rounded-[22px] border border-white/15 object-cover transition-transform duration-700 hover:-translate-y-1"
                  />
                  <img
                    src={buildWithNashik.url}
                    alt="Build With Nashik event poster"
                    loading="lazy"
                    className="h-56 w-full rounded-[22px] border border-white/15 object-cover transition-transform duration-700 hover:-translate-y-1"
                  />
                </div>
              </Reveal>
              {INITIATIVES.map((item, i) => (
                <Reveal key={item.name} delay={i * 100}>
                  <article className="rounded-[22px] border border-white/15 bg-white/[0.04] p-7 transition-colors duration-500 hover:bg-white/[0.08]">
                    <h3 className="text-[19px] font-semibold">{item.name}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed opacity-70">{item.body}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
