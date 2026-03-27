import Badge from "../components/Badge";
import BrowserMockup from "../components/BrowserMockup";
import { C } from "../styles/theme";
import { useInView } from "../hooks/useInView";

export default function Hero() {
  const [heroRef, heroVisible] = useInView(0.05);

  return (
    <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "100px 40px 60px", textAlign: "center", position: "relative", overflow: "hidden" }}>
      {/* bg */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(124,109,250,.12) 0%, transparent 70%), radial-gradient(ellipse 40% 30% at 80% 60%, rgba(74,222,128,.06) 0%, transparent 60%)" }} />
      <div className="hero-grid-bg" />

      <div ref={heroRef} style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Badge style={{ marginBottom: 28 }} className={`fade-up d1 ${heroVisible ? "" : "opacity-0"}`}>
          <span className="pulse" style={{ width: 6, height: 6, borderRadius: "50%", background: C.green, display: "inline-block" }} />
          Now in beta — free for early users
        </Badge>

        <h1 className={`serif fade-up d2`} style={{ fontSize: "clamp(3rem,7vw,5.5rem)", lineHeight: 1.0, letterSpacing: "-.03em", marginBottom: 22, opacity: heroVisible ? undefined : 0 }}>
          Your resume,<br />
          <em style={{ fontStyle: "italic", color: C.accent2 }}>redesigned</em><br />
          as a portfolio.
        </h1>

        <p className={`fade-up d3`} style={{ fontSize: "1rem", color: C.muted2, maxWidth: 480, lineHeight: 1.7, marginBottom: 36, opacity: heroVisible ? undefined : 0 }}>
          Fill a form. Pick a theme. Get a professional portfolio site — live in under 2 minutes. No design skills required.
        </p>

        <div className="fade-up d4" style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", justifyContent: "center", marginBottom: 16, opacity: heroVisible ? undefined : 0 }}>
          <button style={{ background: `linear-gradient(135deg,${C.accent},${C.accent2})`, color: "#fff", border: "none", padding: "13px 28px", borderRadius: 10, fontFamily: "'Geist',sans-serif", fontSize: ".92rem", fontWeight: 600, cursor: "pointer", boxShadow: "0 4px 20px rgba(124,109,250,.25)", transition: "all .25s" }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(124,109,250,.4)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(124,109,250,.25)"; }}>
            Build my portfolio — it's free
          </button>
        </div>

        <div className="fade-up d5" style={{ display: "flex", alignItems: "center", gap: 20, fontSize: ".75rem", color: C.muted, opacity: heroVisible ? undefined : 0 }}>
          {["No credit card", "No design skills", "Ready in 2 minutes"].map(note => (
            <span key={note} style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <span style={{ color: C.green, fontSize: ".7rem" }}>✓</span> {note}
            </span>
          ))}
        </div>

        <div className="fade-up d6" style={{ opacity: heroVisible ? undefined : 0 }}>
          <BrowserMockup />
        </div>
      </div>
    </section>
  );
}