export type SiteImage = {
  src: string;
  alt: string;
  label: string;
  tone: string;
};

const asset = (filename: string) => `/assets/${filename}`;

export const IMAGES = {
  anshPortrait: {
    src: asset("ansh-portrait.png"),
    alt: "Ansh Rajore, founder and AI engineer",
    label: "Ansh Rajore",
    tone: "linear-gradient(140deg, var(--cobalt), var(--violet-a))",
  },
  buildWithNashik: {
    src: asset("build-with-nashik.png"),
    alt: "Build With Nashik event poster",
    label: "Build With Nashik",
    tone: "linear-gradient(140deg, var(--butter), var(--ember))",
  },
  nayamargLogo: {
    src: asset("nayamarg-logo.jpeg"),
    alt: "NayaMarg logo - connecting people to opportunities",
    label: "NayaMarg",
    tone: "linear-gradient(140deg, var(--butter), var(--lime-a))",
  },
  nestEvents: {
    src: asset("nest-events.png"),
    alt: "NEST initiatives poster featuring Ansh Rajore",
    label: "NEST Events",
    tone: "linear-gradient(140deg, var(--ink), var(--cobalt))",
  },
  nestFounder: {
    src: asset("nest-founder.png"),
    alt: "Ansh Rajore - founder portrait",
    label: "NEST Founder",
    tone: "linear-gradient(140deg, var(--violet-a), var(--coral))",
  },
  recap1: {
    src: asset("recap-1.png"),
    alt: "SUNHACKS - lead organizer, GenAI hackathon at record scale",
    label: "SUNHACKS",
    tone: "linear-gradient(140deg, var(--butter), var(--coral))",
  },
  recap2: {
    src: asset("recap-2.png"),
    alt: "National Startup Day 2025 - Prarambh",
    label: "Prarambh",
    tone: "linear-gradient(140deg, var(--cobalt), var(--lime-a))",
  },
  recap3: {
    src: asset("recap-3.png"),
    alt: "Pitching at the BRICS Youth Council pre-consultation",
    label: "BRICS Pitch",
    tone: "linear-gradient(140deg, var(--violet-a), var(--butter))",
  },
  recap4: {
    src: asset("recap-4.png"),
    alt: "TechUdaan - leading the team through an on-site disruption",
    label: "TechUdaan",
    tone: "linear-gradient(140deg, var(--ink), var(--ember))",
  },
  recap5: {
    src: asset("recap-5.png"),
    alt: "Smart Axis My India Hackathon - 1st Runner-Up",
    label: "Smart Axis",
    tone: "linear-gradient(140deg, var(--coral), var(--cobalt))",
  },
  recap6: {
    src: asset("recap-6.webp"),
    alt: "HackPrix National Level Hackathon - 1st Runner-Up",
    label: "HackPrix",
    tone: "linear-gradient(140deg, var(--lime-a), var(--violet-a))",
  },
  sanjeevanixLogo: {
    src: asset("sanjeevanix-logo.png"),
    alt: "SanjeevaniX logo - Blood Bridge AI autonomous platform",
    label: "SanjeevaniX",
    tone: "linear-gradient(140deg, var(--cobalt), var(--violet-a))",
  },
} satisfies Record<string, SiteImage>;
