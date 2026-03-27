import { C } from "../styles/theme";

export default function BrowserMockup() {
  return (
    <div style={{ marginTop: 56, width: "100%", maxWidth: 860, borderRadius: 16, overflow: "hidden", border: `1px solid ${C.border2}`, boxShadow: `0 40px 100px rgba(0,0,0,.6), 0 0 0 1px rgba(255,255,255,.04) inset`,
    }}>
      {/* bar */}
      <div style={{ background: "#1a1a1e", padding: "11px 16px", display: "flex", alignItems: "center", gap: 12, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ display: "flex", gap: 6 }}>
          {["#ff5f56", "#ffbd2e", "#27c93f"].map(c => <span key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />)}
        </div>
        <div style={{ flex: 1, background: C.surface2, border: `1px solid ${C.border}`, borderRadius: 6, padding: "5px 12px", fontSize: ".72rem", color: C.muted, textAlign: "center" }}>
          folio.build/dashboard
        </div>
      </div>
      {/* body */}
      <div style={{ background: C.surface, display: "grid", gridTemplateColumns: "200px 1fr", minHeight: 320 }}>
        {/* sidebar */}
        <div style={{ background: "#0d0d10", borderRight: `1px solid ${C.border}`, padding: "20px 14px" }}>
          <div className="serif" style={{ fontSize: ".95rem", color: C.text, marginBottom: 20, padding: "0 4px" }}>
            folio<span style={{ color: C.accent2 }}>.</span>build
          </div>
          <div style={{ fontSize: ".6rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: C.muted, marginBottom: 8, padding: "0 4px" }}>Sections</div>
          {[["👤", "About", true], ["💼", "Experience", false], ["⚡", "Skills", false], ["🚀", "Projects", false], ["🎓", "Education", false], ["🔗", "Social", false]
          ].map(([icon, label, active], i) => (
            <div key={`${label}-${i}`} style={{ padding: "7px 10px", borderRadius: 7, fontSize: ".72rem", color: active ? C.accent2 : C.muted, background: active ? "rgba(124,109,250,.12)" : "transparent", display: "flex", alignItems: "center", gap: 8, marginBottom: 2, }}>
              <span style={{ fontSize: ".8rem", opacity: .7 }}>{icon}</span>
              {label}
            </div>
          ))}
          <div style={{ fontSize: ".6rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: C.muted, margin: "16px 0 8px", padding: "0 4px" }}>Theme</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
            {([["#2d6a4f", true], ["#1e2530", false], ["#c97d4e", false], ["#555", false],
            ] as [string, boolean][]).map(([bg, sel], i) => (
              <div
                key={i}
                style={{
                  height: 28,
                  borderRadius: 5,
                  background: bg,
                  border: `2px solid ${sel ? C.accent2 : "transparent"}`
                }}
              />
            ))}
          </div>
        </div>
        {/* main */}
        <div style={{ padding: "28px 32px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
            <div>
              <div style={{ fontSize: ".72rem", fontWeight: 600, color: C.text, marginBottom: 2 }}>About & Bio</div>
              <div style={{ fontSize: ".65rem", color: C.muted }}>Your hero section details</div>
            </div>
            <div style={{ background: "linear-gradient(135deg,#7c6dfa,#a78bfa)", color: "#fff", border: "none", padding: "8px 18px", borderRadius: 7, fontSize: ".72rem", fontWeight: 600, cursor: "pointer" }}>
              👁 Preview
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14 }}>
            {[
              ["First Name", "Alex", true],
              ["Last Name", "Morgan", false]
            ].map(([label, val, active], i) => (
              <div key={`${label}-${i}`}>
                <div style={{
                  fontSize: ".62rem",
                  fontWeight: 600,
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  color: C.muted,
                  marginBottom: 6
                }}>
                  {label}
                </div>

                <div style={{
                  background: active ? "rgba(124,109,250,.06)" : "rgba(255,255,255,.04)",
                  border: `1px solid ${active ? "rgba(124,109,250,.5)" : C.border2}`,
                  borderRadius: 7,
                  padding: "8px 12px",
                  fontSize: ".72rem",
                  color: C.text
                }}>
                  {val}
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginBottom: 14 }}>
            <div style={{ fontSize: ".62rem", fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", color: C.muted, marginBottom: 6 }}>Professional Title</div>
            <div style={{ background: "rgba(255,255,255,.04)", border: `1px solid ${C.border2}`, borderRadius: 7, padding: "8px 12px", fontSize: ".72rem", color: C.text }}>Full-Stack Developer & Designer</div>
          </div>
          <div style={{ marginBottom: 14 }}>
            <div style={{ fontSize: ".62rem", fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", color: C.muted, marginBottom: 6 }}>Bio</div>
            <div style={{ background: "rgba(255,255,255,.04)", border: `1px solid ${C.border2}`, borderRadius: 7, padding: "8px 12px", fontSize: ".7rem", color: C.muted2, lineHeight: 1.6, minHeight: 56 }}>
              I build clean, fast products that people actually love using. 5 years turning ideas into shipped software...
            </div>
          </div>
          <div>
            <div style={{ fontSize: ".62rem", fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", color: C.muted, marginBottom: 8 }}>Skills</div>
            {["React", "TypeScript", "Figma", "+ Add"].map(tag => (
              <span key={tag} style={{ display: "inline-flex", alignItems: "center", gap: 4, background: "rgba(124,109,250,.12)", border: "1px solid rgba(124,109,250,.2)", color: C.accent2, fontSize: ".62rem", padding: "3px 9px", borderRadius: 20, margin: "0 3px 3px 0" }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}