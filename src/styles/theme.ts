export const C = {
  bg: "#070708", surface: "#0f0f11", surface2: "#16161a",
  border: "rgba(255,255,255,0.07)", border2: "rgba(255,255,255,0.12)",
  text: "#f0f0f2", muted: "#6b6b7a", muted2: "#9898a8",
  accent: "#7c6dfa", accent2: "#a78bfa", green: "#4ade80",
};

export const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist:wght@300;400;500;600;700&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { background: ${C.bg}; color: ${C.text}; font-family: 'Geist', sans-serif; overflow-x: hidden; }
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: ${C.bg}; }
  ::-webkit-scrollbar-thumb { background: ${C.surface2}; border-radius: 4px; }
  .serif { font-family: 'Instrument Serif', serif; }
  @keyframes fadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
  @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
  @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(.8)} }
  .fade-up { animation: fadeUp 0.7s cubic-bezier(.22,1,.36,1) both; }
  .fade-in { animation: fadeIn 0.6s ease both; }
  .d1{animation-delay:.05s} .d2{animation-delay:.12s} .d3{animation-delay:.19s}
  .d4{animation-delay:.26s} .d5{animation-delay:.33s} .d6{animation-delay:.4s}
  .pulse { animation: pulse 2s infinite; }
  .noise-overlay::before {
    content:''; position:fixed; inset:0; pointer-events:none; z-index:999;
    opacity:.025;
    background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    background-size:256px;
  }
  .hero-grid-bg {
    position:absolute; inset:0; pointer-events:none;
    background-image: linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px);
    background-size: 48px 48px;
    mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 0%, transparent 70%);
  }
  .feat-card { transition: background 0.2s; }
  .feat-card:hover { background: ${C.surface} !important; }
  .price-card-default:hover { border-color: ${C.border2} !important; }
`;