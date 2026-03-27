import { STEPS } from "../data/data";
import Eyebrow from "../components/Eyebrow";
import { C } from "../styles/theme";
import { useInView } from "../hooks/useInView";

export function Steps() {
  const [stepsRef, stepsVisible] = useInView(0.1);
  return (
    <section id="how-it-works" style={{ padding: "96px 40px", background: C.surface }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div ref={stepsRef} className={stepsVisible ? "fade-up" : ""} style={{ opacity: stepsVisible ? undefined : 0 }}>
          <Eyebrow>How it works</Eyebrow>
          <h2 className="serif" style={{ fontSize: "clamp(2rem,4vw,3.2rem)", letterSpacing: "-.03em", lineHeight: 1.1, marginBottom: 56 }}>
            Three steps.<br /><em style={{ fontStyle: "italic", color: C.accent2 }}>One great portfolio.</em>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 32, position: "relative" }}>
          <div style={{ position: "absolute", top: 32, left: "calc(16.66% + 16px)", right: "calc(16.66% + 16px)", height: 1, background: `linear-gradient(90deg,transparent,${C.border2},transparent)` }} />
          {STEPS.map((s, i) => (
            <div key={s.num} className={stepsVisible ? `fade-up` : ""} style={{ textAlign: "center", opacity: stepsVisible ? undefined : 0, animationDelay: `${i * 0.12}s` }}>
              <div style={{ width: 64, height: 64, borderRadius: "50%", margin: "0 auto 24px", display: "flex", alignItems: "center", justifyContent: "center", background: C.bg, border: `1px solid ${C.border2}`, position: "relative", zIndex: 1 }}>
                <span className="serif" style={{ fontSize: "1.4rem", color: C.accent2 }}>{s.num}</span>
              </div>
              <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: 10 }}>{s.title}</h3>
              <p style={{ fontSize: ".82rem", color: C.muted2, lineHeight: 1.7, maxWidth: 220, margin: "0 auto" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}