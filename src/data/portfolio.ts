export const NAV = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "NEST", href: "#nest" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const LINKS = {
  github: "https://github.com/anshrajore",
  linkedin: "https://www.linkedin.com/in/anshrajore",
  email: "mailto:anshrajore@gmail.com",
};

export const STATS = [
  { value: "25+", label: "GitHub repositories" },
  { value: "20+", label: "Hackathon experiences" },
  { value: "2", label: "Ventures founded — NayaMarg, NEST" },
  { value: "Lead", label: "Team Dark Arcane" },
];

export const PILLARS = [
  {
    n: "01",
    title: "BUILD",
    body: "Products, prototypes and systems — from an empty repository to something people can use.",
    tone: "butter",
  },
  {
    n: "02",
    title: "THINK",
    body: "Understand the system behind the problem before optimising a single line of it.",
    tone: "cobalt",
  },
  {
    n: "03",
    title: "LEAD",
    body: "Teams, hackathons and communities. Building people is part of building products.",
    tone: "coral",
  },
  {
    n: "04",
    title: "IMPACT",
    body: "Technology is only valuable when it changes something outside the codebase.",
    tone: "violet",
  },
] as const;

export const TECH = [
  {
    group: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind",
      "GSAP",
      "Three.js",
      "React Three Fiber",
    ],
  },
  { group: "Backend", items: ["Node.js", "Express", "REST APIs"] },
  { group: "Database", items: ["MongoDB", "Mongoose", "Supabase", "Firebase"] },
  {
    group: "AI",
    items: [
      "Generative AI",
      "LLMs",
      "RAG",
      "Agentic AI",
      "Sentence-BERT",
      "TensorFlow",
      "Scikit-learn",
      "LLaMA",
    ],
  },
  { group: "Cloud", items: ["AWS", "Vercel", "Netlify", "Railway", "GitHub Actions"] },
  { group: "Automation", items: ["n8n", "Vapi", "AI workflows", "Data pipelines"] },
];

export type Achievement = {
  n: string;
  event: string;
  result: string;
  badge: "WINNER" | "RUNNER-UP" | "FINALIST" | "SELECTED" | "ORGANIZER" | "LEAD";
  role?: string;
  context: string;
  tone: string;
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    n: "01",
    event: "AI for Good Hackathon",
    result: "1st Runner-Up",
    badge: "RUNNER-UP",
    role: "Team Dark Arcane",
    context:
      "1,965 registrations · 187 teams advanced to Round 2 · 15 teams reached the Final Pitch.",
    tone: "cobalt",
  },
  {
    n: "02",
    event: "Hack2Infinity",
    result: "Winner",
    badge: "WINNER",
    role: "Team Dark Arcane",
    context: "National-level hackathon — end-to-end build and pitch.",
    tone: "butter",
  },
  {
    n: "03",
    event: "Smart Axis My India Hackathon",
    result: "1st Runner-Up",
    badge: "RUNNER-UP",
    role: "Team Dark Arcane",
    context: "From ideation to execution under pressure, judged on real problem-solving.",
    tone: "coral",
  },
  {
    n: "04",
    event: "HackPrix",
    result: "1st Runner-Up",
    badge: "RUNNER-UP",
    role: "Team Dark Arcane",
    context: "National-level hackathon, Season 2 — competing with builders across the country.",
    tone: "violet",
  },
  {
    n: "05",
    event: "NASA Space Apps Challenge",
    result: "Backend Lead",
    badge: "LEAD",
    context: "Led backend engineering on an SDG / climate-focused challenge.",
    tone: "cobalt",
  },
  {
    n: "06",
    event: "Smart India Hackathon",
    result: "National-Level Participation",
    badge: "FINALIST",
    context: "Women-safety application built for a national problem statement.",
    tone: "ember",
  },
  {
    n: "07",
    event: "Mumbai Hacks",
    result: "GenAI Hackathon",
    badge: "SELECTED",
    context: "Participated in a GenAI hackathon associated with a Guinness World Records attempt.",
    tone: "lime",
  },
  {
    n: "08",
    event: "Kumbhathon",
    result: "Technology Innovator",
    badge: "SELECTED",
    context: "Innovation programme focused on city-scale technology problems in Nashik.",
    tone: "butter",
  },
  {
    n: "09",
    event: "Prarambh · National Startup Day",
    result: "Selected Innovator",
    badge: "SELECTED",
    context: "Represented Dark Arcane at National Startup Day 2025.",
    tone: "coral",
  },
  {
    n: "10",
    event: "SUNHACKS",
    result: "Lead Organizer",
    badge: "ORGANIZER",
    context:
      "Organised a GenAI hackathon at record-breaking scale, recognised by the Asia Book of Records.",
    tone: "violet",
  },
  {
    n: "11",
    event: "TechUdaan",
    result: "Lead Organizer",
    badge: "ORGANIZER",
    context:
      "Organised the event through a serious disruption on-site — chose safety and calm execution over panic.",
    tone: "ember",
  },
  {
    n: "12",
    event: "BRICS Youth Council Pre-Consultation",
    result: "Selected to Pitch",
    badge: "SELECTED",
    context: "Pitched at a national-level BRICS entrepreneurship platform.",
    tone: "cobalt",
  },
];

export const TIMELINE = [
  {
    year: "2023",
    title: "Started building",
    points: ["Began the Computer Science journey at Sandip University", "First projects, first repos"],
  },
  {
    year: "2024",
    title: "AI + full-stack exploration",
    points: ["Full-stack engineering", "Hackathon circuit", "Internship experience"],
  },
  {
    year: "2025",
    title: "Scale and leadership",
    points: [
      "SUNHACKS as lead organizer",
      "NayaMarg begins",
      "Dark Arcane on the national hackathon circuit",
    ],
  },
  {
    year: "2026",
    title: "Ecosystems",
    points: [
      "Agentic AI systems",
      "NEST — Nashik Ecosystem for Startups & Technology",
      "Build With Nashik · Push & Pool Villathon",
    ],
  },
];

export const FAQ = [
  {
    q: "Who is Ansh Rajore?",
    a: "A founder, AI builder and full-stack engineer based in Nashik, India. He works across AI systems, product engineering and technology communities — currently building NayaMarg and NEST.",
  },
  {
    q: "What does Ansh build?",
    a: "AI-native products and the systems around them: conversational and agentic interfaces, matching and recommendation engines, automation pipelines and the full-stack products they live inside.",
  },
  {
    q: "What is NayaMarg?",
    a: "An AI-powered workforce platform connecting skilled, semi-skilled and blue-collar workers with relevant employment opportunities through conversational AI, worker profiling and semantic matching.",
  },
  {
    q: "What is NEST?",
    a: "Nashik Ecosystem for Startups & Technology — a student-driven community connecting students, developers, founders, startups, mentors and companies so that talent doesn't have to leave the city to find opportunity.",
  },
  {
    q: "What is Dark Arcane?",
    a: "Ansh's building and hackathon team, focused on agentic AI systems: retrieval-augmented generation, persistent memory and multi-step autonomous workflows.",
  },
  {
    q: "What technologies does Ansh work with?",
    a: "React, Next.js, TypeScript, Node.js, Supabase and MongoDB on the product side; LLMs, RAG, agentic frameworks, Sentence-BERT and AWS on the AI side; n8n and Vapi for automation.",
  },
  {
    q: "What kind of collaborations is Ansh open to?",
    a: "Product and AI engineering work, founding-team collaborations, community and ecosystem initiatives, and problems that need someone to own them from problem to system to shipped product.",
  },
  {
    q: "What is Ansh building right now?",
    a: "NayaMarg, NEST, agentic AI systems and the Build With Nashik and Push & Pool Villathon initiatives.",
  },
];

export const FALLBACK_REPOS = [
  {
    name: "Mindwave-Companion",
    description: "AI companion experiment exploring conversational support interfaces.",
    language: "TypeScript",
    stargazers_count: 0,
    forks_count: 0,
    html_url: "https://github.com/anshrajore",
    updated_at: "",
    topics: ["ai"],
  },
  {
    name: "DarkArce",
    description: "Team Dark Arcane workspace and experiments.",
    language: "JavaScript",
    stargazers_count: 0,
    forks_count: 0,
    html_url: "https://github.com/anshrajore",
    updated_at: "",
    topics: ["hackathon"],
  },
  {
    name: "Sundown-Studio-Clone",
    description: "Motion-heavy studio site recreation — animation and scroll study.",
    language: "CSS",
    stargazers_count: 0,
    forks_count: 0,
    html_url: "https://github.com/anshrajore",
    updated_at: "",
    topics: ["web"],
  },
  {
    name: "Decentralized-Voting-System",
    description: "Blockchain-based voting experiment.",
    language: "Solidity",
    stargazers_count: 0,
    forks_count: 0,
    html_url: "https://github.com/anshrajore",
    updated_at: "",
    topics: ["web3"],
  },
  {
    name: "Apple-15-Pro",
    description: "Three.js / React Three Fiber product showcase build.",
    language: "JavaScript",
    stargazers_count: 0,
    forks_count: 0,
    html_url: "https://github.com/anshrajore",
    updated_at: "",
    topics: ["web", "three"],
  },
  {
    name: "Cognifyz-Java-Development-Tasks",
    description: "Java development task set from an internship programme.",
    language: "Java",
    stargazers_count: 0,
    forks_count: 0,
    html_url: "https://github.com/anshrajore",
    updated_at: "",
    topics: [],
  },
];
