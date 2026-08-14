import { useEffect, useState } from "react";

import { NAV } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-700",
          scrolled
            ? "border-b border-border bg-background/75 backdrop-blur-xl"
            : "border-b border-transparent",
        )}
      >
        <div className="shell grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 md:h-[70px]">
          <a
            href="#top"
            className="truncate text-[13px] font-semibold tracking-[0.16em] uppercase"
          >
            Ansh Rajore
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[13px] text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full border border-foreground/25 px-4 py-1.5 text-[12px] font-medium tracking-wide transition-colors duration-500 hover:bg-foreground hover:text-primary-foreground"
            >
              Let&apos;s build ↗
            </a>
          </nav>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="flex h-9 w-9 shrink-0 flex-col items-center justify-center gap-[5px] rounded-full border border-border md:hidden"
          >
            <span className="h-px w-4 bg-foreground" />
            <span className="h-px w-4 bg-foreground" />
          </button>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-[60] bg-background transition-opacity duration-500 md:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="shell flex h-16 items-center justify-between">
          <span className="text-[13px] font-semibold tracking-[0.16em] uppercase">Menu</span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="h-9 w-9 rounded-full border border-border text-lg leading-none"
          >
            ×
          </button>
        </div>
        <div className="shell mt-10 flex flex-col gap-6">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="display text-[13vw] leading-[1]"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex w-fit rounded-full border border-foreground/25 px-5 py-2 text-sm"
          >
            Let&apos;s build ↗
          </a>
        </div>
      </div>
    </>
  );
}
