import { C } from "../styles/theme";

export function CTA() {
  return (
    <section style={{ padding: "120px 40px", textAlign: "center", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 300, background: "radial-gradient(ellipse,rgba(124,109,250,.15) 0%,transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "relative", zIndex: 1 }}>
        <h2 className="serif" style={{ fontSize: "clamp(2.4rem,5vw,4rem)", letterSpacing: "-.04em", lineHeight: 1.1, marginBottom: 16 }}>
          Your next opportunity<br />starts with <em style={{ fontStyle: "italic", color: C.accent2 }}>a great portfolio.</em>
        </h2>
        <p style={{ color: C.muted2, fontSize: ".95rem", maxWidth: 420, margin: "0 auto 36px", lineHeight: 1.7 }}>
          Join thousands of developers, designers, and creators who use folio.build to land their next role.
        </p>
        <button style={{ background: `linear-gradient(135deg,${C.accent},${C.accent2})`, color: "#fff", border: "none", padding: "14px 32px", borderRadius: 10, fontFamily: "'Geist',sans-serif", fontSize: ".95rem", fontWeight: 600, cursor: "pointer", boxShadow: "0 4px 20px rgba(124,109,250,.25)", transition: "all .25s" }}
          onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 10px 36px rgba(124,109,250,.4)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(124,109,250,.25)"; }}>
          Build mine now — it's free →
        </button>
        <div style={{ marginTop: 14, fontSize: ".75rem", color: C.muted }}>No credit card · 2 minute setup · Cancel anytime</div>
      </div>
    </section>
  );
}