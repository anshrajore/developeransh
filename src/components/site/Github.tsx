import { useQuery } from "@tanstack/react-query";

import { FALLBACK_REPOS, LINKS } from "@/data/portfolio";
import { Reveal } from "@/lib/reveal";

type Repo = {
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  updated_at: string;
  fork?: boolean;
};

async function fetchRepos(): Promise<Repo[]> {
  const res = await fetch(
    "https://api.github.com/users/anshrajore/repos?per_page=100&sort=updated",
  );
  if (!res.ok) throw new Error("GitHub unavailable");
  const data = (await res.json()) as Repo[];
  return data
    .filter((r) => !r.fork)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 9);
}

export function Github() {
  const { data, isPending, isError } = useQuery({
    queryKey: ["github-repos"],
    queryFn: fetchRepos,
    staleTime: 1000 * 60 * 30,
    retry: 1,
  });

  const repos = (isError ? (FALLBACK_REPOS as unknown as Repo[]) : (data ?? [])).slice(0, 9);

  return (
    <section id="github" className="border-t border-border py-24 md:py-32">
      <div className="shell">
        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <Reveal>
            <p className="eyebrow">The archive</p>
            <h2 className="display mt-6 text-[10vw] leading-[0.95] sm:text-[4.6rem]">
              Everything I&apos;ve <span className="em-serif">shipped</span>, publicly.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <a
              href={LINKS.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 rounded-full border border-foreground/25 px-5 py-2.5 text-sm transition-colors duration-500 hover:bg-foreground hover:text-primary-foreground"
            >
              View GitHub ↗
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {isPending && !isError
            ? Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="card-edit h-52 animate-pulse bg-muted/50" />
              ))
            : repos.map((repo, i) => (
                <Reveal key={repo.name} delay={(i % 3) * 90}>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="card-edit lift flex h-full flex-col p-7"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="min-w-0 truncate text-[17px] font-semibold">{repo.name}</h3>
                      <span className="shrink-0 text-muted-foreground">↗</span>
                    </div>
                    <p className="mt-3 line-clamp-3 text-[14px] leading-relaxed text-muted-foreground">
                      {repo.description ?? "No description provided."}
                    </p>
                    <div className="mt-auto flex flex-wrap items-center gap-4 pt-6 text-[12px] text-muted-foreground">
                      {repo.language ? (
                        <span className="inline-flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-cobalt" />
                          {repo.language}
                        </span>
                      ) : null}
                      <span>★ {repo.stargazers_count}</span>
                      <span>⑂ {repo.forks_count}</span>
                    </div>
                  </a>
                </Reveal>
              ))}
        </div>
      </div>
    </section>
  );
}
