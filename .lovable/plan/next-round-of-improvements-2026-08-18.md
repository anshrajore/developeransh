# Next round of improvements

The site is complete section-wise. The highest-value remaining work is depth, credibility and polish — not more sections.

## 1. Project detail pages (biggest gap)
Right now every project lives inside one card on the home page. Add real routes:
- `/work/atelier`, `/work/nayamarg`, `/work/sanjeevanix`
- Each page: problem, approach, architecture, results, gallery, links
- Atelier page centerpiece: before / critique / after example plus the benchmark scoreboard
- Cards on the home page link through; each page gets its own SEO head and og tags

## 2. Case-study proof over claims
- Add real numbers and outcome rows to each project (users, latency, prize, adoption)
- Screenshot/diagram assets instead of text-only mockups where available

## 3. Motion and interaction polish
- Respect `prefers-reduced-motion` across GSAP, tilt and cursor (accessibility + no jank)
- Disable the custom cursor and tilt on touch devices
- Page transition when moving between home and project pages
- Lazy-load below-the-fold heavy sections so first paint stays fast

## 4. Performance and quality
- Serve images at correct sizes with `width`/`height` + `loading="lazy"` to remove layout shift
- Cache the GitHub fetch and show a skeleton instead of a jump
- Keyboard focus states on all interactive elements; alt text audit

## 5. Content additions worth having
- Press / media mentions strip (newspaper clipping, event coverage)
- Talks page or expanded speaking list with dates and venues
- Downloadable resume button in the nav and contact block
- `/contact` form wired to Lovable Cloud so messages actually land somewhere

## 6. Small but noticeable
- Dark mode toggle using the existing token system
- 404 route styled in the editorial system
- OG image generated for social sharing

## Suggested order
1. Project detail pages (Atelier first)
2. Reduced-motion + touch guards, image sizing, lazy sections
3. Press strip + resume + contact form
4. Dark mode, 404, OG image

Tell me which of these to build, or say "all" and I'll work through the order above.
