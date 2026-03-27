import { NAV_LINKS } from "../data/data";
import { useAuthAction } from "../hooks/useAuthAction";
import { C } from "../styles/theme";

export default function Navbar() {
  const handleAuth = useAuthAction();
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 40px", height: 60, background: "rgba(7,7,8,0.75)", backdropFilter: "blur(20px)", borderBottom: `1px solid ${C.border}`,
    }}>
      <div className="serif" style={{ fontSize: "1.25rem", letterSpacing: "-.02em" }}>
        folio<span style={{ color: C.accent2 }}>.</span>build
      </div>
      <div style={{ display: "flex", gap: 32 }}>
        {NAV_LINKS.map(l => (
          <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`}
            style={{ fontSize: ".82rem", color: C.muted2, textDecoration: "none", transition: "color .2s" }}
            onMouseEnter={e => e.currentTarget.style.color = C.text}
            onMouseLeave={e => e.currentTarget.style.color = C.muted2}>{l}</a>
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <button
          onClick={handleAuth}
          className="block text-[.82rem] px-10 py-5 rounded-lg font-semibold transition-all duration-200 hover:-translate-y-[1px]"
          style={{
            background: C.accent,
            color: "#fff",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = C.accent2)}
          onMouseLeave={(e) => (e.currentTarget.style.background = C.accent)}
        >
          Get started free →
        </button>
      </div>
    </nav>
  );
}