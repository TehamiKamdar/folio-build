import Eyebrow from "../components/Eyebrow";
import { TESTIMONIALS } from "../data/data";
import { C } from "../styles/theme";
import { useInView } from "../hooks/useInView";

export function Testimonials() {
  const [testiRef, testiVisible] = useInView(0.1);
  return (
    <section id="social-proof" style={{ padding: "96px 40px" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div ref={testiRef} className={testiVisible ? "fade-up" : ""} style={{ opacity: testiVisible ? undefined : 0 }}>
          <Eyebrow>Social proof</Eyebrow>
          <h2 className="serif" style={{ fontSize: "clamp(2rem,4vw,3.2rem)", letterSpacing: "-.03em", lineHeight: 1.1, marginBottom: 56 }}>
            People are landing<br /><em style={{ fontStyle: "italic", color: C.accent2 }}>real opportunities.</em>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={t.name} className={testiVisible ? "fade-up" : ""} style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 14, padding: 24, opacity: testiVisible ? undefined : 0, animationDelay: `${i * 0.1}s` }}>
              <div style={{ color: "#f59e0b", fontSize: ".8rem", marginBottom: 12, letterSpacing: 2 }}>★★★★★</div>
              <p style={{ fontSize: ".85rem", color: C.muted2, lineHeight: 1.7, marginBottom: 16, fontStyle: "italic" }}>"{t.text}"</p>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: t.gradient, display: "flex", alignItems: "center", justifyContent: "center", fontSize: ".75rem", fontWeight: 700, color: "#fff" }}>{t.initials}</div>
                <div>
                  <div style={{ fontSize: ".78rem", fontWeight: 600, color: C.text }}>{t.name}</div>
                  <div style={{ fontSize: ".7rem", color: C.muted }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}