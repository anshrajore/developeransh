import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  useEffect,
  useRef,
  type ElementType,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

let registered = false;
function ensureGsap() {
  if (typeof window === "undefined") return false;
  if (!registered) {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
  return true;
}

function reduced() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/* ------------------------------------------------------------------ */
/* Scroll progress bar                                                 */
/* ------------------------------------------------------------------ */

export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === "undefined") return;
    let raf = 0;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      el.style.transform = `scaleX(${p})`;
      raf = 0;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <div aria-hidden ref={ref} className="scroll-progress" />;
}

/* ------------------------------------------------------------------ */
/* Ambient tint layer — background eases between section moods         */
/* ------------------------------------------------------------------ */

export function TintLayer() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ensureGsap()) return;
    const layer = ref.current;
    if (!layer) return;

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-tint]"),
    );
    const triggers = sections.map((section) =>
      ScrollTrigger.create({
        trigger: section,
        start: "top 60%",
        end: "bottom 40%",
        onToggle: (self) => {
          if (!self.isActive) return;
          gsap.to(layer, {
            backgroundColor: section.dataset["tint"] || "var(--ivory)",
            duration: 1.1,
            ease: "power2.out",
            overwrite: true,
          });
        },
      }),
    );

    const onLeaveTop = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "top top+=1",
      onLeaveBack: () =>
        gsap.to(layer, { backgroundColor: "var(--ivory)", duration: 1, ease: "power2.out" }),
    });

    return () => {
      triggers.forEach((t) => t.kill());
      onLeaveTop.kill();
    };
  }, []);

  return <div aria-hidden ref={ref} className="tint-layer" />;
}

/* ------------------------------------------------------------------ */
/* Split-word headline reveal                                          */
/* ------------------------------------------------------------------ */

export function SplitReveal({
  text,
  className,
  as: Tag = "span",
  delay = 0,
}: {
  text: string;
  className?: string;
  as?: ElementType;
  delay?: number;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ensureGsap()) return;
    const el = ref.current;
    if (!el) return;
    const words = el.querySelectorAll(".sw-inner");
    if (reduced()) {
      gsap.set(words, { yPercent: 0, opacity: 1 });
      return;
    }
    const tween = gsap.fromTo(
      words,
      { yPercent: 118, opacity: 0, rotate: 3 },
      {
        yPercent: 0,
        opacity: 1,
        rotate: 0,
        duration: 1.15,
        ease: "expo.out",
        stagger: 0.055,
        delay,
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
      },
    );
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [delay, text]);

  return (
    <Tag ref={ref as never} className={className}>
      {text.split(" ").map((word, i) => (
        <span key={`${word}-${i}`} className="sw-word">
          <span className="sw-inner">{word}</span>
        </span>
      ))}
    </Tag>
  );
}

/* ------------------------------------------------------------------ */
/* Parallax                                                            */
/* ------------------------------------------------------------------ */

export function Parallax({
  children,
  className,
  distance = 70,
}: {
  children: ReactNode;
  className?: string;
  distance?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ensureGsap() || reduced()) return;
    const el = ref.current;
    if (!el) return;
    const tween = gsap.fromTo(
      el,
      { y: distance / 2 },
      {
        y: -distance / 2,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 1 },
      },
    );
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [distance]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Magnetic hover                                                      */
/* ------------------------------------------------------------------ */

export function Magnetic({
  children,
  className,
  strength = 0.35,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced()) return;
    const q = gsap.quickTo(el, "x", { duration: 0.6, ease: "power3.out" });
    const qy = gsap.quickTo(el, "y", { duration: 0.6, ease: "power3.out" });

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      q((e.clientX - (r.left + r.width / 2)) * strength);
      qy((e.clientY - (r.top + r.height / 2)) * strength);
    };
    const onLeave = () => {
      q(0);
      qy(0);
    };
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [strength]);

  return (
    <span ref={ref} className={cn("inline-block will-change-transform", className)}>
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Image reveal — clip-path wipe + slow scale                          */
/* ------------------------------------------------------------------ */

export function ImageReveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ensureGsap()) return;
    const el = ref.current;
    if (!el) return;
    const img = el.querySelector("img");
    if (reduced()) {
      gsap.set(el, { clipPath: "inset(0% 0% 0% 0%)" });
      return;
    }
    const tl = gsap.timeline({
      scrollTrigger: { trigger: el, start: "top 85%", once: true },
    });
    tl.fromTo(
      el,
      { clipPath: "inset(0% 0% 100% 0%)" },
      { clipPath: "inset(0% 0% 0% 0%)", duration: 1.3, ease: "expo.out" },
    );
    if (img) tl.fromTo(img, { scale: 1.25 }, { scale: 1, duration: 1.6, ease: "expo.out" }, 0);
    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Counter                                                             */
/* ------------------------------------------------------------------ */

export function Counter({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ensureGsap()) return;
    const el = ref.current;
    if (!el) return;
    const match = value.match(/^(\D*)([\d.]+)(.*)$/);
    if (!match || reduced()) return;
    const [, pre = "", num = "0", post = ""] = match;
    const target = parseFloat(num);
    const decimals = num.includes(".") ? 1 : 0;
    const obj = { n: 0 };
    const tween = gsap.to(obj, {
      n: target,
      duration: 1.6,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 90%", once: true },
      onUpdate: () => {
        el.textContent = `${pre}${obj.n.toFixed(decimals)}${post}`;
      },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
