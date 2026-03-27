import Eyebrow from "../components/Eyebrow";
import { PLANS } from "../data/data";
import { C } from "../styles/theme";
import { useInView } from "../hooks/useInView";
import { useAuthAction } from "../hooks/useAuthAction";

export function Pricing() {
  const [pricingRef, pricingVisible] = useInView(0.1);
  const handleAuth = useAuthAction();

  return (
    <section id="pricing" style={{ padding: "96px 40px", background: C.surface }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div ref={pricingRef} style={{ textAlign: "center", maxWidth: 480, margin: "0 auto 56px" }}>
          <div className={pricingVisible ? "fade-up" : ""} style={{ opacity: pricingVisible ? undefined : 0 }}>
            <Eyebrow center>Pricing</Eyebrow>
            <h2 className="serif" style={{ fontSize: "clamp(2rem,4vw,3.2rem)", letterSpacing: "-.03em", lineHeight: 1.1, marginBottom: 14 }}>
              Simple pricing.<br /><em style={{ fontStyle: "italic", color: C.accent2 }}>No surprises.</em>
            </h2>
            <p style={{ fontSize: ".95rem", color: C.muted2, lineHeight: 1.75 }}>Start free, upgrade when you're ready.</p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
          {PLANS.map((p, i) => (
            <div key={p.name} className={`${pricingVisible ? "fade-up" : ""} ${p.highlight ? "" : "price-card-default"}`}
              style={{
                background: p.highlight ? "linear-gradient(145deg,rgba(124,109,250,.06),#0f0f11)" : C.surface,
                border: `1px solid ${p.highlight ? "rgba(124,109,250,.4)" : C.border}`,
                borderRadius: 16, padding: 32, position: "relative",
                transition: "border-color .2s",
                opacity: pricingVisible ? undefined : 0,
                animationDelay: `${i * 0.1}s`,
              }}>
              {p.highlight && (
                <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: `linear-gradient(135deg,${C.accent},${C.accent2})`, color: "#fff", fontSize: ".65rem", fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", padding: "4px 14px", borderRadius: 100, whiteSpace: "nowrap" }}>
                  Most popular
                </div>
              )}
              <div style={{ fontSize: ".72rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: C.muted2, marginBottom: 12 }}>{p.name}</div>
              <div className="serif" style={{ fontSize: "3rem", lineHeight: 1, letterSpacing: "-.04em", marginBottom: 4, color: p.highlight ? C.accent2 : C.text }}>{p.price}</div>
              <div style={{ fontSize: ".78rem", color: C.muted, marginBottom: 24 }}>{p.period}</div>
              <hr style={{ border: "none", borderTop: `1px solid ${C.border}`, marginBottom: 22 }} />
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
                {p.features.map(f => (
                  <li key={f.text} style={{ fontSize: ".82rem", color: f.on ? C.muted2 : C.muted, display: "flex", alignItems: "center", gap: 8, textDecoration: f.on ? "none" : "line-through" }}>
                    <span style={{ color: f.on ? C.green : C.muted, fontWeight: f.on ? 700 : 400, fontSize: ".75rem", flexShrink: 0 }}>{f.on ? "✓" : "—"}</span>
                    {f.text}
                  </li>
                ))}
              </ul>
              <button
                style={{
                  width: "100%", padding: 12, borderRadius: 10,
                  fontFamily: "'Geist',sans-serif", fontSize: ".85rem", fontWeight: 600,
                  cursor: "pointer", transition: "all .2s", letterSpacing: "-.01em",
                  background: p.highlight ? `linear-gradient(135deg,${C.accent},${C.accent2})` : "transparent",
                  color: p.highlight ? "#fff" : C.muted2,
                  border: p.highlight ? "none" : `1px solid ${C.border2}`,
                }}
                onMouseEnter={e => { if (p.highlight) { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(124,109,250,.3)"; } else { e.currentTarget.style.color = C.text; } }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; if (!p.highlight) e.currentTarget.style.color = C.muted2; }}
                onClick={handleAuth}
              >
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}