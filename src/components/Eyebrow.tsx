import type { ReactNode } from "react";
import { C } from "../styles/theme";

interface Props {
  children: ReactNode;
  center?: boolean;
}

export default function Eyebrow({ children, center }: Props) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: ".68rem", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: C.accent2, marginBottom: 14, justifyContent: center ? "center" : undefined,
    }}>
      <span style={{ width: 16, height: 1, background: C.accent2, display: "inline-block" }} />
      {children}
    </div>
  );
}