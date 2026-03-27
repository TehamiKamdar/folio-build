import { C } from "../styles/theme";

export function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${C.border}`, padding: "32px 40px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <div className="serif" style={{ fontSize: "1.1rem" }}>folio<span style={{ color: C.accent2 }}>.</span>build</div>
      <div style={{ display: "flex", gap: 24 }}>
        {["Privacy", "Terms", "Twitter", "GitHub"].map(l => (
          <a key={l} href="#" style={{ fontSize: ".78rem", color: C.muted, textDecoration: "none", transition: "color .2s" }}
            onMouseEnter={e => e.currentTarget.style.color = C.muted2}
            onMouseLeave={e => e.currentTarget.style.color = C.muted}>{l}</a>
        ))}
      </div>
      <div style={{ fontSize: ".72rem", color: C.muted }}>© 2025 folio.build</div>
    </footer>
  );
}