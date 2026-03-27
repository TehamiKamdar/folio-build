export const NAV_LINKS = ["Features", "How it works", "Pricing"];

export const FEATURES = [
  { icon: "⚡", title: "2-minute setup", desc: "Fill a structured form — no blank canvas paralysis. Your portfolio is ready before your coffee gets cold." },
  { icon: "🎨", title: "4 pro themes", desc: "Sage, Slate, Warm, Mono — each a full design system. Switch anytime with zero rework." },
  { icon: "🔗", title: "Shareable link", desc: "Get yourname.folio.build instantly. Connect a custom domain with one click on Pro." },
  { icon: "⬇", title: "HTML export", desc: "Download a clean, self-contained HTML file. Host anywhere — Netlify, GitHub Pages, your own server." },
  { icon: "✦", title: "AI bio writer", desc: "Describe yourself in 3 words. Our AI writes a compelling bio in your voice — edit or accept." },
  { icon: "📊", title: "View analytics", desc: "See who's visiting your portfolio, where they're from, and which sections they read longest." },
];

export const STEPS = [
  { num: "01", title: "Fill your details", desc: "Name, bio, experience, projects, skills — a clean form with zero design decisions needed." },
  { num: "02", title: "Pick your theme", desc: "Choose from 4 professionally crafted themes. Live preview updates instantly as you type." },
  { num: "03", title: "Publish or export", desc: "Share a live link or download a standalone HTML file. Update anytime — changes go live instantly." },
];

export const TESTIMONIALS = [
  { initials: "SR", name: "Sara R.", role: "Frontend Developer", gradient: "linear-gradient(135deg,#7c6dfa,#a78bfa)", text: "I built my portfolio in 8 minutes and got a recruiter DM the next day. The Slate theme is stunning." },
  { initials: "JK", name: "James K.", role: "Product Designer", gradient: "linear-gradient(135deg,#059669,#4ade80)", text: "I've tried Notion portfolios, GitHub pages, everything. folio.build is the only one that actually looks professional." },
  { initials: "AM", name: "Aisha M.", role: "Data Scientist", gradient: "linear-gradient(135deg,#c97d4e,#fbbf24)", text: "The AI bio writer is genuinely good. It nailed my tone on the first try. I just edited two words." },
];

export const PLANS = [
  {
    name: "Free", price: "$0", period: "forever", highlight: false, cta: "Start free",
    features: [
      { text: "1 portfolio", on: true }, { text: "3 themes", on: true },
      { text: "folio.build subdomain", on: true }, { text: "HTML export", on: true },
      { text: "Custom domain", on: false }, { text: "AI bio writer", on: false }, { text: "Analytics", on: false },
    ],
  },
  {
    name: "Pro", price: "$7", period: "per month", highlight: true, cta: "Get Pro →",
    features: [
      { text: "Unlimited portfolios", on: true }, { text: "All 4 themes + new drops", on: true },
      { text: "Custom domain", on: true }, { text: "HTML export", on: true },
      { text: "AI bio writer", on: true }, { text: "View analytics", on: true }, { text: "Priority support", on: true },
    ],
  },
  {
    name: "Team", price: "$19", period: "per month", highlight: false, cta: "Contact us",
    features: [
      { text: "Everything in Pro", on: true }, { text: "5 team members", on: true },
      { text: "Shared brand kit", on: true }, { text: "White-label export", on: true },
      { text: "Dedicated onboarding", on: true }, { text: "SLA guarantee", on: true }, { text: "Invoice billing", on: true },
    ],
  },
];

export const LOGOS = ["Google", "Stripe", "Figma", "Notion", "Vercel", "Linear"];