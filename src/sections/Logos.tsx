import { LOGOS } from "../data/data";
import { C } from "../styles/theme";

export function Logos() {

  return (
    <div style={{ padding: 40, textAlign: "center", borderTop: `1px solid ${C.border}` }}>
      <p style={{ fontSize: ".72rem", color: C.muted, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 20 }}>Trusted by professionals at</p>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 40, flexWrap: "wrap", opacity: .3 }}>
        {LOGOS.map(l => <span key={l} style={{ fontSize: ".9rem", fontWeight: 600, letterSpacing: "-.02em", color: C.text }}>{l}</span>)}
      </div>
    </div>
  );
}