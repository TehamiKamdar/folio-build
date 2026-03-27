import type { ReactNode, CSSProperties } from "react";
import { C } from "../styles/theme";

interface Props {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}

export default function Badge({ children, style, className }: Props) {
  return (
    <span
      className={className}
      style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(124,109,250,.1)", border: "1px solid rgba(124,109,250,.25)", color: C.accent2, fontSize: ".72rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", padding: "5px 14px", borderRadius: 100, ...style,
      }}
    >
      {children}
    </span>
  );
}