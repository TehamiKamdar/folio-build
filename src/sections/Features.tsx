import Eyebrow from "../components/Eyebrow";
import { FEATURES } from "../data/data";
import { useInView } from "../hooks/useInView";
import { C } from "../styles/theme";

export default function Features() {
  const [featRef, featVisible] = useInView(0.1);
  return (
    <section id="features" style={{ padding: "96px 40px" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div ref={featRef} className={featVisible ? "fade-up" : ""} style={{ opacity: featVisible ? undefined : 0 }}>
          <Eyebrow>Features</Eyebrow>
          <h2 className="serif" style={{ fontSize: "clamp(2rem,4vw,3.2rem)", letterSpacing: "-.03em", lineHeight: 1.1, marginBottom: 14 }}>
            Built for people who'd rather<br /><em style={{ fontStyle: "italic", color: C.accent2 }}>ship than design.</em>
          </h2>
          <p style={{ fontSize: ".95rem", color: C.muted2, maxWidth: 480, lineHeight: 1.75, marginBottom: 56 }}>
            Every feature is built to save you time and make you look good.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: C.border, border: `1px solid ${C.border}`, borderRadius: 16, overflow: "hidden" }}>
          {FEATURES.map((f, _) => (
            <div key={f.title} className="feat-card" style={{ background: C.bg, padding: "32px 28px" }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, marginBottom: 20, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", background: "rgba(124,109,250,.1)", border: "1px solid rgba(124,109,250,.2)" }}>
                {f.icon}
              </div>
              <h3 style={{ fontSize: ".95rem", fontWeight: 600, color: C.text, marginBottom: 8 }}>{f.title}</h3>
              <p style={{ fontSize: ".82rem", color: C.muted2, lineHeight: 1.7 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}